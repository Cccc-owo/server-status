import { hopeTheme } from "vuepress-theme-hope";
import navbar from "./navbar.js";
import sidebar from "./sidebar.js";

export default hopeTheme({
  hostname: "https://mcserver.iscccc.eu.org",

  author: {
    name: "Cccc_",
    url: "https://blog.iscccc.eu.org",
  },

  iconAssets: "iconfont",

  logo: "/images/icon.png",

  repo: "Cccc-owo/server-status",

  docsDir: "docs/",
  
  docsRepo: "Cccc-owo/server-status",

  // navbar
  navbar: navbar,

  // sidebar
  sidebar: sidebar,

  footer: "你好啊~",

  displayFooter: true,

  pageInfo: ["Author", "Original", "Date", "Category", "Tag", "ReadingTime"],

  //blog: {
  //  description: "一个前端开发者",
  //  intro: "/intro.html",
  //  medias: {
  //    Baidu: "https://example.com",
  //  },
  //},

  encrypt: {
    config: {
  //    "/guide/encrypt.html": ["1234"],
    },
  },

  plugins: {
  //  blog: {
  //    autoExcerpt: true,
  //  },

    // 如果你不需要评论，可以直接删除 comment 配置，
    // 以下配置仅供体验，如果你需要评论，请自行配置并使用自己的环境，详见文档。
    // 为了避免打扰主题开发者以及消耗他的资源，请不要在你的正式环境中直接使用下列配置!!!!!
    comment: {
      /**
       * Using Giscus
       */
      //provider: "Giscus",
      //repo: "vuepress-theme-hope/giscus-discussions",
      //repoId: "R_kgDOG_Pt2A",
      //category: "Announcements",
      //categoryId: "DIC_kwDOG_Pt2M4COD69",
   
      /**
       * Using Twikoo
       */
      // provider: "Twikoo",
      // envId: "https://twikoo.ccknbc.vercel.app",

      /**
       * Using Waline
       */
      // provider: "Waline",
      // serverURL: "https://vuepress-theme-hope-comment.vercel.app",
    },

    mdEnhance: {
      enableAll: false,
      presentation: {
        plugins: ["highlight", "math", "search", "notes", "zoom"],
      },
    },
  },
})
