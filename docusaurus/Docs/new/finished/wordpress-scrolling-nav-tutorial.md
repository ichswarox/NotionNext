---
title: "WordPress隐藏式导航栏效果，向上滚动显示导航栏，向下滚动隐藏"
description: "通过添加JS代码和CSS代码的方式，轻松实现WordPress隐藏式导航栏效果，向上滚动显示导航栏，向下滚动隐藏导航栏，无需安装多余插件。"
tags: [WordPress, 导航栏, JavaScript, CSS, 滚动效果]
slug: /wordpress-scrolling-nav-tutorial
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# WordPress隐藏式导航栏效果，向上滚动显示导航栏，向下滚动隐藏

Last updated: Jan 21, 2025

![WordPress隐藏式导航栏效果，向上滚动显示导航栏，向下滚动隐藏](https://website-custom.com/wp-content/uploads/2024/11/navigation-bar.webp)

通过添加JS代码和CSS代码的方式，轻松实现WordPress隐藏式导航栏效果，向上滚动显示导航栏，向下滚动隐藏导航栏，无需安装多余插件。

## 隐藏式导航栏原理

隐藏式页眉是通过[JavaScript](https://zh.wikipedia.org/wiki/JavaScript)和[CSS](https://zh.wikipedia.org/wiki/CSS)代码结合用户滚动行为来控制导航栏的显示和隐藏。其原理基于**滚动事件监听**和**动态样式更改**，实现通过向上或向下滚动来显示或隐藏导航栏。

其中CSS代码设置基础的导航栏样式和固定效果，JS代码监听用户的页面滚动行为，根据行为动态调整导航栏的位置。

Well已经在文章下方放置了现成的代码，所以不需要大家亲自调整代码，只需要将CSS和JS代码添加到指定的位置即可，操作简单。

## 添加主题额外CSS

<Tabs>
<TabItem value="wp" label="WordPress后台设置" default>
WP – 外观 – 自定义，进入主题自定义页面。

点击进入"额外CSS"编辑界面。

添加下方CSS代码：
</TabItem>
</Tabs>

```css
.custom-navbar {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-color: #fff; /* 设置背景颜色 */
  z-index: 999;
  transition: transform 0.3s ease; /* 设置过渡效果 */
}

.custom-navbar.hidden {
  transform: translateY(-100%); /* 向上移动 100% */
}
```

:::note
记得保存发布。
:::

## 为导航栏添加CSS类名

在Elementor 模板里打开Header模板进行编辑。

为导航栏容器添加CSS类名，"custom-navbar"。

## 使用Elementor Custom Code 添加JS代码

<Tabs>
<TabItem value="elementor" label="Elementor设置" default>
点击进入Elementor – Custom Code。

添加一个新的代码片段，位置选择"<body> – Start"。
</TabItem>
</Tabs>

粘贴下方JS代码到代码片段：

```javascript
document.addEventListener("DOMContentLoaded", function () {
    let lastScrollTop = 0;
    window.addEventListener("scroll", function () {
    let navbar = document.querySelector(".custom-navbar");
    let currentScroll = window.pageYOffset || document.documentElement.scrollTop;
    if (currentScroll > lastScrollTop) {
        // 向下滚动，隐藏导航栏
        navbar.classList.add("hidden");
    } else {
        // 向上滚动，显示导航栏
        navbar.classList.remove("hidden");
    }
    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; // 防止负值
    });
});
```

:::note
记得保存，发布到全站。
:::

至此，WordPress向上滚动显示导航栏，向下滚动隐藏导航栏的效果已经设置好。

## 效果演示

<video class="elementor-video" src="https://website-custom.com/wp-content/uploads/2024/11/WordPress向上滚动显示导航栏\_向下滚动隐藏\_1.mp4" controls="" preload="none" controlsList="nodownload" poster="https://website-custom.com/wp-content/uploads/2024/11/navigation-bar.webp"></video>

## 相关资源

| 资源名称 | 下载链接 |
|---------|----------|
| WordPress建站资源 | [WordPress 插件下载](https://website-custom.com/resources/) |
| 外贸建站服务 | [外贸建站服务](https://website-custom.com/service/) |
| 服务器推荐 | [外贸服务器推荐](https://website-custom.com/service/) |
