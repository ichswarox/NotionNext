---
title: WordPress启用邮箱（Gmail）
description: "学习如何使用WP Mail SMTP插件配置WordPress邮箱功能，通过Gmail或Google Workspace设置邮件发送器，解决网站邮件投递问题。"
tags: ["WordPress", "Gmail", "邮件发送", "WP Mail SMTP", "Google Workspace", "邮件配置", "网站邮件"]
slug: /wordpress-enable-email-gmail
---

<!--原始链接，不能删除这句话 https://wpmailsmtp.com/categories/docs/getting-started/ -->

# WordPress启用邮箱（Gmail）
<iframe width="560" height="315" src="https://www.youtube.com/embed/m7wd016ARSU?si=PLwCpWtuWtBR25jC" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

## 如何启用邮件发送功能？

安装插件 WP Mail SMTP 并且启用，会自动弹出设置。

第一步：Let's Get Started - Google/Gmail - I understand

**注意：** Gmail邮件程序对于发送邮件数量较少的网站来说具有不错的效果体验，但Gmail的API在速率和设置方面均会有一些限制。如果您需要发送大量的邮件，或发现您的WEB主机与Gmail API的限制不兼容，那么我们建议您考虑其他的邮件服务。


更新时间：2024年6月30日

:::note
本教程将向您展示如何使用Google Workspace / Gmail邮件发送器设置WP Mail SMTP，使用您的Gmail或Google Workspace邮箱地址。
:::


## 安装和配置WP Mail SMTP插件

在开始之前，您需要安装并激活WP Mail SMTP插件。

![常规选项卡SMTP设置](https://wpmailsmtp.com/wp-content/uploads/2023/08/wp-mail-smtp-settings.png)

下面，我们将介绍此设置所需的设置。

### 发送邮箱

这是您网站所有邮件的发送邮箱地址。您可以在提供的字段中输入您的邮箱地址，包括任何您配置的别名，在后续步骤中将您的网站连接到Gmail API后。

![Gmail邮件发送器的发送邮箱](https://wpmailsmtp.com/wp-content/uploads/2023/11/from-email-gmail-mailer-2.png)

**强制发送邮箱**选项将使您网站发送的所有邮件都来自您输入的地址。

**注意：** 为了在您的WordPress网站中使用多个Gmail别名作为发送邮箱地址，请确保**不勾选**强制发送邮箱框。

### 发送名称

在发送邮箱下方，您可以设置**发送名称**。这是与您网站发送的邮件关联的名称。默认情况下，它将设置为您的网站名称，但您可以将其调整为任何您想要的名称。

您也可以勾选**强制发送名称**选项，将此设置应用到整个网站。

![WP Mail SMTP设置中的发送名称](https://wpmailsmtp.com/wp-content/uploads/2021/10/from-name.png)

### 邮件发送器

这是您可以选择您希望网站使用的邮件发送器的位置。选择**Google / Gmail**选项。

![选择Gmail邮件发送器](https://wpmailsmtp.com/wp-content/uploads/2025/03/gmail-mailer.png)

选择此邮件发送器后，您应该会看到一个名为**Google /** **Gmail**的新部分出现，其中包含更多授权选项。

![Google / Gmail邮件发送器设置](https://wpmailsmtp.com/wp-content/uploads/2023/11/google-gmail-mailer-settings.png)

有两种方式可以配置Google Workspace / Gmail邮件发送器：使用一键设置或手动创建自定义Google应用以生成您的**客户端ID**和**客户端密钥**。

如果您在一键设置和手动设置之间做选择，以下是快速比较：

| 手动设置 | 一键设置（专业版） |
|----------|-------------------|
| **易用性** | 逐步指南协助您 | 瞬间连接，步骤最少 |
| **技术步骤** | 需要创建Google应用并配置凭据 | 无需手动配置 |
| **所需时间** | 大约30-60分钟 | 少于2分钟 |
| **支持** | 访问广泛的文档 | 我们团队的优先支持 |
| **适合人群** | 喜欢详细设置和学习过程的用户 | 寻求最快最简单设置的用户 |

## 激活一键设置

为了更简单和更快的邮件设置，我们建议使用一键设置功能。它允许您通过几次点击将您的网站连接到Gmail / Google Workspace。

在WP Mail SMTP设置中选择Google / Gmail作为您的邮件发送器后，您将找到激活**一键设置**的选项。只需将此切换开关设置为**ON**位置即可开始简化的设置过程。

![one-click-setup-gmail-mailer](https://wpmailsmtp.com/wp-content/uploads/2023/12/one-click-setup-gmail-mailer.png)


## 在您的Google账户中创建Web应用

稍后您将回到WP Mail SMTP的设置页面，因此对于此步骤，请在浏览器中打开一个新标签页或窗口。

在您打开的新标签页或窗口中，登录您的Google账户并打开[Google Cloud Console](https://console.cloud.google.com/home/dashboard)。

**注意：** 在继续之前，请确保登出除您将用于SMTP设置的账户之外的所有其他Google账户。

此外，如果您使用Google Workspace，请确保您使用的Google账户具有发送邮件的权限（换句话说，可以访问自己的收件箱）。

如果您是第一次使用Google Cloud Console，您可能会看到一个弹出窗口，要求您选择国家/地区并同意服务条款。请继续执行此操作，然后单击**同意并继续**以转到下一步。

![接受Google Cloud服务条款](https://wpmailsmtp.com/wp-content/uploads/2020/11/google-cloud-terms-service.png)

如果您之前登录过Google Cloud Console，您可能会跳过服务条款。

### 创建或选择项目

首先，您需要为您的应用选择一个项目。您可以选择一个现有的项目或创建一个新项目。

为此，请单击仪表板顶部工具栏中的项目下拉菜单。

![打开Google Cloud项目下拉菜单](https://wpmailsmtp.com/wp-content/uploads/2020/11/google-cloud-projects-dropdown.png)

在出现的弹出窗口中，从列表中选择一个现有项目或单击右上角的**新项目**。

![选择在Google Cloud中为应用设置新项目](https://wpmailsmtp.com/wp-content/uploads/2022/1/create-new-project.png)

如果您选择了现有项目，请继续下一步。对于新项目，请输入项目名称并从下拉菜单中选择组织和位置。

![在Google Cloud中创建新项目](https://wpmailsmtp.com/wp-content/uploads/2020/11/google-cloud-create-new-project.png)

然后单击**创建**按钮。

### 启用Gmail API

接下来，您需要为您的项目启用Gmail API。在您的Google Cloud Console侧边栏中，转到**API和服务 » 库**。

![api services library](https://wpmailsmtp.com/wp-content/uploads/2022/11/api-services-library.png)

**注意：** 如果您在侧边栏中看不到**API和服务**，可以通过向下滚动并单击**更多产品**找到它。

然后在**类别**下查找并单击**Google Workspace**，或在搜索栏中输入"Gmail API"。

![在Google API库中打开Workspace类别](https://wpmailsmtp.com/wp-content/uploads/2022/11/gmail-api.png)

单击**Gmail API**结果。

![Gmail API](https://wpmailsmtp.com/wp-content/uploads/2022/11/select-gmail-api.png)

在Gmail API页面上，单击蓝色的**启用**按钮。

![启用Gmail API](https://wpmailsmtp.com/wp-content/uploads/2022/1/enable-gmail-api.png)

### 创建您的应用程序凭据

启用Gmail API后，您应该会被重定向到Gmail API概述页面。在这里，单击**创建凭据**按钮。

![为Gmail API创建凭据](https://wpmailsmtp.com/wp-content/uploads/2022/11/create-credentials.png)

在下一页，Google将询问一些问题以确定您需要的凭据类型。从**选择API**下拉菜单中选择**Gmail API**。

![选择Gmail API](https://wpmailsmtp.com/wp-content/uploads/2021/10/select-gmail-api.png)

**注意：** 如果您在下拉菜单中看不到Gmail API选项，请确保您已为您的账户[启用Gmail API](https://support.google.com/googleapi/answer/6158841?hl=en)。

接下来，在**您将访问什么数据？**下，选择**用户数据**选项。然后单击**下一步**继续。

![点击下一步按钮](https://wpmailsmtp.com/wp-content/uploads/2021/10/click-next-button.png)

### 配置您的OAuth同意屏幕

然后Google将要求您提供关于您的应用的一些基本信息。

这部分主要用于个人使用，因为没有其他人会使用您的应用。但是，有些字段仍标记为必填：

- **应用名称：** 输入您选择的应用名称（例如，Pattie的应用）。
- **用户支持邮箱：** 从提供的选项中选择您的邮箱地址。
- **应用图标：** 如果您愿意，可以为您的应用上传图标。这是可选的。

![在Google Cloud中输入应用信息](https://wpmailsmtp.com/wp-content/uploads/2021/10/app-information.png)

最后，在**邮箱地址**字段中添加您的邮箱地址。然后单击**保存并继续**按钮继续下一步。

![单击保存并继续按钮](https://wpmailsmtp.com/wp-content/uploads/2021/10/click-save-and-continue-button.png)

### 配置范围（可选）

这是一个可选步骤，我们将在本教程中跳过。向下滚动到**范围**部分的底部并单击**保存并继续**按钮继续。

![继续进行Google Cloud范围设置](https://wpmailsmtp.com/wp-content/uploads/2021/10/click-save-and-continue-button-scopes-section.png)

**注意：** 有关Gmail API范围的更多信息，请参见Google的[开发者文档](https://developers.google.com/gmail/api/auth/scopes)。

### 设置您的OAuth客户端ID

接下来，您需要填写一些关于您的OAuth客户端ID的信息。

从**应用类型**下拉菜单中选择**Web应用**选项。一旦您这样做，更多字段将自动填充。

![选择Web应用](https://wpmailsmtp.com/wp-content/uploads/2021/10/select-web-application.png)

您可以将**名称**字段保留为默认值或更改为更相关的值。在此示例中，我们将保留默认名称**Web client 1**。

![OAuth名称](https://wpmailsmtp.com/wp-content/uploads/2021/10/OAuth-name.png)

接下来，跳过**授权JavaScript来源**部分并滚动到**授权重定向URI**。

单击**+ 添加URI**按钮并输入以下内容：`https://connect.wpmailsmtp.com/google/`。如果您愿意，也可以从您的WP Mail SMTP设置中复制此值并将其粘贴到此处。

![URI输入](https://wpmailsmtp.com/wp-content/uploads/2021/10/input-for-uri.png)

然后单击**创建**按钮完成此步骤。

![单击创建按钮](https://wpmailsmtp.com/wp-content/uploads/2021/10/click-create-button.png)

一旦您的应用创建完成，**您的凭据**部分将展开以显示您的客户端ID。现在无需复制它，因为您将在后续步骤中从另一个区域访问它。

相反，请单击页面底部的**完成**按钮。

![单击完成按钮](https://wpmailsmtp.com/wp-content/uploads/2021/10/click-done-button.png)

## 将发布状态从测试更新到生产

Google默认会将您的应用置于内部模式。重要的是您要将其切换到外部模式并发布。否则，您的应用将受到极大限制且无法正常运行。

在您的Google Cloud Console侧边栏中，转到**API和服务 » OAuth同意屏幕**。

![选择OAuth同意屏幕选项](https://wpmailsmtp.com/wp-content/uploads/2025/03/oauth-concent.png)

然后选择**受众**标签页。

![选择受众标签页](https://wpmailsmtp.com/wp-content/uploads/2025/03/audience-tab.png)

您接下来看到的确切屏幕将根据您使用的是免费Gmail账户还是Google Workspace账户而有所不同。

### Google Workspace用户

在**用户类型**下，单击**设为外部**按钮。

![单击设为外部按钮以更改Google Cloud应用的发布状态](https://wpmailsmtp.com/wp-content/uploads/2025/03/make-external.png)

**注意：** 如果**用户类型**设置为**内部**，则只有您组织内的用户可以访问您的应用。例如，如果您的Workspace域是**example.com**，则用户只能使用**@example.com**邮箱地址访问您的应用。

外部邮箱地址在授予WP Mail SMTP访问您的应用权限时会看到错误，显示`Error 403: org_internal`。

在出现的弹出窗口中，选择**生产中**选项。然后单击**确认**。

![将Google Cloud应用发布状态设置为生产中](https://wpmailsmtp.com/wp-content/uploads/2020/11/google-cloud-app-in-production.png)

### Gmail用户

如果您不使用Google Workspace，您将看不到设为外部选项。相反，您需要发布您的Google应用。

在**发布状态**下，您会看到应用状态设置为**测试中**。请继续单击**发布应用**按钮以更新您的应用状态。

![发布应用](https://wpmailsmtp.com/wp-content/uploads/2025/03/publish-app.png)

在出现的覆盖层中，单击**确认**以发布您的应用。

![确认应用发布](https://wpmailsmtp.com/wp-content/uploads/2020/11/confirm-app-publishing.png)

确认完成后，您会看到您的应用的发布状态现在是**生产中**。

![检查Google Cloud应用的发布状态](https://wpmailsmtp.com/wp-content/uploads/2020/11/google-cloud-app-publishing-status.png)

## 授予您的网站Google / Gmail权限

接下来，导航到左侧菜单中的**API和服务 » 凭据**。

![api凭据页面](https://wpmailsmtp.com/wp-content/uploads/2022/11/api-credentials.png)

一旦到达那里，在**OAuth 2.0客户端ID**部分下查找。您将看到您刚刚创建的Web应用程序的详细信息。要查看**客户端ID**和**客户端密钥**，请单击铅笔图标。

![单击铅笔图标](https://wpmailsmtp.com/wp-content/uploads/2021/10/click-pencil-icon.png)

这将打开您的应用的所有详细信息。在此页面的右侧，您将看到**客户端ID**和**客户端密钥**值。

![客户端ID和客户端密钥](https://wpmailsmtp.com/wp-content/uploads/2021/10/Client-ID-and-Client-Secret.png)

请将这两个值复制到您的WP Mail SMTP设置中的相应字段中。

![在Google / Gmail邮件发送器设置中粘贴您的客户端ID和客户端密钥](https://wpmailsmtp.com/wp-content/uploads/2020/11/google-gmail-add-client-id-secret.png)

**注意：** 请非常小心，不要在复制客户端ID或客户端密钥时复制任何额外的文本或空格，因为这将在下一步中导致错误。

添加这些值后，单击页面底部的**保存设置**按钮。

![保存设置按钮](https://wpmailsmtp.com/wp-content/uploads/2022/12/save-changes-google-mailer.png)

保存设置后，页面将刷新。您必须在Google允许我们的插件使用您的Gmail API发送邮件之前授予权限。

为此，请滚动到WP Mail SMTP设置页面的底部，然后单击标有**允许插件使用您的Google账户发送邮件**的按钮。

![授权插件使用Gmail发送邮件](https://wpmailsmtp.com/wp-content/uploads/2022/12/allow-google-to-send-emails.png)

这将打开Google的登录屏幕。请继续登录您正在设置SMTP的账户。

接下来，您将看到一个屏幕，要求允许此网站代表您发送邮件。

准备就绪后，单击**允许**按钮继续。

![允许您的网站从您的Google账户发送邮件](https://wpmailsmtp.com/wp-content/uploads/2020/11/allow-google-permissions.png)

### 绕过Google的验证警告（仅限免费Gmail用户）

如果您正在使用免费Gmail账户连接，您可能会看到以下屏幕。请继续单击左下角的**高级**链接。

![Gmail OAuth警告](https://wpmailsmtp.com/wp-content/uploads/2021/10/gmail-oauth-warning.png)

在展开的部分中，单击**转到wpmailsmtp.com（不安全）**。不用担心，Google仅显示此警告是因为它尚未验证您的应用。由于您仅为自己的使用创建了此应用，因此无需验证。

![Gmail OAuth显示高级](https://wpmailsmtp.com/wp-content/uploads/2021/10/gmail-oauth-show-advance.png)

然后单击上方所示的**允许**按钮。

### 备份连接

设置[备份连接](https://wpmailsmtp.com/docs/configuring-backup-connection/)是可选的，不需要完成您的Google Workspace / Gmail邮件发送器设置。但是，为了进一步提高邮件投递率，我们建议[配置额外连接](https://wpmailsmtp.com/docs/configuring-additional-connections/)作为主连接失败时的备份。

![backup-connection-settings](https://wpmailsmtp.com/wp-content/uploads/2022/12/backup-connection-settings.png)

**注意：** 想要基于一组规则或条件将您的邮件路由到特定的额外连接？请务必查看我们的[智能路由](https://wpmailsmtp.com/docs/setting-up-smart-email-routing/)教程以了解如何操作。

## 发送测试邮件

接下来，您将返回到您的WP Mail SMTP设置，将显示成功消息。连接完成后，您已准备好发送测试邮件。为此，请导航到**WP Mail SMTP » 工具**并打开**邮件测试**标签页。

![WP Mail SMTP中的邮件测试标签页](https://wpmailsmtp.com/wp-content/uploads/2021/08/Email-test-tab-in-WP-Mail-SMTP.png)

一旦**邮件测试**标签页打开，您需要输入一个您可以访问收件箱的邮箱地址。

**注意：** 如果您已设置[额外连接](https://wpmailsmtp.com/docs/configuring-additional-connections/)，您将能够在发送测试邮件时在主连接和其他连接之间进行选择。

接下来，选择发送纯文本邮件还是HTML邮件。除非您知道您只会发送纯文本邮件，否则我们建议将HTML设置保持**开启**。然后单击**发送邮件**按钮。

![单击发送邮件按钮](https://wpmailsmtp.com/wp-content/uploads/2021/08/Click-send-email-button.png)

测试邮件发送后，您将看到成功消息。

![WP Mail SMTP测试邮件成功消息](https://wpmailsmtp.com/wp-content/uploads/2021/08/WP-Mail-SMTP-test-email-success-message.png)

您还应该很快在您输入的邮箱地址处收到测试邮件。

![来自WP Mail SMTP的成功测试邮件](https://wpmailsmtp.com/wp-content/uploads/2021/08/Successful-test-email-from-WP-Mail-SMTP.png)

## 常见问题

以下是我们收到的关于设置Google Workspace / Gmail邮件发送器的一些最常见问题。

#### 如果测试邮件无法成功发送怎么办？

如果SMTP测试邮件无法发送，将出现带有额外详细信息的调试日志。以下是一些可能的错误消息以及如何解决它们。

`401. That's an error.   Error: invalid_client`

当客户端ID无法正确读取时，会出现此错误。要修复它，请尝试再次复制和粘贴您的客户端ID，并检查是否有空格或额外文本。

`400. That's an error.   Error: invalid_request   Missing required parameter: client_id`

当客户端ID字段为空或无法正确读取时，将显示此错误。要修复它，请尝试再次复制和粘贴您的客户端ID，并检查是否有空格或额外文本。

`cURL error 60: SSL certificate problem`

此消息意味着服务器缺少SMTP工作所需的证书。要修复它，您需要联系您网站的托管提供商，要求他们安装此证书（很可能是cacert.pem证书，尽管最好询问您的主机以确认）。

`"code": 401,   "message": "Login Required"`

如果您在调试消息中看到此内容，则仍需要授予WP Mail SMTP访问您的Google账户的权限。有关如何修复此问题的说明，请参见本教程的[第4步](#permissions)。另外，请确保您的SMTP设置中的发送邮箱与用于设置您的Google应用的邮箱匹配。

`Request Entity Too Large   Error 413`

如果您看到此错误，很可能通过您的表单发送的文件超过了Gmail对邮件中直接文件附件的限制。此限制适用于消息文本和编码附件的总和。为防止此错误，您需要确保所有文件不超过22 MB。

`There was a problem while retrieving Auth for gmail: Could not json decode the token`

此错误可能是另一个插件（如UpdraftPlus）在网站上加载了不同版本的Google API，从而造成冲突的可能指标。如果可能，应停用冲突的插件。否则，建议您[设置不同的邮件发送器](https://wpmailsmtp.com/docs/a-complete-guide-to-wp-mail-smtp-mailers/)。

如果以上都不适用，或者测试邮件仍然无法工作，您的Google账户可能已禁用Gmail API。要检查，请按照[Google的启用API指南](https://support.google.com/googleapi/answer/6158841?hl=en)操作。

#### 如果我看到一个屏幕说"此应用未经验证"怎么办？

当您在WP Mail SMTP设置中单击**允许插件使用您的Google账户发送邮件**按钮时，Google可能会显示一个屏幕，说"此应用未经验证。此应用尚未通过Google验证。只有在您了解并信任开发者的情况下才继续。"

不过无需担心。此消息仅指您在自己的Google账户中创建的应用，因此在这种情况下您实际上是开发者。

要绕过此消息，请单击**高级**，然后单击**转到wpmailsmtp.com（不安全）**。

![Gmail OAuth显示高级](https://wpmailsmtp.com/wp-content/uploads/2021/10/gmail-oauth-show-advance.png)

#### 如果我以后想切换到不同的邮箱怎么办？

如果您想更改为不同的Gmail或Google Workspace邮箱地址，您需要重复以上所有教程步骤。这包括在此其他邮箱账户下生成新的客户端ID和客户端密钥。

当您到达授权步骤（[第4步](#permissions)）时，保存您的设置并单击**移除连接**按钮。这将移除您原始邮箱账户的授权，并允许您使用新邮箱重复授权步骤。

![在WP Mail SMTP中移除连接](https://wpmailsmtp.com/wp-content/uploads/2020/10/Remove-Connection-in-WP-Mail-SMTP.png)

#### Google Workspace / Gmail邮件发送器是否支持别名？

是的，从2020年7月开始，WP Mail SMTP支持Gmail别名。有关如何在Google中设置别名的更多详细信息，请查看其关于[如何从别名发送邮件](https://support.google.com/mail/answer/22370?hl=en)的指南。

#### 如果我的Google账户启用了两步验证（2FA），我可以使用Google Workspace / Gmail邮件发送器吗？

您可以肯定地使用WP Mail SMTP的Google Workspace / Gmail选项与两步验证。但是，需要注意的是，如果您选择禁用2FA，或更改您账户的密码，您需要再次通过[设置过程](#create-app)。

#### 在授权我的应用时，我收到以下错误消息：

`Error 403: access_denied. The developer hasn't given you access to this app.`

此消息意味着您的应用权限在Google Cloud中设置为测试模式。

要修复此问题，请确保[将模式从测试切换到生产](#from-testing-to-production)并再次尝试授权您的应用。

#### 如果我更改密码，我需要重新连接吗？

是的，如果您的密码更改，现有连接将被无效化。要修复此问题，您需要使用您的新凭据创建新连接。

#### 我需要将我的应用提交给Google进行验证才能与WP Mail SMTP一起工作吗？

不要求您将您的应用提交以进行验证。但是，如果您愿意，欢迎这样做。如果您选择将您的应用提交以进行验证，您可以在不等待Google验证的情况下继续[WP Mail SMTP中的授权过程](#permissions)。

#### 为什么重定向URI指向connect.wpmailsmtp.com？

我们设置重定向URI通过我们的网站传递，以便我们可以解决一些用户在`mod_security`阻止他们完成OAuth连接时遇到的403禁止错误。

**注意：** 重定向URI仅用于验证目的。我们不会存储或访问您网站的任何数据。

#### 如何更改重定向URI，使其指向我自己的网站？

如果您出于额外的安全和隐私考虑，更愿意不使用默认的OAuth重定向URI（`connect.wpmailsmtp.com`），您可以轻松地将其重定向到您自己的网站。

为此，您首先需要将以下代码片段添加到您的WordPress网站。

**注意：** 有关添加代码片段的帮助，请参见我们关于[使用WPCode插件添加代码片段](https://wpmailsmtp.com/docs/using-code-snippets/)的教程。

接下来，转到您的邮件发送器设置**WP Mail SMTP » 设置 » 常规**并从**授权重定向URI**部分复制新URL。

最后，转到您的Google应用的[OAuth客户端ID设置](https://wpmailsmtp.com/docs/how-to-set-up-the-gmail-mailer-in-wp-mail-smtp/#oauth)并用您刚刚复制的替换现有重定向URI。这确保授权请求现在将被定向到您自己的网站。

#### 在添加重定向URI时，我收到以下错误消息：

`Invalid source: URIs must not contain a path or destination with "/"`

此错误发生在您将重定向URI添加到**授权JavaScript来源**部分而不是**授权重定向URI**部分时。

要解决此问题，请从授权JavaScript来源部分移除您添加的URI，并将其添加到授权重定向URI部分。有关更多详细信息，请参见[客户端ID](#oauth)部分。

#### 如果我在设置过程中遇到"redirect\_uri\_mismatch"错误，我应该怎么办？

此错误通常意味着您的Google Cloud Console中的**授权重定向URI**不匹配。它应该设置为`https://connect.wpmailsmtp.com/google/`。另外，请确保对于您的Google应用，您已[将发布状态从测试更新到生产](#from-testing-to-production)。

有关修复此错误的更多指导，请参见SendLayer关于解决[重定向URI不匹配错误](https://sendlayer.com/docs/error-redirect-uri-mismatch/)的文档。

#### WP Mail SMTP偶尔停止工作，我不断收到以下错误消息：

`"Mailer: Google / Gmail   {   "error": "invalid_grant",   "error_description": "Bad Request"   }`

此错误通常表示由于客户端密钥被无效化而导致的权限问题。当您更改Gmail密码或在您的账户上启用2FA时可能会发生这种情况。

要解决此问题，您需要重新生成令牌或再次通过[设置过程](https://wpmailsmtp.com/docs/how-to-set-up-the-gmail-mailer-in-wp-mail-smtp/#create-app)。

要重新生成您的令牌，请登录[Google Cloud Console](https://console.cloud.google.com/home/dashboard)，然后在**API和服务**部分下选择**凭据**。

![api凭据页面](https://wpmailsmtp.com/wp-content/uploads/2022/11/api-credentials.png)

在**OAuth 2.0客户端ID**部分，您需要单击铅笔图标以编辑您的凭据。

![单击铅笔图标](https://wpmailsmtp.com/wp-content/uploads/2021/10/click-pencil-icon.png)

接下来，单击**重置密钥**以生成新的客户端密钥。

![重置客户端密钥](https://wpmailsmtp.com/wp-content/uploads/2022/11/reset-secret.png)

将出现一个带有确认消息的弹出窗口。请继续单击**重置**以继续。

![确认客户端密钥重置](https://wpmailsmtp.com/wp-content/uploads/2022/11/confirm-client-secret-resetting.png)

重置您的令牌后，您需要在WP Mail SMTP设置中使用新密钥更新客户端密钥。请继续复制**客户端密钥**。

![复制客户端密钥](https://wpmailsmtp.com/wp-content/uploads/2022/11/copy-client-secret-key.png)

然后登录您的WordPress仪表板并转到**WP Mail SMTP » 设置**。

![常规选项卡SMTP设置](https://wpmailsmtp.com/wp-content/uploads/2022/12/general-settings-wp-mail-smtp.png)

在**常规**选项卡上，向下滚动到**Google / Gmail**部分并将您复制的密钥粘贴到**客户端密钥**字段中。

![输入新客户端密钥](https://wpmailsmtp.com/wp-content/uploads/2022/11/enter-new-client-secret.png)

添加新客户端密钥后，请确保保存您的更改。

#### 发送测试邮件后，我看到以下错误消息：

`The test email might have been sent, but its deliverability should be improved.`

此错误通常发生在您使用自定义域邮箱地址且尚未为该域添加SPF和DKIM记录时。您需要将这两个记录添加到您的域的DNS中以修复此问题。

如果您看到以下SPF错误消息：

![missing spf record](https://wpmailsmtp.com/wp-content/uploads/2022/11/missing-spf-record.png)

这意味着您的域缺少Google验证您的域所需的SPF记录。要修复此问题，您需要将SPF记录添加到您的域的DNS。有关如何访问此记录的步骤，请查看[Google的SPF](https://support.google.com/a/answer/33786?hl=en&ref_topic=9061731)指南。

您可能会在Google SPF文档页面上看到两个选项：**定义您的SPF记录—基本**和**定义您的SPF记录—高级**。按照基本选项中的步骤获取您的SPF记录。然后继续将记录添加到您的域的DNS。

**注意：** 如果您想了解如何将DNS记录添加到您的域的DNS，请务必查看我们的[DNS记录](https://wpmailsmtp.com/docs/how-to-add-dns-records-for-wp-mail-smtp-setup/)指南以获取更多信息。

如果您看到以下DKIM警告：

![dkim record error](https://wpmailsmtp.com/wp-content/uploads/2022/11/dkim-record-error.png)

您需要添加DKIM记录，这是Google验证邮件来自授权域所需的。有关如何获取此记录的步骤，请查看[Google的DKIM指南](https://support.google.com/a/answer/174124?hl=en&ref_topic=2752442 "Google's DKIM guide")。

您在发送测试邮件后还可能看到以下错误消息：

![multiple spf record error](https://wpmailsmtp.com/wp-content/uploads/2022/11/spf-record-error.png)

此错误表示您已在域的DNS中添加了多个SPF记录。如果您之前从不同的邮件发送器添加了SPF记录，则可能会遇到此错误。有关如何解决此问题的步骤，请查看我们的指南以了解如何在域的DNS上[合并所有SPF记录](https://wpmailsmtp.com/fix-multiple-spf-records/)。

就是这样！现在您知道如何在WordPress网站上设置WP Mail SMTP的Google Workspace / Gmail邮件发送器。

接下来，您想知道如何有效地排除WP Mail SMTP中的问题吗？请务必查看我们的[排除WP Mail SMTP故障](https://wpmailsmtp.com/docs/how-to-troubleshoot-wp-mail-smtp/)教程以获取更多详细信息。
