---
title: "第 222 期 编辑 Shopify 语言文件修改结账等页面"
description: "修改 Shopify 网站内容的方式，除了直接在编辑器中修改模块设置项和编辑主题代码之外，还有一种方式就是编辑默认模板内容，它常用于修改 Shopify 店铺中的固定内容，例如提示语、Label 标签等。"
keywords: ["Shopify", "语言文件", "结账页面", "模板内容", "主题编辑"]
slug: /shopify-language-file-editing
---

# 第 222 期 编辑 Shopify 语言文件修改结账等页面

[Shopify 店铺运营](https://shopify2006.com/tag/shopify-dian-pu-yun-ying/)

更新于 2024-12-02

[通过 YouTube 观看本期 Shopify 教程](https://youtu.be/t19uZfk2ZhQ?feature=shared)

修改 Shopify 网站内容的方式，除了直接在编辑器中修改模块设置项和编辑主题代码之外，还有一种方式就是 “编辑默认模板内容”，它常用于修改 Shopify 店铺中的固定内容，例如提示语、Label 标签等。

本期教程通过案例演示如何修改 Shopify 主题的默认模板内容，来修改 Shopify 结账页面的显示，其他页面的修改方法也是类似的。

很早之前我应该在视频教程中演示过修改 Shopify 模板默认内容的用法，大部分人知晓的一般都是 [如何隐藏 Shopify Footer 底部的 "Powered by shopify" 文字](https://shopify2006.com/frequently-asked-questions-about-shopify/)，而不知道其他用法。

## 修改前

### 一、登录链接

如下图所示，Shopify 默认的结账页在修改前，都会显示 Log in 链接，客户可以点击登录，但是大部分店铺其实不需要登录账号也能直接结账。

![Shopify 结账页面-修改前](https://shopify2006.com/content/images/2024/09/Shopify---------.webp)

从订单转化的角度而言，保留这个链接有点多此一举，因为会分散客户的注意力，导致原本正在结账的客户由于后续的注册和登录流程而直接弃购。

即使不登录账号，客户下单之后也可以点击通知邮件中的链接查询订单信息。所以视频中将演示如何隐藏它。

### 二、折扣码输入框

另一项则是折扣码输入框，如果你的店铺并没有使用礼品卡，只使用折扣码，而结账页显示如图所示的话，你可以复制文字参照视频修改。

```text
Discount code
```

复制

## 修改后

如下图所示，修改之后 Log in 链接已经隐藏，折扣码输入框也不显示礼品卡文字。

![Shopify 结账页-修改后](https://shopify2006.com/content/images/2024/09/Shopify--------.webp)

其他页面例如购物车、产品页等，修改方法是一样的，你可以尝试复制之后去 “编辑默认模板内容” 中搜索，搜到之后修改保存即可。

## 如何恢复默认

修改之后如果想恢复，搜索改动的内容，全选删除之后保存即可恢复默认。

或者像视频里演示的那样，将对应的 `.json` 文件切换到修改前的版本，保存即可。

## 多语言设置

通过后台主题列表进入 “编辑默认模板内容” 之后修改的语言是默认的英语，如果你的 Shopify 网站主要语言不是英文，或者设置了 [Shopify 结账页面显示多种语言](https://shopify2006.com/shopify-markets-and-geo-location/)，可以参考视频演示进行修改。

## 扩展内容

Shopify Plus 网站可以通过 Checkout Extensibility 进一步定制结账页：

![](https://shopify2006.com/assets/built/shopify2006.ico?v=426b9f56da)

![](https://shopify2006.com/assets/built/shopify2006.ico?v=426b9f56da)

---

![](https://shopify2006.com/assets/built/shopify2006.ico?v=426b9f56da)