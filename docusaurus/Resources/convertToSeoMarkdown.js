const fs = require('fs');
const path = require('path');
const cheerio = require('cheerio');

// Translation dictionary for common terms
const translationDict = {
  // Categories/Types
  "AE模板": "AE Template",
  "AE脚本": "AE Script",
  "PR预设": "PR Preset",
  "MG模板": "MG Template",
  "MG动画": "MG Animation",
  "MG元素": "MG Elements",
  "MG预设": "MG Preset",
  "文字标题": "Text Titles",
  "图形动画": "Graphic Animation",
  "转场预设": "Transition Presets",
  "视频素材": "Video Footage",
  "背景": "Background",
  "图标": "Icons",
  "插件": "Plugin",
  "精品素材": "Premium Assets",
  "工具素材包": "Tool Asset Pack",
  "运动预设": "Motion Presets",
  
  // Technical terms
  "分辨率": "Resolution",
  "版本": "Version",
  "大小": "Size",
  "教程": "Tutorial",
  "音乐": "Music",
  "插件": "Plugins",
  "预设": "Presets",
  "动画": "Animation",
  "元素": "Elements",
  "标题": "Titles",
  "文字": "Text",
  "图形": "Graphics",
  "转场": "Transitions",
  "背景": "Background",
  "图标": "Icons",
  "片头": "Intro",
  "片尾": "Outro",
  
  // Software names
  "After Effects": "After Effects",
  "AE": "After Effects",
  "Premiere": "Premiere Pro",
  "PR": "Premiere Pro",
  "VideoHive": "VideoHive",
  
  // Actions
  "点击前往淘宝购买": "Click to Purchase on Taobao",
  "点击直接购买": "Click to Purchase Directly",
  "点我查看购买步骤说明": "Click to View Purchase Instructions",
  "支持支付宝/微信": "Supports Alipay/WeChat",
  "下载地址购买后可见": "Download link visible after purchase",
  "百度网盘点击下载": "Click to Download from Baidu Netdisk",
  "提取密码": "Extraction Code",
  
  // Descriptions
  "不需要第三方插件": "No third-party plugins required",
  "中文版/英文版": "Chinese/English versions",
  "Win/Mac": "Win/Mac",
  "高清": "HD",
  "不包含背景音乐": "Does not include background music",
  "可以直接使用": "Can be used directly",
  "可以修改": "Can be modified",
  "颜色": "Color",
  "大小": "Size",
  "动态": "Animation",
  "三维效果": "3D Effects",
  
  // General terms
  "包含": "Includes",
  "超过": "Over",
  "种": "Types",
  "更新": "Update",
  "说明": "Instructions",
  "步骤": "Steps",
  "功能": "Features",
  "特点": "Features",
  "优势": "Advantages",
  "适用": "Suitable for",
  "支持": "Supports",
  "要求": "Requirements"
};

// Simple translation function
function translateText(text) {
  if (!text) return '';
  
  let translated = text;
  
  // Apply dictionary translations
  for (const [chinese, english] of Object.entries(translationDict)) {
    const regex = new RegExp(chinese, 'g');
    translated = translated.replace(regex, english);
  }
  
  return translated;
}

// Function to extract content from HTML
function extractContent($) {
  // Extract title
  let title = $('h1.post-title').text().trim() || $('title').text().split('|')[0].trim();
  
  // Extract meta description
  const description = $('meta[name="description"]').attr('content') || '';
  
  // Extract keywords
  const keywords = $('meta[name="keywords"]').attr('content') || '';
  
  // Extract first image
  let firstImage = $('.entry img').first().attr('data-src') || $('.entry img').first().attr('src') || '';
  
  // Handle lazy loading images
  if (firstImage && firstImage.includes('data:image/gif')) {
    firstImage = '';
  }
  
  // Extract download links
  const downloadLinks = [];
  
  // Look for purchase/download buttons
  $('a.maxbutton, a[href*="taobao.com"], .xh-btn, a[href*="pan.baidu.com"]').each((i, elem) => {
    const linkText = $(elem).text().trim() || $(elem).find('.mb-text').text().trim();
    const linkUrl = $(elem).attr('href');
    
    if (linkUrl) {
      // Check if it's a download link or purchase link
      if (linkText.includes('购买') || linkText.includes('Purchase') || 
          linkText.includes('下载') || linkText.includes('Download') ||
          linkUrl.includes('pan.baidu.com') || linkUrl.includes('taobao.com')) {
        
        // Try to find password if it's a Baidu link
        let password = '';
        if (linkUrl.includes('pan.baidu.com')) {
          // Look for password in nearby text
          const parentText = $(elem).closest('p').text() || $(elem).parent().text();
          const pwdMatch = parentText.match(/密码[:：]?\\s*([a-zA-Z0-9]+)/);
          if (pwdMatch) {
            password = pwdMatch[1];
          }
        }
        
        downloadLinks.push({
          text: linkText,
          url: linkUrl,
          password: password
        });
      }
    }
  });
  
  // Extract main content - look for the main article content
  let content = '';
  const contentSelectors = ['.entry-inner', '.entry', '.post-content'];
  
  for (const selector of contentSelectors) {
    const elements = $(selector);
    if (elements.length > 0) {
      elements.each((i, elem) => {
        content += $(elem).html();
      });
      break;
    }
  }
  
  return {
    title,
    description,
    keywords,
    firstImage,
    downloadLinks,
    content
  };
}

// Function to create SEO-optimized title
function createSeoTitle(originalTitle) {
  // Translate the title first
  let translatedTitle = translateText(originalTitle);
  
  // Add descriptive terms for better SEO if needed
  if (translatedTitle.includes("AE Template") && !translatedTitle.includes("After Effects")) {
    translatedTitle = translatedTitle.replace("AE Template", "After Effects Template");
  }
  
  if (translatedTitle.includes("AE Script") && !translatedTitle.includes("After Effects")) {
    translatedTitle = translatedTitle.replace("AE Script", "After Effects Script");
  }
  
  return translatedTitle;
}

// Function to create SEO-optimized description
function createSeoDescription(originalDescription) {
  // Translate and limit to 160 characters for SEO
  let translatedDesc = translateText(originalDescription);
  return translatedDesc.substring(0, 160);
}

// Function to generate SEO keywords
function generateSeoKeywords(originalKeywords) {
  // Translate keywords
  let translatedKeywords = translateText(originalKeywords);
  
  // Split and clean keywords
  const keywordsArray = translatedKeywords
    .split(',')
    .map(k => k.trim())
    .filter(k => k)
    .map(k => `"${k}"`);
  
  // Add some generic SEO keywords
  const genericKeywords = [
    "\"After Effects\"",
    "\"Motion Graphics\"",
    "\"Video Editing\"",
    "\"Creative Tools\"",
    "\"Animation Assets\"",
    "\"AE Templates\"",
    "\"Design Resources\"",
    "\"Professional Tools\""
  ];
  
  // Combine and deduplicate, limit to 10 keywords
  const allKeywords = [...new Set([...keywordsArray, ...genericKeywords])].slice(0, 10);
  
  return allKeywords;
}

// Function to convert HTML content to Markdown with SEO optimization
function convertToSeoMarkdown(data, slug) {
  // Create SEO-friendly title
  const seoTitle = createSeoTitle(data.title);
  
  // Create SEO-friendly description
  const seoDescription = createSeoDescription(data.description);
  
  // Generate SEO keywords
  const seoKeywords = generateSeoKeywords(data.keywords);
  
  // Create frontmatter
  let markdown = "---\n";
  markdown += "title: \"" + seoTitle + "\"\n";
  markdown += "description: \"" + seoDescription + "\"\n";
  markdown += "keywords: [" + seoKeywords.join(", ") + "]\n";
  markdown += "slug: /" + slug + "\n";
  markdown += "---\n\n";
  
  // Add title as H1
  markdown += "# " + seoTitle + "\n\n";
  
  // Add first image if available
  if (data.firstImage) {
    markdown += "![" + seoTitle + "](" + data.firstImage + ")\n\n";
    
    // Add download links below the first image
    if (data.downloadLinks.length > 0) {
      markdown += "\n";
      data.downloadLinks.forEach(link => {
        const translatedText = translateText(link.text);
        markdown += "**Download " + translatedText + "**: [" + translatedText + "](" + link.url + ")";
        if (link.password) {
          markdown += " (Password: " + link.password + ")";
        }
        markdown += "\n\n";
      });
      markdown += "\n";
    }
  }
  
  // Process main content
  if (data.content) {
    const $ = cheerio.load(data.content, { decodeEntities: false });
    
    // Remove unwanted elements
    $('script, style, .wp_rp_wrap, .xh_social_box, #comments, .post-tags, .awac-wrapper, .related_post').remove();
    
    // Process headings
    $('h1').each((i, elem) => {
      const text = $(elem).text().trim();
      if (text && !text.includes('发表回复') && !text.includes('Responses')) {
        $(elem).replaceWith('\n## ' + translateText(text) + '\n\n');
      } else {
        $(elem).remove();
      }
    });
    
    $('h2').each((i, elem) => {
      const text = $(elem).text().trim();
      if (text) {
        $(elem).replaceWith('\n### ' + translateText(text) + '\n\n');
      } else {
        $(elem).remove();
      }
    });
    
    $('h3, h4, h5, h6').each((i, elem) => {
      const text = $(elem).text().trim();
      if (text) {
        $(elem).replaceWith('\n#### ' + translateText(text) + '\n\n');
      } else {
        $(elem).remove();
      }
    });
    
    // Process paragraphs
    $('p').each((i, elem) => {
      const text = $(elem).text().trim();
      if (text) {
        // Skip empty paragraphs
        if (text.length > 0) {
          $(elem).replaceWith(translateText(text) + '\n\n');
        } else {
          $(elem).remove();
        }
      } else {
        $(elem).remove();
      }
    });
    
    // Process lists
    $('li').each((i, elem) => {
      const text = $(elem).text().trim();
      if (text) {
        $(elem).replaceWith('- ' + translateText(text) + '\n');
      } else {
        $(elem).remove();
      }
    });
    
    $('ul, ol').each((i, elem) => {
      const html = $(elem).html();
      if (html && html.trim()) {
        $(elem).replaceWith('\n' + html + '\n');
      } else {
        $(elem).remove();
      }
    });
    
    // Process bold and italic
    $('strong, b').each((i, elem) => {
      const text = $(elem).text().trim();
      if (text) {
        $(elem).replaceWith('**' + text + '**');
      } else {
        $(elem).remove();
      }
    });
    
    $('em, i').each((i, elem) => {
      const text = $(elem).text().trim();
      if (text) {
        $(elem).replaceWith('*' + text + '*');
      } else {
        $(elem).remove();
      }
    });
    
    // Process links
    $('a').each((i, elem) => {
      const text = $(elem).text().trim();
      const href = $(elem).attr('href');
      if (text && href) {
        $(elem).replaceWith('[' + translateText(text) + '](' + href + ')');
      } else if (href) {
        $(elem).replaceWith('(' + href + ')');
      } else {
        $(elem).remove();
      }
    });
    
    // Process images
    $('img').each((i, elem) => {
      const src = $(elem).attr('data-src') || $(elem).attr('src');
      const alt = $(elem).attr('alt') || '';
      if (src && !src.includes('data:image/gif') && !src.includes('loading.gif') && !src.includes('star.png')) {
        $(elem).replaceWith('\n![' + translateText(alt) + '](' + src + ')\n\n');
      } else {
        $(elem).remove();
      }
    });
    
    // Get the processed content
    let processedContent = $.text()
      .replace(/\n{3,}/g, '\n\n')  // Remove excessive newlines
      .trim();
    
    markdown += processedContent + '\n\n';
  }
  
  // Add a conclusion section for better SEO
  markdown += "## Conclusion\n\n";
  markdown += "This premium collection offers high-quality motion graphics elements and templates for After Effects, perfect for creating professional animations and video projects. With a wide variety of customizable elements, these assets can significantly enhance your creative workflow and help you produce stunning visual content efficiently.\n\n";
  
  return markdown;
}

// Function to process all HTML files
function processAllHtmlFiles() {
  const inputDir = './downloads';
  const outputDir = './docs/3dapp';
  
  // Create output directory if it doesn't exist
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
    console.log('Created output directory:', outputDir);
  }
  
  // Read all HTML files in the input directory
  const files = fs.readdirSync(inputDir);
  const htmlFiles = files.filter(file => path.extname(file) === '.html');
  
  console.log(`Found ${htmlFiles.length} HTML files to process`);
  
  let processedCount = 0;
  
  htmlFiles.forEach(file => {
    try {
      console.log(`Processing ${file}...`);
      const filePath = path.join(inputDir, file);
      const html = fs.readFileSync(filePath, 'utf8');
      const $ = cheerio.load(html);
      
      // Extract content
      const extractedData = extractContent($);
      
      // Create slug from filename
      const slug = file.replace('.html', '').replace('www_gfxcamp_com_', '');
      
      // Convert to SEO markdown
      const markdownContent = convertToSeoMarkdown(extractedData, slug);
      
      // Write to output file
      const outputFile = path.join(outputDir, `${slug}.md`);
      fs.writeFileSync(outputFile, markdownContent);
      
      console.log(`✓ Converted ${file} to ${slug}.md`);
      processedCount++;
    } catch (error) {
      console.error(`✗ Error processing ${file}: ${error.message}`);
    }
  });
  
  console.log('\nConversion complete!');
  console.log(`Successfully processed ${processedCount} files out of ${htmlFiles.length}`);
  
  return processedCount;
}

// Run the conversion
const processedCount = processAllHtmlFiles();

// If all files were processed successfully, delete the HTML files
if (processedCount > 0) {
  console.log('\nDeleting original HTML files...');
  const inputDir = './downloads';
  const files = fs.readdirSync(inputDir);
  const htmlFiles = files.filter(file => path.extname(file) === '.html');
  
  htmlFiles.forEach(file => {
    try {
      const filePath = path.join(inputDir, file);
      fs.unlinkSync(filePath);
      console.log(`✓ Deleted ${file}`);
    } catch (error) {
      console.error(`✗ Error deleting ${file}: ${error.message}`);
    }
  });
  
  console.log('Cleanup complete!');
}