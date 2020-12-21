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
    // docsRepo: 'Const-Team/Document',
    // 假如文档不是放在仓库的根目录下：
    docsDir: 'docs',
    // 假如文档放在一个特定的分支下：
    docsBranch: 'master',
    
    // editLinkText: '帮助我们改善此页面',
    lastUpdated: '文档更新时间',
    nav: [
      {
        text: '规范',
        link: '/standard/',
        ariaLabel: 'standard Menu',
        items: [
          { text: 'HTML编码规范', link: '/standard/HTML/' },
          { text: 'CSS编码规范', link: '/standard/CSS/' },
          { text: 'JavaScript编码规范', link: '/standard/JavaScript/' },
          { text: 'VUE编码规范', link: '/standard/VUE/' },
          { text: 'Markdown语法说明', link: '/standard/Markdown/' },
          { text: 'Git提交规范', link: '/standard/Commit/' },
          { text: 'JSON数据规范', link: '/standard/JSON/' },
          { text: '文案风格指南', link: '/standard/CopyWriter/' },
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
        ariaLabel: 'utils Menu',
        items: [
          { text: '类型判断类', link: '/utils/Type/' },
          { text: '常规验证类', link: '/utils/Validator/' },
          { text: '字符串类', link: '/utils/String/' },
          { text: '数组类', link: '/utils/Array/' },
          { text: '数字类', link: '/utils/Number/' },
          { text: '金额类', link: '/utils/Money/' },
          { text: '日期类', link: '/utils/Date/' },
          { text: '浮点计算类', link: '/utils/Calculate/' },
          { text: '工具类', link: '/utils/Tools/' },
          { text: '存储类', link: '/utils/Storage/' },
          { text: 'DOM类', link: '/utils/DOM/' },
          { text: '事件处理类', link: '/utils/Event/' },
        ]
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
            'Markdown',
            'Commit',
            'JSON',
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
            '',
            'Type',
            'Validator',
            'String',
            'Array',
            'Number',
            'Money',
            'Date',
            'Calculate',
            'Tools',
            'Storage',
            'DOM',
            'Event',
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
    'pangu':{},
    'reading-progress':{},
    '@vuepress/back-to-top':{},
    '@vuepress/medium-zoom': {
      selector: '.page img'
    },
    '@vuepress/last-updated': {
      transformer: (timestamp) => {
        const moment = require('moment')
        return moment(timestamp).utcOffset(8).format('YYYY-MM-DD HH:mm:ss');
      }
    },
    'copy-code':{
      copySelector: ['div[class*="language-"] pre', 'div[class*="aside-code"] aside'], // String or Array
      copyMessage: '复制成功！', // default is 'Copy successfully and then paste it for use.'
      duration: 800, // prompt message display time.
      showInMobile: false // whether to display on the mobile side, default: false.
    }
  }
}
