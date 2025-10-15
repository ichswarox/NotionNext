---
title: "WordPress网站防复制教程：禁用右键、文本选中和F12"
description: "学习如何通过插件或代码方式防止WordPress网站内容被复制，保护原创内容不被窃取。"
tags: [wordpress security, content protection, copy prevention, website security]
slug: /disable-content-copy
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<div class="time-stamp">Last updated: Oct 15 2025</div>

![WordPress防复制](https://website-custom.com/wp-content/uploads/2025/05/documents.webp)

## 功能列表

:::note 重要提示
虽然这些方法可以提高内容被复制的门槛，但无法完全阻止技术熟练的用户获取网站内容。这些措施主要防止普通用户轻易复制内容。
:::

一个网站，它的外观很重要，但是网站的内容更重要，内容是网站的核心、是灵魂。

尤其是做原创内容的网站，一定不愿意自己花心思创作的内容被别人轻易窃取。

本篇文章，分享如何提高自己网站内容被复制的门槛。

为什么说提高被复制的门槛，而不是说杜绝被复制呢？

因为真正心怀不轨的人是无法绝对防范的，他可以通过爬虫获取你网站的内容。

但本篇文章依然有用，提高了内容被窃取的门槛，防止了大部分人轻易复制你网站内容。

## WordPress网站防复制方法

从操作电脑的角度来讲，在网页上复制内容的方式主要有以下几种：

1. 用鼠标右键复制：先选中文本，鼠标右键里有复制选项。或者右键后打开网页源代码。
2. 快捷键复制：也要选中文本，然后点击键盘上的CTRL+C。
3. 拖拽复制：选中文本后，鼠标点击左键不松手，直接拖到文本编辑器里。

知道了常规复制网页内容的方式后，就可以针对这几种方法做限制，比如在网站上禁止选中、禁止右键、禁止拖拽等。

以下两种方法，分别是通过使用插件或使用自定义代码的方式防止网站内容被复制，选择其中一种方法即可。

## 使用插件防止WP网站内容被复制

使用插件可以快速实现禁用网页上的右键、快捷键、拖拽功能。以下是推荐的防复制插件：

<Tabs>
<TabItem value="securecopy" label="Secure Copy Content Protection" default>
[Secure Copy Content Protection](https://wordpress.org/plugins/secure-copy-content-protection/)

![Secure Copy Content Protection](data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20width='564'%20height='340'%20viewBox='0%200%20564%20340'%3E%3C/svg%3E)

Secure Copy Content Protection插件的功能更多，同时也有更丰富的设置选项，相对来说细节更多。

安装后使用默认配置就能有效防止页面内容被复制，同时还可以自定义提醒的文字、指定哪些页面开启防复制功能。
</TabItem>
<TabItem value="wpcopyprotector" label="WP Content Copy Protection">
[WP Content Copy Protection & No Right Click](https://wordpress.org/plugins/wp-content-copy-protector/)

![WP Content Copy Protection & No Right Click](data:image.svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20width='565'%20height='343'%20viewBox='0%200%20565%20343'%3E%3C/svg%3E)

这款插件专门用于防止内容被复制，具有简单易用的配置选项。
</TabItem>
</Tabs>

## 使用代码防止WordPress网站被复制内容

代码分为两个层面来进行复制防护，分别是CSS、JS层面。

将下方2段代码通过Elementor的Custom Code功能添加进网站即可。

![使用自定义代码防止网站内容被复制，通过ELementor - Custom Code添加代码](data:image.svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20width='800'%20height='774'%20viewBox='0%200%20800%20774'%3E%3C/svg%3E)

<Tabs>
<TabItem value="css" label="CSS代码" default>
```css
/* 禁用文本选中和长按菜单 */
body {
 -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none; 
  -webkit-touch-callout: none; 
}

/* 禁用图片拖拽 */
img {
  pointer-events: none;
  -webkit-user-drag: none;
}
```
</TabItem>
<TabItem value="js" label="JavaScript代码">
```javascript
// 禁用右键菜单
document.addEventListener('contextmenu', function(e) {
   e.preventDefault();
});

 // 禁用文本选中
 document.addEventListener('selectstart', function(e) {
   e.preventDefault();
 });

 // 禁用复制、剪切、粘贴
 ['copy', 'cut', 'paste'].forEach(function(evt) {
   document.addEventListener(evt, function(e) {
     e.preventDefault();
   });
 });

 // 禁用拖拽
 document.addEventListener('dragstart', function(e) {
   e.preventDefault();
 });

 // 禁用 F12、Ctrl+Shift+I、Ctrl+Shift+C、Ctrl+Shift+J、Ctrl+U
 document.addEventListener('keydown', function(e) {
   if (
     e.keyCode === 123 ||
     (e.ctrlKey && e.shiftKey && e.keyCode === 73) ||
     (e.ctrlKey && e.shiftKey && e.keyCode === 67) ||
     (e.ctrlKey && e.shiftKey && e.keyCode === 74) ||
     (e.ctrlKey && e.keyCode === 85)
   ) {
     e.preventDefault();
   }
 });
```
</TabItem>
</Tabs>

## 下载资源

| 资源类型 | 下载链接 | 说明 |
|---------|----------|------|
| Secure Copy Content Protection | [WordPress插件页面](https://wordpress.org/plugins/secure-copy-content-protection/) | 防复制插件，功能丰富 |
| WP Content Copy Protection | [WordPress插件页面](https://wordpress.org/plugins/wp-content-copy-protector/) | 简单易用的防复制插件 |
| WordPress建站资源 | [WordPress建站资源下载](https://website-custom.com/resources/) | 丰富的WordPress插件和主题资源 |
