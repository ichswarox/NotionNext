---
title: "Retina优化WordPress图片"
description: "学习如何使用Perfect Images插件优化你的WordPress网站图片，包括处理Retina高分屏图片、管理和禁用不需要的图片尺寸、以及通过CDN加速图片加载。"
tags: ["WordPress", "图片优化", "Perfect Images", "Retina", "CDN", "网站速度", "Meow Apps"]
slug: /wordpress-perfect-images-tutorial
---

# 使用Perfect Images插件优化WordPress图片：Retina、尺寸和CDN指南

## 教程

Perfect Images，以前叫 WP Retina 2x，不仅能自动处理 Retina（高分屏）图片，还能帮你控制图片尺寸、优化图片，并通过 CDN 加速。

# 优化你的图片尺寸

你知道 WordPress 里的“图片尺寸”是啥吗？这个概念很重要，如果你不了解，最好先看看这篇文章：[WordPress 图片尺寸](https://meowapps.com/wordpress-images-sizes/)。

你的 WordPress、主题和其他插件都会注册一些图片尺寸。你媒体库里的每张图片，都会生成所有这些尺寸。这些尺寸平时是看不到的。好在 Perfect Images 不仅能让你看到这些尺寸，还能让你选择开启或关闭它们。在设置里，你会看到这个界面。

![](https://meowapps.com/wp-content/uploads/Perfect-Images-Image-Sizes-1024x963.png)

我的例子里，我用的是 TwentyTwenty 主题的 WordPress 网站。这个主题加了 `post-thumbnail` 和 `twentytwenty-fullscreen` 这两个尺寸。WordPress 自己加了其他所有尺寸，确实有点多（太多了）。

## 这些尺寸有啥用？

如果你看了我前面提到的文章，可能已经知道了。简单说，你网站上每张图片都会用到所有这些尺寸（在 HTML 里）。访问者的浏览器会自动选最合适的尺寸来显示。你设置的尺寸越多，浏览器选择的余地就越大。浏览器会根据设备、网速等因素动态选择尺寸。

这些尺寸有啥坏处？尺寸越多，占用的主机空间就越大。不仅如此，相关的元数据会加到数据库里，让数据库变得又大又慢，处理图片的操作也会变慢，而且更费钱（比如你用图片优化器的时候）。

## 用哪些尺寸好？

`medium_large` 这个尺寸基本没啥用（它存在有它的道理，但有了 Perfect Images 的 Retina 支持，这个尺寸就更没用了），所以你应该关掉它。

其他的尺寸就看你的网站了。如果有些尺寸的宽高很接近，你可能不需要那么多。

我个人一开始会关掉差不多一半的尺寸。然后，如果我发现浏览器找不到足够大的尺寸（这种情况很容易发现，图片会变模糊），我再把它们打开就行。

## 重新生成缩略图/尺寸

如果你修改了尺寸，就需要重新生成相关的缩略图。要做到这点，你可以去 _Perfect Images Dashboard_，然后点 _Regenerate All Entries_。你也可以在每张图片上单独点 _Regenerate_。

![](https://meowapps.com/wp-content/uploads/Perfect-Images-Regenerate-Thumbnails-1024x313.png)

这样不仅会重新创建这些尺寸的缩略图，还会生成新的元数据。你可以直接在网站上看到效果，还可以在 HTML 里检查图片的 `srcset` 内容。如果你懂点技术，你可能会很喜欢这个功能。

## 修改图片尺寸的影响

基本上没啥负面影响，但你最好清一下缓存，再检查一下网站有没有 404 错误。有时候，一些老的页面编辑器（或者可能是你自己不小心）会直接用某个缩略图，所以最好检查一下。

另一个问题是，有些旧的缩略图文件可能还留在你的 `uploads` 目录里。手动删掉这些文件很麻烦，但你可以装个专业版的 [Media Cleaner](https://meowapps.com/plugin/media-cleaner/) 来自动帮你搞定（用 _Meticulous Check_ 方法，具体可以看 [Media Cleaner 教程](https://meowapps.com/media-cleaner-tutorial/)）。

# 配置 Retina 支持

在前面的截图里，你可能注意到每个尺寸旁边都有个 Retina 列。启用它之后，每次上传新图片或者生成图片尺寸（我们常说的“重新生成缩略图”）时，都会创建 Retina 图片。

## 它是怎么工作的？

简单说：**Retina 图片是根据你的原图创建的，会自动加到你图片的 HTML 里，然后访问者的浏览器会根据他们的设备、屏幕尺寸等因素自动、智能地选择使用。**

其实，这跟你 WordPress 里根据不同图片尺寸生成的缩略图原理一样。这是 WordPress 内置的响应式图片系统的一部分，你可以在[这里](https://meowapps.com/wordpress-images-sizes/#Responsive_Images)了解更多。不过，跟那些缩略图不一样，Retina 图片不会注册在元数据里。这样更好、更合理；它不会在任何地方显示为一个选项，也不会造成混乱，更不会拖慢你的 WordPress。

## 哪些尺寸需要 Retina？

默认情况下，插件会为小尺寸开启 Retina，而大尺寸则不开启。

![](https://meowapps.com/wp-content/uploads/Perfect-Images-Image-Sizes-1-1024x963.png)

原因是，你_可能_不需要为那些大尺寸开启 Retina。为啥？因为它们已经够大了，在大多数屏幕上看起来已经很清晰了。

记住：要让一张图片看起来像 Retina，它的大小至少得是它容器的两倍（或者根据屏幕类型更大）。比如，在你的网站上，如果图片的容器是 800x600px，那么里面的图片就需要是 1600x1200px。

## 创建 Retina 图片

如果你想让 Retina 图片自动创建，确保 **Build Automatically** 是勾选的。

Perfect Images Dashboard 会给你更多关于 Retina 图片状态的信息，还有一些创建/删除这些图片的方法。

![](https://meowapps.com/wp-content/uploads/Perfect-Images-Dashboard-for-Retina.png)

这里的大部分功能都一目了然。别怕用 **Build Retina for All Issues**（第一次用）和 **Delete Retina for All**（这个只删除 Retina 图片）。如果你好奇，可以去你的 `uploads` 目录看看发生了什么！

你的 Retina 图片状态会显示在 **Retina (Thumbnails)** 列里。每个方块代表一个特定的尺寸。对我来说，第一个是 _thumbnail_ (T)，第二个是 _medium_ (M)，第三个是 _large_ (L)。那么，每个尺寸都发生了什么呢？

-   **蓝色**。Retina 图片存在，没问题。
-   **黄色**。看起来一切正常，但还没有 Retina 图片，试试点 **Build** 按钮，几秒钟内应该就会变蓝。
-   **红色**。Retina 文件不存在，而且插件缺少创建它所需要的东西。把鼠标悬停在上面，你会看到更多信息，但通常这意味着你的原图尺寸不够大，无法创建这个特定的 Retina 图片。

如果某个图片是特殊情况，你可以 **Ignore** 它。这样它就不会再出现在问题列表里了。

## 全尺寸图片的 Retina

有时候，比如 logo 或者一些特定（通常是小）的图片，你不会用特定的图片尺寸，而是直接用你上传的原图——全尺寸。有些人也只用全尺寸，根本不用图片尺寸。当然，插件不能凭空变出漂亮的 Retina 图片。怎么办？

_如果你不是专业版用户，你需要自己上传 Retina 图片，可能要用 FTP，文件名要用 @2x 的约定。_

如果你是专业版用户，你可以用 Retina Dashboard 来上传全尺寸的 Retina 图片。你不需要给它命名或者调整大小，只需要确保图片足够大（否则 dashboard 会告诉你太小了，试试看），然后把它拖放到 **Full-Size Retina Upload** 区域。

另外，如果你想优化流程，每次只上传一个文件，你可以直接从媒体库上传你的照片作为全尺寸的 Retina 图片！普通的全尺寸图片会自动生成（就是 Retina 图片尺寸除以二）。

![](https://meowapps.com/wp-content/uploads/retina-upload-full-size-1024x705.png)

在插件的 **Basic settings** 里勾选 **Full-Size Retina**，让它对所有图片都生效（如果你只用全尺寸的话）。

## 提供 Retina 图片

默认的方法是 _Responsive Images_。这个方法不需要 WordPress 做任何额外处理，是目前最好的方法。这也意味着你用的所有插件（和主题）都依赖响应式图片系统；否则它就不起作用。

![](https://meowapps.com/wp-content/uploads/Perfect-Images-Retina-Method-1024x432.png)

如果你用的是老的（或者代码写得不好的）插件，你可能需要选个替代方法。**PictureFill** 通常是个不错的选择；它会分析你 WordPress 生成的 HTML，找到图片，然后用响应式图片系统替换它们。除此之外，它还会加一小段脚本来支持那些可能还不处理响应式图片的浏览器（如果你觉得没用，可以在选项里禁用这个脚本）。**Retina.js**，这个客户端方法，曾经非常流行。连苹果官网都用过！

注意，没有哪个方法是完美的。最理想的情况是，你用的所有插件和主题都基于响应式图片系统，这样就能完美工作。如果不是，你就需要找到最适合你网站的方法，然后用一些小技巧修复那些不工作的部分（或者就让它们那样）。

_你主题的图标、logo 或者图片通常不能由插件自动管理。你可能需要手动为它们上传 Retina 文件，或者写一些 CSS。靠谱的主题通常已经支持这个了。如果它们不支持，请联系主题作者。_

## Retina 提供方法

### PictureFill

Picturefill 方法会动态重写 HTML，使用新的 HTML 标签 **srcset**。由于浏览器还不完全支持这个标签，所以用 JS polyfill PictureFill 来加载图片。

为了 SEO，你可能还想勾选 **Keep IMG SRC** 和 **Use Lazysizes** 这两个选项。第一个选项会保留原始图片在 `src` 里，这样搜索引擎（和其他服务）就能看到它。但是，对于 Retina 设备，这意味着图片可能会被加载两次（先是普通图片，然后是 Retina 图片）。Lazysizes 会介入，只在访问者滚动到图片附近时才加载 Retina 文件。

### Responsive Images

这个方法只在 WordPress 4.4 及以上版本有效。从这个版本开始，WordPress 会自动为文章里的图片创建 `srcset`，插件会把 Retina 图片加进去。基本上，PictureFill（上面那个）做的解析就省了，这可以提高性能（但其实没那么大，因为我们反正都在用缓存）。只有当你的主题做得特别好时，才应该选这个选项，但说实话，我还没见过哪个主题和安装能只用这个选项就完美实现 100% Retina。

### Retina.js

Retina JS 方法是 100% 的 JS 解决方案。HTML 先加载普通图片，如果检测到是 Retina 设备，再加载 Retina 图片。图片会被加载两次，然后有多少张图片就会有多少次请求（用来检查 Retina 文件是否存在）。这对性能不是最好，但也不算太差。很多大网站，比如苹果，都用这个方法。

### IMG Rewrite

IMG Rewrite 方法会在检测到 Retina 设备时，动态重写图片的 `SRC` 标签。但是，由于 HTML 被重写了，这个方法跟缓存不太合得来。

如果你能跟你的主机服务商或者缓存插件的开发者商量，让他们根据 Retina cookie (devicePixelRatio) 来处理不同的缓存，那你就能得到最快的 Retina 解决方案！

### Retina-Images

这个方法也很巧妙，但你可能需要是个技术宅。插件会修改你的 `.htaccess` 文件来处理加载文件的请求。在访问者那边，所有图片看起来都一样，不会有 `@2x` 的后缀。但服务器发送的文件会根据设备不同而不同。这是个很棒的解决方案，但不是每个人都适用，因为它可能需要一些测试，有时还需要调试。而且它不支持 CDN。

# 追求完美图片

如果你喜欢优化网站，我相信你到这里已经很享受这个教程和 Perfect Images 了。下面还有几点。

## 图片阈值

从 WordPress 5.3 开始，大于 2560px 的图片会被自动调整大小，并加上 `_scaled` 后缀。这通常很烦人，因为 WordPress 保留了你上传的原文件，但哪儿也不用它（而且全尺寸也变了）。如果你在读这个教程，说明你对 WordPress 至少有点了解，所以 WordPress 这个功能不适合你。

![](https://meowapps.com/wp-content/uploads/Perfect-Images-Big-Image-Threshold-1024x360.png)

这个功能其实是为那些不太懂的用户准备的，防止他们不小心上传超大图片。启用这个选项，确保这个“功能”不会搞乱你的网站。

## 图片替换

我经常用更好的图片替换旧的，而且我总是在改进我的网站。如果你想轻松上传/替换照片，就启用这个选项。启用后，你可以通过 _Perfect Images Dashboard_ 来操作。这样可以确保你所有的缩略图、Retina 图片和相关的元数据都得到更新。如果你在用我们的 CDN 服务，它会自动使用新图片（耶，没有缓存问题！）。

## 懒加载

这个功能在 Perfect Images 里有，但你通常不再需要它了。从 WordPress 5.5 开始，懒加载是默认开启的，而且在所有现代浏览器上都有效。你也应该把你安装的那些做懒加载的插件删掉。

我们每个人都不同，我们的 WordPress 安装也一样 🙂 认为每个人都可以用同一种方法来提供 Retina 图片是错误的。我总是推荐用 PictureFill（它也是默认的），但这绝不是你唯一的选择。
