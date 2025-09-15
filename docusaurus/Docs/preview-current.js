const chokidar = require('chokidar');
const { exec } = require('child_process');

// Map file path to URL path — 只取文件名作为 slug
const filePathToUrl = (filePath) => {
  if (filePath.startsWith('docs/')) {
    const fileName = filePath.split('/').pop(); // 取文件名
    const slug = fileName.replace(/\.mdx?$/, ''); // 移除 .md 或 .mdx
    return `http://localhost:3000/${slug}`;
  }
  return null;
};

// Watch docs folder
chokidar.watch('docs/**/*.md*').on('change', (path) => {
  const url = filePathToUrl(path);
  if (url) {
    console.log(`📄 Editing: ${path}`);
    console.log(`🌐 Preview: ${url}`);
    
    // Open in browser (macOS)
    exec(`open "${url}"`);
    // Windows: exec(`start ${url}`)
    // Linux: exec(`xdg-open ${url}`)
  }
});

console.log('👀 Watching docs/ for changes...');