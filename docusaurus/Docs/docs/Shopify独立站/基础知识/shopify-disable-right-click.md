    ---
title: "Shopify店铺如何屏蔽鼠标右键以防止内容被复制"
description: "通过简单的代码，在Shopify店铺中屏蔽鼠标右键，有效减少图片被盗和内容被复制的风险，保护您的原创内容和商业利益。"
tags: [Shopify, 电商运营, 内容保护]
slug: /shopify-disable-right-click
---

Last updated: Sep 15 2025

![Shopify Security](https://images.unsplash.com/photo-1600106905383-a11b433a2e4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80)

通过禁用鼠标右键，可以有效减少 Shopify 店铺图片和内容被盗用的几率。

将以下代码添加到 `layout/theme.liquid` 文件的 `</body>` 标签之前：

```javascript title="theme.liquid"
<script>
	window.oncontextmenu = function () { return false; }
</script>
