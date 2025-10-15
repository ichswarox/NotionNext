---
title: "WordPress 谷歌邮箱 Gmail SMTP 设置教程：Google 邮箱 SMTP 发件"
description: "本教程详细介绍如何在 WordPress 中设置 Gmail SMTP，包括应用专用密码设置和 SMTP 插件配置。"
tags: [wordpress, gmail, smtp, email, configuration]
slug: /gmail-smtp-wordpress-tutorial
---

# WordPress 谷歌邮箱 Gmail SMTP 设置教程：Google 邮箱 SMTP 发件

:::caution
Last updated: Oct 15, 2025
:::

![WordPress谷歌邮箱Gmail SMTP设置教程，Google应用专用密码设置](https://website-custom.com/wp-content/uploads/2025/02/gmail-smtp.webp)

## 文章概览

Gmail 在外贸邮箱中的使用占比是非常高的，本篇文章就是分享如何进行谷歌邮箱 Gmail SMTP 设置，每一步都有操作截图。

:::tip
配置谷歌邮箱 Gmail SMTP 需要完成以下步骤：
:::

## Gmail SMTP 设置步骤

配置谷歌邮箱 Gmail SMTP 需要：

1. 生成 Google 应用专用密码
2. 在 WordPress 后台安装任意 SMTP 插件
3. 填写 Gmail SMTP 配置信息和应用专用密码
4. 测试 SMTP 发件

具体操作步骤如下：

## 生成 Google 账号应用专用密码

首先，打开谷歌浏览器（Google Chrome）。

1. 点击浏览器右上角的用户头像，再点击"管理您的 Google 账号"。
2. 点击左侧菜单"安全性"，查看自己的谷歌账号是不是已经开启了两步验证。

**如果谷歌账号还未开启两步验证**，需要先开启：
- 点击两步验证，选择截图中任意一种验证方式开启二步验证。

开启两步验证后，回到账户管理界面，顶部搜索框内搜索"应用专用密码"：
1. 点击进入应用专用密码设置。
2. 填写任意名称，创建应用专用密码。
3. 生成的应用专用密码只会显示一次，先复制保存好。

:::info
应用专用密码是一次性生成的 16 位密码，用于第三方应用访问您的 Google 账户。
:::

## WordPress 安装 SMTP 插件

后台插件界面搜索 SMTP，选择任意 SMTP 插件，安装并启用。

## 配置 SMTP 插件设置

### 基本设置
1. 填写发件人邮箱，也就是你的谷歌邮箱
2. 填写发件人名称，也就是发件时，收件人看到的你邮箱的昵称

### SMTP 设置
往下滚动屏幕：
1. 邮件程序选择"其他 SMTP"，不要选择"Google / Gmail"。
2. 填写谷歌邮箱的 SMTP 主机地址：smtp.gmail.com
3. 加密方式选择：SSL
4. SMTP 端口：465
5. SMTP 用户名：你的 Gmail 邮箱
6. SMTP 密码：应用专用密码

## 测试谷歌邮箱 SMTP 发件

点击 SMTP 插件的发件测试功能，填写收件人邮箱（自己的其他邮箱），然后发送测试邮件。

填写的邮箱会收到邮件，能收到该邮件就证明你的谷歌邮箱 SMTP 配置正确，可以使用 Gmail 进行 SMTP 发件了。

## 总结

以上就是谷歌邮箱 SMTP 设置的全部教程内容。

:::note
更多邮箱类教程请关注相关资源。
:::

## 下载链接

| 插件名称 | 下载链接 | 版本 | 备注 |
|---------|----------|------|------|
| WordPress | [WordPress 官网](https://wordpress.org/) | 最新版 | 内容管理系统 |
| Gmail | [Gmail 官网](https://mail.google.com/) | 在线服务 | 邮件服务 |
