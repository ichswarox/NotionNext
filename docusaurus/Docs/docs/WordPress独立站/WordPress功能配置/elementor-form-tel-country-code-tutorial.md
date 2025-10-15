---
title: "Elementor表单：电话字段添加国家区号和国旗选择器教程"
description: "本篇文章分享如何使用免费插件为Elementor表单添加电话国家区号和国旗选择器功能，提升用户体验和表单数据准确性。"
tags: [Elementor, 表单, 电话字段, 国家区号, 国旗选择器, WordPress]
slug: /elementor-form-tel-country-code-tutorial
---

<sup>更新时间: Oct 15, 2025</sup>

![Elementor表单：电话字段添加国家区号和国旗选择器教程](https://website-custom.com/wp-content/uploads/2025/04/Country-Code.webp)

## 为什么为表单添加电话国家区号很重要？

在表单中为手机号字段添加国家区号选择器可以显著提升用户体验，也能很大程度确保网站收到的表单数据准确性。

试想一下，在客户填写表单的手机号字段时，如果没有国家区号选择，客户可能会忘记填写区号，导致即使收到精准客户的询盘，也没办法有效联系。

这一个小小的功能，直接关系到B2B网站的转化率，所以表单的国家区号选择功能很重要。

## 为Elementor表单电话字段添加国家区号和国旗选择器

首先，需要在WordPress后台插件界面搜索[Country Code For Elementor Form Telephone Field](https://wordpress.org/plugins/country-code-field-for-elementor-form/)插件。

:::tip
安装并启用该插件。
:::

然后打开你的Elementor Form表单页面：（如果还未创建表单，可以参考[Elementor Form使用教程](https://website-custom.com/ele-pro-form/)）。

![Elementor Form Tel字段开启WordPress安装Country Code](https://website-custom.com/wp-content/uploads/2025/04/Country-Code.webp)

在表单小组件的设置里，打开Tel的Country Code选项。

还可以在Default Country中设置默认显示的区号，用国家简称代表，比如us（美国）、in（印度）等。

但是，我们看到Tel字段的国家代码部分距离字段左侧有很大的边距，需要用CSS代码进行调整：

![设置国旗和国家区号的样式](https://website-custom.com/wp-content/uploads/2025/04/Country-Code.webp)

打开Form组件的高级设置，点击Custom CSS，将下方代码填入：

（这段代码的含义是将国家区号选择器按钮的内距调整为10px）

```css
.cfefp-intl-container button.iti__selected-country{
    padding: 10px;
}
```

然后保存页面，来到该页面的前端：

![测试表单的电话国家区号功能](https://website-custom.com/wp-content/uploads/2025/04/Country-Code.webp)

可以看到，国家区号和国旗选择器功能可以正常是用，我们来填写表单内容，进行测试。

![表单测试成功，成功接收到电话的国家区号](https://website-custom.com/wp-content/uploads/2025/04/Country-Code.webp)

测试结果没问题，可以正常收到表单，并且电话号码附带了我们选择的区号。

以上就是本篇教程全部内容。

## 下载资源

| 资源名称 | 下载链接 | 说明 |
|---------|----------|------|
| Country Code For Elementor Form插件 | [WordPress.org](https://wordpress.org/plugins/country-code-field-for-elementor-form/) | 为Elementor表单添加国家区号选择器 |
| Elementor插件 | [WordPress.org](https://wordpress.org/plugins/elementor/) | 免费的WordPress页面构建插件 |
