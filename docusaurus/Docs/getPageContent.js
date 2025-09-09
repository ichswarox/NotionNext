const fs = require('fs');
const path = require('path');
const cheerio = require('cheerio');

// Simple translation function
function simpleTranslate(text) {
  return text
    .replace(/三维服装设计软件企业版/g, "3D Fashion Design Software Enterprise Edition")
    .replace(/破解版/g, "Cracked Version")
    .replace(/中文版/g, "Chinese Version")
    .replace(/英文版/g, "English Version")
    .replace(/新功能介绍/g, "New Features Introduction")
    .replace(/用户界面更新/g, "User Interface Update")
    .replace(/关键帧动画/g, "Keyframe Animation")
    .replace(/四边面化算法优化/g, "Quad Mesh Algorithm Optimization")
    .replace(/IK关节映射/g, "IK Joint Mapping")
    .replace(/生成侧面及背面的UV/g, "Generate Side and Back UVs")
    .replace(/3D窗口中显示毛发效果/g, "Hair Display in 3D Viewport")
    .replace(/自动转换动作/g, "Automatic Motion Conversion")
    .replace(/模块化库/g, "Modular Library")
    .replace(/新图库窗口/g, "New Asset Library Window")
    .replace(/安装步骤/g, "Installation Steps")
    .replace(/点击下载/g, "Click to Download")
    .replace(/提取密码/g, "Extraction Password")
    .replace(/版本/g, "Version")
    .replace(/PR字幕对白文字标题动画脚本/g, "PR Subtitle Dialogue Text Title Animation Script")
    .replace(/支持的PR版本？/g, "Supported PR Versions?")
    .replace(/脚本怎么安装？/g, "How to Install the Script?");
}

// Function to parse HTML file and extract content
function parseHtmlFile(filePath) {
  const html = fs.readFileSync(filePath, 'utf8');
  const $ = cheerio.load(html);
  
  // Extract title
  const title = $('title').text().split('|')[0].trim();
  
  // Extract meta description
  const description = $('meta[name="description"]').attr('content') || '';
  
  // Extract keywords
  const keywords = $('meta[name="keywords"]').attr('content') || '';
  
  // Extract main content - first image
  const firstImage = $('.entry img').first().attr('data-src') || '';
  
  // Extract download links with text
  const downloadLinks = [];
  $('a.maxbutton-3').each((i, elem) => {
    const linkText = $(elem).find('.mb-text').text().trim();
    const linkUrl = $(elem).attr('href');
    const password = $(elem).closest('p').next('p').find('strong').text().replace('提取密码：', '').trim();
    if (linkUrl) {
      downloadLinks.push({
        text: linkText,
        url: linkUrl,
        password: password
      });
    }
  });
  
  // Extract all text content
  const content = $('.entry').text();
  
  return {
    title,
    description,
    keywords,
    firstImage,
    downloadLinks,
    content
  };
}

// Function to convert to markdown with SEO optimization
function convertToMarkdown(data, slug) {
  // Create SEO-friendly title
  let seoTitle = data.title;
  if (data.title.includes("Marvelous Designer")) {
    seoTitle = "Marvelous Designer 2025 Enterprise - 3D Fashion Design Software with Advanced Cloth Simulation";
  } else if (data.title.includes("Captioneer")) {
    seoTitle = "Aescripts Captioneer V1.5.4 - Premiere Pro Subtitle Animation Script";
  }
  
  // Create SEO-friendly description
  let seoDescription = data.description.substring(0, 160);
  if (data.title.includes("Marvelous Designer")) {
    seoDescription = "Get Marvelous Designer 2025 Enterprise Edition - the industry-leading 3D fashion design software with advanced cloth simulation. Create realistic garments with intuitive tools.";
  } else if (data.title.includes("Captioneer")) {
    seoDescription = "Download Aescripts Captioneer V1.5.4 for Premiere Pro - the fastest way to create animated subtitles. Streamline your video editing workflow with this powerful script.";
  }
  
  // Format keywords as array
  const keywordsArray = data.keywords.split(',').map(k => k.trim()).filter(k => k);
  
  // Create frontmatter
  let markdown = "---\n";
  markdown += "title: \"" + seoTitle + "\"\n";
  markdown += "description: \"" + seoDescription + "\"\n";
  markdown += "keywords: [\"3D software\", \"design tools\", \"creative software\", \"VFX tools\"]\n";
  markdown += "slug: /" + slug + "\n";
  markdown += "---\n\n";
  
  // Add title as H1
  markdown += "# " + seoTitle + "\n\n";
  
  // Add first image if available
  if (data.firstImage) {
    markdown += "![" + seoTitle + "](" + data.firstImage + ")\n\n";
  }
  
  // Add download links below the first image with proper formatting
  if (data.downloadLinks.length > 0) {
    data.downloadLinks.forEach(link => {
      // Translate the link text
      const translatedText = simpleTranslate(link.text);
      markdown += "[Download " + translatedText + "](" + link.url + ")\n\n";
      if (link.password) {
        markdown += "**Password: " + link.password + "**\n\n";
      }
    });
  }
  
  return markdown;
}

// Function to process all HTML files in a directory
function processHtmlFiles(inputDir, outputDir) {
  const files = fs.readdirSync(inputDir);
  const htmlFiles = files.filter(file => path.extname(file) === '.html');
  
  htmlFiles.forEach(file => {
    try {
      const filePath = path.join(inputDir, file);
      const parsedData = parseHtmlFile(filePath);
      
      // Create slug from filename
      const slug = file.replace('.html', '').replace('www_gfxcamp_com_', '');
      
      // Convert to markdown
      const markdownContent = convertToMarkdown(parsedData, slug);
      
      // Write to output file
      const outputFile = path.join(outputDir, `${slug}.md`);
      fs.writeFileSync(outputFile, markdownContent);
      
      console.log(`Converted ${file} to ${slug}.md`);
    } catch (error) {
      console.error(`Error processing ${file}: ${error.message}`);
    }
  });
}

// Main execution
const inputDir = './downloads';
const outputDir = './docs/3dapp';

// Create output directory if it doesn't exist
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

// Process files
processHtmlFiles(inputDir, outputDir);

console.log('Conversion complete!');