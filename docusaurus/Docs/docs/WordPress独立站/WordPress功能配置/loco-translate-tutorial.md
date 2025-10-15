---
title: "Loco Translate插件使用教程：翻译WordPress主题和插件文本内容"
description: "详细教程教你如何使用Loco Translate插件翻译WordPress主题和插件中的文本字符串，本地化你的WordPress网站。"
tags: [WordPress, 插件, 翻译, 本地化]
slug: /loco-translate-tutorial
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<sup>更新时间: Oct 15, 2025</sup>

![Loco Translate插件使用教程：翻译WordPress主题和插件文本内容](https://website-custom.com/wp-content/uploads/2025/05/translate.webp)

## 概述

本文将详细介绍如何使用 **Loco Translate** 插件翻译WordPress主题和插件中的文本字符串，帮助你本地化你的WordPress网站。

## 什么是Loco Translate？

### Loco Translate介绍

[**Loco Translate**](https://wordpress.org/plugins/loco-translate/)是一款专门用于**翻译WordPress主题和插件中的文本字符串**的插件。

用它可以在WordPress后台直接修改 `.po` 和 `.mo` 翻译文件，不需要懂代码。

### Loco Translate能做什么，不能做什么？

<details>
<summary>Loco Translate功能详解</summary>

**能做到的：**

- 翻译主题/插件中开发者写死的英文文本（比如按钮文字、系统提示等）
- 无需使用外部工具即可编辑 `.po/.mo` 文件
- 支持多语言翻译（翻译成中文、日文、法文等）
- 保留已翻译文本，更新插件或主题后可同步新字符串

**举例：**

- 把前台"Add to cart"按钮文字翻译为"加入购物车"，或者是其它你网站目标市场的语言，比如："カートに追加"、"In den Warenkorb legen"。
- 把"Your email address"改为"您的邮箱地址"。把后台WooCommerce或Elementor等插件的英文文字改为中文。

**不能做到的：**

- 不能翻译你手动创建的页面、文章中的内容（这些内容要用[多语言插件翻译](https://website-custom.com/translatepress-tutorial/)）。

</details>

## 安装Loco Translate插件

在WP后台插件安装界面搜索：Loco Translate，安装并启用该插件。

## Loco Translate插件使用教程

在Loco插件菜单里点击主题或插件菜单，然后在插件列表里找到想要翻译的插件。

点击进入该插件（如WooCommerce）的翻译界面：

1. 点击按钮添加新语言
2. 语言选择你的目标语言，位置选择自定义，最后点击开始翻译
3. 进入到该插件的原文翻译界面
4. 在上方搜索框输入想要翻译的原文字段
5. 在下方"源文"区域找到并点击该字段
6. 在最下方属于要翻译的目标语言文本
7. 最后点击左上角保存按钮

这样就完成了一个插件固有文本字段的翻译。

## 自动翻译选项

<Tabs>
<TabItem value="deepl" label="DeepL API" default>
使用DeepL API进行自动翻译，需要配置API密钥。DeepL翻译质量较高，推荐使用。
</TabItem>
<TabItem value="addon" label="自动翻译插件">
安装[Automatic Translate Addon For Loco Translate](https://wordpress.org/plugins/automatic-translator-addon-for-loco-translate/)插件，是Loco的自动翻译拓展插件，可以不用API也能自动翻译。
</TabItem>
</Tabs>

## 下载资源

| 资源名称 | 下载链接 | 说明 |
|---------|----------|------|
| Loco Translate插件 | [WordPress.org](https://wordpress.org/plugins/loco-translate/) | 免费的WordPress翻译插件 |
| 自动翻译插件 | [WordPress.org](https://wordpress.org/plugins/automatic-translator-addon-for-loco-translate/) | Loco Translate的自动翻译扩展 |
