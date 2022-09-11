import { navbar } from "vuepress-theme-hope";

export default navbar([
  {
    text: "主页",
    icon: "home",
    link: "/",
  },
  {
    text: "状态检测",
    icon: "async",
    link: "/status",
  },
  {
    text: "评论区",
    icon: "comment",
    link: "/comment",
  },
  {
    text: "关于",
    icon: "creative",
    prefix: "/about/",
    children: [
      { text: "关于我", link: "me.md" },
      { text: "关于服务器", link: "server.md" },
    ],
  },
  {
    text: "我的博客",
    icon: "profile",
    link: "https://blog.iscccc.eu.org/",
  }
]);
