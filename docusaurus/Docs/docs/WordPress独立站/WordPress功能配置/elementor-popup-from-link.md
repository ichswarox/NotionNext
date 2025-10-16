---
title: "3种通过链接调用Elementor Popup的方式"
description: "本文介绍了3种通过链接调用Elementor Popup的方式，适用于不同应用场景，帮助您提升用户体验和网站转化率。"
tags: [Elementor, Popup, WordPress]
slug: /elementor-popup-from-link
---

Last updated: Sep 21 2025

![链接调用Elementor Popup](https://website-custom.com/wp-content/uploads/2024/11/url.webp)

本文将为您介绍三种通过链接调用Elementor Popup的方法，您可以根据具体需求选择最合适的方式。

:::info 特性
- **提升用户体验**：无需跳转页面即可完成互动。
- **提高转化率**：便捷的交互方式更能吸引用户。
- **多种实现方式**：适用于不同的技术场景。
:::

---

### 方法一：通过Elementor动态标签调用

这是最常用也是最简单的方法。

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="step1" label="步骤1：选择动态标签" default>

在Elementor编辑器中，为按钮或链接元素选择“动态标签”功能。

![使用Elementor的动态标签调用Popup链接](https://website-custom.com/wp-content/uploads/2024/11/1-24.webp)

</TabItem>
<TabItem value="step2" label="步骤2：设置Popup模板">

在动态标签列表中选择“Popup”，然后指定您想要触发的Popup模板。

![设置Popup动态标签的模板](https://website-custom.com/wp-content/uploads/2024/11/1.2.webp)

</TabItem>
</Tabs>

---

### 方法二：通过为Popup设置选择器调用

这种方法需要您为Popup本身进行一些高级设置。

<Tabs>
<TabItem value="step1" label="步骤1：添加选择器" default>

1.  在Popup的编辑页面打开“页面设置”。
2.  进入“高级设置”。
3.  在“打开方式”中选择“通过选择器”，并为Popup添加一个CSS选择器，例如 `a[href="#popup666"]`。

![通过给Popup添加选择器的方式调用Popup](https://website-custom.com/wp-content/uploads/2024/11/2-26-1024x505.webp)

</TabItem>
<TabItem value="step2" label="步骤2：设置链接">

在需要调用该Popup的按钮或链接中，将链接地址设置为 `#popup666`。

![填写Popup对应了锚链接](https://website-custom.com/wp-content/uploads/2024/11/3-23.webp)

</TabItem>
</Tabs>

---

### 方法三：通过复制链接调用

您可以直接复制已经生效的Popup链接，在其他地方重复使用。

<Tabs>
<TabItem value="step1" label="步骤1：审查元素" default>

1.  在浏览器中打开包含已设置Popup链接的页面。
2.  按 `F12` 打开开发者工具，审查该按钮或锚文本的元素。

</TabItem>
<TabItem value="step2" label="步骤2：复制链接">

在开发者工具中找到该元素的锚链接，这个链接就是调用对应Popup的链接，复制即可。

![复制已经设置Popup链接的按钮的锚链接](https://website-custom.com/wp-content/uploads/2024/11/4-21-1024x57.webp)

</TabItem>
</Tabs>

:::tip 注意
无论使用哪种方式，请确保Popup的发布范围包含了调用它的页面。
:::

---

| 文件 | 下载链接 |
| :--- | :--- |
| Elementor Pro | [官方网站](https://elementor.com/) |
