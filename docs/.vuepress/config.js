const {path} = require('@vuepress/utils')

module.exports = {
    lang: 'zh-CN',
    title: 'TailwindCSS 中文网',
    description: 'TailwindCSS 指南、教程、文档、主题、模板、组件、插件、工具等相关资源',
    head: [
        ['meta', {name: 'keywords', content: 'TailwindCSS中文网, TailwindCSS中文文档, TailwindCSS文档, TailwindCSS中国, TailwindCSS教程'}],
        ['link', {rel: 'icon', href: '/images/logo@0.5x.png'}]
    ],
    themeConfig: {
        logo: '/images/logo@0.5x.png',
        repo: 'codesinging/tailwindchina',
        navbar: [
            {text: '指南', link: '/guide/'},
            {text: '教程', link: '/tutorials/'},
            {text: '文档', link: 'https://tailwindcss.com'},
            {text: 'UI', link: '/ui/'},
            {text: '插件', link: '/plugins/'},
            {text: '工具', link: '/tools/'},
        ],
        sidebar: 'auto',
        editLink: true,
        editLinkText: '编辑此页面',
        docsBranch: 'master',
        lastUpdated: true,
        lastUpdatedText: '最后更新',
        contributors: true,
        contributorsText: '贡献者',
        backToHome: '返回首页',
        toggleDarkMode: '切换黑暗模式',
    },
    plugins: [
        [
            '@vuepress/register-components',
            {
                componentsDir: path.resolve(__dirname, './components'),
            },
        ],
    ],
}
