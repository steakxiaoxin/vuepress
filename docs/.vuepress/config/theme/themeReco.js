module.exports = {
  type: "blog", // 首页风格
  // 博客设置
  blogConfig: {
    category: {
      location: 2, // 在导航栏菜单中所占的位置，默认2
      text: "分类" // 默认 “分类”
    },
    tag: {
      location: 3, // 在导航栏菜单中所占的位置，默认3
      text: "标签" // 默认 “标签”
    }
  },
  // 最后更新时间
  lastUpdated: "Last Updated", // string | boolean
  // 作者
  author: "新",
  // 备案号
  record: "浙ICP备19049160号-1",
  // 项目开始时间
  startYear: "2019",
  // friendLink: [
  //   {
  //     title: "vuepress-theme-reco",
  //     desc: "A simple and beautiful vuepress Blog & Doc theme.",
  //     avatar: "https://vuepress-theme-reco.recoluan.com/icon_vuepress_reco.png",
  //     link: "https://vuepress-theme-reco.recoluan.com"
  //   },
  //   {
  //     title: "午后南杂",
  //     desc: "Enjoy when you can, and endure when you must.",
  //     email: "recoluan@qq.com",
  //     link: "https://www.recoluan.com"
  //   }
  //   // ...
  // ]
};
