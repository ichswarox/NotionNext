const express = require('express');
const cors = require('cors');
const puppeteer = require('puppeteer-extra');
const StealthPlugin = require('puppeteer-extra-plugin-stealth');
const fs = require('fs');
const path = require('path');

puppeteer.use(StealthPlugin());

const app = express();
const port = 3000;

app.use(cors());

app.get('/api/fetch-html', async (req, res) => {
  const { url } = req.query;

  if (!url) {
    return res.status(400).send('URL is required');
  }

  let browser;
  try {
    browser = await puppeteer.launch({ headless: true });
    const page = await browser.newPage();
    await page.goto(url, { waitUntil: 'networkidle2' });
    const content = await page.content();

    // Save all downloaded HTML files as html.html
    const filename = 'html.html';
    
    // Save to project root directory (absolute path)
    const projectRoot = path.resolve(__dirname, '..', '..', '..');
    const outputPath = path.join(projectRoot, filename);
    console.log(`Saving file to: ${outputPath}`);
    fs.writeFileSync(outputPath, content);

    res.send(content);
  } catch (error) {
    console.error(error);
    res.status(500).send('Error fetching URL with Stealth Puppeteer');
  } finally {
    if (browser) {
      await browser.close();
    }
  }
});

app.listen(port, () => {
  console.log(`Backend server listening at http://localhost:${port}`);
});