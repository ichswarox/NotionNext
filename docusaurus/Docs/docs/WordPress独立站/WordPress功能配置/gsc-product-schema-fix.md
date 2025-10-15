---
title: "修复GSC产品摘要报错：应指定“offers”、“review”或“aggregateRating”"
description: "本教程详细介绍如何修复GSC产品摘要报错问题，通过添加代码解决结构化数据错误。"
tags: [gsc, google search console, 结构化数据, seo, woocommerce]
slug: /gsc-product-schema-fix
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<div class="text-right text-sm mb-4">Last updated: Sep 15, 2025</div>

![修复GSC产品摘要报错](https://website-custom.com/wp-content/uploads/2024/12/browser.webp)

## 概述

应指定"offers"、"review"或"aggregateRating" 如何修复GSC产品摘要报错？这是因为产品页面生成了Schemas（结构化数据）导致的，添加一段代码就可以解决。

## 产品摘要错误是如何产生的？

Google Search Console 报错：应指定"offers"、"review"或"aggregateRating"

Well在一个客户的网站上遇到过这个问题，当时该网站情况：

- B2B网站，使用WooCommerce管理产品。
- 该网站一开始使用的Yoast SEO插件，Google Search Console没有产生商品摘要的报错。
- 后面更换成使用Rank Math SEO插件，Google Search Console开始对产品页面报错：应指定"offers"、"review"或"aggregateRating"

<Tabs>
<TabItem value="cause" label="错误原因">
Rank Math SEO插件会为WooCommerce产品页默认生成Schemas（结构化数据）。Schemas的作用是在搜索结果展示产品页面的"富媒体搜索结果"，就是将产品的评分和价格直接展示在搜索结果中，在一定程度上能提高点击率。但B2B的产品是用不到富媒体搜索结果的，因为不会有评价，甚至没价格，都是询价。
</TabItem>
<TabItem value="solution" label="解决方案">
使用代码禁用Rank Math的结构化数据
</TabItem>
</Tabs>

## 如何修复GSC产品摘要报错？

知道了报错是如何产生的就知道怎么解决了，既然是Rank Math生成的Schemas，那我们可以直接使用代码禁用Rank Math的结构化数据。

```php
add_filter( 'rank_math/json_ld', function( $data, $jsonld ) {
	if ( is_front_page() || ! isset( $data['publisher'] ) ) {
	return $data;
	}	unset( $data['publisher'] );
	unset( $data['place'] );	return $data;
}, 99, 2);
```

将上方PHP代码添加到 WP后台 – 外观 – 主题文件编辑器 – functions.php 文件最底部即可（建议使用子主题，避免主题更新导致自定义代码丢失）。

:::caution 注意
添加完代码记得保存，然后清除网站缓存，再重新通过GSC的"网站检查"任意一个产品链接，已经不会再报错了。
:::

已经产生报错的页面需要等待谷歌重新抓取。

## 下载资源

| 资源类型 | 下载链接 | 说明 |
|----------|------|
| WordPress插件 | [WordPress 插件下载](https://website-custom.com/resources/) | WordPress 插件下载，合理使用插件丰富网站功能 |
| 建站服务 | [外贸建站服务](https://website-custom.com/service/) | 提供专业外贸建站服务 |
| 服务器推荐 | [外贸服务器推荐](https://website-custom.com/service/) | WordPress专用VPS、虚拟主机推荐 |
