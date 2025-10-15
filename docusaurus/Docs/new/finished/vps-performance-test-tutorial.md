---
title: "如何测试VPS服务器性能？分享4个脚本测试VPS性能和网速"
description: "本篇文章推荐了几款脚本可以快速、全面地测试服务器的CPU、内存、磁盘、网络等多项性能指标。"
tags: [VPS, 服务器性能, 性能测试, 网速测试]
slug: /vps-performance-test-tutorial
---

# 如何测试VPS服务器性能？分享4个脚本测试VPS性能和网速

Last updated: Oct 15, 2025

![如何测试VPS服务器性能配图](https://website-custom.com/wp-content/uploads/2024/11/speedometer.png)

如何测试VPS服务器性能？本篇文章推荐的几款脚本可以快速、全面地测试服务器的 CPU、内存、磁盘、网络等多项性能指标。

## 如何测试VPS服务器性能？

测试VPS性能需要使用SSH工具连接服务器。

## VPS性能测试脚本

### 1. bench.sh

这是一个基础的性能测试脚本，包含对CPU、内存、磁盘 I/O 和网络速度的测试。

在命令行输入下方脚本就可以进行测试：

```bash
wget -qO- bench.sh | bash
```

![bench.sh VPS检测脚本测试结果](https://website-custom.com/wp-content/uploads/2024/11/speedometer.png)

- 最上方显示的是服务器配置基本信息，包含CPU、硬盘、内存等信息。
- 配置信息下方是对磁盘I/O测试的数据。
- 最下方是对全球主要地区进行上传、下载以及延迟测试。

该脚本的原始地址：
[bench.sh](https://github.com/teddysun/across/blob/master/bench.sh)

:::tip
这个脚本适合快速了解服务器的基本性能。
:::

### 2. spiritLHLS

- 这个脚本对 VPS 的 CPU、内存、磁盘、网络等硬件资源进行全面测试
- 网络主要是针对中国三大运营商（联通、电信、移动）进行检测
- 还能进行流媒体解锁测试、IP安全性检测，这个VPS测试脚本很全面

脚本命令：

```bash
curl -L https://gitlab.com/spiritysdx/za/-/raw/main/ecs.sh -o ecs.sh && chmod +x ecs.sh && bash ecs.sh -m 1
```

<Tabs>
<TabItem value="basic-test" label="基础测试" default>
![spiritLHLS VPS检测脚本测试结果](https://website-custom.com/wp-content/uploads/2024/11/speedometer.png)
测服务器基本配置信息。
</TabItem>
<TabItem value="media-test" label="流媒体测试">
![spiritLHLS VPS检测脚本测试结果2](https://website-custom.com/wp-content/uploads/2024/11/speedometer.png)
测流媒体解锁情况。
</TabItem>
<TabItem value="security-test" label="安全测试">
![spiritLHLS VPS检测脚本测试结果3](https://website-custom.com/wp-content/uploads/2024/11/speedometer.png)
测IP安全得分。
</TabItem>
<TabItem value="network-test" label="网络测试">
![spiritLHLS VPS检测脚本测试结果4](https://website-custom.com/wp-content/uploads/2024/11/speedometer.png)
测三大运营商响应速度。
</TabItem>
</Tabs>

脚本原地址：
[spiritLHLS](https://github.com/spiritLHLS/ecs)

### 3. CPU Benchmark script for VPS

- 是一款专注于 CPU 基准测试的脚本
- 主要用来测试 VPS 的 CPU 性能表现
- 它通常会使用工具（例如 `sysbench`）来评估 CPU 的处理能力
- 通过计算密集型操作测量单线程和多线程的性能

脚本命令：

```bash
curl -L -o gk5.sh https://rebrand.ly/gk5 && bash gk5.sh
```

![CPU Benchmark script for VPS 脚本测试服务器性能](https://website-custom.com/wp-content/uploads/2024/11/speedometer.png)

脚本原地址：
[Benchmark_script_for_VPS](https://github.com/mikeyang01/Benchmark_script_for_VPS)

### 4. Yet-Another-Bench-Script

- 涵盖 CPU 性能、磁盘 I/O 速度和网络带宽等方面测试
- YABS 的优点是能对IPv4和IPv6分别进行国际测速
- 非常适合在购买外贸服务器的时候评估网速

脚本命令：

```bash
curl -sL yabs.sh | bash
```

或者

```bash
wget -qO- yabs.sh | bash
```

<Tabs>
<TabItem value="performance-test" label="性能测试" default>
![Yet-Another-Bench-Script 脚本测试服务器性能](https://website-custom.com/wp-content/uploads/2024/11/speedometer.png)
服务器配置信息及读写能力。
</TabItem>
<TabItem value="speed-test" label="测速测试">
![Yet-Another-Bench-Script 脚本测试服务器性能](https://website-custom.com/wp-content/uploads/2024/11/speedometer.png)
IPv4和IPv6分别测速。
</TabItem>
</Tabs>

脚本原地址：
[yet-another-bench-script](https://github.com/masonr/yet-another-bench-script)

## 相关资源

| 资源名称 | 下载链接 |
|---------|----------|
| bench.sh | [bench.sh脚本](https://github.com/teddysun/across/blob/master/bench.sh) |
| spiritLHLS | [spiritLHLS脚本](https://github.com/spiritLHLS/ecs) |
| VPS性能测试工具 | [VPS性能测试工具](https://website-custom.com/resources/) |
