---
title: "Elementor V4 解读 | 测评，3.29.0 V4 Alpha版本重大更新"
description: "Elementor 3.29.0版本引入了下一代V4编辑器的Alpha版本，本文详细解读V4的升级点和性能优化。"
tags: [Elementor, WordPress, 编辑器, 更新]
slug: /elementor-v4-tutorial
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<sup>更新时间: Oct 15, 2025</sup>

![Elementor V4 解读 | 测评，3.29.0 V4 Alpha版本重大更新](https://website-custom.com/wp-content/uploads/2025/05/Elementor-Editor-V4.webp)

## 概述

Elementor在2025年5月19日发布了3.29.0版本，该版本引入了下一代V4编辑器的Alpha版本，性能得到了提升，本篇文章带你了解ELementor V4的升级点。

## Elementor 3.29.0 的核心升级点

### 性能优化

<Tabs>
<TabItem value="performance" label="性能优化" default>
首先，根据升级点里的字面意思理解，V4是一个基于CSS的模块化编辑器、更简洁的容器元素、干净的HTML，旨在提升性能。

这也是之前很多用户吐槽Elementor的点，之前的Elementor编辑器生成的代码层级太多，嵌套严重。

所以在之后V4正式版解决掉代码臃肿问题，Elementor会进一步封神（当然，如果还能解决JS之间的严重依赖关系就更好了）。
</TabItem>
<TabItem value="newelements" label="新元素">
专门为V4新增了一些元素：**DIV 容器**，**Flexbox 容器**，**标题（Heading）**，**段落（Paragraph）**，**图像（Image）**，**按钮（Button）**，**SVG 图像（SVG）**。
</TabItem>
</Tabs>

### 新的类系统概念

**类（Classes）系统**，实现了引入可重用的样式类，比如创建了一个名为"all-div"的类，给这个类赋予了样式后，别的元素使用这个类，可以直接应用到该类的样式。

### Cloud Templates（Pro 版）

之后可以把你自己创建的模板保存在云端，实现跨站点使用。

## Elementor V4 Alpha 测评

:::caution 注意
建议在**测试站点开启V4**，因为目前还处于Alpha测试版本，官方不建议在生产环境中启用V4。
:::

### 启用Elementor V4

在开启Editor V4前，需要先将你的Elementor升级到3.29.0版本。

位置：WP后台 – Elementor – 设置 – Editor V4

1. 点击"Activate the new experience"
2. 在弹窗里勾选"I've read and understood."
3. 点击"激活"

### 使用 Editor V4 新元素

之后在使用Elementor编辑页面的时候，就能看到新增加的元素：

**新元素包括：**
- 新的Flexbox容器、标题元素
- 新的DIV容器、段落元素
- 新的图片元素
- 新的SVG元素
- 新的按钮元素

针对新元素的代码结构，总结如下：

真的很简洁！都是直接生成对应的一级HTML标签，没有任何多余的代码嵌套，简直就是古腾堡版本的Elementor。

## 下载资源

| 资源名称 | 下载链接 | 说明 |
|---------|----------|------|
| Elementor插件 | [WordPress.org](https://wordpress.org/plugins/elementor/) | 免费的WordPress页面构建插件 |
| Elementor Pro | [Elementor官网](https://elementor.com/) | Elementor专业版 |
