### 1. 博客皮肤

博客皮肤下拉框选择 `SimpleMemory`

### 2. 页面定制 CSS

```css title="页面定制CSS"
/* mine.css文件查看 */
```

:::tip 选中禁用模板 css
禁用模板默认 css
:::

### 3. 博客侧边栏公告

```html
<script type="text/javascript">
    window.cnblogsConfig = {
        GhVersions: "v1.3.3", // 版本
        blogUser: "笔墨纸砚", // 用户名
        blogAvatar: "https://pic.cnblogs.com/avatar/921896/20180614182435.png", // 用户头像
        blogStartDate: "2016-03-25", // 入园时间，年-月-日。入园时间查看方法：鼠标停留园龄时间上，会显示入园时间
        webpageTitleOnblur: "みなさん",
        webpageTitleFocus: "(*´∇｀*) 欢迎回来！",
        switchDayNight: {
            enable: true, // 是否开启日/夜间模式切换按钮
            auto: {
                // 自动切换相关配置
                enable: false, // 开启自动切换
                dayHour: 5, // 日间模式开始时间，整数型，24小时制
                nightHour: 19, // 夜间模式开始时间，整数型，24小时制
            },
        },
        progressBar: {
            color: "#77b6ff",
        },
        menuCustomList: {
            我的博客: {
                // 标题
                data: [
                    // 列表数据 ['列表', '链接']
                    ["笔墨纸砚", "https://algate.gitee.io"],
                    ["白纸驿站v2.0", "https://algate.github.io"],
                    ["白纸驿站v1.0", "https://algate.github.io/hexo.pure/"],
                ],
                icon: "icon-brush_fill", // 配置图标，参考文档：定制化/字体图标库
            },
            我的手机: {
                // 标题
                data: [
                    // 列表数据 ['列表', '链接']
                    ["QQ小程序", "https://algate.github.io/Lottery"],
                    ["锤子UI", "https://algate.github.io/HammerUI"],
                ],
                icon: "icon-logo-apple", // 配置图标，参考文档：定制化/字体图标库
            },
        },
        menuNavList: [
            // 列表数据 ['导航名称', '链接', 'icon']
            [
                "赞赏",
                "https://www.cnblogs.com/algate/articles/14370910.html",
                "icon-dashang1",
            ],
            [
                "关于我",
                "https://www.cnblogs.com/algate/articles/14370885.html",
                "icon-mine_fill",
            ],
            ["GitHub", "https://github.com/algate", "icon-github"],
        ],
        homeBannerText: [
            "依心而为，无悔今生；不忘初心，方得始终；According to the heart, no regrets in this life;Do not forget the beginner's mind, have always;",
        ],
        homeBannerTextType: "jinrishici",
        reward: {
            enable: true,
            wechatpay:
                "https://images.cnblogs.com/cnblogs_com/algate/1927868/o_210204001933reward.png", // 微信支付二维码图片URL
            alipay:
                "https://images.cnblogs.com/cnblogs_com/algate/1927868/o_210204014949alipay.png", // 支付宝支付二维码图片URL
        },
        weChatOfficialAccounts:
            "https://images.cnblogs.com/cnblogs_com/algate/1928549/o_210205014451wx.jpg",
        codeLineNumber: true,
        essayCodeHighlightingType: "highlightjs",
        bottomBlogroll: [
            // 友情链接，[[链接名,链接]....]
            ["笔墨纸砚", "https://algate.gitee.io"],
            ["BNDong", "https://www.cnblogs.com/bndong/"],
        ],
        footerStyle: 1,
        iconFont: {
            // v1.3.0 新增配置
            icon: "icon-xl", // iconfont 图标名称
            color: "red", // 图标颜色
            fontSize: "16px", // 图标大小
        },
        advertising: false,
    };
</script>

<script
    src="https://cdn.jsdelivr.net/gh/BNDong/Cnblogs-Theme-SimpleMemory@v1.3.3/src/script/simpleMemory.min.js"
    defer
></script>
```

### 4. 页首 HTML 代码

```html
<a href="https://www.cnblogs.com/algate/"
    ><div
        class="tu-menu-home"
        style="position: fixed;z-index: 1000;height: 30px;top: 6px;margin:1em;padding:0 15px;left: 140px;cursor: pointer;color: #2dabff;border-radius: 3px;text-transform: uppercase;line-height: 30px;text-align: center;border: 1px solid rgba(255,255,255,.6);border-radius: 3px;"
    >
        <i class="iconfont icon-homepage_fill" style="font-size:28px;"></i></div
></a>
<div
    style="font-weight: bold; padding: 10px; border-radius: 6px;text-align: center; margin-bottom: 15px;position:fixed;top:0;right:0;z-index:100;background-image:linear-gradient(45deg, #1cbbb4, #8dc63f);"
>
    <div style="margin-bottom: 8px;">
        <span style="font-size: 14px;">专注技术 • 分享理财</span><br />
        <div>
            <div style="color: #444; margin: 5px 0 5px;">
                关注『<b style="color: green;">我叫白纸</b>』公众号
            </div>
            <img
                width="100%"
                alt="关注订阅号：我叫白纸"
                src="https://images.cnblogs.com/cnblogs_com/algate/1928549/t_210205014451wx.jpg"
            />
            <div style="color: #444; margin: 5px 0 5px;">
                体验『<b style="color: green;">锤子UI</b>』小程序
            </div>
            <img
                width="100%"
                alt="关注订阅号：我叫白纸"
                src="https://images.cnblogs.com/cnblogs_com/algate/1928549/t_210205051140applet.png"
            />
        </div>
    </div>
</div>
```

### 5. 页脚 HTML 代码

```html
<!--放大图片-->
<link
    rel="stylesheet"
    type="text/css"
    href="https://blog-static.cnblogs.com/files/zouwangblog/zoom.css"
/>
<script src="https://cdn.bootcss.com/bootstrap/3.2.0/js/transition.js"></script>
<script src="https://blog-static.cnblogs.com/files/zouwangblog/zoom.js"></script>
<script type="text/javascript">
    $("#cnblogs_post_body img").attr("data-action", "zoom");
</script>
<!--放大图片end-->

<!--鼠标特效-->
<script src="https://blog-static.cnblogs.com/files/zouwangblog/mouse-click.js"></script>
<canvas
    width="1777"
    height="841"
    style="position: fixed; left: 0px; top: 0px; z-index: 2147483647; pointer-events: none;"
></canvas>
<!--鼠标特效 end-->

<!-- Music-->
<!-- v1.2 -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/aplayer/dist/APlayer.min.css">
<script src="https://cdn.jsdelivr.net/npm/aplayer/dist/APlayer.min.js"></script>
<script src="https://unpkg.com/meting@1.2/dist/Meting.min.js"></script>
<div
    id="player"
    class="aplayer aplayer-withlist aplayer-fixed"
    data-id="140630587"
    data-server="netease"
    data-type="playlist"
    data-order="random"
    data-fixed="true"
    data-listfolded="true"
    data-theme="orange"
></div>
<!-- v2.0 -->
### v2.0版本
<!-- require APlayer -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/aplayer/dist/APlayer.min.css">
<script src="https://cdn.jsdelivr.net/npm/aplayer/dist/APlayer.min.js"></script>
<!-- require MetingJS -->
<!-- <script src="https://cdn.jsdelivr.net/npm/meting@2/dist/Meting.min.js"></script> -->
<script src="https://cdn.jsdelivr.net/npm/meting@2.0.1/dist/Meting.min.js"></script>
<meting-js
    class="aplayer aplayer-withlist aplayer-fixed"
    id="140630587"
    server="netease"
    type="playlist"
    order="random"
    fixed="true"
    listfolded="true"
    theme="orange"
></meting-js>
<!-- Music end -->

<!--雪花特效1&12月自动添加-->
<div class="Snow">
    <canvas id="Snow"></canvas>
</div>
<script src="https://blog-static.cnblogs.com/files/zouwangblog/xue.js"></script>
```
### 6. 保存即可