---
title: "2024跨境电商-局部控图"
description: "全方位跨境指南-Ai赋能, 利用Krita和ComfyUI，通过本地部署或云服务，实现精准控制的AI图像生成与编辑，优化电商视觉内容。"
keywords: ["AI作图", "Krita", "ComfyUI", "跨境电商", "视觉优化"]
slug: /ai-image-editing
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
    ![绘世启动器-kq.png](https://list.ucards.store/d/img/绘世启动器-kq.webp)
2.  **切换版本**: 打开启动器后，点击侧边栏的 `版本管理`，勾选 `0.3.42`，然后点击 `切换` 并确认安装。![绘世启动器-uk.png](https://list.ucards.store/d/img/绘世启动器-uk.webp)
![绘世启动器-vo.png](https://list.ucards.store/d/img/绘世启动器-vo.webp)
3.  **安装模型文件**:
    *   下载 AI 模型文件并放置到 ComfyUI 的指定文件夹中。
  ![绘世启动器-bw.png](https://list.ucards.store/d/img/绘世启动器-bw.webp)
    *   支持SDXL SD1.5 Flux大模型生成，为了在本地运行，
    *   推荐使用至少16GB VRAM (NVIDIA)的显卡，否则生成图像将花费很长时间，或者可能由于内存不足而失败！
    *   -SD1.5 推荐8GB 质量低 
    *   -SDXL 推荐12GB 质量中 可满足大部分需求 
    *   -FLUX 推家16GB显存 质量高
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

4.  **一键启动**: 重启绘世启动器，点击 `高级选项`，然后点击右上角的 `一键启动`。![绘世启动器-na.png](https://list.ucards.store/d/img/绘世启动器-na.webp)
5.  **安装必要插件**:
    *   当 ComfyUI 在浏览器中成功启动后，点击右下角的 `Manager` 按钮。![绘世启动器-wd.png](https://list.ucards.store/d/img/绘世启动器-wd.webp)
    *   点击Manage后再点击 `Install Custom Nodes`。
    ![绘世启动器-qi.png](https://list.ucards.store/d/img/绘世启动器-qi.webp)
    *   搜索并安装 `tooling nodes` 和 `inpaint nodes`。
    ![绘世启动器-ex.png](https://list.ucards.store/d/img/绘世启动器-ex.webp)
    * Select version选择latest 然后点击select
    ![绘世启动器-nx.png](https://list.ucards.store/d/img/绘世启动器-nx.webp)
    * 再搜索输入inpaint nodes，再点击install，需要选择版本的话和上次一样选择latest，如图：
    ![绘世启动器-xx.png](https://list.ucards.store/d/img/绘世启动器-xx.webp)
    * :::caution等待安装好以后不要在这里点击restart :::
    ![绘世启动器-ey.png](https://list.ucards.store/d/img/绘世启动器-ey.webp)
    * 点击一键启动
    ![绘世启动器-ht.png](https://list.ucards.store/d/img/绘世启动器-ht.webp)
    * 然后等待命令行一直跳到:To See the GUI go to:
    ![绘世启动器-sh.png](https://list.ucards.store/d/img/绘世启动器-sh.webp)
    * 回到Krita 输入地址 `127.0.0.1:8188` 并点击连接。
    ![绘世启动器-op.png](https://list.ucards.store/d/img/绘世启动器-op.webp)
6.  **最终重启**: 返回**绘世启动器**，再次点击 `一键启动`。
7.  **连接 Krita**:
    *   等待命令行界面显示 `To see the GUI go to http://127.0.0.1:8188`。
  ![绘世启动器-df.png](https://list.ucards.store/d/img/绘世启动器-df.webp)

## 方案二：云端部署 (仙宫云)

如果你不想在本地配置复杂环境，或电脑性能不足，可以选择云端部署。

1.  **登录并部署**:
    *   登录 [仙宫云控制台](https://www.xiangongyun.com/console/instance)。
    ![仙宫云-hv.png](https://list.ucards.store/d/img/仙宫云-hv.webp)
    *   访问 [ComfyUI 镜像页面](https://www.xiangongyun.com/image/detail/5f64ceb1-edab-4989-9cca-2bf3e9bb75ba?r=189WCA) 并点击 `立即部署`。
    ![仙宫云-qm.png](https://list.ucards.store/d/img/仙宫云-qm.webp)
    *   按照推荐配置确认部署（新账号需实名认证）。
    ![仙宫云-ki.png](https://list.ucards.store/d/img/仙宫云-ki.webp)
    ![仙宫云-wp.png](https://list.ucards.store/d/img/仙宫云-wp.webp)
2.  **连接 Krita**:
    *   部署成功后，在 [实例列表](https://www.xiangongyun.com/console/instance) 中找到你的 ComfyUI 实例。
    *   点击 `ComfyUI` 按钮，复制弹出窗口中的链接地址。
    ![仙宫云-mt.png](https://list.ucards.store/d/img/仙宫云-mt.webp)
    *   将此地址粘贴到 Krita 插件的服务器网址中，然后点击连接。

## 软件核心功能教程

:::tip[提示]
以下教程提供了 `.kra` 格式的案例源文件，方便你对照学习。
:::

*   **图生图**: [案例下载](https://list.neoxu.store/d/editor_design/krita-assets/face-gatherer.kra)
*   **扩展生成**: [案例下载](https://list.neoxu.store/d/editor_design/krita-assets/expand-Slab.kra)
*   **智能移除**: [案例下载](https://list.neoxu.store/d/editor_design/krita-assets/remove.kra)
*   


## Krita 快捷键推荐配置表

### 笔刷快捷键配置推荐

常用笔刷快捷键（10 brush presents）：

设置-配置Krita-Python插件管理-常用笔刷快捷键

如何配置？顶部菜单 工具- 脚本-常用笔刷快捷键-点选一个笔刷快捷键，然后点击上方的快捷键槽位

可设置的快捷笔刷推荐：
Basic
Clone
Blender

取消勾选

再次按下快捷键-回到之前的笔刷预设(A)

Krita 配置文件目录：
C:\Users\[Yours User Name]\AppData\Roaming\krita

### 选区与工具

| 功能描述                 | 快捷键       |
|--------------------------|--------------|
| 曲线选区工具             | Q            |
| 多边形选区工具           | Shift + Q    |
| 矩形选区工具             | R            |
| 变形工具                 | V            |
| 智能补丁工具             | J            |
| Segment selection from box | W          |

### 图层操作

| 功能描述                 | 快捷键             |
|--------------------------|--------------------|
| 新建图层 - 基于可见内容  | Ctrl + Alt + R     |
| 上移图层                 | Ctrl + W           |
| 下移图层                 | Ctrl + E           |
| 关闭当前图层             | Ctrl + Alt + W     |
| 选择所有图层             | Ctrl + A           |
| 移除当前图层             | Backspace          |
| 图层编组                 | Ctrl + G           |
| 移出编组                 | Alt + G            |
| 单独显示活动图层         | Ctrl + Shift + S   |
| 激活上一个同级图层       | Up                 |
| 激活下一个同级图层       | Down               |
| 图层属性                 | Ctrl + F1          |
| 缩放图层（内容）         | Alt + C            |

### 蒙版与显示

| 功能描述         | 快捷键             |
|------------------|--------------------|
| 新建透明度蒙版   | Alt + M            |
| 新建滤镜蒙版     | Ctrl + M           |
| 镜像显示画布     | Ctrl + Shift + Z   |
| 取消选区         | Ctrl + D           |
| 全选             | Ctrl + Shift + A   |

### 系统与设置

| 功能描述     | 快捷键      |
|--------------|-------------|
| 配置 Krita   | Ctrl + ,    |
| 显示设置面板 | Shift + /   |

:::info[图生文功能]
旧版的图生文模块已取消。现在，你只需将图片拖入“豆包”等大语言模型工具，即可获得高质量的图片描述。
:::


## 常见问题:如何修改分辨率？

生成或者修改的图片建议1200x1200，大于这个分辨率每次生成会消耗更多的运算性能，在线版用户可能导致积分异常消耗，常规来说用SDXL模型生成1200宽高的图片会消耗5个积分。
![如何修改分辨率-ld.png](https://list.ucards.store/d/img/如何修改分辨率-ld.webp)

如何克隆绘制？
![如何克隆绘制-jz.png](https://list.ucards.store/d/img/如何克隆绘制-jz.webp)

如何渐隐区域？
![如何渐隐区域-rs.png](https://list.ucards.store/d/img/如何渐隐区域-rs.webp)
<video src="https://list.ucards.store/d/img/如何渐隐区域-rs.mp4" controls width="600">
  你的浏览器不支持视频播放，请更新浏览器。
</video>

如何新建一个图层合并可见内容？
找到图层---查看和更改图层属性---新建图层-基于可见内容
![合并可见内容-xx.png](https://list.ucards.store/d/img/合并可见内容-xx.webp)

如何用曲线让产品融入？
顶部菜单 滤镜---调整图像/颜色---曲线-颜色调整
![颜色调整-lo.png](https://list.ucards.store/d/img/颜色调整-lo.webp)
<video src="https://list.ucards.store/d/img/颜色调整-lo.mp4" controls width="600">
  你的浏览器不支持视频播放，请更新浏览器。
</video>

如何笔刷消除边界？
左边菜单 笔刷---在顶部搜索blender笔刷---合并可见图层后用笔刷涂抹边界
![笔刷消除边界-lc.png](https://list.ucards.store/d/img/笔刷消除边界-lc.webp)

![颜色调整-lo.png](https://list.ucards.store/d/img/颜色调整-lo.webp)
<video src="https://list.ucards.store/d/img/笔刷消除边界.mp4" controls width="600">
  你的浏览器不支持视频播放，请更新浏览器。
</video>