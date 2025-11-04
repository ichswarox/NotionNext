#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// 配置区
const DEFAULT_DOCS_DIR = path.resolve('./docs');
const I18N_DIR = path.resolve('./i18n');
const PLUGIN_PATH = 'docusaurus-plugin-content-docs/current';

// 忽略的文件（比如临时文件、隐藏文件）
const IGNORE = (file) => file.startsWith('.') || file.endsWith('.swp');

function getMdFiles(dir) {
  if (!fs.existsSync(dir)) return new Set();
  const files = new Set();
  function walk(current) {
    const items = fs.readdirSync(current);
    for (const item of items) {
      if (IGNORE(item)) continue;
      const fullPath = path.join(current, item);
      const relPath = path.relative(dir, fullPath);
      const stat = fs.statSync(fullPath);
      if (stat.isDirectory()) {
        walk(fullPath);
      } else if (path.extname(item) === '.md') {
        files.add(relPath.replace(/\\/g, '/')); // 统一用 / 路径
      }
    }
  }
  walk(dir);
  return files;
}

function main() {
  const defaultFiles = getMdFiles(DEFAULT_DOCS_DIR);
  if (defaultFiles.size === 0) {
    console.log('⚠️  docs/ 目录下没有 .md 文件，检查路径是否正确？');
    return;
  }

  const locales = fs.existsSync(I18N_DIR)
    ? fs.readdirSync(I18N_DIR).filter(f => fs.statSync(path.join(I18N_DIR, f)).isDirectory())
    : [];

  if (locales.length === 0) {
    console.log('📁 i18n/ 目录为空或不存在，未启用多语言？');
    return;
  }

  let hasMissing = false;

  for (const locale of locales) {
    const localeDocsDir = path.join(I18N_DIR, locale, PLUGIN_PATH);
    const localeFiles = getMdFiles(localeDocsDir);

    const missing = [...defaultFiles].filter(f => !localeFiles.has(f));
    if (missing.length > 0) {
      hasMissing = true;
      console.log(`\n🔴 ${locale} 缺失 ${missing.length} 个文档:`);
      missing.forEach(f => console.log(`   - ${f}`));
    } else {
      console.log(`✅ ${locale} 完整，无缺失`);
    }
  }

  if (hasMissing) {
    console.log(`\n💡 提示：运行 \`npx docusaurus write-translations --locale <locale>\` 生成缺失模板`);
    process.exit(1);
  } else {
    console.log('\n🎉 所有语言文档完整！');
  }
}

main();