---
title: TC-VP-GP
date: 2019-11-11
sidebar: "auto"
categories:
  - blog
#  - blog
tags:
  - deploy
  - fe
keys:
  - "bixin"
# publish: false
---

# TC-VP-GP


> 使用 TravisCI 配合 VuePress 到 GithubPages, 嗨一下 :boom::boom::boom:
>
> 大致步骤：
>
> 1. 搭建 vuepress，根据 markdown 文档生成页面
>
> 2. 搭建 github page 来访问生成的页面
>
> 3. 使用 travis 持续集成，方便以后更新文章



## 一、安装 vuepress

### 项目初始化

```bash
# 全局安装VuePress
yarn global add vuepress # 或者：npm install -g vuepress

# 新建文件夹 并进入
mkdir vuepress && cd vuepress

# 初始化package.json
yarn init -y # 或者 npm init -y

# 在根目录下新建 docs 文件夹
mkdir docs

# 在 docs 文件夹下创建 .vuepress 文件夹
mkdir .vuepress

# 在docs文件夹下面创建一个 README.md 作为 首页
touch README.md

# 在.vuepress 文件夹下面创建 config.js 和 public 文件夹
touch config.js && mkdir public
```

### 项目目录形如

```js
.
├── README.md								// 项目说明
├── deploy.sh 							// 不使用Travis的发布脚本
├── docs										// 所有文档所放文件夹
│   ├── .vuepress 					
│   │   ├── config.js				// 配置文件
│   │   └── public					// 静态资源文件夹
│   │       ├── avatar.jpeg
│   │       └── favicon.ico
│   ├── README.md 					// 首页
│   ├── js									// 模块一
│   │   ├── README.md				// 模块一目录
│   │   ├── js-1.md					// 模块一文章一
│   │   └── js-2.md
│   └── other
│       ├── README.md
│       └── TC-VP-GP.md
└── package.json
```

### 启动和构建

1. 在 package.json 中添加命令

```json
{
  "scripts": {
    "dev": "vuepress dev docs",
    "build": "vuepress build docs"
  }
}
```

2. 启动

```bash
yarn dev # 或者：npm run dev
```

3. 构建

```bash
yarn build # 或者：npm run build
```

### 插件及主题
[awesome-vuepress](https://github.com/vuepressjs/awesome-vuepress)

#### 1.安装依赖

```sh
yarn add vuepress-plugin-go-top vuepress-plugin-ribbon -D
```

在 config.js 中添加配置

```js
module.exports = {
  plugins: [
    [
      "go-top",
      "ribbon",
      {
        size: 90, // 彩带的宽度，默认为 90
        opacity: 0.8, // 彩带的不透明度，默认为 0.3
        zIndex: -1 // 彩带的 z-index 属性，默认值为 -1
      }
    ]
  ]
};
```



### 基本配置

#### 1. Config.js

```js
module.exports = {
  title: "新",
  description: "现在是个前端",
  dest: "./dist",
  port: "8888",
  base: "/vuepress/",
  plugins: [
    'go-top',
    [
      "ribbon",
      {
        size: 100, // 彩带的宽度，默认为 90
        opacity: 0.3, // 彩带的不透明度，默认为 0.3
        zIndex: -1 // 彩带的 z-index 属性，默认值为 -1
      }
    ],
    [
      "dynamic-title",
      {
        showIcon: "/favicon.ico",
        showText: "(/≧▽≦/)来啦老弟！",
        hideIcon: "/failure.ico",
        hideText: "(●—●)喔哟，崩溃啦！",
        recoverTime: 3000
      }
    ]
  ],
  head: [["link", { rel: "icon", href: "/favicon.ico" }]],
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
        text: "下拉",
        items: [
          { text: "内链一", link: "/js/" },
          { text: "外链二", link: "http://www.baidu.com/" }
        ]
      }
    ],
    sidebar: {
      "/js/": [
        "",
        "js基础",
        {
          title: "js标题一",
          collapsable: false,
          children: ["/js/js2/"]
        }
      ]
    }
  }
};
```

#### 2.首页readme

```markdown
---
home: true
heroImage: /avatar.jpeg
actionText: 快速上手 →
actionLink: /js/
features:
  - title: 简洁至上
    details: 以 Markdown 为中心的项目结构，以最少的配置帮助你专注于写作。
  - title: Vue驱动
    details: 享受 Vue + webpack 的开发体验，在 Markdown 中使用 Vue 组件，同时可以使用 Vue 来开发自定义主题。
  - title: 高性能
    details: VuePress 为每个页面预渲染生成静态的 HTML，同时在页面被加载的时候，将作为 SPA 运行。
footer: MIT Licensed | Copyright © 2018-present Evan You
---
```

### 添加评论

#### 1.安装依赖

`yarn add leancloud-storage valine`

#### 2.添加组件

```vue
<template>
  <section
    style="border-top: 2px solid #eaecef;padding-top:1rem;margin-top:2rem;"
  >
    <div>
      <!-- id 将作为查询条件 -->
      <span class="leancloud-visitors" data-flag-title="Your Article Title">
        <em class="post-meta-item-text">阅读量： </em>
        <i class="leancloud-visitors-count"></i>
      </span>
    </div>
    <h3>
      <a href="javascript:;"></a>
      评 论：
    </h3>
    <div id="vcomments"></div>
  </section>
</template>

<script>
export default {
  name: "Valine",
  mounted: function() {
    // require window
    const Valine = require("valine");
    if (typeof window !== "undefined") {
      document.getElementsByClassName("leancloud-visitors")[0].id =
        window.location.pathname;
      this.window = window;
      window.AV = require("leancloud-storage");
    }

    new Valine({
      el: "#vcomments",
      appId: "xxx", // your appId
      appKey: "xxx", // your appKey
      notify: false,
      verify: false,
      path: window.location.pathname,
      visitor: true,
      avatar: "wavatar",
      placeholder: "just go go"
    });
  }
};
</script>
```

#### 3.配置config

```js
plugins: [
  [
    "@vuepress/register-components",
    {
      componentsDir: "./components"
    }
  ],
  ...
]
```

#### 4.md中使用

```markdown
<br/>
<Valine></Valine>
```

#### 5.在[控制台](https://leancloud.cn/)的存储class中管理数据


### [使用主题](https://vuepress-theme-reco.recoluan.com/)


### 支持emoji

[emoji列表](https://gist.github.com/rxaviers/7360908)



## 二、发布到 gh-pages

### 设置 Source

GitHub 项目 Settings 下 GitHub Pages 的 Source 设置为 **gh-pages** 分支

### 添加命令

```json
{
  "scripts": {
    "dev": "vuepress dev docs",
    "build": "vuepress build docs",
    "deploy": "sh deploy.sh"
  }
}
```

### 添加发布脚本

在根目录下，创建一个`deploy.sh`文件

```sh
#!/usr/bin/env sh
# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
yarn build

# 进入生成的文件夹
cd dist

# 如果是发布到自定义域名
# echo 'www.example.com' > CNAME

git init
git add -A
git commit -m 'deploy'

# 如果发布到 https://<USERNAME>.github.io  USERNAME=你的用户名 
# git push -f git@github.com:<USERNAME>/<USERNAME>.github.io.git master
# git push -f https://${access_token}@github.com/<USERNAME>/<USERNAME>.github.io.git master

# 如果发布到 https://<USERNAME>.github.io/<REPO>  REPO=github上的项目
# git push -f git@github.com:<USERNAME>/<REPO>.git master:gh-pages
# git push -f https://${GITHUB_TOKEN}@github.com:steakxiaoxin/vuepress.git master:gh-pages

cd -
```

### 部署

```sh
yarn deploy # 或者：npm run deploy
```

访问 `https://<USERNAME>.github.io/<REPO>/` 即可



## 三、使用 Travis-CI

### 步骤

1. 在项目根目录添加 .travis.yml

2. 在 GitHub / Settings / Developer settings / Personal access tokens 添加 new token 权限为 repo

3. 在 [Travis CI](https://travis-ci.org/) 项目的 Settings => 打开仓库switch, 然后 setting / Environment Variables 添加环境变量 GITHUB_TOKEN

4. commit 后 push 即可观察travis服务器日志

### 配置文件

.travis.yml

```yaml
language: node_js
node_js:
  - "stable"
env:
  - CXX=g++-4.8
addons:
  apt:
    sources:
      - ubuntu-toolchain-r-test
    packages:
      - g++-4.8
install:
  - npm install -g vuepress
script:
  - npm run build
cache:
  directories:
    - "node_modules"
notifications:
  email: false
deploy:
  provider: pages
  skip-cleanup: true
  local_dir: dist
  github-token: $GITHUB_TOKEN # Set in the settings page of your repository, as a secure variable
  repo: steakxiaoxin/vuepress
  keep-history: true
  target-branch: gh-pages
  on:
    branch: master
```



## 四、持续输出吧~

### …...

<br/>
<Valine></Valine>

