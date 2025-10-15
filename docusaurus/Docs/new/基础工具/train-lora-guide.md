---
title: "高阶教程-Lora 训练原则与教程"
description: "一份关于如何训练Stable Diffusion Lora模型的综合指南，从图片素材整理到具体训练步骤，帮助你快速上手。"
keywords: ["stable diffusion", "lora", "train", "tag", "tutorial", "kohya_ss"]
slug: /train-lora-guide
draft: true
---

# Lora 训练原则与教程

> **Tagging 打标签 原则**: 你可能需要训练模型的特定部分，如腿部、脸部。因此，要准备局部的训练素材，让AI理解并产生和主体的关联。

**具体教程链接：** [Essential to Advanced Guide to Training a LoRA](https://civitai.com/articles/3105/essential-to-advanced-guide-to-training-a-lora) (在Civitai上搜索"tag"找到tag部分)

## 训练自己的 Stable Diffusion LoRA 模型步骤

要训练自己的 Stable Diffusion LoRA 模型，你可以按照以下步骤进行操作：

### 1. 图片素材整理
- **图片大小要一致**，主体清晰，分辨率高一点。
- 可以根据情况决定是否剪裁图片，推荐使用 [www.birme.net](http://www.birme.net) 进行剪裁。

### 2. 为图片添加标签 (Tags)
- 通过 SD WebUI 为图片打标签后，使用 BooruDatasetTagManager 等工具调整提示词。
- **原则**：去除特殊、专一的限定词，增加公共提示词（如纯色背景、单一背景等），以及增加与 LoRA 训练目的相关的提示词（如锁包、项链等特定物品）。

### 3. 填写训练目录
- 填写图片所在的父目录，训练工具会自行向下寻找训练素材。

### 4. LoRA 命名
- 尽量使用英文命名，避免在某些情况下出现中文乱码问题。

### 5. 触发词设置 (可选)
- 训练之前可以不用设置触发词，直接在正向提示词中使用 LoRA 即可。

### 6. 测试 LoRA
- 可使用 xyz 对脚本进行多维度测试，以观察训练效果。

---

## 常见训练方法示例 (使用 kohya_ss)

以下是一种常见的训练方法示例（使用 kohya_ss 项目）：

### 环境准备

1.  **安装基础软件**：Python 3.10（记得添加到环境变量）、Git 以及 VS 环境（Visual Studio xxx redistributable）。
2.  **克隆 kohya_ss 项目**：使用 `git clone https://github.com/bmaltais/kohya_ss.git` 命令。
3.  **(可选) 安装 CUDNN 8.6** 以提升运算速度：先下载 Cudnn 文件（如 `https://b1.thefileditch.ch/mwxKTEtelILoIbMbruuM.zip`）并放到 kohya_ss 项目的根目录下，然后运行相关脚本。
4.  **启动软件**：输入命令 `gui.bat --listen 127.0.0.1 --server_port 7860 --inbrowser --share` 或双击 `gui.bat`，将出现的 URL 复制到浏览器打开界面。

### 素材准备和预处理

1.  **寻找合适的素材**，确保图片清晰，不单一，数量一般准备几十张。聚焦半身或头部的图片更容易训练出稳定效果，背景尽量简单。
2.  **对图片进行裁剪**，可使用专业工具或 QQ 截图等。
3.  **创建专门的训练文件夹**，例如在 `kohya_ss` 根目录创建 `train` 文件夹，再在其中创建具体的人物文件夹（如 `Dilireba`），并在该文件夹内分别创建 `image`（存放图片的子文件夹，如 `100_dilireba`，所有图片放在此子文件夹中，这里的数字会影响训练的步数和效果）、`log`（训练记录）、`model`（模型保存路径）以及 `dilireba.json`（配置文件）等文件夹。
4.  **生成对应的关键词**：在网页上找到 `Utilities-->Captioning-->BLIP Captioning`，设置图片文件夹所在路径和生成提示词的前缀（训练完成后可用于提示词中唤醒或加强人物特征），然后点击“Caption images”开始处理。

---

## 更多参考资料

如果你想了解更多详细信息，可以参考以下链接：

- [How to Train Stable Diffusion LoRA Models](https://techtactician.com/how-to-train-stable-diffusion-lora-models/)
- [知乎专栏：Stable Diffusion LoRA 训练教程](https://zhuanlan.zhihu.com/p/630368440)
- [CSDN博客：Stable Diffusion LoRA 训练教程](https://blog.csdn.net/m0_59162248/article/details/138954915)
