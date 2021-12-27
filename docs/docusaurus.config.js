// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'React Native Material',
  tagline: 'Modular and customizable Material Design UI components for React Native',
  url: 'https://react-native-material.com/',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'yamankatby', // Usually your GitHub org/user name.
  projectName: 'react-native-material', // Usually your repo name.
  clientModules: [require.resolve('./snackPlayerInitializer.js')],
  scripts: [{ src: 'https://snack.expo.dev/embed.js', defer: true }],

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/yamankatby/react-native-material/edit/main/docs/',
          remarkPlugins: [
            [require('@docusaurus/remark-plugin-npm2yarn'), { sync: true }],
            require('./preview')
          ]
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/yamankatby/react-native-material/edit/main/docs/blog/',
          remarkPlugins: [
            [require('@docusaurus/remark-plugin-npm2yarn'), { sync: true }],
            require('./preview')
          ]
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css')
        },
        gtag: {
          trackingID: 'G-5L00H23VKJ',
          anonymizeIP: true
        }
      })
    ]
  ],

  themeConfig:
  /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      algolia: {
        appId: 'BH4D9OD16A',
        apiKey: 'b2cfa75a49a88ef384aa3bd4a7977043',
        indexName: 'react-native-material',
        contextualSearch: true,
        searchParameters: {}
      },
      navbar: {
        title: '@react-native-material',
        items: [
          {
            type: 'doc',
            docId: 'getting-started',
            position: 'left',
            label: 'Docs'
          },
          { to: '/blog', label: 'Blog', position: 'left' },
          {
            type: 'dropdown',
            label: 'v1.3.1',
            items: [
              { label: 'v1.3.1', to: '/' },
              { label: 'v1.2.*', href: 'https://react-native-material-hadt1ykpo-yamankatby.vercel.app' },
              {
                label: 'v1.1.*',
                href: 'https://react-native-material-38lpom7xc-yamankatby.vercel.app/docs/getting-started'
              },
              {
                label: 'v1.0.*',
                href: 'https://react-native-material-buf67gwtw-yamankatby.vercel.app/getting-started/installation'
              }
            ],
            position: 'right'
          },
          {
            href: 'https://twitter.com/rn_material',
            label: 'Twitter',
            position: 'right'
          },
          {
            href: 'https://github.com/yamankatby/react-native-material',
            label: 'GitHub',
            position: 'right'
          }
        ]
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Getting Started',
                to: '/docs/getting-started'
              }
            ]
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Stack Overflow',
                href: 'https://stackoverflow.com/questions/tagged/react-native-material'
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/rn_material'
              }
            ]
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                to: '/blog'
              },
              {
                label: 'GitHub',
                href: 'https://github.com/yamankatby/react-native-material'
              }
            ]
          }
        ],
        copyright: `Copyright © ${new Date().getFullYear()} @react-native-material. Built with Docusaurus.`
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme
      }
    })
};

module.exports = config;
