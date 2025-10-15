---
title: "WordPress添加锚点链接，点击跳转到页面指定位置"
description: "学习如何在WordPress中添加锚点链接，让用户点击后能平滑跳转到页面的指定位置。本教程将通过Elementor为您演示详细步骤。"
tags: [WordPress, Elementor, Anchor Links]
slug: /wordpress-add-anchor-links
---

Last updated: Jan 21 2025

![WordPress添加锚点链接](https://website-custom.com/wp-content/uploads/2024/12/document.webp)

在WordPress中添加锚点链接，可以提升用户体验，让他们轻松跳转到页面的特定部分。实现此功能只需为目标元素设置一个唯一的ID，然后将该ID作为链接地址赋值给触发跳转的元素。

## 为WordPress添加锚点链接

以下是如何在Elementor中为页面元素添加锚点链接的步骤：

1.  **选择目标元素并设置ID**

    首先，使用Elementor编辑器打开需要添加锚点链接的页面。然后，选中您希望用户跳转到的目标板块或元素。在“高级”选项卡中，为该元素设置一个唯一的 **CSS ID**。例如，您可以将其命名为 `case-id`。

    ![为元素添加CSS ID](https://website-custom.com/wp-content/uploads/2024/12/3-7.webp)

2.  **为触发元素设置链接**

    接下来，选中触发跳转的元素（例如一个按钮或链接），在链接地址字段中输入 `#` 符号，后跟您刚刚设置的ID。例如，输入 `#case-id`。

    ![设置锚链接](https://website-custom.com/wp-content/uploads/2024/12/4-6.webp)

现在，当用户点击该按钮时，页面将平滑滚动到ID为 `case-id` 的元素位置。

### 效果演示

<video class="elementor-video" src="https://website-custom.com/wp-content/uploads/2024/12/锚点链接.mp4" controls="" preload="none" controlsList="nodownload"></video>

以上就是在WordPress中设置锚点链接的全过程。
