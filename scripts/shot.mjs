// Screenshot harness. Usage:
//   node scripts/shot.mjs --url http://127.0.0.1:5173/graybox.html --out qa/graybox.png
import { chromium } from 'playwright-core';
import fs from 'node:fs';
import path from 'node:path';

const args = process.argv.slice(2);
function arg(name, fallback) {
  const i = args.indexOf(`--${name}`);
  return i >= 0 && args[i + 1] && !args[i + 1].startsWith('--') ? args[i + 1] : fallback;
}
const url = arg('url', 'http://127.0.0.1:5173/');
const out = arg('out', 'qa/shot.png');
const width = Number(arg('w', '1600'));
const height = Number(arg('h', '900'));
const wait = Number(arg('wait', '1400'));
const readyName = arg('ready', '__ready');
const waitForExpr = arg('waitfor', '');
const evalScript = arg('eval', '');
const postEvalWait = Number(arg('postwait', '1200'));
const fullPage = args.includes('--full');
const timeout = Number(arg('timeout', '120000'));

const chromePaths = [
  'C:/Program Files/Google/Chrome/Application/chrome.exe',
  'C:/Program Files (x86)/Google/Chrome/Application/chrome.exe',
  'C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe',
];
const executablePath = chromePaths.find((p) => fs.existsSync(p));
if (!executablePath) {
  console.error('No Chrome/Edge executable found.');
  process.exit(1);
}

fs.mkdirSync(path.dirname(path.resolve(out)), { recursive: true });
const browser = await chromium.launch({
  executablePath,
  headless: true,
  args: [
    '--use-angle=swiftshader',
    '--enable-unsafe-swiftshader',
    '--ignore-gpu-blocklist',
    '--disable-lcd-text',
    '--hide-scrollbars',
    '--force-color-profile=srgb',
  ],
});
const page = await browser.newPage({ viewport: { width, height }, deviceScaleFactor: 1 });
const logs = [];
page.on('console', (msg) => logs.push(`[${msg.type()}] ${msg.text()}`));
page.on('pageerror', (err) => logs.push(`[pageerror] ${err.stack || err.message}`));
page.on('requestfailed', (req) => logs.push(`[requestfailed] ${req.url()} ${req.failure()?.errorText || ''}`));

let status = 0;
try {
  await page.goto(url, { waitUntil: 'networkidle', timeout: 60000 });
  if (waitForExpr) {
    await page.waitForFunction(waitForExpr, null, { timeout });
  } else if (readyName && readyName !== 'none') {
    await page.waitForFunction((n) => Boolean(window[n]), readyName, { timeout });
  }
  await page.waitForTimeout(wait);
  if (evalScript) {
    const result = await page.evaluate(evalScript);
    if (result !== undefined) console.log('EVAL:', JSON.stringify(result));
    await page.waitForTimeout(postEvalWait);
  }
  await page.screenshot({ path: path.resolve(out), fullPage, animations: 'disabled', timeout: 90000 });
  console.log(`Saved ${out} (${width}x${height})`);
} catch (err) {
  status = 1;
  console.error('SCREENSHOT FAILED:', err.message);
} finally {
  if (logs.length) {
    console.log('--- browser log ---');
    for (const line of logs.slice(-40)) console.log(line);
  }
  await browser.close();
}
process.exit(status);
