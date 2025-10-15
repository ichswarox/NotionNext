---
title: "如何在WordPress中添加CSS代码，自定义元素样式"
description: "学习如何在WordPress中添加自定义CSS代码，以使用Elementor或主题自定义器来样式化元素。本指南为这两种方法提供了分步说明。"
tags: [WordPress, CSS, Elementor, Theme]
slug: /wordpress-add-custom-css
---

Last updated: Jan 21 2025

![WordPress中添加CSS代码](https://website-custom.com/wp-content/uploads/2024/12/css-coding.webp)

在WordPress中添加自定义CSS代码是调整网站外观和感觉的常用方法。您可以通过Elementor编辑器或主题的自定义功能为特定元素添加CSS样式。

## 添加CSS代码的两种方式

WordPress中常用的添加CSS代码的方式有两种：

-   **Elementor编辑器**: 适合为单个页面的特定元素添加独立的CSS样式。
-   **主题自定义**: 更适合全局设置，例如为整个网站的图片添加边框。

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="elementor" label="在Elementor中添加CSS代码" default>

首先，使用Elementor编辑需要添加CSS代码的页面。

![使用Elementor编辑](https://website-custom.com/wp-content/uploads/2024/12/1-6.webp)

选中要添加CSS样式的元素，打开“高级”选项卡，就能看到“自定义CSS”区域。在这里添加相应的CSS代码即可。

![Elementor中添加css样式](https://website-custom.com/wp-content/uploads/2024/12/2-5.webp)

通常，我们会先给指定的元素添加一个CSS ID或CSS类名，以便更好地使用CSS选择器来为对应元素添加样式。

![在Element元素的高级设置中为元素添加ID和类名](https://website-custom.com/wp-content/uploads/2024/12/3-6.webp)

![为元素添加自定义css](https://website-custom.com/wp-content/uploads/2024/12/4-5.webp)

![自定义css效果](https://website-custom.com/wp-content/uploads/2024/12/5-5.webp)

:::info 注意
CSS ID是唯一的，一个页面中不应出现两个相同的CSS ID。而CSS类名可以用于多个元素。在使用选择器时，元素ID前要加“#”，类名前面要加“.”。
:::

</TabItem>
<TabItem value="theme" label="在主题中添加CSS代码">

进入WordPress后台，导航至 **外观 → 自定义 → 额外CSS**。

![主题自定义设置入口](https://website-custom.com/wp-content/uploads/2024/12/6-5.webp)

![主题自定义设置里添加额外CSS](https://website-custom.com/wp-content/uploads/2024/12/7-3.webp)

在这里添加的CSS代码将应用于整个网站。这种方式更适合添加全局CSS样式。如果您只想对某个页面的特定元素添加样式，不建议在这里添加，因为它会增加每个页面的代码量。

除了给指定元素添加类名或ID，元素本身也可能有自己的ID或类名。您可以在浏览器中打开网站前端页面，按F12审查元素，查看对应元素的类名或ID。

![浏览器F12审查元素](https://website-custom.com/wp-content/uploads/2024/12/8-2.webp)

</TabItem>
</Tabs>

至此，本篇关于在WordPress中添加CSS代码的两种方式分享结束。
