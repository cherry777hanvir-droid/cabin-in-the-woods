// Functional integration QA for the built app. Run against the preview server.
// Usage: node scripts/qa-interactions.mjs [url]
import { chromium } from 'playwright-core';
import fs from 'node:fs';

const url = process.argv[2] || 'http://127.0.0.1:4173/';
const chromePaths = [
  'C:/Program Files/Google/Chrome/Application/chrome.exe',
  'C:/Program Files (x86)/Google/Chrome/Application/chrome.exe',
];
const executablePath = chromePaths.find((p) => fs.existsSync(p));
if (!executablePath) throw new Error('Chrome not found');

const browser = await chromium.launch({
  executablePath,
  headless: true,
  args: ['--use-angle=swiftshader', '--enable-unsafe-swiftshader', '--ignore-gpu-blocklist', '--hide-scrollbars'],
});
const page = await browser.newPage({ viewport: { width: 1280, height: 800 } });
const errors = [];
page.on('pageerror', (e) => errors.push(String(e)));
page.on('console', (m) => {
  if (m.type() === 'error' && !m.text().includes('404')) errors.push(m.text());
});
await page.goto(url, { waitUntil: 'networkidle', timeout: 60000 });
await page.waitForFunction('window.__scene && window.__scene.ready', null, { timeout: 120000 });
await page.waitForTimeout(1600);

const results = {};
results.default = await page.evaluate(() => window.__scene.getState());
results.ui = await page.evaluate(() => ({
  slider: !!document.querySelector('#time-slider'),
  seasons: document.querySelectorAll('[data-season]').length,
  weathers: document.querySelectorAll('[data-weather]').length,
  prompts: document.querySelectorAll('#interaction-prompt').length,
  dock: !!document.querySelector('#environment-dock'),
  loaderGone: !document.querySelector('#ui-loading'),
  mode: document.querySelector('#ui-root')?.dataset.mode,
  statusClock: document.querySelector('#environment-dock')?.textContent?.includes(':'),
}));

// --- UI controls ------------------------------------------------------------
await page.click('[data-weather="rain"]');
await page.waitForTimeout(700);
results.rain = await page.evaluate(() => window.__scene.getState());
await page.click('[data-season="winter"]');
await page.waitForTimeout(700);
results.winter = await page.evaluate(() => window.__scene.getState());
await page.click('[data-time-preset="night"]');
await page.waitForTimeout(600);
results.nightPreset = await page.evaluate(() => ({
  hourTarget: window.__scene.getState().hourTarget,
  activePreset: window.__scene.getState().activePreset,
}));
await page.click('#auto-toggle');
await page.waitForTimeout(400);
results.auto = await page.evaluate(() => ({
  timeMode: window.__scene.getState().timeMode,
  activePreset: window.__scene.getState().activePreset,
}));
await page.click('[data-season="autumn"]');
await page.click('[data-weather="clear"]');
await page.evaluate(() => {
  window.__scene.setHour(16.9);
  window.__scene.teleport(0, 6.2);
  window.__scene.setInput(true);
});
await page.waitForTimeout(1600);
results.nearDoor = await page.evaluate(() => ({
  position: window.__scene.getState().position,
  prompt: window.__scene.getPrompt(),
}));
await page.screenshot({ path: 'qa/qa-door-prompt.png', timeout: 120000 });

// --- E enters the cabin -----------------------------------------------------
await page.keyboard.press('e');
await page.waitForTimeout(2200);
results.afterEnter = await page.evaluate(() => ({
  mode: window.__scene.player.mode,
  position: window.__scene.getState().position,
  uiMode: document.querySelector('#ui-root')?.dataset.mode,
  prompt: window.__scene.getPrompt(),
  doorOpen: window.__scene.modules.cabin.doorOpen,
}));
await page.screenshot({ path: 'qa/qa-entered.png', timeout: 120000 });

// --- interior interactions --------------------------------------------------
results.fireBefore = await page.evaluate(() => window.__scene.modules.interior.fireplaceOn);
await page.evaluate(() => window.__scene.interact('fireplace'));
await page.waitForTimeout(900);
results.fireAfter = await page.evaluate(() => window.__scene.modules.interior.fireplaceOn);
await page.screenshot({ path: 'qa/qa-interior-fire.png', timeout: 120000 });
await page.evaluate(() => window.__scene.interact('curtains-left'));
await page.waitForTimeout(800);
results.curtains = await page.evaluate(() => window.__scene.modules.interior.curtainsOpen);

// --- bird note: open, close via ×, reopen ----------------------------------
await page.evaluate(() => window.__scene.interact('bird-note'));
await page.waitForTimeout(700);
results.birdOpen = await page.evaluate(() => ({
  panel: window.__scene.modules.ui.isPanelOpen(),
  text: document.querySelector('#note-title')?.textContent,
  inputEnabled: window.__scene.player.isInputEnabled(),
}));
await page.screenshot({ path: 'qa/qa-bird-note.png', timeout: 120000 });
await page.click('#note-close');
await page.waitForTimeout(600);
results.birdClosed = await page.evaluate(() => ({
  panel: window.__scene.modules.ui.isPanelOpen(),
  tracker: window.__scene.modules.interior._debug.state().birdNoteOpen,
  inputEnabled: window.__scene.player.isInputEnabled(),
}));
await page.evaluate(() => window.__scene.interact('bird-note'));
await page.waitForTimeout(700);
results.birdReopened = await page.evaluate(() => ({
  panel: window.__scene.modules.ui.isPanelOpen(),
  text: document.querySelector('#note-title')?.textContent,
}));
await page.click('#note-close');
await page.waitForTimeout(500);

// --- V exits back outside ---------------------------------------------------
await page.keyboard.press('v');
await page.waitForTimeout(2200);
results.afterExit = await page.evaluate(() => ({
  mode: window.__scene.player.mode,
  position: window.__scene.getState().position,
  uiMode: document.querySelector('#ui-root')?.dataset.mode,
  prompt: window.__scene.getPrompt(),
}));
await page.screenshot({ path: 'qa/qa-outside.png', timeout: 120000 });

results.errors = errors;
console.log(JSON.stringify(results, null, 2));
await browser.close();
