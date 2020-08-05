const { description } = require('../../package')

module.exports = {
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: '前端文档',
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#description
   */
  description: description,

  /**
   * Extra tags to be injected to the page HTML `<head>`
   *
   * ref：https://v1.vuepress.vuejs.org/config/#head
   */
  head: [
    ['link',{rel:'shortcut icon',href:'/icons/favicon.ico'}],
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }]
  ],

  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  themeConfig: {
    repo: '',
    smoothScroll: true,
    editLinks: true,
    // 假如你的文档仓库和项目本身不在一个仓库：
    docsRepo: 'Const-Team/Document',
    // 假如文档不是放在仓库的根目录下：
    docsDir: 'docs',
    // 假如文档放在一个特定的分支下：
    docsBranch: 'master',
    
    editLinkText: '帮助我们改善此页面',
    lastUpdated: '文档更新时间',
    nav: [
      {
        text: '规范',
        link: '/standard/',
        ariaLabel: 'standard Menu',
        items: [
          { text: 'HTML', link: '/standard/HTML/' },
          { text: 'CSS', link: '/standard/CSS/' },
          { text: 'JavaScript', link: '/standard/JavaScript/' },
          { text: 'VUE', link: '/standard/VUE/' },
          { text: 'JSON', link: '/standard/JSON/' },
          { text: 'Markdown', link: '/standard/Markdown/' },
          { text: '文案', link: '/standard/CopyWriter/' },
        ]
      },
      {
        text: '物料',
        link: '/materiel/',
      },
      {
        text: '插件',
        link: '/plugin/',
      },
      {
        text: '函数库',
        link: '/utils/',
      },
      {
        text: '工具',
        link: '/tools/',
      }
    ],
    sidebar: {
      '/standard/': [
        {
          title: '规范',
          collapsable: false,
          children: [
            '',
            'HTML',
            'CSS',
            'JavaScript',
            'VUE',
            'JSON',
            'Markdown',
            'CopyWriter',
          ]
        }
      ],
      '/materiel/': [
        {
          title: '物料',
          collapsable: false,
          children: [
            ''
          ]
        }
      ],
      '/plugin/': [
        {
          title: '插件',
          collapsable: false,
          children: [
            ''
          ]
        }
      ],
      '/utils/': [
        {
          title: '函数库',
          collapsable: false,
          children: [
            ''
          ]
        }
      ],
      '/tools/': [
        {
          title: '工具',
          collapsable: false,
          children: [
            '',
            'NodeJS',
            'Sourcetree',
            'VisualStudioCode',
            'XShell',
            'Typora',
            'PicGo',
            'XMind',
          ]
        }
      ],
    }
  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: {
    '@vuepress/back-to-top':{},
    '@vuepress/medium-zoom': {
      selector: '.page img'
    },
    '@vuepress/last-updated': {
      transformer: (timestamp) => {
        const moment = require('moment')
        return moment(timestamp).utcOffset(8).format('YYYY-MM-DD HH:mm:ss');
      }
    }
  }
}
