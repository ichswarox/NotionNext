---
title: "忘记 WordPress 后台登录密码怎么办？找回 WordPress 登录密码的 3 种方式"
description: "本教程详细介绍 3 种方法重置 WordPress 登录密码，即使忘记用户名和邮箱也没关系。"
tags: [wordpress, password, reset, login, security]
slug: /wordpress-password-reset-tutorial
---

# 忘记 WordPress 后台登录密码怎么办？找回 WordPress 登录密码的 3 种方式

:::caution
Last updated: Oct 15, 2025
:::

![忘记WordPress后台登录密码怎么办？找回WordPress登录密码的3种方式](https://website-custom.com/wp-content/uploads/2025/02/forgot-password.webp)

## 文章概览

如果你忘记 WordPress 后台登录密码，先不要着急，即使忘记用户名和邮箱也没关系，本文分享 3 种方法重置 WP 登录密码。

## 忘记 WordPress 后台登录密码怎么办？

如果你不经常登录 WordPress 后台，可能会忘记登录密码，这时候怎么办呢？

本篇文章 Well 会分享 3 中重置 WordPress 登录密码的方法：

:::tip
推荐使用以下三种方法来重置密码：
:::

## 使用"忘记密码"功能重置登录密码

这是最常用的重置密码的方式，前提是你还记得自己 WordPress 管理员账号和账户中填写的邮箱。

首先打开自己 WordPress 网站的后台登录页面，默认的 WP 后台登录页面地址是：https://domain.com/wp-admin/

1. 在登录页面中点击"Lost your password"找回密码。
2. 填写你的 WP 账号邮箱。
3. 这时候会在你的邮箱种收到一封重置密码的邮件。
4. 点击邮件中的链接就可以设置新的登录密码。

## 通过数据库 phpMyAdmin 修改登录密码

如果你不记得自己 WordPress 账号的邮箱和用户名，可以通过 phpMyAdmin 在数据库中直接修改账号密码。

以宝塔面板举例（其他服务器面板也是相同的步骤，只不过面板的操作界面不一样）：

1. 点击数据库，开启 phpMyAdmin。
2. 找到并打开自己网站对应的数据库。
3. 找到名为"wp_users"的数据表，点击进入该数据表。
4. 进入到数据表后，编辑对应的 WordPress 登录账号。
5. 找到 user_pass 这一行，选着 MD5 的加密方式，然后在右侧数据新的 WP 账户登录密码。
6. 点击右下角"执行"按钮。

之后就可以使用新的密码进行 WordPress 后台登录。

:::caution
操作数据库时请务必小心，错误的操作可能会影响网站数据。
:::

## 在 functions.php 文件设置新的登录密码

如果你对数据库不熟悉，担心自己误操作会影响网站的数据，那么这个方法可能更适合你，只需要在主题文件夹下的 functions.php 内添加一段代码即可。

1. 在服务器面板中打开自己网站的文件夹，找到正在使用主题的文件目录，编辑 functions.php 文件。
2. 具体文件目录是: /wp-content/themes/主题/functions.php。
3. 添加以下代码到 functions.php 文件的末尾：

```php
function reset_admin_password() {
    $user = get_user_by('login', 'admin');
    if ($user) {
        wp_set_password('newpassword', $user->ID);
    }
}
add_action('init', 'reset_admin_password');
```

- 将"admin"改成你账户的真实登录名
- 将"newpassword"改成你的新密码
- 保存文件，但先不要关闭

**然后再来到你的 WP 后台登录页面，随便输入账号密码并登录，目的是让程序执行一次 functions.php 文件。**

**进行一次登录操作后，回到 functions.php 编辑界面，删除刚刚添加的重置密码代码并保存文件。**

之后就可以使用新密码进行后台登录。

## 总结

以上就是忘记 WordPress 登录密码后重置密码的 3 种方式。

:::info
如果你想自定义后台登录页样式，可以参考：自定义 WordPress 登录页样式。
:::

## 下载链接

| 插件名称 | 下载链接 | 版本 | 备注 |
|---------|----------|------|------|
| WordPress | [WordPress 官网](https://wordpress.org/) | 最新版 | 内容管理系统 |
