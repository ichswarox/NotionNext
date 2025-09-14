---
title: "第 191 期 Shopify 如何基于国家或地区展示不同内容 多场景用法示例"
description: "介绍如何在 Shopify 中基于国家或地区展示不同内容，提供多场景用法示例，包括隐藏商品和自定义显示内容"
keywords: ["Shopify", "国家地区", "内容展示", "多场景", "localization"]
slug: /shopify-country-region-based-content-display
---

# 第 191 期 Shopify 如何基于国家或地区展示不同内容 多场景用法示例

[Shopify 店铺运营](https://shopify2006.com/tag/shopify-dian-pu-yun-ying/)

更新于 2024-12-02

[通过 YouTube 观看本期 Shopify 教程](https://youtu.be/Wj-tPzI95wM?si=f7EMS-AWfpv5QWQM)

## 增强版主题功能介绍站

[第 192 期 Shopify 增强版主题功能介绍网站上线 支持搜索和登录评论或提问](https://www.bilibili.com/video/BV1Z64y1p7ss/?share_source=copy_web)

## 上期回顾

[第 190 期 狂拽酷炫 Shopify 滚动文字公告跑马灯功能 支持多项自定义设置](https://www.bilibili.com/video/BV1CC4y1c7FD/?share_source=copy_web)

## 本期内容

本期教程将要分享的内容可用于以下场景：

a. 针对不同国家或地区的访客展示不同内容，例如有些节假日只有特定国家才有，可以对特定国家的访客展示欢迎/祝福语，或提供节日相关的折扣码。

b. 对特定国家的访客隐藏某些商品（尽管也可以通过设置运费规则让特定国家或地区的客户无法结账，但某些场景下直接隐藏商品，而不是等到结账的时候才发现买不了，用户体验会更好）

c. 基于国家或地区改变产品页面（或其他页面）的显示内容

总的来说，主要用到 Shopify 的 localization 对象：

```liquid
localization.country.iso_code
```

复制

测试此代码需要在 Announcement Bar（公告栏）或者 Header 中启用国家和地区选择器，配合 Shopify Payments 使用更佳。

![Shopify 国家或地区选择器](https://shopify2006.com/content/images/2023/12/Shopify---------.webp)

接下来演示实际场景和参考代码

## 产品页基于地区显示

额外提示：如需针对不同国家或地区进行商品单独定价，可在店铺后台设置 ~ 市场 中操作。

![Shopify 商品不对特定国家出售](https://shopify2006.com/content/images/2023/12/Shopify-----------.webp)

参考代码：

![Shopify 店铺对加拿大客户隐藏购买按钮](https://shopify2006.com/content/images/2023/12/Shopify---------------.webp)

此处只是简单演示，可进一步操作，例如展示自定义按钮并禁用购买。

## 针对特定国家隐藏商品

原产品系列截图：

![Shopify Featured Collection](https://shopify2006.com/content/images/2023/12/Shopify-Featured-Collection.webp)

在店铺后台设置产品 Tag：

![Shopify 产品添加 Tags](https://shopify2006.com/content/images/2023/12/Shopify------Tags.webp)

修改后，原第一款产品已隐藏：

![Shopify 对特定国家隐藏商品](https://shopify2006.com/content/images/2023/12/Shopify----------.webp)

参考代码（仅对 CA 访客隐藏包含指定 Tag 的商品）：

![对特定国家的 Shopify 客户隐藏商品](https://shopify2006.com/content/images/2023/12/-------Shopify-------.webp)

## 在页面上显示跟访客地区相关的内容

比如标题自动变成：Featured products for Canadian

![Shopify Featured Collection for Specific Country](https://shopify2006.com/content/images/2023/12/Shopify-Featured-Collection-for-Specific-Country.webp)