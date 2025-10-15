---
title: "如何为WordPress设置渐变色字体？2步搞定"
description: "通过简单的CSS代码即可为WordPress设置渐变色字体，无需安装多余的插件，包含详细步骤和代码示例"
tags: [wordpress, gradient-text, css, tutorial]
slug: /wordpress-gradient-text-tutorial
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

_Last updated: Jan 21 2025_

![WordPress设置渐变色字体](https://website-custom.com/wp-content/uploads/2024/11/type.webp)

# 如何为WordPress设置渐变色字体？2步搞定

## 教程概览

:::tip 渐变色字体优势
通过简单的CSS代码即可为WordPress设置渐变色字体，无需安装多余的插件。这种方法可以让你的网站文字更具视觉吸引力，同时保持代码简洁。
:::

## 添加字体渐变色CSS样式到主题

<Tabs>
<TabItem value="step1" label="进入自定义界面">
  进入WP后台 → 外观 → 自定义，进入到主题的自定义设置界面。
</TabItem>
<TabItem value="step2" label="找到额外CSS">
  点击进入"额外CSS"选项。
</TabItem>
<TabItem value="step3" label="添加CSS代码">
  粘贴CSS代码并保存。
</TabItem>
</Tabs>

![进入主题额外CSS](https://website-custom.com/wp-content/uploads/2024/11/1-17.webp)

点击进入"额外CSS"。

![添加文字渐变CSS代码](https://website-custom.com/wp-content/uploads/2024/11/7-14.webp)

粘贴下方CSS代码:

```css
.gradient{
	background: linear-gradient(to right, #ff6b6b, #4DA1F4); /* 从左到右的渐变 */
	-webkit-background-clip: text; /* 只对文本应用背景 */
	color: transparent; /* 使文本颜色透明，背景渐变色显示出来 */
    font-weight: bold;
}
```

可以通过修改：background: linear-gradient(to right, #ff6b6b, #4DA1F4); 这行代码，调整文字渐变的效果。

-   "to right"是渐变的方向
-   还可以通过度数调整渐变的角度"45deg"
-   "to right"后面的参数是渐变颜色，可以填写多个颜色
-   颜色可以是"#ffffff"这样的色号，或者是"red"这样的单词形式

添加CSS代码后记得保存。

## WordPress设置渐变色字体

<Tabs>
<TabItem value="editor" label="打开编辑器">
  打开文章或者页面的编辑页面。
</TabItem>
<TabItem value="settings" label="高级设置">
  在文本元素的高级设置中找到自定义CSS类名选项。
</TabItem>
<TabItem value="apply" label="应用类名">
  给想要添加渐变效果的文本元素添加类名"gradient"。
</TabItem>
</Tabs>

![Elementor文本元素的高级设置界面](https://website-custom.com/wp-content/uploads/2024/11/2-18.webp)

![给文本元素添加类名](https://website-custom.com/wp-content/uploads/2024/11/3-17.webp)

给想要添加渐变效果的文本元素添加类名"gradient"。

这个类名和我们添加css代码时的类名一致。

## 渐变效果示例

<Tabs>
<TabItem value="example1" label="双色渐变">
  background: linear-gradient(to right, #ff6b6b, #4DA1F4);
</TabItem>
<TabItem value="example2" label="多色渐变">
  background: linear-gradient(to right, purple, #ff6b6b, #4DA1F4, red);
</TabItem>
<TabItem value="example3" label="垂直渐变">
  background: linear-gradient(to top, purple, #ff6b6b, #4DA1F4, red);
</TabItem>
</Tabs>

![文字渐变效果1](https://website-custom.com/wp-content/uploads/2024/11/4-15.webp)

向右渐变，两个渐变色。

![文字渐变效果2](https://website-custom.com/wp-content/uploads/2024/11/5-15.webp)

向右渐变，四个渐变色。

![文字渐变效果3](https://website-custom.com/wp-content/uploads/2024/11/6-15.webp)

向上渐变。

![渐变色文字效果](https://website-custom.com/wp-content/uploads/2024/11/8-14.webp)

越大的字体，渐变效果会更明显。

## 总结

至此，为WordPress设置字体渐变教程结束。通过简单的CSS代码，您可以轻松为WordPress网站添加渐变色字体效果，无需安装额外插件。

## 相关资源

| 资源名称 | 类型 | 链接 |
|---------|------|------|
| WordPress CSS添加 | 教程 | [在WordPress中添加CSS代码](https://website-custom.com/add-css-code/) |
| WordPress后台定制 | 教程 | [自定义WordPress后台登录页面样式](https://website-custom.com/wp-login-design/) |
