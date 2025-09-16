---
title: "Shopify 缺货商品到货邮件提醒设置 第 113 期"
description: "学习如何在 Shopify 店铺设置缺货商品到货邮件提醒功能，提高店铺订单量，提升销售额，并和客户保持联系。"
keywords: ["Shopify", "缺货提醒", "邮件营销", "Klaviyo", "库存管理", "Shopify 教程"]
slug: /shopify-back-in-stock-email-reminder
---

# Shopify 店铺设置缺货商品到货邮件提醒与收集客户邮箱

## Shopify 教程目录

- [Shopify 中文教程之开门见山](https://shopify2006.com/docs/)
  
### 渐入佳境

- [Shopify 2025 新手视频教程 必看](https://shopify2006.com/shopify-2025-xin-shou-shi-pin-jiao-cheng/)
- [第 135 期 零基础 Shopify 网页修改教程 常用方法演示 优化店铺必看](https://shopify2006.com/how-to-modify-elements-on-your-shopify-store/)
- [经常被问到的 Shopify 相关问题](https://shopify2006.com/frequently-asked-questions-about-shopify/)
- [Shopify 建站手册 新手系列教程](https://shopify2006.com/shopify-tutorial-for-beginners/)
- [第 196 期 免费在 Shopify 店铺上开启 PayPal 储蓄卡/信用卡支付](https://shopify2006.com/paypal-card-checkout-for-shopify/)

### 融会贯通

- [第 215 期 Shopify 元对象使用示例 设置动态免邮提醒](https://shopify2006.com/shopify-free-shipping-indicator/)
- [第 229 期 Shopify 常见元字段类型的用法汇总和案例讲解](https://shopify2006.com/shopify-metafields-explained/)
- [第 200 期 在 Shopify 产品系列筛选中展示 Color Swatch 色块](https://shopify2006.com/using-color-swatch-as-shopify-collection-filter/)
- [第 165 期 Shopify 添加产品系列商品自定义 Sale Tag 促销折扣标签](https://shopify2006.com/custom-sale-tags-for-shopify-theme/)

### 精益求精

- [Shopify 2025 主题原理讲解和 8 个文件夹解析](https://shopify2006.com/shopify-theme-code-explained/)
- [Shopify 弹窗购物车中直接使用折扣码快速结账的实现原理](https://shopify2006.com/shopify-cart-discount-checkout/)
- [第 220 期 关联多款 Shopify 产品实现组合 Listing](https://shopify2006.com/binding-shopify-products-via-tags/)
- [Shopify 产品系列点击加载更多并提示已展示商品数量](https://shopify2006.com/click-to-load-more-product-on-shopify-collection-pages/)

### 得心应手

- [Shopify 必装插件 Apps 合集](https://shopify2006.com/the-must-have-shopify-apps/)
- [Shopify 跨境百宝箱 常用工具汇总](https://shopify2006.com/shopify-apps-and-tools/)
- [第 217 期 判断 Shopify 店铺 检测主题和插件的方法 竞对网站分析](https://shopify2006.com/detect-shopify-site-and-themes-or-apps/)
- [第 113 期 Shopify 店铺设置缺货商品到货邮件提醒与收集客户邮箱](https://shopify2006.com/shopify-sold-out-items-back-in-stock-email-reminder/)

## Shopify 缺货商品到货邮件提醒设置

得心应手

[通过 Bilibili 观看本期 Shopify 教程](https://www.bilibili.com/video/BV1Da411C7q4/?share_source=copy_web)
[通过 Youtube 观看本期 Shopify 教程](https://youtu.be/o4qzcIDnju0?feature=shared)

通过添加缺货商品到货提醒功能，可以在商品到货后提醒客户下单，提高店铺订单量，提升销售额，并和客户保持联系。

[点击这里立即注册和使用](https://www.klaviyo.com/partner/signup?utm_source=0013o00002UZt9P&utm_medium=partner)

---

```javascript
<script src="https://a.klaviyo.com/media/js/onsite/onsite.js"></script>
<script>
    var klaviyo = klaviyo || [];
    klaviyo.init({
      account: "你的 PUBLIC_API_KEY",
      //list: "你的 Klaviyo List ID",
      platform: "shopify"
    });
    klaviyo.enable("backinstock",{ 
    trigger: {
      product_page_text: "Notify Me When Available",
      product_page_class: "btn",
      product_page_text_align: "center",
      product_page_margin: "0px",
      replace_anchor: true
    },
    modal: {
     headline: "{product_name}",
     //newsletter_subscribe_label: "Add me to your email list.",
     //subscribe_checked: false,
     body_content: "Register to receive a notification when this item comes back in stock.",
     email_field_label: "Email",
     button_label: "Notify me when available",
     subscription_success_label: "You're in! We'll let you know when it's back.",
     footer_content: '',
     additional_styles: "@import url('https://fonts.googleapis.com/css?family=Helvetica+Neue');",
     drop_background_color: "#000",
     background_color: "#fff",
     text_color: "#222",
     button_text_color: "#fff",
     button_background_color: "#439fdb",
     close_button_color: "#ccc",
     error_background_color: "#fcd6d7",
     error_text_color: "#C72E2F",
     success_background_color: "#d3efcd",
     success_text_color: "#1B9500"
    }
  });
</script>
```

复制

## 提示：

1. 商品需要设置跟踪库存、缺货后停止销售
2. 如何查找 PUBLIC_API_KEY
3. product_page_class：你的主题按钮 class
4. 如何查找 List ID
5. replace_anchor: 是否替换 Sold out 按钮
6. subscribe_checked: 是否默认加入订阅列表

![](https://shopify2006.com/content/images/icon/shopify2006-8.ico)

![](https://shopify2006.com/assets/built/shopify2006.ico?v=1283176712)

## Klaviyo 官方文档（可不看）：

1. [设置 Flow](https://help.klaviyo.com/hc/en-us/articles/115003872251)
2. [按钮安装教程](https://help.klaviyo.com/hc/en-us/articles/360001895651-How-to-Install-Back-in-Stock-for-Shopify)

[上一篇 - 得心应手 第 217 期 判断 Shopify 店铺 检测主题和插件的方法 竞对网站分析](https://shopify2006.com/detect-shopify-site-and-themes-or-apps/)
[下一篇](#)

## 本页目录