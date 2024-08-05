// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Australian Agriculture Traceability Protocol',
  tagline:
    'Supporting farmers and food manufacturers with a free, open and scalable traceability and transparency framework that meets the safety and sustainability requirements of domestic and export markets.',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://gs-gs.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/aatp/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'AgTrace', // Usually your GitHub org/user name.
  projectName: 'aatp', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

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
          routeBasePath: '/docs',
          editUrl: ({versionDocsDirPath, docPath}) =>
            `https://github.com/gs-gs/aatp/edit/main/website/${versionDocsDirPath}/${docPath}`,
        },
        blog: false,
        theme: {
          customCss: [
            require.resolve('./src/css/custom.scss'),
            require.resolve('./src/css/index.scss'),
          ],
        },
      }),
    ],
  ],

  plugins: ['docusaurus-plugin-sass'],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      slackLink:
        'https://join.slack.com/t/uncefact/shared_invite/zt-1d7hd0js1-sS1Xgk8DawQD9VgRvy1QHQ',
      colorMode: {
        disableSwitch: true,
      },
      // Replace with your project's social card
      image: 'img/un-crm-social-card.png',
      navbar: {
        title: 'AATP',
        logo: {
          alt: 'Australian Agriculture Traceability Protocol',
          src: 'img/logo.svg',
        },
        items: [
          {to: '/docs/about', label: 'About the AATP', position: 'right'},
          {
            to: '/docs/industry-processes',
            label: 'Industry processes',
            position: 'right',
          },
          {
            to: '/docs/specification',
            label: 'The specification',
            position: 'right',
          },
          {
            to: '/docs/tools-and-support',
            label: 'Implementation support',
            position: 'right',
          },
          {to: '/docs/implementations', label: 'Register', position: 'right'},
          {
            href: 'https://app.slack.com/client/T03KNUD7LHZ/C05R8DD2AKZ',
            position: 'right',
            html: '<svg class="icon icon-slack"><use xlink:href="#slack"></use></svg><span class="menu-item-name">Slack</span>',
            className: 'navbar-slack-link',
          },
          {
            href: 'https://github.com/uncefact/spec-untp',
            html: '<svg class="icon"><use xlink:href="#github"></use></svg><span class="menu-item-name">Github</span>',
            className: 'navbar-github-link',
            position: 'right',
          },
        ],
      },
      footer: {
        links: [
          {
            label: 'Terms and Conditions of Use',
            to: '/terms',
          },
          {
            label: 'Privacy Notice',
            to: '/privacy',
          },
        ],
        copyright: `© Food Agility CRC`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
