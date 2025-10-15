---
title: "WordPress子主题安装教程"
description: "WordPress安装子主题可以继承父主题的样式和功能，对子主题进行修改和定制，而不直接修改父主题的核心代码，同时避免主题更新覆盖自定义的修改。"
tags: [wordpress, 子主题, child theme, 主题定制]
slug: /wordpress-child-theme-tutorial
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import Admonition from '@theme/Admonition';

<Admonition type="tip">
  <p>通过子主题，可以在不修改父主题文件的情况下进行定制，这样即使父主题更新，也不会影响你的自定义修改</p>
</Admonition>

## Last updated: Oct 15 2025

## WordPress安装子主题的好处

![img1015-fLTy.webp](https://list.ucards.store/d/img/img1015-fLTy.webp)

<img decoding="async" src="https://website-custom.com/wp-content/uploads/2025/01/1.webp" sizes="auto, (max-width: 800px) 100vw, 800px" srcset="https://website-custom.com/wp-content/uploads/2025/01/1.webp 845w, https://website-custom.com/wp-content/uploads/2025/01/1-300x127.webp 300w, https://website-custom.com/wp-content/uploads/2025/01/1-768x326.webp 768w" alt="安装WordPress子主题" width="800" height="340" title="- Well建站 | 唯二建站" />

如果直接修改父主题的代码，例如WP后台主题文件编辑器中的style.css和functions.php文件。可能在这两个文件分别添加了一些自定义的样式和功能，但是主题的更新可能会覆盖这些修改，会导致丢失所有自定义的功能和样式。

比如在[自定义登录页样式](https://website-custom.com/wp-login-design/)文章中就有通过在functions.php文件添加代码实现样式修改，如果你的主题更新了，那你添加的代码也就没了。

但是通过子主题，可以在不修改父主题文件的情况下进行定制，这样即使父主题更新，也不会影响你的自定义修改。

其中的原理：子主题是一个独立的主题，它**继承了父主题**的所有功能和样式，但允许你进行**修改和定制**，而不直接修改父主题的核心代码。例如，可以修改子主题的 `style.css` 来改变外观，或者在 `functions.php` 中添加代码实现新的功能。

## 如何创建WordPress子主题？

Well安装子主题常用的方式有3种，分别是Google搜索官方子主题、使用子主题生成器插件、手动创建子主题。

<Tabs>
<TabItem value="official" label="官方子主题">
- 在Google搜索官方子主题是最简单的一种方法，但不是所有主题都有官方子主题。
- 适用于Astra、Hello Elementor等主流主题
- 直接从官方渠道下载，安全可靠
</TabItem>
<TabItem value="plugin" label="插件生成">
- 使用子主题安装插件的好处就是操作简单、适用性更广。
- 推荐使用Child Theme Configurator插件
- 适合不熟悉代码的用户
</TabItem>
<TabItem value="manual" label="手动创建">
- 手动创建子主题的好处是适用于所有主题，但需要一些操作能力。
- 完全自定义子主题配置
- 适合有技术基础的用户
</TabItem>
</Tabs>

注意：不管是哪种方法，在使用子主题的过程中，不能删除父主题。

你可以选择适合自己的方式创建子主题，具体操作如下。

## Google搜索官方子主题

可在Google浏览器直接搜索XXX子主题，找到官方链接并下载。下方举例Astra和Hello Elementor :

![Google搜索Astra子主题](data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20width='687'%20height='320'%20viewBox='0%200%20687%20320'%3E%3C/svg%3E "- Well建站 | 唯二建站")

<img decoding="async" src="https://website-custom.com/wp-content/uploads/2025/01/12.webp" alt="Google搜索Astra子主题" width="687" height="320" title="- Well建站 | 唯二建站" />

搜索astra child theme，在搜索结果找到官方链接。

![下载Astra子主题](data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20width='878'%20height='608'%20viewBox='0%200%20878%20608'%3E%3C/svg%3E "- Well建站 | 唯二建站")

<img decoding="async" src="https://website-custom.com/wp-content/uploads/2025/01/13.webp" alt="下载Astra子主题" width="878" height="608" title="- Well建站 | 唯二建站" />

下载[Astra子主题](https://wpastra.com/child-theme-generator/)。

![Google搜索hello elementor子主题](data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20width='721'%20height='561'%20viewBox='0%200%20721%20561'%3E%3C/svg%3E "- Well建站 | 唯二建站")

<img decoding="async" src="https://website-custom.com/wp-content/uploads/2025/01/14.webp" alt="Google搜索hello elementor子主题" width="721" height="561" title="- Well建站 | 唯二建站" />

搜索hello elementor child theme。

![下载hello elementor子主题](data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20width='961'%20height='342'%20viewBox='0%200%20961%20342'%3E%3C/svg%3E "- Well建站 | 唯二建站")

<img decoding="async" src="https://website-custom.com/wp-content/uploads/2025/01/15.webp" alt="下载hello elementor子主题" width="961" height="342" title="- Well建站 | 唯二建站" />

[hello elementor子主题](https://github.com/elementor/hello-theme-child)下载。

![WP后台上传子主题](data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20width='1144'%20height='290'%20viewBox='0%200%201144%20290'%3E%3C/svg%3E "- Well建站 | 唯二建站")

<img decoding="async" src="https://website-custom.com/wp-content/uploads/2025/01/4.webp" alt="WP后台上传子主题" width="1144" height="290" title="- Well建站 | 唯二建站" />

搜索并下载子主题后，在WP后台 – 外观 – 主题 – 左上角"添加主题" – 左上角"上传主题"，上传下载的子主题压缩包即可。

安装完成后，在WP后台 – 外观 – 主题，启用子主题。

## 使用子主题生成器插件创建子主题

我们需要用到[Child Theme Configurator](https://wordpress.org/plugins/child-theme-configurator/)插件，这一是个免费的子主题生成器插件，设置也比较简单，具体操作如下：

首先安装Child Theme Configurator插件

![Child Theme Configurator插件安装](data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20width='565'%20height='292'%20viewBox='0%200%20565%20292'%3E%3C/svg%3E "- Well建站 | 唯二建站")

<img decoding="async" src="https://website-custom.com/wp-content/uploads/2025/01/6.webp" alt="Child Theme Configurator插件安装" width="565" height="292" title="- Well建站 | 唯二建站" />

在WP后台插件安装界面搜索Child Theme Configurator，安装并启用。

![Child Theme Configurator插件设置](data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20width='1184'%20height='536'%20viewBox='0%200%201184%20536'%3E%3C/svg%3E "- Well建站 | 唯二建站")

<img decoding="async" src="https://website-custom.com/wp-content/uploads/2025/01/7.webp" alt="Child Theme Configurator插件设置" width="1184" height="536" title="- Well建站 | 唯二建站" />

![- Well建站 | 唯二建站](data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20width='1063'%20height='273'%20viewBox='0%200%201063%20273'%3E%3C/svg%3E "- Well建站 | 唯二建站")

<img decoding="async" src="https://website-custom.com/wp-content/uploads/2025/01/8.webp" alt="- Well建站 | 唯二建站" width="1063" height="273" title="- Well建站 | 唯二建站" />

在WP后台 – 工具 – Child Themes 设置Child Theme Configurator插件，如上图所示：

1.  **Select an action**：CREATE a new Child Theme
2.  **Select a Parent Theme：**选择父主题
3. **点击Analyze**

这些操作后会自动检测是否能生成子主题，然后接着操作：

![Child Theme Configurator生成子主题设置](data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20width='657'%20height='751'%20viewBox='0%200%20657%20751'%3E%3C/svg%3E "- Well建站 | 唯二建站")

<img decoding="async" src="https://website-custom.com/wp-content/uploads/2025/01/9.webp" alt="Child Theme Configurator生成子主题设置" width="657" height="751" title="- Well建站 | 唯二建站" />

其他设置不做修改，点击底部Create New Child Theme创建子主题。

![Child Theme Configurator成功生成子主题](data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20width='789'%20height='144'%20viewBox='0%200%20789%20144'%3E%3C/svg%3E "- Well建站 | 唯二建站")

<img decoding="async" src="https://website-custom.com/wp-content/uploads/2025/01/10.webp" alt="Child Theme Configurator成功生成子主题" width="789" height="144" title="- Well建站 | 唯二建站" />

创建子主题成功提示。

![启用子主题](data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20width='857'%20height='373'%20viewBox='0%200%20857%20373'%3E%3C/svg%3E "- Well建站 | 唯二建站")

<img decoding="async" src="https://website-custom.com/wp-content/uploads/2025/01/11.webp" alt="启用子主题" width="857" height="373" title="- Well建站 | 唯二建站" />

打开WordPress主题界面，启用子主题。

子主题生成后可以选择卸载子主题生成插件。

## 手动创建子主题

手动创建子主题是最基础、最常见的方法，基本上通用各种主题。

![创建style.css和functions.php文件](data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20width='199'%20height='76'%20viewBox='0%200%20199%2076'%3E%3C/svg%3E "- Well建站 | 唯二建站")

<img decoding="async" src="https://website-custom.com/wp-content/uploads/2025/01/5.webp" alt="创建style.css和functions.php文件" width="199" height="76" title="- Well建站 | 唯二建站" />

我们需要创建两个文件，分别是style.css和functions.php。

### 创建style.css文件

创建一个后缀为.css的style文件，将下方代码粘贴进文件内并保存。

```css
/*
Theme Name: xxx Child
Theme URI: http://example.com/xxx-child
Description: My custom child theme
Author: Your Name
Author URI: http://example.com
Template: xxx-theme
Version: 1.0
*/
```

-   Theme Name：子主题的名称，这是**必须的字段**，WordPress 会显示这个名称在后台主题页面。
-   Theme URI：子主题的 URL，通常是你为子主题创建的介绍页面链接（可选）。
-   Description：子主题的简短描述，简要说明这个子主题的目的和特性。
-   Author：子主题的作者名字。 Author URI：子主题作者的链接，通常是个人网站或社交媒体链接（可选）。
-   Template：父主题的文件夹名称，这个字段是**必需**的，必须准确无误地填写父主题的文件夹名。它告诉 WordPress 这个子主题基于哪个父主题。
-   Version：子主题的版本号，可以根据需求自行设置（可选）。

文件内的其他行可以自定义填写，但 Template 是style.css文件中最重要的一行，要填写**父主题文件夹名**，这里声明了该子主题的父主题是谁，如果填写错误会导致无法继承父主题样式和功能，导致页面错乱。

**如何确定父主题文件夹名？**

![WordPress主题文件夹的路径](data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20width='587'%20height='220'%20viewBox='0%200%20587%20220'%3E%3C/svg%3E "- Well建站 | 唯二建站")

<img decoding="async" src="https://website-custom.com/wp-content/uploads/2025/01/2.webp" alt="WordPress主题文件夹的路径" width="587" height="220" title="- Well建站 | 唯二建站" />

可以通过FTP管理器或者**服务器自带的文件管理**器查找，WordPress主题文件在网站根目录下的 /wp-content/themes/ 内，图中的 hello-elementor 就是主题文件名。

### 创建functions.php文件

创建一个后缀为.php的functions文件，将下方代码粘贴进文件内并保存。

```php
<?php
// 引入父主题的样式
function my_theme_enqueue_styles() {
    wp_enqueue_style('parent-style', get_template_directory_uri() . '/style.css');
}
add_action('wp_enqueue_scripts', 'my_theme_enqueue_styles');
```

### 安装手动创建的子主题

![服务器文件管理器上传子主题](data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20width='680'%20height='258'%20viewBox='0%200%20680%20258'%3E%3C/svg%3E "- Well建站 | 唯二建站")

<img decoding="async" src="https://website-custom.com/wp-content/uploads/2025/01/3.webp" alt="服务器文件管理器上传子主题" width="680" height="258" title="- Well建站 | 唯二建站" />

将创建好的style.css和functions.php文件放入同一个文件夹内，将该文件夹上传到网站的主题文件夹内（/wp-content/themes/）。

另一种安装方式：

![WP后台上传子主题](data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20width='1144'%20height='290'%20viewBox='0%201144%20290'%3E%3C/svg%3E "- Well建站 | 唯二建站")

<img decoding="async" src="https://list.ucards.store/d/img1015-aHKP.webp" alt="WordPress子主题安装" width="1144" height="290" title="- Well建站 | 唯二建站" />

或者将该子主题文件夹压缩成.zip格式的压缩包，通过在WP后台上传主题的方式安装子主题。

## 总结

以上就是WordPress安装子主题教程的全部内容。

## 下载链接

| 工具/资源 | 下载地址 | 类型 | 说明 |
|---------|----------|------|------|
| Child Theme Configurator | [https://wordpress.org/plugins/child-theme-configurator/](https://wordpress.org/plugins/child-theme-configurator/) | 插件 | 免费的子主题生成器 |
| Astra子主题 | [https://wpastra.com/child-theme-generator/](https://wpastra.com/child-theme-generator/) | 子主题 | Astra主题官方子主题 |
| Hello Elementor子主题 | [https://github.com/elementor/hello-theme-child](https://github.com/elementor/hello-theme-child) | 子主题 | Elementor官方子主题 |
