---
title: "关闭WordPress插件更新提醒的2种方法"
description: "本文介绍两种关闭WordPress插件更新提醒的方法，避免更新提醒干扰管理界面，减少兼容性风险。"
tags: [wordpress, 插件, 更新提醒, 管理]
slug: /disable-plugin-update-notices
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

_Last updated: Oct 15 2025_

![关闭WordPress插件更新提醒的2种方法](https://website-custom.com/wp-content/uploads/2025/06/restriction.webp)

## 禁用插件更新提醒的好处

**减少干扰**，让管理界面更清爽，WordPress默认的更新提示是红色图标形式，非常醒目，吸引管理员注意，会增加界面混乱；对于非技术用户来说，过多提示容易引起误操作或误解。

如下图所示 ↓，这是WordPress默认的插件更新提醒。

![WordPress默认会红点提醒插件更新](https://website-custom.com/wp-content/uploads/2025/06/1-2-800x446.webp)

防止意外更新带来的**兼容性风险**，自动更新或不经意的及时手动更新可能出现插件之间的兼容性问题，破坏现有的网站功能，甚至导致"样式错乱"、"白屏"、"500 错误"等后果。

本篇会分享两种禁用插件更新提醒的方法，一种是使用插件的方式，一种是使用代码的方式。个人更建议少安装插件，一些不太复杂的功能使用几行代码解决更好。

## 使用插件关闭WordPress插件更新提醒

在WordPress后台插件安装界面搜索"Disable All WordPress Updates" ↓

![安装并启用Disable All WordPress Updates插件](https://website-custom.com/wp-content/uploads/2025/06/2-2.webp)

安装并启用插件后，无需进行设置，会自动屏蔽插件更新提醒 ↓

![Disable All WordPress Updates插件自动禁用插件更新提醒](data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20width='800'%20height='479'%20viewBox='0%200%20800%20479'%3E%3C/svg%3E)

所有插件的更新提醒都不再显示。

也可以使用 [Well 建站开发的禁用更新提醒插件](https://website-custom.com/resources/disable-plugin-update-notices-plugin/)，更轻量，使用更简单。

## 使用代码禁用WP插件更新提示

只需要使用一行钩子代码就可以关闭插件更新提醒 ↓

![添加禁用插件更新提醒代码](data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20width='800'%20height='351'%20viewBox='0%200%20800%20351'%3E%3C/svg%3E)

WordPress仪表盘里点击"外观" – "主题文件编辑器" – 在右侧找到"functions.php文件" – 添加下方代码 – 更新文件。

:::note 注意事项
[添加的自定义代码，建议使用子主题后再添加](https://website-custom.com/child-theme/)，避免主题更新后添加的代码被覆盖掉
:::

```php
// 隐藏插件更新提醒
add_filter('site_transient_update_plugins','__return_false');
```

以上就是禁用插件更新提醒的全部内容。

## 下载链接

| 资源名称 | 下载地址 |
|---------|----------|
| Disable All WordPress Updates 插件 | [WordPress插件库](https://wordpress.org/plugins/disable-wordpress-updates/) |
| Well 建站禁用更新提醒插件 | [Well建站资源](https://website-custom.com/resources/disable-plugin-update-notices-plugin/) |
