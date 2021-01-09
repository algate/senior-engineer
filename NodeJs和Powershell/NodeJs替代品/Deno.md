# Deno 
是 Ryan Dahl 在2017年创立的。

Ryan Dahl 也是 Node.js 的创始人，从2007年一直到2012年，他后来把 Node.js 移交给了其他开发者，不再过问了，转而研究人工智能。

他始终不是很喜欢 Python 语言，久而久之，就想搞一个 JavaScript 语言的人工智能开发框架。等到他再回过头捡起 Node.js，发现这个项目已经背离了他的初衷，有一些无法忽视的问题。

首先，过去五六年，JavaScript 语言脱胎换骨，ES6 标准引入了大量新的语法特性。其中，影响最大的语法有两个：Promise 接口（以及 async 函数）和 ES 模块。

Node.js 对这两个新语法的支持，都不理想。由于历史原因，Node.js 必须支持回调函数（callback），导致异步接口会有 Promise 和回调函数两种写法；同时，Node.js 自己的模块格式 CommonJS 与 ES 模块不兼容，导致迟迟无法完全支持 ES 模块。

其次，Node.js 的模块管理工具 npm，逻辑越来越复杂；模块安装目录 npm_modules 极其庞杂，难以管理。Node.js 也几乎没有安全措施，用户只要下载了外部模块，就只好听任别人的代码在本地运行，进行各种读写操作。

再次，Node.js 的功能也不完整，导致外部工具层出不穷，让开发者疲劳不堪：webpack，babel，typescript、eslint、prettier......
[Deno 运行时入门教程：Node.js 的替代品](http://www.ruanyifeng.com/blog/2020/01/deno-intro.html)

# 使用
[Deno下载地址](https://github.com/denoland/deno/releases)
要想使用 `deno` 命令,需要把deno配置到环境变量
1. 查看deno
```bash
deno --version
```
结果如下：
```bash
deno 1.4.2
v8 8.7.75
typescript 4.0.3
```
2. 运行一个 TypeScript 的远程脚本
```bash
$ deno run \
https://deno.land/std/examples/curl.ts \
https://example.com
```
上面例子中，Deno 执行远程脚本curl.ts，用这个脚本去抓取网址example.com。但是，运行后报错，表示没有网络通信的权限。

我们给予 Deno 网络通信的权限，就可以顺利执行。
```bash
deno run --allow-net \
https://deno.land/std/examples/curl.ts \
https://example.com
```
终于找一个可以直接运行js、ts的工具了！

