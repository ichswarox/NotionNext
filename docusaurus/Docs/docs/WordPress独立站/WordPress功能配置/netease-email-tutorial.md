---
title: "网易企业邮箱注册及SMTP设置教程"
description: "跟随本篇教程免费注册网易企业邮箱及SMTP设置，提高WordPress网站专业度和发件成功率，操作简单，小白也能学会！"
tags: [邮箱, 网易企业邮箱, SMTP, WordPress, 邮件设置]
slug: /netease-email-tutorial
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

  <p>网易企业邮箱是免费的域名邮箱解决方案，配置SMTP后可以提高WordPress网站邮件发送成功率</p>

## Last updated: Oct 15 2025

![免费注册网易企业邮箱及SMTP设置](https://website-custom.com/wp-content/uploads/2024/12/email-2.webp)

## 免费的企业邮箱

目前Well用过的免费企业邮箱，也就是域名邮箱，有2家，一家是腾讯企业邮箱，感兴趣的小伙伴可以去看[腾讯企业邮箱注册教程](https://website-custom.com/work-weixin-email/)，另一家就是本篇文章要讲的网易企业邮箱。

-   这两个企业邮箱的免费版本在使用上都差不多，需要吐槽的是腾讯企业邮箱可以创建邮箱别名，但是网易企业邮箱别名我找好久没找到。

免费的企业邮箱针对于个人用户或者小型企业是绝对够用的，如果你的公司人数较多，或者需要的支持更多，可以选择升级付费版。

通过企业邮箱发送邮件或者是配置SMTP代发件给客户，可以彰显公司的专业性，但如果你还没准备好注册企业邮箱，可以使[用国内手机号注册谷歌邮箱Gmail](https://website-custom.com/register-gmail/)和[配置谷歌邮箱SMTP](https://website-custom.com/gmail-smtp-settings/)。

## 免费注册网易企业邮箱

首先打开[网易企业邮箱注册页面](https://ym.163.com/)。

![网易企业邮箱注册页面](https://website-custom.com/wp-content/uploads/2024/12/1-14.webp)

<Tabs>
<TabItem value="register" label="注册步骤">
1. 填写手机号并输入验证码，点击下一步。
2. 填写企业资料，这里网易会先给你生成一个默认freeqiye.com结尾的域名邮箱，先不用管，填写注册即可。
3. 注册完成后就跳转到了邮箱界面。
</TabItem>
<TabItem value="requirements" label="注册要求">
- 需要有效的手机号码
- 需要提供企业相关信息
- 需要验证域名所有权
</TabItem>
</Tabs>

## 验证邮箱域名、添加域名解析

![网易企业邮箱界面，点击进入邮箱管理后台](https://list.ucards.store/d/img/img1015-CGdq.webp)

![网易企业邮箱界面，点击进入邮箱管理后台](https://website-custom.com/wp-content/uploads/2024/12/4-13.webp)

点击网易企业邮箱页面上方的"管理后台"，跳转到邮箱管理界面：

![验证邮箱域名](https://website-custom.com/wp-content/uploads/2024/12/5-12.webp)

![img1015-ScTE.webp](https://list.ucards.store/d/img/img1015-ScTE.webp)

点击"组织机构管理 – 域名管理"，然后点击我们添加的域名。

![根据提示配置域名的MX和TXT解析记录](https://website-custom.com/wp-content/uploads/2024/12/6-10.webp)

![img1015-nZJG.webp](https://list.ucards.store/d/img/img1015-nZJG.webp)

根据页面的提示，到你的域名管理处添加对应的域名所有权解析记录和邮箱配置解析记录。

每个人的解析记录是不一样的，按照你自己页面里提供的解析记录添加域名解析即可。

![设置域名生效时间](data:image.svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20width='464'%20height='380'%20viewBox='0%200%20464%20380'%3E%3C/svg%3E "- Well建站 | 唯二建站")

![设置域名生效时间](https://website-custom.com/wp-content/uploads/2024/12/7-8.webp)

解析并验证通过后，点击设置该页面下方的域名生效时间，一般都选当天生效。


![邮箱后缀完成变更](https://website-custom.com/wp-content/uploads/2024/12/8-5.webp)

设置完生效时间后，需要重新登录你的邮箱，再次登录企业邮箱后就会看到邮箱后缀变成了自己的域名。

## WordPress配置网易企业邮箱SMTP

![img1015-SurD.webp](https://list.ucards.store/d/img/img1015-SurD.webp)
在邮箱界面，点击上方的设置 – 账号与安全 – 客户端设置。

![开启客户端登录：imap/smtp，生成客户端授权码](data:image.svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20width='966'%20height='743'%20viewBox='0%200%20966%20743'%3E%3C/svg%3E "- Well建站 | 唯二建站")

![开启客户端登录：imap/smtp，生成客户端授权码](https://website-custom.com/wp-content/uploads/2024/12/10-1.webp)

<Tabs>
<TabItem value="setup" label="客户端设置">
在客户端设置界面：

1.  开启客户端登录协议：IMAP/SMTP.
2. 开启客户端授权密码。
3.  生成授权密码（到期时间设置久一点），这个密码要保存好，只会显示一次。
</TabItem>
<TabItem value="smtp" label="SMTP配置">
SMTP配置参数：

- SMTP主机: smtphz.qiye.163.com
- SSL端口: 465
- 需要使用身份验证
- 需要使用SSL加密
</TabItem>
</Tabs>

在WordPress后台安装任意一款SMTP插件，Well这里使用的是[Solid SMTP](https://wordpress.org/plugins/wp-smtp/)：

![在SMTP插件输入邮箱](data:image.svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20width='716'%20height='238'%20viewBox='0%200%20716%20238'%3E%3C/svg%3E "- Well建站 | 唯二建站")

![在SMTP插件输入邮箱](https://website-custom.com/wp-content/uploads/2024/12/12-1.webp)

email填写你上面已经配置了客户端协议的网易企业邮箱，name随意填。

![在SMTP插件输入邮箱服务器地址和端口](data:image.svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20width='609'%20height='391'%20viewBox='0%200%20609%20391'%3E%3C/svg%3E "- Well建站 | 唯二建站")

![在SMTP插件输入邮箱服务器地址和端口](https://website-custom.com/wp-content/uploads/2024/12/13-1.webp)

![检索网易企业邮箱SMTP服务器地址和端口](data:image.svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20width='533'%20height='312'%20viewBox='0%200%20533%20312'%3E%3C/svg%3E "- Well建站 | 唯二建站")

![检索网易企业邮箱SMTP服务器地址和端口](https://website-custom.com/wp-content/uploads/2024/12/11-1.webp)

SMTP Host可以根据[网易企业邮箱SMTP主机查询](https://qiye.163.com/help/client-profile.html)填写。

主机地址：smtphz.qiye.163.com，SSL端口465.

![在SMTP插件输入邮箱和客户端授权码](data:image.svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20width='523'%20height='341'%20viewBox='0%200%20523%20341'%3E%3C/svg%3E "- Well建站 | 唯二建站")

![在SMTP插件输入邮箱和客户端授权码](https://website-custom.com/wp-content/uploads/2024/12/14-1.webp)

最后填写上邮箱和生成的客户端密码（我们上面生成的密码）。

![测试SMTP发信](data:image.svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20width='623'%20height='460'%20viewBox='0%200%20623%20460'%3E%3C/svg%3E "- Well建站 | 唯二建站")

![测试SMTP发信](https://website-custom.com/wp-content/uploads/2024/12/15-1.webp)

配置好SMTP后，可以测试一下发件是否能成功。

有了SMTP邮箱就可以用来发送订阅提醒邮件，或者[发送询盘确认邮件](https://website-custom.com/elementor-form-email/)。

## 总结

以上就是免费注册网易域名邮箱及SMTP设置的全部教程内容。

推荐你查看更多[独立站工具教程](https://website-custom.com/tools-plugins-tutorial/)。

## 下载链接

| 工具/资源 | 下载地址 | 类型 | 说明 |
|---------|----------|------|------|
| 网易企业邮箱 | [https://ym.163.com/](https://ym.163.com/) | 邮箱服务 | 免费企业邮箱服务 |
| Solid SMTP插件 | [https://wordpress.org/plugins/wp-smtp/](https://wordpress.org/plugins/wp-smtp/) | WordPress插件 | SMTP邮件发送插件 |
| 腾讯企业邮箱 | [https://work.weixin.qq.com/](https://work.weixin.qq.com/) | 邮箱服务 | 企业邮箱服务 |
