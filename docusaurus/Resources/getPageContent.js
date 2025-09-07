const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  
  try {
    // Navigate to the URL
    await page.goto('https://www.blendermarket.com/products/aaa-clouds-and-cloud-mixer', { waitUntil: 'networkidle2' });
    
    // Get the full HTML content
    const htmlContent = await page.content();
    
    // Save the HTML content to a file
    const fs = require('fs');
    fs.writeFileSync('pageContent.html', htmlContent);
    
    console.log('Page content saved successfully.');
  } catch (error) {
    console.error('Error fetching the page:', error);
  } finally {
    await browser.close();
  }
})();