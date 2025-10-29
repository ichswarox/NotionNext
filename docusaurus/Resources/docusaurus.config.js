// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Resources',
  tagline: 'Download Software, 3D Models, Video Templates, Music and More',
  favicon: 'img/favicon.ico',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://resources.ucards.store',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'facebook', // Usually your GitHub org/user name.
  projectName: 'docusaurus', // Usually your repo name.

  onBrokenLinks: 'throw',

  markdown: {
    hooks: {
      onBrokenMarkdownLinks: 'warn',
    },
  },

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'zh-CN', 'es', 'ru', 'ar', 'fr', 'pt', 'hi', 'id', 'ko', 'ja'],
    localeConfigs: {
      'zh-CN': { label: '简体中文', direction: 'ltr' },
      en: { label: 'English', direction: 'ltr' },
      es: { label: 'Español', direction: 'ltr' },
      ru: { label: 'Русский', direction: 'ltr' },
      ar: { label: 'العربية', direction: 'rtl' },
      fr: { label: 'Français', direction: 'ltr' },
      pt: { label: 'Português', direction: 'ltr' },
      hi: { label: 'हिन्दी', direction: 'ltr' },
      id: { label: 'Bahasa Indonesia', direction: 'ltr' },
      ko: { label: '한국어', direction: 'ltr' },
      ja: { label: '日本語', direction: 'ltr' },
    },
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
          //editUrl:
          //  'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: false, // 移除blog功能
        theme: {
          customCss: './src/css/custom.css',
        },
        gtag: {
          trackingID: 'G-GH6K1KNQVB',
          anonymizeIP: true,
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
      image: 'img/docusaurus-social-card.jpg',
      announcementBar: {
        id: 'baiduyun_download',
        content:
          'If you can\'t download resources from Baiduyun, request us for direct link WhatsApp <a target="_blank" rel="noopener noreferrer" href="https://wa.me/8613237610083">https://wa.me/8613237610083</a>',
        backgroundColor: '#4a90e2',
        textColor: '#ffffff',
        isCloseable: true,
      },
      navbar: {
//        title: 'Resources',
        logo: {
          alt: 'My Site Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: '3dappSidebar',
            label: '3DApp 🎨',
            position: 'left',
          },
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            label: 'Tutorial 📚',
            position: 'left',
          },
          {
            type: 'docSidebar',
            sidebarId: 'gallerySidebar',
            label: 'Gallery 🖼️',
            position: 'left',
          },
          {
            type: 'docSidebar',
            sidebarId: 'compSidebar',
            label: 'Comp 🎨',
            position: 'left',
          },
          {
            type: 'docSidebar',
            sidebarId: 'blenderSidebar',
            label: 'Blender 🔥',
            position: 'left',
          },
          {
            type: 'docSidebar',
            sidebarId: 'textureSidebar',
            label: 'Texture 🎨',
            position: 'left',
          },
          {
            type: 'docSidebar',
            sidebarId: 'aeSidebar',
            label: 'Ae 🎬',
            position: 'left',
          },
          {
            type: 'docSidebar',
            sidebarId: 'modelSidebar',
            label: 'Model 🏗️',
            position: 'left',
          },
          {
            type: 'docSidebar',
            sidebarId: 'simSidebar',
            label: 'Sim ⚙️',
            position: 'left',
          },
          {
          type: 'localeDropdown',
          position: 'right',
          },
        ],
      },
    algolia: {
      appId: 'X2OVBWAWEW',
      apiKey: '953a15a62d0f415d3d9930f2c7f773b9',
      indexName: 'resources_ucards_store_x2ovbwawew_pages',
      replaceSearchResultPathname: {
        from: '/docs/', // or as RegExp: /\/docs\//
        to: '/',
      },
      contextualSearch: false,
    },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Resources',
            items: [
              {
                label: '3DApp',
                to: '/category/3dapp',
              },
            ],
          },
          {
            title: 'Community',
            items: [ 
              {
                label: 'Tags',
                href: '/tags',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'About Us',
                to: '/about-us',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Resource App.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
