---
title: "WordPress RSS Feed功能详解及禁用方法"
description: "什么是WordPress RSS Feed？如何禁用Feed？如果你的网站不需要订阅功能，可以关闭Feed，避免内容盗用以及GSC不收录Feed的提示。"
tags: [wordpress, rss, feed, seo, 网站优化]
slug: /wordpress-rss-feed-tutorial
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import { Admonition } from '@docusaurus/mdx-components';

<Admonition type="tip">
  <p>RSS Feed是WordPress的内置功能，可以帮助用户订阅网站更新，但也可能带来内容盗用风险</p>
</Admonition>

## Last updated: Oct 15 2025

![什么是WordPress RSS Feed？如何禁用Feed？](https://website-custom.com/wp-content/uploads/2025/01/rss-feed.webp)

## 什么是WordPress RSS Feed？

### 关于RSS和Feed

![RSS是什么](https://website-custom.com/wp-content/uploads/2025/01/3-1-300x300.webp "- Well建站 | 唯二建站")

<img decoding="async" class="alignnone wp-image-4752 size-medium" src="https://website-custom.com/wp-content/uploads/2025/01/3-1-300x300.webp" alt="RSS是什么" width="300" height="300" title="- Well建站 | 唯二建站" srcset="https://website-custom.com/wp-content/uploads/2025/01/3-1-300x300.webp 300w, https://website-custom.com/wp-content/uploads/2025/01/3-1-150x150.webp 150w, https://website-custom.com/wp-content/uploads/2025/01/3-1.webp 512w" sizes="(max-width: 300px) 10vw, 300px" />

<RssFeedInfo />

[RSS](https://zh.wikipedia.org/wiki/RSS)（Really Simple Syndication）是一种允许网站内容以结构化的、可订阅的格式进行传播和分发的技术，一般用在博客网站、新闻网站、社媒平台。

[Feed](https://zh.wikipedia.org/zh-cn/%E6%B6%88%E6%81%AF%E4%BE%86%E6%BA%90)是一个广泛的术语，准确说是[Web Feed](https://en.wikipedia.org/wiki/Web_feed)，指的是网站通过特定格式将其内容（如文章、新闻、博客帖子等）以结构化和可自动读取的方式发送给订阅者。Feed 本质上就是内容的动态更新，它可以有多种格式，包括 **RSS**、Atom、JSON Feed 等。

所以，RSS是一种特定类型的Feed格式，举个例子：

-   如果有人说"我订阅了这个网站的 **Feed**"，他可能在说他订阅了网站的更新，无论它是通过 RSS、Atom 或其他格式来提供的。
-   如果有人说"我订阅了这个网站的 **RSS**"，那么他具体是在说他使用的是 **RSS 格式** 来接收网站的更新内容。

在WordPress网站中，Feed类型通常是通过**RSS**格式提供的，WordPress默认生成几种不同类型的Feed：

<Tabs>
<TabItem value="post" label="文章Feed">
- 文章Feed，url：https://yourdomain.com/comments/feed/
</TabItem>
<TabItem value="comment" label="评论Feed">
- 评论Feed，url：https://yourdomain.com/comments/feed/
</TabItem>
<TabItem value="category" label="分类Feed">
- 类别Feed，url：https://yourdomain.com/category/category-name/feed/
</TabItem>
<TabItem value="tag" label="标签Feed">
- 标签Feed，url：https://yourdomain.com/tag/tag-name/feed/
</TabItem>
<TabItem value="author" label="作者Feed">
- 作者Feed，url：https://yourdomain.com/author/author-name/feed/
</TabItem>
</Tabs>

[WordPress关于Feed的介绍](https://developer.wordpress.org/advanced-administration/wordpress/feeds/)。

### 那么用户是如何订阅网站Feed的呢？

![订阅RSS Feed](data:image.svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20width='300'%20height='300'%20viewBox='0%200%20300%20300'%3E%3C/svg%3E "- Well建站 | 唯二建站")

<img decoding="async" class="alignnone wp-image-4751 size-medium" src="https://website-custom.com/wp-content/uploads/2025/01/2-1-300x300.webp" alt="订阅RSS Feed" width="300" height="300" title="- Well建站 | 唯二建站" srcset="https://website-custom.com/wp-content/uploads/2025/01/2-1-300x300.webp 300w, https://website-custom.com/wp-content/uploads/2025/01/2-1-150x150.webp 150w, https://website-custom.com/wp-content/uploads/2025/01/2-1.webp 512w" sizes="(max-width: 300px) 100vw, 300px" />

网站用户可以使用任何**RSS阅读器**（比如Feedly、Inoreader等）直接订阅这些Feed地址（比如https://yourdomain.com/comments/feed/），随时查看你的网站的更新。

或者你也可以使用WordPress的订阅插件，让用户通过**电子邮件订阅**，比如：[MailPoet](https://wordpress.org/plugins/mailpoet/) 、[Email Subscribers](https://wordpress.org/plugins/email-subscribers/)，用户可以在你网站的订阅表单中输入电子邮件地址，通过电子邮件接收你网站的更新。

## 外贸网站是否需要Feed功能？

你可以根据自己网站的特性决定时候保留Feed功能。

<Admonition type="info">
  <p>需要 Feed 的外贸网站</p>
</Admonition>

-   网站内容频繁更新，且有新闻、博客、产品更新等动态内容。
-   网站有定期的促销活动或营销信息，想让客户及时获取更新。
-   网站希望通过电子邮件或社交媒体等渠道分发内容，增加流量和品牌曝光。
-   网站需要通过内容吸引长期客户，提升客户粘性。

<Admonition type="caution">
  <p>不需要 Feed 的外贸网站</p>
</Admonition>

-   主要是静态页面，内容更新频率较低，产品信息或品牌展示为主。
-   主要依赖广告和其他手段进行流量获取，不太依赖定期更新和内容营销。
-   不希望客户频繁订阅网站更新，或者希望控制信息的传递和传播。

对于某些外贸网站，可能会担心Feed内容被别有用心的人抓取、复制，甚至滥用。尤其是在涉及定价、产品描述等敏感信息时，这种担忧更为明显。虽然Feed本身并没有特别的安全问题，但如果担心内容泄露，可能需要评估是否禁用Feed。

## 如何禁用WordPress Feed功能？

<Tabs>
<TabItem value="plugin" label="使用插件禁用">
### 使用插件禁用RSS

![Perfmatters插件禁用RSS源](data:image.svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20width='388'%20height='157'%20viewBox='0%200%20388%20157'%3E%3C/svg%3E "- Well建站 | 唯二建站")

<img decoding="async" class="alignnone size-full wp-image-4753" src="https://website-custom.com/wp-content/uploads/2025/01/5-1.webp" alt="Perfmatters插件禁用RSS源" width="388" height="157" title="- Well建站 | 唯二建站" srcset="https://website-custom.com/wp-content/uploads/2025/01/5-1.webp 388w, https://website-custom.com/wp-content/uploads/2025/01/5-1-300x121.webp 300w" sizes="(max-width: 388px) 100vw, 38px" />

如果你正在[使用Perfmatters插件](https://website-custom.com/perfmatters-tutorial/)，它自带**禁用RSS源**和**移除RSS源链接**的功能。
</TabItem>
<TabItem value="code" label="使用代码禁用">
### 使用代码禁用Feed

![代码禁用RSS Feed](data:image.svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20width='512'%20height='319'%20viewBox='0%200%20512%20319'%3E%3C/svg%3E "- Well建站 | 唯二建站")

<img decoding="async" class="alignnone size-full wp-image-4754" src="https://website-custom.com/wp-content/uploads/2025/01/6-1.webp" alt="代码禁用RSS Feed" width="512" height="319" title="- Well建站 | 唯二建站" srcset="https://website-custom.com/wp-content/uploads/2025/01/6-1.webp 512w, https://website-custom.com/wp-content/uploads/2025/01/6-1-300x187.webp 300w" sizes="(max-width: 512px) 100vw, 512px" />

将下放两段PHP代码添加到WP后台 – 外观 – 主题文件编辑器 – functions.php文件的底部。这两段代码的功能分别是禁用所有的WordPress Feed、将Feed链接的请求重定向到网站首页。

```php
// 禁用所有类型的 Feed
remove_action('do_feed', 'do_feed_rss2', 10, 1);
remove_action('do_feed_rss2', 'do_feed_rss2', 10, 1);
remove_action('do_feed_rss', 'do_feed_rss', 10, 1);
remove_action('do_feed_atom', 'do_feed_atom', 10, 1);
remove_action('wp_head', 'feed_links', 2);
remove_action('wp_head', 'feed_links_extra', 3);
```

```php
// 重定向 Feed 请求到首页
function redirect_feed() {
    if (is_feed()) {
        wp_redirect(home_url(), 301); // 301 重定向到首页
        exit;
    }
}
add_action('template_redirect', 'redirect_feed');
```

PS：在functions.php文件中添加代码时，建议使用[子主题](https://website-custom.com/child-theme/)，否则在主题更新后会清除functions.php文件内的自定义代码。
</TabItem>
</Tabs>

## 总结

以上就是关于WordPress RSS Feed介绍和如何禁用WordPress Feed教程的全部内容。

更多WordPress教程请关注[Well博客](https://website-custom.com/blog/)。

## 下载链接

| 工具/插件 | 下载地址 | 类型 | 说明 |
|---------|----------|------|------|
| Perfmatters | [https://wordpress.org/plugins/perfmatters/](https://wordpress.org/plugins/perfmatters/) | 性能优化插件 | 包含禁用RSS功能 |
| MailPoet | [https://wordpress.org/plugins/mailpoet/](https://wordpress.org/plugins/mailpoet/) | 邮件订阅插件 | 邮件订阅替代方案 |
| Email Subscribers | [https://wordpress.org/plugins/email-subscribers/](https://wordpress.org/plugins/email-subscribers/) | 邮件订阅插件 | 邮件订阅替代方案 |
