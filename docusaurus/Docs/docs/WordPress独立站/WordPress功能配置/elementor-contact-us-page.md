---
title: "使用Elementor制作联系页面（Contact Us Page）"
description: "本教程将指导您使用Elementor拖拽式编辑器，轻松构建功能完善、设计专业的“联系我们”页面，提升用户信任度和互动体验。"
tags: [Elementor, WordPress, 联系页面]
slug: /elementor-contact-us-page
---

Last updated: Sep 04 2025

![Elementor制作联系页面](https://website-custom.com/wp-content/uploads/2024/11/contact-us.webp)

使用Elementor制作联系页面，只需要通过拖拽的方式，就能轻松构建网站”联系我们“页面（Contact Us Page），快来跟着教程一起操作吧。

:::info 为什么“联系我们”页面很重要？
一个设计优秀的联系页面能提供清晰的联系信息，增强访客对网站或企业的信任感。建议页面包含：**联系表单、邮箱、电话、地址、地图、社交媒体链接**等。
:::

---

### 制作步骤

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="step1" label="步骤1：创建新页面" default>

1.  在WordPress后台，进入“页面” -> “新建页面”。
2.  填写页面标题（例如“联系我们”），保存草稿，然后点击“使用Elementor编辑”。

</TabItem>
<TabItem value="step2" label="步骤2：构建地图和联系信息板块">

1.  在Elementor编辑页面，添加一个两列的容器结构。
2.  在左侧容器中，拖入“谷歌地图”元素，并设置您的公司地址和地图高度。
3.  在右侧容器中，添加多个“标题”和“文本编辑器”元素，填入您的联系信息（地址、电话、邮箱等）。
4.  调整布局，使右侧内容垂直居中，并设置适当的间距。



</TabItem>
<TabItem value="step3" label="步骤3：制作表单板块">

1.  在下方新增一个容器，并拖入“表单”元素。
2.  **设置字段**：
    -   **Name**：占位符设为“姓名 \*”，宽度50%，设为必填。
    -   **Email**：占位符设为“邮箱 \*”，宽度50%，设为必填。
    -   **Message**：占位符设为“内容 \*”，行数设为3，设为必填。
    -   添加一个“Honeypot”类型的字段，用于防止机器人提交垃圾信息。
3.  关闭表单的“标签”显示。
4.  在“高级”设置中，将表单宽度设为80%，并居中对齐。
5.  在表单上方添加标题和描述文本。



</TabItem>
</Tabs>

---

| 工具/服务 | 下载链接 |
| :--- | :--- |
| Elementor Pro | [官方网站](https://elementor.com/pro/) |
