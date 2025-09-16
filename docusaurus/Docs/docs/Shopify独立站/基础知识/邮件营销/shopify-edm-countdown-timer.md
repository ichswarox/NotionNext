---
title: "Shopify EDM 倒计时添加方法 014 期"
description: "学习如何在 Shopify EDM 邮件营销中免费添加倒计时的三种方法，提升邮件营销效果。"
keywords: ["Shopify", "EDM", "倒计时", "邮件营销", "Sendtric", "CountdownMail", "Shopify 教程"]
slug: /shopify-edm-countdown-timer
---

# 免费在 Shopify EDM 中添加倒计时的三种方法

[Shopify 邮件营销](https://shopify2006.com/tag/shopify-you-jian-ying-xiao/)

## Shopify EDM 倒计时添加教程

更新于 2024-12-02

[通过 YouTube 观看本期 Shopify 教程](https://www.youtube.com/watch?v=W7DxQG5vdVk)

## 1. 免费倒计时生成工具 - [Sendtric](https://www.sendtric.com/)

- 随便填写一个邮箱
- 设置时区、倒计时结束时间、语言
- 修改颜色，点击 Generate 即可获得代码
- 提示：修改颜色需要重新 Generate、代码需要复制添加到邮件中

## 2. 不限浏览量的多样式生成工具 - [CountdownMail](https://countdownmail.com/)

- 生成动图之后获取代码，添加 div 到底部，遮挡水印，示例：

```html
<div style="text-align: center;width: 100%; height: 60px;">
    <!-- 粘贴 Image 链接 -->
    <div style="background: #fff; margin-top: -40px; height: 35px; width: 100%; position: relative;">&nbsp;</div>
</div>
```

- 在 Klaviyo 中添加 Text 模块，并切换到源代码模式进行粘贴
- [截图和取色工具](https://www.snipaste.com/)

复制

样式可能需要自行微调

## 3. 补充一个方法，直接用动图

[设置时间之后直接生成动图](https://timer.plus/)（此工具生成的倒计时不可用于 Klaviyo 中）

- 设置时间和样式
- 点击 View source 查看并复制全部代码
- 修改 style 中的高度（height）为自己想要的值即可

[另一个倒计时动图生成工具](https://emailtaco.com/countdown-timer)（可用于 Klaviyo 但是有水印）

![Shopify Klaviyo 编辑器](https://shopify2006.com/content/images/2023/02/image.png)

![Shopify Klaviyo 源代码模式](https://shopify2006.com/content/images/2023/02/image-1.png)

![Klaviyo 设置倒计时图片](https://shopify2006.com/content/images/2023/02/image-2.png)

## [更多 Shopify 短视频教程](https://shopify2006.com/shopify-tutorials-since-2022-08-21/)

![](https://shopify2006.com/content/images/size/shopify2006_favicon.jpeg)