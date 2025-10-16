---
title: "Astra主题如何禁用页面标题？2种方法防止标题自动显示在内容区域"
description: "本文介绍Astra主题如何禁用页面标题的2种方法，包括单独禁用某个页面标题和全局禁用页面标题。"
tags: [astra, 主题, 页面标题, 禁用]
slug: /astra-disable-title
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

_Last updated: Oct 15 2025_

Astra主题如何禁用页面标题？这是很多Astra新手朋友都会遇到的问题，默认显示的标题无法编辑和调整，会影响页面排版布局，本篇文章提供2种禁用标题的方法。

## Astra主题如何禁用页面标题？

使用[Astra](https://wordpress.org/themes/astra/)主题时，页面中会默认显示当前页面标题在内容区域，而且默认显示的标题无法编辑、无法移动，这会影响页面整体的样式和排版。

本篇文章，会介绍两种禁用Astra默认显示标题的方法：

1. 单独禁用某个页面标题
2. 全局禁用页面标题

你可以根据自身需求，选择其中一种方法。

## 手动禁用单个页面标题

### 在古腾堡编辑器下禁用

![img1015-bjAl.webp](https://list.ucards.store/d/img/img1015-bjAl.webp)

古腾堡编辑器页面，点击标题元素，会在标题左上方出现一个眼睛的图标，点击后就可以禁用页面标题。

### 在Elementor编辑下禁用

![img1015-YtTM.webp](https://list.ucards.store/d/img/img1015-YtTM.webp)

Elementor编辑器页面，点击导航栏中的设置图标，在左侧菜单里会看到"隐藏标题"的选项，开启该选项后就可以禁用当前页面标题。

## 全局禁用页面标题

想要全局禁用Astra主题默认显示的页面标题，需要使用代码：

```php
//Astra主题全局隐藏页面标题 - Well建站教程
add_filter( 'astra_the_title_enabled', '__return_false' );
```

将以上代码添加到主题文件编辑器的functions.php文件下方：

![img1015-YtTM.webp](https://list.ucards.store/d/img/img1015-YtTM.webp)

添加代码的位置在：WP后台 – 外观 – 主题文件编辑器 – 切换到正在启用的主题 – 选择functions.php – 将代码添加在最下方。

:::note 注意事项
在WordPress网站中，安装主题的同时还要[安装子主题](https://website-custom.com/child-theme/)，启用子主题即可，并且将自定义的代码都添加到子主题的文件内容，否则自定义的代码会因为主题更新被覆盖。
