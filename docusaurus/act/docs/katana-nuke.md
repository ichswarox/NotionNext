# Nuke/Katana 激活教程

## 一、准备工作

- **清理旧证书（防止冲突）**：
  - Windows：删除 `C:\Users\<用户名>\FoundryLicensing` 内所有文件
  - macOS：删除 `/Users/<用户名>/FoundryLicensing` 内所有内容
  - Linux：删除 `/home/<用户名>/FoundryLicensing` 下全部文件

- **客户端下载**：
  - [官网下载链接](https://www.foundry.com/)
  - [Nuke/Katana最新版](https://www.foundry.com/products/nuke-family/nuke)
  - [历史版本](https://www.foundry.com/products/nuke-family/nuke/download-history)

## 二、激活步骤

- **启动软件**：
  安装完成后运行Nuke/Katana，不要点击 Non Commercial 选项，等待弹出许可证窗口。

- **配置许可证服务器**：
  选择 Local License ➔ 点击 Server 选项
  填写以下信息：

  ```text
  Hostname: nuke.neoxu.store
  Port: <替换为你提供的数字，如4101或233>
  ```

  **注意**：直接粘贴输入，避免手动输入错误

- **备用方案**：
  若主Hostname无法解析，可尝试备份IP：`193.32.148.246`

## 三、Linux特殊说明

安装流程参考官方文档：[Nuke Linux安装指南](https://learn.foundry.com/nuke/15.0/content/getting_started/installation/licensing.html)

激活步骤与Windows/macOS一致

## 四、注意事项

- **防火墙设置**：
  确保本地防火墙放行许可证服务器的端口通信

- **版本兼容性**：
  上述步骤适用于全版本Nuke/Katana，但端口号需根据实际提供数值调整

- **激活失败排查**：
  - 检查Hostname/IP是否输入正确
  - 确认旧证书已彻底清理
  - 重启软件后重试许可证配置

## 五、疑难问题

- **闪退问题**：
  确保你的用户名是英文的，不要使用中文用户名
  1. 右键此电脑 > 属性 > 打开高级系统设置 > 高级 > 环境变量
