---
title: "4种Elementor Popup使用方法和应用场景"
description: "本文详细介绍多种Elementor Popup使用方法和应用场景，利用Elementor Popup丰富你的网站功能，提高网站转化率。"
tags: [Elementor, Popup, WordPress]
slug: /elementor-popup-use-cases
---

Last updated: Sep 03 2025

![Elementor Popup使用方法](https://website-custom.com/wp-content/uploads/2024/11/Popup.webp)

本篇文章详细介绍多种Elementor Popup使用方法和应用场景。利用Elementor Popup丰富你的网站功能，提高网站转化率。

:::info 特性
- **弹出式询盘表单**：方便用户提交信息，无需跳转页面。
- **促销倒计时**：营造紧迫感，促进用户尽快下单。
- **相关内容推荐**：引导用户浏览更多内容，增加页面停留时间。
- **询问弹窗**：根据用户选择，展示不同内容或跳转到不同页面。
:::

---

### 1. 制作弹出式询盘表单

弹出式表单可以帮助用户更方便地提交信息，无需跳转页面。这种直观的设计减少了用户操作的复杂性，从而提升网站的转化率。

![设置表单Email](https://website-custom.com/wp-content/uploads/2024/10/10-3-1024x506.webp)

---

### 2. 制作促销倒计时弹框

倒计时促销弹框可以在网站搞限时促销时更多的提高购买转化率。它能够让买家感受到时间压力，从而促使他们尽快做出购买决定。

![Popup倒计时促销弹窗效果](https://website-custom.com/wp-content/uploads/2024/11/5-20-1024x274.webp)

#### 设置方法

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="step1" label="步骤1：页面设置" default>

-   **Width**：100 VW
-   **Height**：260 px
-   **Content Position**：Center
-   **Vertical**：顶部
-   **Overlay**：关闭

![倒计时促销弹窗设置](https://website-custom.com/wp-content/uploads/2024/11/1-23-1024x390.webp)

</TabItem>
<TabItem value="step2" label="步骤2：内容填充">

1.  在Popup内添加三个并排的小容器。
2.  分别在容器里添加标题、计数器（Countdown）、图片元素，并调整一下样式。
3.  为整个大容器设置添加促销产品的链接。

</TabItem>
<TabItem value="step3" label="步骤3：发布设置">

- **应用范围**：整个网站
- **触发条件**：页面加载后6秒
- **显示次数**：1次

![发布到整个网站](https://website-custom.com/wp-content/uploads/2024/11/2-25.webp)
![设置6秒后加载](https://website-custom.com/wp-content/uploads/2024/11/3-22.webp)
![设置只显示一次](https://website-custom.com/wp-content/uploads/2024/11/4-20.webp)

</TabItem>
</Tabs>

---

### 3. 制作相关文章/产品弹窗

通过在产品或者是文章页布置推荐产品/文章Popup弹窗，当页面被用户浏览完后展示推荐内容。

![文章推荐弹窗Popup效果展示](https://website-custom.com/wp-content/uploads/2024/11/9-16-1024x468.webp)

#### 设置方法

<Tabs>
<TabItem value="step1" label="步骤1：页面设置" default>

-   **Width**：100 vw
-   **Height**：240 px
-   **Content Position**：Center
-   **Vertical**：下方
-   **Overlay**：关闭

![文章推荐弹窗Popup设置](https://website-custom.com/wp-content/uploads/2024/11/6-19-1024x483.webp)

</TabItem>
<TabItem value="step2" label="步骤2：内容填充">

1.  可以添加主营产品或者是重要文章
2.  给对应的产品/文章附带链接
3.  调整内容样式

</TabItem>
<TabItem value="step3" label="步骤3：发布设置">

- **应用范围**：产品页或文章页
- **触发条件**：页面滚动到90%时
- **显示次数**：1次

![文章推荐弹窗Popup应用到文章页或者是产品页](https://website-custom.com/wp-content/uploads/2024/11/7-17.webp)
![文章推荐弹窗Popup在页面滚动到90%时弹出](https://website-custom.com/wp-content/uploads/2024/11/8-17.webp)

</TabItem>
</Tabs>

---

### 4. 制作询问弹窗

询盘弹窗Popup适合一些需要知道用户途径的网站，方便针对不同用户做不同的页面展示或者是记录。

![询问弹窗Popup效果展示](https://website-custom.com/wp-content/uploads/2024/11/14-11-1024x496.webp)

#### 设置方法

<Tabs>
<TabItem value="step1" label="步骤1：页面设置" default>

-   **Height**：600 px
-   **Content Position**：Center
-   **Close Button**：关闭

![设置询问弹窗Popup](https://website-custom.com/wp-content/uploads/2024/11/10-15-1024x568.webp)

</TabItem>
<TabItem value="step2" label="步骤2：内容填充">

1.  一个标题元素
2.  能表达问题内容的图片
3.  2个或者多个按钮，并设置对应的链接

</TabItem>
<TabItem value="step3" label="步骤3：发布设置">

- **应用范围**：全站
- **触发条件**：页面加载后立即弹出
- **显示次数**：1次

![将询问弹窗Popup应用到全站](https://website-custom.com/wp-content/uploads/2024/11/11-15.webp)
![设置询问弹窗Popup在页面立即加载](https://website-custom.com/wp-content/uploads/2024/11/12-13.webp)
![设置询问弹窗Popup出现的次数](https://website-custom.com/wp-content/uploads/2024/11/13-12.webp)

</TabItem>
</Tabs>

---

| 文件 | 下载链接 |
| :--- | :--- |
| Elementor Pro | [官方网站](https://elementor.com/pro/) |
