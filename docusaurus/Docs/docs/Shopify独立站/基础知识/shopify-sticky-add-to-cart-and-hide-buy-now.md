---
title: "Shopify移动端固定加购按钮及隐藏“立即购买”按钮"
description: "了解如何在Shopify移动端固定“添加到购物车”按钮，并隐藏“立即购买”按钮，优化移动购物体验。注意：部分内容可能已过时。"
tags: [Shopify, 移动端优化, 购物体验]
slug: /shopify-sticky-add-to-cart-and-hide-buy-now
---

Last updated: Sep 15 2025

![Shopify Mobile](https://images.unsplash.com/photo-1611162617213-6d22e721c1d6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80)

:::warning

以下内容为早期教程，可能不适用于当前版本的 Shopify 主题。现在，您可以通过 [Shopify 增强版主题](https://shopify2006.com/enhanced-shopify-theme/) 中的悬浮加购功能实现类似效果。

:::

### 固定移动端加购按钮

将以下 CSS 代码添加到您的主题样式文件中：

```css
@media screen and (max-width: 450px){
    #your-button-id { /* 请将 #your-button-id 替换为您的加购按钮的实际ID */
        position: fixed;
        bottom: 0px;
        left: 0;
        z-index: 99;
        /* height: auto; */ /* 可选，根据需要设置高度 */
    }
}
```

### 点击加购按钮后隐藏

将 `onclick` 事件添加到您的加购按钮的 HTML 中：

```html
<button onclick="this.style.display = 'none'">添加到购物车</button>
```

### 隐藏“立即购买”按钮

将以下 CSS 代码添加到您的主题样式文件中：

```css
.shopify-payment-button {
  display: none;
}
