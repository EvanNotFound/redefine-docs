import {defaultTheme} from "vuepress"

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
                            title: '使用教程',
                            collapsable: false,
                            children: [
                                '/usage-tutorial/quick-start',
                                '/usage-tutorial/configuration-guide',
                                '/usage-tutorial/advanced',
                            ],
                        },
                        {
                            title: 'To-do List',
                            collapsable: false,
                            children: [
                                '/todo/todo',
                            ],
                        },
                    ],
                },
                nav: [
                    {
                        text: '使用教程',
                        items: [
                            {
                                text: '快速开始',
                                link: '/usage-tutorial/quick-start',
                            },
                            {
                                text: '配置指南',
                                link: '/usage-tutorial/configuration-guide',
                            },
                            {
                                text: '进阶设置',
                                link: '/usage-tutorial/advanced',
                            },
                        ],
                    },
                    {
                        text: '参与贡献',
                        link: '/contribute/contribute',
                    },
                ],
            },
    
            '/en/': {
                selectLanguageText: 'Languages',
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
                            title: 'Usage guide',
                            collapsable: false,
                            children: [
                                '/en/usage-tutorial/quick-start',
                                '/en/usage-tutorial/configuration-guide',
                                '/en/usage-tutorial/advanced',
                            ],
                        },
                        {
                            title: 'Contribution',
                            collapsable: false,
                            children: [
                                '/en/todo/todo',
                            ],
                        },
                    ],
                },
                nav: [
                    {
                        text: 'Usage guide',
                        items: [
                            {
                                text: 'Quick start',
                                link: '/en/usage-tutorial/quick-start',
                            },
                            {
                                text: 'Configuration guide',
                                link: '/en/usage-tutorial/configuration-guide',
                            },
                            {
                                text: 'Advanced',
                                link: '/en/usage-tutorial/advanced',
                            },
                        ],
                    },
                    {
                        text: 'To-do List',
                        link: '/en/todo/todo',
                    },
                ],
            },
        },
    }),
})







