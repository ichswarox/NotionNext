---
title: "WordPress网站更换域名指南：超详细保姆级图文教程"
description: "本文分享WordPress网站更换域名的保姆级教程，涵盖了域名解析、域名绑定、数据库替换等，是安全、无缝衔接的域名更换流程。"
tags: [wordpress, 更换域名, 域名解析, 数据库替换]
slug: /wordpress-change-domain
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

_Last updated: Oct 15 2025_

![WordPress网站更换域名指南：超详细保姆级图文教程](https://website-custom.com/wp-content/uploads/2025/05/Change-domain-name.webp)

本篇文章分享WordPress网站更换域名的保姆级教程，涵盖了域名解析、域名绑定、数据库替换等，是安全、无缝衔接的域名更换流程。

## WordPress网站更换域名流程

1. [备份网站数据](https://website-custom.com/bt-backup/)，进行这种大型且有可能对网站造成影响的修改时，一定要进行站点备份。
2. 要在不删除旧域名的同时，为站点添加新域名。
3. 同时，要将新域名做解析，指向服务器IP地址。
4. 还要使用代码临时更改站点域名设置，保证能正常访问后台。
5. 使用数据库数据替换插件，将所有和旧域名有关联的数据从数据库中替换成新域名。
6. 最后，在站点删除旧域名、数据库里更改站点URL，再到网站前端检查链接之间的跳转是否正常、图片显示、样式加载是否正常。

## 给站点添加新域名

在[宝塔面板](https://website-custom.com/vps-install-bt/)中，点击左侧菜单栏里的"网站"，在网站里点击需要更换域名的站点：

![宝塔面板，站点设置里 - 域名管理，添加新域名](data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20width='792'%20height='135'%20viewBox='0%200%20792%20135'%3E%3C/svg%3E)

在"域名管理"菜单里添加新域名，比如：new.com www.new.com。

不要忘记[做域名重定向](https://website-custom.com/www-redirection-root/)，根域名重定向到www，或者www域名重定向到根域名，集中权重。

## 新域名解析到服务器

打开你的域名注册商网站，找到你购买的新域名，为新[域名添加A记录解析](https://website-custom.com/aliyun-domain-name-resolution/)：

| 类型 | 记录 | 服务器 |
|------|------|--------|
| A | @ | 1.2.3.4 |
| A | www | 1.2.3.4 |

上方的例子添加了根域名和www域名的解析。

## 用代码临时修改WP网站域名

在服务器面板里，找到对应站点的根目录，在根目录下找到"wp-config.php"文件并打开。

将下方代码添加到文件里（将代码里的域名改成你自己的新域名）：

```php
define('WP_HOME','https://new.com');
define('WP_SITEURL','https://new.com');
```

添加在这行注释（/\* That's all, stop editing! Happy publishing. \*/）的上方。

:::caution 重要提示
这一步很重要，如果是从后台设置里直接修改网站域名，可能会导致网站无法打开。
:::

添加代码后保存，现在就可以使用新域名访问网站了。

## 使用插件将数据库里所有的旧域名替换成新域名

使用新域名登录WP后台，插件安装界面搜索"Better Search Replace"：

![WP安装Better Search Replace插件](data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20width='568'%20height='301'%20viewBox='0%200%20568%20301'%3E%3C/svg%3E)

安装并启用该插件。

然后点击菜单：工具 > Better Search Replace：

<Tabs>
  <TabItem value="search" label="搜索替换设置" default>
    1. 在搜索框里填写旧域名。
    2. 在替换框里填写新域名。
    3. 按住键盘Ctrl键的同时，按住鼠标左键不松手向下滑动，全选数据表。
    4. 勾选"Run as dry run"，这样可以先跑一遍测试，不进行替换。
    5. 点击运行。
  </TabItem>
  <TabItem value="results" label="结果查看">
    模拟运行一次后，可以看到该界面上方有提示搜索到了多少相关的数据：
    
    ![Better Search Replace扫描出要替换的数据](data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20width='800'%20height='94'%20viewBox='0%200%20800%2094'%3E%3C/svg%3E)
    
    点击"Click here"可以查看在哪些表里查到了旧域名：
    
    ![Better Search Replace扫描出要替换的数据](data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20width='800'%20height='379'%20viewBox='0%200%20800%20379'%3E%3C/svg%3E)
  </TabItem>
</Tabs>

确定没问题后，进行正式的替换操作：

![Better Search Replace实际替换时取消勾选"Run as dry run"](data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20width='800'%20height='276'%20viewBox='0%200%20800%20276'%3E%3C/svg%3E)

正式进行数据替换的时候，是在不勾选"Run as dru run"的情况下点击运行。

等待1-2分钟，数据替换完毕。

## 删除站点旧域名

这时候来到宝塔面板，点击对应站点，可以将旧域名删除了：

![宝塔面板站点里删除旧域名](data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20width='671'%20height='206'%20viewBox='0%200%20671%20206'%3E%3C/svg%3E)

## 到数据库修改网站地址

通过宝塔打开数据库的"phpMyAdmin"，位置在：宝塔面板 》数据库 》phpMyAdmin 》通过面板访问。

![通过宝塔面板打开phpMyAdmin](data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20width='800'%20height='254'%20viewBox='0%200%20800%20254'%3E%3C/svg%3E)

在phpMyAdmin中打开你站点对应的数据库，然后选择"wp_options"数据表：

![在数据库里修改站点域名](data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/200/svg'%20width='800'%20height='125'%20viewBox='0%200%20800%20125'%3E%3C/svg%3E)

将"siteurl"这一字段对应的值修改为你的新域名。

## 删除临时添加的代码

![删除更改域名的代码](data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20width='548'%20height='118'%20viewBox='0%200%20548%20118'%3E%3C/svg%3E)

最后，就可以将一开始在根目录下"wp-config.php"文件中添加的两行代码删除。

至此，成功更换新域名，可以到网站前台检查页面是否存在错误跳转或者无法加载的情况。

以上就是本篇文章全部内容，建议你收藏本站，[学习外贸建站技巧](https://website-custom.com/)。

如果你需要WordPress高级插件或者是主题等，请查看[WordPress建站资源](https://website-custom.com/resources/)。

## 下载链接

| 资源名称 | 下载地址 |
|---------|----------|
| Better Search Replace 插件 | [WordPress插件库](https://wordpress.org/plugins/better-search-replace/) |
| 宝塔面板 | [宝塔官网](https://www.bt.cn/) |
