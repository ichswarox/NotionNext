---
title: "如何重置WordPress：使用Database Reset插件"
description: "本指南将向您展示如何使用Database Reset插件轻松重置您的WordPress网站数据库，无论是完全重置还是选择性重置，都无需重新安装WordPress。"
tags: ["WordPress", "数据库重置", "Database Reset", "WP-CLI", "网站维护", "插件教程"]
slug: /wordpress-database-reset-guide
---

# 如何重置WordPress

重置WordPress网站最简单的方法之一是使用名为 **Database Reset** 的插件。安装并激活插件后，您可以在WordPress后台的“工具”菜单下找到“数据库重置”选项。

# Database Reset – WordPress 插件 | WordPress.org

![DataBaseReset-mm.webp](https://list.ucards.store/d/img/DataBaseReset-mm.webp)

## 描述

如果您需要更多的重置工具，可以安装免费且功能更强大的 [WP Reset](https://wordpress.org/plugins/wp-reset/) 插件。它提供了更多重置工具，可以单独重置插件、主题、瞬态数据和媒体文件。您还可以创建数据库快照，以便在出错时一键恢复您的WP网站。

WordPress Database Reset 插件允许您将**数据库**（所有表或您选择的表）重置回默认设置，而无需经历WordPress的5分钟安装过程或修改任何文件。

**功能**

-   极其快速的一键式过程来重置WordPress数据库表
-   可选择重置整个数据库或特定的数据库表
-   安全且超级简单易用
-   安全 – 不可能意外点击重置
-   喜欢命令行？用一个命令即可重置数据库
-   非常适合需要清理数据库中不必要内容的主题和插件开发者

**命令行**

激活后，您可以通过 [WordPress CLI](http://wp-cli.org/) 使用 WordPress Database Reset 插件。WP-CLI 命令列表如下：

重置所有表：
```
wp reset database
```

指定要重置的表列表：
```
wp reset database --tables='users, posts, comments, options'
```

当前主题和插件将默认重新激活。您可以像这样禁用它们：
```
wp reset database --no-reactivate
```

列出表名：
```
wp reset list
```

**支持**

在 [WordPress Database Reset 支持论坛](https://wordpress.org/support/plugin/wordpress-database-reset)中创建一个新帖子。

**想帮忙吗？**

-   提供新的[语言翻译](https://translate.wordpress.org/projects/wp-plugins/wordpress-database-reset)
-   想帮助其他可能遇到问题的人？[在支持论坛上回答问题](https://wordpress.org/support/plugin/wordpress-database-reset)。
-   评价该插件 – [去评价](https://wordpress.org/support/plugin/wordpress-database-reset/reviews/#new-post)

WP Database Reset 最初由 [Chris Berthe](https://github.com/chrisberthe) 于2011年10月开发。请不要向他发送任何支持问题。如果您需要帮助，[官方论坛](https://wordpress.org/support/plugin/wordpress-database-reset/)是获得帮助的最好和最快的方式。

## 截图

![](https://ps.w.org/wordpress-database-reset/assets/screenshot-1.gif?rev=2137340)
WP Database Reset 插件页面

![WP Database Reset 插件页面](https://ps.w.org/wordpress-database-reset/assets/screenshot-1.gif?rev=2137340)

## 常见问题

### 如何禁用此插件？

只需在WordPress后台的标准插件概览页面停用它，或者通过FTP访问重命名插件文件夹 `/wp-content/plugins/wordpress-database-reset/`。

### 如何报告安全漏洞？

您可以通过 Patchstack 漏洞披露计划报告安全漏洞。Patchstack 团队帮助验证、分类和处理任何安全漏洞。[报告安全漏洞](https://patchstack.com/database/vdp/wordpress-database-reset)。

## 评价

![](https://secure.gravatar.com/avatar/b78cbc76a28cf17bd3c1ed1aae47467483648cb2af0ba0c24ef806ee2d078ef4?s=60&d=retro&r=g)

### [简单易用！](https://wordpress.org/support/topic/simple-and-easy-529/)

[cdgweb](https://profiles.wordpress.org/cdgweb/ "Posts by cdgweb") 2025年6月20日

我有一个域名上的旧网站，想重新使用它。能够删除除用户外的所有内容真是太棒了。

![](https://secure.gravatar.com/avatar/ec8b8422bb465ae8bc396e91e6078b8974b35a964447f8c8ecc86edf1ac2b281?s=60&d=retro&r=g)

### [对开发者有用的工具](https://wordpress.org/support/topic/useful-tool-for-developers/)

[RealMag777](https://profiles.wordpress.org/realmag777/ "Posts by RealMag777") 2024年4月23日

谢谢，它对于开发任务来说既酷又快。

![](https://secure.gravatar.com/avatar/0282991e10df0d5b0dfc61251d2737216bf02458995056c9f73b5fe57da9a43e?s=60&d=retro&r=g)

### [优秀的插件！](https://wordpress.org/support/topic/exellent-plugin-46/)

[lookerdz](https://profiles.wordpress.org/lookerdz/ "Posts by lookerdz") 2021年10月6日 1条回复

感谢这个伟大的插件。

![](https://secure.gravatar.com/avatar/eaea8f9b0743f5ec77ca2a5a0356aaba38e778cd2eb0dc3828bbf0c676117b99?s=60&d=retro&r=g)

### [重置后无法登录](https://wordpress.org/support/topic/i-cant-login-after-reset/)

[namnh73](https://profiles.wordpress.org/namnh73/ "Posts by namnh73") 2021年7月13日

重置后我无法登录。

![](https://secure.gravatar.com/avatar/add47854d18fd4e983d426df510d6b7f70054fff2917e3363d915cde73ad5f52?s=60&d=retro&r=g)

### [节省时间](https://wordpress.org/support/topic/time-saver-281/)

[davemeyers](https://profiles.wordpress.org/davemeyers/ "Posts by davemeyers") 2021年1月14日 1条回复

非常好用！！！

![](https://secure.gravatar.com/avatar/9885822666c47a62841f2b55b700bc31a26e73692d179d65ee9265b412832f7c?s=60&d=retro&r=g)

### [节省时间](https://wordpress.org/support/topic/time-saver-280/)

[sinisa\_](https://profiles.wordpress.org/sinisa_/ "Posts by sinisa_") 2021年1月13日 1条回复

节省时间，谢谢伙伴们制作这个。

[阅读所有77条评价](https://wordpress.org/support/plugin/wordpress-database-reset/reviews/)

## 贡献者和开发者

“Database Reset” 是开源软件。以下人员为该插件做出了贡献。

贡献者

-   ![](https://secure.gravatar.com/avatar/0128e826bd2acd495936bf252a4f0f80a3263c656cb8d69d9e306e2ea741a251?s=32&d=mm&r=g) [WebFactory](https://profiles.wordpress.org/webfactory/)

“Database Reset” 已被翻译成11种语言。感谢[翻译者们](https://translate.wordpress.org/projects/wp-plugins/wordpress-database-reset/contributors)的贡献。

[将 “Database Reset” 翻译成您的语言。](https://translate.wordpress.org/projects/wp-plugins/wordpress-database-reset)

### 对开发感兴趣？

[浏览代码](https://plugins.trac.wordpress.org/browser/wordpress-database-reset/)，查看 [SVN 仓库](https://plugins.svn.wordpress.org/wordpress-database-reset/)，或通过 [RSS](https://plugins.trac.wordpress.org/log/wordpress-database-reset/?limit=100&mode=stop_on_copy&format=rss) 订阅[开发日志](https://plugins.trac.wordpress.org/log/wordpress-database-reset/)。

## 更新日志

#### 3.25

-   2025/08/04
-   小代码修复

#### 3.24

-   2024/06/30
-   小安全修复

#### 3.23

-   2024/02/19
-   小安全修复

#### 3.22

-   2022/11/22
-   小安全修复

#### 3.21

-   2021/07/29
-   修复 WP 5.8 的问题

#### 3.20

-   2021/04/26
-   仍在尝试警告人们此插件即将停用

#### 3.19

-   2021/02/25
-   继续逐步淘汰该插件，以支持 WP Reset

#### 3.18

-   2021/01/30
-   添加了弹出菜单
-   开始逐步淘汰此插件，以支持 WP Reset

#### 3.17

-   2020/10/06
-   许可证修复
-   添加了 WP 301 Redirects 的推广

#### 3.16

-   2020/09/01
-   修复了选择表元素的问题

#### 3.15

-   2020/01/14
-   安全修复 – 感谢 Wordfence 的 Chloe
-   8万次安装；761,300次下载

#### 3.1

-   2019/08/13
-   WebFactory 接管开发
-   GUI 和消息传递方面的小改进
-   修复了与管理员用户ID不为1相关的严重错误
-   7万次安装；665,500次下载

#### 3.0.2

-   修复了插件页面未在工具菜单中显示的问题（在某些托管提供商上）
-   更新了会话令牌的恢复方式
-   移除了不必要的 nonce
-   将“最低要求”版本提升至 4.2
-   将‘theme_data’更改为‘theme_plugin_data’

#### 3.0.1

-   修复了更新后插件被禁用的问题，感谢 Ulrich Pogson
-   更新了 pot 文件

#### 3.0.0

-   完全重写
-   添加了扩展的 WP_CLI 命令类
-   清理了管理界面
-   移除了不必要的帮助选项卡
-   提交按钮现在在用户输入安全码之前是禁用的
-   添加了 PayPal 捐赠按钮
-   移除了过时的本地化文件
-   更新了文本域以匹配 translate.wordpress.org 的 slug

#### 2.3.2

-   添加了保留活动主题的选项，感谢 Ulrich Pogson
-   遵守 WordPress PHP 编码语法标准
-   删除用户会话并重新创建
-   将 backup_tables 方法分为两个新方法
-   仅重置 WP 表，不重置自定义表
-   法语语言更新，感谢 Fx Benard
-   修复了未定义变量：backup_tables 的问题

#### 2.3.1

-   修复了在选择“options”表时，重新激活插件的 div 不显示的错误

#### 2.3

-   移除了已弃用的函数 $wpdb->escape()，替换为 esc_sql()
-   添加了德语翻译，感谢 Ulrich Pogson
-   更新了 screenshot-1.png
-   重命名了默认本地化文件
-   修复了在为版本2.2清理代码时损坏的 if 条件

#### 2.2

-   修复了脚本和样式仅在插件页面加载的问题
-   格式化代码以符合 WordPress 语法标准

#### 2.1

-   将 3.3 中已弃用的 get_userdatabylogin() 替换为 get_user_by()
-   将已弃用的 add_contextual_help() 更新为 add_help_tab()
-   备份表条件检查中的小改动
-   将自定义的 _rand_string() 替换为核心的 wp_generate_password()
-   添加了葡萄牙语翻译 – 感谢 Fernando Lopes

#### 2.0

-   添加了选择要重置的表的功能，而不是必须重置整个数据库。
-   为多选添加了 bsmSelect。
-   修改了 screenshot-1.png。
-   修复了重定向错误
-   “重置后重新激活当前插件”仅在从下拉列表中选择选项表时显示。

#### 1.4

-   对翻译文件进行了一些更改
-   重命名了法语翻译文件以符合插件格式，而非主题格式
-   优化（直到可能的2.0版）

#### 1.3

-   将重新激活选项替换为所有当前活动的插件（不仅仅是此插件）
-   更新了语言文件

#### 1.2

-   添加了手动选择重置后是否应重新激活插件的功能
-   修改了类名以避免与 WordPress 核心的潜在冲突
-   修改了 wp_mail 覆盖
-   移除了 WordPress 3.0+ 已弃用的用户级别
-   修复了一个小错误，即如果管理员用户没有管理员权限，它会告诉用户他们有

#### 1.0

-   第一版
-   2011-10-04

## 元数据

-   版本 **3.25**
-   最后更新 **2个月前**
-   活跃安装 **10,000+**
-   WordPress 版本 **4.2 或更高**
-   测试至 **6.8.3**
-   PHP 版本 **5.2 或更高**
-   语言
    
    查看全部12种
    
    关闭
    
    [中文（中国）](https://cn.wordpress.org/plugins/wordpress-database-reset/)、[荷兰语](https://nl.wordpress.org/plugins/wordpress-database-reset/)、[英语（南非）](https://en-za.wordpress.org/plugins/wordpress-database-reset/)、[英语（美国）](https://wordpress.org/plugins/wordpress-database-reset/)、[德语](https://de.wordpress.org/plugins/wordpress-database-reset/)、[俄语](https://ru.wordpress.org/plugins/wordpress-database-reset/)、[西班牙语（阿根廷）](https://es-ar.wordpress.org/plugins/wordpress-database-reset/)、[西班牙语（智利）](https://cl.wordpress.org/plugins/wordpress-database-reset/)、[西班牙语（厄瓜多尔）](https://es-ec.wordpress.org/plugins/wordpress-database-reset/)、[西班牙语（西班牙）](https://es.wordpress.org/plugins/wordpress-database-reset/)、[西班牙语（委内瑞拉）](https://ve.wordpress.org/plugins/wordpress-database-reset/) 和 [瑞典语](https://sv.wordpress.org/plugins/wordpress-database-reset/)。
    
    [翻译成您的语言](https://translate.wordpress.org/projects/wp-plugins/wordpress-database-reset)
    
-   标签
    
    [database reset](https://wordpress.org/plugins/tags/database-reset/)[reset](https://wordpress.org/plugins/tags/reset/)[reset wp](https://wordpress.org/plugins/tags/reset-wp/)[wordpress-reset](https://wordpress.org/plugins/tags/wordpress-reset/)[wp reset](https://wordpress.org/plugins/tags/wp-reset/)
    
-   [高级视图](https://wordpress.org/plugins/wordpress-database-reset/advanced/)

## 评分

4.5星（满分5星）。

-   [67个5星评价 5星 67](https://wordpress.org/support/plugin/wordpress-database-reset/reviews/?filter=5)
-   [1个4星评价 4星 1](https://wordpress.org/support/plugin/wordpress-database-reset/reviews/?filter=4)
-   [1个3星评价 3星 1](https://wordpress.org/support/plugin/wordpress-database-reset/reviews/?filter=3)
-   [0个2星评价 2星 0](https://wordpress.org/support/plugin/wordpress-database-reset/reviews/?filter=2)
-   [8个1星评价 1星 8](https://wordpress.org/support/plugin/wordpress-database-reset/reviews/?filter=1)

[添加我的评价](https://wordpress.org/support/plugin/wordpress-database-reset/reviews/#new-post)

[查看所有评价](https://wordpress.org/support/plugin/wordpress-database-reset/reviews/)

## 贡献者

-   ![](https://secure.gravatar.com/avatar/0128e826bd2acd495936bf252a4f0f80a3263c656cb8d69d9e306e2ea741a251?s=32&d=mm&r=g) [WebFactory](https://profiles.wordpress.org/webfactory/)

## 支持

有话要说？需要帮助？

[查看支持论坛](https://wordpress.org/support/plugin/wordpress-database-reset/)
