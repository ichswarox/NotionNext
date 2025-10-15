---
title: "WooCommerce产品变体设置，属性SKU色板管理Variation Swatches插件教程"
description: "WooCommerce产品变体设置，使用产品变体插件Variation Swatches For WooCommerce为产品添加更丰富的属性类型：色板、按钮、图片等属性。"
tags: [WooCommerce, 产品变体, SKU, 色板管理, 电商]
slug: /woocommerce-variation-swatches-tutorial
---

<sup>更新时间: Oct 15, 2025</sup>

![WooCommerce产品变体设置，属性SKU色板管理Variation Swatches插件教程](https://website-custom.com/wp-content/uploads/2025/04/color.webp)

## 什么是变体产品？

产品变体（Product Variant）指的是在同一产品下，根据不同属性（如尺寸、颜色、材质等）产生的各个具体版本。

每个变体都有自己独立的 SKU、价格和库存管理，方便卖家精准控制库存与定价，也让买家能在一个产品页面内直接选择所需版本的产品。

比如：一件T恤，通常有不同的颜色（红色、黑色、白色）和尺码（S、M、L），那这个产品就有9（3X3）个变体，像"黑色L码"就是其中一个变体。

由此可见，变体产品在C端独立站是必不可少的功能。

![WooCommerce默认以下拉框形式展示产品属性](https://website-custom.com/wp-content/uploads/2025/04/color.webp)

但是[WooCommerce](https://wordpress.org/plugins/woocommerce/)默认的产品属性功能只能设置每个属性的名称，而且在产品页面的展示形式是通过下拉选择的方式选择不同的属性，不美观且不方便。

本篇文章，就是来帮助大家把WooCommerce的产品属性变得更美观和方便：

## WooCommerce产品变体设置

### 安装变体插件

:::tip
在[WordPress后台](https://website-custom.com/wordpress-admin-tutorial/) – 插件 – 添加插件 界面，搜索 [Variation Swatches for WooCommerce](https://wordpress.org/plugins/woo-variation-swatches/)

安装并启用该插件。
:::

如果需要 [Variation Swatches for WooCommerce Pro 版，可以在Well建站购买](https://website-custom.com/resources/variation-swatches-for-woocommerce-pro-plugin/)。

### 添加全局产品属性

WP后台 – 产品 – 属性中添加全局产品属性：

![添加WooCommerce产品全局属性](https://website-custom.com/wp-content/uploads/2025/04/color.webp)

填写属性的名称和该属性对应的类型，比如添加了一个"Color"属性。

![添加Color属性](https://website-custom.com/wp-content/uploads/2025/04/color.webp)

添加属性后，点击对应属性右侧的"配置类别"按钮，添加具体的属性类别（给属性添加变量）。

![添加产品属性的类型](https://website-custom.com/wp-content/uploads/2025/04/color.webp)

在属性类别里添加具体的属性变量，可以如上图一样，在Color属性里添加多个具体的颜色名称和对应色块。

然还再添加其他属性，比如Size：

![添加Size属性](https://website-custom.com/wp-content/uploads/2025/04/color.webp)

Size一般对应的类型就是Button。

创建Size属性后，在为该属性添加具体的变量，比如XL、XXL：

![添加Size属性变量](https://website-custom.com/wp-content/uploads/2025/04/color.webp)

这样就添加了两个全局属性，以及对应属性的变量。

### 设置变体产品

编辑想要添加产品属性的产品：

![修改WooCommerce产品类型为变体产品](https://website-custom.com/wp-content/uploads/2025/04/color.webp)

将产品类型修改为"可变产品"。

然后点击左侧的"属性"，切换到属性编辑界面：

![为可变产品增加属性](https://website-custom.com/wp-content/uploads/2025/04/color.webp)

可以在该界面添加新的属性，或者使用我们刚刚添加的全局属性"Color"和"Size"。

![添加属性后点击保存](https://website-custom.com/wp-content/uploads/2025/04/color.webp)

添加完属性后，点击"保存属性"按钮。

然后点击左侧"变量"菜单：

![产品变体界面](https://website-custom.com/wp-content/uploads/2025/04/color.webp)

点击左上角"生成变体"。

会默认根据选择的属性，生成对应的产品变体，比如我们设置的2个颜色和2个尺寸，就生成了对应的4种变体：

![生成的产品变体](https://website-custom.com/wp-content/uploads/2025/04/color.webp)

生成变体后，需要对变体设置价格，可以点右上角"添加价格"为每个没有价格的变体添加统一的价格。

也可以展开每个变体，为每个变体设置不一样的价格、SKU、尺寸等：

![为每个变体设置价格](https://website-custom.com/wp-content/uploads/2025/04/color.webp)

设置完变体的价格后，记得保存产品编辑。

然后再到该产品的前台界面查看效果：

![WooCommerce变体产品效果](https://website-custom.com/wp-content/uploads/2025/04/color.webp)

这时候原本默认的下拉框属性变成了对应的按钮和色块。

如果想对产品属性展示方式再做一些调整，可以在后台的：GetWooPlugins – Swatches Settings 中进行设置：

![Variation Swatches for WooCommerce设置界面](https://website-custom.com/wp-content/uploads/2025/04/color.webp)

以上就是WooCommerce产品属性和变体设置的全部内容。

## 下载资源

| 资源名称 | 下载链接 | 说明 |
|---------|----------|------|
| Variation Swatches for WooCommerce | [WordPress.org](https://wordpress.org/plugins/woo-variation-swatches/) | WooCommerce产品变体色板插件 |
| WooCommerce | [WordPress.org](https://wordpress.org/plugins/woocommerce/) | 免费的电商插件 |
