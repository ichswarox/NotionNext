---
title: "宝塔面板如何恢复网站备份？"
description: "本篇文章介绍了如何通过宝塔面板恢复网站备份，包括站点备份和数据库备份的恢复方法。"
tags: [宝塔面板, 网站备份, 数据恢复, 网站迁移]
slug: /bt-panel-restore-backup-tutorial
---

# 宝塔面板如何恢复网站备份？

Last updated: Oct 15, 2025

![宝塔面板如何恢复网站备份配图](https://website-custom.com/wp-content/uploads/2024/11/恢复备份.svg)

宝塔面板如何恢复网站备份？通过新建空白站点并上传备份的方式就可以恢复网站备份，具体操作步骤请点击查看本篇文章。

## 宝塔面板如何恢复网站备份？

恢复网站需要分别恢复站点备份和数据库备份。

再对网站默认设置进行调整即可。

步骤非常简单。

:::tip
恢复网站备份前，确保你已经有了完整的网站备份文件和数据库备份文件。
:::

## 恢复站点备份

登录宝塔面板，进入"网站"操作界面。

新建一个空白站点：

<Tabs>
<TabItem value="create-site" label="新建站点" default>
![新建一个站点，保证和备份的网站同域名，数据库账号密码同步](https://website-custom.com/wp-content/uploads/2024/11/恢复备份.svg)
</TabItem>
<TabItem value="site-settings" label="站点设置">
- 新站点域名需要与备份站点相同
- 新站点数据库账号和密码需要和备份站点的相同
</TabItem>
</Tabs>

点击新建站点的文件根目录。

<Tabs>
<TabItem value="upload-backup" label="上传备份文件" default>
![上传网站备份压缩包](https://website-custom.com/wp-content/uploads/2024/11/恢复备份.svg)
</TabItem>
<TabItem value="extract" label="解压备份文件">
![右键解压网站备份压缩包](https://website-custom.com/wp-content/uploads/2024/11/恢复备份.svg)
</TabItem>
<TabItem value="cleanup" label="清理备份文件">
![解压完成后删除备份文件压缩包](https://website-custom.com/wp-content/uploads/2024/11/恢复备份.svg)
</TabItem>
</Tabs>

点击左上角上传按钮。

上传站点备份文件压缩包。

右键点击上传好的站点备份压缩包。

点击解压。

解压后完成后。

删除站点备份压缩包。

站点备份恢复完成。

## 恢复数据库备份

<Tabs>
<TabItem value="import-db" label="导入数据库" default>
![导入数据库](https://website-custom.com/wp-content/uploads/2024/11/恢复备份.svg)
</TabItem>
<TabItem value="upload-db" label="上传数据库备份">
![选择从本地上传](https://website-custom.com/wp-content/uploads/2024/11/恢复备份.svg)
</TabItem>
<TabItem value="complete-import" label="完成导入">
![上传后点击对应文件的导入按钮](https://website-custom.com/wp-content/uploads/2024/11/恢复备份.svg)
</TabItem>
</Tabs>

进入到宝塔面板数据库操作界面。

点击对应站点数据库的"导入"按钮。

选择从本地上传数据库备份。

点击导入，上传数据库备份压缩包。

等数据库备份上传好。

点击该数据库备份右边的"导入"按钮。

数据库备份恢复完成。

## 访问网站

尝试访问网站：

<Tabs>
<TabItem value="ssl-error" label="SSL证书问题" default>
![尝试访问网站，报错](https://website-custom.com/wp-content/uploads/2024/11/恢复备份.svg)
</TabItem>
<TabItem value="ssl-setup" label="部署SSL证书">
![部署网站SSL证书](https://website-custom.com/wp-content/uploads/2024/11/恢复备份.svg)
</TabItem>
<TabItem value="permalink-setup" label="设置伪静态">
![设置网站伪静态 - WordPress](https://website-custom.com/wp-content/uploads/2024/11/恢复备份.svg)
</TabItem>
<TabItem value="success" label="恢复成功">
![成功恢复网站备份](https://website-custom.com/wp-content/uploads/2024/11/恢复备份.svg)
</TabItem>
</Tabs>

如果这个时候就访问网站，会报错：Invalid SSL certificate。

是因为我们没有为网站部署SSL证书。

1. 在宝塔面板"网站"操作界面
2. 点击对应站点的设置按钮
3. 进入站点设置界面，切换到SSL界面
4. 部署SSL证书，或者点击"Let's Encrypt"重新申请SSL证书。

再点击进入伪静态设置界面。

切换伪静态为WordPress并保存。

再次访问网站：

网站成功加载，备份内容成功恢复。

至此，恢复网站备份完成。

## 相关资源

| 资源名称 | 下载链接 |
|---------|----------|
| 宝塔面板 | [宝塔面板官网](https://www.bt.cn/new/index.html) |
| WordPress | [WordPress官网](https://wordpress.org/) |
| SSL证书工具 | [SSL证书工具](https://website-custom.com/resources/) |
