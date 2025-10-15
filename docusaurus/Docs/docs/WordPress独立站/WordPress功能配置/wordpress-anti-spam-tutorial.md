---
title: "3种WordPress防止垃圾留言方法：Elementor Form表单阻止机器人提交询盘"
description: "本教程分享3种WordPress防止垃圾留言的方法，阻止网站上的表单被机器人提交垃圾询盘，适用于Elementor Form及其他表单插件。"
tags: [WordPress, 防垃圾, 表单, Elementor]
slug: /wordpress-anti-spam-tutorial
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<sup>更新时间: Oct 15, 2025</sup>

![3种WordPress防止垃圾留言方法：Elementor Form表单防护阻止机器人提交询盘](https://website-custom.com/wp-content/uploads/2025/05/captcha.webp)

## 概述

在[使用WordPress搭建网站](https://website-custom.com/)时，很多朋友会为网站添加表单，目的是接收用户的留言或询盘，尤其是B2B网站，表单直接关乎着转化。

然而，随着网站上线运行，大量的垃圾留言和机器人提交的表单越来越多，了解到一些网站甚至一夜之间收到上千封垃圾留言。

这不仅影响正常筛选精准客户留言，还可能导致服务器资源浪费、邮箱被封等严重后果。

本篇教程，将为你系统讲解如何保护网站上的表单（以[Elementor表单](https://website-custom.com/ele-pro-form/)为例）免受垃圾提交，包括使用**隐藏字段诱捕（Honeypot）**、**Cloudflare Turnstile**、**Google reCAPTCHA**的方法。

## 添加蜜罐字段（Honeypot）阻止机器人提交

### 什么是Honeypot？

蜜罐技术（Honeypot）是一种常见的反垃圾保护方法，通过在表单中添加一个对真实用户不可见的"隐藏字段"，来识别并拦截机器人提交。

而且Elementor Form本身就有蜜罐字段，是最简单的防止垃圾表单提交的方法。

蜜罐字段的逻辑也非常简单：因为这是一个隐藏字段，正常用户看不见这个字段，所以就不会填写它；但多数机器人会遍历并填写所有字段，因此一旦检测到这个隐藏字段被填写，系统就可以判断为"垃圾提交"，会自动拒绝提交。

它的优点是简单易操作、对真实用户隐藏、兼容绝大多数表单，缺点是容易被一些机器人识别并绕过。

### 如何为Elementor Form添加蜜罐字段？

<Tabs>
<TabItem value="elementor" label="Elementor设置" default>
1. 打开表单页面的Elementor编辑界面，选中Elementor Form元素
2. 点击新增项目
3. 添加一个类型为"Honeypot"的字段
4. 保存即可
</TabItem>
<TabItem value="result" label="效果">
这样就为表单添加了蜜罐字段，在一定程度上防止一些机器人提交，属于最简单的防垃圾提交方法。
</TabItem>
</Tabs>

## 使用Cloudflare Turnstile防止垃圾询盘

### 关于Cloudflare Turnstile

[Cloudflare Turnstile](https://www.cloudflare.com/zh-cn/application-services/products/turnstile/)是由Cloudflare推出的一种新型人机验证工具，旨在取代传统的CAPTCHA（如 Google reCAPTCHA），提供更流畅的用户体验和更强的隐私保护。

Turnstile判断机器人的原理主要有3种：
1. 行为分析：分析用户的鼠标移动、点击等行为模式
2. 浏览器指纹：收集浏览器和设备的特征信息，如用户代理、屏幕分辨率等
3. 异常检测：识别异常请求模式，检测自动化攻击的特征

所以Turnstile更加智能，防护效果更好，而且它免费，可以集成在WordPress上，和大多数表单插件都兼容。

### 获取Turnstile的site key和secret key

想要使用Turnstile，需要先[注册Cloudflare](https://dash.cloudflare.com/sign-up?pt=f)，可以参考[免费Cloudflare CDN教程](https://website-custom.com/cloudflare-cdn-tutorial/)前半部分的CF注册教程。

注册完CF账户后，在CF也表盘中打开Turnstile菜单：

1. 点击该界面左上角的"添加小组件"按钮
2. 依次填写：
   - 小组件名称：给这个小组件取名，名称自定义
   - 添加主机名：添加最多10个域名，可以是添加到CF里的域或者是手动输入其他域
   - 交互方式：根据需求选择，选择"托管"的方式，CF会自动识别是否产生交互
3. 最后点击创建小组件
4. 创建后会生成对应的秘钥，分别复制并保存

### WordPress安装Simple Cloudflare Turnstile插件

来到WP后台 – 插件 – 添加插件，搜索[Simple Cloudflare Turnstile](https://wordpress.org/plugins/simple-cloudflare-turnstile/)，安装后启用该插件。

### 配置Simple Cloudflare Turnstile

1. 进入该插件的设置界面
2. 填写之前保存的Cloudflare Turnstile秘钥
3. 往下滑动页面，找到Elementor 表单，为Elementor Form开启验证
4. 然后保存更改

这时候再去前台查看Elementor表单页面，就会可能看到CF的人机验证。

## Elementor表单集成Google reCAPTCHA

### 获取reCAPTCHA密钥

访问[Google reCAPTCHA](https://www.google.com/recaptcha/admin/create)官方网站。

创建reCAPTCHA：
1. 名称自定义
2. reCAPTCHA类型：**v2**：用户需勾选"我不是机器人"或完成图像验证；**v3**：在后台运行，无需用户交互（**不管是V2还是V3，只需要创建其中一个就可以了**）
3. 填写你网站域名
4. 提交

之后会生成对应的reCAPTCHA秘钥，复制并保存。

### 在 Elementor中配置reCAPTCHA密钥

<Tabs>
<TabItem value="config" label="配置步骤" default>
1. WP后台 – Elementor – 设置 – 集成
2. 找到reCAPTCHA板块，填写对应的秘钥：
   - 如果你创建的是V3，就将秘钥填写进reCAPTCHA V3区域
   - 如果你创建的是V2，就将秘钥填写进reCAPTCHA区域
3. 打开表单页面的编辑界面
4. 为表单元素添加一个类型为"reCAPTCHA V3"的字段（如果你创建的是V2，就选择"reCAPTCHA"类型）
5. 保存该页面
</TabItem>
<TabItem value="result" label="效果">
V3没有这个人机验证框，属于无交互验证，V2才有验证框。
</TabItem>
</Tabs>

## 下载资源

| 资源名称 | 下载链接 | 说明 |
|---------|----------|------|
| Simple Cloudflare Turnstile | [WordPress.org](https://wordpress.org/plugins/simple-cloudflare-turnstile/) | Cloudflare Turnstile WordPress插件 |
| Google reCAPTCHA | [Google reCAPTCHA](https://www.google.com/recaptcha/admin/create) | Google人机验证服务 |
