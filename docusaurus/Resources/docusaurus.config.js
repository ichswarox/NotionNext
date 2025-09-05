// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';
import fs from 'fs';
import path from 'path';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Assets',
  tagline: 'Download Software, 3D Models, Video Templates, Music and More',
  favicon: 'img/favicon.ico',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://your-docusaurus-site.example.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'facebook', // Usually your GitHub org/user name.
  projectName: 'docusaurus', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          routeBasePath: '/',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
          async sidebarItemsGenerator({
            defaultSidebarItemsGenerator,
            ...args
          }) {
            const sidebarItems = await defaultSidebarItemsGenerator(args);
            
            // 自定义排序函数：按文件修改时间排序
            function sortItemsByModifiedTime(items) {
              return items
                .map((item) => {
                  if (item.type === 'category') {
                    return {
                      ...item,
                      items: sortItemsByModifiedTime(item.items),
                    };
                  }
                  return item;
                })
                .sort((a, b) => {
                  if (a.type === 'doc' && b.type === 'doc') {
                    // 获取文档文件路径
                    const aDoc = args.docs.find((doc) => doc.id === a.id);
                    const bDoc = args.docs.find((doc) => doc.id === b.id);
                    
                    if (aDoc && bDoc) {
                      const aPath = path.join(args.version.contentPath, aDoc.source);
                      const bPath = path.join(args.version.contentPath, bDoc.source);
                      
                      try {
                        const aStat = fs.statSync(aPath);
                        const bStat = fs.statSync(bPath);
                        return bStat.mtimeMs - aStat.mtimeMs; // 最新修改的在前
                      } catch (e) {
                        // 如果文件不存在，保持原顺序
                        return 0;
                      }
                    }
                  }
                  return 0;
                });
            }
            
            return sortItemsByModifiedTime(sidebarItems);
          },
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'Resources',
        logo: {
          alt: 'My Site Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: '3D App',
          },

          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Tutorial',
          },

          {to: '/blog', label: 'Blog', position: 'left'},

          {
            href: 'https://www.google.com',
            label: 'Google',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Resources',
            items: [
              {
                label: '3D App',
                to: '/docs/3d-app',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'X',
                href: 'https://x.com/docusaurus',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()}`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
      // SEO优化配置
      metadata: [
        {name: 'keywords', content: 'docusaurus, seo, static site'},
        {name: 'twitter:card', content: 'summary_large_image'},
      ],
      headTags: [
        {
          tagName: 'script',
          attributes: {
            type: 'application/ld+json',
          },
          innerHTML: JSON.stringify({
            '@context': 'https://schema.org/',
            '@type': 'Website',
            name: 'My Site',
            description: 'Dinosaurs are cool',
            url: 'https://your-docusaurus-site.example.com/',
          }),
        },
      ],
    }),
};

export default config;
