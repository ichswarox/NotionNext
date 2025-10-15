---
title: "宝塔面板如何备份网站？2种方法按需选择"
description: "本篇文章介绍了宝塔面板如何备份网站，包括备份到服务器磁盘和备份到云盘两种方法。"
tags: [宝塔面板, 网站备份, 数据安全, 云存储]
slug: /bt-panel-backup-tutorial
---

# 宝塔面板如何备份网站？2种方法按需选择

Last updated: Oct 15, 2025

![宝塔面板如何备份网站配图](https://website-custom.com/wp-content/uploads/2024/11/backup-file.webp)

网站备份是每个站长必须要做的事，不然如果网站出现无法解决的问题或者文件丢失，将会损失惨重，这篇文章教你宝塔面板如何备份网站。

## 宝塔面板如何备份网站？

宝塔备份网站其实很简单。

可以通过添加"计划任务"的方式，自动备份网站和数据库。

并且支持备份到服务器磁盘或者是备份到云盘。

本篇文章就讲到了两种备份方式的操作步骤。

:::tip
网站备份是网站管理中最重要的环节之一，建议定期备份以确保数据安全。
:::

## 备份网站到服务器磁盘

首先，进入到宝塔面板操作界面。

<Tabs>
<TabItem value="schedule-task" label="计划任务" default>
![宝塔面板，计划任务菜单](https://website-custom.com/wp-content/uploads/2024/11/backup-file.webp)
</TabItem>
<TabItem value="add-task" label="添加任务">
![添加计划](https://website-custom.com/wp-content/uploads/2024/11/backup-file.webp)
</TabItem>
</Tabs>

打开左侧菜单：计划任务。

点击添加任务。

添加一个备份网站的任务：

<Tabs>
<TabItem value="backup-site" label="备份网站" default>
![选择备份整站](https://website-custom.com/wp-content/uploads/2024/11/backup-file.webp)
</TabItem>
<TabItem value="backup-db" label="备份数据库">
![选择备份数据库](https://website-custom.com/wp-content/uploads/2024/11/backup-file.webp)
</TabItem>
<TabItem value="run-task" label="执行任务">
![执行计划任务](https://website-custom.com/wp-content/uploads/2024/11/backup-file.webp)
</TabItem>
</Tabs>

设置任务：

- 任务类型：备份网站
- 执行周期：每天，X时X分
- 备份提醒：任务执行失败接受通知，消息渠道按需选择
- 备份网站：全部
- 备份到：服务器磁盘
- 保留最新：5-7份

最后点击确定。

再添加一个任务，备份数据库：

任务类型：备份数据库

- 执行周期：每天，时间建议和本分网站的计划时间错开
- 备份提醒：任务执行失败接受通知
- 数据库：全部
- 备份到：服务器磁盘
- 最新保留：5-7份

最后点击确定。

这样网站备份计划就设置好了，以后每天在特定时间就会自动备份网站和数据库。

也可以立即进行备份：

- 选中两个计划
- 选择执行任务
- 点击批量操作

这样会立即执行备份任务。

## 备份网站到云盘

备份网站到云盘之前，需要先注册[Google Drive](https://drive.google.com/drive/home)。

备份到云盘的好处是不占用服务器磁盘空间，适合服务器存储剩余不多的小伙伴。

<Tabs>
<TabItem value="install-plugin" label="安装插件" default>
![宝塔面板计划商店](https://website-custom.com/wp-content/uploads/2024/11/backup-file.webp)
</TabItem>
<TabItem value="search-plugin" label="搜索插件">
![搜索谷歌云网盘](https://website-custom.com/wp-content/uploads/2024/11/backup-file.webp)
</TabItem>
<TabItem value="setup-plugin" label="设置插件">
![设置谷歌云网盘](https://website-custom.com/wp-content/uploads/2024/11/backup-file.webp)
</TabItem>
</Tabs>

点击宝塔面板菜单栏 – 软件商店。

在官方应用里搜索"谷歌云网盘"，并安装它。

安装完成后，点击设置。

<Tabs>
<TabItem value="auth-step1" label="打开链接">
![打开链接](https://website-custom.com/wp-content/uploads/2024/11/backup-file.webp)
</TabItem>
<TabItem value="auth-step2" label="登录账号">
![登录谷歌账号](https://website-custom.com/wp-content/uploads/2024/11/backup-file.webp)
</TabItem>
<TabItem value="auth-step3" label="复制URL">
![复制该页面的网址](https://website-custom.com/wp-content/uploads/2024/11/backup-file.webp)
</TabItem>
<TabItem value="auth-step4" label="验证URL">
![粘贴网址并验证](https://website-custom.com/wp-content/uploads/2024/11/backup-file.webp)
</TabItem>
</Tabs>

在浏览器打开谷歌云网盘提供的链接。

使用谷歌账号登录。

登录后会自动跳转到这样的一个页面，复制这个网页的URL地址。

将复制的URL地址粘贴到Google Drive验证框里，点击立即验证。

<Tabs>
<TabItem value="success" label="验证成功" default>
![验证成功](https://website-custom.com/wp-content/uploads/2024/11/backup-file.webp)
</TabItem>
<TabItem value="modify-task" label="修改备份计划">
![设置计划保存到谷歌云网盘](https://website-custom.com/wp-content/uploads/2024/11/backup-file.webp)
</TabItem>
</Tabs>

提示验证成功。

打开我们原本建的备份计划，修改备份到谷歌硬盘，点击确定保存。

如果执行了备份计划，网站备份会保存到Google Drive：

- 数据库备份被储存在other文件夹
- 网站备份被储存在web文件夹

至此，宝塔面板备份网站完成。

## 相关资源

| 资源名称 | 下载链接 |
|---------|----------|
| 宝塔面板 | [宝塔面板官网](https://www.bt.cn/new/index.html) |
| Google Drive | [Google Drive](https://drive.google.com/drive/home) |
| 网站备份工具 | [网站备份工具](https://website-custom.com/resources/) |
