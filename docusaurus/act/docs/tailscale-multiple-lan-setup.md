---
unlisted: true
---

<!-- https://wp.gxnas.com/14248.html-->
# Tailscale 外网互访局域网设备设置步骤

## 概述

如果你有多个局域网想组成虚拟局域网，每个局域网内的设备不需要安装 Tailscale 客户端也可以相互访问，那么除了完成基础的内网穿透设置步骤以外，在每个局域网内的 exit node 出口设备上，还需要进行以下设置。

## 前提条件

- 已完成基础的 Tailscale 内网穿透设置
- 拥有 OpenWrt 路由器作为出口设备
- 熟悉 OpenWrt 的基本操作

## 设置步骤

### 1. 添加新接口

在 OpenWrt 的菜单中，依次进入：网络 → 接口 → 添加新接口。

### 2. 配置接口参数

- 接口名称：`tailscale`
- 协议：选择"静态地址"
- 物理接口：选择"以太网适配器：tailscale0"
- 提交配置

### 3. 获取 Exit Node IP 地址

登录 Tailscale 后台，找到之前设置的 exit node 出口设备 IP 地址并记录下来（注意：请使用你自己的 exit node 出口设备实际 IP 地址）。

### 4. 配置接口 IP

将上一步记录的 IP 地址填入接口配置的"IPv4 地址"字段，IPv4 子网掩码选择"255.0.0.0"。

> **注意**：请确保填写的是对应局域网的 exit node 出口设备 IP，不要混淆。

### 5. 配置防火墙

点击"防火墙设置"，创建/分配防火墙区域选择"LAN"，然后点击"保存&应用"。

### 6. 添加防火墙规则

将以下三行 iptables 规则复制到"防火墙" → "自定义规则"中，然后点击"重启防火墙"：

```bash
iptables -I FORWARD -i tailscale0 -j ACCEPT
iptables -I FORWARD -o tailscale0 -j ACCEPT
iptables -t nat -I POSTROUTING -o tailscale0 -j MASQUERADE
```

### 7. 完成组网

将需要互通的网络全部按照上述步骤设置完成后，所有局域网内的设备无需安装 Tailscale 客户端，即可相互访问，实现大内网组网。

## 验证连接

设置完成后，可以通过 ping 命令或其他网络工具测试不同局域网间的设备连通性。

## 故障排除

- 如果连接失败，请检查防火墙规则是否正确应用
- 确认 Tailscale 服务在各出口设备上正常运行
- 检查接口配置中的 IP 地址是否正确
