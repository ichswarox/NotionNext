---
title: "第 207 期 让客户在 Shopify 产品系列页面快速筛选出促销商品"
description: "本期教程分享如何在 Shopify 产品系列中添加促销商品的筛选条件，方便客户快速筛选出正在促销/搞活动/特价的商品，提高店铺订单转化率。"
keywords: ["Shopify", "产品系列", "促销商品", "筛选条件", "元字段", "Search & Discovery"]
slug: /shopify-sale-products-filter
---

# 第 207 期 让客户在 Shopify 产品系列页面快速筛选出促销商品

[Shopify 店铺运营](https://shopify2006.com/tag/shopify-dian-pu-yun-ying/)

更新于 2024-12-02

[通过 YouTube 观看本期 Shopify 教程](https://youtu.be/9k24O-wVCqA?feature=shared)

本期教程分享如何在 Shopify 产品系列中添加促销商品的筛选条件，方便客户快速筛选出正在促销/搞活动/特价的商品，提高店铺订单转化率。

同时，通过本期内容，你还将学会：（举一反三，可用于其他问题的解决）

-   如何创建元字段
-   如何筛选和批量编辑产品（本期演示批量设置或修改元字段）
-   如何将元字段设置为筛选条件

## 相关内容

本期教程的灵感来源于 [Shopify 问答社区中的粉丝提问](https://club.shopify2006.com/forum-post/814.html)。

关于 Shopify 产品系列筛选，在之前的教程中我已经分享了 [如何在 Shopify 产品系列筛选中展示 Color Swatch 色块](https://shopify2006.com/using-color-swatch-as-shopify-collection-filter/)，提供更加直观的视觉效果。

那一期内容是使用 元对象 + 元字段实现的，而本期教程只需要使用元字段。接下来开始讲解操作步骤，具体细节请参考视频演示。

## 一、创建元字段

点击 Shopify 店铺后台设置 ~ 自定义数据 ~ 产品 ~ 添加定义：

名称可以填写 On Sale 或者其他，这个名称会显示在产品系列筛选条件中。

注意：类型选择：true 或 false

其他不用修改或设置，点击保存即可。

![创建元字段](https://shopify2006.com/content/images/2024/05/-----.webp)

## 二、筛选出促销商品

点击店铺后台 ~ 产品 ~ 产品系列 ~ 创建产品系列

输入标题之后，产品系列类型选择自动，筛选条件选择：原价 - 不为空，以及 原价 ~ 大于 1，点击保存即可。

![创建自动化产品系列](https://shopify2006.com/content/images/2024/05/---------.webp)

## 三、批量编辑筛选出的商品

进入店铺后台 ~ 产品 ~ 点击右侧 搜索和筛选 图标（或者按 F 键），点击添加筛选条件，点击 “收藏”，然后选择上一步创建的促销商品产品系列。

勾选全部筛选出的商品，点击 “批量编辑”，进入批量编辑产品界面。

![批量编辑筛选出的商品](https://shopify2006.com/content/images/2024/05/-----------1.webp)

## 四、批量设置元字段

进入产品批量编辑界面之后，点击右上角 “列”，往下滚动勾选用于筛选促销商品的元字段。

将第一款产品的值设置为 True，往下滚动到底部，按住 Shift 键，点击最后一款产品的值，然后按 CV 复制粘贴即可全部批量设置为 True，设置之后点击保存即可。

![批量设置或修改元字段](https://shopify2006.com/content/images/2024/05/-----------2.webp)

## 五、添加元字段作为筛选条件

进入 [Shopify 官方的 Search & Discovery App](https://apps.shopify.com/search-and-discovery)，点击 筛选条件 ~ 添加筛选条件 ~ 源：选择元字段 On Sale，保存即可。

![Shopify 店铺添加筛选条件](https://shopify2006.com/content/images/2024/05/Shopify---------.webp)

![保存元字段作为筛选条件](https://shopify2006.com/content/images/2024/05/-----------.webp)

## 结语和提示

Search & Discovery App 中可以拖动对产品系列筛选条件进行排序。

如果想让 Shopify 产品系列的筛选条件展示在侧面，而不是水平展示，在店铺后台编辑器中切换到产品系列页面，点击产品网格，滚动到 台式设备筛选布局，设置为 垂直 即可。

![将 Shopify 产品系列筛选条件展示在侧面](https://shopify2006.com/content/images/2024/05/--Shopify--------------.webp)

当然了，本期内容使用的元字段类型是 "true 或 false"，其实使用单行文本类型也是可以的，比如像上方问答社区提问帖中的参考网站，他们筛选条件的名称是 Price Discounts，选项值是 On Sale，这种实现起来的原理也是一样的。

![](https://shopify2006.com/assets/built/shopify2006.ico?v=b9abf3428e)