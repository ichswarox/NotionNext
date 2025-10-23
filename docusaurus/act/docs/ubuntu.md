---
unlisted: true
---

运维

Ubuntu安装bbr plus切换内核导致docker无法启动，如何内核恢复到6.8.0-31-generic


如果你的 Ubuntu 系统**曾经安装过 `6.8.0-31-generic` 内核**，但现在启动的不是这个版本（比如因为自动更新装了更新的内核，或者误删了它），你可以按以下步骤**恢复或重新安装 `6.8.0-31-generic`**。

---

### ✅ 第一步：确认当前系统版本
```bash
lsb_release -a
```
- 如果是 **Ubuntu 24.04 LTS**，`6.8.0-31-generic` 是官方默认内核，可以直接重装。
- 如果是 **Ubuntu 22.04**，这个内核不是官方默认，需谨慎操作（建议升级到 24.04）。

> 以下操作**默认你使用的是 Ubuntu 24.04**（最稳妥）。

---

### ✅ 第二步：检查是否已安装该内核
```bash
ls /boot/vmlinuz-* | grep 6.8.0-31
```
如果看到 `/boot/vmlinuz-6.8.0-31-generic`，说明内核还在，只是没被默认启动。

#### ▶ 情况1：内核已安装但未默认启动
1. 重启系统，在 GRUB 启动菜单中选择 **“Advanced options for Ubuntu”**
2. 手动选择 `Ubuntu, with Linux 6.8.0-31-generic`
3. 进入系统后，设为默认启动项：
   ```bash
   # 查看所有内核
   grep -P "^menuentry|^submenu" /boot/grub/grub.cfg | cat -n

   # 设置默认启动项（假设 6.8.0-31 是第 2 项）
   sudo grub-set-default 1  # 注意：从 0 开始计数
   sudo update-grub
   ```

#### ▶ 情况2：内核已被删除（/boot 下没有 6.8.0-31 文件）
需要**重新安装**。

---

### ✅ 第三步：重新安装 6.8.0-31-generic（Ubuntu 24.04）

```bash
# 1. 更新软件源
sudo apt update

# 2. 安装指定版本内核（Ubuntu 24.04 官方仓库包含此版本）
sudo apt install --install-recommends \
    linux-image-6.8.0-31-generic \
    linux-headers-6.8.0-31-generic \
    linux-modules-6.8.0-31-generic \
    linux-modules-extra-6.8.0-31-generic
```

> 💡 如果提示找不到包，说明你的系统可能不是 24.04，或者软件源未同步。请先确认：
> ```bash
> cat /etc/os-release | grep VERSION
> ```

---

### ✅ 第四步：更新 GRUB 并重启
```bash
sudo update-grub
sudo reboot
```

重启后检查：
```bash
uname -r
# 应输出：6.8.0-31-generic
```

---

### ❌ 如果你用的是 Ubuntu 22.04？
`6.8.0-31-generic` **不是 Ubuntu 22.04 的官方内核**，强行安装可能导致：
- 驱动不兼容（WiFi、显卡、ZFS 等）
- 系统不稳定

✅ **建议做法**：
1. 备份数据
2. **升级到 Ubuntu 24.04**（这是最干净、最安全的方式）：
   ```bash
   sudo do-release-upgrade
   ```
   升级后自动获得 6.8 内核。

---

### 🔧 附加：清理旧内核（可选）
安装成功后，可以删除不用的旧内核释放空间：
```bash
# 查看已安装内核
dpkg --list | grep linux-image

# 删除不需要的版本（例如 6.5.0-xx）
sudo apt remove --purge linux-image-6.5.0-xx-generic linux-headers-6.5.0-xx-generic
sudo update-grub
```

---

如果你告诉我：
- 当前 `lsb_release -a` 输出
- `uname -r` 输出
- 是否在云服务器（AWS/Azure/阿里云等）

我可以给你**完全定制的命令**！