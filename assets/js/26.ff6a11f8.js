(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{358:function(_,e,v){"use strict";v.r(e);var t=v(0),a=Object(t.a)({},(function(){var _=this,e=_.$createElement,v=_._self._c||e;return v("ContentSlotsDistributor",{attrs:{"slot-key":_.$parent.slotKey}},[v("p",[v("img",{attrs:{src:"https://i.loli.net/2019/12/25/eMVbJ25fUvsYtjE.jpg",alt:""}})]),_._v(" "),v("h2",{attrs:{id:"_1、图片优化"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_1、图片优化"}},[_._v("#")]),_._v(" 1、图片优化")]),_._v(" "),v("ol",[v("li",[_._v("压缩图片大小(webpack 插件)")]),_._v(" "),v("li",[_._v("使用 css 代替装饰类图片")]),_._v(" "),v("li",[_._v("雪碧图")]),_._v(" "),v("li",[_._v("iconfont")]),_._v(" "),v("li",[_._v("小图使用 base64 格式")]),_._v(" "),v("li",[_._v("移动端根据设备宽度加载相应的图片")])]),_._v(" "),v("h2",{attrs:{id:"_2、防抖节流"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_2、防抖节流"}},[_._v("#")]),_._v(" 2、"),v("a",{attrs:{href:"https://juejin.im/post/5c87b54ce51d455f7943dddb",target:"_blank",rel:"noopener noreferrer"}},[_._v("防抖节流"),v("OutboundLink")],1)]),_._v(" "),v("ol",[v("li",[_._v("防抖\n"),v("ul",[v("li",[v("strong",[_._v("在事件被触发 n 秒后再执行回调，如果在这 n 秒内又被触发，则重新计时")]),_._v("(王者荣耀的回城)")]),_._v(" "),v("li",[_._v("频繁点击、输入框输入掉接口")])])]),_._v(" "),v("li",[_._v("节流\n"),v("ul",[v("li",[v("strong",[_._v("规定在一个单位时间内，只能触发一次函数。如果这个单位时间内触发多次函数，只有一次生效。")])]),_._v(" "),v("li",[_._v("监听 scroll 、resize 等事件")])])])]),_._v(" "),v("h2",{attrs:{id:"_3、预加载和懒加载"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_3、预加载和懒加载"}},[_._v("#")]),_._v(" 3、预加载和懒加载")]),_._v(" "),v("p",[_._v("合理使用浏览器的预取指令 prefetch 和预加载指令 preload")]),_._v(" "),v("p",[_._v("使用 link 标签的 rel 属性设置 prefetch（这段资源将会在未来某个导航或者功能要用到，但是本资源的下载顺序权重比较低，prefetch 通常用于加速下一次导航）、preload（preload 将会把资源得下载顺序权重提高，使得关键数据提前下载好，优化页面打开速度）")]),_._v(" "),v("p",[v("a",{attrs:{href:"https://www.geekjc.com/post/58d94d0f16a3655650d6fafe",target:"_blank",rel:"noopener noreferrer"}},[_._v("详解懒加载和预加载"),v("OutboundLink")],1)]),_._v(" "),v("h2",{attrs:{id:"_4、http-缓存"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_4、http-缓存"}},[_._v("#")]),_._v(" 4、"),v("a",{attrs:{href:"https://luckyabby.com/posts/%E6%B5%85%E8%B0%88http%E7%BC%93%E5%AD%98/",target:"_blank",rel:"noopener noreferrer"}},[_._v("http 缓存"),v("OutboundLink")],1)]),_._v(" "),v("p",[_._v("加速或者减少 HTTP 请求，合理使用浏览器强缓存和协商缓存")]),_._v(" "),v("ol",[v("li",[_._v("强缓存 200 (优先级从高到低分别是 Pragma -> Cache-Control -> Expires)\n"),v("ul",[v("li",[_._v("Pragma：支持 http1.0；可设置 no-cache，表示不缓存资源；优先级最高")]),_._v(" "),v("li",[_._v("Cache-Control：支持 http1.1；可设置 no-cache、max-age = 3600 (s)；优先级中等")]),_._v(" "),v("li",[_._v("Expires：支持 http1.0；可设置一个格林尼治时间；优先级最低")])])]),_._v(" "),v("li",[_._v("协商缓存 304\n"),v("ul",[v("li",[_._v("ETag/If-None-Match 高")]),_._v(" "),v("li",[_._v("Last-Modified/If-Modified-Since 低")])])])]),_._v(" "),v("p",[_._v("总结:")]),_._v(" "),v("ul",[v("li",[_._v("首先通过 "),v("code",[_._v("Cache-Control")]),_._v(" 验证强缓存是否可用，如果强缓存可用，直接使用")]),_._v(" "),v("li",[_._v("否则进入协商缓存，即发送 HTTP 请求，服务器通过请求头中的 "),v("code",[_._v("Last-Modified")]),_._v("或者"),v("code",[_._v("ETag")]),_._v("字段检查资源是否更新\n"),v("ul",[v("li",[_._v("若资源更新，返回资源和 200 状态码")]),_._v(" "),v("li",[_._v("否则，返回 304，告诉浏览器直接从缓存获取资源")])])])]),_._v(" "),v("p",[v("a",{attrs:{href:"https://juejin.im/post/5c136bd16fb9a049d37efc47",target:"_blank",rel:"noopener noreferrer"}},[_._v("前端缓存最佳实践"),v("OutboundLink")],1)]),_._v(" "),v("h2",{attrs:{id:"_5、webpack"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_5、webpack"}},[_._v("#")]),_._v(" 5、webpack")]),_._v(" "),v("ol",[v("li",[_._v("大小\n"),v("ul",[v("li",[_._v("按需加载 (require.ensure 或 动态 import )")]),_._v(" "),v("li",[_._v("代码压缩混淆 (html,css,js) tree shaking")]),_._v(" "),v("li",[_._v("代码分离，提取公共模块(SplitChunksPlugin 或者 html-webpack-externals-plugin cdn 引入基础包)")]),_._v(" "),v("li",[_._v("使用 analyzer 可视化分析包大小")])])]),_._v(" "),v("li",[_._v("速度\n"),v("ul",[v("li",[_._v("开启 production 模式 (tree shaking, scope hoisting)")]),_._v(" "),v("li",[_._v("多线程 happypack")]),_._v(" "),v("li",[_._v("使用 DllPlugin & DllReferencePlugin 提前打包公共依赖")]),_._v(" "),v("li",[_._v("合理使用 sourcemap")]),_._v(" "),v("li",[_._v("include | exclude 限定和缓存 loader")]),_._v(" "),v("li",[_._v("使用 SpeedMeasureWebpackPlugin 可视化分析各个环节的速度")])])])]),_._v(" "),v("h2",{attrs:{id:"_6、本地存储"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_6、本地存储"}},[_._v("#")]),_._v(" 6、本地存储")]),_._v(" "),v("ol",[v("li",[v("p",[_._v("cookie")]),_._v(" "),v("ul",[v("li",[_._v("4kb")]),_._v(" "),v("li",[_._v("服务端通过 Set-Cookie 设置")]),_._v(" "),v("li",[_._v("添加 http-only 属性，不能通过 js 操作 cookie，减少 xss")]),_._v(" "),v("li",[_._v("同源 -- 协议、域名、端口")])])]),_._v(" "),v("li",[v("p",[_._v("localStorage")]),_._v(" "),v("ul",[v("li",[_._v("5Mb")]),_._v(" "),v("li",[_._v("长期存在。模拟实现过期功能")]),_._v(" "),v("li",[_._v("同源 -- 协议、域名、端口")])])]),_._v(" "),v("li",[v("p",[_._v("sessionStorage")]),_._v(" "),v("ul",[v("li",[_._v("5Mb")]),_._v(" "),v("li",[_._v("会话级、tab 级别")]),_._v(" "),v("li",[_._v("同源 -- 协议、域名、端口、窗口")])])]),_._v(" "),v("li",[v("p",[_._v("indexDB")])])]),_._v(" "),v("h2",{attrs:{id:"_7、cdn"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_7、cdn"}},[_._v("#")]),_._v(" 7、cdn")]),_._v(" "),v("p",[_._v("静态资源尽量使用 CDN 加载，由于浏览器对于单个域名有并发请求上限，可以考虑使用多个 CDN 域名。对于 CDN 加载静态资源需要注意 CDN 域名要与主站不同，否则每次请求都会带上主站的 Cookie。")]),_._v(" "),v("h2",{attrs:{id:"_8、浏览器"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_8、浏览器"}},[_._v("#")]),_._v(" 8、浏览器")]),_._v(" "),v("ol",[v("li",[_._v("css 文件在"),v("code",[_._v("<head>")]),_._v("标签中引入，js 文件在"),v("code",[_._v("<body>")]),_._v("标签中引入，优化关键渲染路径")]),_._v(" "),v("li",[_._v("减少重绘和回流，任何会导致重绘和回流的操作都应减少执行，可将多次操作合并为一次")]),_._v(" "),v("li",[_._v("减少 DOM 的访问次数，可以将 DOM 缓存到变量中")]),_._v(" "),v("li",[_._v("动画尽量使用 CSS3 动画属性来实现，开启 GPU 硬件加速")]),_._v(" "),v("li",[_._v("尽量采用事件委托的方式进行事件绑定，避免大量绑定导致内存占用过多")])]),_._v(" "),v("h2",{attrs:{id:"_9、首屏优化"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_9、首屏优化"}},[_._v("#")]),_._v(" 9、首屏优化")]),_._v(" "),v("ol",[v("li",[_._v("Vue-Router 路由懒加载（利用 Webpack 的代码切割）")]),_._v(" "),v("li",[_._v("使用 CDN 加速，将通用的库从 vendor 进行抽离")]),_._v(" "),v("li",[_._v("Nginx 的 gzip 压缩")]),_._v(" "),v("li",[_._v("Vue 异步组件")]),_._v(" "),v("li",[_._v("服务端渲染 SSR")]),_._v(" "),v("li",[_._v("如果使用了一些 UI 库，采用按需加载")]),_._v(" "),v("li",[_._v("如果首屏为登录页，可以做成多入口")]),_._v(" "),v("li",[_._v("使用 link 标签的 rel 属性设置 prefetch（这段资源将会在未来某个导航或者功能要用到，但是本资源的下载顺序权重比较低，prefetch 通常用于加速下一次导航）、preload（preload 将会把资源得下载顺序权重提高，使得关键数据提前下载好，优化页面打开速度）")])]),_._v(" "),v("h2",{attrs:{id:"_10、react-中优化"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_10、react-中优化"}},[_._v("#")]),_._v(" 10、react 中优化")]),_._v(" "),v("ol",[v("li",[_._v("减少无用渲染：使用 PureComponents 优化类组件；使用 React.memo 优化函数组件")]),_._v(" "),v("li",[_._v("在 shouldComponentUpdate 中添加自定义逻辑判断是否需要重新描绘 dom")]),_._v(" "),v("li",[_._v("使用 Suspense 和 lazy 懒加载组件")]),_._v(" "),v("li",[_._v("使用 Fragment 避免额外标记")]),_._v(" "),v("li",[_._v("事件绑定时不使用内联函数定义")]),_._v(" "),v("li",[_._v("在 componentDidCatch 中捕获错误并作错误处理")]),_._v(" "),v("li",[_._v("列表渲染使用唯一 key，避免使用 index 作为 key")]),_._v(" "),v("li",[_._v("组件卸载时移除定时器及事件监听")])]),_._v(" "),v("h2",{attrs:{id:"优化类文章"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#优化类文章"}},[_._v("#")]),_._v(" 优化类文章")]),_._v(" "),v("ul",[v("li",[v("p",[v("a",{attrs:{href:"https://juejin.im/book/5b936540f265da0a9624b04b/section/5b936540f265da0aec223b5d",target:"_blank",rel:"noopener noreferrer"}},[_._v("前端性能优化-修言"),v("OutboundLink")],1)])]),_._v(" "),v("li",[v("p",[v("a",{attrs:{href:"https://juejin.im/post/5b6fa8c86fb9a0099910ac91",target:"_blank",rel:"noopener noreferrer"}},[_._v("网站性能优化实战——从12.67s到1.06s的故事"),v("OutboundLink")],1)])]),_._v(" "),v("li",[v("p",[v("a",{attrs:{href:"https://juejin.im/post/5d548b83f265da03ab42471d",target:"_blank",rel:"noopener noreferrer"}},[_._v("Vue 项目性能优化 — 实践指南(网上最全 / 详细)"),v("OutboundLink")],1)])]),_._v(" "),v("li",[v("p",[v("a",{attrs:{href:"https://juejin.im/post/5c76843af265da2ddd4a6dd0",target:"_blank",rel:"noopener noreferrer"}},[_._v("我是如何让公司后台管理系统焕然一新的(上) -性能优化"),v("OutboundLink")],1)])]),_._v(" "),v("li",[v("p",[v("a",{attrs:{href:"https://mp.weixin.qq.com/s/DdbaiuZd4RbqUod0jhn_vg",target:"_blank",rel:"noopener noreferrer"}},[_._v("你必须懂的前端性能优化"),v("OutboundLink")],1)])])]),_._v(" "),v("h2",{attrs:{id:"附个人编码优化"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#附个人编码优化"}},[_._v("#")]),_._v(" (附个人编码优化)")]),_._v(" "),v("ol",[v("li",[_._v("编码前多思考：可读性、可维护性、封装性、性能、安全；")]),_._v(" "),v("li",[_._v("了解下函数式编程 - 代码中多使用纯函数；")]),_._v(" "),v("li",[_._v("独立功能封装成函数，重复代码提取成函数，如果多处使用考虑是否需要提取出来作为一个模块对外提供；")]),_._v(" "),v("li",[_._v("不相关的功能逻辑单独封装，比如数据获取、页面渲染，数据计算等；")]),_._v(" "),v("li",[_._v("给自己一个代码开发规范；")]),_._v(" "),v("li",[_._v("多多使用es6的新特性，一些语法糖,这样有利于引出你不熟悉的东西，然后去解决掉；")]),_._v(" "),v("li",[_._v("了解下设计模式，如发布订阅，单例等，想办法在工作中用到；")]),_._v(" "),v("li",[_._v("性能是至关重要的，数据的加载机制和拿到数据后的渲染机制是很重要的。从一个普通用户的角度考虑体验；")])]),_._v(" "),v("br"),_._v(" "),v("Valine")],1)}),[],!1,null,null,null);e.default=a.exports}}]);