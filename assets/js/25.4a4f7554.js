(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{357:function(t,e,v){"use strict";v.r(e);var _=v(0),a=Object(_.a)({},(function(){var t=this,e=t.$createElement,v=t._self._c||e;return v("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[v("p",[v("img",{attrs:{src:"https://i.loli.net/2019/12/25/a8DerxfSF1ZXIA7.jpg",alt:""}})]),t._v(" "),v("blockquote",[v("p",[v("a",{attrs:{href:"https://juejin.im/post/5df5bcea6fb9a016091def69",target:"_blank",rel:"noopener noreferrer"}},[t._v("(1.6w字)浏览器与前端性能灵魂之问，请问你能接得住几个？（上）"),v("OutboundLink")],1)]),t._v(" "),v("p",[v("a",{attrs:{href:"https://mp.weixin.qq.com/s/a4TLWp7khAoNo1Xct5YIMA",target:"_blank",rel:"noopener noreferrer"}},[t._v("点亮前端必会网络知识点"),v("OutboundLink")],1)])]),t._v(" "),v("h2",{attrs:{id:"从输入-url-到展示经历了什么"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#从输入-url-到展示经历了什么"}},[t._v("#")]),t._v(" 从输入 URL 到展示经历了什么")]),t._v(" "),v("h4",{attrs:{id:"丐版"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#丐版"}},[t._v("#")]),t._v(" 丐版")]),t._v(" "),v("ol",[v("li",[t._v("DNS 解析")]),t._v(" "),v("li",[t._v("TCP 连接")]),t._v(" "),v("li",[t._v("HTTP 请求")]),t._v(" "),v("li",[t._v("服务器响应")]),t._v(" "),v("li",[t._v("客户端渲染\n"),v("ol",[v("li",[t._v("处理 HTML 标记并构建 DOM 树。")]),t._v(" "),v("li",[t._v("处理 CSS 标记并构建 CSSOM 树。")]),t._v(" "),v("li",[t._v("将 DOM 与 CSSOM 合并成一个渲染树。")]),t._v(" "),v("li",[t._v("根据渲染树来布局，计算每个节点的几何信息，并绘制到屏幕上。")])])])]),t._v(" "),v("p",[v("img",{attrs:{src:"https://i.loli.net/2020/03/13/pNvio1P7u5ZSHDa.png",alt:"image.png"}})]),t._v(" "),v("h4",{attrs:{id:"详版"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#详版"}},[t._v("#")]),t._v(" 详版")]),t._v(" "),v("ul",[v("li",[v("a",{attrs:{href:"https://mp.weixin.qq.com/s/y46F6IDpKr7ZwHnpYVj1lA",target:"_blank",rel:"noopener noreferrer"}},[t._v("面试官：浏览器输入URL后发生了什么？"),v("OutboundLink")],1)]),t._v(" "),v("li",[v("a",{attrs:{href:"https://github.com/ljianshu/Blog/issues/24",target:"_blank",rel:"noopener noreferrer"}},[t._v("浪里行舟-从 URL 输入到页面展现到底发生什么"),v("OutboundLink")],1)]),t._v(" "),v("li",[v("a",{attrs:{href:"https://juejin.im/post/5df5bcea6fb9a016091def69#heading-24",target:"_blank",rel:"noopener noreferrer"}},[t._v("神三元-浏览器与前端性能灵魂之问"),v("OutboundLink")],1)]),t._v(" "),v("li",[v("a",{attrs:{href:"https://zhuanlan.zhihu.com/p/86426969",target:"_blank",rel:"noopener noreferrer"}},[t._v("面试官，不要再问我三次握手和四次挥手"),v("OutboundLink")],1)])]),t._v(" "),v("h2",{attrs:{id:"重绘与回流"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#重绘与回流"}},[t._v("#")]),t._v(" 重绘与回流")]),t._v(" "),v("p",[t._v("当元素的样式发生变化时，浏览器需要触发更新，重新绘制元素。这个过程中有两种类型的操作，即重绘与回流。")]),t._v(" "),v("ul",[v("li",[v("p",[v("strong",[t._v("重绘(repaint)")]),t._v(": 当元素样式的改变不影响布局时，浏览器将使用重绘对元素进行更新，此时由于只需要UI层面的重新像素绘制，因此 "),v("strong",[t._v("损耗较少")])])]),t._v(" "),v("li",[v("p",[v("strong",[t._v("回流(reflow)")]),t._v(": 当元素的尺寸、结构或触发某些属性时，浏览器会重新渲染页面，称为回流。此时，浏览器需要重新经过计算，计算后还需要重新页面布局，因此是较重的操作。")]),t._v(" "),v("p",[t._v("触发"),v("strong",[t._v("回流")]),t._v("的操作:")]),t._v(" "),v("ul",[v("li",[t._v("页面初次渲染")]),t._v(" "),v("li",[t._v("浏览器窗口大小改变")]),t._v(" "),v("li",[t._v("元素尺寸、位置、内容发生改变")]),t._v(" "),v("li",[t._v("元素字体大小变化")]),t._v(" "),v("li",[t._v("添加或者删除可见的 dom 元素")]),t._v(" "),v("li",[t._v("激活 CSS 伪类（例如：:hover）")]),t._v(" "),v("li",[t._v("查询某些属性或调用某些方法( 手动触发刷新队列 )\n"),v("ul",[v("li",[t._v("clientWidth、clientHeight、clientTop、clientLeft")]),t._v(" "),v("li",[t._v("offsetWidth、offsetHeight、offsetTop、offsetLeft")]),t._v(" "),v("li",[t._v("scrollWidth、scrollHeight、scrollTop、scrollLeft")]),t._v(" "),v("li",[t._v("getComputedStyle()")]),t._v(" "),v("li",[t._v("getBoundingClientRect()")]),t._v(" "),v("li",[t._v("scrollTo()")])])])])])]),t._v(" "),v("p",[v("strong",[t._v("回流必定触发重绘，重绘不一定触发回流。重绘的开销较小，回流的代价较高。")])]),t._v(" "),v("h4",{attrs:{id:"最佳实践"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#最佳实践"}},[t._v("#")]),t._v(" 最佳实践:")]),t._v(" "),v("ul",[v("li",[t._v("css\n"),v("ul",[v("li",[t._v("避免使用"),v("code",[t._v("table")]),t._v("布局，table部分的改变会引起整个table的重绘")]),t._v(" "),v("li",[t._v("将动画效果应用到"),v("code",[t._v("position")]),t._v("属性为"),v("code",[t._v("absolute")]),t._v("或"),v("code",[t._v("fixed")]),t._v("的元素上")])])]),t._v(" "),v("li",[t._v("javascript\n"),v("ul",[v("li",[t._v("避免频繁操作样式，可汇总后统一 "),v("strong",[t._v("一次修改")])]),t._v(" "),v("li",[t._v("尽量使用"),v("code",[t._v("class")]),t._v("进行样式修改")]),t._v(" "),v("li",[t._v("减少"),v("code",[t._v("dom")]),t._v("的增删次数，可使用 "),v("strong",[t._v("字符串")]),t._v(" 或者 "),v("code",[t._v("documentFragment")]),t._v(" 一次性插入")]),t._v(" "),v("li",[t._v("极限优化时，修改样式可将其"),v("code",[t._v("display: none")]),t._v("后修改")]),t._v(" "),v("li",[t._v("避免多次触发上面提到的那些会触发回流的方法，可以的话尽量用 "),v("strong",[t._v("变量存住")])])])])]),t._v(" "),v("h2",{attrs:{id:"http-缓存"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#http-缓存"}},[t._v("#")]),t._v(" http 缓存")]),t._v(" "),v("p",[t._v("缓存可以减少网络 IO 消耗，提高访问速度。")]),t._v(" "),v("ol",[v("li",[t._v("强缓存 200 (优先级从高到低分别是 Pragma -> Cache-Control -> Expires)\n"),v("ul",[v("li",[t._v("Pragma：支持 http1.0；可设置 no-cache，表示不缓存资源；优先级最高")]),t._v(" "),v("li",[t._v("Cache-Control：支持 http1.1；可设置 no-cache、max-age = 3600 (s)；优先级中等")]),t._v(" "),v("li",[t._v("Expires：支持 http1.0；可设置一个格林尼治时间；优先级最低")])])]),t._v(" "),v("li",[t._v("协商缓存 304\n"),v("ul",[v("li",[t._v("ETag/If-None-Match 高")]),t._v(" "),v("li",[t._v("Last-Modified/If-Modified-Since 低")])])])]),t._v(" "),v("p",[t._v("总结:")]),t._v(" "),v("ul",[v("li",[t._v("首先通过 "),v("code",[t._v("Cache-Control")]),t._v(" 验证强缓存是否可用，如果强缓存可用，直接使用")]),t._v(" "),v("li",[t._v("否则进入协商缓存，即发送 HTTP 请求，服务器通过请求头中的 "),v("code",[t._v("Last-Modified")]),t._v("或者"),v("code",[t._v("ETag")]),t._v("字段检查资源是否更新\n"),v("ul",[v("li",[t._v("若资源更新，返回资源和200状态码")]),t._v(" "),v("li",[t._v("否则，返回304，告诉浏览器直接从缓存获取资源")])])])]),t._v(" "),v("p",[v("a",{attrs:{href:"https://juejin.im/post/5c136bd16fb9a049d37efc47",target:"_blank",rel:"noopener noreferrer"}},[t._v("前端缓存最佳实践"),v("OutboundLink")],1)]),t._v(" "),v("h2",{attrs:{id:"get-和-post"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#get-和-post"}},[t._v("#")]),t._v(" get 和 post")]),t._v(" "),v("p",[v("img",{attrs:{src:"https://i.loli.net/2020/02/09/ufApI3H861oxSDb.png",alt:"image.png"}})]),t._v(" "),v("h2",{attrs:{id:"多标签通信"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#多标签通信"}},[t._v("#")]),t._v(" 多标签通信")]),t._v(" "),v("ul",[v("li",[t._v("window.open + window.postMessage")]),t._v(" "),v("li",[t._v("LocalStorage + window.onstorage 监听")]),t._v(" "),v("li",[t._v("cookie + 定时器轮询(setInterval)")]),t._v(" "),v("li",[t._v("Websocket")]),t._v(" "),v("li",[t._v("BroadCast Channel")]),t._v(" "),v("li",[t._v("Service Worker")]),t._v(" "),v("li",[t._v("Shared Worker + 定时器轮询(setInterval)")]),t._v(" "),v("li",[t._v("IndexedDB + 定时器轮询(setInterval)")])]),t._v(" "),v("h2",{attrs:{id:"跨域"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#跨域"}},[t._v("#")]),t._v(" 跨域")]),t._v(" "),v("p",[t._v("浏览器出于安全考虑，有同源策略。即 "),v("strong",[t._v("协议、域名、端口")]),t._v(" 有一个不同就是跨域，Ajax 请求可以发，但响应会被拦截。浏览器只允许跨域加载三个标签：img、link、script")]),t._v(" "),v("ul",[v("li",[t._v("JSONP\n"),v("ul",[v("li",[t._v("利用"),v("code",[t._v("script")]),t._v("标签不受跨域限制的特点")]),t._v(" "),v("li",[t._v("缺点是只能支持 get 请求\n"),v("ul",[v("li",[t._v("Step1: 创建 callback 方法")]),t._v(" "),v("li",[t._v("Step2: 插入 script 标签")]),t._v(" "),v("li",[t._v("Step3: 后台接受到请求，解析前端传过去的 callback 方法，返回该方法的调用，并且数据作为参数传入该方法")]),t._v(" "),v("li",[t._v("Step4: 前端执行服务端返回的方法调用")])])])])]),t._v(" "),v("li",[t._v("设置 CORS\n"),v("ul",[v("li",[t._v("设置 Access-Control-Allow-Origin：*")]),t._v(" "),v("li",[t._v('通过"预检"请求来知道服务端是否允许跨域请求，请求方法option')]),t._v(" "),v("li",[t._v("支持所有类型的HTTP请求")])])]),t._v(" "),v("li",[t._v("postMessage")]),t._v(" "),v("li",[t._v("nginx 代理跨域：同源策略对服务器不加限制")]),t._v(" "),v("li",[t._v("iframe跨域")]),t._v(" "),v("li",[t._v("websocket")])]),t._v(" "),v("p",[v("a",{attrs:{href:"https://juejin.im/post/5a2f92c65188253e2470f16d",target:"_blank",rel:"noopener noreferrer"}},[t._v("正确面对跨域，别慌"),v("OutboundLink")],1)]),t._v(" "),v("h2",{attrs:{id:"存储"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#存储"}},[t._v("#")]),t._v(" 存储")]),t._v(" "),v("h4",{attrs:{id:"cookie"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#cookie"}},[t._v("#")]),t._v(" cookie")]),t._v(" "),v("ul",[v("li",[t._v("4kb")]),t._v(" "),v("li",[t._v("服务端通过 Set-Cookie 设置")]),t._v(" "),v("li",[t._v("添加 http-only 属性，不能通过 js 操作 cookie，减少 xss")]),t._v(" "),v("li",[t._v("同源 -- 协议、域名、端口")])]),t._v(" "),v("h4",{attrs:{id:"localstorage"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#localstorage"}},[t._v("#")]),t._v(" localStorage")]),t._v(" "),v("ul",[v("li",[t._v("5Mb")]),t._v(" "),v("li",[t._v("长期存在。模拟实现过期功能")]),t._v(" "),v("li",[t._v("同源 -- 协议、域名、端口")])]),t._v(" "),v("h4",{attrs:{id:"sessionstorage"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#sessionstorage"}},[t._v("#")]),t._v(" sessionStorage")]),t._v(" "),v("ul",[v("li",[t._v("5Mb")]),t._v(" "),v("li",[t._v("会话级、tab 级别")]),t._v(" "),v("li",[t._v("同源 -- 协议、域名、端口、窗口")])]),t._v(" "),v("h4",{attrs:{id:"indexdb"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#indexdb"}},[t._v("#")]),t._v(" indexDB")]),t._v(" "),v("h2",{attrs:{id:"web-安全"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#web-安全"}},[t._v("#")]),t._v(" web 安全")]),t._v(" "),v("h4",{attrs:{id:"_1、xss"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_1、xss"}},[t._v("#")]),t._v(" 1、XSS")]),t._v(" "),v("p",[t._v("XSS 全称是跨站脚本攻击(Cross Site Scripting)，是一种代码注入攻击。")]),t._v(" "),v("p",[t._v("分类:")]),t._v(" "),v("ul",[v("li",[t._v("存储型 => 攻击者通过把代码提交到后台数据库中;当用户下次打开的时候就会从后台接收这些恶意的代码")]),t._v(" "),v("li",[t._v("反射型 => 恶意链接，通过在请求地址上加入恶心的 HTML 代码")]),t._v(" "),v("li",[t._v("dom 型 => 通过一些 api 向网站注入一些恶意的 HTML 代码")])]),t._v(" "),v("p",[t._v("防范:")]),t._v(" "),v("ul",[v("li",[t._v("字符转义")]),t._v(" "),v("li",[t._v("禁止 JavaScript 操作 cookie，设置 httponly")]),t._v(" "),v("li",[t._v("CSP 白名单")])]),t._v(" "),v("h4",{attrs:{id:"_2、csrf"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_2、csrf"}},[t._v("#")]),t._v(" 2、CSRF")]),t._v(" "),v("p",[t._v("CSRF 全称是跨站请求伪造(Cross-site request forgery)，是一种利用 cookie 特性的攻击。")]),t._v(" "),v("p",[t._v("引诱用户打开黑客的网站，在黑客的网站中，利用用户的登录状态发起的跨站请求。")]),t._v(" "),v("p",[t._v("防范：")]),t._v(" "),v("ul",[v("li",[t._v("利用 Cookie 的 "),v("a",{attrs:{href:"https://www.ruanyifeng.com/blog/2019/09/cookie-samesite.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("SameSite"),v("OutboundLink")],1),t._v(" 属性")]),t._v(" "),v("li",[t._v("验证请求的来源站点")]),t._v(" "),v("li",[t._v("token 验证")])]),t._v(" "),v("h4",{attrs:{id:"_3、sql-注入"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_3、sql-注入"}},[t._v("#")]),t._v(" 3、SQL 注入")]),t._v(" "),v("p",[t._v("用户输入的数据存在拼接 SQL 语句从而出现访问数据库的操作。")]),t._v(" "),v("p",[t._v("防范：过滤")]),t._v(" "),v("h4",{attrs:{id:"_4、点击劫持"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_4、点击劫持"}},[t._v("#")]),t._v(" 4、点击劫持")]),t._v(" "),v("p",[t._v("在某些操作的按钮上加了一层透明的 iframe")]),t._v(" "),v("p",[t._v("防范：")]),t._v(" "),v("ul",[v("li",[t._v("服务端添加 X-Frame-Options 响应头,这个 HTTP 响应头是为了防御用 iframe 嵌套的点击劫持攻击。这样浏览器就会阻止嵌入网页的渲染。")]),t._v(" "),v("li",[t._v("JS 判断顶层视口的域名是不是和本页面的域名一致，不一致则不允许操作，top.location.hostname === self.location.hostname；")]),t._v(" "),v("li",[t._v("敏感操作使用更复杂的步骤（验证码、输入项目名称以删除）。")])]),t._v(" "),v("p",[v("a",{attrs:{href:"https://juejin.im/post/5dca1b376fb9a04a9f11c82e",target:"_blank",rel:"noopener noreferrer"}},[t._v("Web 安全总结(面试必备良药)"),v("OutboundLink")],1)]),t._v(" "),v("p",[v("a",{attrs:{href:"https://juejin.im/post/5da44c5de51d45783a772a22",target:"_blank",rel:"noopener noreferrer"}},[t._v("面试经常被问的 web 安全问题"),v("OutboundLink")],1)]),t._v(" "),v("h2",{attrs:{id:"tcp-http-https"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#tcp-http-https"}},[t._v("#")]),t._v(" tcp http https")]),t._v(" "),v("h4",{attrs:{id:"tcp-传输控制协议"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#tcp-传输控制协议"}},[t._v("#")]),t._v(" tcp 传输控制协议")]),t._v(" "),v("ul",[v("li",[v("p",[t._v("传输层协议；定义的是数据传输和连接方式的规范")])]),t._v(" "),v("li",[v("p",[t._v("建立连接：三次握手")]),t._v(" "),v("ul",[v("li",[t._v("客户机首先发出一个SYN消息")]),t._v(" "),v("li",[t._v("服务器使用SYN+ACK应答表示接收到了这个消息")]),t._v(" "),v("li",[t._v("最后客户机再以ACK消息响应\n"),v("ul",[v("li",[t._v("SYN：同步序列编号（Synchronize Sequence Numbers）")]),t._v(" "),v("li",[t._v("ACK：确认字符 (Acknowledge character）")])])])]),t._v(" "),v("p",[v("img",{attrs:{src:"https://i.loli.net/2020/02/27/ZcyAK3OmjIMbtXY.png",alt:"image.png"}})]),t._v(" "),v("ul",[v("li",[t._v("(为了方便描述我们将主动发起请求的172.16.50.72:65076 主机称为客户端，将返回数据的主机172.16.17.94:8080称为服务器。)")]),t._v(" "),v("li",[t._v("第一次握手: 建立连接。客户端发送连接请求，发送SYN报文，将seq设置为0。然后，客户端进入SYN_SEND状态，等待服务器的确认。")]),t._v(" "),v("li",[t._v("第二次握手: 服务器收到客户端的SYN报文段。需要对这个SYN报文段进行确认，发送ACK报文，将ack设置为1。同时，自己还要发送SYN请求信息，将seq为0。服务器端将上述所有信息一并发送给客户端，此时服务器进入SYN_RECV状态。")]),t._v(" "),v("li",[t._v("第三次握手: 客户端收到服务器的ACK和SYN报文后，进行确认，然后将ack设置为1，seq设置为1，向服务器发送ACK报文段，这个报文段发送完毕以后，客户端和服务器端都进入ESTABLISHED状态，完成TCP三次握手。")])])]),t._v(" "),v("li",[v("p",[t._v("断开连接：四次挥手")]),t._v(" "),v("ul",[v("li",[t._v("客户端-发送一个FIN，用来关闭客户端到服务器的数据传送")]),t._v(" "),v("li",[t._v("服务器-收到这个FIN，它发回一个ACK，确认序号为收到的序号加1 。和SYN一样，一个FIN将占用一个序号")]),t._v(" "),v("li",[t._v("服务器-关闭与客户端的连接，发送一个FIN给客户端")]),t._v(" "),v("li",[t._v("客户端-发回ACK报文确认，并将确认序号设置为收到序号加1")])]),t._v(" "),v("p",[v("img",{attrs:{src:"https://i.loli.net/2020/02/27/6sE4ric1I5azVUZ.png",alt:"image.png"}})]),t._v(" "),v("ul",[v("li",[t._v("第一次挥手：客户端向服务器发送一个FIN报文段，将设置seq为160和ack为112，;此时，客户端进入 FIN_WAIT_1状态,这表示客户端没有数据要发送服务器了，请求关闭连接;")]),t._v(" "),v("li",[t._v("第二次挥手：服务器收到了客户端发送的FIN报文段，向客户端回一个ACK报文段，ack设置为1，seq设置为112;服务器进入了CLOSE_WAIT状态，客户端收到服务器返回的ACK报文后，进入FIN_WAIT_2状态;")]),t._v(" "),v("li",[t._v("第三次挥手：服务器会观察自己是否还有数据没有发送给客户端，如果有，先把数据发送给客户端，再发送FIN报文；如果没有，那么服务器直接发送FIN报文给客户端。请求关闭连接，同时服务器进入LAST_ACK状态;")]),t._v(" "),v("li",[t._v("第四次挥手：客户端收到服务器发送的FIN报文段，向服务器发送ACK报文段，将seq设置为161，将ack设置为113，然后客户端进入TIME_WAIT状态;服务器收到客户端的ACK报文段以后，就关闭连接;此时，客户端等待2MSL后依然没有收到回复，则证明Server端已正常关闭，客户端也可以关闭连接了。")])])])]),t._v(" "),v("h4",{attrs:{id:"http-80-https-443-超文本传送协议"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#http-80-https-443-超文本传送协议"}},[t._v("#")]),t._v(" http 80/https 443 超文本传送协议")]),t._v(" "),v("ul",[v("li",[t._v("应用层协议；定义的是传输数据的内容的规范")]),t._v(" "),v("li",[t._v("基于tcp；客户端每次发送请求都需要服务器返回响应，在请求结束后，会主动释放连接，从建立连接到关闭连接的过程称为“一次连接”，短连接，无状态\n"),v("ul",[v("li",[t._v("何为无状态？指浏览器每次向服务器发起请求的时候，不是通过一个连接，而是每次都建立一个新的连接。如果是一个连接的话，服务器进程中就能保持住这个连接并且在内存中记住一些信息状态。而每次请求结束后，连接就关闭，相关的内容就释放了，所以记不住任何状态，成为无状态连接。")])])]),t._v(" "),v("li",[t._v("HTTPS是在应用层和传输层之间，增加了一个安全套接层SSL/TLS")]),t._v(" "),v("li",[v("strong",[t._v("HTTP + 加密 + 认证 + 完整性保护 = HTTPS")])]),t._v(" "),v("li",[t._v("协议格式：请求和响应都是 起始行、消息头和消息体")])]),t._v(" "),v("h4",{attrs:{id:"http1-和-http2-区别"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#http1-和-http2-区别"}},[t._v("#")]),t._v(" Http1 和 http2 区别")]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",{staticStyle:{"text-align":"center"}},[t._v("http1.0")]),t._v(" "),v("th",{staticStyle:{"text-align":"center"}},[t._v("http1.1")]),t._v(" "),v("th",{staticStyle:{"text-align":"center"}},[t._v("http2")])])]),t._v(" "),v("tbody",[v("tr",[v("td",{staticStyle:{"text-align":"center"}},[t._v("短连接")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("持久连接")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[v("strong",[t._v("多路复用")])])]),t._v(" "),v("tr",[v("td",{staticStyle:{"text-align":"center"}},[t._v("默认不支持长连接"),v("br"),t._v("需要设置keep-alive参数指定")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("强缓存和协商缓存")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("首部压缩")])]),t._v(" "),v("tr",[v("td",{staticStyle:{"text-align":"center"}}),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("可以进行断点续传")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("二进制格式编码传输")])]),t._v(" "),v("tr",[v("td",{staticStyle:{"text-align":"center"}}),t._v(" "),v("td",{staticStyle:{"text-align":"center"}}),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("服务端推送(server push)")])])])]),t._v(" "),v("h4",{attrs:{id:"现代浏览器在与服务器建立了一个-tcp-连接后是否会在一个-http-请求完成后断开？什么情况下会断开？"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#现代浏览器在与服务器建立了一个-tcp-连接后是否会在一个-http-请求完成后断开？什么情况下会断开？"}},[t._v("#")]),t._v(" 现代浏览器在与服务器建立了一个 TCP 连接后是否会在一个 HTTP 请求完成后断开？什么情况下会断开？")]),t._v(" "),v("ul",[v("li",[t._v("默认情况下建立 TCP 连接不会断开，只有在请求报头中声明 Connection: close 才会在请求完成后关闭连接。\n"),v("ul",[v("li",[t._v("在 HTTP/1.0 中，一个服务器在发送完一个 HTTP 响应后，会断开 TCP 链接。但是这样每次请求都会重新建立和断开 TCP 连接，代价过大。HTTP/1.1 就把 Connection 头写进标准，并且默认开启持久连接，除非请求中写明 Connection: close，那么浏览器和服务器之间是会维持一段时间的 TCP 连接，不会一个请求结束就断掉。")])])])]),t._v(" "),v("h4",{attrs:{id:"一个-tcp-连接可以对应几个-http-请求？"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#一个-tcp-连接可以对应几个-http-请求？"}},[t._v("#")]),t._v(" 一个 TCP 连接可以对应几个 HTTP 请求？")]),t._v(" "),v("ul",[v("li",[t._v("如果维持连接，一个 TCP 连接是可以发送多个 HTTP 请求的")])]),t._v(" "),v("h4",{attrs:{id:"一个-tcp-连接中-http-请求发送可以一起发送么（比如一起发三个请求，再三个响应一起接收）？"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#一个-tcp-连接中-http-请求发送可以一起发送么（比如一起发三个请求，再三个响应一起接收）？"}},[t._v("#")]),t._v(" 一个 TCP 连接中 HTTP 请求发送可以一起发送么（比如一起发三个请求，再三个响应一起接收）？")]),t._v(" "),v("ul",[v("li",[t._v("在 HTTP/1.1 存在 Pipelining 技术可以完成这个多个请求同时发送，但是由于浏览器默认关闭，所以可以认为这是不可行的。在 HTTP2 中由于 Multiplexing 特点的存在，多个 HTTP 请求可以在同一个 TCP 连接中并行进行。")])]),t._v(" "),v("h4",{attrs:{id:"浏览器对同一-host-建立-tcp-连接到数量有没有限制？"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#浏览器对同一-host-建立-tcp-连接到数量有没有限制？"}},[t._v("#")]),t._v(" 浏览器对同一 Host 建立 TCP 连接到数量有没有限制？")]),t._v(" "),v("ul",[v("li",[t._v("有。Chrome 最多允许对同一个 Host 建立六个 TCP 连接。不同的浏览器有一些区别。")])]),t._v(" "),v("p",[v("a",{attrs:{href:"https://juejin.im/post/5ad4094e6fb9a028d7011069",target:"_blank",rel:"noopener noreferrer"}},[t._v("小哥哥,小姐姐,我有一份tcp、http面试指南你要吗？"),v("OutboundLink")],1)]),t._v(" "),v("p",[v("a",{attrs:{href:"https://www.jianshu.com/p/0ac515088cec",target:"_blank",rel:"noopener noreferrer"}},[t._v("面试官问我：一个 TCP 连接可以发多少个 HTTP 请求？我竟然回答不上来.."),v("OutboundLink")],1)]),t._v(" "),v("p",[v("a",{attrs:{href:"https://juejin.im/post/5e44e17a518825491b11bd63",target:"_blank",rel:"noopener noreferrer"}},[t._v("2020年大厂面试指南-网络篇"),v("OutboundLink")],1)]),t._v(" "),v("p",[v("a",{attrs:{href:"https://juejin.im/post/5e527c58e51d4526c654bf41",target:"_blank",rel:"noopener noreferrer"}},[t._v("TCP协议灵魂之问，巩固你的网路底层基础"),v("OutboundLink")],1)]),t._v(" "),v("h2",{attrs:{id:"http-状态码"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#http-状态码"}},[t._v("#")]),t._v(" http 状态码")]),t._v(" "),v("p",[t._v("(注 : 🌶 为常用)")]),t._v(" "),v("h4",{attrs:{id:"_1xx（临时响应）"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_1xx（临时响应）"}},[t._v("#")]),t._v(" 1xx（临时响应）")]),t._v(" "),v("p",[t._v("表示临时响应并需要请求者继续执行操作的状态码。")]),t._v(" "),v("ul",[v("li",[t._v("100 : 继续。 请求者应当继续提出请求。服务器返回此代码表示已收到请求的第一部分，正在等待其余部分。")]),t._v(" "),v("li",[t._v("101 : 切换协议。 请求者已要求服务器切换协议，服务器已确认并准备切换。")])]),t._v(" "),v("h4",{attrs:{id:"_2xx（成功）"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_2xx（成功）"}},[t._v("#")]),t._v(" 2xx（成功）")]),t._v(" "),v("p",[t._v("表示成功处理了请求的状态码。")]),t._v(" "),v("ul",[v("li",[t._v("200 :🌶 成功。 服务器已经成功处理了请求。通常，这表示服务器提供了请求的网页。")]),t._v(" "),v("li",[t._v("201 : 已创建。 请求成功并且服务器创建了新的资源")]),t._v(" "),v("li",[t._v("202 : 已接受。 服务器已接受请求，但尚未处理")]),t._v(" "),v("li",[t._v("203 : 非授权信息。 服务器已经成功处理了请求，但返回的信息可能来自另一来源")]),t._v(" "),v("li",[t._v("204 : 无内容。 服务器成功处理了请求，但没有返回任何内容")]),t._v(" "),v("li",[t._v("205 : 重置内容。 服务器成功处理了请求，但没有返回任何内容")]),t._v(" "),v("li",[t._v("206 : 部分内容。 服务器成功处理了部分 GET 请求")])]),t._v(" "),v("h4",{attrs:{id:"_3xx（重定向）"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_3xx（重定向）"}},[t._v("#")]),t._v(" 3xx（重定向）")]),t._v(" "),v("p",[t._v("表示要完成请求，需要进一步操作。通常，这些状态代码用来重定向。")]),t._v(" "),v("ul",[v("li",[t._v("300 : 多种选择。 针对请求，服务器可执行多种操作。服务器可根据请求者（user agent）选择一项操作，或提供操作列表供请求者选择。")]),t._v(" "),v("li",[t._v("301 :🌶 永久移动。 请求的网页已永久移动到新位置。服务器返回此响应（对 GET 或 HEAD 请求的响应）时，会自动将请求者转到新位置。")]),t._v(" "),v("li",[t._v("302 :🌶 临时移动。 服务器目前从不同位置的网页响应请求，但请求者应继续使用原有位置来进行以后的请求")]),t._v(" "),v("li",[t._v("303 : 查看其它位置。 请求者应当对不同的位置使用单独的 GET 请求来检索响应时，服务器返回此代码")]),t._v(" "),v("li",[t._v("304 :🌶 协商缓存。 自动上次请求后，请求的网页未修改过。服务器返回此响应，不会返回网页的内容")]),t._v(" "),v("li",[t._v("305 : 使用代理。 请求者只能使用代理访问请求的网页。如果服务器返回此响应，还表示请求者应使用代理")]),t._v(" "),v("li",[t._v("307 : 临时性重定向。 服务器目前从不同位置的网页响应请求，但请求者应继续使用原有的位置来进行以后的请求")])]),t._v(" "),v("h4",{attrs:{id:"_4xx（请求错误）"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_4xx（请求错误）"}},[t._v("#")]),t._v(" 4xx（请求错误）")]),t._v(" "),v("p",[t._v("这些状态码表示请求可能出错，妨碍了服务器的处理。")]),t._v(" "),v("ul",[v("li",[t._v("400 :🌶 错误请求。 服务器不理解请求的语法")]),t._v(" "),v("li",[t._v("401 :🌶 未授权。 请求要求身份验证。对于需要登录的网页，服务器可能返回此响应")]),t._v(" "),v("li",[t._v("403 :🌶 禁止。 服务器拒绝请求")]),t._v(" "),v("li",[t._v("404 :🌶 未找到。 服务器找不到请求的网页")]),t._v(" "),v("li",[t._v("405 : 方法禁用。 禁用请求中指定的方法")]),t._v(" "),v("li",[t._v("406 : 不接受。 无法使用请求的内容特性响应请求的网页")]),t._v(" "),v("li",[t._v("407 : 需要代理授权。 此状态码与 401（未授权）类似，但指定请求者应当授权使用代理")]),t._v(" "),v("li",[t._v("408 : 请求超时。 服务器等候请求时发生超时")]),t._v(" "),v("li",[t._v("409 : 冲突。 服务器在完成请求时发生冲突。服务器必须在响应中包含有关冲突的信息。")]),t._v(" "),v("li",[t._v("410 : 已删除。 如果请求的资源已永久删除，服务器就会返回此响应")]),t._v(" "),v("li",[t._v("411 : 需要有效长度。 服务器不接受不含有效内容长度标头字段的请求")]),t._v(" "),v("li",[t._v("412 : 未满足前提条件。 服务器未满足请求者在请求者设置的其中一个前提条件")]),t._v(" "),v("li",[t._v("413 : 请求实体过大。 服务器无法处理请求，因为请求实体过大，超出了服务器的处理能力")]),t._v(" "),v("li",[t._v("414 : 请求的 URI 过长。 请求的 URI（通常为网址）过长，服务器无法处理")]),t._v(" "),v("li",[t._v("415 : 不支持媒体类型。 请求的格式不受请求页面的支持")]),t._v(" "),v("li",[t._v("416 : 请求范围不符合要求。 如果页面无法提供请求的范围，则服务器会返回此状态码")]),t._v(" "),v("li",[t._v("417 : 未满足期望值。 服务器未满足“期望”请求标头字段的要求")])]),t._v(" "),v("h4",{attrs:{id:"_5xx（服务器错误）"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_5xx（服务器错误）"}},[t._v("#")]),t._v(" 5xx（服务器错误）")]),t._v(" "),v("p",[t._v("这些状态码表示服务器在尝试处理请求时发生内部错误。这些错误可能是服务器本身的错误，而不是请求出错。")]),t._v(" "),v("ul",[v("li",[t._v("500 :🌶 服务器内部错误。 服务器遇到错误，无法完成请求")]),t._v(" "),v("li",[t._v("501 : 尚未实施。 服务器不具备完成请求的功能。例如，服务器无法识别请求方法时可能会返回此代码")]),t._v(" "),v("li",[t._v("502 :🌶 错误网关。 服务器作为网关或代理，从上游服务器无法收到无效响应")]),t._v(" "),v("li",[t._v("503 : 服务器不可用。 服务器目前无法使用（由于超载或者停机维护）。通常，这只是暂时状态")]),t._v(" "),v("li",[t._v("504 : 网关超时。 服务器作为网关代理，但是没有及时从上游服务器收到请求")]),t._v(" "),v("li",[t._v("505 : HTTP 版本不受支持。 服务器不支持请求中所用的 HTTP 协议版本")])]),t._v(" "),v("h2",{attrs:{id:"移动端-jsbridge"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#移动端-jsbridge"}},[t._v("#")]),t._v(" 移动端 jsBridge")]),t._v(" "),v("blockquote",[v("p",[t._v("JSBridge 是一种 JS 实现的 Bridge，连接着桥两端的 Native 和 H5。它在 APP 内方便地让 Native 调用 JS，JS 调用 Native ，是双向通信的通道。")])]),t._v(" "),v("h4",{attrs:{id:"常用功能"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#常用功能"}},[t._v("#")]),t._v(" 常用功能")]),t._v(" "),v("ul",[v("li",[v("p",[v("strong",[t._v("JSBridge中实现的通用功能")])]),t._v(" "),v("ul",[v("li",[t._v("自定义titleBar")]),t._v(" "),v("li",[t._v("自定义titleBar上左右两侧按钮的功能及样式")]),t._v(" "),v("li",[t._v("打开一个新的webview来承接跳转的url")]),t._v(" "),v("li",[t._v("关闭自身webview")]),t._v(" "),v("li",[t._v("关闭前n个webview")]),t._v(" "),v("li",[t._v("监听resume、pause事件")]),t._v(" "),v("li",[t._v("下拉刷新")]),t._v(" "),v("li",[t._v("app唤起")])])]),t._v(" "),v("li",[v("p",[v("strong",[t._v("JSBridge中实现的业务功能")])]),t._v(" "),v("ul",[v("li",[t._v("页面分享（微信、微博分享）")]),t._v(" "),v("li",[t._v("登录SDK页面呼启")]),t._v(" "),v("li",[t._v("支付功能")]),t._v(" "),v("li",[t._v("调用相机、图片上")])])])]),t._v(" "),v("p",[v("strong",[t._v("H5 与 Native 对比")])]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",{staticStyle:{"text-align":"center"}},[t._v("name")]),t._v(" "),v("th",{staticStyle:{"text-align":"center"}},[t._v("H5")]),t._v(" "),v("th",{staticStyle:{"text-align":"center"}},[t._v("Native")])])]),t._v(" "),v("tbody",[v("tr",[v("td",{staticStyle:{"text-align":"center"}},[t._v("稳定性")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("调用系统浏览器内核，稳定性较差")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("使用原生内核，更加稳定")])]),t._v(" "),v("tr",[v("td",{staticStyle:{"text-align":"center"}},[t._v("灵活性")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("版本迭代快，上线灵活")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("迭代慢，需要应用商店审核，上线速度受限制")])]),t._v(" "),v("tr",[v("td",{staticStyle:{"text-align":"center"}},[t._v("受网速 影响")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("较大")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("较小")])]),t._v(" "),v("tr",[v("td",{staticStyle:{"text-align":"center"}},[t._v("流畅度")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("有时加载慢，给用户“卡顿”的感觉")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("加载速度快，更加流畅")])]),t._v(" "),v("tr",[v("td",{staticStyle:{"text-align":"center"}},[t._v("用户体验")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("功能受浏览器限制，体验有时较差")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("原生系统 api 丰富，能实现的功能较多，体验较好")])]),t._v(" "),v("tr",[v("td",{staticStyle:{"text-align":"center"}},[t._v("可移植性")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("兼容跨平台跨系统，如 PC 与 移动端，iOS 与 Android")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("可移植性较低，对于 iOS 和 Android 需要维护两套代码")])])])]),t._v(" "),v("h4",{attrs:{id:"双向通信-js-调用-native"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#双向通信-js-调用-native"}},[t._v("#")]),t._v(" 双向通信 --- JS 调用 Native")]),t._v(" "),v("ul",[v("li",[t._v("拦截 URL Scheme")]),t._v(" "),v("li",[t._v("注入 API")]),t._v(" "),v("li",[t._v("重写 prompt 等原生 JS 方法")])]),t._v(" "),v("h5",{attrs:{id:"拦截-url-scheme"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#拦截-url-scheme"}},[t._v("#")]),t._v(" 拦截 URL Scheme")]),t._v(" "),v("blockquote",[v("p",[t._v("scheme协议是什么")]),t._v(" "),v("ul",[v("li",[t._v("可以简单理解为自定义的url")]),t._v(" "),v("li",[t._v("形式如："),v("code",[t._v("[scheme:][//domain][path][?query][#fragment]")])]),t._v(" "),v("li",[t._v("举个栗子："),v("code",[t._v("jsbridge://openPage?url=https%3A%2F%2Fwww.baidu.com")])])])]),t._v(" "),v("p",[t._v("约定固定格式的scheme协议，例如："),v("code",[t._v("[customscheme:][//methodName][?params={data, callback}]")])]),t._v(" "),v("ul",[v("li",[t._v("customscheme：自定义需要拦截的scheme")]),t._v(" "),v("li",[t._v("methodName：需要调用的native的方法")]),t._v(" "),v("li",[t._v("params：传递给native的参数 和 回调函数名")])]),t._v(" "),v("p",[t._v("Android 和 iOS 都可以通过拦截 URL Scheme 并解析 Scheme 来决定是否进行对应的 Native 代码逻辑处理。")]),t._v(" "),v("ul",[v("li",[t._v("Android 的话，"),v("code",[t._v("Webview")]),t._v(" 提供了 "),v("code",[t._v("shouldOverrideUrlLoading")]),t._v(" 方法来提供给 Native 拦截 H5 发送的 "),v("code",[t._v("URL Scheme")]),t._v(" 请求。")]),t._v(" "),v("li",[t._v("iOS 的 "),v("code",[t._v("WKWebview")]),t._v(" 可以根据拦截到的 "),v("code",[t._v("URL Scheme")]),t._v(" 和对应的参数执行相关的操作。")])]),t._v(" "),v("p",[t._v("这种方法的优点是不存在漏洞问题、使用灵活，可以实现 H5 和 Native 页面的无缝切换。")]),t._v(" "),v("p",[t._v("例如在某一页面需要快速上线的情况下，先开发出 H5 页面。某一链接填写的是 H5 链接，在对应的 Native 页面开发完成前先跳转至 H5 页面，待 Native 页面开发完后再进行拦截，跳转至 Native 页面，此时 H5 的链接无需进行修改。")]),t._v(" "),v("p",[t._v("但是使用 iframe.src 来发送 "),v("code",[t._v("URL Scheme")]),t._v(" 需要对 URL 的长度作控制，使用复杂，速度较慢。")]),t._v(" "),v("ul",[v("li",[t._v("scheme的请求不要使用location.href\n"),v("ul",[v("li",[t._v("如果webview为对scheme进行拦截，很可能会出现webview报错现象，原因是webview把自定义的scheme协议当正常的url去加载了")]),t._v(" "),v("li",[t._v("解决办法是在页面上添加一个iframe，给iframe的src赋值为自定义scheme，这样也能发送这个scheme请求")])])])]),t._v(" "),v("h5",{attrs:{id:"注入-api"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#注入-api"}},[t._v("#")]),t._v(" 注入 API")]),t._v(" "),v("p",[t._v("基于 "),v("code",[t._v("Webview")]),t._v(" 提供的能力，我们可以向 Window 上注入对象或方法。JS 通过这个对象或方法进行调用时，执行对应的逻辑操作，可以直接调用 Native 的方法。使用该方式时，JS 需要等到 Native 执行完对应的逻辑后才能进行回调里面的操作。")]),t._v(" "),v("ul",[v("li",[t._v("Android 的 "),v("code",[t._v("Webview")]),t._v(" 提供了 addJavascriptInterface 方法，支持 Android 4.2 及以上系统。")]),t._v(" "),v("li",[t._v("iOS 的 "),v("code",[t._v("UIWebview")]),t._v(" 提供了 JavaScriptScore 方法，支持 iOS 7.0 及以上系统。"),v("code",[t._v("WKWebview")]),t._v(" 提供了 window.webkit.messageHandlers 方法，支持 iOS 8.0 及以上系统。"),v("code",[t._v("UIWebview")]),t._v(" 在几年前常用，目前已不常见。")])]),t._v(" "),v("h5",{attrs:{id:"重写-prompt-等原生-js-方法"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#重写-prompt-等原生-js-方法"}},[t._v("#")]),t._v(" 重写 prompt 等原生 JS 方法")]),t._v(" "),v("ul",[v("li",[v("p",[t._v("Android 4.2 之前注入对象的接口是 addJavascriptInterface ，但是由于安全原因慢慢不被使用。一般会通过修改浏览器的部分 Window 对象的方法来完成操作。主要是拦截 alert、confirm、prompt、console.log 四个方法，分别被 "),v("code",[t._v("Webview")]),t._v(" 的 onJsAlert、onJsConfirm、onConsoleMessage、onJsPrompt 监听。")])]),t._v(" "),v("li",[v("p",[t._v("iOS 由于安全机制，"),v("code",[t._v("WKWebView")]),t._v(" 对 alert、confirm、prompt 等方法做了拦截，如果通过此方式进行 Native 与 JS 交互，需要实现 "),v("code",[t._v("WKWebView")]),t._v(" 的三个 "),v("code",[t._v("WKUIDelegate")]),t._v(" 代理方法。")])])]),t._v(" "),v("p",[t._v("使用该方式时，可以与 Android 和 iOS 约定好使用传参的格式，这样 H5 可以无需识别客户端，传入不同参数直接调用 Native 即可。剩下的交给客户端自己去拦截相同的方法，识别相同的参数，进行自己的处理逻辑即可实现多端表现一致。")]),t._v(" "),v("p",[t._v("另外，如果能与 Native 确定好方法名、传参等调用的协议规范，这样其它格式的 prompt 等方法是不会被识别的，能起到隔离的作用。")]),t._v(" "),v("h4",{attrs:{id:"双向通信-native-调用-js"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#双向通信-native-调用-js"}},[t._v("#")]),t._v(" 双向通信 --- Native 调用 JS")]),t._v(" "),v("p",[t._v("H5 将 JS 方法暴露在 Window 上给 Native 调用即可")]),t._v(" "),v("ul",[v("li",[t._v("Android 中主要有两种方式实现。在 4.4 以前，通过 loadUrl 方法，执行一段 JS 代码来实现。在 4.4 以后，可以使用 evaluateJavascript 方法实现。loadUrl 方法使用起来方便简洁，但是效率低无法获得返回结果且调用的时候会刷新 WebView。evaluateJavascript 方法效率高获取返回值方便，调用时候不刷新WebView，但是只支持 Android 4.4+。")]),t._v(" "),v("li",[t._v("iOS 在 "),v("code",[t._v("WKWebview")]),t._v(" 中可以通过 evaluateJavaScript:javaScriptString 来实现，支持 iOS 8.0 及以上系统。")])]),t._v(" "),v("h4",{attrs:{id:"jsbridge-的使用"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#jsbridge-的使用"}},[t._v("#")]),t._v(" JSBridge 的使用")]),t._v(" "),v("ul",[v("li",[v("p",[t._v("由 H5 引用")]),t._v(" "),v("ul",[v("li",[t._v("采用本地引入 npm 包的方式进行调用。这种方式可以确定 JSBridge 是存在的，可直接调用 Native 方法。但是如果后期 Bridge 的实现方式改变，双方需要做更多的兼容，维护成本高")])])]),t._v(" "),v("li",[v("p",[t._v("由 Native 注入")]),t._v(" "),v("ul",[v("li",[t._v("这样有利于保持 API 与 Native 的一致性，但是缺点是在 Native 注入的方法和时机都受限，JS 调用 Native 之前需要先判断 JSBridge 是否注入成功")])])])]),t._v(" "),v("p",[v("a",{attrs:{href:"https://juejin.im/post/5e5248216fb9a07cb0314fc9",target:"_blank",rel:"noopener noreferrer"}},[t._v("JSBridge 初探"),v("OutboundLink")],1)]),t._v(" "),v("p",[v("a",{attrs:{href:"https://zhuanlan.zhihu.com/p/32899522",target:"_blank",rel:"noopener noreferrer"}},[t._v("Hybrid开发中JSBridge的实现"),v("OutboundLink")],1)]),t._v(" "),v("p",[v("a",{attrs:{href:"https://juejin.im/post/5abca877f265da238155b6bc",target:"_blank",rel:"noopener noreferrer"}},[t._v("JSBridge的原理"),v("OutboundLink")],1)])])}),[],!1,null,null,null);e.default=a.exports}}]);