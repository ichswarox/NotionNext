---
title: "如何免费为您的Shopify店铺创建物流智能查询页面"
description: "无需插件，只需一段简单的HTML代码，即可在您的Shopify店铺中创建一个实用、简约的物流查询页面，方便客户轻松追踪他们的包裹。"
tags: [Shopify, 物流查询, 用户体验]
slug: /shopify-create-free-tracking-page
---

Last updated: Sep 15 2025

![Tracking](https://images.unsplash.com/photo-1585713181935-d5f622cc261b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80)

您可以在您的 Shopify 店铺中免费创建一个简约而实用的物流查询页面，方便客户追踪他们的包裹。

将以下 HTML 代码粘贴到您想要显示查询功能的页面的内容编辑器中（请确保切换到 HTML 视图）：

```html
<div class="page-width">
    <p style="color: orange;">💖 请在下方粘贴您的<span style="text-decoration: underline;">运单号</span>：</p>
    <p><input style="border: groove 1px;" type="text" id="tracking" name="tracking" placeholder=" 在此粘贴，然后点击 →"> <input type="button" name="submit" value="立即追踪" onclick="window.location.replace('https://www.aftership.com/track/'+tracking.value);"></p>
    <p><span>🚚</span> 您可以从订单详情或通知邮件中复制运单号。</p>
</div>
```

:::info

这段代码会创建一个输入框和一个按钮，客户输入运单号后，点击按钮即可跳转到 AfterShip 的查询页面查看物流信息。

:::
