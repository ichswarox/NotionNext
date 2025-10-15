---
title: "使用Elementor制作联系页面教程"
description: "学习如何使用Elementor轻松创建专业的网站联系页面，包含地图、联系信息和表单的完整教程"
tags: [contact-page, elementor, wordpress, tutorial]
slug: /contact-us-page-elementor-tutorial
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

_Last updated: Sep 4 2025_

![Elementor制作联系页面](https://website-custom.com/wp-content/uploads/2024/11/contact-us.webp)

# 使用Elementor制作联系页面，网站Contact Us Page

## 文章概览

:::tip 联系页面的重要性
网站联系页面是提供用户与网站管理员、公司或服务团队沟通的重要途径，能拿到客户的留言和联系信息是外贸交易中最重要的步骤之一。一个设计优秀的联系页面能提供清晰的联系信息，可以增强访客对网站或企业的信任。
:::

## 关于网站联系页面（Contact US页）

联系页面的内容建议包含：**联系表单、联系邮箱和电话、联系地址、公司地图、社媒链接**等。

接下来跟随本篇教程使用Elementor制作网站联系页面，可以在本教程基础上添加你认为的其他重要信息和页面布局。

## Elementor制作联系页面

### 创建新页面

1. 进入WordPress后台 → 页面 → 新页面
2. 填写新页面的标题，保存草稿后，点击"使用Elementor编辑"

![填写页面标题，保存草稿，使用Elementor编辑](https://website-custom.com/wp-content/uploads/2024/11/2-22.webp)

### 构建地图和联系信息板块

<Tabs>
<TabItem value="step1" label="添加容器结构">
  进入Elementor编辑页面后，添加两个容器并排的结构。
</TabItem>
<TabItem value="step2" label="添加地图元素">
  搜索map并添加谷歌地图元素到左侧小容器，填写位置信息并调整地图元素高度。
</TabItem>
<TabItem value="step3" label="添加联系信息">
  添加多个标题和文本元素到右侧小容器内容，编辑标题和文本，填写自己公司的联系信息。
</TabItem>
</Tabs>

![搜索map元素](https://website-custom.com/wp-content/uploads/2024/11/4-19.webp)

![填写地图位置，地图元素高度](https://website-custom.com/wp-content/uploads/2024/11/5-19.webp)

![添加多个标题和文本元素](https://website-custom.com/wp-content/uploads/2024/11/6-18.webp)

![编辑地址信息](https://website-custom.com/wp-content/uploads/2024/11/7-16.webp)

#### 样式调整

- 给最上方的"Talk To Us"标题设置下边距30px
- 为右侧小容器设置内容居中
- 给大容器设置列间距30px

![调整大标题下边距](https://website-custom.com/wp-content/uploads/2024/11/8-16.webp)

![调整右侧小容器上下居中](https://website-custom.com/wp-content/uploads/2024/11/9-15.webp)

![调整大容器列间距30](https://website-custom.com/wp-content/uploads/2024/11/10-14.webp)

当前的页面效果如下图所示：

![效果展示](https://website-custom.com/wp-content/uploads/2024/11/11-14.webp)

> 地图元素的文字会根据访客的浏览器语言自动改变。

在大容器上方再添加一个大容器，并添加标题元素。标题内容"Contact Us"，设置标题样式。

### 制作表单板块

在联系信息板块下方添加一个大容器，然后添加Form元素。

<Tabs>
<TabItem value="name" label="Name字段设置">
  - Placeholder：Name *
  - Required：开启
  - Column Width：50%
</TabItem>
<TabItem value="email" label="Email字段设置">
  - Placeholder：Email *
  - Required：开启
  - Column Width：50%
</TabItem>
<TabItem value="message" label="Message字段设置">
  - Placeholder：Message *
  - Required：开启
  - Rows：3
</TabItem>
</Tabs>

![添加Form元素](https://website-custom.com/wp-content/uploads/2024/11/13-11.webp)

![设置name字段](https://website-custom.com/wp-content/uploads/2024/11/14-10.webp)

![设置email字段](https://website-custom.com/wp-content/uploads/2024/11/15-10.webp)

![设置message字段](https://website-custom.com/wp-content/uploads/2024/11/16-10.webp)

#### 添加防垃圾字段

新增一个字段，Type选择Honeypot。Honeypot可以拦截一些机器人填写的垃圾表单，但是不会在前台显示。

![添加honeypot字段](https://website-custom.com/wp-content/uploads/2024/11/17-10.webp)

关闭Form元素的Label。

表单部分目前的样子：

![Form元素目前的样子](https://website-custom.com/wp-content/uploads/2024/11/19-8.webp)

#### 最终样式设置

- 打开Form元素的高级设置
- 宽度：自定义，80%
- Align Self：居中

再在Form元素上方添加标题和文本元素。

![设置form元素宽度和居中](https://website-custom.com/wp-content/uploads/2024/11/20-7.webp)

## 最终效果展示

![联系我们页面最终效果展示](https://website-custom.com/wp-content/uploads/2024/11/19-8.webp)

至此，"Contact Us"页面制作完成。

如果在预览页面时出现异常，可以参考WordPress页面显示错乱解决办法。

## 下载资源

| 资源名称 | 版本 | 下载链接 |
|---------|------|----------|
| Elementor Pro | 最新版 | [Elementor Pro GPL 破解版插件免费下载](https://website-custom.com/resources/elementor-pro-download/) |
