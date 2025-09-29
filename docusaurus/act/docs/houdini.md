# Houdini正版激活指南

## 概述

本指南将详细介绍如何激活 Houdini 软件。

## 步骤 1：下载Launcher

1. **下载安装 [Houdini Launcher](https://www.sidefx.com/download/)**（必须）
2. **确保网络环境**：请确保本机可以访问 Google,且默认浏览器为谷歌浏览器（某些地区可能需要特殊网络设置）

## 步骤 2：启动 Launcher
1.右上角先登录自己的账号（确保浏览器为Chrome，不支持Safari）
2.登录完成以后点击Licenses-Licence Server-License Administrator
![HoudiniLauncher-vr.webp](https://list.ucards.store/d/img/HoudiniLauncher-vr.webp)

## 步骤 3：配置许可证

![HoudiniLauncher-ud.webp](https://list.ucards.store/d/img/HoudiniLauncher-ud.webp)
1. 如果弹出输入邮箱的对话框，请关闭它
2. 在Servers 区域点击钢笔状icon，输入：
```
h.neoxu.store:填我给你的数字
```
![HoudiniLauncher-su.webp](https://list.ucards.store/d/img/HoudiniLauncher-su.webp)
3. 然后点击ok，再点击右下角的Updaate，有如下信息就是激活完成，现在！**右上角关闭**Administrator回到Launcher
![HoudiniLauncher-hk.webp](https://list.ucards.store/d/img/HoudiniLauncher-hk.webp)


## 步骤 5：下载客户端
![HoudiniLauncher-hb.webp](https://list.ucards.store/d/img/HoudiniLauncher-hb.webp)
1. 回到Launcher后，点击 Houdini
2. 再点击install
3. 选择版本下载安装客户端即可 
- **Production 版本**：对应生产力版本，更加稳定，适合正式项目使用
- **Daily 版本**：日常更新版本，包含最新功能，但可能不够稳定

### 重要注意事项
- **匿名报告**：首次打开时，系统会询问是否发送匿名报告，**请务必选择 NO**！
  - 或者在 Edit → Preference → Miscellaneous 中，将 "Send anonymous" 选项关闭
  ![HoudiniReport-yr.webp](https://list.ucards.store/d/img/HoudiniReport-yr.webp)


**以上为激活的所有内容，如果遇到问题请继续阅读。**



> **注意**：注册需要特殊网络工具，否则无法正常访问注册页面 [https://www.sidefx.com/register/](https://www.sidefx.com/register/)


## 常见问题解决

### 替代账号方案
如果不想注册账号，我们提供以下公共账号：
- **账号**：M5pP
- **密码**：zo2BENVeY@d2Yc

### 教育版证书冲突
如果误申请了非商业版证书，导致无法使用 Houdini FX 商业版客户端：
1. 打开 License Administrator
2. 删除 "Change License Server"
3. 删除 "LocalHost" 项
4. 只保留购买的认证服务

### Houdini 闪退问题解决指南

如果你遇到 Houdini 闪退、无法安装新版本或无法卸载版本的问题，请按以下步骤排查：

#### 方法 A：重置配置文件（推荐）

如果 Houdini 出现闪退或异常行为，可能是配置文件损坏导致的：

1. **Mac 系统配置文件位置**：
   - 打开 Finder，按下 `Cmd + Shift + G`，然后粘贴以下路径：
   ```
   ~/Library/Preferences/
   ```
   - 找到以 `com.sidefx.Houdini` 开头的相关文件夹，将其重命名或移至其他位置

2. **Windows 系统配置文件位置**：
   - 按下 `Win + R`，输入以下路径：
   ```
   %APPDATA%\SideFX\
   ```

3. **Linux 系统配置文件位置**：
   - 配置文件通常位于：
   ```
   ~/.houdiniX.Y/
   ```
   或
   ```
   ~/houdiniX.Y/
   ```

完成上述操作后，重新启动 Houdini Launcher。

> **参考文档**：[Houdini 环境配置](https://www.sidefx.com/docs/houdini/basics/config_env.html)

#### 方法 B：命令行启动排查

如果重置配置文件后问题依然存在，请尝试以命令行方式启动 Houdini 进行错误排查：

**Windows 命令行启动方法**：
- 打开命令提示符或 PowerShell
- 输入 Houdini 的启动命令

**Linux/Mac 命令行启动方法（版本号记得替换）**：
- 打开终端
- 输入 Houdini 的启动命令
- sudo /Applications/Houdini/Houdini21.0.440/Houdini\ FX\ 21.0.440.app/Contents/MacOS/houdinifx

##### 报错结果1: RG 错误提示
![HoudiniLauncher-pc.webp](https://list.ucards.store/d/img/HoudiniLauncher-pc.webp)
![HoudiniLauncher-ph.webp](https://list.ucards.store/d/img/HoudiniLauncher-ph.webp)
如果遇到以 `RG` 开头的错误（通常与红巨星插件相关）：

在 `houdini.env` 文件中添加以下行：
```
HOUDINI_DISABLE_OPENFX_DEFAULT_PATH = 1
```
![HoudiniLauncher-ep.webp](https://list.ucards.store/d/img/HoudiniLauncher-ep.webp)


### 安装 Octane for Houdini 插件

#### 注意事项
- 选择以 `py3` 开头的版本，不要选择 `default` 版本
- 根据你的 Houdini 版本修改配置信息中的版本号
 
#### 配置步骤
1. 找到 Houdini 配置文件 `houdini.env`
2. 添加以下配置信息：

```
PATH = "C:\Users\user\Documents\OctaneSolarisEnterprise_2021.1.5.0_Houdini_19.0.622\bin;&"
HOUDINI_PATH = "C:\Users\user\Documents\OctaneSolarisEnterprise_2021.1.5.0_Houdini_19.0.622;&"
```

> **注意**：请将路径中的示例版本号（如 `2021.1.5.0` 和 `19.0.622`）替换为你实际安装的 Octane 和 Houdini 版本号。

> **Mac 用户路径说明**：在 macOS 系统中，路径格式通常为 `/Users/username/Documents/OctaneSolarisEnterprise_...`，请根据实际安装路径进行调整。

#### 验证安装
- 配置完成后重启 Houdini
- 检查 Octane 渲染器是否正常加载

### 许可证文件位置

不同操作系统的许可证文件位置：

- **Windows**: `C:/Windows/keys/licenses`
- **Linux**: `/usr/lib/sesi/licenses`
- **Mac**: `/Library/Preferences/sesi/licenses`

## 其他资源

- **魔法推荐**：[注册链接1](https://xfltd.org/register?aff=x9F4cE2V) | [注册链接2](https://xfltd.org/#/register?code=x9F4cE2V)
