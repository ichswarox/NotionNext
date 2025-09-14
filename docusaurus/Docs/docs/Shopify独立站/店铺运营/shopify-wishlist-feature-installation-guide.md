---
title: "第 184 期 Shopify 添加收藏到心愿单功能 Wishlist 安装和设置以及用法详解"
description: "详细介绍如何为 Shopify 店铺添加收藏到心愿单功能，包括插件安装、设置和使用方法"
keywords: ["Shopify", "心愿单", "Wishlist", "收藏功能", "插件安装"]
slug: /shopify-wishlist-feature-installation-guide
---

# 第 184 期 Shopify 添加收藏到心愿单功能 Wishlist 安装和设置以及用法详解

[Shopify 店铺运营](https://shopify2006.com/tag/shopify-dian-pu-yun-ying/)

更新于 2025-05-28

[通过 YouTube 观看本期 Shopify 教程](https://youtu.be/JR5kK_1aaBk?si=WJ4cWKGIK2RFufxT)

[点击这里查看 带字幕 视频教程](https://www.bilibili.com/video/BV1RN411W7eV/?share_source=copy_web)

## 是什么，有什么用

-   Wishlist 心愿单功能，可以理解为：添加到收藏夹 / 关注商品，各大电商平台（例如：京东、亚马逊）基本都有这个功能。
-   Wishlist 后台可以查看数据分析，判断哪些产品更受客户欢迎（收藏更多）
-   产品页面和产品系列中都可以使用，点击图标一键收藏，登录账号可永久保存
-   可以跟 EDM 邮件营销进行整合，设置邮件 Flow 提醒客户下单

## 精心制作的教程

如果你自己从零开始摸索，可能需要花费几个小时，而对照本期教程，几分钟就能搞定。

看似教程只有几分钟，实则我已经花费了数小时，搞定之后梳理、浓缩成教程，观众跟着教程操作的时候会更清晰、高效。

而且跟随本期教程操作，可以实现 Header 中的心形图标动态显示心愿单状态。

## 一、安装插件

![](https://shopify2006.com/content/images/icon/favicon-3d790b3e382c5c5d7167509177c07784a9b8324b90473d7eb43c83dc1967b97d.png)

## 二、启用插件

-   参考视频演示
-   添加 App Block 到产品页面

## 三、添加代码

### 调整按钮边框

-   Code access ~ Custom CSS

```css
button.wk-button.wk-align-center.wk-align-content-center.wk-full-width {
    border: 1px solid #000;
    margin-top: -15px;
}
```

复制

### 添加 Header 心形图标

-   分区 ~ header.liquid，搜索 `cart_url`

```html
<style>
  .wishlist-header-link .wkh-button {
	--icon-size: 22px;
    --icon-fill: transparent;
    --icon-stroke: #000000;
    --icon-stroke-width: 1px;
    --counter-size: 15px;
    display: flex;
    position: relative;
    padding: 16px 12px;   /* 如果感觉心形下垂偏低，改为：padding: 12px */
  }

  .wishlist-header-link .wkh-icon svg {
    display: block;
    width: var(--icon-size);
    height: var(--icon-size);
    overflow: visible;
    pointer-events: none;
  }
  
  .wishlist-header-link .wkh-icon svg path {
    fill: var(--icon-fill);
    stroke: var(--icon-stroke);
    stroke-width: var(--icon-stroke-width);
    vector-effect: non-scaling-stroke;
  }
  
  .wishlist-header-link .wkh-counter {
    opacity: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    min-width: var(--counter-size);
    height: var(--counter-size);
    border-radius: calc(var(--counter-size) / 2);
    font-size: 11px;
    line-height: 1;
    background: black;
    color: white;
    position:  absolute;
    top: 25px;
    right: 5px;
  }

  .wishlist-header-link .wkh-selected .wkh-counter {
    opacity: 1;
    transition: .2s opacity;
  }
</style>

<div class="wishlist-header-link">
  <a href class="wkh-button">
    <span class="wkh-icon">
      <svg viewBox="0 0 64 64">
        <path d="M32.012,59.616c-1.119-.521-2.365-1.141-3.707-1.859a79.264,79.264,0,0,1-11.694-7.614C6.316,42,.266,32.6.254,22.076,0.244,12.358,7.871,4.506,17.232,4.5a16.661,16.661,0,0,1,11.891,4.99l2.837,2.889,2.827-2.9a16.639,16.639,0,0,1,11.874-5.02h0c9.368-.01,17.008,7.815,17.021,17.539,0.015,10.533-6.022,19.96-16.312,28.128a79.314,79.314,0,0,1-11.661,7.63C34.369,58.472,33.127,59.094,32.012,59.616Z"><path>
      </svg>
    </span>
    <span class="wkh-counter">0</span>
  </a>
</div>
```

复制

### 动态心形图标

-   Code Access ~ Headless Wishlist Link

```javascript
export function inject({ theme }) {
  theme.watch(
    {
      selector: ".wishlist-header-link .wkh-button",
    },
    (target) => {
      theme.createHeadlessComponent("wishlist-link-headless", {
        host: target,
      });
    }
  );
}

export function define({ WishlistElementHeadless }) {
  return class WishlistLinkHeadless extends WishlistElementHeadless {
    getStateConfig() {
      return {
        wishlist: true,
      };
    }

    getWishlistUrl() {
      if (this.app.settings.loginRequired) {
        return this.app.routes.accountLoginUrl;
      }
      return this.app.routes.wishlistUrl;
    }

    updated() {
      const numItems = this.wishlist ? this.wishlist.numItems : 0;

      this.host.href = this.getWishlistUrl();
      this.host.classList.toggle("wkh-selected", numItems > 0);
      this.host.querySelector(".wkh-counter").innerText = numItems;
    }
  };
}
```

复制

## 四、设置项介绍

-   颜色
-   模式
-   添加收藏页到 Footer 菜单（可选）
-   悬浮图标（何时展示）
-   收藏页设置项：全部加购、移除心愿单、为空时的链接（Discover more）

## 五、翻译

在 Wishlist King 插件后台界面，Code Access ~ Translations 中，可以自定义显示的文字。

例如默认的是 "Add to Wishlist"（添加到心愿单） 和 "In Wishlist"（已加入心愿单），如果你想修改，可以自行改为对应的文字即可。

例如，In Wishlist 可以改为 Added to Wishlist