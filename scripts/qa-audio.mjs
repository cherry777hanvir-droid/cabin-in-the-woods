// Audio + integration QA for the synthesized soundscape.
import { chromium } from 'playwright-core';
import fs from 'node:fs';

const chromePaths = [
  'C:/Program Files/Google/Chrome/Application/chrome.exe',
  'C:/Program Files (x86)/Google/Chrome/Application/chrome.exe',
];
const executablePath = chromePaths.find((p) => fs.existsSync(p));
const browser = await chromium.launch({
  executablePath,
  headless: true,
  args: [
    '--use-angle=swiftshader',
    '--enable-unsafe-swiftshader',
    '--ignore-gpu-blocklist',
    '--autoplay-policy=no-user-gesture-required',
    '--hide-scrollbars',
  ],
});
const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
const errors = [];
page.on('pageerror', (e) => errors.push(String(e)));
page.on('console', (m) => {
  if (m.type() === 'error' && !m.text().includes('404')) errors.push(m.text());
});
await page.goto('http://127.0.0.1:4173/', { waitUntil: 'networkidle', timeout: 60000 });
await page.waitForFunction('window.__scene && window.__scene.ready', null, { timeout: 120000 });
await page.waitForTimeout(1200);

const result = {};
result.dockBefore = await page.evaluate(() => ({
  soundButton: !!document.querySelector('#sound-toggle'),
  pressed: document.querySelector('#sound-toggle')?.getAttribute('aria-pressed'),
  dockChildren: document.querySelector('#environment-dock')?.children.length,
  audio: window.__scene.getAudioState(),
}));

// A user gesture on the scene should unlock the AudioContext and start wind.
await page.mouse.click(660, 430);
await page.waitForTimeout(1800);
result.afterGesture = await page.evaluate(() => window.__scene.getAudioState());
result.afterGesture.pressed = await page.getAttribute('#sound-toggle', 'aria-pressed');
await page.screenshot({ path: 'qa/qa-audio-on.png', timeout: 120000 });

// Mute via the new dock control.
await page.click('#sound-toggle');
await page.waitForTimeout(1400);
result.muted = await page.evaluate(() => ({
  ...window.__scene.getAudioState(),
  pressed: document.querySelector('#sound-toggle')?.getAttribute('aria-pressed'),
  label: document.querySelector('#sound-toggle .dock-btn-label')?.textContent,
}));

// Unmute.
await page.click('#sound-toggle');
await page.waitForTimeout(1400);
result.unmuted = await page.evaluate(() => ({
  ...window.__scene.getAudioState(),
  pressed: document.querySelector('#sound-toggle')?.getAttribute('aria-pressed'),
}));

// Rain and storm should alter the ambience without errors.
await page.evaluate(() => { window.__scene.setWeather('rain'); window.__scene.teleport(0, 8); });
await page.waitForTimeout(1400);
result.rain = await page.evaluate(() => window.__scene.getAudioState());
await page.evaluate(() => window.__scene.setWeather('storm'));
await page.waitForTimeout(1400);
result.storm = await page.evaluate(() => window.__scene.getAudioState());

// Enter interior + light fire; check the fireplace ambience and interaction.
await page.evaluate(() => {
  window.__scene.setWeather('clear');
  window.__scene.enterCabin();
  window.__scene.setFire(true);
});
await page.waitForTimeout(1800);
result.interior = await page.evaluate(() => ({
  ...window.__scene.getAudioState(),
  fire: window.__scene.modules.interior.fireplaceOn,
  mode: window.__scene.player.mode,
}));
await page.screenshot({ path: 'qa/qa-audio-interior.png', timeout: 120000 });

// Door SFX path (no throw) and UI click path.
await page.keyboard.press('v');
await page.waitForTimeout(1800);
result.outside = await page.evaluate(() => ({
  mode: window.__scene.player.mode,
  level: window.__scene.getAudioState().level,
}));

result.errors = errors;
console.log(JSON.stringify(result, null, 2));
await browser.close();
