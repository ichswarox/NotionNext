---
title: "如何自定义Shopify订单确认页（Thank You Page）"
description: "学习如何通过在Shopify后台添加简单的脚本来自定义订单确认页（Thank You Page），无论是添加文字还是图片，都能轻松实现，提升客户体验。"
tags: [Shopify, 订单确认页, 用户体验]
slug: /shopify-customize-thank-you-page
---

Last updated: Sep 15 2025

![Thank You](https://images.unsplash.com/photo-1579546929518-9e396f3cc809?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80)

您可以自定义 Shopify 的订单确认页（Thank You Page）以增强客户的购买后体验。

:::tip

在您店铺后台的 **设置** > **结账** > **订单状态页面**，将以下内容粘贴到附加脚本框中。

:::

![Shopify 结账页面添加自定义代码](https://shopify2006.com/content/images/2022/05/image-9.png)

### 自定义内容示例

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
  <TabItem value="text" label="纯文字">
    <p>替换代码中的文字内容为您想要显示的信息。</p>
    ```javascript
    <script>
        Shopify.Checkout.OrderStatus.addContentBox(`<h2>这是想要显示的文字内容</h2>`)
    </script>
    ```
    ![修改 Shopify Thank you Page](https://shopify2006.com/content/images/2024/06/---Shopify-Thank-you-Page.webp)
  </TabItem>
  <TabItem value="image" label="显示图片">
    <p>替换 <code>src</code> 为您想要展示的图片链接。</p>
    ```javascript
    <script>
        Shopify.Checkout.OrderStatus.addContentBox(`<img src="https://shopify2006.com/content/images/2024/06/---Shopify-Thank-you-Page.webp" alt="Thank You Image" /> `)
    </script>
    ```
  </TabItem>
</Tabs>
