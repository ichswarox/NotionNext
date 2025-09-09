const fs = require('fs');
const path = require('path');
const cheerio = require('cheerio');

// Translation dictionary for common terms
const translationDict = {
  "AE模板": "AE Template",
  "PR预设": "PR Preset",
  "文字动画": "Text Animation",
  "Logo动画": "Logo Animation",
  "涂鸦文字": "Graffiti Text",
  "铬合金": "Chrome Alloy",
  "精品素材": "Premium Assets",
  "素材要求": "Asset Requirements",
  "版本": "Version",
  "分辨率": "Resolution",
  "插件": "Plugin",
  "大小": "Size",
  "教程": "Tutorial",
  "音乐": "Music",
  "点击前往淘宝购买": "Click to Purchase on Taobao",
  "点击直接购买": "Click to Purchase Directly",
  "点我查看购买步骤说明": "Click to View Purchase Instructions",
  "支持支付宝/微信": "Supports Alipay/WeChat",
  "下载地址购买后可见": "Download link visible after purchase",
  "AE模板：": "AE Template:",
  "PR预设：": "PR Preset:",
  "版 本：": "Version:",
  "插 件：": "Plugin:",
  "大 小：": "Size:",
  "教 程：": "Tutorial:",
  "音 乐：": "Music:",
  "不需要第三方插件": "No third-party plugins required",
  "中文版/英文版": "Chinese/English versions",
  "Win/Mac": "Win/Mac",
  "视频教程": "Video tutorial",
  "不包含背景音乐": "Does not include background music",
  "AE": "After Effects",
  "PR": "Premiere",
  "高清": "HD",
  "工程文件": "Project file",
  "预设格式": "Preset format",
  "直接打开即可使用": "Can be used directly after opening",
  "安装后在顶部菜单": "After installation, in the top menu",
  "窗口-基本图形面板打开使用": "Window > Essential Graphics panel to use",
  "表达式错误": "expression errors",
  "修复支持": "Fixed support for",
  "要求": "Requires",
  "或者更高版本": "or higher",
  "可以制作": "Can create",
  "炫酷": "cool",
  "时尚": "fashionable",
  "风格": "style",
  "文字": "text",
  "图形动画": "graphic animation",
  "支持": "Supports",
  "所有的": "All",
  "字体": "font",
  "颜色": "color",
  "大小位置": "size and position",
  "基本参数": "basic parameters",
  "都可以修改": "can be modified",
  "背景透明": "transparent background",
  // Additional translations for PBR materials
  "组": "Set",
  "贴图材质": "PBR Material",
  "分辨率": "Resolution",
  "包含": "Includes",
  "可以通过": "Can be used through",
  "插件安装调用": "plugin installation and invocation",
  "也包含": "Also includes",
  "其他三维软件可以使用": "Can be used with other 3D software",
  "提取密码": "Extraction Code",
  "百度网盘点击下载": "Click to Download from Baidu Netdisk"
};

// Simple translation function
function translateText(text) {
  if (!text) return '';
  
  let translated = text;
  
  // Apply dictionary translations
  for (const [chinese, english] of Object.entries(translationDict)) {
    translated = translated.replace(new RegExp(chinese, 'g'), english);
  }
  
  return translated;
}

// Function to extract content from HTML
function extractContent($) {
  // Extract title
  const title = $('h1.post-title').text().trim() || $('title').text().split('|')[0].trim();
  
  // Extract meta description
  const description = $('meta[name="description"]').attr('content') || '';
  
  // Extract keywords
  const keywords = $('meta[name="keywords"]').attr('content') || '';
  
  // Extract first image
  const firstImage = $('.entry img').first().attr('data-src') || $('.entry img').first().attr('src') || '';
  
  // Extract download links
  const downloadLinks = [];
  
  // Look for purchase/download buttons
  $('a.maxbutton, a[href*="taobao.com"], .xh-btn').each((i, elem) => {
    const linkText = $(elem).text().trim() || $(elem).find('.mb-text').text().trim();
    const linkUrl = $(elem).attr('href');
    
    if (linkUrl && (linkText.includes('购买') || linkText.includes('Purchase') || linkText.includes('下载') || linkText.includes('Download'))) {
      downloadLinks.push({
        text: linkText,
        url: linkUrl
      });
    }
  });
  
  // Also look for any links with "pwd" in URL (Baidu Netdisk links)
  $('a[href*="pan.baidu.com"]').each((i, elem) => {
    const linkText = $(elem).text().trim();
    const linkUrl = $(elem).attr('href');
    
    if (linkUrl) {
      downloadLinks.push({
        text: linkText || "Download from Baidu Netdisk",
        url: linkUrl
      });
    }
  });
  
  // Extract main content
  let content = '';
  $('.entry-inner').each((i, elem) => {
    content += $(elem).html();
  });
  
  if (!content) {
    $('.entry').each((i, elem) => {
      content += $(elem).html();
    });
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

// Function to convert HTML content to Markdown with SEO optimization
function convertToSeoMarkdown(data, slug) {
  // Create SEO-friendly title
  let seoTitle = translateText(data.title);
  
  // Create SEO-friendly description
  let seoDescription = translateText(data.description.substring(0, 160));
  
  // Format keywords
  const keywordsArray = translateText(data.keywords)
    .split(',')
    .map(k => k.trim())
    .filter(k => k)
    .map(k => `"${k}"`);
  
  // Add some generic SEO keywords if we don't have enough
  const genericKeywords = [
    "\"3D software\"", 
    "\"design tools\"", 
    "\"creative software\"", 
    "\"VFX tools\"",
    "\"CG assets\"",
    "\"motion graphics\"",
    "\"video editing\"",
    "\"PBR materials\"",
    "\"3D textures\"",
    "\"material library\""
  ];
  
  const allKeywords = [...new Set([...keywordsArray, ...genericKeywords])].slice(0, 10);
  
  // Create frontmatter
  let markdown = "---\n";
  markdown += "title: \"" + seoTitle + "\"\n";
  markdown += "description: \"" + seoDescription + "\"\n";
  markdown += "keywords: [" + allKeywords.join(", ") + "]\n";
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
        markdown += "**Download " + translatedText + "**: [" + translatedText + "](" + link.url + ")\n\n";
      });
      markdown += "\n";
    }
  }
  
  // Process main content
  if (data.content) {
    const $ = cheerio.load(data.content, { decodeEntities: false });
    
    // Remove scripts, styles, and other unwanted elements
    $('script, style, .wp_rp_wrap, .xh_social_box, #comments, .post-tags, .awac-wrapper').remove();
    
    // Process elements and convert to markdown
    $('h1').each((i, elem) => {
      const text = $(elem).text().trim();
      if (text && !text.includes('发表回复')) {
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
    
    $('p').each((i, elem) => {
      const text = $(elem).text().trim();
      if (text) {
        $(elem).replaceWith(translateText(text) + '\n\n');
      } else {
        $(elem).remove();
      }
    });
    
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
    
    $('img').each((i, elem) => {
      const src = $(elem).attr('data-src') || $(elem).attr('src');
      const alt = $(elem).attr('alt') || '';
      if (src && !src.includes('data:image/gif')) {
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
  
  // Add conclusion section
  markdown += "## Conclusion\n\n";
  markdown += "This premium collection of PBR materials provides 99 high-quality textures at 4K resolution, perfect for enhancing your 3D projects. With compatibility for Blender through the Extreme PBR plugin and direct JPG files for other 3D software, these materials offer versatility and professional quality for any creative project.\n\n";
  
  return markdown;
}

// Function to process all HTML files
function processAllHtmlFiles() {
  const inputDir = './downloads';
  const outputDir = './docs/3dapp';
  
  // Create output directory if it doesn't exist
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }
  
  // Read all HTML files in the input directory
  const files = fs.readdirSync(inputDir);
  const htmlFiles = files.filter(file => path.extname(file) === '.html');
  
  console.log(`Found ${htmlFiles.length} HTML files to process`);
  
  htmlFiles.forEach(file => {
    try {
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
    } catch (error) {
      console.error(`✗ Error processing ${file}: ${error.message}`);
    }
  });
  
  console.log('\nConversion complete!');
  console.log(`Processed ${htmlFiles.length} files`);
}

// Run the conversion
processAllHtmlFiles();