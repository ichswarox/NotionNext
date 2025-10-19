---
unlisted: true
---
# Tailscale配置指南

## 下面介绍在OpenWrt上的配置过程。

### 1. 下载软件
iPhone 需要登录非大陆的App Store，登录之后，还需要点击右上角Connect device.

将Tailscale软件包下载到指定目录。进入tailscale的[github releases](https://github.com/adyanth/openwrt-tailscale-enabler/releases "github releases")地址，找到最新的软件包，下载到本地。然后使用Winscp工具将下载的软件上传到OpenWrt的/tmp目录下，也可以找到下载链接，直接使用wget命令下载.

```bash
 wget https://github.com/adyanth/openwrt-tailscale-enabler/releases/download/v1.60.0-e428948-autoupdate/openwrt-tailscale-enabler-v1.60.0-e428948-autoupdate.tgz
```

### 2\. 解压软件包

```bash
tar x -zvC / -f openwrt-tailscale-enabler-v1.60.0-e428948-autoupdate.tgz
```

### 3\. 安装依赖包

```bash
opkg update
opkg install libustream-openssl ca-bundle kmod-tun
```

### 4\. 设置开机启动，验证开机启动

```bash
/etc/init.d/tailscale enable
ls /etc/rc.d/S*tailscale*
```

### 5\. 启动tailscale

```bash
/etc/init.d/tailscale start
```

### 6\. 获取登录链接并配置路由

```bash
tailscale up
```

![](https://pic.imgdb.cn/item/6667bf0c5e6d1bfa05eb28a4.png)  
复制显示的地址，并在浏览器中打开，使用谷歌或微软帐号登录Tailscale的管理主页进行验证。  
不建议使用谷歌账号,因为使用谷歌后你手机在外面链接需要先开科学再登录谷歌账号才能链接上tailscale的app.

### 7\. 开启子网路由

在OpenWrt上输入以下命令，打开本地子路由。子网地址是OpenWrt的lan网络。**10.1.2.0/24是我的子网,不要无脑复制我的!!!!!**

```bash
tailscale up --accept-routes --accept-dns=false --advertise-routes=10.1.2.0/24
```

在Tailscale的管理页面上，单击设备列表右侧的更多图标，禁用密钥过期，并打开子网路由。  
![](https://pic.imgdb.cn/item/6667c0675e6d1bfa05ec6919.png)  
现在在OpenWrt上已经可以ping通其他Tailscale节点了，但其他节点还无法连接OpenWrt节点，还需要在OpenWrt上添加Tailscale接口。

### 8\. 添加接口

在OpenWrt上新建一个接口，协议选静态地址，设备选tailscale0，地址为Taliscale管理页面上分配的地址，掩码255.0.0.0。防火墙区域选lan区域。  
![](https://pic.imgdb.cn/item/6667c0fa5e6d1bfa05ece864.png)  
![](https://pic.imgdb.cn/item/6667c1225e6d1bfa05ed0b21.png)  
配置完成后如下图所示：  
![](https://pic.imgdb.cn/item/6667c1515e6d1bfa05ed30c9.png)

### 9\. 添加防火墙规则

将以下内容，加到防火墙的自定义规则当中，并重启防火墙。

```bash
iptables -I FORWARD -i tailscale0 -j ACCEPT
iptables -I FORWARD -o tailscale0 -j ACCEPT
iptables -t nat -I POSTROUTING -o tailscale0 -j MASQUERADE
```

### 现在各个Tailscale节点之间已经可以正常互访了。
