const chokidar = require('chokidar');
const { exec } = require('child_process');

// Map file path to URL path
const filePathToUrl = (filePath) => {
  if (filePath.startsWith('docs/')) {
    // Remove 'docs/3dapp/' prefix and .md/.mdx extension
    const slug = filePath.replace(/^docs\/3dapp\//, '').replace(/\.mdx?$/, '');
    return `http://localhost:3001/${slug}`;
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