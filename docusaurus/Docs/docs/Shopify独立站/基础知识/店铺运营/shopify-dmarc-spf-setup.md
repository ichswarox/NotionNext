---
title: "第 197 期 解决 Shopify 店铺域名 DMARC 设置问题以及如何添加 SPF 记录"
description: "自 2024 年 2 月 1 日起，Gmail 和 Yahoo 将要求您对域名进行身份验证并拥有 DMARC 记录，以便通过品牌邮箱向客户发送电子邮件。如果您未采取任何操作，则您的发件人邮箱将被重写为 store@shopifyemail.com 以满足最低要求。"
keywords: ["Shopify", "DMARC", "SPF", "域名设置", "邮箱验证"]
slug: /shopify-dmarc-spf-setup
---

# 第 197 期 解决 Shopify 店铺域名 DMARC 设置问题以及如何添加 SPF 记录

---

大部分店铺都在春节前收到了 Shopify 的通知邮件

![Shopify DMARC Req](https://shopify2006.com/content/images/2024/02/Shopify-DMARC-Req.webp)

💡

自 2024 年 2 月 1 日起，Gmail 和 Yahoo 将要求您对域名进行身份验证并拥有 DMARC 记录，以便通过品牌邮箱向客户发送电子邮件。如果您未采取任何操作，则您的发件人邮箱将被重写为 store@shopifyemail.com 以满足最低要求，这样您便可以继续给客户发送电子邮件而不会出现中断。

## 后台设置路径

![Shopify 域名邮箱设置](https://shopify2006.com/content/images/2024/02/Shopify-------.webp)

如果没有添加 DMARC 解析记录，发送测试邮件，发件邮箱的域名会是 shopifyemail.com 而不是店铺自己的域名：

![Shopify Notification test email](https://shopify2006.com/content/images/2024/02/Shopify-Notification-test-email-1.webp)

## 如何添加记录

登录域名管理后台，例如 Cloudflare, [NameSilo](https://www.bilibili.com/video/BV1eY411p7xT/?p=4&share_source=copy_web), GoDaddy 等。域名在哪里买的就到哪个平台的后台进行设置。

添加一条 TXT 记录，名称设置为：

```text
_dmarc
```

复制

记录值设置为：

```text
v=DMARC1; p=none;
```

复制

NameSilo 设置方法参考视频演示，另附 Cloudflare 设置示意图：

![Cloudflare 设置 DMARC 域名解析](https://shopify2006.com/content/images/2024/02/Cloudflare----DMARC-----.webp)

## 检查是否生效

添加 TXT 解析记录之后，可以访问 [这个工具网站](https://dmarcian.com/dmarc-inspector/) 输入域名之后检查是否生效。

也可以先使用 [这个工具](https://www.ssleye.com/ssltool/dns_check.html)，确保域名解析已经生效，再使用上一个工具检测。

查询格式：

```txt
_dmarc.你的域名
```

复制

![dmarc 域名解析查询](https://shopify2006.com/content/images/2024/02/dmarc-------.webp)

另一个工具直接输入域名查询即可：

![Shopify DMARC 检测](https://shopify2006.com/content/images/2024/02/Shopify-DMARC---.webp)

另外：

```txt
rua=mailto:xxx@xxx.com
```

复制

是可选的，感兴趣可以自行了解。

[官方参考文档](https://help.shopify.com/zh-CN/manual/intro-to-shopify/initial-setup/setup-your-email)

---

## 关于发件退信问题

顺便提示一下有些同学反馈的腾讯企业邮箱发件到 Gmail 邮箱无法成功送达被退信的问题如何解决：

需要在域名管理后台添加两条 TXT 记录，域名在哪里买的，就到哪个网站上设置。

### 一、添加 SPF 记录

主机记录（hostname）为：@

记录值（text）为：

```text
v=spf1 include:spf.mail.qq.com ~all
```

复制

### 二、添加 DMARC 记录

主机记录 (hostname) 为：

```text
_dmarc
```

复制

记录值 (text) 为：

```text
v=DMARC1; p=none; rua=mailto:mailauth-reports@qq.com
```

复制

参考图：

![SPF 和 DMARC 解析设置截图](https://shopify2006.com/content/images/2024/05/SPF---DMARC-------.webp)

等待解析生效之后重试即可：

![腾讯企业邮箱发件到 Gmail](https://shopify2006.com/content/images/2024/05/----------Gmail.webp)

如何查询域名解析是否生效？

[访问这个工具](https://www.ssleye.com/ssltool/dns_check.html)，输入域名，选择 TXT，点击按钮查询。等个半小时到一小时，基本就会生效了。

---