
const puppeteer = require('puppeteer-extra');
const StealthPlugin = require('puppeteer-extra-plugin-stealth');
puppeteer.use(StealthPlugin());
const fs = require('fs');
const path = require('path');

async function getWebpage(url) {
  try {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(url, { waitUntil: 'networkidle2', timeout: 60000 });
    const html = await page.content();

    // Save all downloaded HTML files as html.html
    const filename = 'html.html';

    // Save to project root directory
    const outputPath = path.join(__dirname, '..', filename);

    fs.writeFileSync(outputPath, html);
    console.log(`Successfully saved the webpage to ${outputPath}`);
    await browser.close();
  } catch (error) {
    console.error('Error fetching the webpage:', error);
  }
}

const url = process.argv[2];

if (!url) {
  console.log('Please provide a URL.');
  console.log('Usage: node weblink_to_html_stealth.js <URL>');
} else {
  getWebpage(url);
}
