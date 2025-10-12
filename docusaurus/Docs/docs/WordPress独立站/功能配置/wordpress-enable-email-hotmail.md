---
title: WordPress启用邮箱（Microsoft 365 / Outlook）
description: "学习如何使用WP Mail SMTP插件配置WordPress邮箱功能，通过Microsoft 365或Outlook设置邮件发送器，解决网站邮件投递问题。"
tags: ["WordPress", "Microsoft 365", "Outlook", "邮件发送", "WP Mail SMTP", "邮件配置", "网站邮件"]
slug: /wordpress-enable-email-outlook
---

# Microsoft 365 / Outlook.com

更新日期：2025年3月21日


## 要求：

-   此邮件发送器要求您的网站启用 SSL (https)。有关设置详情，请参见 [WPBeginner 的 WordPress SSL 和 HTTPS 添加指南](https://www.wpbeginner.com/wp-tutorials/how-to-add-ssl-and-https-in-wordpress/)。
-   虽然此邮件发送器设置不需要使用任何付费的 Microsoft 服务，但 Microsoft 要求您输入信用卡来创建账户（以减少垃圾邮件注册）。
-   Microsoft 365 / Outlook.com 邮件发送器仅适用于 [专业版许可证](https://wpmailsmtp.com/pricing/) 或更高级别。

<iframe title="如何使用 Microsoft 365/Outlook 设置 WP Mail SMTP（修复 WordPress 邮件！）" width="600" height="338" src="https://www.youtube.com/embed/A4IClPHbg3k?feature=oembed&rel=0" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen=""></iframe>

---

## 什么是 Microsoft 365 / Outlook.com 邮件发送器？

Microsoft 不仅提供电子邮件地址/收件箱服务，还提供改善邮件投递率的工具。他们通过 API 来实现这一点，这意味着您不必在 WordPress 管理区域输入任何敏感的登录详细信息（这比传统的 SMTP 更安全）。Microsoft/Outlook 邮件发送器每分钟可以发送多达 1,000 封邮件，这比大多数其他邮件发送器的限制要高得多。

-   **费用：** 免费。不过，您需要输入信用卡详细信息以进行账户验证。
-   **发件人邮箱要求：** 免费服务仅适用于基于 Microsoft 的电子邮件地址（例如，pattie@outlook.com、pattie@live.com 和 Office 365 邮箱，包括由 Exchange Online 管理的邮箱）。如果您使用 Exchange Server，只有付费的 Outlook（Office 365）账户才能使用基于域名的发件人邮箱。
-   **总结：** Microsoft 的 API 是一个免费、安全的邮件投递解决方案。然而，Microsoft 的设置要求比 WP Mail SMTP 中的大多数其他邮件发送器选项更复杂。此外，API 往往会在邮件投递中造成轻微延迟（最多几分钟）。

**注意：** 如果您使用的是具有基于域名的发件人邮箱的付费账户，则需要配置 SPF 和 DKIM 值。请参见 Microsoft 的 [SPF 文档](https://docs.microsoft.com/en-us/microsoft-365/security/office-365-security/set-up-spf-in-office-365-to-help-prevent-spoofing?view=o365-worldwide) 和 [DKIM 文档](https://docs.microsoft.com/en-us/microsoft-365/security/office-365-security/use-dkim-to-validate-outbound-email?view=o365-worldwide) 以获取更多信息。

## 开始使用 WP Mail SMTP

要开始，您首先需要 [安装并激活 WP Mail SMTP 插件](https://wpmailsmtp.com/docs/how-to-install-the-wp-mail-smtp-plugin/ "How to Install the WP Mail SMTP Plugin")。

安装并激活插件后，转到 **WP Mail SMTP » 设置**。在常规选项卡下，您将看到邮件发送器配置设置。

![WP Mail SMTP 设置页面](https://wpmailsmtp.com/wp-content/uploads/2024/12/general-tab.png)

我们将在接下来的部分中介绍如何完成这些设置。

### 邮件发送器

现在先跳过 **发件人邮箱** 和 **发件人名称** 设置。我们将在后续步骤中介绍这些。

首先，您需要滚动到 **邮件发送器** 部分。从这里，选择 **365 / Outlook** 选项。

![选择 Outlook 邮件发送器](https://wpmailsmtp.com/wp-content/uploads/2024/12/select-outlook-mailer.png)

现在您已选择 Microsoft 365 / Outlook.com 邮件发送器，应该会看到一个名为 **365 / Outlook** 的新部分。

![Outlook 邮件发送器设置](https://wpmailsmtp.com/wp-content/uploads/2024/12/outlook-mailer-selected.png)

有两种方法可以配置 Outlook 邮件发送器：使用一键设置或在 Microsoft 的 Azure 门户中手动创建和注册应用程序。

如果您喜欢简单直接的方法，请继续阅读本指南的 [激活一键设置](#one-click-setup) 部分。这种方法不需要您经历注册应用程序的繁琐步骤。

然而，如果您更愿意手动生成应用程序 ID 和应用程序密码，则需要使用您的 Microsoft 账户创建一个 Web 应用程序。要继续使用此方法，请跳转到本指南的 [创建 Web 应用](#microsoft-setup) 部分。

### 激活一键设置

为了更简单、更快速的邮件设置，我们建议使用一键设置功能。它可以让您通过几次点击将您的网站连接到 Outlook 邮件发送器。

在 WP Mail SMTP 设置中选择 365 / Outlook 作为您的邮件发送器后，您将找到激活 **一键设置** 的选项。只需将此切换按钮切换到 **开** 位置即可开始简化的设置过程。

![为 Outlook 邮件发送器启用一键设置](https://wpmailsmtp.com/wp-content/uploads/2024/12/enable-one-click-setup.png)

有关一键设置过程的更多详细信息，请务必查看我们的 [使用一键设置配置 Outlook 邮件发送器](https://wpmailsmtp.com/docs/microsoft-365-outlook-com-one-click-setup/) 功能指南。

**注意：** 一键设置功能需要 [专业版或更高级别](https://wpmailsmtp.com/pricing/)。

如果您更喜欢继续使用传统方法或需要自定义设置，请继续执行下面概述的其余步骤。

要生成此部分所需的信息，您需要在 Microsoft Azure 账户中设置一个 Web 应用程序。此过程不需要任何编码，我们将在下一步中准确地展示如何操作。

请确保将这些 WP Mail SMTP 设置保持在单独的标签页或窗口中打开，因为您很快就会返回。

## 配置 Microsoft Azure 账户

为了继续进行设置过程，您需要拥有一个 Microsoft Azure 账户。如果您需要创建新账户，[点击此链接注册免费的 Microsoft Azure 账户](https://azure.microsoft.com/en-us/free/ "Create Microsoft Azure account")。

虽然创建账户是免费的，但您在注册 Microsoft 账户时需要输入信用卡详细信息。这有助于防止垃圾邮件注册。

**注意：** 在 Azure 门户中创建应用程序之前，您可能需要订阅 Microsoft 的按需付费计划。

由于您很可能已经拥有一个 Microsoft 邮箱账户（通过 Hotmail、Live、Outlook、Microsoft 365 等），您可以直接使用现有账户凭据 [登录 Microsoft Azure](https://portal.azure.com/ "Microsoft Azure Portal")。

**注意：** 您用于 Azure 账户的邮箱必须是具有发送邮件权限的基于 Microsoft 的邮箱地址。

创建并验证账户后，您需要打开 [Azure 门户](https://portal.azure.com/ "Microsoft Azure Portal")（如果您没有自动重定向的话）。

### 创建应用程序 ID

在 Azure 门户中，在页面顶部的搜索栏中输入 **应用注册**。

![搜索应用注册](https://wpmailsmtp.com/wp-content/uploads/2021/06/Search-app-registrations-1.png)

接下来，您将看到一个包含服务列表的下拉菜单。继续点击 **应用注册**。

![点击应用注册](https://wpmailsmtp.com/wp-content/uploads/2021/06/Click-app-registrations.png)

在应用注册页面顶部，您需要选择 **\+ 新注册** 选项。

![点击新注册](https://wpmailsmtp.com/wp-content/uploads/2019/07/Click-on-New-Registration.jpg)

**注意：** 如果您看到错误消息：**_在目录外创建应用程序的功能已被弃用_**。这意味着您尚未在 Azure 上注册账户。您需要 [注册并验证您的 Azure 账户](https://azure.microsoft.com/en-us/free/) 才能注册应用程序。

在应用注册表单中，以下是您需要填写的详细信息：

-   **名称：** 这仅用于您的个人组织，因此我们建议将其命名为类似 "WP Mail SMTP: yourdomain.com" 的名称。
-   **支持的账户类型：** 选择 **任何组织目录中的账户和个人 Microsoft 账户**。

![Microsoft 应用注册表单示例](https://wpmailsmtp.com/wp-content/uploads/2021/08/Example-of-app-registration-form-in-Microsoft-1.png)

**注意：** 对于某些 Microsoft 账户类型，您可能只能看到 **任何组织目录中的账户（任何 Azure AD – 多租户）** 选项。如果您的账户类型没有显示 **任何组织目录中的账户和个人 Microsoft 账户** 选项，请选择此选项。

-   **重定向 URI：** 对于第一个下拉菜单，将其保留为 **Web**。然后对于第二个字段，您需要从 WP Mail SMTP 设置中复制此值（见下文）。

为了找到重定向 URI，您需要切换回之前保留的网站 WP Mail SMTP 设置标签页或窗口。在 Outlook / 365 部分下，您将看到一个名为 **重定向 URI** 的字段。

![从 WP Mail SMTP 设置复制重定向 URI](https://wpmailsmtp.com/wp-content/uploads/2021/08/Copy-Redirect-URI-in-WP-Mail-SMTP.png)

您需要复制此值，然后将其粘贴到您的 Microsoft Azure 应用注册表单中。请确保仍然在浏览器中保持两个窗口/标签页打开，因为我们将在两者之间继续切换。

![完成 Microsoft 中的应用注册表单](https://wpmailsmtp.com/wp-content/uploads/2020/11/Redirect-URI-in-Azure.png)

准备就绪后，点击 **注册** 按钮继续。

![点击注册按钮](https://wpmailsmtp.com/wp-content/uploads/2021/08/Click-register-button.png)

**注意：** 注册应用程序后，请务必仔细检查 **支持的账户类型** 和 **重定向 URI**，位于 **身份验证** 选项卡下。如果这些设置配置不正确，您可能会遇到 [授权 WP Mail SMTP](#authorization) 的问题。

提交此注册表单后，您将被重定向到概述页面。在这里，您将找到您的 **应用程序（客户端）ID**。继续复制此值。

![从 Microsoft 复制应用程序 ID](https://wpmailsmtp.com/wp-content/uploads/2019/07/Copy-Application-ID-from-Microsoft.jpg)

一旦您复制了应用程序（客户端）ID，您需要将此完整值粘贴到您的 WP Mail SMTP 设置中，位于标记为 **应用程序 ID** 的字段中。

![应用程序-id](https://wpmailsmtp.com/wp-content/uploads/2022/04/application-id.png)

### 创建应用程序密码

接下来，我们需要为此应用程序生成密码。为此，请转到您注册的应用程序左侧边栏中的 **管理 » 证书和密码**。

![打开证书和密码菜单项](https://wpmailsmtp.com/wp-content/uploads/2019/07/Open-Certificates-and-Secrets-menu-item.jpg)

**注意：** 您需要在您创建的应用程序目录中才能看到 **证书和密码** 选项。您可以通过导航到 **应用注册** 并选择您注册的应用程序名称来访问此页面。

在此屏幕上，点击 **\+ 新客户端密码** 选项。

![在 Microsoft 设置中创建新客户端密码](https://wpmailsmtp.com/wp-content/uploads/2021/01/new-client-secret-button-1.png)

将出现一个覆盖层，您需要在此处填写一个简短的表单：

-   **描述：** 此名称仅用于您自己的使用，因此我们建议使用逻辑且简单的名称，例如 `app_password`。
-   **过期时间：** 730 天（24 个月）。

![添加客户端密码](https://wpmailsmtp.com/wp-content/uploads/2023/03/add-client-secret.png)

提交客户端密码表单后，将生成应用程序密码。继续复制 **值** 列（不是密码 ID 列）下的密码，并返回到您的 WP Mail SMTP 设置。

![从值字段复制应用程序密码](https://wpmailsmtp.com/wp-content/uploads/2022/07/copy-application-password-from-value-field.png)

**注意：** 退出此页面后，您将无法访问 **值**。我们建议将值存储在安全位置，以防您需要再次访问。

一旦您返回到设置仍然打开的标签页或窗口，将此值粘贴到 **应用程序密码** 字段中。

![应用程序密码](https://wpmailsmtp.com/wp-content/uploads/2022/04/application-password.png)

## 保存设置并授权 WP Mail SMTP

添加您的应用程序 ID 和应用程序密码后，点击页面底部的 **保存设置** 按钮。

![保存 WP Mail SMTP 设置](https://wpmailsmtp.com/wp-content/uploads/2022/12/save-settings-microsoft-365-mailer.png)

保存设置后，您需要向下滚动到 **授权** 部分。现在您应该看到一个标记为 **允许插件使用您的 Microsoft 账户发送邮件** 的按钮。继续点击此按钮。

![点击确认授权](https://wpmailsmtp.com/wp-content/uploads/2022/12/allow-plugin-to-access-your-account.png)

点击按钮后，您应该被重定向到 Microsoft 权限表单。

![Microsoft 权限请求表单](https://wpmailsmtp.com/wp-content/uploads/2022/04/microsoft-consent-popup.png)

在此表单底部，点击 **是**。

接下来，您将被重定向回您的 WP Mail SMTP 设置。在这些设置的顶部，您应该看到一个通知，告知您已成功连接您的 Microsoft 账户。

![Microsoft API 已成功连接](https://wpmailsmtp.com/wp-content/uploads/2022/12/successfully-linked-microsoft-account.png)

然后，在页面底部的授权部分，您还应该看到您用于授权连接的名称和邮箱地址。

#### 发件人邮箱

现在您的 Microsoft API 已设置并连接，您现在可以输入发件人邮箱地址。您需要使用用于授权连接的相同邮箱地址。此邮箱地址可以在您的设置的授权部分找到。

![授权邮箱](https://wpmailsmtp.com/wp-content/uploads/2022/04/authorization-email.png)

继续在您的设置中的 **发件人邮箱** 地址字段中输入相同的邮箱地址。

**注意：** 如果您想以不同用户、共享收件箱或组的身份发送邮件，请务必查看我们的 [常见问题解答部分](#sending-aliases) 以了解如何操作。

我们还强烈建议选中 **强制发件人邮箱** 复选框。选择此选项将防止您需要在您网站的其他区域编辑发件人邮箱设置。

![发件人邮箱设置](https://wpmailsmtp.com/wp-content/uploads/2022/04/sendlayer-from-email-settings.png)

**注意：** 有关详细信息，请查看我们的指南，了解 [强制发件人邮箱设置](https://wpmailsmtp.com/docs/using-the-force-from-email-setting/) 的工作原理。

### 发件人名称

Microsoft 365 / Outlook.com 邮件发送器不支持更改或强制发件人名称。您的邮件将代表用于授权连接的账户名称发送。

![Microsoft发件人名称](https://wpmailsmtp.com/wp-content/uploads/2022/04/microsoft-from-name.png)

### 备份连接

设置 [备份连接](https://wpmailsmtp.com/docs/configuring-backup-connection/) 是可选的，不是完成您的 Microsoft 365 / Outlook 邮件发送器设置所必需的。但是，为了进一步改善邮件投递率，我们建议 [配置额外连接](https://wpmailsmtp.com/docs/configuring-additional-connections/) 作为主连接失败时的备份。

![备份连接设置](https://wpmailsmtp.com/wp-content/uploads/2022/12/backup-connection-settings.png)

**注意：** 想要根据一组规则或条件通过特定的额外连接路由您的邮件吗？请务必查看我们的 [智能路由](https://wpmailsmtp.com/docs/setting-up-smart-email-routing/) 教程，了解如何操作。

## 发送测试邮件

现在您的 Microsoft API 已设置并连接，发送测试邮件以确保一切正常工作非常重要。要从 WordPress 管理仪表板执行此操作，请转到 **WP Mail SMTP » 工具** 并点击 **邮件测试** 选项卡。

![wpmailsmtp邮件测试](https://wpmailsmtp.com/wp-content/uploads/2020/11/wp-mail-smtp-tools-email-test.png)

在 **发送至** 字段中，默认情况下您将看到站点的管理员邮箱地址。不过，您可以随意将此邮箱地址更改为任何您想要发送测试邮件的邮箱地址。

**注意：** 如果您已设置 [额外连接](https://wpmailsmtp.com/docs/configuring-additional-connections/)，您将能够在发送测试邮件时在主连接和其他连接之间进行选择。

接下来，点击 **发送邮件** 按钮发送您的测试邮件。

![点击发送邮件按钮](https://wpmailsmtp.com/wp-content/uploads/2022/04/Click-send-email-button.png)

发送邮件后，您应该看到一个成功消息。

![Wp Mail SMTP 测试邮件成功消息](https://wpmailsmtp.com/wp-content/uploads/2021/08/WP-Mail-SMTP-test-email-success-message.png)

如果您检查该邮箱地址的收件箱，您应该会收到此测试的邮件。

![来自 WP Mail SMTP 的成功测试邮件](https://wpmailsmtp.com/wp-content/uploads/2021/08/Successful-test-email-from-WP-Mail-SMTP.png)

## 常见问题解答

这些是我们收到的关于在 WP Mail SMTP 中设置 Outlook 邮件发送器的一些最常见问题的答案。

#### 我在我的基于 Microsoft 的邮箱账户上使用双因素身份验证 / 多因素身份验证（2FA / MFA）。这与 Microsoft 365 / Outlook.com 邮件发送器兼容吗？

如果您在完成本教程中的设置步骤之前已经配置了 2FA/MFA，那么您不应该遇到任何问题（只需按正常步骤操作）。

然而，如果您完成本教程然后决定稍后启用 2FA/MFA，则在大多数情况下您需要重新授权邮件发送器（参见 [保存设置并授权 WP Mail SMTP](#authorization "保存设置并授权 WP Mail SMTP")）。

#### 通过 Microsoft 365 / Outlook.com 邮件发送器可以发送的最大邮件大小是多少？

对于 WP Mail SMTP 版本 3.3 及更早版本，最大大小限制为 4MB。

对于任何大于 3.3 的 WP Mail SMTP 版本，最大大小限制将取决于您的 Outlook 配置。

如果您已将 WP Mail SMTP 插件更新到大于 3.3 的版本并计划发送大于 4MB 的邮件，则需要重新授权邮件发送器（参见 [保存设置并授权 WP Mail SMTP](#authorization "保存设置并授权 WP Mail SMTP")）。

#### 为什么我在设置 Office 365 GCC 或 DoD 邮箱地址时收到以下错误？

`Confidential Client is not supported in Cross Cloud request`

出于安全措施，政府社区云（GCC）和美国国防部（DoD）账户通常使用 `.us` 域扩展名而不是 `.com`。为了设置这些类型的账户，您需要添加以下代码片段以允许 `.us` 域扩展名：


如果您需要考虑具有不同国家代码的域扩展名，例如 `.de`，只需在上面提供的代码的最后一行中将 `'us'` 替换为您的国家代码。例如，

[?](#)

1

`theme_prefix_enable_gcc_high_and_dod_compatibility(` `'de'` `);`

**注意：** 有关额外指导，请参见 WPBeginner 的 [添加自定义代码](https://www.wpbeginner.com/plugins/how-to-easily-add-custom-code-in-wordpress-without-breaking-your-site/ "How to Easily Add Custom Code in WordPress (without Breaking Your Site)") 教程。

#### 如果我的登录凭据发生更改，我需要重新连接吗？

是的，如果更改密码，您的连接将失效。发生这种情况时，您需要通过转到 **WP Mail SMTP » 设置** 重新连接 WP Mail SMTP。然后向下滚动到 **授权** 部分并点击 **移除连接**。

![移除连接按钮](https://wpmailsmtp.com/wp-content/uploads/2022/11/remove-connection.png)

移除现有连接后，您需要点击 **允许插件使用您的 Microsoft 账户发送邮件** 以重新创建您的 Microsoft 365 / Outlook.com 邮件发送器连接。

![点击确认授权](https://wpmailsmtp.com/wp-content/uploads/2022/12/allow-plugin-to-access-your-account.png)

#### Microsoft 365 / Outlook.com 邮件发送器是否支持以不同用户、共享收件箱或组的身份发送邮件？

是的，Microsoft 365 / Outlook.com 邮件发送器支持从不同用户、共享收件箱和组发送邮件。这些选项可以在 [您连接到 WP Mail SMTP 的已授权 Microsoft 账户](#authorization) 中配置。

以下，您将找到有关如何配置这些不同发送选项的相关 Microsoft 文档：

-   [以其他用户身份或代表其他用户发送](https://docs.microsoft.com/en-us/microsoft-365/admin/add-users/give-mailbox-permissions-to-another-user?view=o365-worldwide#send-email-on-behalf-of-another-user "授予另一个用户邮箱权限 - 管理帮助")
-   [从共享邮箱发送](https://docs.microsoft.com/en-us/microsoft-365/admin/email/create-a-shared-mailbox?view=o365-worldwide "创建共享邮箱")
-   [以组身份或代表组发送](https://docs.microsoft.com/en-us/microsoft-365/solutions/allow-members-to-send-as-or-send-on-behalf-of-group?view=o365-worldwide "允许成员以组身份或代表组发送")

一旦您设置好这些选项中的任何一项，您就可以 [更改发件人邮箱地址](#from-email) 为您在连接的 Microsoft 账户中配置的任何用户的邮箱地址。

#### 如果我没有权限授权需要管理员批准的应用程序怎么办？

您需要要求您的 [全局管理员](https://docs.microsoft.com/en-us/azure/active-directory/roles/permissions-reference#global-administrator "Azure AD 内置角色：全局管理员") [配置管理员同意工作流程](https://docs.microsoft.com/en-us/azure/active-directory/manage-apps/configure-admin-consent-workflow "配置管理员同意工作流程")。一旦配置了此工作流程并将您添加为审阅者，您将能够请求访问需要管理员同意的应用程序，例如 WP Mail SMTP。

#### 我可以从 Outlook 邮件发送器中删除 "mail.readwrite" 范围吗？

是的，您可以使用自定义 PHP 代码片段来实现。但是，WP Mail SMTP 使用此权限允许用户发送带有大附件文件的邮件。删除它将限制 Outlook 邮件发送器的最大文件附件大小为 3MB。请参见我们的指南了解 [如何为 Outlook 邮件发送器删除 "mail.readwrite" 范围](https://wpmailsmtp.com/docs/removing-mail-readwrite-scope-for-the-outlook-mailer/) 的详细信息。

#### 如果测试邮件发送不成功怎么办？

如果测试邮件未发送，您可能会看到包含有关问题的附加详细信息的调试日志。以下是可能的错误消息及如何解决它。

`Mailer: 365 / Outlook   ErrorSendAsDenied: 用于提交此请求的用户账户没有代表指定发送账户发送邮件的权限。无法提交消息。`

如果您看到上面的错误消息，这意味着您指定的发件人邮箱与您用于授权连接的邮箱不同。要解决此问题，您需要更新 [发件人邮箱](#from-email) 以匹配您在设置 Microsoft 365 / Outlook.com 邮件发送器连接时授权的邮箱。

如果您想使用不同的邮箱作为发件人邮箱，您需要在 Microsoft 账户上将该邮箱添加为别名。有关步骤，请参见本指南的 [发送别名](#sending-aliases) 部分。
