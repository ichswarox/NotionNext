---
title: 对接PayPal支付插件完整指南
description: "学习如何在WordPress和WooCommerce中配置PayPal支付插件，包括账户关联、支付方式设置和样式配置，实现安全可靠的在线支付功能。"
tags: ["WordPress", "WooCommerce", "PayPal", "支付集成", "在线支付", "电商支付", "支付插件"]
slug: /woocommerce-paypal-integration
---

# WooCommerce对接PayPal支付插件完整指南

本篇文章详细讲解WooCommerce对接PayPal支付流程，设置PayPal支付按钮显示在哪些页面及显示样式。
 
## 安装PayPal插件

首先，在WP后台插件安装界面，搜索[WooCommerce PayPal Payments](https://wordpress.org/plugins/woocommerce-paypal-payments/)：

![安装PayPal插件](https://website-custom.com/wp-content/uploads/2025/04/1-5.webp "- Well建站 | 唯二建站")

<img decoding="async" class="alignnone size-full wp-image-6481" src="https://website-custom.com/wp-content/uploads/2025/04/1-5.webp" alt="安装PayPal插件" width="556" height="389" title="- Well建站 | 唯二建站" srcset="https://website-custom.com/wp-content/uploads/2025/04/1-5.webp 556w, https://website-custom.com/wp-content/uploads/2025/04/1-5-500x350.webp 500w, https://website-custom.com/wp-content/uploads/2025/04/1-5-300x210.webp 300w, https://website-custom.com/wp-content/uploads/2025/04/1-5-18x12.webp 18w" sizes="(max-width: 556px) 100vw, 556px" />

安装并启用该插件。

## WooCommerce对接PayPal插件

之后打开WooCommerce设置界面，进入付款设置：

![打开WooCommerce设置 - 支付设置界面](https://website-custom.com/wp-content/uploads/2025/04/2-5-800x322.webp "- Well建站 | 唯二建站")

<img decoding="async" class="alignnone wp-image-6482 size-large" src="https://website-custom.com/wp-content/uploads/2025/04/2-5-800x322.webp" alt="打开WooCommerce设置 - 支付设置界面" width="800" height="322" title="- Well建站 | 唯二建站" srcset="https://website-custom.com/wp-content/uploads/2025/04/2-5-800x322.webp 800w, https://website-custom.com/wp-content/uploads/2025/04/2-5-500x201.webp 500w, https://website-custom.com/wp-content/uploads/2025/04/2-5-300x121.webp 300w, https://website-custom.com/wp-content/uploads/2025/04/2-5-768x309.webp 768w, https://website-custom.com/wp-content/uploads/2025/04/2-5-1536x619.webp 1536w, https://website-custom.com/wp-content/uploads/2025/04/2-5-18x7.webp 18w, https://website-custom.com/wp-content/uploads/2025/04/2-5.webp 1896w" sizes="(max-width: 800px) 100vw, 800px" />

点击付款设置界面下PayPal对应的设置按钮。

进入PayPal插件的账户关联界面：

![链接PayPal账户](https://website-custom.com/wp-content/uploads/2025/04/3-5-800x498.webp "- Well建站 | 唯二建站")

<img decoding="async" class="alignnone wp-image-6483 size-large" src="https://website-custom.com/wp-content/uploads/2025/04/3-5-800x498.webp" alt="链接PayPal账户" width="800" height="498" title="- Well建站 | 唯二建站" srcset="https://website-custom.com/wp-content/uploads/2025/04/3-5-800x498.webp 800w, https://website-custom.com/wp-content/uploads/2025/04/3-5-500x311.webp 500w, https://website-custom.com/wp-content/uploads/2025/04/3-5-300x187.webp 300w, https://website-custom.com/wp-content/uploads/2025/04/3-5-768x478.webp 768w, https://website-custom.com/wp-content/uploads/2025/04/3-5-18x12.webp 18w, https://website-custom.com/wp-content/uploads/2025/04/3-5.webp 923w" sizes="(max-width: 800px) 100vw, 800px" />

点击Activate PayPal Payments按钮，进行PayPal插件设置：

![PayPal设置Choose your account type为Business](https://website-custom.com/wp-content/uploads/2025/04/4-5-800x457.webp "- Well建站 | 唯二建站")

<img decoding="async" class="alignnone wp-image-6484 size-large" src="https://website-custom.com/wp-content/uploads/2025/04/4-5-800x457.webp" alt="PayPal设置Choose your account type为Business" width="800" height="457" title="- Well建站 | 唯二建站" srcset="https://website-custom.com/wp-content/uploads/2025/04/4-5-800x457.webp 800w, https://website-custom.com/wp-content/uploads/2025/04/4-5-500x286.webp 500w, https://website-custom.com/wp-content/uploads/2025/04/4-5-300x171.webp 300w, https://website-custom.com/wp-content/uploads/2025/04/4-5-768x439.webp 768w, https://website-custom.com/wp-content/uploads/2025/04/4-5-18x10.webp 18w, https://website-custom.com/wp-content/uploads/2025/04/4-5.webp 1216w" sizes="(max-width: 800px) 100vw, 800px" />

Choose your account type，Well**建议选择关联企业账户**，也就是“Business”账户。

​将WooCommerce商店关联到**PayPal企业账户**（Business Account）相较于个人账户（Personal Account），在跨境电商收款方面具有多项优势：

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

![- Well建站 | 唯二建站](https://website-custom.com/wp-content/uploads/2025/04/5-5-800x494.webp "- Well建站 | 唯二建站")

<img decoding="async" class="alignnone wp-image-6485 size-large" src="https://website-custom.com/wp-content/uploads/2025/04/5-5-800x494.webp" alt="- Well建站 | 唯二建站" width="800" height="494" title="- Well建站 | 唯二建站" srcset="https://website-custom.com/wp-content/uploads/2025/04/5-5-800x494.webp 800w, https://website-custom.com/wp-content/uploads/2025/04/5-5-500x309.webp 500w, https://website-custom.com/wp-content/uploads/2025/04/5-5-300x185.webp 300w, https://website-custom.com/wp-content/uploads/2025/04/5-5-768x475.webp 768w, https://website-custom.com/wp-content/uploads/2025/04/5-5-18x12.webp 18w, https://website-custom.com/wp-content/uploads/2025/04/5-5.webp 1246w" sizes="(max-width: 800px) 100vw, 800px" />

产品类型选择：Physical Goods

![Add Credit and Debit Cards设置](data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20width='800'%20height='393'%20viewBox='0%200%20800%20393'%3E%3C/svg%3E "- Well建站 | 唯二建站")

<img decoding="async" class="alignnone wp-image-6486 size-large" src="https://website-custom.com/wp-content/uploads/2025/04/6-4-800x393.webp" alt="Add Credit and Debit Cards设置" width="800" height="393" title="- Well建站 | 唯二建站" srcset="https://website-custom.com/wp-content/uploads/2025/04/6-4-800x393.webp 800w, https://website-custom.com/wp-content/uploads/2025/04/6-4-500x246.webp 500w, https://website-custom.com/wp-content/uploads/2025/04/6-4-300x147.webp 300w, https://website-custom.com/wp-content/uploads/2025/04/6-4-768x377.webp 768w, https://website-custom.com/wp-content/uploads/2025/04/6-4-18x9.webp 18w, https://website-custom.com/wp-content/uploads/2025/04/6-4.webp 1380w" sizes="(max-width: 800px) 100vw, 800px" />

Add Credit and Debit Cards选择第一个。

## 关联PayPal账户

![点击关联PayPal账户](data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20width='800'%20height='372'%20viewBox='0%200%20800%20372'%3E%3C/svg%3E "- Well建站 | 唯二建站")

<img decoding="async" class="alignnone wp-image-6487 size-large" src="https://website-custom.com/wp-content/uploads/2025/04/7-4-800x372.webp" alt="点击关联PayPal账户" width="800" height="372" title="- Well建站 | 唯二建站" srcset="https://website-custom.com/wp-content/uploads/2025/04/7-4-800x372.webp 800w, https://website-custom.com/wp-content/uploads/2025/04/7-4-500x232.webp 500w, https://website-custom.com/wp-content/uploads/2025/04/7-4-300x139.webp 300w, https://website-custom.com/wp-content/uploads/2025/04/7-4-768x357.webp 768w, https://website-custom.com/wp-content/uploads/2025/04/7-4-18x8.webp 18w, https://website-custom.com/wp-content/uploads/2025/04/7-4.webp 949w" sizes="(max-width: 800px) 100vw, 800px" />

然后点击“Connect to PayPal”关联PayPal账户。

在自动弹出的界面进行PayPal账号登录，如果你没有账户会为你直接创建PayPal账户：

![登录PayPal](data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20width='388'%20height='500'%20viewBox='0%200%20388%20500'%3E%3C/svg%3E "- Well建站 | 唯二建站")

<img decoding="async" class="alignnone wp-image-6488 size-medium" src="https://website-custom.com/wp-content/uploads/2025/04/8-3-388x500.webp" alt="登录PayPal" width="388" height="500" title="- Well建站 | 唯二建站" srcset="https://website-custom.com/wp-content/uploads/2025/04/8-3-388x500.webp 388w, https://website-custom.com/wp-content/uploads/2025/04/8-3-233x300.webp 233w, https://website-custom.com/wp-content/uploads/2025/04/8-3-9x12.webp 9w, https://website-custom.com/wp-content/uploads/2025/04/8-3.webp 539w" sizes="(max-width: 388px) 100vw, 388px" />

![登录PayPal](data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20width='357'%20height='500'%20viewBox='0%200%20357%20500'%3E%3C/svg%3E "- Well建站 | 唯二建站")

<img decoding="async" class="alignnone wp-image-6489 size-medium" src="https://website-custom.com/wp-content/uploads/2025/04/9-3-357x500.webp" alt="登录PayPal" width="357" height="500" title="- Well建站 | 唯二建站" srcset="https://website-custom.com/wp-content/uploads/2025/04/9-3-357x500.webp 357w, https://website-custom.com/wp-content/uploads/2025/04/9-3-214x300.webp 214w, https://website-custom.com/wp-content/uploads/2025/04/9-3-9x12.webp 9w, https://website-custom.com/wp-content/uploads/2025/04/9-3.webp 521w" sizes="(max-width: 357px) 100vw, 357px" />

登录成功后会有提示：

![- Well建站 | 唯二建站](https://website-custom.com/wp-content/uploads/2025/04/10-3.webp "- Well建站 | 唯二建站")

<img decoding="async" class="alignnone size-full wp-image-6490" src="https://website-custom.com/wp-content/uploads/2025/04/10-3.webp" alt="- Well建站 | 唯二建站" width="630" height="738" title="- Well建站 | 唯二建站" srcset="https://website-custom.com/wp-content/uploads/2025/04/10-3.webp 630w, https://website-custom.com/wp-content/uploads/2025/04/10-3-427x500.webp 427w, https://website-custom.com/wp-content/uploads/2025/04/10-3-256x300.webp 256w, https://website-custom.com/wp-content/uploads/2025/04/10-3-10x12.webp 10w" sizes="(max-width: 630px) 100vw, 630px" />

这样就是关联好了PayPal，点击返回WooCommerce即可。

## PayPal插件设置

回到PayPal插件界面后，点击"Payment Methods"：

![PayPal插件支付方式设置](https://website-custom.com/wp-content/uploads/2025/04/11-3-800x434.webp "- Well建站 | 唯二建站")

<img decoding="async" class="alignnone wp-image-6491 size-large" src="https://website-custom.com/wp-content/uploads/2025/04/11-3-800x434.webp" alt="PayPal插件支付方式设置" width="800" height="434" title="- Well建站 | 唯二建站" srcset="https://website-custom.com/wp-content/uploads/2025/04/11-3-800x434.webp 800w, https://website-custom.com/wp-content/uploads/2025/04/11-3-500x271.webp 500w, https://website-custom.com/wp-content/uploads/2025/04/11-3-300x163.webp 300w, https://website-custom.com/wp-content/uploads/2025/04/11-3-768x417.webp 768w, https://website-custom.com/wp-content/uploads/2025/04/11-3-18x10.webp 18w, https://website-custom.com/wp-content/uploads/2025/04/11-3.webp 1466w" sizes="(max-width: 800px) 100vw, 800px" />

可以在该界面选择开启哪些支付方式。

进入Styling设置界面，可以控制PayPal支付按钮的在哪些页面显示，以及按钮的样式：

![PayPal插件样式设置](https://website-custom.com/wp-content/uploads/2025/04/12-3-800x694.webp "- Well建站 | 唯二建站")

<img decoding="async" class="alignnone wp-image-6492 size-large" src="https://website-custom.com/wp-content/uploads/2025/04/12-3-800x694.webp" alt="PayPal插件样式设置" width="800" height="694" title="- Well建站 | 唯二建站" srcset="https://website-custom.com/wp-content/uploads/2025/04/12-3-800x694.webp 800w, https://website-custom.com/wp-content/uploads/2025/04/12-3-500x434.webp 500w, https://website-custom.com/wp-content/uploads/2025/04/12-3-300x260.webp 300w, https://website-custom.com/wp-content/uploads/2025/04/12-3-768x666.webp 768w, https://website-custom.com/wp-content/uploads/2025/04/12-3-14x12.webp 14w, https://website-custom.com/wp-content/uploads/2025/04/12-3.webp 986w" sizes="(max-width: 800px) 100vw, 800px" />

设置完成后记得点击右上角的保存按钮。

这样其实**已经成功为WordPress网站对接了PayPal支付功能**，可以正常接收买家的下单、付款。

但是支付是比较重要功能，不容出错，为了安全起见，我们**还要[进行PayPal沙盒测试](https://website-custom.com/paypal-sandbox-test/)**，也就是模拟真实用户在网站进行下单：

以上就是WooCommerce集成PayPal支付的完整流程。

点击查看更多[WooCommerce教程](https://website-custom.com/woocommerce-tutorial/)。

: ) 文章内容均为原创，转载须注明出处并添加原文链接，否则视为侵权

[外贸建站服务](https://website-custom.com/service/)

![](https://website-custom.com/wp-content/uploads/2025/06/外贸建站服务-1-800x571.webp)
提供专业外贸建站服务

[WordPress 插件下载](https://website-custom.com/resources/)

![WordPress建站资源下载](https://website-custom.com/wp-content/uploads/2024/09/WordPress建站资源下载.webp)
WordPress 插件下载，合理使用插件丰富网站功能

[外贸服务器推荐](https://website-custom.com/service/)

![WordPress服务器推荐，外贸专用VPS | 虚拟主机教程、测评](https://website-custom.com/wp-content/uploads/2025/06/server.webp)
WordPress专用VPS、虚拟主机推荐

文章标签

[CDN (4)](https://website-custom.com/tag/cdn/) [SEO (12)](https://website-custom.com/tag/seo/) [主题 (21)](https://website-custom.com/tag/theme/) [代码 (23)](https://website-custom.com/tag/code/) [创建模板 (13)](https://website-custom.com/tag/template-builder/) [功能实现 (61)](https://website-custom.com/tag/function-realization/) [域名 (8)](https://website-custom.com/tag/domain-name/) [宝塔面板 (9)](https://website-custom.com/tag/bt-panel/) [工具 (22)](https://website-custom.com/tag/tools/) [插件使用 (66)](https://website-custom.com/tag/plugins-use/) [服务器 (18)](https://website-custom.com/tag/server/) [网站安全 (6)](https://website-custom.com/tag/website-security/) [速度优化 (12)](https://website-custom.com/tag/speed-optimization/) [邮箱 (6)](https://website-custom.com/tag/email/)

文章推荐

![Vultr服务器购买教程配图 - well建站](https://website-custom.com/wp-content/uploads/2024/10/服务器.svg)

### [Vultr服务器购买教程，高性价比VPS服务器](https://website-custom.com/vultr-vps/)

![WordPress速度优化配图](https://website-custom.com/wp-content/uploads/2024/10/速度优化3.svg)

### [WordPress速度优化教程，谷歌测速100分](https://website-custom.com/speed-optimization/)

![WordPress如何管理B2B产品配图](https://website-custom.com/wp-content/uploads/2024/11/b2b-150x150.png)

### [WordPress如何管理B2B产品？3种方法替代WooCommerce](https://website-custom.com/how-to-manage-b2b-products/)

![新网站怎么做SEO](https://website-custom.com/wp-content/uploads/2024/12/seo-150x150.webp)

### [新网站怎么做SEO？给SEO新手的一些建议](https://website-custom.com/new-website-seo/)

文章目录

1. [安装PayPal插件](#heading-0qz5nqoq4)
    
2.  [WooCommerce对接PayPal插件](#heading-ggndfmonu)
    
3.  [关联PayPal账户](#heading-adkvx1dh8)
    
4.  [PayPal插件设置](#heading-9417zriyw)
    

## 建站遇到问题？

联系我们获得技术支持

[快速了解](https://website-custom.com/support/)

[![联系我们获得免费技术咨询 、 付费技术支持](https://website-custom.com/wp-content/uploads/2024/09/技术支持-1536x592.webp)

<img width="1536" height="592" src="https://website-custom.com/wp-content/uploads/2024/09/技术支持-1536x592.webp" class="attachment-1536x1536 size-1536x1536 wp-image-7962" alt="联系我们获得免费技术咨询 、 付费技术支持" srcset="https://website-custom.com/wp-content/uploads/2024/09/技术支持-1536x592.webp 1536w, https://website-custom.com/wp-content/uploads/2024/09/技术支持-500x193.webp 500w, https://website-custom.com/wp-content/uploads/2024/09/技术支持-800x308.webp 800w, https://website-custom.com/wp-content/uploads/2024/09/技术支持-300x116.webp 300w, https://website-custom.com/wp-content/uploads/2024/09/技术支持-768x296.webp 768w, https://website-custom.com/wp-content/uploads/2024/09/技术支持-18x7.webp 18w, https://website-custom.com/wp-content/uploads/2024/09/技术支持.webp 2000w" sizes="(max-width: 1536px) 100vw, 1536px" />

](https://website-custom.com/support/)

[上一页上一篇文章WordPress如何导入模板？Elementor使用模板快速搭建网站](https://website-custom.com/import-template/)

[下一篇文章PayPal沙盒测试教程：在WooCommerce中模拟支付流程下一页](https://website-custom.com/paypal-sandbox-test/)

相关文章

[

![PayPal沙盒测试教程：在WooCommerce中模拟支付流程](https://website-custom.com/wp-content/uploads/2025/05/PayPal沙盒测试.webp)

<img width="500" height="500" src="https://website-custom.com/wp-content/uploads/2025/05/PayPal沙盒测试.webp" class="attachment-medium size-medium wp-image-6642" alt="PayPal沙盒测试教程：在WooCommerce中模拟支付流程" />



](https://website-custom.com/paypal-sandbox-test/)

[PayPal沙盒测试教程：在WooCommerce中模拟支付流程](https://website-custom.com/paypal-sandbox-test/)

2025年 5月 8日

本篇PayPal沙盒测试教程，帮助你利用沙盒账号模拟网站用户下单支付以及收款，测试支付功能的完整性和可靠性。

[

![WooCommerce产品变体设置，属性SKU色板管理Variation Swatches插件教程](https://website-custom.com/wp-content/uploads/2025/04/color-500x500.webp)

<img width="500" height="500" src="https://website-custom.com/wp-content/uploads/2025/04/color-500x500.webp" class="attachment-medium size-medium wp-image-6467" alt="WooCommerce产品变体设置，属性SKU色板管理Variation Swatches插件教程" />



](https://website-custom.com/woocommerce-variation-swatches/)

[WooCommerce产品变体设置，属性SKU色板管理Variation Swatches插件教程](https://website-custom.com/woocommerce-variation-swatches/)

2025年 4月 28日

WooCommerce产品变体设置，使用产品变体插件Variation Swatches For WooCommerce为产品添加更丰富的属性类型：色板、按钮、图片等属性。

[

![WooCommerce使用教程配图](https://website-custom.com/wp-content/uploads/2024/10/产品.svg)

<img width="300" height="300" src="https://website-custom.com/wp-content/uploads/2024/10/产品.svg" class="attachment-medium size-medium wp-image-481" alt="WooCommerce使用教程配图" />



](https://website-custom.com/woo-tutorial/)

[WooCommerce使用教程，WordPress电子商务插件](https://website-custom.com/woo-tutorial/)

2024年 10月 15日

WooCommerce使用教程，作为WP最受欢迎的电子商务插件，它功能强度，轻松实现管理产品、管理订单、用户注册等功能。
[

![WooCommerce使用教程配图](https://website-custom.com/wp-content/uploads/2024/10/产品.svg)

<img width="300" height="300" src="https://website-custom.com/wp-content/uploads/2024/10/产品.svg" class="attachment-medium size-medium wp-image-481" alt="WooCommerce使用教程配图" />



](https://website-custom.com/woo-tutorial/)

[WooCommerce使用教程，WordPress电子商务插件](https://website-custom.com/woo-tutorial/)

2024年 10月 15日

WooCommerce使用教程，作为WP最受欢迎的电子商务插件，它功能强度，轻松实现管理产品、管理订单、用户注册等功能。
