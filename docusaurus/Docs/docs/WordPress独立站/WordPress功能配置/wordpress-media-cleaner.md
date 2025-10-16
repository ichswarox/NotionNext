---
title: "WordPress媒体文件清理：检测并删除未使用的图片释放存储空间"
description: "学习如何使用Media Cleaner插件检测并删除WordPress中未使用的图片，有效释放服务器存储空间，提升网站性能。"
tags: [wordpress, media cleaner, storage optimization, website performance]
slug: /wordpress-media-cleaner
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<div class="time-stamp">Last updated: Oct 15 2025</div>

![WordPress媒体清理](https://website-custom.com/wp-content/uploads/2025/05/file-cleansing.webp)

## 功能列表

:::note 重要提示
清理未使用的媒体文件前，强烈建议先备份您的网站和数据库，以防止误删正在使用的文件。
:::

## 为什么需要删除未使用的图片或文件？

### 释放服务器存储空间

未使用的图片会占用服务器存储资源，尤其是在主机空间有限的情况下，如果你的服务器磁盘满了，就需要被迫升级服务器配置，或者使用云存储，但这都是治标不治本的方法。

### 加快备份和迁移速度

冗余的媒体文件会增加备份和迁移的时间和复杂性。清理未使用的文件可以使这些过程更加高效。同时，如果媒体文件不及时清理，备份一般会多次，更会占用大量的存储空间。

## 清理网站媒体文件注意事项

**备份站点和数据库**，这是一定要做的事，否则如果出现问题（比如：错误删除在使用的图片）解决起来非常麻烦，但如果备份了网站，就什么都不怕，大不了恢复网站备份。

## WordPress如何检测并删除未使用的图片？

正常来讲，清理未使用的媒体，需要使用代码遍历网站的文章、页面、元数据等，识别出被引用的媒体文件。

然后使用排除法，将媒体库中的所有文件与遍历出来的已使用的文件进行比对，未被引用的文件即被视为"未使用"。

但是对于不懂代码的朋友，可以使用插件简化这一操作，本篇文章使用的是Media Cleaner。

### 安装Media Cleaner插件

<Tabs>
<TabItem value="wpadmin" label="WordPress后台安装" default>
1. 在WordPress后台插件安装界面搜索"Media Cleaner"
2. 点击"安装"然后"启用"该插件
</TabItem>
<TabItem value="ftp" label="FTP安装">
1. 下载插件文件
2. 通过FTP上传到`/wp-content/plugins/`目录
3. 在WordPress后台启用插件
</TabItem>
</Tabs>

### 使用Media Cleaner清理媒体文件

启用Media Cleaner插件后，就可以在"媒体"菜单栏里看到"Cleaner"入口：

![在WP后台 - 媒体中打开Cleaner](data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20width='331'%20height='151'%20viewBox='0%200%20331%20151'%3E%3C/svg%3E)

点击进入媒体清理界面。

![使用Media Cleaner扫描网站上的文件](data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20width='800'%20height='163'%20viewBox='0%200%20800%20163'%3E%3C/svg%3E)

点击左上角的"Scan"进行文件扫描。

等待1-2分钟后，就可以看到该插件自动检测出的网站上未使用的图片：

![使用Media Cleaner插件检测出网站上未使用的图片](data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20width='800'%20height='401'%20viewBox='0%200%20800%20401'%3E%3C/svg%3E)

针对检测出来的文件，可以选择点击右上角的"Delete All"全部删除（选择全删一定要提前备份网站），也可以在下方勾选指定的图片进行删除。

## 下载资源

| 资源类型 | 下载链接 | 说明 |
|---------|----------|------|
| Media Cleaner插件 | [WordPress插件页面](https://wordpress.org/plugins/media-cleaner/) | 官方WordPress插件库下载 |
| WordPress建站资源 | [WordPress建站资源下载](https://website-custom.com/resources/) | 丰富的WordPress插件和主题资源 |
