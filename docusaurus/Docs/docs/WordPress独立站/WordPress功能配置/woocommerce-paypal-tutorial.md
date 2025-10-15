---
title: "WooCommerce对接PayPal支付插件完整指南"
description: "本篇文章详细讲解WooCommerce对接PayPal支付流程，设置PayPal支付按钮显示在哪些页面及显示样式。"
tags: [WooCommerce, PayPal, 支付插件, 电商, WordPress]
slug: /woocommerce-paypal-tutorial
---

<sup>更新时间: Oct 15, 2025</sup>

![WooCommerce对接PayPal支付插件及PayPal沙盒测试教程](https://website-custom.com/wp-content/uploads/2025/04/online-payments.webp)

## 安装PayPal插件

首先，在WP后台插件安装界面，搜索[WooCommerce PayPal Payments](https://wordpress.org/plugins/woocommerce-paypal-payments/)：

![安装PayPal插件](https://website-custom.com/wp-content/uploads/2025/04/online-payments.webp)

:::tip
安装并启用该插件。
:::

## WooCommerce对接PayPal插件

之后打开WooCommerce设置界面，进入付款设置：

![打开WooCommerce设置 - 支付设置界面](https://website-custom.com/wp-content/uploads/2025/04/online-payments.webp)

点击付款设置界面下PayPal对应的设置按钮。

进入PayPal插件的账户关联界面：

![链接PayPal账户](https://website-custom.com/wp-content/uploads/2025/04/online-payments.webp)

点击Activate PayPal Payments按钮，进行PayPal插件设置：

![PayPal设置Choose your account type为Business](https://website-custom.com/wp-content/uploads/2025/04/online-payments.webp)

Choose your account type，建议选择关联企业账户，也就是"Business"账户。

:::info 企业账户优势
将WooCommerce商店关联到**PayPal企业账户**（Business Account）相较于个人账户（Personal Account），在跨境电商收款方面具有多项优势：

**1.更高的收款限额**  
PayPal企业账户每月可收款上限达到100万美元，远高于个人账户的2.5万美元限制。

**2.接受多种付款方式**  
企业账户支持接收客户通过 PayPal 余额、信用卡、借记卡和银行账户等多种方式的付款，提升客户支付的便利性。

**3.专业的商业工具**  
企业账户提供发票管理、批量付款、多币种交易、财务报告等功能，便于企业进行财务管理和运营分析。

**4.多用户访问权限**  
企业账户还允许最多00名员工以受限权限访问账户，方便团队协作和权限管理。

**5.提升品牌形象**  
使用企业账户可以以公司名义进行交易，增强客户对品牌的信任感和专业度。
:::

产品类型选择：Physical Goods

![Add Credit and Debit Cards设置](https://website-custom.com/wp-content/uploads/2025/04/online-payments.webp)

Add Credit and Debit Cards选择第一个。

## 关联PayPal账户

![点击关联PayPal账户](https://website-custom.com/wp-content/uploads/2025/04/online-payments.webp)

然后点击"Connect to PayPal"关联PayPal账户。

在自动弹出的界面进行PayPal账号登录，如果你没有账户会为你直接创建PayPal账户：

![登录PayPal](https://website-custom.com/wp-content/uploads/2025/04/online-payments.webp)

![登录PayPal](https://website-custom.com/wp-content/uploads/2025/04/online-payments.webp)

登录成功后会有提示：

![关联成功](https://website-custom.com/wp-content/uploads/2025/04/online-payments.webp)

这样就是关联好了PayPal，点击返回WooCommerce即可。

## PayPal插件设置

回到PayPal插件界面后，点击"Payment Methods"：

![PayPal插件支付方式设置](https://website-custom.com/wp-content/uploads/2025/04/online-payments.webp)

可以在该界面选择开启哪些支付方式。

进入Styling设置界面，可以控制PayPal支付按钮的在哪些页面显示，以及按钮的样式：

![PayPal插件样式设置](https://website-custom.com/wp-content/uploads/2025/04/online-payments.webp)

设置完成后记得点击右上角的保存按钮。

这样其实**已经成功为WordPress网站对接了PayPal支付功能**，可以正常接收买家的下单、付款。

但是支付是比较重要功能，不容出错，为了安全起见，我们**还要进行PayPal沙盒测试**，也就是模拟真实用户在网站进行下单：

以上就是WooCommerce集成PayPal支付的完整流程。

## 下载资源

| 资源名称 | 下载链接 | 说明 |
|---------|----------|------|
| WooCommerce PayPal Payments | [WordPress.org](https://wordpress.org/plugins/woocommerce-paypal-payments/) | WooCommerce官方PayPal支付插件 |
| WooCommerce | [WordPress.org](https://wordpress.org/plugins/woocommerce/) | 免费的电商插件 |
