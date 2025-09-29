# Arnold激活

## 历史版本下载

- 访问Arnold历史版本下载地址：[https://www.arnoldrenderer.com/download/archive/](https://www.arnoldrenderer.com/download/archive/)
- 先登录账户
- 点击试用并按步骤填写信息
- 完成后在后台的"所有产品和服务"中找到需要的版本下载
- 另一个下载地址：[https://www.autodesk.com/products/arnold/trial-intake](https://www.autodesk.com/products/arnold/trial-intake)

## 官方安装教程

- [官方安装教程](https://help.autodesk.com/view/ARNOL/ENU/?guid=arnold_for_houdini_ah_getting_started_ah_Installation_html)
- [如何下载Arnold](https://www.autodesk.com/support/technical/article/caas/sfdcarticles/sfdcarticles/Where-to-download-Arnold.html)

## 激活流程

1. 在3D软件中找到Arnold菜单
2. 选择 `Licensing` → `Licensing Manager` → `RLM` → `Add`
3. Host输入（请复制粘贴冒号后的字母）: `arn.neoxu.store`
4. Port输入: 输入我发给你的数字
5. 系统提示成功即完成激活

## 解决水印问题

如果仍然出现水印，请按以下步骤操作：

### Houdini
- 点击`out`标签
- 进入`Properties` → `System`
- 勾选`Abort on license fail`

![Houdini设置示意图](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/cf85c063-99b6-4afd-bc17-5c569651d66b/Untitled.png)

### 其他软件（如C4D）
类似地，勾选`Abort on license fail`即可。出现水印的原因是Arnold在连接证书服务器之前就开始渲染了，多次点击渲染按钮也可能解决问题。

## 常见问题

### Q: 无法输入激活命令？Add按钮为灰色无法编辑？

![灰色Add按钮示意图](https://prod-files-secure.s3.us-west-2.amazonaws.com/235334e7-6679-4138-af38-4f9fe65be29e/319e2d87-4194-4b02-b2a5-33150bbca0a5/Untitled.png)

**A:** 如果已安装Maya，请按以下任一方法操作：

1. 在Maya顶部Arnold菜单中找到`Arnold License Manager`，点击`Add`
2. 或者右键点击"我的电脑" → "环境变量" → 找到`Arnold License`，修改为我给你的地址

![环境变量设置示意图](https://prod-files-secure.s3.us-west-2.amazonaws.com/235334e7-6679-4138-af38-4f9fe65be29e/104278cb-7403-44df-9ffb-613b8f2f622c/Untitled.png)
