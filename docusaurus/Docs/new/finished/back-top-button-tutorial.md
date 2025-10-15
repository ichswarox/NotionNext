---
title: "为WordPress网站添加滚动到顶部功能，无需安装插件"
description: "通过给页脚添加固定定位的按钮，利用HTML锚点链接，为WordPress网站添加滚动到顶部功能，无需安装额外插件。本教程详细介绍了实现方法。"
tags: [wordpress, back-to-top, elementor, tutorial]
slug: /back-top-button-tutorial
---

<!-- 文件顶部更新时间 -->
<div class="text-right text-sm text-gray-500 mb-4">Last updated: Oct 15 2025</div>

![网站添加滚动到顶部功能配图](https://www.gfxcamp.com/wp-content/uploads/2024/11/回到顶部.jpg)

## 页面滚动到顶部功能原理

-   滚动到顶部功能的原理，主要是利用HTML中的锚点链接（比如<a href="#abc">）
-   通过在页面中最上方的容器添加一个`id="abc"`的元素（如一个空的`<div id="abc">`）
-   当点击该链接（<a href="#abc">）时，页面会自动滚动到指定的元素位置（`<div id="abc">`）

## 为网站添加滚动到顶部功能

### 页脚（Footer）添加图标

在开始之前，确保你已经创建了网站页脚。如果你还没有创建网站页脚，请参考使用Elementor Pro制作页眉页脚这篇文章。

![打开页脚模板](https://website-custom.com/wp-content/uploads/2024/11/打开页脚模板.png)

打开页脚（Footer）模板。

![添加图标元素](https://website-custom.com/wp-content/uploads/2024/11/添加图标元素.png)

添加一个容器在页脚任意区域，然后搜索icon并添加图标元素到给容器内。

### 设置图标及其容器样式

<Tabs groupId="style-options">
<TabItem value="icon-style" label="设置图标样式" default>

![设置箭头图标](https://website-custom.com/wp-content/uploads/2024/11/设置箭头图标.png)

编辑图标，选择一个箭头图标。

![设置图标样式](https://website-custom.com/wp-content/uploads/2024/11/设置图标样式.png)

设置图标居中对齐，选择图标颜色，图标尺寸35px。

</TabItem>

<TabItem value="container-style" label="设置容器样式">

![设置容器宽度60px](https://website-custom.com/wp-content/uploads/2024/11/设置容器宽度60px.png)

设置图标外的容器宽度为60px。

![设置图标外容器a链接](https://website-custom.com/wp-content/uploads/2024/11/设置图标外容器a链接.png)

设置图标外的容器HTML标签为a链接，链接内填写 #+任意字符（例如#backtop）。

![设置容器表框](https://website-custom.com/wp-content/uploads/2024/11/设置容器表框.png)

设置图标外的容器边框及边框圆角。

</TabItem>
</Tabs>

![设置容器固定定位](https://website-custom.com/wp-content/uploads/2024/11/设置容器固定定位.png)

-   打开容器的高级设置
-   设置定位为固定
-   水平方向向右，偏移20px
-   垂直方向向下，偏移200px

预览一下样式：

![回到顶部按钮预览](https://website-custom.com/wp-content/uploads/2024/11/回到顶部按钮预览.png)

现在是一个不会随页面滚动的按钮样式，保存页脚模板。

### 添加目标锚点

![打开页眉Header模板](https://website-custom.com/wp-content/uploads/2024/11/打开页眉Header模板.png)

打开页眉Header模板。

![在页眉上方添加容器](https://website-custom.com/wp-content/uploads/2024/11/在页眉上方添加容器.png)

在导航栏上方添加一个容器。

![容器高度设置为0](https://website-custom.com/wp-content/uploads/2024/11/容器高度设置为0.png)

设置这个容器的高度为0px。

![容器内距0，设置容器id](https://website-custom.com/wp-content/uploads/2024/11/容器内距0，设置容器id.png)

-   设置这个容器的内距为0px。
-   CSS ID填写我们刚刚为页脚容器添加的锚链接：backtop（去掉#）

记得保存页眉模板。

### 完成并预览效果

这样，滚动到顶部效果就能实现了，我们到前台预览一下效果：

![效果预览GIF图](https://website-custom.com/wp-content/uploads/2024/11/效果预览GIF图.gif)

## 总结

通过以上步骤，我们成功为WordPress网站添加了滚动到顶部功能，无需安装任何插件。这种方法使用HTML锚点链接实现，简单高效。

## 下载资源

| 资源名称 | 下载链接 |
|---------|----------|
| 滚动到顶部功能教程 | [下载教程PDF](https://example.com/back-top-tutorial.pdf) |
| Elementor模板示例 | [下载模板文件](https://example.com/elementor-back-top-template.zip) |
