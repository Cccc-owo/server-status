import { defineUserConfig } from 'vuepress'
import { searchPlugin } from '@vuepress/plugin-search'
import { defaultTheme } from '@vuepress/theme-default'

export default defineUserConfig({
  lang: 'zh-CN',
  title: '友情时光',
  description: '服务器状态检测',
  
  theme: defaultTheme({
    navbar: [
      {
        text: '主页',
        link: '/',
      },
      {
        text: '关于',
        children: ['/about/me.html', '/about/server.html'],
      },
      {
        text: '我的博客',
        link: 'https://blog.iscccc.eu.org',
      },
    ],
    logo: '/images/icon.png',
    repo: 'Cccc-owo/server-status',
    editLinkText: '在 GitHub 上编辑此页',
    backToHome: '你好像走丢了，点我回到主页',
  }),
  
  plugins: [
    searchPlugin({
      locales: {
        '/': {
          placeholder: 'Search',
        },
        '/zh/': {
          placeholder: '搜索',
        },
      },
    }),
  ],
  
  head: [
      ['link', {
         rel: 'icon',
         href: '/images/icon.png'
      }]
    ],
})
