// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: '跨境全链路-永久会员',
  tagline: '跨境电商全链路知识，涵盖AI工具、网站运营、落地页优化、独立站搭建等。',
  favicon: 'img/favicon.ico',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://docs.ucards.store',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'ichswarox', // Usually your GitHub org/user name.
  projectName: 'NotionNext', // Usually your repo name.

  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  // i18n: {
  //   defaultLocale: 'zh-Hans',
  //   locales: ['en', 'zh-Hans'],
  // },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          routeBasePath: '/',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
        sitemap: {
          changefreq: 'weekly',
          priority: 0.5,
          ignorePatterns: ['/tags/**'],
          filename: 'sitemap.xml',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/跨境全链路模板-na.png',
      navbar: {
        title: '跨境全链路-永久会员',
        logo: {
          alt: '跨境全链路Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'aiSidebar',
            position: 'left',
            label: '跨境Ai链路',
          },
          {
            type: 'docSidebar',
            sidebarId: 'seoSidebar',
            position: 'left',
            label: '跨境站运营推广',
          },
          {
            type: 'docSidebar',
            sidebarId: 'landingSidebar',
            position: 'left',
            label: '跨境落地页',
          },
          // {
          //   type: 'docSidebar',
          //   sidebarId: 'wordpressSidebar',
          //   position: 'left',
          //   label: 'WordPress独立站',
          // },
          // {
          //   type: 'docSidebar',
          //   sidebarId: 'shopifySidebar',
          //   position: 'left',
          //   label: 'Shopify独立站',
          // },
         {
            type: 'docSidebar',
            sidebarId: 'experienceSidebar',
            position: 'left',
            label: '关于本站',
          },
          // {
          //   type: 'localeDropdown',
          //   position: 'right',
          // }, 
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: '网站政策',
            items: [
              {
                label: '隐私政策',
                to: '/privacy',
              },
            ],
          },
          {
            title: '更多',
            items: [
              {
                label: '站点地图',
                to: '/sitemap.xml',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} 跨境全链路.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
