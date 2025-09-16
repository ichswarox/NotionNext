---
title: 如何屏蔽同行查看你Shopify店铺的热销产品
description: 通过修改Shopify主题的Liquid代码，屏蔽或重定向“按销量排序”功能，有效防止同行轻易发现你的热销产品，减少被抄袭和跟卖的风险。
keywords:
  - Shopify
  - 热销产品
  - 屏蔽同行
  - 防止跟卖
  - Shopify运营
  - Liquid代码
slug: shopify-hide-best-selling-products
tags: ['Shopify', '店铺安全', '运营技巧', 'Liquid']
---

在竞争激烈的电商市场中，保护你的店铺数据至关重要。很多竞争对手会通过查看你店铺的“热销产品”列表来分析你的销售策略，从而进行抄袭或跟卖。本教程将教你如何通过简单的代码修改，屏蔽此功能，保护你的商业机密。

:::tip[视频教程]
更详细的操作步骤可以观看我们的 [YouTube 视频教程](https://youtu.be/BRVH-An8EbY?feature=shared)。
:::

## 原理说明

Shopify 的产品系列页面通常允许用户通过不同的方式对商品进行排序，其中就包括 `best-selling`（按销量排序）。我们的目标是找到控制排序逻辑的模板文件，并添加一段条件判断代码：如果用户试图按销量排序，我们就阻止这个操作，或者将他们重定向到默认的排序方式。

## 操作步骤

:::caution[重要提示]
在编辑任何主题代码之前，请务必 **备份你的主题**！这样可以在出现问题时轻松恢复。
:::

1.  **找到主题代码文件**:
    *   登录你的 Shopify 后台，进入 **在线商店 (Online Store)** > **模板 (Themes)**。
    *   在你正在使用的主题上，点击 **操作 (Actions)** > **编辑代码 (Edit code)**。
    *   你需要找到负责渲染产品系列页面的文件。常见的文件名是 `main-collection-product-grid.liquid`、`collection-template.liquid` 或类似的文件，具体取决于你的主题。你可以使用代码编辑器的搜索功能查找包含 `collection.sort_by` 的文件。

2.  **添加判断逻辑代码**:
    *   在找到了控制排序的逻辑部分后，你需要加入以下 `if` 条件判断。这段代码的目的是检查当前的排序方式是否为 `best-selling`。

    ```liquid title="示例：main-collection-product-grid.liquid"
    {% comment %} 找到类似下面这样的代码，它可能是一个 <select> 或者一组链接 {% endcomment %}
    {%- for option in collection.sort_options -%}
      <option value="{{ option.value }}" {% if option.value == collection.sort_by %}selected="selected"{% endif %}>
        {{ option.name }}
      </option>
    {%- endfor -%}

    {% comment %} 你需要修改它，或者在它的外层添加逻辑判断 {% endcomment %}

    {% comment %} 方案一：直接隐藏“按销量排序”选项 {% endcomment %}
    <select name="sort_by" id="SortBy">
      {%- for option in collection.sort_options -%}
        {%- unless option.value == 'best-selling' -%}
          <option value="{{ option.value }}" {% if option.value == collection.sort_by %}selected="selected"{% endif %}>
            {{ option.name }}
          </option>
        {%- endunless -%}
      {%- endfor -%}
    </select>

    {% comment %} 方案二：如果已按销量排序，则跳转到其他页面或使用默认排序 (更复杂，不推荐新手) {% endcomment %}
    {% if collection.sort_by == 'best-selling' %}
      <script>
        // 你可以在这里重定向用户，但这可能会影响用户体验
        // window.location.href = '/collections/all'; 
      </script>
      <p>按销量排序功能已禁用。</p>
    {% else %}
      {% comment %} 在这里放置正常的排序和产品展示代码 {% endcomment %}
      ...
    {% endif %}
    ```

    对于大多数用户来说，**方案一（直接隐藏选项）** 是最简单且最有效的。你只需在循环输出排序选项时，加入 `{%- unless option.value == 'best-selling' -%}` 判断，即可将“按销量排序”这个选项从下拉菜单中移除。

3.  **保存并测试**:
    *   点击 **保存 (Save)**。
    *   访问你店铺的任意一个产品系列页面，检查排序选项中是否已经没有了“按销量排序”。

通过以上步骤，你就可以有效地阻止包括竞争对手在内的所有人查看你店铺的热销产品，为你的运营增加一道安全屏障。
