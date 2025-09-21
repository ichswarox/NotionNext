---
title: "WordPress启用邮箱功能"
description: "本教程将指导你如何通过安装和配置WP Mail SMTP插件，在WordPress网站上启用稳定可靠的邮件发送功能，并以Outlook邮箱为例进行详细说明。"
keywords: ["WordPress", "WP Mail SMTP", "Outlook", "SMTP", "邮箱设置"]
slug: /wordpress-enable-email
---

# WordPress启用邮箱功能

:::tip[学完这篇，你就能：]
- ✅ 成功安装并激活WP Mail SMTP插件
- ✅ 使用Outlook邮箱配置SMTP服务
- ✅ 解决常见的登录和验证问题
- ✅ 确保你的WordPress网站能够稳定发送邮件
:::

## 一、安装并启用插件

要启用邮件发送功能，首先需要安装 `WP Mail SMTP` 插件。

1.  登录你的WordPress后台。
2.  前往 **插件 > 安装插件**。
3.  搜索 "WP Mail SMTP"。
4.  安装并启用该插件。启用后，会自动弹出设置向导。

## 二、配置SMTP服务 (以Outlook为例)

### 1. 选择邮件程序

在设置向导的第一步 `Choose Your SMTP Mailer` 中，选择 **Other SMTP**。

### 2. 填写邮箱信息

在第二步中，你需要填写你的Outlook邮箱信息。

| 设置项 | 内容 |
| :--- | :--- |
| **SMTP Host** | `smtp.office365.com` |
| **Encryption** | `TLS` |
| **SMTP Port** | `587` |
| **SMTP Username** | 你的微软账号 (邮箱地址) |
| **SMTP Password** | 你的微软邮箱密码 |

:::warning[💡 无法登录？]
如果遇到登录失败的问题，请检查以下两点：

1.  **关闭两步验证**：
    - 访问 [微软账户安全页面](https://account.microsoft.com/security)。
    - 点击 **高级安全选项 (Advanced security options)**。
    - 找到并关闭 **两步验证 (Two-step verification)**。

2.  **检查异常登录活动**：
    - 访问 [微软账户最近活动页面](https://account.live.com/activity)。
    - 查看是否有被阻止的登录尝试，如果有，请点击允许。
:::

### 3. 设置发件人信息

| 设置项 | 内容 |
| :--- | :--- |
| **From Name** | 你的网站名称 (这将作为邮件的发件人名) |
| **From Email** | 你的微软邮箱地址 |

## 三、完成设置

1.  **第三步**：点击 **Save and Continue**。
2.  **第四步**：点击 **Skip this step**。
3.  **第五步**：点击 **Skip this step**。

之后会弹出设置成功的提示，表示你已完成所有设置。

## 四、为什么推荐使用Outlook邮箱？

> 微软作为大厂，其服务稳定可靠，可以有效避免邮件发送失败、延迟或被拦截等问题。相比之下，如果你使用自己的域名邮箱，在没有经过专业配置的情况下，邮件很容易被Gmail、Outlook等主流邮箱服务商识别为垃圾邮件，从而影响邮件的送达率。
