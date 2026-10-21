// Mobile touch controls + winter-snow guard + adaptive music QA.
import { chromium } from 'playwright-core';
import fs from 'node:fs';

const chromePaths = ['C:/Program Files/Google/Chrome/Application/chrome.exe', 'C:/Program Files (x86)/Google/Chrome/Application/chrome.exe'];
const executablePath = chromePaths.find((p) => fs.existsSync(p));
const browser = await chromium.launch({
  executablePath,
  headless: true,
  args: ['--use-angle=swiftshader', '--enable-unsafe-swiftshader', '--ignore-gpu-blocklist'],
});
const context = await browser.newContext({
  viewport: { width: 390, height: 844 },
  screen: { width: 390, height: 844 },
  deviceScaleFactor: 1,
  isMobile: true,
  hasTouch: true,
  userAgent:
    'Mozilla/5.0 (Linux; Android 13; Pixel 7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0 Mobile Safari/537.36',
});
const page = await context.newPage();
const errors = [];
page.on('pageerror', (e) => errors.push(String(e)));
page.on('console', (m) => {
  if (m.type() === 'error' && !m.text().includes('404')) errors.push(m.text());
});
await page.goto('http://127.0.0.1:4173/', { waitUntil: 'networkidle', timeout: 60000 });
await page.waitForFunction('window.__scene && window.__scene.ready', null, { timeout: 120000 });
await page.waitForTimeout(1000);

const result = {};
result.initial = await page.evaluate(() => ({
  mobileVisible: document.querySelector('#mobile-controls')?.classList.contains('is-visible'),
  soundVisible: !!document.querySelector('#sound-toggle'),
  hintHidden: getComputedStyle(document.querySelector('.hint-bar')).display === 'none',
  promptHidden: getComputedStyle(document.querySelector('#interaction-prompt')).display === 'none',
  overflow: document.documentElement.scrollWidth > window.innerWidth,
  snowDisabled: document.querySelector('[data-weather="snow"]')?.disabled,
  actionText: document.querySelector('#mobile-interact .mobile-action-text')?.textContent,
  audio: window.__scene.getAudioState(),
}));

// Screenshot initial touch layout.
await page.screenshot({ path: 'qa/qa-mobile-01.png', timeout: 120000 });

// Drag the left joystick forward.
const stick = await page.locator('#mobile-stick-base').boundingBox();
if (stick) {
  const cx = stick.x + stick.width / 2;
  const cy = stick.y + stick.height / 2;
  await page.mouse.move(cx, cy);
  await page.mouse.down();
  await page.mouse.move(cx, cy - 38, { steps: 4 });
  await page.waitForTimeout(2600);
  result.moving = await page.evaluate(() => window.__scene.getState().position);
  await page.mouse.up();
  await page.waitForTimeout(500);
}
result.afterMove = await page.evaluate(() => ({
  position: window.__scene.getState().position,
  audio: window.__scene.getAudioState(),
}));

// Go to the porch and check the contextual interact button.
await page.evaluate(() => window.__scene.teleport(0, 6.2));
await page.waitForTimeout(700);
result.nearDoor = await page.evaluate(() => ({
  actionText: document.querySelector('#mobile-interact .mobile-action-text')?.textContent,
  disabled: document.querySelector('#mobile-interact')?.disabled,
  available: document.querySelector('#mobile-interact')?.classList.contains('is-available'),
}));
await page.screenshot({ path: 'qa/qa-mobile-door.png', timeout: 120000 });
await page.locator('#mobile-interact').click();
await page.waitForTimeout(2400);
result.entered = await page.evaluate(() => ({
  mode: window.__scene.player.mode,
  actionText: document.querySelector('#mobile-interact .mobile-action-text')?.textContent,
  viewText: document.querySelector('#mobile-view .mobile-action-text')?.textContent,
}));
await page.screenshot({ path: 'qa/qa-mobile-inside.png', timeout: 120000 });

await page.locator('#mobile-view').click();
await page.waitForTimeout(2400);
result.exited = await page.evaluate(() => ({
  mode: window.__scene.player.mode,
  viewText: document.querySelector('#mobile-view .mobile-action-text')?.textContent,
}));

// Snow should be winter-only.
result.snowDefault = await page.evaluate(() => ({
  season: window.__scene.getState().season,
  disabled: document.querySelector('[data-weather="snow"]')?.disabled,
}));
await page.locator('[data-season="winter"]').click();
await page.waitForTimeout(600);
result.snowWinter = await page.evaluate(() => ({
  season: window.__scene.getState().season,
  disabled: document.querySelector('[data-weather="snow"]')?.disabled,
}));
await page.evaluate(() => window.__scene.setWeather('snow'));
await page.waitForTimeout(500);
result.snowOn = await page.evaluate(() => window.__scene.getState().weather);
await page.locator('[data-season="summer"]').click();
await page.waitForTimeout(1600);
result.summer = await page.evaluate(() => ({
  season: window.__scene.getState().season,
  weather: window.__scene.getState().weather,
  disabled: document.querySelector('[data-weather="snow"]')?.disabled,
}));
await page.evaluate(() => window.__scene.setWeather('snow'));
await page.waitForTimeout(500);
result.snowGuard = await page.evaluate(() => window.__scene.getState().weather);

// Adaptive score should be running after the earlier touch gesture.
await page.waitForTimeout(2500);
result.audio = await page.evaluate(() => window.__scene.getAudioState());

result.errors = errors;
console.log(JSON.stringify(result, null, 2));
await browser.close();
