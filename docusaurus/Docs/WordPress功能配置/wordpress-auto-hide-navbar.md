---
title: "WordPress隐藏式导航栏：滚动时自动显示和隐藏"
description: "通过简单的JavaScript和CSS代码，为您的WordPress网站实现智能导航栏效果——向上滚动时显示，向下滚动时隐藏，无需额外插件。"
tags: [WordPress, 导航栏, CSS, JavaScript, 用户体验]
slug: /wordpress-auto-hide-navbar
---

Last updated: Jan 21 2025

![WordPress隐藏式导航栏效果](https://website-custom.com/wp-content/uploads/2024/11/navigation-bar.webp)

本教程将教您如何通过添加简单的JS和CSS代码，为您的WordPress网站实现一个智能的隐藏式导航栏：当用户向上滚动页面时，导航栏平滑显示；当用户向下滚动时，导航栏则自动隐藏。这种效果可以提升用户体验，尤其是在移动设备上，可以为内容区域提供更多空间。

## 实现原理

该效果的实现依赖于 **JavaScript** 来监听用户的滚动行为，并结合 **CSS** 来控制导航栏的显示和隐藏。

-   **CSS**: 设置导航栏的初始样式，包括固定定位和过渡动画。
-   **JavaScript**: 监听页面的滚动事件，判断用户是向上还是向下滚动，并动态地为导航栏添加或移除一个CSS类，从而触发显示或隐藏的动画。

## 操作步骤

### 步骤一：添加CSS代码

1.  登录WordPress后台，进入 **外观** -> **自定义**。
2.  选择 **额外CSS**。
3.  将以下CSS代码粘贴进去：

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

### 步骤二：为导航栏添加CSS类名

您需要为您网站的导航栏（通常在Header模板中）添加一个CSS类名，以便我们添加的CSS和JS代码能够识别它。

1.  如果您使用Elementor，请编辑您的Header模板。
2.  选中导航栏的最外层容器。
3.  在 **高级** 选项卡中，为 **CSS 类** 字段添加 `custom-navbar`。

![为导航栏添加CSS类名](https://website-custom.com/wp-content/uploads/2024/11/3-18.webp)

### 步骤三：添加JavaScript代码

1.  如果您使用Elementor Pro，可以通过 **Elementor** -> **Custom Code** 功能来添加JS代码。
2.  创建一个新的代码片段，将位置设置为 `<body> - Start`。
3.  将以下JS代码粘贴进去：

```javascript
<script>
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
</script>
```

4.  发布代码片段，并确保它在全站生效。

## 效果演示

完成以上步骤后，您的网站导航栏就应该具备了滚动时自动显示和隐藏的功能。

<video class="elementor-video" src="https://website-custom.com/wp-content/uploads/2024/11/WordPress向上滚动显示导航栏_向下滚动隐藏_1.mp4" controls="" preload="none" controlsList="nodownload" poster="https://website-custom.com/wp-content/uploads/2024/11/navigation-bar.webp"></video>
