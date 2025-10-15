---
title: "FlyingPress 使用教程：缓存 + 性能优化插件新势力"
description: "本教程详细介绍 FlyingPress 插件的各项功能设置，集成 Cloudflare Enterprise CDN，提升 WordPress 网站性能。"
tags: [wordpress, cache, performance, optimization, cdn]
slug: /flyingpress-tutorial
---

# FlyingPress 使用教程：缓存 + 性能优化插件新势力

:::caution
Last updated: Oct 15, 2025
:::

![FlyingPress使用教程，缓存 + 性能优化插件新势力，集成Cloudflare Enterprise](https://website-custom.com/wp-content/uploads/2025/03/landing-page.webp)

## 文章概览

FlyingPress 使用教程，FlyingPress 是和 WP Rocket 功能高度相似的一款插件，都是集缓存和性能优化于一身的插件，但是 FlyingPress 插件集成了 Cloudflare Enterprise（CF 企业套餐），进一步加强了作为性能提升插件的强度。

## FlyingPress 使用教程

FlyingPress 是一款 WordPress 性能优化插件，它的主要功能包括智能缓存、静态文件压缩、CSS/JS 优化和图片延迟加载等功能。

这么一看，FlyingPress 和 WP Rocket（点击查看 WP Rocket 插件使用教程）是一样的插件，但值得一提的是，FlyingPress 家的 CDN（FlyingCDN）集成了 Cloudflare Enterprise（$5/月），依托于 Cloudflare Enterprise 顶级 CDN 可以让网站速度更上一层楼。

下面这张图是 Well 在 FlyingPress 官网截取的，内容是各优化插件之间的对比：

:::tip
接下来 Well 分享 FlyingPress 使用教程的每个板块具体设置操作：
:::

## FlyingPress Dashboard（仪表盘）设置

仪表盘内的主要功能用来快速清理缓存和预加载缓存，左上角显示已缓存的页面数，下方快捷操作分别是：

- **Purge pages（清除页面）**：一键清除 FlyingPress 产生的所有页面缓存。
- **Preload Cache（预加载缓存）**：在不清除现有页面缓存的情况下，生成新的缓存。
- **Purge Pages and preload（清除页面并预加载）**：一键清除所有页面缓存并重新生成缓存。
- **Purge everything and preload（清除所有并预加载）**：一键清除所有静态内容（HTML 页面和 CSS/JS 文件等静态内容）的缓存并重新生成缓存。
- **FlyingCDN（FlyingPress 家的 CDN）**：点击可以跳转到 FlyingCDN 官网，可以进行注册。

## FlyingPress Cache（缓存）设置

缓存设置：

- **Cache logged in users（缓存登录用户）**：选择性开启，开启后会为登录用户生成单独的缓存（预加载的时候不会生成已登录用户缓存），官方的说法是：每个已登录用户角色都会有专属的缓存内容。这也就意味着相同角色的用户会共用相同的缓存，提高了缓存效率，所以如果你网站某些页面展示了用户的个人信息，需要排除这些页面的缓存（在高级设置里排除）。
- **Automatically preload cache（自动预加载缓存）**：开启，修改或者调整某些设置的时候自动预加载缓存。
- **Smart link preloading（智能链接预加载）**：开启，用户鼠标移动到某个链接上的时候就预加载对应链接的内容，可以在打开该页面的时候更快。

## FlyingPress CSS 设置

CSS 设置：

- **Minify CSS（压缩 CSS）**：开启，通过去掉空白行、注释代码，压缩 CSS 文件的大小。
- **Remove unused CSS（移除未使用的 CSS）**：开启，把页面要用到的关键的 CSS 提取出来，剔除剩下未使用的 CSS。
  - **Load unused CSS（加载未使用的 CSS）**：On user interaction，在用户交互（移动鼠标、点击）的时候才加载未使用的 CSS。
 - **Exclude stylesheets（排除样式表）**：有时候插件可能误判把一些 CSS 给当成未使用的给移除了，可以在这个框里添加需要排除的 CSS 文件 URL，一行一个。
  - **Include selectors（排除选择器）**：通过填写页面里某个元素的 CSS 选择器（类名、ID）去排除对应的 CSS。

## FlyingPress JavaScript 设置

JavaScript 设置：

- **Minify JavaScript（压缩 JS）**：开启，和压缩 CSS 是相同的逻辑。
- **Defer JavaScript（推迟 JS）**：开启，推迟 JS 在 HTML 解析后再执行。
- **Delay JavaScript（延迟 JS）**：开启，在用户产生交互后才执行 JS。
- **Delay method（延迟方式）**：
  - **Delay selected（挑选延迟）**或者**Delay all（延迟所有）**，Delay all 对速度和评分（LCP）的优化最好，但是可能会造成某些严重依赖 JS 的页面区域或功能错乱，所以建议新手选 Delay selected。

## FlyingPress Fonts（字体）设置

字体设置：

- **Optimize Google Fonts（优化谷歌字体）**：开启，把使用的谷歌字体下载到服务器，不直接请求谷歌字体，避免影响速度。
- **Display fallback fonts（显示备用字体）**：开启，字体没加载好的时候用备用字体显示文本内容。
- **Preload fonts（预加载字体）**：可以在框里填写字体的 URL 预先加载，比如预先加载网页首屏就要用到的字体文件。

## FlyingPress Images（图片）设置

图片设置：

- **Lazy load Images（延迟加载图片）**：开启，按需求加载屏幕外的图片，当页面滚动到对应图片的时候再加载。
  - **Exclude above-fold images（排除顶部的图片）**：选 2 或 3 就行（主要是排除首屏的 logo 和 banner），如果排除延迟加载的图片多了，速度优化也就不明显了。
  - **Exclude images（排除图片）**：如果你还想让某些图片排除延迟加载，就在这个框里填写对应图片的 URL。
- **Add responsive images（添加响应式图片）**：开启，根据页面调整合适的图片大小。
- **Add missing width and height（添加缺失的宽高）**：开启，如果图片加载失败，也在图片区域添加一个对应图片宽高的块，避免影响页面布局。
- **Host Gravatar images locally（本地托管 Gravatar 图像）**：按需开启，Gravatar 是全球通用头像平台，如果你网站有登录功能，可以开启。
- **Preload critical images（预加载关键图片）**：开启，预加载首屏渲染要用的图片。

## FlyingPress iFrames（内嵌）设置

内嵌设置：

- **Lazy load iFrames（延迟加载内嵌）**：开启，比如延迟加载你通过 iFrames 框添加在网站上的 Youtube 视频。
- **Use placeholder images for YouTube videos（使用占位图替代 YouTube 视频）**：开启，占位图就是视频封面其替代视频的位置，能更快加载页面，在点击的时候才加载视频。

## FlyingPress CDN 设置

CDN 设置：

在开启 CDN 前，需要到 FlyingPress 自家的 FlyingCDN（点击 Get FlyingCDN）网站注册账号并添加站点后，会生成对应的秘钥，勾选后填写秘钥即可。

## FlyingPress Bloat（冗余）设置

冗余设置，该设置核心就是禁用 WordPress 自带的一些功能，从而提升网站速度，按找截图设置即可：

- **Remove Google Fonts（删除谷歌字体）**：开启，会将谷歌字体替换成用户设备上的字体。
- **Disable XML-RPC（禁用 XML-RPC）**：开启，XML-RPC 是一种远程调用协议，可以使用工具远程发布 WP 文章，一般都用不上，还有被攻击的风险。
- **Disable RSS feed（禁用 RSS 订阅）**：开启，关于 RSS Feed，Well 有专门写过一篇文章，感兴趣的伙伴可以去看：什么是 WordPress RSS Feed？
- **Disable Block editor CSS（禁用块编辑器 CSS）**：开启，块编辑器也就是 WP 自带的古腾堡编辑器，会在前端加载 wp-block-library.css ，禁用这个 CSS 有助于提升速度。
- **Disable oEmbeds（禁用 oEmbeds）**：开启，oEmbeds 是 WP 的嵌入功能，可以直接在文章中粘贴外部链接（如 YouTube 视频、Twitter 帖子），然后 WordPress 自动将其转换为嵌入内容。但是 oEmbeds 会加载额外的 JS（wp-embed.min.js），影响页面性能。
- **Disable Emojis（禁用 Emojis 表情符号）**：开启，WordPress 默认会加载 Emoji 表情符号（wp-emoji-release.min.js），禁用能提高性能。
- **Disable WP Cron（禁用 WP 内置的 Cron 任务）**：开启，WP-Cron 是 WP 用来处理定时任务的。
- **Disable jQuery Migrate（禁用 JQuery Migrate）**：开启，避免加载更多的 JS 文件。
- **Disable Dashicons（禁用 Dashicons）**：开启，Dashicons 是 WP 内置的图标字体，主要用在后台界面，默认情况下会在前端加载 Dashicons。
- **Control Post Revisions（控制文章修订）**：开启，WP 默认会保存文章更新的历史版本（修订版本），控制了修订版本的数量（比如 10 次）能减少数据存储。
- **Control Heartbeat API（心跳控制）**：开启，仅在编辑文章的时候开启，60 秒一次。Heartbeat API 是 WP 的一个后台功能，它会定期执行一些自动任务，如自动保存文章草稿、检查插件更新、与 WordPress 后台保持连接等。虽然心跳功能非常有用，但它也会消耗服务器资源，如果你的服务器配置不高的情况下，可能会影响性能。所以要控制心跳的频率。

## FlyingPress Database（数据库）设置

数据库设置主要是定期清理存储在数据里垃圾或者是不必要的数据，按照截图设置：

- **Automatic cleaning（自动清理频率）**：Weekly，每周自动清理。
- **Post Revisions（文章修订）**：选择性开启，如果不需要回到之前的文章版本，可以开启。
- **Post Auto Drafts（文章自动草稿）**：选择性开启，像 Well 写文章时习惯性的手动保存，自动草稿就没太大用，可以清理。
- **Trashed Posts（已删除的文章）**：开启。
- **Spam Comments（垃圾评论）**：也可以不开启，自己审核是否为垃圾评论，是垃圾评论就移动到回收站。
- **Trashed Comments（已删除的评论）**：开启。
- **Expired Transients（过期的临时缓存）**：开启。
- **All Transients（所有临时缓存）**开启。
- **Optimize Tables（优化数据库表）**开启。

## FlyingPress Advanced（高级）设置

高级设置在一般情况下是不去动它的，它的主要是对缓存控制（排除缓存、包含缓存），如果你是静态网站就完全不用调整，如果是商城站，FlyingPress 已经默认排除了 WooCommerce 的动态页面。简单了解一下高级设置内的功能即可：

- Exclude Pages from Caching（从缓存中排除页面）
- Ignore Query Parameters（忽略查询参数）
- Include Query Parameters（包括查询参数）
- Bypass Cookies（绕过 Cookie 缓存）
- Host Third Party CSS and JS Locally（将第三方 CSS 和 JS 文件本地化）
- Lazy Render Elements（懒加载元素）

## 总结

以上就是全部的 FlyingPress 使用教程，点击查看 Well 建站其他 WordPress 网站优化教程。

## 下载链接

| 插件名称 | 下载链接 | 版本 | 备注 |
|---------|----------|------|------|
| FlyingPress | [FlyingPress 官网](https://flyingpress.com/) | 最新版 | 性能优化插件 |
