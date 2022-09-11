import { defineUserConfig } from "vuepress";
import { searchPlugin } from '@vuepress/plugin-search';
import theme from "./theme.js";

export default defineUserConfig({
  lang: "zh-CN",
  title: '友情时光',
  description: '服务器状态检测',

  base: "/",

  head: [['link', { rel: 'icon', href: '/images/icon.png' }]],

  theme,

  plugins: [
    searchPlugin({
      locales: {
        "/": {
          placeholder: "搜索",
        },
      },
    }),
  ],

});
