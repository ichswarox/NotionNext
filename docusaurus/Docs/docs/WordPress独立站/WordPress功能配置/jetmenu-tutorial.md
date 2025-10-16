---
title: "WordPress超级菜单插件JetMenu使用教程"
description: "学习如何使用JetMenu插件创建强大的超级菜单，包括水平、垂直、汉堡菜单等3种Mega Menu展示形式。"
tags: [WordPress, 菜单, JetMenu, 超级菜单, Elementor, 插件教程]
slug: /jetmenu-tutorial
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<div class="date-header">
  <span class="date">Last updated: Oct 15 2025</span>
</div>

![WordPress超级菜单插件JetMenu使用教程](https://website-custom.com/wp-content/uploads/2025/04/menu.webp)

## 概述

JetMenu是一个简单好用且强大的超级菜单（Mega Menu）插件，可以和Elementor或Gutenberg编辑器搭配使用，可以很轻松就实现美观、功能丰富并且完全响应式的超级菜单界面。

与使用Elementor自带的Mega Menu文章不同，JetMenu的超级菜单种类更丰富，适合在更多的设备端展示，以及更多的使用场景。

## JetMenu主要功能特性

- 支持水平、垂直、汉堡菜单，适用于不同场景和设备
- 能在菜单上添加图标和文本，满足个性化设置
- 与Elementor和Gutenberg编辑器兼容
- 完全响应式设计
- 支持多种Mega Menu展示形式

:::tip
下图展示了JetMenu支持的超级菜单形式，可以根据不同需求选择合适的菜单类型。
:::

## 安装JetMenu插件

<Tabs>
  <TabItem value="upload" label="上传安装" default>
    首先，在教程开始前，需要在WordPress后台 – 插件 – 安装新插件 中通过上传插件的方式安装JetMenu插件。
  </TabItem>
  <TabItem value="purchase" label="购买插件">
    如果还没有JetMenu插件，请先购买。
  </TabItem>
</Tabs>

安装JetMenu后可以在Crocoblock – JetPlugins Settings – JetMenu中对该插件进行默认设置。

## 创建JetMenu超级菜单

创建JetMenu超级菜单，WP后台 – 外观 – 菜单，可以在现有的菜单上进行操作，或者创建一个新的菜单。

将鼠标移动到对应菜单上时，会在该菜单右侧显示Settings图标，点击图标即可对改菜单进行Mega Menu设置：

### Mega Content设置

- **Use Mega Content**：开启，启用改菜单的超级菜单。
- **Mega Content Type**：选择Elementor。
- 然后保存，其他的不用修改。

### Item Icon设置

给这个菜单添加一个图标，根据自己需求选择要不要添加。

### Item Badge设置

给改菜单添加一个文本或SVG标签，比如"Hot" "New"，根据需求决定是否设置。

这些设置都做好后回到Mega Content界面，可以点击"Edit Mega Content"，对超级菜单的内容进行编辑。

因为选择了Elementor，所以会自动跳出Elementor编辑界面，在这个界面填充改菜单下超级菜单内容即可。

填充完超级菜单内容后点击右上角发布，然后关闭该Elementor编辑界面。

创建了超级菜单的菜单右侧会显示一个"Mega Activated"的标志。

## 使用JetMenu小部件

使用JetMenu超级菜单组件的时候，只需要打开对应页面的Elementor编辑界面，一般是网站的Header（页眉）模版页。

### 添加水平超级菜单

水平超级菜单就是水平排列的菜单布局，属于常规的PC端超级菜单。

在Elementor编辑界面左侧小部件里搜索menu，然后找到Mega Menu并添加即可。

添加JetMenud的Mega Menu小部件后，在该小部件的Layout设置里选择之前创建了超级菜单的菜单"Jet Menu"。

这样就完成了PC端超级菜单的添加，鼠标移动到对应菜单就会显示其下的超级菜单内容。

:::note
如果要修改超级菜单的宽度，需要在Layout设置里修改Mega Container Width Type为"Selector"，然后在Custom selector填写CSS选择器。
:::

假设ID为"aaa"容器，它宽度是1200px，那么你在JetMenu超级菜单小组件的Custom selector设置里填写#aaa，那超级菜单的宽度就会变成和"aaa"容器一样的宽度 – 1200px；

也可以给一个全宽度的容器（比如Header容器）添加一个CSS ID（在容器的 高级设置 – CSS ID 里添加），然后在Custom selector里填写该ID，该超级菜单的宽度就会变成全宽度。

最后在该菜单的高级设置里，选择在移动端隐藏。

### 添加汉堡超级菜单

汉堡超级菜单就是折叠隐藏起来的菜单，点击菜单按钮后显示，是适合移动端的超级菜单。

在Elementor编辑界面左侧小部件里搜索menu，找到Hamburger Menu小部件并添加到指定位置。

选择Hamburger Menu小部件的Menu为之前添加的"Jet Menu"菜单。

高级设置里隐藏该小部件在桌面端展示。

JetMenu汉堡菜单效果展示：汉堡菜单适合在移动端使用，可以节省屏幕空间。

### 添加垂直超级菜单

同样是在小部件里搜索Menu，找到Vertical Mega Menu小部件并添加。

设置Select Menu为"Jet Menu"。

鼠标移动到"All Product"，就会显示对应的超级菜单内容。

调整垂直超级菜单内容的宽度：在垂直菜单小部件里找到"Mega Menu"，Mega Menu Width的数值即可调整垂直超级菜单内容的宽度。

## 常见使用场景

- **电商网站**：使用垂直菜单展示产品分类
- **内容网站**：使用水平菜单展示内容分类
- **移动端优化**：使用汉堡菜单节省空间

## 总结

以上就是JetMenu使用教程的全部内容。JetMenu是一个功能强大的超级菜单插件，可以显著提升网站的导航体验。

## 下载链接

| 插件版本 | 下载地址 | 说明 |
|---------|----------|------|
| JetMenu | [Crocoblock官网](https://crocoblock.com/plugins/jetmenu/) | 超级菜单插件 |
| JetMenu Pro | [购买页面](https://website-custom.com/resources/jetmenu-plugin/) | 高级功能版本 |
