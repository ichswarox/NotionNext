---
title: "宝塔面板如何禁止IP访问网站，杜绝恶意攻击"
description: "本篇文章讲述了宝塔面板如何禁止IP访问网站，可以有效保护服务器免受攻击，是站长必做的设置之一。"
tags: [宝塔面板, 网站安全, 服务器防护, IP访问控制]
slug: /bt-panel-block-ip-tutorial
---

# 宝塔面板如何禁止IP访问网站，杜绝恶意攻击

Last updated: Oct 15, 2025

![如何禁止IP访问网站](https://website-custom.com/wp-content/uploads/2024/11/ip-address.webp)

本篇文章讲述了宝塔面板如何禁止IP访问网站，可以有效保护服务器免受攻击，是站长必做的设置之一。

## 被使用IP访问网站

最近遇到了这样的情况：

后台404检测并记录几百条 https://147.*.*.12/** 类型的请求。

一开始还不在意。

但是随着连续的几天，每天都有上百条的IP访问记录。

不淡定了，这摆明是恶意攻击，想通过这种方式获取到网站重要文件内容。

因为使用IP访问网站的内容，是可以绕过[CDN](https://en.wikipedia.org/wiki/Content_delivery_network)的。

缺少了CDN的防护，服务器就会变得很危险。

## 如何禁止IP访问网站

:::tip
有两种方法可以阻止IP访问网站，下面分别介绍。
:::

### 添加默认站点

于是，就开始研究宝塔面板，发现宝塔是有"默认站点"设置的。

目前这个服务器只放了建站这一个网站。

所以如果通过IP访问，就会默认访问到website-custom.com网站的内容。

于是就添加一个空站点，站点域名也是随便填写的：

![添加一个空白站点，随便填写一个域名](https://website-custom.com/wp-content/uploads/2024/11/1-15.webp)

<Tabs>
<TabItem value="add-site" label="添加空白站点" default>
![添加一个空白站点，随便填写一个域名](https://website-custom.com/wp-content/uploads/2024/11/1-15.webp)
</TabItem>
<TabItem value="set-default" label="设置默认站点">
![宝塔面板设置默认站点](https://website-custom.com/wp-content/uploads/2024/11/2-14.webp)
</TabItem>
<TabItem value="confirm" label="确认设置">
![设置空网站为默认站点](https://website-custom.com/wp-content/uploads/2024/11/2.1-1.webp)
</TabItem>
</Tabs>

然后在宝塔面板把"默认站点"设置为这个空网站。

如果再通过IP的方式访问服务器，就会提示404。

也算是解决了这个问题，但其实服务器还是被访问了，就很不爽。

### 修改配置文件

就开始研究另外一种方法。

先把"默认站点"改回website-custom.com，然后更改站点的配置文件。

因为以前学过PHP，知道可以在Nginx配置文件里增加判断语句（if）去阻止某些请求。

所以就到网上查找到了对应的if语句：

```nginx
if ($host ~* ^\d+\.\d+\.\d+\.\d+$) {
    return 444;
}
```

这个判断语句的意思是：如果请求是IP地址格式，返回 444（拒绝访问，也可以是403）。

<Tabs>
<TabItem value="nginx-config" label="修改Nginx配置文件" default>
![修改Nginx配置文件 - 拒绝ip访问网站](https://website-custom.com/wp-content/uploads/2024/11/拒绝ip访问.webp)
</TabItem>
</Tabs>

添加位置紧跟在server_name下面。

这样再通过IP访问的时候，就直接拒绝响应，也不会占用服务器资源。

## 相关资源

| 资源名称 | 下载链接 |
|---------|----------|
| 宝塔面板 | [宝塔面板官网](https://www.bt.cn/new/index.html) |
| CDN服务 | [CDN服务推荐](https://en.wikipedia.org/wiki/Content_delivery_network) |
| 服务器安全工具 | [服务器安全工具](https://website-custom.com/resources/) |
