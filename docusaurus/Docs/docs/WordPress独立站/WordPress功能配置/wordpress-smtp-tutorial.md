---
title: "WordPress SMTP邮件设置教程：腾讯企业邮箱配置指南"
description: "详细教程介绍WordPress如何设置SMTP发送邮件，提高邮件送达率，包括腾讯企业邮箱、Google邮箱等配置方法。"
tags: [wordpress, smtp, 邮件设置, 腾讯企业邮箱, 邮件送达率]
slug: /wordpress-smtp-tutorial
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<!-- 此文件由Cline自动翻译并优化 - Last updated: Oct 15 2025 -->

# WordPress SMTP邮件设置教程：腾讯企业邮箱配置指南

:::info
**快速概览**
- 了解SMTP的作用和优势
- 学习WordPress SMTP插件安装
- 掌握腾讯企业邮箱配置方法
:::

## 目录
- [WordPress SMTP邮件设置教程：腾讯企业邮箱配置指南](#wordpress-smtp邮件设置教程腾讯企业邮箱配置指南)
  - [目录](#目录)
  - [SMTP是什么？有什么用？](#smtp是什么有什么用)
  - [安装WordPress SMTP插件](#安装wordpress-smtp插件)
  - [WordPress设置SMTP](#wordpress设置smtp)
    - [腾讯企业邮箱配置](#腾讯企业邮箱配置)
    - [测试和故障排除](#测试和故障排除)
  - [在Elementor Form里使用SMTP邮箱](#在elementor-form里使用smtp邮箱)
  - [配置最佳实践](#配置最佳实践)
  - [下载资源](#下载资源)

## SMTP是什么？有什么用？

[SMTP](https://en.wikipedia.org/wiki/Simple_Mail_Transfer_Protocol)（Simple Mail Transfer Protocol）是一种用于发送电子邮件的协议，属于应用层协议。它是互联网中最常用的邮件传输协议之一，主要用于电子邮件的发送和转发。

<Tabs>
<TabItem value="comparison" label="SMTP vs 默认方式" default>
**默认方式（PHP的mail()函数）：**
- 容易被标记为垃圾邮件
- 送达率低
- 可靠性差

**SMTP方式：**
- 提高邮件送达率和可靠性
- 避免被识别为垃圾邮件
- 支持安全连接SSL
- 自定义发件邮箱
</TabItem>
<TabItem value="benefits" label="优势">
- 提高邮件送达率
- 增强安全性
- 专业度提升
- 避免垃圾邮件标记
</TabItem>
</Tabs>

很多服务器默认的邮件发送方式是通过[PHP的mail()函数](https://www.php.net/manual/en/function.mail.php)，这种发送邮件的方式很容易被标记为垃圾邮件。

而SMTP可以提高我们网站给用户发送邮件时的送达率和可靠性，也能很大程度避免被识别为垃圾邮件，可以使用安全连接SSL，避免邮件被篡改和泄露。

还能自定义发件邮箱，比如使用企业邮箱（域名邮箱）来发件，更能体现专业度、增加信任。

网站中的发件功能可以用于：

- **注册确认邮件**，当新用户注册时，发送欢迎邮件或确认邮件
- **密码重置邮件**，用户忘记密码时，通过邮件发送密码重置链接
- **评论通知**，当用户评论或他人回复他们的评论时，系统可以自动发送通知邮件
- **订阅通知**，如果用户订阅了新闻邮件或博客更新，系统可以定期向其发送更新邮件
- **表单通知**，客户发送询盘后，自动给客户发送一封询盘提交成功的邮件通知

## 安装WordPress SMTP插件

<Tabs>
<TabItem value="plugins" label="推荐插件" default>
以下是常用的SMTP插件：
- [WP Mail SMTP](https://wordpress.org/plugins/wp-mail-smtp/)
- [Post SMTP](https://wordpress.org/plugins/post-smtp/)
- [Easy WP SMTP](https://wordpress.org/plugins/easy-wp-smtp/)
- [Solid Mail](https://wordpress.org/plugins/wp-smtp/)
</TabItem>
<TabItem value="features" label="功能特点">
- 邮箱信息配置
- 邮箱服务器设置
- 发件记录功能
- 专业度提升
</TabItem>
</Tabs>

众多SMTP插件其实都大同小异，它们的主要功能就是填写邮箱的一些信息、邮箱服务器地址和端口，免费版就可以配置发件，无非就是有些SMTP插件还带发件记录功能。

你可以随便选择其中一个SMTP插件在WP后台安装就好。

## WordPress设置SMTP

安装并启用SMTP插件后，打开插件设置，本教程以WP Mail SMTP插件为例（插件的引导设置可以跳过）：

<Tabs>
<TabItem value="setup" label="基本设置" default>
1. 填写发件邮箱
2. 设置发件人名称
3. 选择邮件程序
4. 配置SMTP信息
</TabItem>
<TabItem value="configuration" label="配置流程">
- 填写发件邮箱和发件人名称
- 选择其他SMTP程序
- 配置主机、端口和认证信息
- 保存设置并测试
</TabItem>
</Tabs>

![填写SMTP发件邮箱](https://website-custom.com/wp-content/uploads/2024/12/3-12.webp)

![选择SMTP程序](https://website-custom.com/wp-content/uploads/2024/12/4-11.webp)

本篇教程以[配置腾讯企业邮箱](https://website-custom.com/work-weixin-email/)为例，所以邮件程序选择其他SMTP，**你也可以配置Google或者其他邮箱的SMTP**。

![填写SMTP账号和密码](https://website-custom.com/wp-content/uploads/2024/12/5-10.webp)

### 腾讯企业邮箱配置

<Tabs>
<TabItem value="settings" label="基本配置" default>
**SMTP设置信息：**
- **SMTP主机**：smtp.exmail.qq.com
- **加密方式**：SSL
- **端口**：465
- **SMTP用户名**：邮箱地址
- **SMTP密码**：客户端专用密码
</TabItem>
<TabItem value="password" label="密码设置">
- 登录腾讯企业邮箱
- 设置 – 邮件绑定
- 生成新的客户端专用密码
- 使用专用密码进行配置
</TabItem>
</Tabs>

腾讯企业邮箱默认的SMTP主机是：smtp.exmail.qq.com，SSL，端口465。

SMTP用户名就是邮箱。

SMTP密码，需要[登录腾讯企业邮箱](https://exmail.qq.com/login)，在设置 – 邮件绑定中生成新的客户端专用密码：

![在腾讯企业邮箱生成客户端密码](https://website-custom.com/wp-content/uploads/2024/12/1-12.webp)

### 测试和故障排除

<Tabs>
<TabItem value="testing" label="测试发件" default>
1. 保存设置后，点击WP Mail SMTP的工具界面
2. 测试发件功能是否正常
3. 检查邮件是否成功发送
</TabItem>
<TabItem value="troubleshooting" label="故障排除">
- 检查SMTP填写的信息是否有误
- 使用Linux命令测试服务器和SMTP的通信
- 确认端口是否开放
- 联系服务器厂商开放SMTP端口
</TabItem>
</Tabs>

最后保存设置即可。

再点开WP Mail SMTP的工具界面，测试发件功能是否正常：

![测试SMTP插件设置是否生效，测试发件](https://website-custom.com/wp-content/uploads/2024/12/2-11.webp)

如果发送测试邮件失败，先检查SMTP填写的信息是否有误。

如果信息无误，就使用下方Linux命令测试服务器和SMTP方的通信：

`openssl s_client -connect smtp.exmail.qq.com:465`

![测试服务器连接SMTP](https://website-custom.com/wp-content/uploads/2024/12/7-7.webp)

测试服务器是否能和腾讯企业邮箱服务器通讯，如果可以会返回 `CONNECTED(0000003)` 类似的字符串。

如果无法建立通讯，先尝试在服务器端设置开放465端口后再做测试。

还有一种情况是服务器厂商直接禁用了所有SMTP端口，需要写工单给他们开放指定的端口。

## 在Elementor Form里使用SMTP邮箱

<Tabs>
<TabItem value="integration" label="集成设置" default>
- 经过前面的配置和调试，网站上的SMTP就配置好了
- Elementor表单的Email设置里的From Email就可以使用SMTP里设置的邮箱
- 确保邮件发送功能正常工作
</TabItem>
<TabItem value="configuration" label="配置说明">
- 使用SMTP设置的邮箱作为发件人
- 确保From Email字段正确配置
- 测试表单邮件发送功能
</TabItem>
</Tabs>

经过前面的配置和调试，网站上的SMTP就配置好了，之后网站其他插件或者[Elementor 表单](https://website-custom.com/ele-pro-form/)的[Email设置](https://website-custom.com/elementor-form-email/)里的From Email就可以使用SMTP里设置的邮箱。

![Elementor Form设置](https://website-custom.com/wp-content/uploads/2024/12/email-1.webp)

:::tip
**配置建议：**
- 选择可靠的SMTP插件
- 正确配置邮箱认证信息
- 定期测试邮件发送功能
- 监控邮件送达率
:::

## 配置最佳实践

<Tabs>
<TabItem value="best-practices" label="最佳实践" default>
- 使用企业邮箱提高可信度
- 配置SSL加密连接
- 定期测试邮件功能
- 监控邮件送达率
</TabItem>
<TabItem value="security" label="安全建议">
- 使用专用的SMTP密码
- 定期更换认证信息
- 监控异常邮件活动
- 保护邮箱账户安全
</TabItem>
</Tabs>

## 下载资源

| 资源类型 | 下载链接 | 说明 |
|---------|---------|------|
| SMTP插件 | [WP Mail SMTP](https://wordpress.org/plugins/wp-mail-smtp/) | WordPress SMTP邮件发送插件 |
| 邮件服务 | [腾讯企业邮箱](https://work.weixin.qq.com/mail/) | 企业邮箱服务 |
| 配置工具 | [Post SMTP](https://wordpress.org/plugins/post-smtp/) | SMTP配置工具 |
