---
title: "Google Search Console使用教程，必不可少的站长工具GSC"
description: "Google Search Console使用教程，教你使用GSC帮助你监控和优化网站在Google搜索引擎中的表现及网站收录情况。"
tags: [gsc, google-search-console, seo, tutorial]
slug: /gsc-tutorial
---

<!-- 文件顶部更新时间 -->
<div class="text-right text-sm text-gray-500 mb-4">Last updated: Oct 15 2025</div>

![Google Search Console使用教程配图](https://www.gfxcamp.com/wp-content/uploads/2024/11/google.jpg)

## 关于Google Search Console

Google Search Console (GSC) 是 Google 提供的免费工具，帮助网站管理员监控和优化网站在 Google 搜索结果中的表现。

使用 GSC 可以获得网站在 Google 搜索中的关键数据，并做出有针对性的优化。

### Google Search Console主要功能包括：

- **网站效果检测**：在GSC可以查看网站在 Google 搜索中的表现，包括展示次数、点击量、点击率和关键词排名，可以按页面、国家、设备类型（如移动端或桌面）等维度筛选数据，帮助分析不同页面和设备的表现。

- **页面收录情况**：显示 Google 抓取和索引网站的情况，帮助识别未被索引或有错误的页面。通过GSC的报告可以及时修复问题，比如 404 错误、服务器错误或其他索引问题，确保更多页面能被 Google 抓取和收录。

- **提交站点地图**：提交网站的 XML 站点地图，让 Google 更好地了解网站结构和优先抓取的页面。

- **页面体检**：综合页面加载速度、移动端友好性等因素评估网站的用户体验。

- **外链数据**：通过GSC还能查看网站的外链情况。

## Google Search Console使用教程

在使用Google Search Console监测网站效果之前，需要先验证网站所有权，跟随下方教程一起操作。

### GSC关联网站

如果你的WordPress网站安装并设置了Site Kit by Google插件，那就不需要进行这一步的关联操作。

先打开[GSC网站首页](https://search.google.com/search-console)。

#### 选择验证方式

<Tabs groupId="gsc-verification">
<TabItem value="domain" label="添加网域" default>

- 如果网站包含多个子域或有多个协议（如 HTTP 和 HTTPS），选择**添加网域**能更全面地收集数据和监控。
- 如果您的网站只有一个主要域名且只使用 HTTPS（如 `https://www.example.com`），选择**添加网址前缀**。

大多数网站选择**添加网址前缀即可**，先将www域名重定向到主域名，或者将主域名重定向到www域名。

- 如果 www 和非 www 版本的域名被搜索引擎和统计工具视为不同的站点，可能会导致流量数据的分散，影响对用户行为的分析，且分散网站权重。

再将域名（https://example.com或者https://www.example.com）通过**网址前缀添**加到GSC。

具体使用哪个网址添加GSC，取决于你是www重定向到主域名，还是主域名重定向到www域名，这两种重定向对SEO没有影响，看个人的喜好，确定后就不要再改了。

##### 添加网域步骤

1. 填写域名，点击继续。
2. 复制GSC提供的txt记录值，打开域名提供商或者DNS提供方网站。
3. 添加一条主域名的txt记录到解析。
   - 记录类型：TXT
   - 主机记录：@（代表主域名）
   - 记录值：GSC提供的记录值
4. 添加完解析后回到GSC页面，点击验证。

</TabItem>

<TabItem value="prefix" label="添加网址前缀">

- 如果网站包含多个子域或有多个协议（如 HTTP 和 HTTPS），选择**添加网域**能更全面地收集数据和监控。
- 如果您的网站只有一个主要域名且只使用 HTTPS（如 `https://www.example.com`），选择**添加网址前缀**。

大多数网站选择**添加网址前缀即可**，先将www域名重定向到主域名，或者将主域名重定向到www域名。

- 如果 www 和非 www 版本的域名被搜索引擎和统计工具视为不同的站点，可能会导致流量数据的分散，影响对用户行为的分析，且分散网站权重。

再将域名（https://example.com或者https://www.example.com）通过**网址前缀添**加到GSC。

具体使用哪个网址添加GSC，取决于你是www重定向到主域名，还是主域名重定向到www域名，这两种重定向对SEO没有影响，看个人的喜好，确定后就不要再改了。

##### 添加网址前缀步骤

1. 输入子域名，点击继续。
2. 使用推荐的验证方法：HTML文件验证，下载html文件。
3. 到服务器管理面板，打开文件管理界面，这里以宝塔面板为例，其他面板也是相同的步骤。
4. 依次点击www > wwwroot > aaa.abcd.com路径，来到网站根目录。
5. 上传刚才下载的html文件到网站根目录。
6. 回到GSC验证。

</TabItem>
</Tabs>

:::tip 提示
Well会对两种添加网站的方式都进行演示。
:::

### 了解GSC操作界面

如果你刚开始使用GSC并关联网站，是不会显示网站在Google里的数据的，先不要着急，等待几天即可，快的话第二天就能看数据。

#### 主要功能区域

<Tabs groupId="gsc-features">
<TabItem value="overview" label="概览与效果" default>

- **概览**：提供网站在Google搜索中的总体表现和健康状态的简要总结。
- **效果**：提供关于网站在Google搜索中不同时间段的详细表现，包括流量、关键词排名、点击率等数据。可以添加不同的筛选条件（设备、网页、地区），查看对应的数据。
- **网址检查**：输入指定URL，可以改页面的索引状态、抓取问题、结构化数据等，帮助你诊断单个页面的SEO问题。

</TabItem>

<TabItem value="content" label="网页与站点地图">

- **网页**：列出了Google索引的所有页面的相关信息。这里可以查看每个页面的索引状态、排名和抓取情况。
- **站点地图**：可以在这里提交和管理站点地图，查看其提交情况和抓取效果。
- **删除**：可以暂时从Google搜索结果中移除某些页面。用于保护隐私、去除重复内容或删除不再相关的页面。

</TabItem>

<TabItem value="experience" label="页面体验与安全">

- **页面体验**：了解用户在访问你网站时的整体体验。Google通过多个指标来评估网站的页面体验，良好的页面体验对搜索排名产生积极影响。
- **核心网页指标**：是Google用来评估网页加载体验、交互性和视觉稳定性的重要衡量标准。这些被视为页面体验的一部分，并直接影响到网站在搜索中的排名。
- **HTTPS**：统计你网站的HTTPS页面和非HTTPS页面，HTTPS增强了网站的安全性，提高用户信任，也是Google排名信号之一。

</TabItem>

<TabItem value="advanced" label="高级功能">

- **路径**：显示网站的有效和无效网页，能在 Google 搜索中显示为富媒体的页面被标记为有效。
- **人工处置措施**和**安全问题**：它们涉及到网站是否受到Google的手动惩罚或是否存在安全风险。正常情况下会显示"未检测到任何问题"。
- **链接数量**：这个页面提供了有关你网站的外部和内部链接的数据。这些数据可以帮助你了解链接的来源和分布情况。
- **设置**：管理GSC账户和管理权限，还可以在这里关联GA、更改域名、导出数据、查看GSC的抓取报告、删除当前资源。

</TabItem>
</Tabs>

## 总结

至此，Google Search Console使用教程结束。

## 下载资源

| 资源名称 | 下载链接 |
|---------|----------|
| Google Search Console完整教程 | [下载教程PDF](https://example.com/gsc-tutorial.pdf) |
| GSC验证文件模板 | [下载验证文件](https://example.com/gsc-verification-files.zip) |
