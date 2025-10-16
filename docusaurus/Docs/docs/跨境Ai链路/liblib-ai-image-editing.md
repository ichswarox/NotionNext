---
title: "Liblib局部控图，电商卖家必备AI神器"
description: "全方位跨境指南-Ai赋能, 利用Krita和ComfyUI，通过本地部署或云服务，实现精准控制的AI图像生成与编辑，优化电商视觉内容。"
keywords: ["AI作图", "Krita", "ComfyUI", "跨境电商", "视觉优化"]
slug: /liblib-ai-image-editing
tags: [AI, 图像生成, Krita, ComfyUI, 教程]
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Liblib-局部控图工作流智能体集合
## 如何使用工作流
打开如下链接先[登录你的账号](https://www.liblib.art/comfy)，没有的话先注册一个，或者微信扫码登录。

![img1016-OjZn.webp](https://list.ucards.store/d/img/img1016-OjZn.webp)

免费账户生成有数量限制和等待时长，
打开界面如图，这是一个基本的ComfyUI工作流，我们不需要用到这个。
:::info[在线工作流界面]
[访问地址](https://www.liblib.art/comfy)
:::
![img1016-NSpN.webp](https://list.ucards.store/d/img/img1016-NSpN.webp)

然后将下面的工作流json文件拖入即可。





## 工作流：换脸局部控图

import videoFile from '/video/replace-face.mp4';
import videoPoster from '/img/video.png';


<video
  controls
  autoPlay
  loop
  muted
  width="100%"
  poster={videoPoster}
  aria-label="Course Introduction Demo"
  style={{ borderRadius: '8px' }}
>
  <source src={videoFile} type="video/mp4" />
  Your browser does not support the video tag.
</video>

---

**第1步：下载工作流拖入在线Comfyui，然后上传背景图 (Base Image)**

<a href="/img/Redux换脸.json" download="Redux换脸.json" styl>
  换脸工作流
</a>

<style>
  {`
    @keyframes pulse {
      0% {
        transform: scale(1);
      }
      50% {
        transform: scale(1.05);
      }
      100% {
        transform: scale(1);
      }
    }
  `}
</style>

来到操作界面后，在 **“上传背景图”** 区域上传您的主图。这张图片是您希望模特出现的场景图或已有的产品图。

![img1016-GBvl.webp](https://list.ucards.store/d/img/img1016-GBvl.webp)

---

**第2步：上传目标人物图 (Target Face)**

在 **“上传目标人物图”** 区域上传一张包含您想替换上去的人脸的清晰图片。AI将提取这张图片中的人脸特征，并将其应用到背景图的模特上。


---

**第3步：一键生成与优化**

点击右上角 **“开始生成”** 并耐心等待几秒钟。AI会自动完成人脸融合，根据图片的大小尺寸所需算力，需要对的积分不同。如果对结果不满意，可以尝试调整目标人物图或微调参数，然后再次生成。

![img1016-eqha.webp](https://list.ucards.store/d/img/img1016-eqha.webp)

---

## 工作流：SUPIR 8K级超高清放大

<a href="/img/高清放大-在线生图V2.0.json" download="高清放大-在线生图V2.0.json">高清放大工作流</a>

还在为图片分辨率低而烦恼吗？SUPIR V2.0 来了！一键将你的模糊照片变身8K壁纸级画质，效果惊艳，细节拉满！

![SUPIR 高清放大效果对比](https://list.ucards.store/d/img/img1016-vInU.webp)

:::tip[SUPIR 核心优势]
- **8K壁纸级放大：** 轻松实现超高清分辨率，效果拔群！
- **低分辨率救星：** 完美修复模糊、低质量图片。
- **细节惊艳还原：** 修复后的照片细节满满，效果令人惊叹。
:::


