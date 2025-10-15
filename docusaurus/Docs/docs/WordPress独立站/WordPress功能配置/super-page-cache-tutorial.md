---
title: "Super Page Cache 教程：WordPress 必装的 Cloudflare 第三方插件"
description: "本教程详细介绍如何使用 Super Page Cache 插件连接 Cloudflare CDN，实现等同于 APO 的缓存效果，提升网站速度。"
tags: [wordpress, cache, cloudflare, cdn, optimization]
slug: /super-page-cache-tutorial
---

# Super Page Cache 教程：WordPress 必装的 Cloudflare 第三方插件

:::caution
Last updated: Oct 15, 2025
:::

![Super Page Cache教程，WordPress必装的Cloudflare第三方插件，效果等同APO](https://website-custom.com/wp-content/uploads/2025/03/cdn.webp)

## 文章概览

Super Page Cache 插件是 WordPress 里 Cloudflare 的第三方插件，通过本篇 Super Page Cache 教程，可以免费实现效果等同于 CF APO 的 CDN 缓存效果。

## Super Page Cache 教程

如果你打算或者正在使用 Cloudflare CDN（Well 有写过免费 Cloudflare CDN 教程，可以学习教程前半部分先注册 CF 账号并添加域），那么 Super Page Cache 插件（以前叫 WP Cloudflare Page Cache）是你必不可少要安装的插件。

这是一个缓存插件，这个插件核心功能就是连接你的 Cloudflare 账户，生成特有的 Cloudflare CDN 缓存规则，还能在 WordPress 后台清除和控制 Cloudflare CDN 缓存。当然，这个插件本身也有页面缓存功能。

通过使用 Super Page Cache 连接 Cloudflare 账户来控制 CDN 缓存，效果等同于 Cloudflare APO（Automatic Platform Optimization），CF APO 需要 5 美金每月，但是 Super Page Cache 插件免费。

具体的 Super Page Cache 插件使用方法如下：

## 安装并设置 Super Page Cache 插件

### 安装
1. 在 WP 后台插件界面搜索并安装 Super Page Cache 插件。
2. 安装后进入到 Super Page Cache 插件设置界面，点击 Enable Page Caching Now。

### 配置
1. 这样就默认开启了该插件的页面缓存功能，如果你使用别的缓存插件控制网站页面缓存，也可以关闭 Super Page Cache 的页面缓存功能。
2. 然后点击上方菜单"Cloudflare（CDN & Edge Caching）"，这是是要填写 Cloudflare 账户信息来连接 Cloudflare，所以需要先登录你的 Cloudflare 账户。

:::tip
如果你还没有注册 Cloudflare 账户，可以参考 Well 这篇 Cloudflare CDN 教程的前半部分，先注册 CF 账户并添加域。
:::

## Super Page Cache 连接 Cloudflare 账户

登录 Cloudflare 账户后，点击右上角账户按钮，选择"配置文件"：

1. 在配置文件页面左侧菜单中点击"API 令牌"。
2. 点击查看 Global API Key，复制 API Key。

回到 Super Page Cache 插件的设置界面：

在 Cloudflare CDN 链接选项的下方填写你的 CF 账户邮箱和 API Key，然后保存设置。

然后跳转到 Cache 选项：

1. 选择 Cloudflare 账户下绑定的域，点击 Continue 链接该域名。
2. 显示连接成功并开启 Cloudflare CDN 缓存。

这时候如果你回到 Cloudflare 账户，点击对应域进入管理界面，可以在 缓存 – Cache Rules 里看到 Super Page Cache 为你 Cloudflare 账户下对应域生成的缓存规则：

:::info
如果要使用 Super Page Cache 插件和它生成的 CF 缓存规则，就关闭你自己设置的其他 Cloudflare 缓存规则和页面规则。
:::

## Super Page Cache 清理缓存

在你更改/发布文章或页面后，Super Page Cache 默认会清除该文章和该文章相关联页面的缓存。

但如果你网站进行了大范围样式更新或者是模板修改，但因为缓存清理不彻底，可能在前端并不会生效，可以通过手动来清理 Super Page Cache 的页面缓存和 Cloudflare CDN 缓存：

两种方式：

- 鼠标移动到 WP 后台顶部导航栏的绿色云朵，再点击 Purge whole cache 就可以清除 Super Page Cache 的页面缓存和 Cloudflare CDN 缓存。
- 在 Super Page Cache 插件设置界面的上方也有 Purge Cache 清除缓存按钮（还能点击右侧的 Test Cache 测试当前网站的缓存是否生效）。

## 总结

以上就是 Super Page Cache 教程的全部内容，通过该插件更好的缓存页面和使用 Cloudflare CDN，加速你的网站打开速度，优化 SEO。

## 下载链接

| 插件名称 | 下载链接 | 版本 | 备注 |
|---------|----------|------|------|
| Super Page Cache | [WordPress 官网下载](https://wordpress.org/plugins/wp-cloudflare-page-cache/) | 最新版 | 免费插件 |
