// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'hexo-theme-redefine',
  tagline: 'A simple & fast & pure theme',
  url: 'https://redefine-docs.evanluo.top',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/logo.webp',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'EvanNotFound', // Usually your GitHub org/user name.
  projectName: 'hexo-theme-redefine', // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'zh-Hans',
    locales: ['zh-Hans', 'en'],
    localeConfigs: {
      en: {
        htmlLang: 'en-US',
      },
    },
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        hideOnScroll: true,
        title: 'hexo-theme-redefine',
        logo: {
          alt: 'Hexo Theme Redefine Logo',
          src: 'img/logo.webp',
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Docs',
          },
          {to: 'https://www.evanluo.top/', label: 'Blog', position: 'left'},
          {to: '/blog', label: 'Changelog', position: 'left'},
          {
            href: 'https://github.com/EvanNotFound/hexo-theme-redefine',
            className: 'fa-brands fa-github fa-xl',
            position: 'right',
          },
          {
            type: 'localeDropdown',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        logo: {
          alt: 'Anonymous Land Logo',
          src: 'img/AnonymousLand_neon.svg',
          href: 'https://www.evanluo.top/',
          height: 51,
        },
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Intro',
                to: '/docs/intro',
              },
              {
                label: 'Get Started',
                to: '/docs/quick-start',
              },
              {
                label: 'Configuration',
                to: '/docs/configuration-guide',
              },
              {
                label: 'Advanced',
                to: '/docs/advanced',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Discord',
                href: 'https://discord.com/invite/gmRyUwZt5G',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                to: 'https://www.evanluo.top/',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/EvanNotFound/hexo-theme-redefine',
              },
            ],
          },
          {
            title: 'Contact me',
            items: [
              {
                label: 'Email',
                to: 'mailto:contact@evanluo.top',
              },
              
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} EvanNotFound`,
      },
      prism: {
        theme: require('prism-react-renderer/themes/github'),
        darkTheme: require('prism-react-renderer/themes/vsDark'),
      },

      algolia: {
        appId: '8B0V9IG8P6',
        apiKey: 'b2a1faf7fa2a59eb7889f0362829bc3b',
        indexName: 'hexo-theme-redefine',
        contextualSearch: false,
        searchPagePath: 'search',
      },
    }),
};

module.exports = config;
