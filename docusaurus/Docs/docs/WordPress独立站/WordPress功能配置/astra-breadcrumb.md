---
title: "Astra主题面包屑教程：样式、位置设置及简码使用"
description: "学习如何在Astra主题中设置面包屑的位置、样式，并使用简码在任意位置显示面包屑，提升网站导航体验。"
tags: [astra theme, breadcrumb, wordpress navigation, seo]
slug: /astra-breadcrumb
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<div class="time-stamp">Last updated: Oct 15 2025</div>

## 功能列表

:::note 重要提示
Astra主题面包屑功能需要在Astra主题自定义设置中进行配置，也可以通过简码在任意位置显示。
:::

## Astra主题面包屑设置位置

Astra主题的面包屑设置位置在：外观 – 自定义 – 总体 – 面包屑。

## Astra主题面包屑教程

### 面包屑常规设置

![img1015-dgnw.webp](https://list.ucards.store/d/img/img1015-dgnw.webp)
<Tabs>
<TabItem value="position" label="位置设置" default>
位置：默认的面包屑位置有三个选择，分别是页眉内、页眉后、标题前。如果你觉得这些位置不适合你的网站，可以使用简码的方式显示面包屑。
</TabItem>
<TabItem value="separator" label="分隔符设置">
分隔符：分隔符是面包屑之间的符号，常用">"或">>"。
</TabItem>
<TabItem value="alignment" label="对齐方式">
对齐方式：根据页面的布局，选择居中或者向左、向右对齐。
</TabItem>
<TabItem value="display" label="显示设置">
显示设置：选择在哪些页面里显示面包屑。
</TabItem>
</Tabs>

### 面包屑样式设置

![img1015-eREc.webp](https://list.ucards.store/d/img/img1015-eREc.webp)

可以调整面包屑的字体、背景色、文本色以及间距。

## 使用简码在任意位置显示面包屑

由于Astra主题面包屑默认的显示位置有限，所以要用到简码来显示面包屑，可以显示在任何你想要的位置。

<Tabs>
<TabItem value="astrapro" label="Astra Pro简码" default>
```markdown
[astra_breadcrumb]
```
![img1015-ZVsE.webp](https://list.ucards.store/d/img/img1015-ZVsE.webp)

这个简码适用于有Astra Pro的网站。
</TabItem>
<TabItem value="custom" label="自定义简码">
```markdown
Home » Astra主题教程 » Astra主题面包屑教程：面包屑样式、位置设置以及简码使用
```

这个简码是自定义的简码，可以用在Astra免费版网站上。

使用前需要先注册简码：

```php
//自定义Astra主题面包屑简码
function custom_astra_breadcrumb_shortcode() {
  if ( function_exists( 'astra_get_breadcrumb' ) ) {
    ob_start();
    astra_get_breadcrumb();
    return ob_get_clean();
  }
  return '';
}
add_shortcode( 'custom_breadcrumb', 'custom_astra_breadcrumb_shortcode' );
```

将上方代码添加到主题文件夹的functions.php文件最下方
</TabItem>
</Tabs>
