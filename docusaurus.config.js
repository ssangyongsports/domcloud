// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'DOM Cloud',
  tagline: 'Classic Web Hosting Made Easy',
  url: 'https://domcloud.co/',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'assets/icon/favicon.ico',
  scripts: [
    {
      src: "https://stat.wellosoft.net/js/plausible.js",
      defer: true,
      "data-domain": "domcloud.co"
    }
  ],

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'domcloud', // Usually your GitHub org/user name.
  projectName: 'domcloud_co', // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
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
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl:
            'https://github.com/domcloud/domcloud-co/tree/master/',
        },
        blog: {
          showReadingTime: true,
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
      metadata: [{
        name: 'twitter:card',
        content: 'summary_large_image'
      }, {
        name: 'twitter:site',
        content: '@domcloud_co',
      }, {
        name: 'twitter:creator',
        content: '@willnode',
      }],
      navbar: {
        title: 'DOM Cloud',
        logo: {
          alt: 'DOM Cloud Logo',
          src: '/assets/icon.svg',
        },
        items: [
          { to: '/price', label: 'Pricing', position: 'left' },
          {
            type: 'doc',
            docId: 'intro/intro',
            position: 'left',
            label: 'Documentation',
          },
          { to: '/blog', label: 'Blog', position: 'left' },
          {
            href: 'https://my.domcloud.co/login',
            label: 'Login',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Site',
            items: [
              {
                label: 'Pricing',
                to: '/price',
              },
              {
                label: 'Documentation',
                to: '/docs/intro',
              },
              {
                label: 'Blog',
                to: '/blog',
              },
              {
                label: 'About',
                to: '/about',
              },
            ],
          },
          {
            title: 'Contact Us',
            items: [
              {
                label: 'Forum',
                href: 'https://github.com/domcloud/domcloud-co/discussions/',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/domcloud_co',
              },
              {
                label: 'Chat',
                href: 'https://t.me/WIIIN0DE',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Sign in to Portal',
                href: 'https://my.domcloud.co/login',
              },
              {
                label: 'Privacy Notice',
                href: '/privacy',
              },
              {
                label: 'Terms of Service',
                href: '/service',
              },
            ],
          },
        ],
        copyright: `© ${new Date().getFullYear()} DOM Cloud Hosting, a project run by <a class="text--warning" href="https://wellosoft.net/" target="_blank">Wildan Mubarok</a>.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;