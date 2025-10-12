---
id: wordpress-enable-email
title: WordPress Enable Email Sending Function
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

On WordPress websites, to ensure that emails (such as user registration notifications, password resets, order confirmations, etc.) can be sent stably and reliably, it is recommended to use SMTP (Simple Mail Transfer Protocol) service to replace the server's default email functionality. This article will guide you on how to configure the `WP Mail SMTP` plugin to enable email sending functionality.

## Prerequisites

First, you need to install and enable the **WP Mail SMTP** plugin. After searching and installing in the plugin marketplace, enabling the plugin will automatically redirect to the setup wizard.

## Configuring Email Service

You can choose from multiple email service providers. Here we'll use Outlook and Gmail as examples.

<Tabs>
<TabItem value="outlook" label="Using Outlook Email" default>

Microsoft's Outlook email service is stable and reliable, effectively preventing emails from being misjudged as spam.

### Step 1: Select SMTP Mailer

In the setup wizard, select **Other SMTP**.

### Step 2: Configure SMTP Parameters

Fill in the following SMTP information for your Outlook email:

- **SMTP Host**: `smtp.office365.com`
- **Encryption**: `TLS`
- **Port**: `587`
- **SMTP Username**: Your Microsoft email account (e.g., `your-email@outlook.com`)
- **SMTP Password**: Your Microsoft email password

:::warning[What if login fails?]
If you encounter login issues, please check the following settings:
1.  **Disable Two-Factor Authentication**: Visit [Microsoft Account Security Settings](https://account.microsoft.com/security), click **"Advanced Security Options"**, find and disable **"Two-Factor Authentication"**.
2. **Check Abnormal Login Activity**: Visit [Microsoft Account Recent Activity Page](https://account.live.com/activity), check for any blocked login attempts. If there are any, click **"This is me"** to allow login.
:::

- **From Name**: Enter your website name, which will serve as the email sender's name.
- **From Email**: Enter your Microsoft email address.

### Step 3: Save and Continue

Click **Save and Continue**.

### Step 4 and 5: Skip

The next two steps can be directly skipped by clicking **Skip this step** until setup is complete.

</TabItem>
<TabItem value="gmail" label="Using Gmail Email">

Gmail is also a reliable email service provider. Detailed setup tutorials can be referenced in the following document:

- **Tutorial Link**: [WordPress Enable Email (Gmail) - Tencent Docs](https://docs.qq.com/doc/DZlpIRk1taUNuTXRU)

</TabItem>
</Tabs>

## Appendix: Advanced Settings (Azure AD)

For developers who need to use professional SMTP services, you can obtain higher-level email sending permissions by registering an Azure application.

1.  **Log in to Azure**:
    Visit [https://portal.azure.com/](https://portal.azure.com/)

2.  **App Registration**:
    Search in the search bar and open **App Registrations**.

3.  **Add New Registration**:
    Click **New registration** to add a new application.

4.  **Join Developer Program**:
    If needed, click **Join the Microsoft 365 Developer Program!** to get developer benefits, then complete registration through SMS verification.

5.  **Return to App List**:
    After completion, return to [Application List Page](https://portal.azure.com/#view/Microsoft_AAD_RegisteredApps/ApplicationsListBlade) to view your newly registered application.
