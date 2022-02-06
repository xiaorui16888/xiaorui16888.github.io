const utils = require('./utils')
module.exports = {
  title: 'Guo\'s Log',
  description: 'Guo\'s Log',
  head: [
    ['link', { rel: 'icon', href: `https://github.githubassets.com/favicon.ico` }]
  ],
  markdown: {
    toc: { includeLevel: [2, 3] }, //[[toc]]包含的级别
    lineNumbers: true // 代码块显示行号
  },
  themeConfig: {
    nav: [
      { text: '笔记', link: '/Notes/' }
    ],
    sidebar: utils.inferSiderbars(),
    repo: 'https://github.com/xiaorui16888',
    // 如果你的文档不在仓库的根部
    docsDir: 'docs',
    // 可选，默认为 master
    docsBranch: 'master',
    // 默认为 true，设置为 false 来禁用
    editLinks: true,
    sidebarDepth: 1,
    lastUpdated: 'Last Updated', // 文档更新时间：每个文件git最后提交的时间
  },
  configureWebpack: (config, isServer) => {
    if (!isServer) {
      return {
        resolve: {
          alias: {
            '@public': './public'
          }
        },
        devServer: {
          open: true,
          hot: true,
          https: true
        }
      }
    }
  }
}