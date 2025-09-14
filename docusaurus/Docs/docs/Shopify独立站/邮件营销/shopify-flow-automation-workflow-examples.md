---
title: "第 194 期 使用 Shopify Flow 自动化高效处理工作流程 用法示例 无需代码"
description: "介绍如何使用 Shopify Flow 自动化工具高效处理工作流程，提供用法示例，无需编写代码"
keywords: ["Shopify", "Flow自动化", "工作流程", "无需代码", "Shopify Plus"]
slug: /shopify-flow-automation-workflow-examples
---

# 第 194 期 使用 Shopify Flow 自动化高效处理工作流程 用法示例 无需代码

[Shopify 店铺运营](https://shopify2006.com/tag/shopify-dian-pu-yun-ying/)

更新于 2024-12-02

[通过 YouTube 观看本期 Shopify 教程](https://youtu.be/Ji8K35uslJs?si=jWOqwHXVkgArZEV8)

## 上期回顾

[第 193 期 Shopify Plus 是什么? 相比三种常规店铺套餐有什么功能和优势](https://www.bilibili.com/video/BV1AN4y1t7mq/?share_source=copy_web)

## 一、介绍

什么是 Shopify Flow? 类似于 Zapier 和 IFTTT，Shopify 也有自己的自动化操作流程工具，就是本期将要介绍的 Shopify Flow。

它可以帮你处理重复性的，或者可以自动化操作的工作内容。

## 二、特点

简单易用，无需编辑代码。

主要包括三个关键点：触发器（Trigger）、条件、执行操作（Action）

帮助理解：**如果满足 A 条件，就执行 B 操作**

当触发器被使用时，关联的App 或店铺后台会发送数据到 Flow；当执行操作时，Flow 会发送数据到关联的 App 或店铺后台。

## 三、可用性

以前 Shopify Flow 只对高级版套餐开放，不对基础版套餐开放，现在三种常规套餐都可以使用 Flow，如果要使用 Custom App（大部分店铺都不会使用的自定义应用） 关联 Flow，需要 [Shopify Plus 套餐](https://shopify2006.com/what-is-shopify-plus-store/)。

## 四、模板用法示例（参考视频演示）

### 类别：风险

-   自动取消高风险订单并恢复商品库存（Cancel and restock high risk orders）

### 类别：客户

-   根据下单次数对客户进行分级添加标签（Organize customers by order count tiers）

### 类别：库存和商品

-   当商品库存较低时接收通知（Get notified by email when product variant inventory is low）
-   每天定期发送缺货商品，提醒补货（Send daily email summary with out of stock products）
-   基于库存隐藏和显示商品（Hide and republish products based on inventory level）

往期相关教程：[Shopify 店铺设置缺货商品到货邮件提醒与收集客户邮箱](https://shopify2006.com/shopify-sold-out-items-back-in-stock-email-reminder/)

![Shopify Flow Templates 模板库](https://shopify2006.com/content/images/2024/01/Shopify-Flow----.webp)

## 五、手动创建 Flow

除了使用 Shopify 提供的 Flow 模板，也可以根据自己的需求手动创建 Shopify Flow 工作流。

### 收到差评后发送提醒（示例）

创建工作流 ~ 选择触发器 ~ 选择 Trigger 为 Loox ~ 设置条件（评论星级低于 4 或 5）~ 设置 Action（发送邮件通知）

![](https://shopify2006.com/assets/built/shopify2006.ico?v=2ea66c62ff)