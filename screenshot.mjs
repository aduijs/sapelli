import { createRequire } from 'module';
const puppeteer = createRequire(import.meta.url)('C:/Users/ASUS/AppData/Local/Temp/puppeteer-test/node_modules/puppeteer');
import { existsSync, mkdirSync, readdirSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const screenshotDir = join(__dirname, 'temporary screenshots');

if (!existsSync(screenshotDir)) mkdirSync(screenshotDir, { recursive: true });

const url = process.argv[2] || 'http://localhost:3000';
const label = process.argv[3] ? `-${process.argv[3]}` : '';

// Find next available number
const existing = readdirSync(screenshotDir).filter(f => f.startsWith('screenshot-') && f.endsWith('.png'));
const nums = existing.map(f => parseInt(f.match(/screenshot-(\d+)/)?.[1] || 0));
const nextNum = nums.length ? Math.max(...nums) + 1 : 1;
const filename = `screenshot-${nextNum}${label}.png`;
const filepath = join(screenshotDir, filename);

const browser = await puppeteer.launch({
  executablePath: 'C:/Users/ASUS/.cache/puppeteer/chrome/win64-146.0.7680.153/chrome-win64/chrome.exe',
  args: ['--no-sandbox', '--disable-setuid-sandbox'],
});

// Try to find Chrome if default path doesn't work
let page;
try {
  page = await browser.newPage();
} catch {
  await browser.close();
  const b2 = await puppeteer.launch({ args: ['--no-sandbox'] });
  page = await b2.newPage();
}

await page.setViewport({ width: 1440, height: 900, deviceScaleFactor: 1.5 });
await page.goto(url, { waitUntil: 'networkidle2', timeout: 30000 });
await new Promise(r => setTimeout(r, 1500));
await page.screenshot({ path: filepath, fullPage: false });
await browser.close();
console.log(`Screenshot saved: temporary screenshots/${filename}`);
