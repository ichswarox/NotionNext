---
title: "2024跨境电商-局部控图"
description: "全方位跨境指南-Ai赋能, 利用Krita和ComfyUI，通过本地部署或云服务，实现精准控制的AI图像生成与编辑，优化电商视觉内容。"
keywords: ["AI作图", "Krita", "ComfyUI", "跨境电商", "视觉优化"]
slug: /ecommerce-ai-editing-2024
tags: [AI, 图像生成, Krita, ComfyUI, 教程]
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# 2024跨境电商-局部控图(仍适用大部分场景)

:::tip[核心优势]
学完本篇教程，你将能够有效解决 AI 在图像生成中最大的痛点——**图像可控性**，实现对画面的精准控制。
:::

:::note[教程更新说明]
*   **2025.06.27:** 全面优化阅读体验，区分线上与本地版本，新增 Kontext 章节及本地 Flux 部署教程。
*   **2025.01.27:** 全量支持 Flux 模型，画面真实度提升500%，小尺寸选区生成不再模糊。
*   **2024.12.23:** 优化教程结构，增加实例演示，修复排版链接，并更新部分工具的最新用法。
:::

## 方案一：本地免费部署

### 步骤 1: 安装前端操作界面 Krita

Krita 是一款强大的开源绘图软件，我们将使用它作为 AI 绘图的前端。

<Tabs>
<TabItem value="windows" label="Windows">

[下载 Krita v5.2 for Windows](https://mirrors.aliyun.com/kde/Attic/krita/5.2.6/krita-x64-5.2.6-setup.exe)

</TabItem>
<TabItem value="mac" label="macOS">

[下载 Krita v5.2 for Mac](https://mirrors.bfsu.edu.cn/kde/stable/krita/5.2.9/krita-5.2.9-release.dmg)

</TabItem>
</Tabs>

### 步骤 2: 安装 Krita AI 插件

此插件用于连接 Krita 与后端的 AI 生成服务。

:::info[插件下载]
[点击下载 AI Diffusion 插件 v1.36.1](https://list.neoxu.store/d/editor_design/krita-app/krita_ai_diffusion-1.36.1.zip)

支持 Windows 10/11 和 macOS。
:::

**安装与配置指南:**

1.  **设置语言**:
    *   打开 Krita，在菜单栏选择 `Settings` ‣ `Switch Application Language...`。
    *   在 `Primary language` 下拉菜单中选择 `简体中文`。
    *   点击 `OK` 并重启 Krita。
2.  **导入插件**:
    *   重启后，点击菜单栏 `工具` ‣ `脚本` ‣ `从文件导入Python插件`。
    *   选择刚刚下载的 `krita_ai_diffusion-1.36.1.zip` 文件。
    *   在弹出的对话框中选择 `是` 以启用插件。
    *   再次重启 Krita。

### 步骤 3: 配置本地 AI 后端 (ComfyUI)

我们将使用 ComfyUI 作为本地的 AI 图像生成引擎。

:::info[ComfyUI 整合包下载]
**下载地址：** [夸克网盘链接](https://pan.quark.cn/s/64b808baa960)

:::danger[解压密码]
`bilibili-秋葉aaaki`
:::

下载后解压，你会得到一个完整的 ComfyUI 环境。

```yaml title="版本信息 (v1.6 - 2025.2.4)"
# 系统要求
Python: 3.11
Pytorch: 2.5.1
ComfyUI 内核: v0.3.13

# 更新内容
- 新增部分常用节点
- 删除大量无用/过时节点
- 精简总插件数量从 28 到 21
```

:::caution[重要提示]
整合包内的内核与插件版本已经对齐，解压后即可直接使用。**请勿随意更新**，以免出现版本不兼容问题。
:::

### 步骤 4: 启动并配置 ComfyUI 服务

1.  **启动客户端**: 解压后，运行 `绘世启动器.exe`。
2.  **切换版本**: 打开启动器后，点击侧边栏的 `版本管理`，勾选 `0.3.42`，然后点击 `切换` 并确认安装。
3.  **安装模型文件**:
    *   下载 AI 模型文件并放置到 ComfyUI 的指定文件夹中。

    <Tabs>
    <TabItem value="sdxl" label="SDXL 模型 (推荐入门)">
    **大小:** 约 80GB
    [点击下载 SDXL 模型](https://pan.quark.cn/s/a7e0f76d175c)
    </TabItem>
    <TabItem value="flux" label="FLUX 模型 (效果更佳)">
    **大小:** 约 120GB
    [点击下载 FLUX 模型](https://pan.quark.cn/s/367652aeec59)
    </TabItem>
    </Tabs>

4.  **一键启动**: 重启绘世启动器，点击 `高级选项`，然后点击右上角的 `一键启动`。
5.  **安装必要插件**:
    *   当 ComfyUI 在浏览器中成功启动后，点击右下角的 `Manager` 按钮。
    *   点击 `Install Custom Nodes`。
    *   搜索并安装 `tooling nodes` 和 `inpaint nodes`。
    :::caution
    安装过程中提示重启时，**请勿点击**。
    :::
6.  **最终重启**: 返回**绘世启动器**，再次点击 `一键启动`。
7.  **连接 Krita**:
    *   等待命令行界面显示 `To see the GUI go to http://127.0.0.1:8188`。
    *   回到 Krita，打开 AI 插件设置，在 `连接` 标签页下选择 `自定义服务器`。
    *   输入地址 `127.0.0.1:8188` 并点击连接。

## 方案二：云端部署 (仙宫云)

如果你不想在本地配置复杂环境，或电脑性能不足，可以选择云端部署。

1.  **登录并部署**:
    *   登录 [仙宫云控制台](https://www.xiangongyun.com/console/instance)。
    *   访问 [ComfyUI 镜像页面](https://www.xiangongyun.com/image/detail/5f64ceb1-edab-4989-9cca-2bf3e9bb75ba?r=189WCA) 并点击 `立即部署`。
    *   按照推荐配置确认部署（新账号需实名认证）。
2.  **连接 Krita**:
    *   部署成功后，在 [实例列表](https://www.xiangongyun.com/console/instance) 中找到你的 ComfyUI 实例。
    *   点击 `ComfyUI` 按钮，复制弹出窗口中的链接地址。
    *   将此地址粘贴到 Krita 插件的服务器网址中，然后点击连接。

## 软件核心功能教程

:::tip[提示]
以下教程提供了 `.kra` 格式的案例源文件，方便你对照学习。
:::

*   **图生图**: [案例下载](https://list.neoxu.store/d/editor_design/krita-assets/face-gatherer.kra)
*   **扩展生成**: [案例下载](https://list.neoxu.store/d/editor_design/krita-assets/expand-Slab.kra)
*   **智能移除**: [案例下载](https://list.neoxu.store/d/editor_design/krita-assets/remove.kra)

:::info[图生文功能]
旧版的图生文模块已取消。现在，你只需将图片拖入“豆包”等大语言模型工具，即可获得高质量的图片描述。
:::