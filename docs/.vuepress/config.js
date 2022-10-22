import {defaultTheme} from "vuepress"
import { docsearchPlugin } from '@vuepress/plugin-docsearch'

export default ({
    head: [
        ['link', {rel: 'icon', href: '/assets/images/redefine-logo.svg'}],
    ],
    //base: '/docs/',  // 如果编译后的静态文件部署不在网站根域名下，需要指定该项
    repo: 'https://github.com/EvanNotFound/hexo-theme-redefine',
    logo: '/assets/images/redefine-logo.svg',
    editLinks: true,
    // 文档仓库和项目本身不在一个仓库，需要指定该项
    docsRepo: 'https://github.com/EvanNotFound/redefine-docs',
    docsDir: 'docs',          // 文档不是放在仓库的根目录下，需要指定该项
    docsBranch: 'main',    // 文档源文件（未构建的）所在的分支
    sidebarDepth: 3,

    locales: {
        '/': {
            lang: 'zh-CN',
            title: 'hexo-theme-redefine',
            description: '一款简约，但不简单的 Hexo 主题',
        },

        '/en/': {   
            lang: 'en-US',
            title: 'hexo-theme-redefine',
            description: 'A simple & fast & pure theme, but with no compromise.',
        }
    },
            

    theme: defaultTheme({
        locales: {
            '/': {
                logo: '/assets/images/redefine-logo.svg',
                repo: 'https://github.com/EvanNotFound/hexo-theme-redefine',
                selectLanguageText: 'Languages',
                selectLanguageName: '简体中文',
                editLinkText: '帮助完善文档',
                lastUpdated: '上次更新',
                serviceWorker: {
                    updatePopup: {
                        message: "发现新内容可用",
                        buttonText: "刷新"
                    }
                },

                sidebar: {
                    '/': [
                        {
                            text: '使用教程',
                            collapsable: false,
                            children: [
                                '/usage-tutorial/quick-start',
                                '/usage-tutorial/configuration-guide',
                                '/usage-tutorial/advanced',
                            ],
                        },
                        {
                            text: '项目相关',
                            collapsable: false,
                            children: [
                                '/todo/todo',
                            ],
                        },
                    ],
                },
                
                navbar: [
                    {
                        text: '快速开始',
                        link: '/usage-tutorial/quick-start',
                    },
                    {
                        text: '配置指南',
                        link: '/usage-tutorial/configuration-guide.html',
                    },
                    {
                        text: '进阶设置',
                        link: '/usage-tutorial/advanced',
                    },
                ],
            },
    
            '/en/': {
                logo: '/assets/images/redefine-logo.svg',
                repo: 'https://github.com/EvanNotFound/hexo-theme-redefine',
                selectLanguageText: '切换语言',
                selectLanguageName: 'English',
                editLinkText: 'Edit this page on GitHub',
                lastUpdated: 'Last Updated',
                serviceWorker: {
                    updatePopup: {
                        message: "New content is available.",
                        buttonText: "Refresh"
                    }
                },

                sidebar: {
                    '/en/': [
                        {
                            text: 'Usage guide',
                            collapsable: false,
                            children: [
                                '/en/usage-tutorial/quick-start',
                                '/en/usage-tutorial/configuration-guide',
                                '/en/usage-tutorial/advanced',
                            ],
                        },
                        {
                            text: 'Other things',
                            collapsable: false,
                            children: [
                                '/en/todo/todo',
                            ],
                        },
                    ],
                },

                navbar: [
                    {
                        text: 'Quick Start',
                        link: '/en/usage-tutorial/quick-start',
                    },
                    {
                        text: 'Configuration Guide',
                        link: '/en/usage-tutorial/configuration-guide.html',
                    },
                    {
                        text: 'Advanced',
                        link: '/en/usage-tutorial/advanced',
                    },
                ],
            },
        },
    }),

/*    plugins: [
        docsearchPlugin({
          // 配置项
        }),
      ],
*/
})







