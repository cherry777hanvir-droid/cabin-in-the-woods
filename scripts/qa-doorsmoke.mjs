import { chromium } from 'playwright-core';
import fs from 'node:fs';
const chromePaths = ['C:/Program Files/Google/Chrome/Application/chrome.exe', 'C:/Program Files (x86)/Google/Chrome/Application/chrome.exe'];
const executablePath = chromePaths.find((p) => fs.existsSync(p));
const browser = await chromium.launch({ executablePath, headless: true, args: ['--use-angle=swiftshader', '--enable-unsafe-swiftshader', '--ignore-gpu-blocklist'] });
const page = await browser.newPage({ viewport: { width: 1280, height: 800 } });
const errors = [];
page.on('pageerror', (e) => errors.push(String(e)));
await page.goto('http://127.0.0.1:4173/', { waitUntil: 'networkidle' });
await page.waitForFunction('window.__scene && window.__scene.ready', null, { timeout: 120000 });
await page.waitForTimeout(1000);
const result = {};
// Door enter/exit
await page.evaluate(() => { window.__scene.teleport(0, 6.2); window.__scene.setInput(true); });
await page.waitForTimeout(400);
await page.keyboard.press('e');
await page.waitForTimeout(2400);
result.afterEnter = await page.evaluate(() => ({ mode: window.__scene.player.mode, doorOpen: window.__scene.modules.cabin.doorOpen }));
await page.keyboard.press('v');
await page.waitForTimeout(3600);
result.afterExit = await page.evaluate(() => ({ mode: window.__scene.player.mode, doorOpen: window.__scene.modules.cabin.doorOpen, pos: window.__scene.getState().position }));
await page.screenshot({ path: 'qa/qa-door-closed.png', timeout: 120000 });
// Winter smoke view from the well side
await page.evaluate(() => {
  const p = window.__scene.modules.player;
  window.__scene.setSeason('winter');
  window.__scene.setWeather('snow');
  window.__scene.setHour(13.2);
  window.__scene.teleport(-7.6, 10.5);
  p.state.yaw = -0.62;
  p.state.orbitPitch = 0.13;
  p.snapCamera();
});
await page.waitForTimeout(5600);
await page.screenshot({ path: 'qa/qa-winter-smoke.png', timeout: 120000 });
result.smokeState = await page.evaluate(() => ({ season: window.__scene.getState().season, doorOpen: window.__scene.modules.cabin.doorOpen }));
result.errors = errors;
console.log(JSON.stringify(result, null, 2));
await browser.close();
