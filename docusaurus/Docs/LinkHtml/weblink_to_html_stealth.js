
const puppeteer = require('puppeteer-extra');
const StealthPlugin = require('puppeteer-extra-plugin-stealth');
puppeteer.use(StealthPlugin());
const fs = require('fs');
const path = require('path');

// Create downloads directory if it doesn't exist
const downloadsDir = path.join(__dirname, 'downloads');
if (!fs.existsSync(downloadsDir)) {
  fs.mkdirSync(downloadsDir, { recursive: true });
}

async function getWebpage(url) {
  let browser;
  try {
    browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(url, { waitUntil: 'networkidle2', timeout: 60000 });
    const html = await page.content();

    // Generate filename from URL
    const urlObject = new URL(url);
    let filename = urlObject.hostname + urlObject.pathname;
    filename = filename.replace(/[^a-zA-Z0-9]/g, '_');
    filename = filename.replace(/_+/g, '_');
    filename = filename.replace(/^_|_$/g, '');
    if (filename === '') {
      filename = 'index';
    }
    filename = filename + '.html';

    // Save to downloads directory
    const outputPath = path.join(downloadsDir, filename);

    fs.writeFileSync(outputPath, html);
    console.log(`Successfully saved the webpage to ${outputPath}`);
    return { url, filename, path: outputPath };
  } catch (error) {
    console.error(`Error fetching the webpage ${url}:`, error);
    return { url, error: error.message };
  } finally {
    if (browser) {
      await browser.close();
    }
  }
}

async function getWebpages(urls) {
  console.log(`Fetching ${urls.length} webpages...`);
  
  const results = [];
  for (const url of urls) {
    const result = await getWebpage(url);
    results.push(result);
  }
  
  console.log('\nResults:');
  results.forEach(result => {
    if (result.error) {
      console.log(`❌ ${result.url} - Error: ${result.error}`);
    } else {
      console.log(`✅ ${result.url} - Saved as: ${result.filename}`);
    }
  });
  
  return results;
}

// Parse command line arguments
const args = process.argv.slice(2);

if (args.length === 0) {
  console.log('Please provide URLs.');
  console.log('Usage: node weblink_to_html_stealth.js <URL1> [URL2] [URL3] ...');
  console.log('   or: node weblink_to_html_stealth.js --file <filepath>');
  process.exit(1);
}

if (args[0] === '--file' && args[1]) {
  // Read URLs from file
  try {
    const fileContent = fs.readFileSync(args[1], 'utf-8');
    const urls = fileContent.split('\n').filter(url => url.trim() !== '');
    getWebpages(urls);
  } catch (error) {
    console.error('Error reading file:', error);
    process.exit(1);
  }
} else {
  // Process URLs from command line arguments
  getWebpages(args);
}
