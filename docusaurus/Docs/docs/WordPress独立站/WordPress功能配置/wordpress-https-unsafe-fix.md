---
title: "配置了SSL仍显示不安全"
description: "本篇教程将带你解决WordPress配置了全站HTTPS后，网站依然显示“不安全”的问题，通过使用Easy HTTPS (SSL) Redirection插件，轻松实现全站HTTPS。"
keywords: ["WordPress", "HTTPS", "SSL", "不安全", "Easy HTTPS Redirection"]
slug: /wordpress-https-unsafe-fix
---

# WordPress配置了全站HTTPS依然显示“不安全”？一招搞定！

:::tip[问题背景]
你是否遇到了这样的问题：明明已经在服务器上为你的WordPress网站配置了SSL证书，实现了HTTPS访问，但浏览器地址栏旁边依然显示“不安全”的提示？这通常是由于网站中存在混合内容（Mixed Content）导致的，即在HTTPS页面上加载了HTTP资源（如图片、脚本或样式表）。
:::

## 一、解决方案：使用插件强制HTTPS

解决混合内容最简单直接的方法就是使用插件来强制全站所有链接都走HTTPS。这里我们推荐使用 **Easy HTTPS (SSL) Redirection** 插件。

### 1. 下载并安装插件

首先，在你的WordPress后台，进入“插件” -> “安装插件”，搜索 "Easy HTTPS (SSL) Redirection"，然后安装并启用它。

![下载插件Easy HTTPS(SSL)Redirection](https://list.ucards.store/d/img/easy-https-redirection-bs.webp)
`图示：在WordPress插件市场搜索并安装Easy HTTPS (SSL) Redirection`

### 2. 配置插件

插件启用后，进入 “设置” -> “HTTPS Redirection”，按照下图进行配置。

- **Enable automatic redirection to the HTTPS:** 勾选此项，开启自动跳转。
- **Apply HTTPS redirection on:** 选择 "The whole domain"，即对全站生效。

![按照图片配置](https://list.ucards.store/d/img/easy-https-redirection-xl.webp)
`图示：Easy HTTPS (SSL) Redirection 插件配置页面`

### 3. 验证结果

配置完成后，清除浏览器缓存，重新访问你的网站。此时，你应该能看到地址栏显示出安全锁标志，"不安全"的提示已经消失。

![解决HTTPS错误](https://list.ucards.store/d/img/https-error-ih.webp)
`图示：配置成功后，浏览器显示安全连接`

---

## 二、常见问题

- **❓ 问题 1：为什么配置了SSL证书还会出现混合内容？**
  > - 答：这通常是因为你在文章或主题中硬编码了一些HTTP链接的资源。比如，你手动插入了一张 `http://...` 开头的图片。当网站通过HTTPS加载时，这个HTTP资源就会引发混合内容警告。

- **❓ 问题 2：除了用插件，还有其他方法吗？**
  > - 答：有。更彻底的方法是进入数据库，将所有内容中的 `http://你的域名` 批量替换为 `https://你的域名`。但这需要你熟悉数据库操作，有一定风险，对于新手来说，使用插件是最安全、最快捷的方式。
