module.exports = {
  title: "新",
  description: "曾经是个前端",
  dest: "./dist",
  port: "8888",
  // webpack 配置
  configureWebpack: {
    resolve: {
      alias: {
        "@alias": "path/to/some/dir"
      }
    }
  },
  // 注入到当前页面的 HTML <head> 中的标签
  head: [
    ["link", { rel: "icon", href: "/favicon.ico" }] // 增加一个自定义的 favicon(网页标签的图标)
  ],
  base: "/vuepress/",
  markdown: {
    lineNumbers: true // 代码块显示行号
  },
  themeConfig: {
    sidebarDepth: 2, // 将同时提取markdown中h2 和 h3 标题，显示在侧边栏上。
    lastUpdated: "Last Updated", // 文档更新时间：每个文件git最后提交的时间
    nav: [
      { text: "js", link: "/js/" },
      { text: "外链", link: "http://www.baidu.com/" },
      {
        text: "下拉列表",
        items: [
          { text: "内链一", link: "/js/" },
          {
            text: "外链二",
            link: "http://www.baidu.com/"
          }
        ]
      }
    ],
    sidebar: {
      "/js/": [
        "",
        "js基础",
        "js进阶",
        {
          title: "js标题一",
          collapsable: false,
          children: ["/js/js2/"]
        }
      ]
    }
  }
};
