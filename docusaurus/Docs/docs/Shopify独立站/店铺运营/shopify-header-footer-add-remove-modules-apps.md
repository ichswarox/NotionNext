---
title: "第 151 期 在 Header 和 Footer 轻松添加/删除 Shopify 模块和 App"
description: "介绍如何在 Shopify 的 Header 和 Footer 中轻松添加或删除模块和 App，包含增强版主题新功能和通用操作方法"
keywords: ["Shopify", "Header", "Footer", "模块", "App", "增强版主题"]
slug: /shopify-header-footer-add-remove-modules-apps
---

# 第 151 期 在 Header 和 Footer 轻松添加/删除 Shopify 模块和 App

[Shopify 店铺运营](https://shopify2006.com/tag/shopify-dian-pu-yun-ying/)

更新于 2024-12-02

[通过 YouTube 观看本期 Shopify 教程](https://youtu.be/jDn6GIyQEbo)

## Header 页眉部分

### 创建 section

```liquid
header-group
```

复制

### Shopify 免费主题通用代码

```liquid
{
 "type": "header",
 "name": "Header Group",
 "sections": {
   "header": {
     "type": "header",
     "settings": {}
   },
   "announcement-bar": {
     "type": "announcement-bar",
     "settings": {}
   }
 },
 "order": ["announcement-bar","header"]
}
```

复制

### 极简通用代码

```liquid
{
 "type": "header",
 "name": "Header Group",
 "sections": {
   "header": {
     "type": "header",
     "settings": {}
   }
 },
 "order": ["header"]
}
```

复制

## Footer 页脚部分

### 创建 section

```liquid
footer-group
```

复制

### 通用代码

```liquid
{
 "type": "footer",
 "name": "Footer Group",
 "sections": {
   "footer": {
     "type": "footer",
     "settings": {}
   }
 },
 "order": ["footer"]
}
```

复制

## 修改 theme.liquid 中引用

### 将

```
{% section 'announcement-bar' %}
{% section 'header' %}
```

### 改为

```liquid
{% sections 'header-group' %}
```

复制

### 将

```
{% section 'footer' %}
```

### 改为

```liquid
{% sections 'footer-group' %}
```

复制

![](https://shopify2006.com/assets/built/shopify2006.ico?v=2ea66c62ff)