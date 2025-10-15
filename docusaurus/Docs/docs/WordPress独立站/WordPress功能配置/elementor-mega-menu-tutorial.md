---
title: "Elementor超级菜单教程"
description: "使用Elementor为WordPress创建Mega Menu，无需额外插件，创建完全自定义样式的超级菜单。"
tags: [elementor, mega-menu, wordpress, navigation]
slug: /elementor-mega-menu-tutorial
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Last updated: Oct 15 2025

![Elementor超级菜单教程，使用Elementor为WordPress创建Mega Menu](https://www.gfxcamp.com/wp-content/uploads/2025/09/image.jpg)

## 关于Mega Menu超级菜单

**Mega Menu（超级菜单）**是一种高级导航菜单形式，通常在用户悬停或点击主菜单项时，一次性展示出多列或多层级的子菜单内容。

![传统网站菜单，一层一层操作繁琐](https://website-custom.com/wp-content/uploads/2025/01/0.1.webp)

![WordPress超级菜单](https://website-custom.com/wp-content/uploads/2025/01/9.jpg)

相比传统的下拉菜单，在子菜单层级多的情况下还需要一层一层点击或者悬停鼠标才能查看下一层级的菜单，而超级菜单更强大和灵活，可以展示多层级菜单和更丰富的内容，减少了繁琐的操作的同时还能让用户快速找到想要的内容，提升用户体验。

使用[Elementor](https://elementor.com/)的Mega Menu创建超级菜单，不止可以插入菜单，还能添加图片、视频、产品等元素，就像构建页面一样。

Mega Menu更适合B2C电商网站，或者内容较多或者产品分类较多的B2B网站。

## 开启Elementor超级菜单功能

在创建WordPress超级菜单前需要先开启Elementor Menu功能：

![开启Elementor的Mega Menu功能](https://website-custom.com/wp-content/uploads/2025/01/1-3.webp)

位置在：WP后台 – Elementor – 设置 – 特性 – Menu，开启Menu并保存。同时也要保证该界面的"嵌套元素"功能处于开启状态。

## 使用Elementor创建WordPress超级菜单

首先，新建一个网站页眉（Header模板）或者在你网站原有的页眉上进行修改，Well选择新建一个网站页眉以更好的演示。

![Elementor创建网站页眉Header模板](https://website-custom.com/wp-content/uploads/2025/01/2-3.webp)

创建网站页眉的位置：WP后台 – 模板 – Theme Builder – Header，点击右上角Add New。

![编辑Header模板](https://website-custom.com/wp-content/uploads/2025/01/3-3.webp)

进入页眉模板编辑页面后：

1. 添加两个并排的小容器
2. 左侧容器宽度设置20%，用来放网站Logo
3. 右侧容器宽度设置80%，用来放网站菜单

![添加logo和menu元素](https://website-custom.com/wp-content/uploads/2025/01/4-2.webp)

![添加logo和menu元素后的样式](https://website-custom.com/wp-content/uploads/2025/01/5-3.webp)

然后分别添加site logo和menu元素到两个小容器。

![设置页眉样式](https://website-custom.com/wp-content/uploads/2025/01/6-3.webp)

调整logo尺寸和上下居中显示menu元素。

![设置Elementor Menu的菜单和URL，开启下拉菜单](https://website-custom.com/wp-content/uploads/2025/01/7-2.webp)

设置菜单元素，在Menu Items中添加需要的菜单和对应URL。对需要使用超级菜单的菜单开启"Dropdown Content"。

[![编辑超级菜单内容](https://website-custom.com/wp-content/uploads/2025/01/8-2-1024x274.webp)](https://website-custom.com/wp-content/uploads/2025/01/8-2.webp)

然后点击开启了"Dropdown Content"的菜单，就可以在下方的区域添加各种内容，比如添加子菜单、视频、产品。

PS：如果你在编辑下拉内容区域的时候，突然下拉内容无法打开，可以在保存后刷新页面就能正常打开。

下面是Well制作的超级菜单，可以作为参考：

[![WordPress超级菜单](https://website-custom.com/wp-content/uploads/2025/01/9-1024x493.jpg)](https://website-custom.com/wp-content/uploads/2025/01/9.jpg)

具体构建思路：

- 其中大二级菜单可以使用标题元素，然后添加对应菜单的URL即可
- 其中的三级菜单可以使用图标列表元素，把图标去掉，并添加对应菜单的URL。
- 最右侧的热卖产品用图像框元素即可实现

以上就是Elementor制作WordPress超级菜单教程的全部内容，Well还有[更多Elementor教程](https://website-custom.com/elementor-tutorial/)。

## 下载资源

| 资源类型 | 下载链接 | 备注 |
|---------|----------|------|
| Elementor插件 | [Elementor官网](https://elementor.com/) | 免费版本即可使用Mega Menu功能 |
| WordPress主题 | [Astra主题](https://wpastra.com/) | 与Elementor完美兼容的主题 |
