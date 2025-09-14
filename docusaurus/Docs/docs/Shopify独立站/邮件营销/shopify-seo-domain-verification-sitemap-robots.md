---
title: "第 136 期 Shopify SEO 之 网域验证 提交站点地图 robots.txt"
description: "详细介绍如何在Shopify中进行网域验证、提交站点地图和配置robots.txt文件以优化SEO"
keywords: ["Shopify", "SEO", "网域验证", "站点地图", "robots.txt", "Google Search Console"]
slug: /shopify-seo-domain-verification-sitemap-robots
---

# 第 136 期 Shopify SEO 之 网域验证 提交站点地图 robots.txt

[Shopify 店铺运营](https://shopify2006.com/tag/shopify-dian-pu-yun-ying/)

更新于 2024-12-02

## 第 136 期 Shopify SEO 之 网域验证 提交站点地图 robots.txt

[通过 YouTube 观看本期 Shopify 教程](https://youtu.be/WxMd5yUNfm0)

## Shopify Sitemap 站点地图

[什么是网站地图](https://developers.google.com/search/docs/advanced/sitemaps/overview?hl=zh-cn)

[Shopify 关于网站地图的官方文档](https://help.shopify.com/en/manual/promoting-marketing/seo/find-site-map)

### 如何查看你店铺的网站地图

在你的店铺域名或网址后面粘贴：

```liquid
/sitemap.xml
```

复制

粘贴后访问即可查看

示例：

```url
https://shopifree.blog/sitemap.xml
```

复制

### 进行网域验证

- 如果店铺未禁用密码，需先禁用。
- 复制 Google 提供的验证 meta 标签，粘贴到 Shopify 后台「在线商店 → 主题 → 编辑代码」中 `Layout/theme.liquid` 文件的 `<head>` 标签内（通常在 `{{ head_content }}` 上方）。
- 保存文件后，返回 Google Search Console 点击“验证”。

### 提交站点地图到 [Google Search Console](https://search.google.com/search-console/about) ( GSC )

## Shopify robots.txt

[关于 robots.txt 的扩展阅读](https://developers.google.com/search/docs/advanced/robots/intro?hl=zh-cn)

[Shopify 关于 robots.txt 的官方文档](https://help.shopify.com/en/manual/promoting-marketing/seo/editing-robots-txt)

💡

只有当你店铺上某些内容不想被收录时，才可以考虑创建和编辑 robots.txt 文件。如果你希望收录所有内容，则没必要操作。

-   到 **在线主题** 上创建 robots.txt （从模板文件夹）
-   在店铺域名后面添加并访问，以查看现有的规则

```plain
/robots.txt
```

复制

例如：

```plain
https://notion.icu/robots.txt
```

复制

-   [参考官方文档进行修改](https://shopify.dev/docs/themes/seo/robots-txt)。例如禁止百度搜索引擎收录：

```plain
User-agent: Baiduspider
Disallow: /
```

复制

-   [谷歌 robots.txt 测试工具](https://support.google.com/webmasters/answer/6062598?hl=en)
-   如果想恢复 Shopify 默认的 robots.txt，将创建的文件删除即可。

![](https://shopify2006.com/assets/built/shopify2006.ico?v=2ea66c62ff)

![](https://shopify2006.com/assets/built/shopify2006.ico?v=1283176712)