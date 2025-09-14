---
title: "第 205 期 Shopify 店铺组合折扣码的创建和使用方法"
description: "Shopify 对折扣码功能进行升级改版之后，目前已经可以直接在店铺后台创建折扣码时勾选跟其他折扣进行组合使用了。折扣码组合功能为 Shopify 商家提供了更大的自由度。"
keywords: ["Shopify", "折扣码", "组合折扣", "促销", "营销"]
slug: /shopify-combined-discounts
---

# 第 205 期 Shopify 店铺组合折扣码的创建和使用方法

[Shopify 店铺运营](https://shopify2006.com/tag/shopify-dian-pu-yun-ying/)

更新于 2024-12-02

[通过 YouTube 观看本期 Shopify 教程](https://youtu.be/PvtX1TPC7jM?feature=shared)

## 往期回顾

[第 203 期 物流查询功能演示 两种服务商可供选择 After Ship/17Track](https://www.bilibili.com/video/BV1TD421n79j/?share_source=copy_web)

[第 204 期 Shopify 多变体批量加购功能演示及动态替换更新预告](https://www.bilibili.com/video/BV1Wf421S772/?share_source=copy_web)

## 前言

在两三年前 Shopify 还不支持在结账时使用多个折扣码进行组合的时候，一种 “曲线救国” 的方式是使用折扣码 + 礼品卡叠加。不过操作起来比较麻烦。

Shopify 对折扣码功能进行升级改版之后，目前已经可以直接在店铺后台创建折扣码时勾选 跟其他折扣进行组合使用 了。

折扣码组合功能为 Shopify 商家提供了更大的自由度，例如可以在全店通用折扣的基础上，通过 [EDM 用户分层](https://shopify2006.com/shopify-edm-series-of-tutorials/)，对特定客户发送额外的 VIP 折扣，以提供更大的折扣比例。

![创建折扣组合](https://shopify2006.com/content/images/2024/05/------.webp)

## 折扣类型

当进入 Shopify 店铺后台，点击左侧 折扣 ~ 创建折扣 时，弹窗显示有四种折扣类型可选，但从右侧可以看出，它们其实属于三种折扣类型，分别是：产品折扣、订单折扣、运费折扣。

![Shopify 店铺折扣类型](https://shopify2006.com/content/images/2024/05/Shopify-------.webp)

顾名思义，名称即为其用途。产品折扣是对产品金额进行打折，可以设置对特定产品或产品系列生效；订单折扣是对整个订单总金额进行打折；而运费折扣则为对运费进行减免。

温馨提示：如果想让产品折扣码对所有产品生效，手动创建一个产品系列，命名为 All Products，产品系列类型选择 自动，筛选条件选择价格大于 1，保存即可将所有产品包括进去。

## 折扣组合的类型

上方已经介绍了折扣的类型，接下来介绍折扣组合的类型，也就是允许进行两两组合的折扣类型有哪些。

根据 Shopify 官方的介绍，有五种类型的折扣组合：

-   订单折扣和免运费折扣
-   产品折扣和免运费折扣
-   产品折扣和其他产品折扣
-   产品折扣和订单折扣
-   订单折扣和其他订单折扣

看上去有点多，初次接触可能不好理解。首先，后两种组合类型除了启用了 checkout.liquid 的 Shopify Plus 店铺之外，绝大部分店铺都可用（包括 2024 年之后 [新加入 Shopify Plus](https://shopify2006.com/what-is-shopify-plus-store/) 的店铺）。

进一步说明，上方的组合其实就是三种折扣类型的三种组合（A 和 B，A 和 C，B 和 C。即使更换前后顺序也是等效，所以只有三种），以及另外两种组合，分别是：产品折扣码和另一个产品折扣码、订单折扣码和另一个订单折扣码。所以一共有五种组合。理解了这段话，再去看文档或者实际操作，会简单很多。

为了便于大家理解，我会在视频中进一步演示创建和使用的过程。

## 注意事项

-   若要向订单应用多个折扣，则每个折扣的设置中都必须允许组合。
-   结账时，产品折扣在计算订单小计之前应用。这意味着先应用产品折扣，然后在基于小计应用订单折扣。例如：使用产品折扣之后优惠完的金额是 100 美元，再使用 10% 订单折扣，优惠之后的顾客需支付的金额为 90 美元。
-   同时使用多个折扣码时，不论是否能够组合使用，系统会应用优惠力度最大的折扣。

## 折扣组合示例

![折扣组合示例](https://shopify2006.com/content/images/2024/05/-------1.webp)

## 参考链接

[官方文档链接](https://help.shopify.com/zh-CN/manual/discounts/combining-discounts/discount-combinations)

[更多示例](https://help.shopify.com/zh-CN/manual/discounts/combining-discounts/examples)

## Shopify 增强版主题

![](https://shopify2006.com/assets/built/shopify2006.ico?v=b9abf3428e)