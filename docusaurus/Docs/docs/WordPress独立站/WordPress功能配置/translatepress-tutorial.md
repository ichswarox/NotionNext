---
title: "TranslatePress使用教程"
description: "简单好用的WordPress多语言插件，像修改文本一样翻译网页，可手动翻译或集成Google Translate或DeepL进行自动翻译。"
tags: [translatepress, wordpress, multilingual, plugin]
slug: /translatepress-tutorial
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Last updated: Oct 15 2025

![TranslatePress使用教程，简单好用的WordPress多语言插件](https://www.gfxcamp.com/wp-content/uploads/2025/09/image.jpg)

## 关于TranslatePress

[TranslatePress](https://wordpress.org/plugins/translatepress-multilingual/)是Well个人认为最好用的多语言插件，设置简单，使用效率也高，可以让你**直接在前端可视化翻译网站内容**。它适用于任何主题和插件，支持手动翻译和自动翻译**（**Google Translate / DeepL**）**，并且具备良好的 SEO 兼容性。

[TP多语言效果演示](https://website-custom.com/wp-content/uploads/2025/02/TranslatePress多语言展示-Well建站.mp4)

### ✅ **前端可视化翻译**

TranslatePress的翻译页面是你网站前台一比一页面还原，能直接选中指定内容进行翻译，就像编辑网页内容一样，操作直观，方便高效。

### ✅ **支持手动和自动翻译**

- **手动翻译**：如果你公司有专业的翻译，你可以自己手动的逐个翻译网站内容，确保语言准确性。
- **自动翻译**：集成 **Google Translate / DeepL**，只需要填写好API秘钥，就可以快速完成自动翻译，还能再对自动翻译的内容做细节调整。

### ✅ **SEO 友好**

- 兼容Yoast SEO、Rank Math等SEO插件
- 支持翻译 URL、元标签（仅高级版）
- 每种语言生成唯一的URL，例如：abc.com/fr

### ✅ **完全兼容所有 WordPress 主题 & 插件**

支持 Elementor、WooCommerce、ACF等，能翻译所有动态内容，如购物车、表单、按钮等。

以下是详细的TranslatePress使用教程：

## 安装TranslatePress多语言插件

首先，在WP后台搜索并安装TranslatePress插件的基础版：

![搜索并安装TranslatePress基础版](https://website-custom.com/wp-content/uploads/2025/02/1739861311925.png)

<Tabs
  groupId="installation-methods"
  defaultValue="free"
  values={[
    {label: '免费版安装', value: 'free'},
    {label: '商业版安装', value: 'business'},
  ]}>
  <TabItem value="free">

  通过WordPress插件库安装TranslatePress基础版：
  
  1. 进入WP后台 -> 插件 -> 安装插件
  2. 搜索"TranslatePress"
  3. 点击安装并启用

  </TabItem>
  <TabItem value="business">

  通过上传方式安装TranslatePress Business版：
  
  1. 下载TranslatePress Business版文件
  2. 进入WP后台 -> 插件 -> 安装插件 -> 上传插件
  3. 选择下载的文件并安装启用

  </TabItem>
</Tabs>

再通过上传插件的方式安装TranslatePress Business版：

![通过上传的方式安装TranslatePress高级版](https://website-custom.com/wp-content/uploads/2025/02/1739861311925.png)

## TranslatePress插件设置

![TranslatePress通用设置](https://website-custom.com/wp-content/uploads/2025/02/1739861311925.png)

![TranslatePress通用设置2](https://website-custom.com/wp-content/uploads/2025/02/1739861311925.png)

### 通用设置

1. 选择网站的默认语言，English
2. 添加需要的多语言，不建议太多，5-6个即可，否则会拖慢网站速度
3. 母语名称，选择是
4. 选择多语言选择框在页面上显示的位置
5. 保存更改

### 附件功能设置

![TranslatePress附件功能设置1](https://website-custom.com/wp-content/uploads/2025/02/1739861311925.png)

![TranslatePress附件功能设置2](https://website-custom.com/wp-content/uploads/2025/02/1739861311925.png)

添加这四个附加组件（图片中打钩的四个），分别是：

1. SEO包，可以翻译SEO元素，比如URL slug、页面标题、描述、图片ALT。
2. 多语言，没有这个拓展组件就无法添加多语言。
3. DeepL自动翻译，要用DeepL的自动翻译就需要安装这个拓展。
4. 用户角色，可以以不同的角色来查看网站翻译的结果。

## TranslatePress手动翻译

![TranslatePress手动翻译](https://website-custom.com/wp-content/uploads/2025/02/1739861311925.png)

点击TranslatePress设置界面的"翻译网站"按钮，就进入到了手动翻译界面。

![TranslatePress手动翻译](https://website-custom.com/wp-content/uploads/2025/02/1739861311925.png)

翻译界面就是可视化的网站前台界面，选中任意一段文字点击文字前的铅笔按钮，就能对该段文字做手动多语言翻译。

## TranslatePress自动翻译

点击TP设置界面上方的"自动翻译"，进入自动翻译设置界面：

![TranslatePress自动翻译](https://website-custom.com/wp-content/uploads/2025/02/1739861311925.png)

按照截图中顺序操作：

1. 开启自动翻译
2. 选择DeepL翻译，Well个人更习惯用DeepL，谷歌翻译的API不能买只能注册，还得绑定信用卡，可能会超额导致扣费很多。
3. 填写API秘钥，下方有教如何获取
4. 取消勾选自动翻译鼻涕虫
5. 保存

![购买DeepL API秘钥](https://website-custom.com/wp-content/uploads/2025/02/1739861311925.png)

DeepL的free api在某宝搜索，能看到几块钱一个很便宜，即使每月50W字符的额度用完了，等不急到下个月，也能买一个新的继续用。

在API购买上Well不做推荐，自己筛选购买即可。

**你也可以自己申请DeepL API Free或者Pro**：https://www.deepl.com/zh/pro-api#api-pricing

## TranslatePress半自动翻译

如果你不想使用自动翻译，或者当月的自动翻译API额度用完了，可以选择使用免费半自动翻译：

![安装AI Translation for TranslatePress插件](https://website-custom.com/wp-content/uploads/2025/02/1739861311925.png)

首先在WP后台搜索并安装[AI Translation for TranslatePress](https://wordpress.org/plugins/automatic-translate-addon-for-translatepress/) （原名是：Automatic Translate Addon For TranslatePress）。

![TranslatePress半自动翻译](https://website-custom.com/wp-content/uploads/2025/02/1739861311925.png)

接着，进入到TP的翻译界面，选择要翻译的多语言。

![TranslatePress半自动翻译](https://website-custom.com/wp-content/uploads/2025/02/1739861311925.png)

然后，点击Auto Translate。

![使用AI Translation for TranslatePress的Yandex免费翻译](https://website-custom.com/wp-content/uploads/2025/02/1739861311925.png)

会在页面中央出现一个弹框，选择Yandex Translate。

![TranslatePress半自动翻译](https://website-custom.com/wp-content/uploads/2025/02/1739861311925.png)

选择所需翻译的语言，等待加载片刻（如果一直加载不出来可能是网络问题，重新尝试）。

![TranslatePress半自动翻译](https://website-custom.com/wp-content/uploads/2025/02/1739861311925.png)

页面内的文本都会自动翻译出所选语言，再点击右上角的Merge Translation。

这样就完成了当前页面中某一个语言的TranslatePress半自动翻译，其他页面的或者其他语言也是相同的步骤。

TP多语言效果演示：

<video controls src="https://website-custom.com/wp-content/uploads/2025/02/TranslatePress多语言展示-Well建站.mp4"></video>

以上就是TranslatePress多语言插件教程的全部内容，Well通过讲解三种翻译方式（手动、自动、半自动），详细介绍了TranslatePress使用教程。

[更多WordPress进阶教程请关注：Well建站博客。](https://website-custom.com/blog/)

## 下载资源

| 资源类型 | 下载链接 | 备注 |
|---------|----------|------|
| TranslatePress基础版 | [WordPress插件库](https://wordpress.org/plugins/translatepress-multilingual/) | 免费版本 |
| TranslatePress商业版 | [官方购买](https://translatepress.com/) | 需付费的完整功能版本 |
| DeepL API | [DeepL API](https://www.deepl.com/pro-api) | 用于自动翻译功能 |
