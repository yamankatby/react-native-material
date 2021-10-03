const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

// With JSDoc @type annotations, IDEs can provide config autocompletion
/** @type {import('@docusaurus/types').DocusaurusConfig} */
(module.exports = {
  title: 'React Native Material',
  tagline: 'Modular and customizable Material Design UI components for React Native',
  url: 'https://react-native-material.com/',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'yamankatby', // Usually your GitHub org/user name.
  projectName: 'react-native-material', // Usually your repo name.
  plugins: ['docusaurus-plugin-react-native-web', '@docusaurus/plugin-google-analytics'],
  presets: [
    [
      '@docusaurus/preset-classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/yamankatby/react-native-material/edit/main/docs/',
          remarkPlugins: [
            [require('@docusaurus/remark-plugin-npm2yarn'), { sync: true }]
          ]
        },
        blog: false,
        // blog: {
        //   showReadingTime: true,
        //   // Please change this to your repo.
        //   editUrl:
        //     'https://github.com/yamankatby/react-native-material/edit/main/docs/blog/'
        // },
        theme: {
          customCss: require.resolve('./src/css/custom.css')
        }
      })
    ]
  ],
  themeConfig:
  /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      googleAnalytics: {
        trackingID: 'G-5L00H23VKJ'
      },
      navbar: {
        title: 'React Native Material',
        // logo: {
        //   alt: 'My Site Logo',
        //   src: 'img/logo.svg'
        // },
        items: [
          {
            type: 'doc',
            docId: 'getting-started',
            position: 'left',
            label: 'Docs'
          },
          // { to: '/blog', label: 'Blog', position: 'left' },
          {
            href: 'https://github.com/yamankatby/react-native-material',
            label: 'GitHub',
            position: 'right'
          }
        ]
      },
      // footer: {
      //   style: 'dark',
      //   links: [
      //     {
      //       title: 'Docs',
      //       items: [
      //         {
      //           label: 'Tutorial',
      //           to: '/docs/intro'
      //         }
      //       ]
      //     },
      //     {
      //       title: 'Community',
      //       items: [
      //         {
      //           label: 'Stack Overflow',
      //           href: 'https://stackoverflow.com/questions/tagged/docusaurus'
      //         },
      //         {
      //           label: 'Discord',
      //           href: 'https://discordapp.com/invite/docusaurus'
      //         },
      //         {
      //           label: 'Twitter',
      //           href: 'https://twitter.com/docusaurus'
      //         }
      //       ]
      //     },
      //     {
      //       title: 'More',
      //       items: [
      //         {
      //           label: 'Blog',
      //           to: '/blog'
      //         },
      //         {
      //           label: 'GitHub',
      //           href: 'https://github.com/facebook/docusaurus'
      //         }
      //       ]
      //     }
      //   ],
      //   copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`
      // },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme
      }
    })
});
