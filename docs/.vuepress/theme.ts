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
  repoLabel: "GitHub",

  docsDir: "docs/",
  docsBranch: "new",
  docsRepo: "Cccc-owo/server-status",

  // navbar
  navbar: navbar,

  // sidebar
  sidebar: "heading",

  footer: "你好啊~",

  displayFooter: true,

  pageInfo: ["Author", "Original"],

  encrypt: {
    config: {
  //    "/guide/encrypt.html": ["1234"],
    },
  },

  plugins: {
    blog: false,
    copyCode: {},
    comment: {
      /**
       * Using Giscus
       */
      //provider: "Giscus",
      //repo: "username/repo",
      //repoId: "xxxx",
      //category: "Announcements",
      //categoryId: "xxxx",
   
      /**
       * Using Twikoo
       */
      // provider: "Twikoo",
      // envId: "https://yourwebsite.app",

      /**
       * Using Waline
       */
      provider: "Waline",
      serverURL: "https://yqsg-comment.iscccc.eu.org/",
    },
    
    mdEnhance: {
      align: true,
      attrs: true,
      chart: true,
      codetabs: true,
      container: true,
      demo: true,
      echarts: true,
      flowchart: true,
      gfm: true,
      imageSize: true,
      include: true,
      lazyLoad: true,
      mark: true,
      mermaid: true,
      playground: {
        presets: ["ts", "vue"],
      },
      presentation: {
        plugins: ["highlight", "math", "search", "notes", "zoom"],
      },
      stylize: [
        {
          matcher: "Recommanded",
          replacer: ({ tag }) => {
            if (tag === "em")
              return {
                tag: "Badge",
                attrs: { type: "tip" },
                content: "Recommanded",
              };
          },
        },
      ],
      sub: true,
      sup: true,
      tabs: true,
      tex: true,
      vpre: true,
      vuePlayground: true,
    },
  },
})
