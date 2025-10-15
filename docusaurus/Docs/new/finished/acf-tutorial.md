---
title: "ACF教程，管理B2B网站产品的终极方案，完全代替WooCommerce"
description: "ACF教程，由于B2B网站只需要基础的产品展示，WooCommerce大多功能都用不上，使用ACF管理产品即可，能最大程度的提高网站速度。"
tags: [acf, wordpress, b2b, tutorial, elementor]
slug: /acf-tutorial
---

<!-- 文件顶部更新时间 -->
<div class="text-right text-sm text-gray-500 mb-4">Last updated: Oct 15 2025</div>

![ACF教程配图](https://www.gfxcamp.com/wp-content/uploads/2024/10/suffix-acf.jpg)

## 为什么要替代WooCommerce管理产品？

对于B2B网站，不需要使用WooCommerce来管理产品，因为WooCommerce主要是为B2C网站设计的。

:::caution 注意
Woo的功能非常强大，但是B2B网站只需要简单的产品展示，使用Woo来管理产品有点大炮打蚊子的感觉，主要是会过多占用服务器性能，降低服务器加载速度。
:::

所以就需要使用其他方法来管理B2B网站产品。

- 使用Advanced Custom Fields插件可以实现更加轻量化，且更符合B2B网站的产品管理方式。

## 关于ACF和ACF教程

Advanced Custom Fields（简称ACF），主要用于创建和管理自定义字段。ACF可以很容易地为文章、页面添加额外的内容字段，提供更强大的内容管理能力。

本篇ACF教程就是通过ACF添加额外字段，用以管理产品，大概原理：

- 使用ACF创建单独的文章分类，命名为**产品分类**
- 使用ACF创建单独的文章类型，命名为**产品**
- 再对命名为产品的文章类型，添加B2B网站展示产品所需要用到的**字段**

## 使用ACF插件

知道大概的原理后，我们就正式着手操作ACF。

### 安装ACF插件

<Tabs groupId="acf-installation">
<TabItem value="free" label="ACF基础版" default>

![安装acf插件，WP Engine](https://website-custom.com/wp-content/uploads/2024/10/安装acf插件，WP-Engine.png)

先在WP后台安装基础版Advanced Custom Fields插件。

如果你对产品展示的需求不高（不需要展示产品轮播图）以及更多高级功能，可以直接在WP后台插件处搜索"ACF"（作者为：WP Engine的ACF插件），**安装ACF基础版**直接使用即可。

</TabItem>

<TabItem value="pro" label="ACF Pro版">

![上传安装ACF Pro](https://website-custom.com/wp-content/uploads/2024/10/上传安装ACF-Pro.png)

如果你要展示轮播产品图（也就是Pro版的画廊字段），就需要**安装ACF Pro**插件，可以选择在[ACF Pro](https://www.advancedcustomfields.com/pro/)官网购买正版，或者[在Well建站购买便宜的ACF Pro插件](https://website-custom.com/resources/acf-pro-plugin/)。

</TabItem>
</Tabs>

### 创建ACF分类法

<Tabs groupId="acf-creation">
<TabItem value="taxonomy" label="创建分类法" default>

![ACF 分类法](https://website-custom.com/wp-content/uploads/2024/10/ACF-分类法.png)

WP后台 – ACF – 分类法，进入分类法创建页面。

![添加分类法](https://website-custom.com/wp-content/uploads/2024/10/添加分类法.png)

点击添加分类法。

![填写分类法信息](https://website-custom.com/wp-content/uploads/2024/10/填写分类法信息.png)

填写分类法信息（可以自己自定义）：

- 复数标签：产品分类
- 单一标签：产品分类
- 分类法键：acf-product-category
- 文章类型不做选择

</TabItem>

<TabItem value="post-type" label="创建文章类型">

![选择文章类型](https://website-custom.com/wp-content/uploads/2024/10/选择文章类型.png)

在ACF上方导航栏点击文章类型。

![创建文章类型](https://website-custom.com/wp-content/uploads/2024/10/创建文章类型.png)

点击添加文章类型。

![填写文章类型内容](https://website-custom.com/wp-content/uploads/2024/10/填写文章类型内容.png)

填写文章类型信息：

- 复数标签：产品
- 单一标签：产品
- 文章类型键：acf-product
- 分类法：产品分类

创建好"产品"文章类型后，就可以在WP左侧导航栏看到我们创建的产品和产品分类了：

![导航栏显示产品菜单](https://website-custom.com/wp-content/uploads/2024/10/导航栏显示产品菜单.png)

</TabItem>

<TabItem value="fields" label="创建字段">

![ACF添加字段](https://website-custom.com/wp-content/uploads/2024/10/ACF添加字段.png)

在ACF里新建字段组。

![为字段命名](https://website-custom.com/wp-content/uploads/2024/10/为字段命名.png)

在页面上方为字段组命名：产品字段（可以自定义）。

![设置字段内容](https://website-custom.com/wp-content/uploads/2024/10/设置字段内容.png)

第一个字段：

- 字段类型：画廊
- 字段标签：产品图册
- 字段名称：product-gallery
- 其他的不用设置

![添加多个字段按钮](https://website-custom.com/wp-content/uploads/2024/10/添加多个字段按钮.png)

点击右上角"添加字段"添加第二个字段。

![添加价格字段](https://website-custom.com/wp-content/uploads/2024/10/添加价格字段.png)

第二个字段：

- 字段类型：文本
- 字段标签：产品描述
- 字段名称：product-description

![再添加一个字段，短描述字段](https://website-custom.com/wp-content/uploads/2024/10/再添加一个字段，短描述字段.png)

第三个字段：

- 字段类型：文本
- 字段标题：价格
- 字段名称：product-price

![将字段应用到产品文章类型](https://website-custom.com/wp-content/uploads/2024/10/将字段应用到产品文章类型.png)

下方设置，显示条件设置"文章类型"等于"产品"，然后保存这个字段组。

</TabItem>
</Tabs>

## 添加产品

使用ACF创建好分类法、文章类型和字段组后，我们就可以添加产品了。

在添加产品之前，先启用Elementor对"产品"文章类型的支持：

![Elementor勾选支持编辑产品](https://website-custom.com/wp-content/uploads/2024/10/Elementor勾选支持编辑产品.png)

WP后台 – Elementor – 设置 – 文章类型 – 勾选产品 – 保存设置。

![新增ACF产品](https://website-custom.com/wp-content/uploads/2024/10/新增ACF产品.png)

WP后台 – 产品 – 新增产品，进入到产品编辑界面。

![elementor编辑和添加标题和产品主图](https://website-custom.com/wp-content/uploads/2024/10/elementor编辑和添加标题和产品主图.png)

可以使用Elementor自定义产品的详情描述、填写产品标题、设置产品主图。

![添加产品图册、短描述、价格](https://website-custom.com/wp-content/uploads/2024/10/添加产品图册、短描述、价格.png)

往下滚动屏幕就会看到我们之前添加的字段组。

- 可以在产品图册里添加多张产品图册。
- 填写产品描述。
- 填写产品价格。

最后点击右上角发布产品。

下方还有如何创建ACF产品页模板、ACF产品列表页模板的教程。

## 创建ACF产品页模板

<Tabs groupId="acf-templates">
<TabItem value="single" label="创建产品页模板" default>

![创建ACF产品页模板](https://website-custom.com/wp-content/uploads/2024/10/创建ACF产品页模板.png)

使用Elementor Pro创建一个Single Post模板，作为ACF产品页模板。

![添加一个大容器包含两个小容器](https://website-custom.com/wp-content/uploads/2024/10/添加一个大容器包含两个小容器.png)

进入到模板编辑页面，先添加一个大容器包含两个并排的小容器。

![添加轮播图元素](https://website-custom.com/wp-content/uploads/2024/10/添加轮播图元素.png)

搜索image，添加图像轮播元素到左侧的小容器里。

![设置轮播图采用ACF字段](https://website-custom.com/wp-content/uploads/2024/10/设置轮播图采用ACF字段.png)

设置图像轮播的动态标签为ACF Gallery Field。

![设置ACF字段为产品图册](https://website-custom.com/wp-content/uploads/2024/10/设置ACF字段为产品图册.png)

点击ACF Gallery Field标签，设置它的Key为"产品图册"。

设置好后会看到图像轮播元素展示出了对应的产品图册。

![轮播图默认样式](https://website-custom.com/wp-content/uploads/2024/10/轮播图默认样式.png)

如果图像轮播元素没有显示内容，需要设置一下预览：

![设置模板预览](https://website-custom.com/wp-content/uploads/2024/10/设置模板预览.png)

点击模版编辑页面最上方的设置图标。

![预览选择我们刚创建的产品](https://website-custom.com/wp-content/uploads/2024/10/预览选择我们刚创建的产品.png)

在左侧导航栏中：

1. Preview Settings选择"产品"
2. 然后搜索并选择我们刚发布的产品
3. 然后点击Apply & Preview

接着设置图像轮播元素：

![设置轮播图布局](https://website-custom.com/wp-content/uploads/2024/10/设置轮播图布局.png)

- 图像分辨率：300
- 幻灯片显示：1
- 链接：媒体文件
- 灯箱：是

![设置轮播图不要自动播放](https://website-custom.com/wp-content/uploads/2024/10/设置轮播图不要自动播放.png)

其他选项，关闭自动播放。

设置好的图像轮播长这样：

![设置后的轮播图样式](https://website-custom.com/wp-content/uploads/2024/10/设置后的轮播图样式.png)

如果你觉得产品轮播图板块过于简单，也可以[**使用 Jet Product Gallery 插件**](https://website-custom.com/resources/jetproduct-gallery/)生成样式更加好看、功能更加全面的产品图片展示板块。

![添加标题和文本元素](https://website-custom.com/wp-content/uploads/2024/10/添加标题和文本元素.png)

接着添加一个标题元素和两个文本元素到右侧的小容器中。

![设置标题动态标签](https://website-custom.com/wp-content/uploads/2024/10/设置标题动态标签.png)

设置标题元素的动态标签为：Post Title。

![设置文本动态标签为ACF](https://website-custom.com/wp-content/uploads/2024/10/设置文本动态标签为ACF.png)

设置文本元素的动态标签为：ACF Field。

![设置ACF标签为产品描述或者产品价格](https://website-custom.com/wp-content/uploads/2024/10/设置ACF标签为产品描述或者产品价格.png)

还要分别设置两个文本元素的ACF Field的Key为产品描述和价格。

目前添加的元素，是这个效果：

![预览一下效果](https://website-custom.com/wp-content/uploads/2024/10/预览一下效果.png)

![下方再添加一个大容器](https://website-custom.com/wp-content/uploads/2024/10/下方再添加一个大容器.png)

在下方再添加一个大容器。

![添加Post Content元素](https://website-custom.com/wp-content/uploads/2024/10/添加Post-Content元素.png)

添加Post Content元素到大容器内。

这样产品页模板的大体框架就布局好了：

![产品模板页框架设计好了](https://website-custom.com/wp-content/uploads/2024/10/产品模板页框架设计好了.png)

然后对元素都调整一下样式，使其符合网站设计风格。

还可以在价格下方添加一个按钮，设置[弹出式表单](https://website-custom.com/popup-form/)。

![保存应用为所有产品](https://website-custom.com/wp-content/uploads/2024/10/保存应用为所有产品.png)

最后点击右上角保存模板，设置模板应用到所有产品。

我们来预览一下最终效果：

![调整产品模板页样式、预览效果](https://website-custom.com/wp-content/uploads/2024/10/调整产品模板页样式、预览效果.png)

</TabItem>

<TabItem value="archive" label="创建产品列表页模板">

创建产品列表页（产品汇总页、产品分类页）模板的步骤要相对复杂一点

1. 需要先创建Loop模板，用以展示**单个产品**展示的样式。
2. 再创建Archive模板，用来展示产品分类页面 – **产品分类页**。
3. 最后创建一个静态页面展示所有产品（这个页面的样式可以复制Archive模板的内容） – **产品汇总页**。

开始制作产品列表模板之前，先创建一些产品分类：

![添加ACF产品分类](https://website-custom.com/wp-content/uploads/2024/10/添加ACF产品分类.png)

添加好产品分类后，把这些产品分类添加到一个新的菜单里：

![WP菜单显示选项勾选产品分类](https://website-custom.com/wp-content/uploads/2024/10/WP菜单显示选项勾选产品分类.png)

WP后台 – 外观 – 菜单，上方打开显示选项，勾选产品分类。

![创建产品分类菜单](https://website-custom.com/wp-content/uploads/2024/10/创建产品分类菜单.png)

勾选刚才创建的分类，添加到新的产品分类菜单并保存。

#### 创建Loop Item模板

![创建Loop Item模板](https://website-custom.com/wp-content/uploads/2024/10/创建Loop-Item模板.png)

WP后台 – 模板 – Theme Builder中添加Loop Item模板。

![创建一个大容器包含两个并列的小容器](https://website-custom.com/wp-content/uploads/2024/10/创建一个大容器包含两个并列的小容器.png)

模板编辑页面里，添加一个大容器包含两个小容器的布局。

![添加Featured Image元素](https://website-custom.com/wp-content/uploads/2024/10/添加Featured-Image元素.png)

添加Featured Image元素到上方小容器。

![添加Post Title元素](https://website-custom.com/wp-content/uploads/2024/10/添加Post-Title元素.png)

添加Post Title元素到下方小容器。

![设置Featured Image 和 Post Title 的 URL](https://website-custom.com/wp-content/uploads/2024/10/设置Featured-Image-和-Post-Title-的-URL.png)

设置Featured Image和Post Title元素的自定义URL为Post URL。

最终样式如下图：

![展示Loop效果](https://website-custom.com/wp-content/uploads/2024/10/展示Loop效果.png)

保存发布模板。

#### 创建Archive模板

创建Archive模板是为了用于产品分类列表页。

![创建Archive模板](https://website-custom.com/wp-content/uploads/2024/10/创建Archive模板.png)

![添加两个大容器，下面的大容器包含两个并排的小容器](https://website-custom.com/wp-content/uploads/2024/10/添加两个大容器，下面的大容器包含两个并排的小容器.png)

在Archive模板中添加两个大容器，下方大容器包含两个小容器，左边70%宽度，右边30%宽度。

![添加Archive Title元素](https://website-custom.com/wp-content/uploads/2024/10/添加Archive-Title元素.png)

添加Archive Title元素到上方大容器里。

![关闭Archive Title 的 Include Context](https://website-custom.com/wp-content/uploads/2024/10/关闭Archive-Title-的-Include-Context.png)

关闭Archive Title的Include Context。

![设置Archive Title样式](https://website-custom.com/wp-content/uploads/2024/10/设置Archive-Title样式.png)

设置Title样式。

![添加Loop Grid元素到左侧小容器](https://website-custom.com/wp-content/uploads/2024/10/添加Loop-Grid元素到左侧小容器.png)

搜索loop，添加Loop Grid元素到下方左侧小容器。

![设置Loop Grid Query 为 Current Query](https://website-custom.com/wp-content/uploads/2024/10/设置Loop-Grid-Query-为-Current-Query.png)

设置Loop Grid元素的Query，Source: Current Query。

![选择我们刚创建的Loop Item模板](https://website-custom.com/wp-content/uploads/2024/10/选择我们刚创建的Loop-Item模板.png)

设置Loop Grid元素的Layout：

- 模版选择我们刚创建的Loop模板
- Columns：3
- Items Per Page：9
- Equal Height：开启

![展示效果](https://website-custom.com/wp-content/uploads/2024/10/展示效果.png)

设置好Loop Grid后的样子，如果不显示内容记得调整预览。

![添加Search元素到右侧小容器](https://website-custom.com/wp-content/uploads/2024/10/添加Search元素到右侧小容器.png)

![添加 Menu 元素到右侧小容器](https://website-custom.com/wp-content/uploads/2024/10/添加-Menu-元素到右侧小容器.png)

![添加 Posts 元素到右侧小容器](https://website-custom.com/wp-content/uploads/2024/10/添加-Posts-元素到右侧小容器.png)

分别添加Search、Menu、Posts元素到右侧小容器中。

![设置 Posts 的 Query为Manual Selection 并选择想要展示的产品](https://website-custom.com/wp-content/uploads/2024/10/设置-Posts-的-Query为Manual-Selection-并选择想要展示的产品.png)

设置Posts元素的Query，Source: Manual Selection，然后选择几个新品或者热卖品。

![设置Posts元素Layout](https://website-custom.com/wp-content/uploads/2024/10/设置Posts元素Layout.png)

设置Posts Layout：

- 样式：Classic
- Columns：1
- Posts Per Page：3
- Image Position：Left
- 图像分辨率：150
- Image Ratio：0.66
- Image Width：30%
- Title：开启
- Title HTML Tag：H3
- Excerpt：关闭
- Meta Data：都删除
- Read More：关闭

![调整整体样式，并未侧边栏里产品分类和产品推荐添加标题元素](https://website-custom.com/wp-content/uploads/2024/10/调整整体样式，并未侧边栏里产品分类和产品推荐添加标题元素.png)

再在Menu和Posts元素上方添加对应的标题，调整一些局部样式。

发布模板：

![保存模板，应用到All Archive ，排除分类目录和文章Archive](https://website-custom.com/wp-content/uploads/2024/10/保存模板，应用到All-Archive-，排除分类目录和文章Archive.png)

模板显示包含 All Archives，排除文章目录和文章Archive。

这样Archive模板就只应用在ACF的产品分类上。

保存发布后先不要关闭这个页面。

#### 创建产品汇总页

![新建静态页面](https://website-custom.com/wp-content/uploads/2024/10/新建静态页面.png)

添加一个新的静态页面。

![复制Archive页面的内容到静态页面](https://website-custom.com/wp-content/uploads/2024/10/复制Archive页面的内容到静态页面.png)

回到Archive模板，右键复制内容。

![粘贴内容](https://website-custom.com/wp-content/uploads/2024/10/粘贴内容.png)

再回到静态页面，粘贴刚复制的Archive模板的内容。

![复制Archive页面的内容到静态页面2](https://website-custom.com/wp-content/uploads/2024/10/复制Archive页面的内容到静态页面2.png)

再去Archive复制下方大容器内容。

![粘贴内容2](https://website-custom.com/wp-content/uploads/2024/10/粘贴内容2.png)

再回静态页面粘贴。

![修改Loop Grid的Query为产品](https://website-custom.com/wp-content/uploads/2024/10/修改Loop-Grid的Query为产品.png)

设置静态页面里的Loop Grid 的Query，Source：产品。

再更换最上方的大标题为普通标题元素，标题内容：All Product。

其他不用修改，发布这个页面。

</TabItem>
</Tabs>

## ACF产品列表页效果展示

![ACF产品列表页效果展示](https://website-custom.com/wp-content/uploads/2024/11/ACF产品列表页效果展示.jpg)

:::tip 提示
如果你还想增加一些 B2B 外贸网站高级功能，可以了解一下 [**Well建站开发的批量询盘功能代码**](https://website-custom.com/resources/welljz-inquiry/)。
:::

## 总结

至此，ACF教程结束，从此就可以使用ACF管理B2B网站产品了，完全替代WooCommerce。

## 下载资源

| 资源名称 | 下载链接 |
|---------|----------|
| ACF插件包 | [下载ACF插件](https://example.com/acf-plugin.zip) |
| ACF产品管理模板 | [下载模板文件](https://example.com/acf-product-templates.zip) |
