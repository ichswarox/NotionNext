#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Define the directories to check
const DOCS_DIR = './docs';
const I18N_DIR = './i18n';

// Get all language directories
const languages = fs.readdirSync(I18N_DIR)
  .filter(file => {
    const filePath = path.join(I18N_DIR, file);
    return fs.statSync(filePath).isDirectory() && file !== 'en'; // Exclude English as it's the source
  });

// Get all English documentation files from the docs directory
const englishFiles = getAllFiles(DOCS_DIR);

console.log('Checking for missing translations...\n');

let hasMissingTranslations = false;

// Check each language
for (const lang of languages) {
  console.log(`Checking language: ${lang}`);
  
  const langDir = path.join(I18N_DIR, lang, 'docusaurus-plugin-content-docs', 'current');
  
  // Check if language directory exists
  if (!fs.existsSync(langDir)) {
    console.log(`  ❌ Language ${lang} has no documentation translations`);
    hasMissingTranslations = true;
    continue;
  }
  
  // Get all files for this language
  const langFiles = getAllFiles(langDir);
  
  // Find English files that are missing in this language
 const missingFiles = [];
  for (const enFile of englishFiles) {
    const relativePath = path.relative(DOCS_DIR, enFile);
    const langFile = path.join(langDir, relativePath);
    
    if (!fs.existsSync(langFile)) {
      missingFiles.push(relativePath);
    }
  }
  
  if (missingFiles.length > 0) {
    console.log(`  ❌ Found ${missingFiles.length} missing translation(s) in ${lang}:`);
    missingFiles.forEach(file => {
      console.log(`    - ${file}`);
    });
    hasMissingTranslations = true;
  } else {
    console.log(`  ✅ All translations present for ${lang}`);
  }
  
  console.log('');
}

// Also check for missing code.json translations
console.log('Checking for missing code translations...\n');

for (const lang of languages) {
  const enCodeFile = path.join(I18N_DIR, 'en', 'code.json');
  const langCodeFile = path.join(I18N_DIR, lang, 'code.json');
  
  if (!fs.existsSync(enCodeFile)) {
    console.log(`  No source code.json file found in English directory`);
  } else if (!fs.existsSync(langCodeFile)) {
    console.log(`  ❌ Missing code.json in ${lang}`);
    hasMissingTranslations = true;
  } else {
    // Compare the keys in code.json files
    try {
      const enCode = JSON.parse(fs.readFileSync(enCodeFile, 'utf8'));
      const langCode = JSON.parse(fs.readFileSync(langCodeFile, 'utf8'));
      
      const missingKeys = findMissingKeys(enCode, langCode);
      
      if (missingKeys.length > 0) {
        console.log(`  ❌ Found ${missingKeys.length} missing code translation keys in ${lang}:`);
        missingKeys.forEach(key => {
          console.log(`    - ${key}`);
        });
        hasMissingTranslations = true;
      } else {
        console.log(`  ✅ All code translations present for ${lang}`);
      }
    } catch (error) {
      console.log(`  ❌ Error checking code.json for ${lang}: ${error.message}`);
      hasMissingTranslations = true;
    }
  }
  console.log('');
}

// Check for missing theme translations
for (const lang of languages) {
  const enThemeDir = path.join(I18N_DIR, 'en', 'docusaurus-theme-classic');
  const langThemeDir = path.join(I18N_DIR, lang, 'docusaurus-theme-classic');
  
  if (!fs.existsSync(enThemeDir)) {
    console.log(`  No source docusaurus-theme-classic directory found in English`);
  } else if (!fs.existsSync(langThemeDir)) {
    console.log(`  ❌ Missing docusaurus-theme-classic directory in ${lang}`);
    hasMissingTranslations = true;
  } else {
    const enThemeFiles = getAllFiles(enThemeDir);
    
    for (const enThemeFile of enThemeFiles) {
      const relativePath = path.relative(enThemeDir, enThemeFile);
      const langThemeFile = path.join(langThemeDir, relativePath);
      
      if (!fs.existsSync(langThemeFile)) {
        console.log(`  ❌ Missing theme file in ${lang}: ${relativePath}`);
        hasMissingTranslations = true;
      } else {
        console.log(`  ✅ Theme file exists for ${lang}: ${relativePath}`);
      }
    }
  }
  console.log('');
}

if (hasMissingTranslations) {
  console.log('❌ Found missing translations. Please add the missing translation files.');
  process.exit(1); // Exit with error code
} else {
  console.log('✅ All translations are present!');
  process.exit(0); // Exit successfully
}

// Helper function to get all files in a directory recursively
function getAllFiles(dirPath, arrayOfFiles = []) {
 const files = fs.readdirSync(dirPath);
  
  files.forEach(file => {
    // Skip system files that shouldn't be translated
    if (file.startsWith('.') || file.endsWith('.ini')) {
      return;
    }
    
    const filePath = path.join(dirPath, file);
    if (fs.statSync(filePath).isDirectory()) {
      arrayOfFiles = getAllFiles(filePath, arrayOfFiles);
    } else {
      arrayOfFiles.push(filePath);
    }
  });
  
  return arrayOfFiles;
}

// Helper function to find missing keys in translation objects
function findMissingKeys(source, target, prefix = '') {
 const missingKeys = [];
  
  for (const key in source) {
    const fullKey = prefix ? `${prefix}.${key}` : key;
    
    if (typeof source[key] === 'object' && source[key] !== null && !Array.isArray(source[key])) {
      if (!target[key]) {
        missingKeys.push(fullKey);
      } else {
        missingKeys.push(...findMissingKeys(source[key], target[key], fullKey));
      }
    } else {
      if (!(key in target)) {
        missingKeys.push(fullKey);
      }
    }
  }
  
  return missingKeys;
}
