---
title: "Shopify店铺如何通过屏蔽中文浏览器来防范同行访问"
description: "通过一段简单的代码，屏蔽中文浏览器，有效降低国内同行访问你的Shopify店铺，保护你的选品和运营策略。"
tags: [Shopify, 电商运营, 安全防护]
slug: /shopify-block-chinese-browsers
---

Last updated: Sep 15 2025

![Shopify Security](https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1769&q=80)

通过屏蔽中文浏览器，可以有效降低国内同行访问您的 Shopify 店铺，从而保护您的商业信息。

将以下代码粘贴到 `layout/theme.liquid` 文件的 `</head>` 标签之前：

```liquid title="theme.liquid"
{% `if request.design_mode == false` %}
    <script type="text/javascript">
    if (navigator.language)
    var language = navigator.language;
    else
    var language = navigator.browserLanguage;
    if(language.indexOf('zh') > -1)document.location.href = 'https://shopify2006.com/unavailable-page/';
    </script>
{% `endif` %}
