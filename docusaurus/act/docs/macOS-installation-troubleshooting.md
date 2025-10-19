---
title: "macOS 软件安装问题解决指南"
description: "详细指南解决 macOS 软件安装常见问题，包括开启任何来源、处理应用损坏、M1/M2 芯片兼容性问题及系统完整性保护解决方案"
tags: [macOS, 软件安装, 故障排除, 任何来源, SIP, Rosetta 2]
slug: /macos-installation-troubleshooting
---

<!--https://www.macat.vip/496.html-->

# macOS 软件安装问题解决指南

## 概述

本文档提供了解决 macOS 软件安装常见问题的详细指南，包括如何开启「任何来源」选项、处理应用损坏问题、M1/M2 芯片兼容性问题以及系统完整性保护（SIP）相关解决方案。

## 目录

- [常见错误类型](#常见错误类型)
- [开启「任何来源」选项](#开启任何来源选项)
- [解决应用损坏问题](#解决应用损坏问题)
- [M1/M2 芯片兼容性问题](#m1m2-芯片兼容性问题)
- [系统完整性保护（SIP）](#系统完整性保护sip)
- [故障排除](#故障排除)

## 常见错误类型

在 macOS 上安装第三方软件时，您可能会遇到以下错误：
![img1019-FXbi.webp](https://list.ucards.store/d/img/img1019-FXbi.webp)
1. **无法打开应用**：「xxx无法打开，因为它来自身份不明的开发者」
2. **应用损坏**：「xxx已损坏，无法打开，您应该将它移到废纸篓」
3. **安全验证失败**：「打不开xxx，因为 Apple 无法检查其是否包含恶意软件」
4. **非 App Store 应用**：「无法打开xxx，因为它不是从 App Store 下载的」

## 开启「任何来源」选项

### 适用于 macOS 14-26 系统

1. 打开「系统偏好设置」 → 「安全与隐私」 → 「安全性」或「通用」选项卡
2. 检查是否已启用「任何来源」选项
3. 如果没有启用，点击左下角的锁图标解锁，然后选中「任何来源」!
   [img1019-jyOE.webp](https://list.ucards.store/d/img/img1019-jyOE.webp)

**如果没有「任何来源」选项：**

打开终端（Command+空格，搜索：终端），复制并粘贴以下命令：

```bash
sudo spctl --master-disable
```

按下回车键，输入管理员密码（输入过程中密码不可见），再次按下回车键。

> **注意**：通过终端命令打开「任何来源」后，还需要前往「系统偏好设置」-「隐私与安全性」-「安全性」，手动修改为「任何来源」。

### 适用于 macOS 15 Sequoia 及更高版本

在 macOS 15 Sequoia Beta3 系统中，`spctl` 命令已被禁用。需要使用配置文件方法：

1. 下载配置文件
2. 安装配置文件后，打开「设置」-「通用」-「设备管理」
3. 双击刚安装的配置文件，点击「安装」完成启用

## 解决应用损坏问题
比如“Adobe Animate 2024.app” is damaged and can’t be opened.
打开设置-隐私与安全-仍然打开Adobe Animate程序。


### 方法一：绕过公证 Gatekeeper

移除应用的 **Quarantine** 属性：

```bash
sudo xattr -rd com.apple.quarantine [应用路径]
```

**操作步骤：**
1. 打开终端
2. 输入 `sudo xattr -rd com.apple.quarantine `（注意最后的空格）
3. 打开「访达」，点击左侧「应用程序」
4. 将目标应用拖入终端中 `quarantine` 后面
5. 按回车键并输入管理员密码

### 方法二：右键打开

前往「访达」-「应用程序」，找到目标应用，右键点击选择「打开」。

### 方法三：终端签名

如果方法一无效，可以尝试对应用进行重新签名：

1. 首先安装 Command Line Tools：
   ```bash
   xcode-select --install
   ```

2. 对应用进行签名：
   ```bash
   sudo codesign --force --deep --sign - [应用路径]
   ```

**如果遇到错误：**
```
resource fork,Finder information,or similar detritus not allowed
```

先执行：
```bash
xattr -cr [应用路径]
```

然后再执行签名命令。

## M1/M2 芯片兼容性问题

### Rosetta 2 介绍

苹果从 Intel X86 芯片转向自研 Apple Silicon M1/M2 芯片后，为确保 Intel 架构应用能在 M1/M2 上运行，推出了 Rosetta 2 技术。Rosetta 2 是一种仿真器，用于桥接 Intel 和 Apple 芯片之间的过渡。

### 查看应用架构

右键点击应用程序，选择「显示简介」，查看「种类」信息：
- **通用**：支持 Apple 芯片和 Intel 处理器
- **Apple 芯片**：仅支持 Apple 芯片
- **Intel**：仅支持 Intel 处理器，需要 Rosetta 2

### 安装 Rosetta 2

如果应用没有「使用 Rosetta 打开」选项，需要安装 Rosetta 2：

```bash
/usr/sbin/softwareupdate --install-rosetta --agree-to-license
```

### 通用应用闪退修复

对于在 M1/M2 芯片上运行闪退的通用应用，尝试在「显示简介」窗口中勾选「使用 Rosetta 打开」。

## 系统完整性保护（SIP）

### SIP 介绍

系统完整性保护（SIP）是 macOS 的安全技术，防止恶意软件修改受保护的文件和文件夹。SIP 限制 root 用户账户在 macOS 受保护部分的操作。

### 检查 SIP 状态

在终端中输入以下命令：

```bash
csrutil status
```

结果说明：
- `enabled`：SIP 已启用
- `disabled`：SIP 已禁用

### 关闭 SIP

> **警告**：关闭 SIP 会降低系统安全性，仅在必要时操作。

**对于 Intel Mac：**
1. 重启 Mac，在开机时按住 Command+R 进入恢复模式
2. 在顶部菜单栏点击「实用工具」 → 「终端」
3. 输入命令：
   ```bash
   csrutil disable
   ```
4. 重启 Mac

**对于 M1 Mac：**
1. 关闭 Mac
2. 按住电源按钮直到看到启动选项
3. 点击「选项」，然后点击「继续」
4. 选择管理员账户并登录
5. 在菜单栏中点击「实用程序」 → 「终端」
6. 输入命令：
   ```bash
   csrutil disable
   ```
7. 重启 Mac

## 故障排除

### 常见问题

1. **命令行工具已安装但仍提示错误**
   ```
   error: command line tools are already installed, use "Software Update" to install updates
   ```
   解决方案：已安装，无需再次安装，直接进行后续步骤。

2. **错误代码 -36**
   这表示下载文件损坏，需要重新下载。

3. **应用闪退**
   尝试安装 Command Line Tools 并对应用进行重新签名。

### 安全建议

- 如非必要，不要关闭 SIP
- 仅安装来自可信来源的软件
- 在关闭 SIP 前，确保了解相关安全风险
- 定期更新系统以获得最新的安全补丁
