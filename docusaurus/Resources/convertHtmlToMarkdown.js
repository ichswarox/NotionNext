const fs = require('fs');
const path = require('path');
const cheerio = require('cheerio');

// Simple function to parse HTML file and convert to markdown
function convertHtmlToMarkdown() {
  const inputDir = './downloads';
  const outputDir = './docs/3dapp';
  
  // Create output directory if it doesn't exist
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }
  
  // Read all HTML files in the input directory
  const files = fs.readdirSync(inputDir);
  const htmlFiles = files.filter(file => path.extname(file) === '.html');
  
  htmlFiles.forEach(file => {
    try {
      const filePath = path.join(inputDir, file);
      const html = fs.readFileSync(filePath, 'utf8');
      const $ = cheerio.load(html);
      
      // Extract title
      const title = $('title').text().split('|')[0].trim();
      
      // Extract meta description
      const description = $('meta[name="description"]').attr('content') || '';
      
      // Extract keywords
      const keywords = $('meta[name="keywords"]').attr('content') || '';
      
      // Extract first image
      const firstImage = $('.entry img').first().attr('data-src') || '';
      
      // Create slug from filename
      const slug = file.replace('.html', '').replace('www_gfxcamp_com_', '');
      
      // Create frontmatter
      let markdown = '---\n';
      markdown += 'title: "' + title + '"\n';
      markdown += 'description: "' + description.substring(0, 160) + '"\n';
      markdown += 'keywords: ["AE template", "After Effects", "MG animation", "motion graphics"]\n';
      markdown += 'slug: /' + slug + '\n';
      markdown += '---\n\n';
      
      // Add title
      markdown += '# ' + title + '\n\n';
      
      // Add first image
      if (firstImage) {
        markdown += '![' + title + '](' + firstImage + ')\n\n';
      }
      
      // Add a generic download link message
      markdown += 'Download links are available on the original page.\n\n';
      
      // Write to output file
      const outputFile = path.join(outputDir, `${slug}.md`);
      fs.writeFileSync(outputFile, markdown);
      
      console.log(`Converted ${file} to ${slug}.md`);
    } catch (error) {
      console.error(`Error processing ${file}: ${error.message}`);
    }
  });
  
  console.log('Conversion complete!');
}

// Run the conversion
convertHtmlToMarkdown();