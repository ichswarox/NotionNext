---
title: "PayPal沙盒测试教程：在WooCommerce中模拟支付流程"
description: "本篇PayPal沙盒测试教程，帮助你利用沙盒账号模拟网站用户下单支付以及收款，测试支付功能的完整性和可靠性。"
tags: [PayPal, 沙盒测试, WooCommerce, 支付流程, 电商]
slug: /paypal-sandbox-tutorial
---

<sup>更新时间: Oct 15, 2025</sup>

![PayPal沙盒测试教程：在WooCommerce中模拟支付流程](https://website-custom.com/wp-content/uploads/2025/05/PayPal沙盒测试.webp)

## PayPal沙盒测试介绍

PayPal沙盒测试（PayPal Sandbox）是PayPal官方提供的一个虚拟测试环境，允许开发者在不涉及真实资金交易的情况下，模拟和测试各种支付流程和 API 接口。

该环境与真实的PayPal生产环境高度相似，支持大多数功能，适用于开发、调试和验证支付集成的各个环节。

### 沙盒测试的优势

- 安全性高：所有测试交易均为虚拟操作，不涉及真实资金，避免了潜在的财务风险。
- 功能全面：支持支付、退款、部分退款、拒付、账户保存等多种场景，覆盖大多数真实交易流程。
- 模拟真实环境：沙盒环境与生产环境高度一致，包括 API 接口、支付流程和错误处理机制，有助于提前发现和解决潜在问题。
- 多账户测试：可以创建多个买家和卖家账户，模拟不同国家、币种和用户角色的交易场景，满足复杂测试需求。

本次教程中，使用的PayPal插件的作者是WooCommerce官方：

:::tip
[WooCommerce PayPal Payments](https://wordpress.org/plugins/woocommerce-paypal-payments/)。
:::

## 开启PayPal插件的沙盒测试功能

### 断开真实PayPal账户连接

点击进入PayPal插件的Settings界面：

![断开PayPal插件和账户的链接](https://website-custom.com/wp-content/uploads/2025/05/PayPal沙盒测试.webp)

点击Connection status下方的**Disconnect**按钮。

![断开PayPal插件和账户的链接](https://website-custom.com/wp-content/uploads/2025/05/PayPal沙盒测试.webp)

接着在弹框中点击"Disconnect"按钮。

之后会自动跳转到插件的初始界面：

### 开启PayPal插件的沙盒模式

![回到PayPal插件原始界面](https://website-custom.com/wp-content/uploads/2025/05/PayPal沙盒测试.webp)

在回到初始界面后，页面向下滚动到底部。

![开启PayPal插件的沙盒测试](https://website-custom.com/wp-content/uploads/2025/05/PayPal沙盒测试.webp)

打开高级设置，并**开启沙盒模式**。

点击Connect Account后会弹出PayPal登录框，这个时候先不要急登录，我们**先去获取沙盒账号**。

## PayPal开发者中心和沙盒账号

我们需要先进入[PayPal开发者中心](https://developer.paypal.com/home/)。

![登录PayPal开发者中心](https://website-custom.com/wp-content/uploads/2025/05/PayPal沙盒测试.webp)

使用你的PayPal账号**登录开发者中心**。

![在PayPal开发者中心点击进入沙盒账户界面](https://website-custom.com/wp-content/uploads/2025/05/PayPal沙盒测试.webp)

点击"**Testing Tools – Sandbox Accounts**"进入沙盒账户页面。

![PayPal开发者中心默认生成的连个沙盒账户](https://website-custom.com/wp-content/uploads/2025/05/PayPal沙盒测试.webp)

进入沙盒账户页面后，会看到两个默认生成的沙盒账户，一个是商业账户，另一个是个人账户，国家都是C2（中国）。

这时候我们还需要再创建一个沙盒账户：

![创建PayPal沙盒账户](https://website-custom.com/wp-content/uploads/2025/05/PayPal沙盒测试.webp)

新创建的沙盒账户类型尽量选择Personal（个人），国家必须选择除中国以外的国家，因为PayPal中国账户之间不能相互转账。

![要用到2个沙盒账户](https://website-custom.com/wp-content/uploads/2025/05/PayPal沙盒测试.webp)

之后我们会用到两个沙盒账户，一个是默认的C2商业账户（用作测试商户收款），一个是新建的US个人账户（用作测试买家购买支付）。

依次点击账户邮箱，进入到沙盒账户信息页面：

![记录沙盒账户信息](https://website-custom.com/wp-content/uploads/2025/05/PayPal沙盒测试.webp)

分别保存这两个接下来要用到的沙盒账户信息。

然后回到PayPal设置界面。

## PayPal插件连接沙盒账号

回到PayPal插件的设置页面后，可以开始连接PayPal沙盒账号了（上面讲到的，插件初始界面底部，开启沙盒模式，然后点击链接沙盒账户）：

![输入沙盒账号，链接插件](https://website-custom.com/wp-content/uploads/2025/05/PayPal沙盒测试.webp)

输入刚刚保存的C2商业沙盒账户的账号和密码，用作收款。

![沙盒账户连接成功](https://website-custom.com/wp-content/uploads/2025/05/PayPal沙盒测试.webp)

如上图所示，表示沙盒账户连接成功。

这时候点击插件界面Settings选项卡，可以在该界面看到账户的状态是"Business | Sandbox"：

![插件状态发生变化](https://website-custom.com/wp-content/uploads/2025/05/PayPal沙盒测试.webp)

接下来我们就可以使用另一个沙盒账号，模拟用户进行下单、付款。

## 使用PayPal沙盒账号模拟支付

这时候，我们新打开一个网页，模仿一个正常的用户，在网站上**浏览产品 – 添加购物车 – 最后点击PayPal按钮**结账：

![在网站下单产品并登录沙盒账号](https://website-custom.com/wp-content/uploads/2025/05/PayPal沙盒测试.webp)

在弹出PayPal登录框的时候，输入另一个US的个人类型沙盒账号进行登录。

![使用沙盒账号进行支付](https://website-custom.com/wp-content/uploads/2025/05/PayPal沙盒测试.webp)

登录后进行支付（可以成功支付就代表各环节没有问题）。

支付完成后，就可以在WooCommerce – 订单 界面看到刚刚我们自己模拟下单的订单：

![WooCommerce成功接收到订单](https://website-custom.com/wp-content/uploads/2025/05/PayPal沙盒测试.webp)

![订单详情](https://website-custom.com/wp-content/uploads/2025/05/PayPal沙盒测试.webp)

我们成功使用了PayPal沙盒账号进行了收款和支付（可以打开[PayPal沙盒账号登录网站](https://sandbox.paypal.com/us/home)，使用C2沙盒收款账号登录，查看到账情况）。

支付和收款环节没问题，之后我们就可以将沙盒账户断开连接：

![断开沙盒账户连接](https://website-custom.com/wp-content/uploads/2025/05/PayPal沙盒测试.webp)

断开沙盒账号后，再正常[使用PayPal插件连接PayPal账户](https://website-custom.com/woocommerce-paypal/)，用作网站以后真实收款。

以上就是使用PayPal沙盒账户测试网站支付的全部内容。

## 下载资源

| 资源名称 | 下载链接 | 说明 |
|---------|----------|------|
| WooCommerce PayPal Payments | [WordPress.org](https://wordpress.org/plugins/woocommerce-paypal-payments/) | WooCommerce官方PayPal支付插件 |
| WooCommerce | [WordPress.org](https://wordpress.org/plugins/woocommerce/) | 免费的电商插件 |
