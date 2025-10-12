---
title: Microsoft 365 / Outlook.com
---

# Microsoft 365 / Outlook.com

更新时间：2025年3月21日

#### AI摘要

Microsoft 365 / Outlook.com 是一个专业版功能

解锁 Microsoft 365 / Outlook.com 和其他强大功能以发展您的业务。

[获取 WP Mail SMTP 专业版](https://wpmailsmtp.com/pricing/)

您想使用您的 Outlook 和 Microsoft 365 账户，包括 Exchange Online，以改善您 WordPress 网站的电子邮件投递率吗？WP Mail SMTP 的 Microsoft 365 / Outlook.com 邮件发送器允许您安全地使用 Microsoft 的 API 来验证您网站的电子邮件。

本教程将向您展示在 WP Mail SMTP 中设置 Microsoft 365 / Outlook.com 邮件发送器所需的每一步。

-   [什么是 Microsoft 365 / Outlook.com 邮件发送器？](#outlook-intro)
-   [WP Mail SMTP 入门](#get-started)
    
-   [配置 Microsoft Azure 账户](#microsoft-setup)
    
-   [保存设置并授权 WP Mail SMTP](#authorization)
    
-   [发送测试邮件](#test-email)
-   [常见问题](#faq)

## 要求：

-   此邮件发送器要求您的网站启用 SSL (https)。有关设置详情，请参阅 [WPBeginner 的 WordPress SSL 和 HTTPS 指南](https://www.wpbeginner.com/wp-tutorials/how-to-add-ssl-and-https-in-wordpress/)。
-   虽然此邮件发送器设置不需要使用任何付费 Microsoft 服务，但 Microsoft 将要求您输入信用卡以设置账户（以减少垃圾邮件注册）。
-   Microsoft 365 / Outlook.com 邮件发送器仅适用于 [专业版许可证](https://wpmailsmtp.com/pricing/) 或更高级别。

<iframe title="如何使用 Microsoft 365/Outlook 设置 WP Mail SMTP（修复 WordPress 邮件！）" width="600" height="338" src="https://www.youtube.com/embed/A4IClPHbg3k?feature=oembed&rel=0" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen=""></iframe>

---

## 什么是 Microsoft 365 / Outlook.com 邮件发送器？

Microsoft 不仅提供电子邮件地址/收件箱服务，还提供一种工具来改善您电子邮件的投递率。他们通过 API 实现这一点，这意味着您不必在 WordPress 管理区域输入任何敏感的登录详细信息（这比传统的 SMTP 更安全）。Microsoft/Outlook 邮件发送器每分钟最多可以发送 1,000 封邮件，这比大多数其他邮件发送器的限制要高得多。

-   **成本：** 免费。但是，您需要输入信用卡详细信息进行账户验证。
-   **发件邮箱要求：** 免费服务仅适用于基于 Microsoft 的邮箱地址（例如，pattie@outlook.com、pattie@live.com 和 Office 365 邮箱，包括由 Exchange Online 管理的邮箱）。如果您使用 Exchange Server，只有付费 Outlook (Office 365) 账户才能使用基于域名的发件邮箱地址。
-   **总结：** Microsoft 的 API 是一个免费、安全的电子邮件投递解决方案。然而，Microsoft 的设置要求比 WP Mail SMTP 中的大多数其他邮件发送器选项更复杂。此外，API 倾向于导致轻微的延迟（最多几分钟）。

**注意：** 如果您使用付费账户并带有基于域名的发件邮箱，您需要配置 SPF 和 DKIM 值。请参阅 Microsoft 的 [SPF 文档](https://docs.microsoft.com/en-us/microsoft-365/security/office-365-security/set-up-spf-in-office-365-to-help-prevent-spoofing?view=o365-worldwide) 和 [DKIM 文档](https://docs.microsoft.com/en-us/microsoft-365/security/office-365-security/use-dkim-to-validate-outbound-email?view=o365-worldwide) 了解更多信息。

## WP Mail SMTP 入门

要开始使用，您首先需要 [安装并激活 WP Mail SMTP 插件](https://wpmailsmtp.com/docs/how-to-install-the-wp-mail-smtp-plugin/ "如何安装 WP Mail SMTP 插件")。

安装并激活插件后，转到 **WP Mail SMTP » 设置**。在常规选项卡下，您将看到邮件发送器配置设置。

![WP Mail SMTP 设置页面](https://wpmailsmtp.com/wp-content/uploads/2024/12/general-tab.png)

我们将在接下来的部分中介绍如何完成这些设置。

### 邮件发送器

现在先跳过 **发件邮箱** 和 **发件名称** 设置。我们将在后续步骤中介绍这些。

您首先需要滚动到 **邮件发送器** 部分。从这里，选择 **365 / Outlook** 选项。

![选择 Outlook 邮件发送器](https://wpmailsmtp.com/wp-content/uploads/2024/12/select-outlook-mailer.png)

现在您已选择 Microsoft 365 / Outlook.com 邮件发送器，您应该会看到一个名为 **365 / Outlook** 的新部分。

![Outlook 邮件发送器设置](https://wpmailsmtp.com/wp-content/uploads/2024/12/outlook-mailer-selected.png)

有两种方式可以配置 Outlook 邮件发送器：使用一键设置或在 Microsoft 的 Azure 门户中手动创建和注册应用。

如果您更喜欢简单直接的方法，请继续到本指南的 [激活一键设置](#one-click-setup) 部分。此方法不需要您经历注册应用的繁琐步骤。

但是，如果您更愿意手动生成应用 ID 和应用密码，您需要使用您的 Microsoft 账户创建一个 Web 应用。要继续此方法，请跳转到本指南的 [创建 Web 应用](#microsoft-setup) 部分。

### 激活一键设置

为了更简单和更快的邮件设置，我们建议使用一键设置功能。它允许您通过几次点击将您的网站连接到 Outlook 邮件发送器。

在 WP Mail SMTP 设置中选择 365 / Outlook 作为您的邮件发送器后，您将找到激活 **一键设置** 的选项。只需将此切换开关设置为 **ON** 位置即可开始简化的设置过程。

![为 Outlook 邮件发送器启用一键设置](https://wpmailsmtp.com/wp-content/uploads/2024/12/enable-one-click-setup.png)

有关一键设置过程的更多详细信息，请务必查看我们的 [使用一键设置配置 Outlook 邮件发送器](https://wpmailsmtp.com/docs/microsoft-365-outlook-com-one-click-setup/) 指南。

**注意：** 一键设置功能需要 [专业版或更高级别许可证](https://wpmailsmtp.com/pricing/)。

如果您更愿意继续使用传统方法或需要自定义设置，请继续执行下面概述的其余步骤。

要生成此部分所需的信息，您需要在您的 Microsoft Azure 账户中设置一个 Web 应用。此过程不需要任何编码，我们将在下一步中向您展示确切的操作。

请确保在单独的标签页或窗口中保持这些 WP Mail SMTP 设置打开，因为您很快就会返回到它们。

## 配置 Microsoft Azure 账户

为了继续设置过程，您需要拥有一个 Microsoft Azure 账户。如果您需要创建新账户，[点击此链接注册免费的 Microsoft Azure 账户](https://azure.microsoft.com/en-us/free/ "创建 Microsoft Azure 账户")。

虽然创建账户是免费的，但在注册 Microsoft 账户时您需要输入信用卡详细信息。这有助于防止垃圾邮件注册。

**注意：** 在您能够在 Azure 门户中创建应用之前，您可能需要订阅 Microsoft 的按需付费计划。

由于您很可能已经拥有一个 Microsoft 邮箱账户（通过 Hotmail、Live、Outlook、Microsoft 365 等），您可以简单地 [登录 Microsoft Azure](https://portal.azure.com/ "Microsoft Azure 门户") 使用您现有的账户凭据。

**注意：** 您用于 Azure 账户的邮箱必须是具有发送邮件权限的基于 Microsoft 的邮箱地址。

创建并验证您的账户后，如果未自动重定向，您需要打开 [Azure 门户](https://portal.azure.com/ "Microsoft Azure 门户")。

### 创建应用 ID

在 Azure 门户中，在页面顶部的搜索栏中输入 **应用注册**。

![搜索应用注册](https://wpmailsmtp.com/wp-content/uploads/2021/06/Search-app-registrations-1.png)

接下来，您将看到一个包含服务列表的下拉菜单。继续点击 **应用注册**。

![点击应用注册](https://wpmailsmtp.com/wp-content/uploads/2021/06/Click-app-registrations.png)

在应用注册页面顶部，您需要选择 **+ 新注册** 选项。

![点击新注册](https://wpmailsmtp.com/wp-content/uploads/2019/07/Click-on-New-Registration.jpg)

**注意：** 如果您看到错误消息：**_在目录外创建应用程序的功能已被弃用_**。这意味着您尚未在 Azure 上注册账户。您需要 [注册并验证您的 Azure 账户](https://azure.microsoft.com/en-us/free/) 才能注册应用程序。

在应用注册表单中，您需要填写以下详细信息：

-   **名称：** 这仅用于您的个人组织，因此我们建议将其命名为类似 "WP Mail SMTP: yourdomain.com" 的名称。
-   **支持的账户类型：** 选择 **任何组织目录中的账户和个人 Microsoft 账户**。

![Microsoft 中的应用注册表单示例](https://wpmailsmtp.com/wp-content/uploads/2021/08/Example-of-app-registration-form-in-Microsoft-1.png)

**注意：** 对于某些 Microsoft 账户类型，您可能只看到 **任何组织目录中的账户（任何 Azure AD - 多租户）** 选项。如果您的账户类型没有显示 **任何组织目录中的账户和个人 Microsoft 账户** 选项，请继续选择此选项。

-   **重定向 URI：** 对于第一个下拉菜单，保持设置为 **Web**。然后对于第二个字段，您需要从您的 WP Mail SMTP 设置中复制此值（见下文）。

为了找到重定向 URI，您需要切换回您留下网站 WP Mail SMTP 设置的标签页或窗口。在 Outlook / 365 部分下，您将看到一个名为 **重定向 URI** 的字段。

![从 WP Mail SMTP 设置复制重定向 URI](https://wpmailsmtp.com/wp-content/uploads/2021/08/Copy-Redirect-URI-in-WP-Mail-SMTP.png)

您需要复制此值，然后将其粘贴到您的 Microsoft Azure 应用注册表单中。请确保仍保持两个浏览器窗口/标签页打开，因为我们将继续在这两者之间切换。

![在 Microsoft 中完成应用注册表单](https://wpmailsmtp.com/wp-content/uploads/2020/11/Redirect-URI-in-Azure.png)

准备好后，点击 **注册** 按钮继续。

![点击注册按钮](https://wpmailsmtp.com/wp-content/uploads/2021/08/Click-register-button.png)

**注意：** 注册您的应用程序后，请务必再次检查您的 **支持的账户类型** 和 **重定向 URI**，位于 **身份验证** 选项卡下。如果这些设置配置不正确，您可能会在 [授权 WP Mail SMTP](#authorization) 时遇到问题。

提交此注册表单后，您将被重定向到概述页面。在这里，您将找到您的 **应用程序（客户端）ID**。继续复制此值。

![从 Microsoft 复制应用程序 ID](https://wpmailsmtp.com/wp-content/uploads/2019/07/Copy-Application-ID-from-Microsoft.jpg)

一旦您复制了应用程序（客户端）ID，您需要将此完整值粘贴到您的 WP Mail SMTP 设置中，位于标记为 **应用程序 ID** 的字段中。

![application-id](https://wpmailsmtp.com/wp-content/uploads/2022/04/application-id.png)

### 创建应用密码

接下来，我们需要为此应用生成密码。为此，请转到左侧边栏中已注册的应用中的 **管理 » 证书和密码**。

![打开证书和密码菜单项](https://wpmailsmtp.com/wp-content/uploads/2019/07/Open-Certificates-and-Secrets-menu-item.jpg)

**注意：** 您需要在您创建的应用目录中才能看到 **证书和密码** 选项。您可以通过导航到 **应用注册** 并选择您注册的应用名称来访问此页面。

在此屏幕上，点击 **+ 新客户端密码** 选项。

![在 Microsoft 设置中创建新客户端密码](https://wpmailsmtp.com/wp-content/uploads/2021/01/new-client-secret-button-1.png)

将出现一个覆盖层，您需要在此填写一个简短表单：

-   **描述：** 此名称仅用于您自己的使用，因此我们建议使用逻辑且简单的名称，如 `app_password`。
-   **过期时间：** 730 天（24 个月）。

![添加客户端密码](https://wpmailsmtp.com/wp-content/uploads/2023/03/add-client-secret.png)

提交客户端密码表单后，将生成应用程序密码。继续复制 **值** 列下的密码（不是密码 ID 列），然后返回您的 WP Mail SMTP 设置。

![从值字段复制应用程序密码](https://wpmailsmtp.com/wp-content/uploads/2022/07/copy-application-password-from-value-field.png)

**注意：** 您退出此页面后将无法访问 **值**。我们建议将该值存储在安全位置，以防您需要再次访问它。

返回您设置仍然打开的标签页或窗口后，将此值粘贴到 **应用程序密码** 字段中。

![应用程序密码](https://wpmailsmtp.com/wp-content/uploads/2022/04/application-password.png)

## 保存设置并授权 WP Mail SMTP

一旦您添加了您的应用程序 ID 和应用程序密码，点击页面底部的 **保存设置** 按钮。

![保存 WP Mail SMTP 设置](https://wpmailsmtp.com/wp-content/uploads/2022/12/save-settings-microsoft-365-mailer.png)

保存设置后，您需要滚动到 **授权** 部分。现在您应该看到一个标记为 **允许插件使用您的 Microsoft 账户发送邮件** 的按钮。继续点击此按钮。

![点击确认授权](https://wpmailsmtp.com/wp-content/uploads/2022/12/allow-plugin-to-access-your-account.png)

点击按钮后，您应该被重定向到 Microsoft 权限表单。

![Microsoft 权限请求表单](https://wpmailsmtp.com/wp-content/uploads/2022/04/microsoft-consent-popup.png)

在此表单底部，点击 **是**。

接下来，您将被重定向回您的 WP Mail SMTP 设置。在这些设置的顶部，您应该会看到一个通知，告知您已成功连接您的 Microsoft 账户。

![Microsoft API 已成功连接](https://wpmailsmtp.com/wp-content/uploads/2022/12/successfully-linked-microsoft-account.png)

然后，在页面底部的授权部分，您还应该看到您用于授权连接的姓名和邮箱地址。

![连接的姓名和邮箱](https://wpmailsmtp.com/wp-content/uploads/2022/04/name-and-email-for-connection.png)

#### 发件邮箱

现在您的 Microsoft API 已设置并连接，您现在可以输入发件邮箱地址。您需要使用您用于授权连接的相同邮箱地址。此邮箱地址可以在您设置的授权部分找到。

![授权邮箱](https://wpmailsmtp.com/wp-content/uploads/2022/04/authorization-email.png)

继续在您的设置中的 **发件邮箱** 地址字段中输入相同的邮箱地址。

**注意：** 如果您想作为不同的用户、共享收件箱或组发送邮件，请务必查看我们的 [常见问题部分](#sending-aliases) 了解如何操作。

我们还强烈建议勾选 **强制发件邮箱** 框。选择此选项将防止您在站点的其他区域编辑发件邮箱设置。

![发件邮箱设置](https://wpmailsmtp.com/wp-content/uploads/2022/04/sendlayer-from-email-settings.png)

**注意：** 有关更多详情，请参阅我们的指南，了解 [强制发件邮箱设置](https://wpmailsmtp.com/docs/using-the-force-from-email-setting/) 如何工作。

### 发件名称

Microsoft 365 / Outlook.com 邮件发送器不支持更改或强制发件名称。您的邮件将以用于授权连接的账户名称发送。

![Microsoft-发件名称](https://wpmailsmtp.com/wp-content/uploads/2022/04/microsoft-from-name.png)

### 备份连接

设置 [备份连接](https://wpmailsmtp.com/docs/configuring-backup-connection/) 是可选的，不需要完成您的 Microsoft 365 / Outlook 邮件发送器设置。然而，为进一步提高邮件投递率，我们建议 [配置额外连接](https://wpmailsmtp.com/docs/configuring-additional-connections/) 作为主连接失败时的备份。

![备份连接设置](https://wpmailsmtp.com/wp-content/uploads/2022/12/backup-connection-settings.png)

**注意：** 想要根据一组规则或条件将您的邮件路由到特定的额外连接？请务必查看我们的 [智能路由](https://wpmailsmtp.com/docs/setting-up-smart-email-routing/) 教程了解如何操作。

## 发送测试邮件

现在您的 Microsoft API 已设置并连接，发送测试邮件以确保一切正常工作非常重要。要从 WordPress 管理仪表板执行此操作，请转到 **WP Mail SMTP » 工具** 并点击 **邮件测试** 选项卡。

![wpmailsmtp-邮件测试](https://wpmailsmtp.com/wp-content/uploads/2020/11/wp-mail-smtp-tools-email-test.png)

在 **发送至** 字段中，默认情况下您将看到站点的管理员邮箱地址。但是，您可以随意将此邮箱地址更改为任何您想发送测试邮件的邮箱地址。

**注意：** 如果您已设置 [额外连接](https://wpmailsmtp.com/docs/configuring-additional-connections/)，您可以在发送测试邮件时在主连接和其他连接之间进行选择。

接下来，点击 **发送邮件** 按钮发送您的测试邮件。

![点击发送邮件按钮](https://wpmailsmtp.com/wp-content/uploads/2022/04/Click-send-email-button.png)

发送邮件后，您应该会看到成功消息。

![Wp Mail SMTP 测试邮件成功消息](https://wpmailsmtp.com/wp-content/uploads/2021/08/WP-Mail-SMTP-test-email-success-message.png)

如果您检查该邮箱地址的收件箱，您应该会收到此测试的邮件。

![来自 WP Mail SMTP 的成功测试邮件](https://wpmailsmtp.com/wp-content/uploads/2021/08/Successful-test-email-from-WP-Mail-SMTP.png)

## 常见问题

这些是我们收到的关于在 WP Mail SMTP 中设置 Outlook 邮件发送器的一些最常见问题的答案。

#### 我在我的基于 Microsoft 的邮箱账户上使用双重身份验证/多因素身份验证（2FA / MFA）。这与 Microsoft 365 / Outlook.com 邮件发送器兼容吗？

如果您在完成本教程中的设置步骤之前已配置 2FA/MFA，那么您不应该遇到任何问题（只需照常执行步骤）。

但是，如果您完成本教程然后决定以后启用 2FA/MFA，那么在大多数情况下您需要重新授权邮件发送器（参见 [保存设置并授权 WP Mail SMTP](#authorization "保存设置并授权 WP Mail SMTP")）。

#### 通过 Microsoft 365 / Outlook.com 邮件发送器可以发送的最大邮件大小是多少？

对于 WP Mail SMTP 3.3 版本及更早版本，最大大小限制为 4MB。

对于任何大于 3.3 的 WP Mail SMTP 版本，最大大小限制将取决于您的 Outlook 配置。

如果您已将 WP Mail SMTP 插件更新到大于 3.3 的版本并计划发送大于 4MB 的邮件，您需要重新授权邮件发送器（参见 [保存设置并授权 WP Mail SMTP](#authorization "保存设置并授权 WP Mail SMTP")）。

#### 为什么在设置 Office 365 GCC 或 DoD 邮箱地址时会收到以下错误？

`机密客户端不支持跨云请求`

出于安全措施，政府社区云（GCC）和美国国防部（DoD）账户通常使用 `.us` 域名扩展而不是 `.com`。为了设置这些类型的账户，您需要添加以下代码片段以允许 `.us` 域名扩展：

<iframe id="wpcode-embed-rod9xly2" src="https://library.wpcode.com/embed/rod9xly2/" width="100%" height="1060" allowtransparency="true" allow="clipboard-write" frameborder="0" class="CnP-iframe-509" style="height: 1233px;"></iframe>

如果您需要考虑不同国家代码的域名扩展，例如 `.de`，只需将上面提供的代码最后一行中的 `'us'` 替换为您国家代码。例如，

[?](#)

1

`theme_prefix_enable_gcc_high_and_dod_compatibility(` `'de'` `);`

**注意：** 有关额外指导，请参阅 WPBeginner 的 [添加自定义代码](https://www.wpbeginner.com/plugins/how-to-easily-add-custom-code-in-wordpress-without-breaking-your-site/ "如何轻松添加自定义代码到 WordPress（不会破坏您的网站）") 教程。

#### 如果我的登录凭据更改，我需要重新连接吗？

是的，如果您更改密码，您的连接将被失效。发生这种情况时，您需要通过转到 **WP Mail SMTP » 设置** 重新连接 WP Mail SMTP。然后滚动到 **授权** 部分并点击 **移除连接**。

![移除连接按钮](https://wpmailsmtp.com/wp-content/uploads/2022/11/remove-connection.png)

移除现有连接后，您需要点击 **允许插件使用您的 Microsoft 账户发送邮件** 以重新创建您的 Microsoft 365 / Outlook.com 邮件发送器连接。

![点击确认授权](https://wpmailsmtp.com/wp-content/uploads/2022/12/allow-plugin-to-access-your-account.png)

#### Microsoft 365 / Outlook.com 邮件发送器是否支持作为不同用户、共享收件箱或组发送？

是的，Microsoft 365 / Outlook.com 邮件发送器支持从不同用户、共享收件箱和组发送邮件。这些选项可以在 [您连接到 WP Mail SMTP 的授权 Microsoft 账户](#authorization) 中配置。

下面，您将找到有关如何配置这些不同发送选项的相关 Microsoft 文档：

-   [作为或代表另一用户发送](https://docs.microsoft.com/en-us/microsoft-365/admin/add-users/give-mailbox-permissions-to-another-user?view=o365-worldwide#send-email-on-behalf-of-another-user "给另一个用户邮箱权限 - 管理员帮助")
-   [从共享邮箱发送](https://docs.microsoft.com/en-us/microsoft-365/admin/email/create-a-shared-mailbox?view=o365-worldwide "创建共享邮箱")
-   [作为或代表组发送](https://docs.microsoft.com/en-us/microsoft-365/solutions/allow-members-to-send-as-or-send-on-behalf-of-group?view=o365-worldwide "允许成员作为或代表组发送")

设置这些选项后，您可以 [更改发件邮箱地址](#from-email) 为在您连接的 Microsoft 账户中配置的任何用户的邮箱地址。

#### 如果我没有权限授权需要管理员批准的应用怎么办？

您需要要求您的 [全局管理员](https://docs.microsoft.com/en-us/azure/active-directory/roles/permissions-reference#global-administrator "Azure AD 内置角色：全局管理员") [配置管理员同意工作流程](https://docs.microsoft.com/en-us/azure/active-directory/manage-apps/configure-admin-consent-workflow "配置管理员同意工作流程")。一旦配置了此工作流程并添加您作为审阅者，您将能够请求访问需要管理员同意的应用程序，例如 WP Mail SMTP。

#### 我可以从此 Outlook 邮件发送器中删除 "mail.readwrite" 作用域吗？

是的，您可以使用自定义 PHP 代码片段。但是，WP Mail SMTP 使用此权限允许用户发送带有大附件文件的邮件。删除它将限制 Outlook 邮件发送器的最大文件附件大小为 3MB。请参阅我们的指南了解 [如何从此 Outlook 邮件发送器中删除 "mail.readwrite" 作用域](https://wpmailsmtp.com/docs/removing-mail-readwrite-scope-for-the-outlook-mailer/)。

#### 如果测试邮件没有成功发送怎么办？

如果测试邮件未发送，您可能会看到包含有关问题的额外详细信息的调试日志。以下是可能的错误消息以及如何解决它。

`Mailer: 365 / Outlook   ErrorSendAsDenied: 用于提交此请求的用户账户没有代表指定的发件账户发送邮件的权限。, 无法提交消息。`

如果您看到上面的错误消息，这意味着您指定的发件邮箱与您用于授权连接的邮箱不同。要修复此问题，您需要更新 [发件邮箱](#from-email) 以匹配您设置 Microsoft 365 / Outlook.com 邮件发送器连接时授权的邮箱。

如果您想使用不同的邮箱作为发件邮箱，您需要在您的 Microsoft 账户中将邮箱添加为别名。有关此步骤，请参见本指南的 [发送别名](#sending-aliases) 部分。

#### 如果我收到 MailboxNotEnabledForRESTAPI 错误我该怎么办？

MailboxNotEnabledForRESTAPI 错误消息由 Microsoft 返回，表示所需的 REST API（WP Mail SMTP 的 Microsoft 365 / Outlook 邮件发送器需要）未在您尝试验证的 Office 365 邮箱账户上启用。此错误通常发生在以下情况下：

-   使用的 Office 365 邮箱账户未启用 REST API。
-   邮箱账户托管在专用 Microsoft Exchange Server 上，而不是有效的 Microsoft 365 邮箱。

要解决此问题，请确保您使用的是有效的 Microsoft 365 邮箱，而不是专用 Exchange Server 上的账户。您可以在 [Microsoft 关于此主题的官方文档](https://learn.microsoft.com/en-us/exchange/troubleshoot/user-and-shared-mailboxes/rest-api-is-not-yet-supported-for-this-mailbox-error) 中找到有关启用邮箱中 REST API 的更多详细信息和帮助。

就是这样！您已成功设置您的网站使用 WP Mail SMTP 中的 Microsoft 365 / Outlook.com 邮件发送器发送 WordPress 邮件。

接下来，您还想控制 WordPress 核心发送的邮件吗？请务必查看我们的 [邮件控制](https://wpmailsmtp.com/docs/how-to-manage-email-controls/ "如何管理邮件控制") 教程了解所有详细信息。
