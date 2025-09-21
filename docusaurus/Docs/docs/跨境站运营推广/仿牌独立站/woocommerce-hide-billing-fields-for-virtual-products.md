---
title: "WooCommerce：如果是虚拟产品，则隐藏结帐帐单字段"
description: "本教程提供了一段简单的PHP代码，可以帮助你在WooCommerce商店中，当购物车内仅包含虚拟产品时，自动隐藏掉不必要的结账账单字段，优化用户体验。"
keywords: ["WooCommerce", "虚拟产品", "结账字段", "PHP", "代码片段", "优化体验"]
slug: /woocommerce-hide-billing-fields-for-virtual-products
---

# WooCommerce：如果是虚拟产品，则隐藏结帐帐单字段

![woocommerce-virtual-product.png](https://list.ucards.store/d/img/woocommerce-virtual-product.png)

:::tip[你的网店是否销售虚拟产品？]
- ✅ 销售软件、电子书、课程或服务？
- ✅ 觉得结账时让客户填写地址信息很多余？
- ✅ 想要简化虚拟产品的购买流程，提高转化率？
本文将提供一个即插即用的代码解决方案，轻松实现这一功能。
:::

**阅读本篇，你将学会：**
- 为什么需要为虚拟产品隐藏账单字段。
- 如何安全地向你的WordPress网站添加自定义代码。
- 一段PHP代码，实现仅在购物车含虚拟产品时隐藏特定账单字段。

## 一、为什么需要隐藏账单字段？

:::info[💡 优化用户体验是关键]
对于销售**虚拟产品**（如软件许可、在线课程、咨询服务、会员资格等）的WooCommerce商店来说，客户的物理地址信息是完全没有必要的。在结账时强制用户填写这些字段，不仅会拖慢购买流程，还可能因为涉及过多个人信息而引起用户反感，从而导致订单流失。

通过代码自动隐藏这些不必要的字段，可以：
1.  **简化流程**：让购买过程更快捷、更顺畅。
2.  **提升转化**：减少用户因填写繁琐信息而放弃购买的可能性。
3.  **增强信任**：只索取必要的客户信息（如姓名和邮箱），让用户感觉更安全。
:::

## 二、如何添加自定义代码

要实现这个功能，我们需要向你的网站添加一小段PHP代码。最安全、最推荐的方法是使用一个专门的代码片段管理插件，或者添加到你子主题的 `functions.php` 文件中。

**不推荐直接修改父主题的 `functions.php` 文件，因为主题更新后你的修改将会丢失。**

### 推荐方法：使用 Code Snippets 插件

1.  在你的WordPress后台，进入 **“插件”** -> **“安装插件”**。
2.  搜索 **“Code Snippets”**，安装并激活它。
3.  在左侧菜单栏找到 **“Snippets”** -> **“Add New”**。
4.  给你的代码片段起一个标题，例如 “Hide Billing Fields for Virtual Products”。
5.  将下面的代码粘贴到代码区域。
6.  选择 **“Only run in administration area”** 下面的 **“Run snippet everywhere”**。
7.  点击 **“Save Changes and Activate”**。

---

## 三、核心代码片段

将以下PHP代码复制并添加到你的网站中：

```php
/**
 * @snippet       Hide Billing Fields @ WooCommerce Checkout for Virtual Products
 * @author        Rodolfo Melogli
 * @compatible    WooCommerce 8
 * @sourcecode    https://www.businessbloomer.com/woocommerce-hide-billing-fields-for-virtual-products/
 */
 
add_filter( 'woocommerce_checkout_fields' , 'bbloomer_unset_billing_checkout_fields' );
 
function bbloomer_unset_billing_checkout_fields( $fields ) {
 
    // 前提条件：如果购物车为空，则不执行任何操作
    if ( ! WC()->cart ) {
        return $fields;
    }
 
    // 第一步：检查购物车中是否“需要配送”
    // 如果为 false，意味着购物车中全是虚拟产品
    $needs_shipping = false;
    if ( WC()->cart->needs_shipping() ) {
        $needs_shipping = true;
    }
 
    // 第二步：如果不需要配送，则隐藏（unset）字段
    if ( $needs_shipping === false ) {
        unset( $fields['billing']['billing_company'] );
        unset( $fields['billing']['billing_address_1'] );
        unset( $fields['billing']['billing_address_2'] );
        unset( $fields['billing']['billing_city'] );
        unset( $fields['billing']['billing_postcode'] );
        unset( $fields['billing']['billing_country'] );
        unset( $fields['billing']['billing_state'] );
        unset( $fields['billing']['billing_phone'] );
        // 你也可以取消下面的注释来隐藏“姓氏”字段
        // unset( $fields['billing']['billing_last_name'] );
    }
 
    // 第三步：返回修改后的字段数组
    return $fields;
}
```

### 代码解释

-   `add_filter( 'woocommerce_checkout_fields' , '...' );`：这是一个WooCommerce的钩子（Hook），允许我们修改结账页面的字段。
-   `WC()->cart->needs_shipping()`：这是关键函数。它会检查购物车里的所有商品。只要有一个商品不是“虚拟”的（即需要配送），它就会返回 `true`。只有当所有商品都是“虚拟”的时，它才会返回 `false`。
-   `unset( $fields['billing']['...'] );`：这行代码的作用就是“移除”一个字段。代码中默认移除了公司、地址、城市、邮编、国家、州/省和电话字段。你可以根据需要，通过添加或删除 `unset` 行来决定隐藏哪些字段。

---

## 四、测试效果

添加并激活代码后，进行以下测试：

1.  **测试虚拟产品**：将一个或多个“虚拟”产品加入购物车，然后进入结账页面。你会发现地址、电话等字段已经消失了，只剩下姓名和邮箱等必要信息。
2.  **测试实体产品**：清空购物车，将一个需要邮寄的实体产品加入购物车。再次进入结账页面，你会发现所有的账单地址字段都正常显示。
3.  **测试混合产品**：将一个虚拟产品和一个实体产品同时加入购物车。进入结账页面，所有字段也应该正常显示，因为购物车需要配送。

通过以上测试，可以确保代码正确地在不同场景下工作。

## 五、常见问题

- **❓ 问题1：我添加了代码，但是没有效果怎么办？**
  > 答：请检查以下几点：
  > 1. 确保代码已经激活。
  > 2. 清除你的网站缓存和浏览器缓存。
  > 3. 确认你的产品在WooCommerce产品编辑页面中，确实勾选了“虚拟 (Virtual)”选项。

- **❓ 问题2：我想保留电话字段，应该怎么修改代码？**
  > 答：很简单，只需在代码中找到 `unset( $fields['billing']['billing_phone'] );` 这一行，在行首加上 `//` 将其注释掉，或者直接删除这一行即可。

- **❓ 问题3：这个方法会影响支付插件吗？**
  > 答：通常不会。大多数支付插件依赖的是姓名和邮箱，隐藏地址字段对它们没有影响。但如果你使用的支付方式强制要求提供完整的账单地址，可能会出现问题。不过这种情况非常罕见。
