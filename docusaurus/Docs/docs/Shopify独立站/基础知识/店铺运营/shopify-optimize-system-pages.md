---
title: "优化Shopify 404、搜索和账户页面体验"
description: "学习如何通过修改Shopify主题代码，优化用户登录后的跳转体验，并将旧版Liquid模板（如登录、注册、账户页面）转换为支持分区的JSON模板，提升店铺的自定义能力和用户体验。"
keywords:
  - Shopify
  - 404页面
  - 账户页面
  - 登录跳转
  - JSON模板
  - Shopify 2.0
  - 用户体验
slug: shopify-optimize-system-pages
tags: ['Shopify', '主题开发', '用户体验', 'Shopify 2.0']
---

Shopify 店铺中一些默认的系统页面，如 404 页面、客户登录/账户页面，往往缺乏足够的自定义选项，并且用户体验流程也并非最佳。本教程将分享两个实用的技巧，帮助你优化这些页面的功能和体验。

:::tip[视频教程]
*   **本期内容视频**: [观看 YouTube 教程](https://youtu.be/hlbatlof0Rc)。
*   **自定义 404 页面 (旧版主题)**: [参考 Bilibili 视频教程](https://www.bilibili.com/video/BV1yD4y1o7PK?share_source=copy_web)。
:::

## 一、优化客户登录后的跳转体验

默认情况下，客户在你的店铺中登录后，通常会被直接带到他们的“我的账户”页面。这会打断他们原本的购物流程。一个更好的体验是，在他们登录成功后，立即将他们重定向到他们感兴趣的页面，比如热销产品列表或特定的活动页面。

### 实现方法

你只需要在登录表单的 Liquid 代码中添加一个 `return_to` 参数即可。

1.  **编辑代码**: 进入 Shopify 主题的代码编辑器，找到包含 `customer_login` 的文件，通常是 `main-login.liquid` 或 `customers/login.liquid`。
2.  **找到登录表单**: 找到类似 `{%- form 'customer_login' -%}` 的代码。
3.  **添加参数**: 在 `form` 标签中添加 `return_to` 参数，并指定你希望用户跳转到的 URL。

```liquid title="customers/login.liquid"
{%- comment %} 将下面的代码 {% endcomment %}
{%- form 'customer_login' -%}

{%- comment %} 修改为 {% endcomment %}
{%- form 'customer_login', return_to: '/collections/all?sort_by=best-selling' -%}
```

:::tip[推荐跳转目的地]
*   **热销产品页**: `return_to: '/collections/all?sort_by=best-selling'`
*   **所有产品系列**: `return_to: '/collections/all'`
*   **特定活动页面**: `return_to: '/pages/campaign'`
:::

这个小改动可以无缝地将客户带回购物流程，有效提升转化率。并且，客户如果想查看账户，仍然可以点击导航栏的账户图标进入，不受影响。

## 二、将模板转换为支持分区的 JSON 格式

在 Shopify Online Store 2.0 架构中，JSON 模板允许你在几乎所有页面上（包括登录、注册、账户页面）通过主题编辑器添加、删除和重新排序“分区 (Sections)”，极大地增强了页面的自定义能力。

如果你的主题还在使用旧的 `.liquid` 模板，可以按照以下步骤将其转换为新的 JSON 格式。

:::info[视频教程]
关于页面转换的更详细步骤，可以[参考此视频教程](https://www.bilibili.com/video/BV1Vq4y1n7rr?share_source=copy_web)。
:::

### 转换步骤 (以登录页面为例)

1.  **创建新的 Section 文件**:
    *   在 `sections` 目录下，创建一个新的 section 文件，命名为 `main-login.liquid`。
    *   将 `templates/customers/login.liquid` 文件中的 **所有代码** 剪切并粘贴到这个新的 `sections/main-login.liquid` 文件中。

2.  **创建新的 JSON Template 文件**:
    *   删除原来的 `templates/customers/login.liquid` 文件。
    *   在 `templates` 目录下，点击 "Add a new template"。
    *   选择为 `customers/login` 创建模板，并确保类型是 `JSON`。
    *   将以下代码粘贴到新建的 `customers/login.json` 文件中：

    ```json title="templates/customers/login.json"
    {
        "sections": {
            "main": {
                "type": "main-login",
                "settings": {}
            }
        },
        "order": [
            "main"
        ]
    }
    ```

3.  **完成！**
    *   现在，当你进入主题编辑器并导航到登录页面时，你就可以像在主页上一样为它添加分区了。

你可以对 `register` (注册)、`account` (账户)、`404` (404页面) 等其他页面重复此过程，以解锁整个网站的完全模块化定制能力。
