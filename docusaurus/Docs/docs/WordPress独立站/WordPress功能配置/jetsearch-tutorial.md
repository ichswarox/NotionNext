---
title: "WordPress高级AJAX搜索插件JetSearch使用教程"
description: "学习如何使用JetSearch插件创建高级AJAX实时搜索功能，支持产品分类条件筛选，提升网站用户体验。"
tags: [WordPress, 搜索, JetSearch, AJAX, 实时搜索, 插件教程]
slug: /jetsearch-tutorial
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<div class="date-header">
  <span class="date">Last updated: Oct 15 2025</span>
</div>

![WordPress高级AJAX搜索插件JetSearch使用教程，产品分类条件筛选实时搜索插件](https://website-custom.com/wp-content/uploads/2025/03/Search.webp)

## 概述

JetSearch是由Crocoblock开发一款Ajax实时搜索插件。提供快速、动态的搜索体验，允许用户在不刷新页面的情况下实时获取搜索结果，还能根据设定的条件进行筛选搜索，提升用户体验。

### JetSearch主要特点

- **Ajax 实时搜索** – 通过即时搜索技术，用户输入关键词后，结果会即时显示，无需等待页面刷新。
- **高度可定制** – 可自定义搜索栏的外观、样式和布局，完美适配 Elementor 设计。
- **智能搜索** – 支持在特定内容类型（文章、页面、产品、自定义文章类型等）中搜索，并可以设置优先级。
- **支持 WooCommerce** – 适用于电商网站，可快速搜索产品，提高用户体验。
- **关键词高亮** – 在搜索结果中高亮显示匹配的关键词，增强可读性。
- **多字段搜索** – 可在标题、内容、分类、标签、SKU（适用于WooCommerce）等多个字段中进行搜索。
- **兼容性强** – 适用于大多数 WordPress 主题

### 适用场景

- 文章博客站点：提升用户查找内容的效率。
- WooCommerce 商城：快速搜索产品，提高转化率。

:::tip
如果你对网站的搜索功能要求不高，使用Elementor自带的Search组件即可。
:::

## 安装JetSearch插件

<Tabs>
  <TabItem value="upload" label="上传安装" default>
    在Wordpress后台 – 插件 – 安装新插件，点击右上角上传插件，将JetSearch插件安装包上传安装到Wordpress。
  </TabItem>
  <TabItem value="purchase" label="购买插件">
    点击购买JetSearch插件。
 </TabItem>
</Tabs>

安装并启用Jet Search后，通过菜单栏"Crocoblock – JetPlugins Settings"打开JetSearch的默认设置。

可以在默认设置里添加Suggestions（搜索建议）。

Ajax Search Settings里设置JetSearch的默认功能，这一可以不做设置，使用JetSearch时单独设置即可。

## 配置JetSearch实现全局产品搜索

首先，使用Elementor打开需要添加Ajax实时搜索的页面或者模板，准备把JetSearch搜素框添加到网站Header（页眉）区域。

如果还没有创建网站Header，请参考使用Elementor创建页眉页脚。

在元素搜索框中输入"Search"，将Ajax Search（这就是JetSearch生成的Elementor小部件）小部件添加到指定的区域。

接下来设置JetSearch小部件：

### Search Form设置

**Input Icon**: 就是搜索框最左侧显示的图标，可以上传SVG图片或者是在Elementor图标库里选。

**Clear Text Button Icon**: 清楚搜索内容的图标，用默认的就行，是个 " X "。

**Placeholder Text**: 搜索框里的提示语，如果你的搜索框是用来搜索产品的，可以写类似"Search Product"的文字。

**Minimal Quantity of Symbols For Search**: 搜索时最少要输入的字符，如果填"2"，最少要输入两个字符才启动实时搜索。

**Allow Search by Empty String**: 不建议开启。

**Disable Submit on Enter**: 如果你想实时搜索，不想用户通过回车键提交跳转到搜索结果页（结合下面禁用搜索按钮），就开启。

**Show Submit Button**: 是否显示搜索按钮，选择不显示，结合关闭回车键搜索，只实现实时搜索，不让用户跳转页面，集中精力，利于转化。

**Show Categories List**: 如果你网站产品多的话还是开启好一些，在分类条件的筛选下，用户能更容易找到产品。

**Select Placeholder**: 分类的提示词。

**Responsive Form on Mobile**：开启。

### Search Query设置

**Search by the current query**: 会自动限定搜索范围在当前查询下。如果添加的是一个全局搜索框就不开启，如果想在文章分类或者产品分类下添加该搜索框，可以开启。

**Custom Search Result URL**: 不用填写。

**Source**: 想要搜索的范围，可以添加单个或者多个范围。

**Include，Exclude**: 需要包含或排除的内容。

**Search in custom fields**: 搜索一些自定义字段，比如价格、属性。

**Sentence Search**: 句子搜索可以让搜索更精准，不只是简单的分词搜索。

**Search in taxonomy terms**: 决定搜索的时候是否也检索分类名称，如果搜索词匹配到某个分类，即使里面的产品没有匹配到也会列出来。

**Results Order By**: 搜索结果的顺序，默认按照相关性排序。

**Results Order**: ASC是升序，DESC是降序。

**Use Product Catalog Visibility Settings**: 开启，会遵循WooCommerce产品可见性原则展示产品，搜索结果不会显示当前用户不能看的产品。

**Posts Per Page**: 搜索结果每页显示多少条。

**Posts Number**: 最多显示多少个搜索结果。

### Results Area设置

**Results Area Width**: 搜索结果区域的宽度，建议选择和搜索框一样宽（by Search Form）。

**Columns Number**: 列数，1列。

**Highlight Searched Text**: 高亮显示搜索结果，开启。

**Show Post Thumbnail**: 显示搜索结果的缩略图，开启。

**Thumbnail Size**: Thumbnail。

**Thumbnail Placeholder**: 缩略图占位符，如果搜结果没有特色图，会显示设置的占位符图片。

**Post Content Source**: Post Excerpt。

**Post Content Length**: 30。

**Show Product Price**: 开启。

**Show Product Rating**: 不开启。

**Show Add to Cart Button**: 开启。

**Show Results Counter**: 开启。

**Results Counter Text**: Results。

**Show All Results Button**: 不开启，避免用户点击后跳转页面。

**Open Results In New Tab**: 不开启。

**Bullet Pagination, Number Pagination, Navigation Arrows**: Show in Header。

**Navigation Arrow Type**: Angle。

### 样式设置

这个小部件的样式设置比较精细，可以控制到每个部分的样式，根据网站风格和个人需求调整即可。

## 常见使用场景

- **电商网站**：实现产品实时搜索功能
- **内容网站**：提供快速内容查找
- **企业网站**：增强用户导航体验

## 总结

以上就是JetSearch使用教程的全部内容，网站使用实时搜索可以提升网站的用户体验和用户专注度，增强网站转化。

## 下载链接

| 插件版本 | 下载地址 | 说明 |
|---------|----------|------|
| JetSearch | [Crocoblock官网](https://crocoblock.com/plugins/jetsearch/) | 高级AJAX搜索插件 |
| JetSearch Pro | [购买页面](https://website-custom.com/resources/jetsearch-plugin/) | 高级功能版本 |
