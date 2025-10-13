---
title: 清理未引用图
description: "学习如何使用 Media Cleaner 插件安全有效地清理 WordPress 网站中未使用的图片，优化服务器存储空间和网站维护效率。"
tags: ["WordPress", "图片清理", "Media Cleaner", "网站优化", "性能优化", "插件"]
slug: /wordpress-media-cleaner
---

# WordPress 清理未引用图片
使用 Media Cleaner 插件
## 概述

在 WordPress 网站的日常运营中，随着时间的推移会积累大量未使用的图片文件。这些未引用的图片会占用服务器存储空间，增加备份体积，影响网站维护效率。本文将详细介绍如何使用 **Media Cleaner** 插件安全有效地清理 WordPress 中的未引用图片。

## 安装 Media Cleaner 插件

### 步骤 1: 访问 WordPress 后台
1. 登录到您的 WordPress 管理后台
2. 导航到左侧菜单栏

### 步骤 2: 查找并安装插件
1. 点击 **插件(Plugins)** 菜单
2. 在页面顶部点击 **添加(Add New)** 按钮
3. 在搜索框中输入 **"Media Cleaner"**
4. 找到插件后，点击 **立即安装(Install Now)** 按钮进行安装
5. 安装完成后，点击 **启用(Activate)** 按钮启用插件

![MediaCleaner-hv.webp](https://list.ucards.store/d/img/MediaCleaner-hv.webp)

## 使用 Media Cleaner 清理未引用图片

### 插件设置与导航
安装完成后，您可以通过以下两种方式访问插件：
1. 在 WordPress 仪表盘左侧菜单找到 **媒体(Media)** → **Media Cleaner**
2. 或者在顶部工具栏的 **媒体(Media)** 菜单中找到 **Cleaner**

![MediaCleaner-xd.webp](https://list.ucards.store/d/img/MediaCleaner-xd.webp)

### 扫描未使用的图片
1. 进入 Media Cleaner 管理页面后，点击scan勾选已知风险提示（I understand）：
   ![MediaCleaner-ii.webp](https://list.ucards.store/d/img/MediaCleaner-ii.webp)
2. 点击 **Scan** 选项卡，然后点击 **Analyze** 按钮开始扫描网站中的未引用图片
   ![MediaCleaner-jj.webp](https://list.ucards.store/d/img/MediaCleaner-jj.webp)


### 预览和清理

1. 点击左上角，勾选所有未引用的图片，右上角点击Delete All（删除所有），**注意注意**操作前一定要备份（[如何备份WordPress](/all-in-one-migration)）
   ![MediaCleaner-ah.webp](https://list.ucards.store/d/img/MediaCleaner-ah.webp)
2. 点击Trash，Empty All,系统会要求您确认删除操作，确认后图片将从服务器永久删除
![MediaCleaner-wy.webp](https://list.ucards.store/d/img/MediaCleaner-wy.webp)

## 高级配置与最佳实践

### 配置扫描选项
在 **Scanning Options** 选项卡中，您可以：
- 设置最小文件年龄（例如 30 天，避免删除最近上传的图片）
- 排除特定文件夹（如备份目录、自定义上传目录）
- 选择要扫描的文件类型（图片、视频等）
- 启用"严格模式"（更精确但可能遗漏某些引用）

### 建立清理流程
1. **创建全面备份**：
   - 使用 UpdraftPlus 等备份插件创建完整网站备份
   - 特别备份 `wp-content/uploads` 目录

2. **首次扫描建议**：
   - 暂时不启用"严格模式"
   - 设置最小文件年龄为 30 天
   - 仅删除明显无用的测试图片

3. **定期清理计划**：
   - 每月执行一次全面扫描
   - 每季度检查排除规则是否需要更新

## 重要注意事项

### 避免常见陷阱
- **主题和插件引用**：某些图片可能被主题或插件通过代码引用，但未在内容中直接使用
- **动态内容**：由 JavaScript 生成的内容可能不会被正确检测为引用
- **直接链接**：如果图片通过直接链接分享，扫描可能不会识别这些引用
- **多站点网络**：在 WordPress 多站点环境中，需要为每个站点单独运行扫描

### 验证图片状态
在删除前，建议：
1. 检查图片是否被用于：
   - 主题功能（如背景图片、图标）
   - 插件功能（如幻灯片、特色图像）
   - 自定义 CSS/JS 文件
2. 使用"查看附件详细信息"功能检查可能的间接引用
3. 对于不确定的图片，可以暂时排除或保留

## 替代方案

如果 Media Cleaner 不符合您的需求，可考虑以下替代插件：
- **Media Files Cleaner**: 轻量级替代品，界面简洁
- **Clean Media**: 专注于媒体库管理，提供批量操作
- **WP Media Folder**: 不仅可以清理，还提供高级媒体库管理功能
- **File Cleaner**: 可以清理各种类型的未使用文件，不仅限于媒体
