---
title: "WordPress添加GA代码的3种方式，使用Google Analytics统计网站流量"
description: "为WordPress添加GA代码，跟踪分析网站流量，更好的了解用户行为、网站跳出率等，好针对性的做出营销规划和SEO优化。"
tags: [wordpress, google-analytics, ga, seo, tutorial]
slug: /wordpress-ga-tutorial
---

<!-- 文件顶部更新时间 -->
<div class="text-right text-sm text-gray-500 mb-4">Last updated: Oct 15 2025</div>

![WordPress添加GA代码配图](https://www.gfxcamp.com/wp-content/uploads/2024/11/代码.jpg)

## 为什么要给WordPress添加GA代码

将Google Analytics (GA) 代码添加到网站上是为了收集和分析网站流量数据，帮助站长或者运营了解访客行为、优化用户体验、衡量营销效果并做出数据驱动和网站优化的决策。

![数据分析配图](https://website-custom.com/wp-content/uploads/2024/11/ic_迎新数据分析.jpg)

### 网站添加GA代码的好处：

1. **跟踪网站流量和用户行为**：Google Analytics 可以帮助你了解访客的来源、访问时长、页面浏览量、跳出率等重要数据。这些数据可以让你掌握网站的流量趋势，分析访客在网站上的互动方式，从而了解用户的需求和行为。

2. **评估营销效果**：使用 GA，你可以通过设置**事件**来监控特定的营销活动或广告效果，更好的衡量广告投入产出比。

3. **理解受众群体**：Google Analytics 提供了关于网站访客的详细人口统计数据和兴趣分类，可以帮助你更好地了解受众。通过这些数据，你可以为不同用户群体量身定制内容或营销活动，从而提高网站的转化率。

4. **设置和优化转化事件**：用GA你可以设置自定义的**关键事件**（例如：完成购买、提交表单、注册账户等），这些目标能够帮助你量化和衡量访客在网站上的关键行为。

5. **SEO优化**：Google Analytics 还能够帮助你优化网站SEO，理解哪些关键词（通过集成GSC）和页面（跳出率）最有效，从而了解网站SEO优化的方向。

## 获取GA代码

如果你还没有Google Analytics账号，请先[注册Google Analytics账号](https://website-custom.com/sign-in-ga/)。

首先，进入到[GA操作页面](https://analytics.google.com/)。

![GA操作界面 - 管理 - 数据流](https://website-custom.com/wp-content/uploads/2024/11/GA操作界面-管理-数据流.png)

点击左下角的管理按钮 – 数据收集和修改 – 数据流。

![GA数据流界面](https://website-custom.com/wp-content/uploads/2024/11/GA数据流界面.png)

选择对应数据流。

![GA配置代码设置](https://website-custom.com/wp-content/uploads/2024/11/GA配置代码设置.png)

![GA添加代码说明](https://website-custom.com/wp-content/uploads/2024/11/GA添加代码说明.png)

点击配置代码设置 – 代码添加说明。

![GA代码](https://website-custom.com/wp-content/uploads/2024/11/GA代码.png)

点击上方的"手动添加"就能看到GA代码，点击右上角图标复制代码。

## 通过Custom Code添加GA代码

最简单的方式就是通过Elementor Pro的Custom Code功能添加GA代码。

本次教程需要用到[Elementor Pro](https://elementor.com/pro/)插件，在Well建站注册用户可免费下载Elementor Pro，下载链接：

[Elementor Pro GPL 破解版插件免费下载](https://website-custom.com/resources/elementor-pro-download/)

<Tabs groupId="ga-installation">
<TabItem value="custom-code" label="通过Custom Code添加" default>

![Elementor Pro Custom Code 功能](https://website-custom.com/wp-content/uploads/2024/11/Elementor-Pro-Custom-Code-功能.png)

WP后台 – Elementor – Custom Code。

![添加Custom Code](https://website-custom.com/wp-content/uploads/2024/11/添加Custom-Code.png)

点击左上角"ADD NEW"按钮。

![粘贴GA代码](https://website-custom.com/wp-content/uploads/2024/11/粘贴GA代码.png)

1.  自定义名称
2.  Location:<head>
3. 粘贴GA代码
4.  发布代码

![发布到全站](https://website-custom.com/wp-content/uploads/2024/11/发布到全站.png)

应用到整个网站，保存。

到GA代码处检测一下是否成功添加代码：

![检测代码是否成功添加](https://website-custom.com/wp-content/uploads/2024/11/检测代码是否成功添加.png)

在GA代码下方点击网站测试按钮，如果显示"√"图标就代表成功添加GA代码。

</TabItem>

<TabItem value="theme-editor" label="通过主题文件编辑器添加">

![主题文件编辑器](https://website-custom.com/wp-content/uploads/2024/11/主题文件编辑器.png)

WP后台 – 外观 – 主题文件编辑器。

![header.php文件](https://website-custom.com/wp-content/uploads/2024/11/header.php文件.png)

选中主题文件编辑器页面右侧的header.php文件。

![粘贴GA代码](https://website-custom.com/wp-content/uploads/2024/11/粘贴GA代码-1.png)

粘贴GA代码在<head>标签之间。

记得点击下方保存文件。

然后检测代码是否生效。

</TabItem>

<TabItem value="plugin" label="使用插件添加">

Site Kit by Google给网站集成了如 Google Analytics、Google Search Console 和 Google AdSense等谷歌服务，提供一站式的管理和分析界面，让站长可以直接在 WordPress 仪表盘中查看网站的流量数据。

![安装插件](https://website-custom.com/wp-content/uploads/2024/11/安装插件.png)

在WP后台安装Site Kit by Google插件。

![链接google](https://website-custom.com/wp-content/uploads/2024/11/链接google.png)

打开Site Kit by Google插件，通过Google登录。

![选择谷歌账号](https://website-custom.com/wp-content/uploads/2024/11/选择谷歌账号.png)

选着谷歌账号登录。

![全选权限](https://website-custom.com/wp-content/uploads/2024/11/全选权限.png)

全选，下一步。

按图片步骤操作：

![Have Google verify site ownership](https://website-custom.com/wp-content/uploads/2024/11/Have-Google-verify-site-ownership.png)

![Turn on metrics in your dashboard: Allow](https://website-custom.com/wp-content/uploads/2024/11/Turn-on-metrics-in-your-dashboard-Allow.png)

![Set up Search Console](https://website-custom.com/wp-content/uploads/2024/11/Set-up-Search-Console.png)

![Set up Google Analytics](https://website-custom.com/wp-content/uploads/2024/11/Set-up-Google-Analytics.png)

![完场设置](https://website-custom.com/wp-content/uploads/2024/11/完场设置.png)

自动跳转到插件界面，会显示出该谷歌账号下的GA账户和对应的数据流，选择好数据流后点击"完成设置"。

![完成设置](https://website-custom.com/wp-content/uploads/2024/11/完成设置.png)

最后完成设置，以后可以在插件界面看到部分网站数据。

</TabItem>
</Tabs>

:::tip 提示
至此，网站添加GA代码完成。
:::

## 总结

你可能还会对[Google Search Console使用教程](https://website-custom.com/gsc-tutorial/)感兴趣。

## 下载资源

| 资源名称 | 下载链接 |
|---------|----------|
| Google Analytics代码模板 | [下载GA代码](https://example.com/ga-code-template.txt) |
| WordPress GA插件包 | [下载插件包](https://example.com/wordpress-ga-plugins.zip) |
