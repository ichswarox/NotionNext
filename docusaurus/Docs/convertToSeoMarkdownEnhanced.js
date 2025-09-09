const fs = require('fs');
const path = require('path');
const cheerio = require('cheerio');

// Comprehensive translation dictionary for common terms
const translationDict = {
  // Categories/Types
  "AE模板": "AE Template",
  "AE脚本": "AE Script",
  "PR预设": "PR Preset",
  "MG模板": "MG Template",
  "MG动画": "MG Animation",
  "MG元素": "MG Elements",
  "MG预设": "MG Preset",
  "文字标题": "Text Titles",
  "图形动画": "Graphic Animation",
  "转场预设": "Transition Presets",
  "视频素材": "Video Footage",
  "背景": "Background",
  "图标": "Icons",
  "插件": "Plugin",
  "精品素材": "Premium Assets",
  "工具素材包": "Tool Asset Pack",
  "运动预设": "Motion Presets",
  "片头": "Intro",
  "片尾": "Outro",
  "字幕": "Subtitles",
  "标题": "Titles",
  "文字": "Text",
  "图形": "Graphics",
  "转场": "Transitions",
  "动画": "Animation",
  "元素": "Elements",
  "预设": "Presets",
  "素材": "Assets",
  
  // Technical terms
  "分辨率": "Resolution",
  "版本": "Version",
  "大小": "Size",
  "教程": "Tutorial",
  "音乐": "Music",
  "插件": "Plugins",
  "预设": "Presets",
  "动画": "Animation",
  "元素": "Elements",
  "标题": "Titles",
  "文字": "Text",
  "图形": "Graphics",
  "转场": "Transitions",
  "背景": "Background",
  "图标": "Icons",
  "片头": "Intro",
  "片尾": "Outro",
  "三维": "3D",
  "二维": "2D",
  "高清": "HD",
  "通道": "Channels",
  "渲染": "Rendered",
  "动态": "Motion",
  "颜色": "Color",
  "粗细": "Thickness",
  "尺寸": "Dimensions",
  "位置": "Position",
  "效果": "Effects",
  "参数": "Parameters",
  "设置": "Settings",
  
  // Software names
  "After Effects": "After Effects",
  "AE": "After Effects",
  "Premiere": "Premiere Pro",
  "PR": "Premiere Pro",
  "VideoHive": "VideoHive",
  "Cinema 4D": "Cinema 4D",
  "Blender": "Blender",
  "Maya": "Maya",
  "3ds Max": "3ds Max",
  "Houdini": "Houdini",
  
  // Actions and descriptions
  "点击前往淘宝购买": "Click to Purchase on Taobao",
  "点击直接购买": "Click to Purchase Directly",
  "点我查看购买步骤说明": "Click to View Purchase Instructions",
  "支持支付宝/微信": "Supports Alipay/WeChat",
  "下载地址购买后可见": "Download link visible after purchase",
  "百度网盘点击下载": "Click to Download from Baidu Netdisk",
  "提取密码": "Extraction Code",
  "可以直接使用": "Can be used directly",
  "可以修改": "Can be modified",
  "可以快速生成": "Can quickly generate",
  "支持": "Supports",
  "包含": "Includes",
  "超过": "Over",
  "更新": "Update",
  "说明": "Instructions",
  "步骤": "Steps",
  "功能": "Features",
  "特点": "Features",
  "优势": "Advantages",
  "适用": "Suitable for",
  "要求": "Requirements",
  "需求": "Requirements",
  "安装": "Installation",
  "破解": "Crack",
  "序列号": "Serial Number",
  "激活": "Activate",
  "使用方法": "Usage Instructions",
  "使用简单": "Easy to use",
  "处理": "Process",
  "处理方式": "Processing Method",
  
  // Descriptions
  "不需要第三方插件": "No third-party plugins required",
  "中文版/英文版": "Chinese/English versions",
  "Win/Mac": "Win/Mac",
  "高清": "HD",
  "不包含背景音乐": "Does not include background music",
  "背景音乐": "Background Music",
  "永久破解": "Permanent Crack",
  "不会失效": "Will not expire",
  "压缩包": "Compressed Package",
  "文件": "File",
  "链接": "Link",
  "密码": "Password",
  "解压": "Extract",
  "下载": "Download",
  "购买": "Purchase",
  
  // Common phrases
  "相关推荐": "Related Recommendations",
  "部分元素预览介绍": "Partial Element Preview Introduction",
  "更新说明": "Update Instructions",
  "更新到": "Updated to",
  "增加": "Added",
  "类型": "Types",
  "种": "Types",
  "所有": "All",
  "任何": "Any",
  "其他": "Other",
  "或者": "Or",
  "和": "And",
  "与": "And",
  "的": " ",
  "是": "Is",
  "在": "In",
  "上": "On",
  "下": "Under",
  "左": "Left",
  "右": "Right",
  "前": "Front",
  "后": "Back",
  "中": "Middle",
  "内": "Inside",
  "外": "Outside",
  "里": "Inside",
  "间": "Between",
  "间": "Between",
  "间": "Between",
  
  // Numbers and units
  "1920×1080": "1920×1080",
  "CC": "CC",
  "CC2020": "CC 2020",
  "CC 2020": "CC 2020",
  "2014": "2014",
  "2014.2": "2014.2",
  "MB": "MB",
  "GB": "GB",
  "KB": "KB",
  "像素": "Pixels",
  "像素": "Pixels",
  
  // Punctuation and symbols
  "：": ": ",
  ":": ": ",
  "。": ". ",
  "，": ", ",
  "、": ", ",
  "；": "; ",
  "；": "; ",
  "（": " (",
  "）": ") ",
  "(": " (",
  ")": ") ",
  "【": " [",
  "】": "] ",
  "[": " [",
  "]": "] ",
  "！": "! ",
  "!": "! ",
  "？": "? ",
  "?": "? ",
  "·": "• ",
  "•": "• ",
  "-": "- ",
  "—": "— ",
  "——": "— ",
  "￥": "¥",
  "$": "$",
  "％": "%",
  "%": "%",
  
  // Common verbs
  "制作": "Create",
  "生成": "Generate",
  "修改": "Modify",
  "调整": "Adjust",
  "设置": "Set",
  "应用": "Apply",
  "使用": "Use",
  "打开": "Open",
  "关闭": "Close",
  "保存": "Save",
  "加载": "Load",
  "导入": "Import",
  "导出": "Export",
  "渲染": "Render",
  "播放": "Play",
  "暂停": "Pause",
  "停止": "Stop",
  "加速": "Speed up",
  "减速": "Slow down",
  "复制": "Copy",
  "粘贴": "Paste",
  "删除": "Delete",
  "重命名": "Rename",
  "搜索": "Search",
  "查找": "Find",
  "替换": "Replace",
  "选择": "Select",
  "取消": "Cancel",
  "确认": "Confirm",
  "完成": "Complete",
  "开始": "Start",
  "结束": "End",
  "继续": "Continue",
  "返回": "Return",
  "前进": "Forward",
  "后退": "Back",
  "刷新": "Refresh",
  "重载": "Reload",
  "重启": "Restart",
  "升级": "Upgrade",
  "降级": "Downgrade",
  "优化": "Optimize",
  "修复": "Fix",
  "改善": "Improve",
  "增强": "Enhance",
  "扩展": "Expand",
  "缩小": "Shrink",
  "放大": "Zoom in",
  "缩小": "Zoom out",
  "旋转": "Rotate",
  "翻转": "Flip",
  "镜像": "Mirror",
  "对称": "Symmetric",
  "对齐": "Align",
  "分布": "Distribute",
  "锁定": "Lock",
  "解锁": "Unlock",
  "隐藏": "Hide",
  "显示": "Show",
  "透明": "Transparent",
  "不透明": "Opaque",
  "混合": "Blend",
  "叠加": "Overlay",
  "滤镜": "Filter",
  "特效": "Special Effects",
  "粒子": "Particles",
  "光线": "Light Rays",
  "阴影": "Shadows",
  "高光": "Highlights",
  "反射": "Reflection",
  "折射": "Refraction",
  "焦散": "Caustics",
  "模糊": "Blur",
  "锐化": "Sharpen",
  "噪点": "Noise",
  "纹理": "Texture",
  "材质": "Material",
  "贴图": "Texture Map",
  "法线": "Normal",
  "置换": "Displacement",
  "凹凸": "Bump",
  "环境": "Environment",
  "光照": "Lighting",
  "摄像机": "Camera",
  "视角": "View",
  "视角": "Perspective",
  "正交": "Orthographic",
  "透视": "Perspective",
  "渲染": "Render",
  "输出": "Output",
  "格式": "Format",
  "编码": "Encoding",
  "压缩": "Compression",
  "解码": "Decoding",
  "编码器": "Encoder",
  "解码器": "Decoder",
  "容器": "Container",
  "比特率": "Bitrate",
  "帧率": "Frame Rate",
  "关键帧": "Keyframe",
  "时间轴": "Timeline",
  "图层": "Layer",
  "蒙版": "Mask",
  "遮罩": "Matte",
  "路径": "Path",
  "形状": "Shape",
  "文字": "Text",
  "字体": "Font",
  "样式": "Style",
  "主题": "Theme",
  "模板": "Template",
  "预设": "Preset",
  "资源": "Resources",
  "资产": "Assets",
  "库": "Library",
  "面板": "Panel",
  "菜单": "Menu",
  "工具": "Tools",
  "工具栏": "Toolbar",
  "属性": "Properties",
  "参数": "Parameters",
  "表达式": "Expression",
  "脚本": "Script",
  "插件": "Plugin",
  "扩展": "Extension",
  "模块": "Module",
  "组件": "Component",
  "功能": "Function",
  "特性": "Feature",
  "选项": "Options",
  "设置": "Settings",
  "配置": "Configuration",
  "首选项": "Preferences",
  "快捷键": "Hotkey",
  "命令": "Command",
  "操作": "Operation",
  "流程": "Workflow",
  "项目": "Project",
  "场景": "Scene",
  "合成": "Composition",
  "序列": "Sequence",
  "片段": "Clip",
  "剪辑": "Clip",
  "轨道": "Track",
  "频道": "Channel",
  "音频": "Audio",
  "视频": "Video",
  "图像": "Image",
  "图片": "Image",
  "照片": "Photo",
  "图表": "Chart",
  "表格": "Table",
  "列表": "List",
  "网格": "Grid",
  "节点": "Node",
  "连接": "Connection",
  "输入": "Input",
  "输出": "Output",
  "接口": "Interface",
  "端口": "Port",
  "数据": "Data",
  "信息": "Information",
  "内容": "Content",
  "媒体": "Media",
  "播放列表": "Playlist",
  "时间码": "Timecode",
  "标记": "Marker",
  "注释": "Annotation",
  "评论": "Comment",
  "反馈": "Feedback",
  "报告": "Report",
  "日志": "Log",
  "错误": "Error",
  "警告": "Warning",
  "通知": "Notification",
  "提示": "Hint",
  "帮助": "Help",
  "文档": "Documentation",
  "手册": "Manual",
  "指南": "Guide",
  "教程": "Tutorial",
  "示例": "Example",
  "案例": "Case",
  "演示": "Demo",
  "样本": "Sample",
  "测试": "Test",
  "调试": "Debug",
  "性能": "Performance",
  "速度": "Speed",
  "质量": "Quality",
  "兼容性": "Compatibility",
  "稳定性": "Stability",
  "可靠性": "Reliability",
  "安全性": "Security",
  "隐私": "Privacy",
  "许可": "License",
  "授权": "Authorization",
  "版权": "Copyright",
  "商标": "Trademark",
  "专利": "Patent",
  "开源": "Open Source",
  "免费": "Free",
  "付费": "Paid",
  "商业": "Commercial",
  "专业": "Professional",
  "企业": "Enterprise",
  "个人": "Personal",
  "教育": "Education",
  "学生": "Student",
  "教师": "Teacher",
  "开发者": "Developer",
  "用户": "User",
  "客户": "Customer",
  "支持": "Support",
  "服务": "Service",
  "维护": "Maintenance",
  "更新": "Update",
  "升级": "Upgrade",
  "补丁": "Patch",
  "修复": "Fix",
  "热修复": "Hotfix",
  "版本": "Version",
  "发布": "Release",
  "发行": "Release",
  "公告": "Announcement",
  "新闻": "News",
  "博客": "Blog",
  "论坛": "Forum",
  "社区": "Community",
  "社交": "Social",
  "网络": "Network",
  "互联网": "Internet",
  "网站": "Website",
  "网页": "Web Page",
  "平台": "Platform",
  "系统": "System",
  "操作系统": "Operating System",
  "硬件": "Hardware",
  "软件": "Software",
  "程序": "Program",
  "应用": "Application",
  "应用程序": "Application",
  "桌面": "Desktop",
  "移动": "Mobile",
  "云端": "Cloud",
  "服务器": "Server",
  "数据库": "Database",
  "存储": "Storage",
  "缓存": "Cache",
  "内存": "Memory",
  "硬盘": "Hard Drive",
  "固态": "SSD",
  "机械": "HDD",
  "网络": "Network",
  "连接": "Connection",
  "带宽": "Bandwidth",
  "延迟": "Latency",
  "吞吐量": "Throughput",
  "协议": "Protocol",
  "标准": "Standard",
  "规范": "Specification",
  "架构": "Architecture",
  "设计": "Design",
  "界面": "Interface",
  "交互": "Interaction",
  "体验": "Experience",
  "用户界面": "User Interface",
  "用户体验": "User Experience",
  "响应式": "Responsive",
  "自适应": "Adaptive",
  "多语言": "Multilingual",
  "国际化": "Internationalization",
  "本地化": "Localization",
  "翻译": "Translation",
  "语言": "Language",
  "英语": "English",
  "中文": "Chinese",
  "日语": "Japanese",
  "韩语": "Korean",
  "法语": "French",
  "德语": "German",
  "西班牙语": "Spanish",
  "意大利语": "Italian",
  "俄语": "Russian",
  "阿拉伯语": "Arabic",
  "葡萄牙语": "Portuguese",
  "荷兰语": "Dutch",
  "瑞典语": "Swedish",
  "丹麦语": "Danish",
  "挪威语": "Norwegian",
  "芬兰语": "Finnish",
  "波兰语": "Polish",
  "捷克语": "Czech",
  "匈牙利语": "Hungarian",
  "土耳其语": "Turkish",
  "泰语": "Thai",
  "越南语": "Vietnamese",
  "印度语": "Hindi",
  "印尼语": "Indonesian",
  "马来语": "Malay",
  "菲律宾语": "Filipino",
  "希伯来语": "Hebrew",
  "希腊语": "Greek",
  "拉丁语": "Latin",
  "世界": "World",
  "全球": "Global",
  "国际": "International",
  "国家": "Country",
  "地区": "Region",
  "城市": "City",
  "省份": "Province",
  "州": "State",
  "县": "County",
  "区": "District",
  "街道": "Street",
  "地址": "Address",
  "邮编": "Postal Code",
  "电话": "Phone",
  "邮箱": "Email",
  "网站": "Website",
  "域名": "Domain",
  "主机": "Host",
  "服务器": "Server",
  "客户端": "Client",
  "浏览器": "Browser",
  "搜索引擎": "Search Engine",
  "广告": "Advertisement",
  "营销": "Marketing",
  "推广": "Promotion",
  "品牌": "Brand",
  "公司": "Company",
  "企业": "Enterprise",
  "组织": "Organization",
  "团队": "Team",
  "部门": "Department",
  "职位": "Position",
  "角色": "Role",
  "权限": "Permission",
  "认证": "Authentication",
  "授权": "Authorization",
  "加密": "Encryption",
  "解密": "Decryption",
  "签名": "Signature",
  "证书": "Certificate",
  "密钥": "Key",
  "公钥": "Public Key",
  "私钥": "Private Key",
  "算法": "Algorithm",
  "哈希": "Hash",
  "散列": "Hash",
  "校验": "Checksum",
  "验证": "Verification",
  "审计": "Audit",
  "监控": "Monitoring",
  "日志": "Log",
  "追踪": "Tracking",
  "分析": "Analytics",
  "统计": "Statistics",
  "报告": "Report",
  "仪表板": "Dashboard",
  "图表": "Chart",
  "图形": "Graph",
  "表格": "Table",
  "列表": "List",
  "树": "Tree",
  "图": "Diagram",
  "流程图": "Flowchart",
  "架构图": "Architecture Diagram",
  "网络图": "Network Diagram",
  "拓扑图": "Topology Diagram",
  "思维导图": "Mind Map",
  "甘特图": "Gantt Chart",
  "时间线": "Timeline",
  "日历": "Calendar",
  "计划": "Plan",
  "任务": "Task",
  "项目": "Project",
  "里程碑": "Milestone",
  "进度": "Progress",
  "状态": "Status",
  "优先级": "Priority",
  "风险": "Risk",
  "问题": "Issue",
  "缺陷": "Defect",
  "错误": "Bug",
  "故障": "Failure",
  "异常": "Exception",
  "警告": "Warning",
  "通知": "Notification",
  "提醒": "Reminder",
  "警报": "Alert",
  "事件": "Event",
  "活动": "Activity",
  "会议": "Meeting",
  "培训": "Training",
  "课程": "Course",
  "学习": "Learning",
  "教育": "Education",
  "考试": "Exam",
  "测试": "Test",
  "评估": "Assessment",
  "认证": "Certification",
  "资格": "Qualification",
  "证书": "Certificate",
  "学位": "Degree",
  "学历": "Education",
  "经验": "Experience",
  "技能": "Skill",
  "能力": "Ability",
  "天赋": "Talent",
  "兴趣": "Interest",
  "爱好": "Hobby",
  "娱乐": "Entertainment",
  "游戏": "Game",
  "电影": "Movie",
  "电视": "TV",
  "音乐": "Music",
  "书籍": "Book",
  "文章": "Article",
  "博客": "Blog",
  "新闻": "News",
  "杂志": "Magazine",
  "报纸": "Newspaper",
  "广播": "Radio",
  "播客": "Podcast",
  "视频": "Video",
  "直播": "Live",
  "点播": "On-demand",
  "流媒体": "Streaming",
  "下载": "Download",
  "上传": "Upload",
  "分享": "Share",
  "转发": "Forward",
  "收藏": "Favorite",
  "点赞": "Like",
  "评论": "Comment",
  "关注": "Follow",
  "粉丝": "Follower",
  "订阅": "Subscribe",
  "推送": "Push",
  "通知": "Notification",
  "消息": "Message",
  "邮件": "Email",
  "短信": "SMS",
  "电话": "Call",
  "视频通话": "Video Call",
  "语音通话": "Voice Call",
  "会议": "Conference",
  "聊天": "Chat",
  "群聊": "Group Chat",
  "私聊": "Private Chat",
  "文件": "File",
  "文档": "Document",
  "图片": "Image",
  "音频": "Audio",
  "视频": "Video",
  "压缩包": "Archive",
  "备份": "Backup",
  "同步": "Sync",
  "恢复": "Restore",
  "删除": "Delete",
  "回收站": "Recycle Bin",
  "垃圾箱": "Trash",
  "清空": "Empty",
  "搜索": "Search",
  "查找": "Find",
  "替换": "Replace",
  "排序": "Sort",
  "过滤": "Filter",
  "分组": "Group",
  "标签": "Tag",
  "分类": "Category",
  "目录": "Directory",
  "文件夹": "Folder",
  "路径": "Path",
  "链接": "Link",
  "快捷方式": "Shortcut",
  "书签": "Bookmark",
  "历史": "History",
  "最近": "Recent",
  "常用": "Frequent",
  "收藏夹": "Favorites",
  "下载": "Downloads",
  "上传": "Uploads",
  "桌面": "Desktop",
  "文档": "Documents",
  "图片": "Pictures",
  "音乐": "Music",
  "视频": "Videos",
  "回收站": "Recycle Bin",
  "网络": "Network",
  "网上邻居": "Network Places",
  "控制面板": "Control Panel",
  "设置": "Settings",
  "选项": "Options",
  "首选项": "Preferences",
  "个性化": "Personalization",
  "主题": "Theme",
  "壁纸": "Wallpaper",
  "屏幕保护": "Screensaver",
  "锁屏": "Lock Screen",
  "登录": "Login",
  "注销": "Logout",
  "切换用户": "Switch User",
  "睡眠": "Sleep",
  "休眠": "Hibernate",
  "重启": "Restart",
  "关机": "Shutdown",
  "电源": "Power",
  "电池": "Battery",
  "节能": "Power Saving",
  "性能": "Performance",
  "安全": "Security",
  "隐私": "Privacy",
  "防火墙": "Firewall",
  "杀毒": "Antivirus",
  "恶意软件": "Malware",
  "病毒": "Virus",
  "木马": "Trojan",
  "蠕虫": "Worm",
  "广告软件": "Adware",
  "间谍软件": "Spyware",
  "勒索软件": "Ransomware",
  "网络钓鱼": "Phishing",
  "黑客": "Hacker",
  "攻击": "Attack",
  "防御": "Defense",
  "漏洞": "Vulnerability",
  "补丁": "Patch",
  "更新": "Update",
  "升级": "Upgrade",
  "回滚": "Rollback",
  "恢复": "Restore",
  "备份": "Backup",
  "镜像": "Image",
  "克隆": "Clone",
  "迁移": "Migration",
  "虚拟化": "Virtualization",
  "容器": "Container",
  "云": "Cloud",
  "服务": "Service",
  "平台": "Platform",
  "基础设施": "Infrastructure",
  "计算": "Computing",
  "存储": "Storage",
  "网络": "Network",
  "数据库": "Database",
  "中间件": "Middleware",
  "应用": "Application",
  "开发": "Development",
  "测试": "Testing",
  "部署": "Deployment",
  "运维": "Operations",
  "监控": "Monitoring",
  "日志": "Logging",
  "分析": "Analytics",
  "人工智能": "Artificial Intelligence",
  "机器学习": "Machine Learning",
  "深度学习": "Deep Learning",
  "神经网络": "Neural Network",
  "自然语言处理": "Natural Language Processing",
  "计算机视觉": "Computer Vision",
  "语音识别": "Speech Recognition",
  "图像识别": "Image Recognition",
  "模式识别": "Pattern Recognition",
  "数据挖掘": "Data Mining",
  "大数据": "Big Data",
  "云计算": "Cloud Computing",
  "边缘计算": "Edge Computing",
  "物联网": "Internet of Things",
  "区块链": "Blockchain",
  "加密货币": "Cryptocurrency",
  "比特币": "Bitcoin",
  "以太坊": "Ethereum",
  "智能合约": "Smart Contract",
  "去中心化": "Decentralized",
  "分布式": "Distributed",
  "共识": "Consensus",
  "挖矿": "Mining",
  "钱包": "Wallet",
  "交易所": "Exchange",
  "交易": "Transaction",
  "支付": "Payment",
  "结算": "Settlement",
  "清算": "Clearing",
  "对账": "Reconciliation",
  "审计": "Audit",
  "合规": "Compliance",
  "监管": "Regulation",
  "法律": "Law",
  "法规": "Regulation",
  "政策": "Policy",
  "标准": "Standard",
  "规范": "Specification",
  "认证": "Certification",
  "资质": "Qualification",
  "许可": "License",
  "执照": "License",
  "专利": "Patent",
  "商标": "Trademark",
  "版权": "Copyright",
  "知识产权": "Intellectual Property",
  "开源": "Open Source",
  "自由软件": "Free Software",
  "公共领域": "Public Domain",
  "许可证": "License",
  "协议": "Agreement",
  "合同": "Contract",
  "条款": "Terms",
  "条件": "Conditions",
  "隐私政策": "Privacy Policy",
  "服务条款": "Terms of Service",
  "用户协议": "User Agreement",
  "最终用户许可协议": "End User License Agreement",
  "商业许可协议": "Commercial License Agreement",
  "开源许可协议": "Open Source License Agreement",
  "贡献者许可协议": "Contributor License Agreement",
  "专利许可协议": "Patent License Agreement",
  "商标许可协议": "Trademark License Agreement",
  "版权许可协议": "Copyright License Agreement",
  "软件许可协议": "Software License Agreement",
  "最终用户": "End User",
  "开发者": "Developer",
  "贡献者": "Contributor",
  "维护者": "Maintainer",
  "用户": "User",
  "客户": "Customer",
  "供应商": "Supplier",
  "合作伙伴": "Partner",
  "代理商": "Agent",
  "经销商": "Distributor",
  "零售商": "Retailer",
  "批发商": "Wholesaler",
  "制造商": "Manufacturer",
  "生产商": "Producer",
  "服务商": "Service Provider",
  "平台商": "Platform Provider",
  "技术商": "Technology Provider",
  "解决方案商": "Solution Provider",
  "集成商": "Integrator",
  "咨询商": "Consultant",
  "培训商": "Trainer",
  "认证机构": "Certification Authority",
  "监管机构": "Regulatory Authority",
  "行业协会": "Industry Association",
  "标准组织": "Standards Organization",
  "开源组织": "Open Source Organization",
  "基金会": "Foundation",
  "社区": "Community",
  "论坛": "Forum",
  "博客": "Blog",
  "维基": "Wiki",
  "文档": "Documentation",
  "教程": "Tutorial",
  "示例": "Example",
  "案例": "Case Study",
  "最佳实践": "Best Practice",
  "模式": "Pattern",
  "架构": "Architecture",
  "设计模式": "Design Pattern",
  "架构模式": "Architecture Pattern",
  "企业架构": "Enterprise Architecture",
  "解决方案架构": "Solution Architecture",
  "系统架构": "System Architecture",
  "软件架构": "Software Architecture",
  "技术架构": "Technical Architecture",
  "业务架构": "Business Architecture",
  "数据架构": "Data Architecture",
  "应用架构": "Application Architecture",
  "基础设施架构": "Infrastructure Architecture",
  "云架构": "Cloud Architecture",
  "微服务架构": "Microservices Architecture",
  "无服务器架构": "Serverless Architecture",
  "容器架构": "Container Architecture",
  "DevOps": "DevOps",
  "持续集成": "Continuous Integration",
  "持续部署": "Continuous Deployment",
  "持续交付": "Continuous Delivery",
  "自动化": "Automation",
  "编排": "Orchestration",
  "配置管理": "Configuration Management",
  "基础设施即代码": "Infrastructure as Code",
  "监控告警": "Monitoring and Alerting",
  "日志分析": "Log Analysis",
  "性能优化": "Performance Optimization",
  "故障排查": "Troubleshooting",
  "容量规划": "Capacity Planning",
  "灾难恢复": "Disaster Recovery",
  "业务连续性": "Business Continuity",
  "高可用性": "High Availability",
  "可扩展性": "Scalability",
  "弹性": "Elasticity",
  "容错": "Fault Tolerance",
  "冗余": "Redundancy",
  "备份": "Backup",
  "恢复": "Recovery",
  "复制": "Replication",
  "同步": "Synchronization",
  "异步": "Asynchronous",
  "并发": "Concurrency",
  "并行": "Parallel",
  "分布式": "Distributed",
  "集群": "Cluster",
  "负载均衡": "Load Balancing",
  "反向代理": "Reverse Proxy",
  "正向代理": "Forward Proxy",
  "网关": "Gateway",
  "路由器": "Router",
  "交换机": "Switch",
  "防火墙": "Firewall",
  "入侵检测": "Intrusion Detection",
  "入侵防御": "Intrusion Prevention",
  "漏洞扫描": "Vulnerability Scanning",
  "安全审计": "Security Audit",
  "渗透测试": "Penetration Testing",
  "安全加固": "Security Hardening",
  "加密": "Encryption",
  "解密": "Decryption",
  "签名": "Signature",
  "验签": "Signature Verification",
  "认证": "Authentication",
  "授权": "Authorization",
  "访问控制": "Access Control",
  "身份管理": "Identity Management",
  "单点登录": "Single Sign-On",
  "多因素认证": "Multi-Factor Authentication",
  "生物识别": "Biometric",
  "密码": "Password",
  "密钥": "Key",
  "证书": "Certificate",
  "令牌": "Token",
  "会话": "Session",
  "Cookie": "Cookie",
  "JWT": "JWT",
  "OAuth": "OAuth",
  "OpenID": "OpenID",
  "SAML": "SAML",
  "LDAP": "LDAP",
  "Kerberos": "Kerberos",
  "PKI": "PKI",
  "SSL": "SSL",
  "TLS": "TLS",
  "HTTPS": "HTTPS",
  "HTTP": "HTTP",
  "FTP": "FTP",
  "SFTP": "SFTP",
  "SCP": "SCP",
  "Telnet": "Telnet",
  "SSH": "SSH",
  "RDP": "RDP",
  "VNC": "VNC",
  "VPN": "VPN",
  "IPSec": "IPSec",
  "GRE": "GRE",
  "MPLS": "MPLS",
  "SD-WAN": "SD-WAN",
  "5G": "5G",
  "WiFi": "WiFi",
  "蓝牙": "Bluetooth",
  "NFC": "NFC",
  "RFID": "RFID",
  "二维码": "QR Code",
  "条形码": "Barcode",
  "传感器": "Sensor",
  "执行器": "Actuator",
  "控制器": "Controller",
  "网关": "Gateway",
  "协议": "Protocol",
  "标准": "Standard",
  "规范": "Specification",
  "API": "API",
  "SDK": "SDK",
  "CLI": "CLI",
  "GUI": "GUI",
  "UI": "UI",
  "UX": "UX",
  "前端": "Frontend",
  "后端": "Backend",
  "全栈": "Full Stack",
  "移动端": "Mobile",
  "桌面端": "Desktop",
  "Web端": "Web",
  "服务端": "Server-side",
  "客户端": "Client-side",
  "浏览器端": "Browser-side",
  "小程序": "Mini Program",
  "公众号": "Official Account",
  "APP": "App",
  "应用": "Application",
  "网站": "Website",
  "网页": "Web Page",
  "门户": "Portal",
  "平台": "Platform",
  "系统": "System",
  "软件": "Software",
  "程序": "Program",
  "代码": "Code",
  "源码": "Source Code",
  "编译": "Compile",
  "构建": "Build",
  "打包": "Package",
  "发布": "Release",
  "部署": "Deploy",
  "运行": "Run",
  "执行": "Execute",
  "调试": "Debug",
  "测试": "Test",
  "单元测试": "Unit Test",
  "集成测试": "Integration Test",
  "系统测试": "System Test",
  "验收测试": "Acceptance Test",
  "自动化测试": "Automated Testing",
  "手动测试": "Manual Testing",
  "回归测试": "Regression Testing",
  "冒烟测试": "Smoke Testing",
  "压力测试": "Stress Testing",
  "负载测试": "Load Testing",
  "性能测试": "Performance Testing",
  "安全测试": "Security Testing",
  "兼容性测试": "Compatibility Testing",
  "可用性测试": "Usability Testing",
  "探索性测试": "Exploratory Testing",
  "测试用例": "Test Case",
  "测试套件": "Test Suite",
  "测试计划": "Test Plan",
  "测试报告": "Test Report",
  "缺陷报告": "Defect Report",
  "错误日志": "Error Log",
  "调试信息": "Debug Information",
  "日志": "Log",
  "监控": "Monitoring",
  "告警": "Alert",
  "指标": "Metrics",
  "度量": "Metrics",
  "KPI": "KPI",
  "SLA": "SLA",
  "SLO": "SLO",
  "SLI": "SLI",
  "可用性": "Availability",
  "可靠性": "Reliability",
  "性能": "Performance",
  "延迟": "Latency",
  "吞吐量": "Throughput",
  "错误率": "Error Rate",
  "响应时间": "Response Time",
  "处理时间": "Processing Time",
  "等待时间": "Wait Time",
  "CPU使用率": "CPU Usage",
  "内存使用率": "Memory Usage",
  "磁盘使用率": "Disk Usage",
  "网络使用率": "Network Usage",
  "带宽": "Bandwidth",
  "流量": "Traffic",
  "连接数": "Connection Count",
  "并发数": "Concurrency",
  "请求": "Request",
  "响应": "Response",
  "状态码": "Status Code",
  "头部": "Header",
  "主体": "Body",
  "负载": "Payload",
  "参数": "Parameter",
  "查询": "Query",
  "路径": "Path",
  "片段": "Fragment",
  "锚点": "Anchor",
  "表单": "Form",
  "输入": "Input",
  "输出": "Output",
  "上传": "Upload",
  "下载": "Download",
  "流": "Stream",
  "缓冲": "Buffer",
  "缓存": "Cache",
  "队列": "Queue",
  "栈": "Stack",
  "堆": "Heap",
  "链表": "Linked List",
  "数组": "Array",
  "哈希表": "Hash Table",
  "树": "Tree",
  "图": "Graph",
  "排序": "Sorting",
  "搜索": "Searching",
  "遍历": "Traversal",
  "递归": "Recursion",
  "迭代": "Iteration",
  "循环": "Loop",
  "条件": "Condition",
  "分支": "Branch",
  "跳转": "Jump",
  "异常": "Exception",
  "错误": "Error",
  "断言": "Assertion",
  "日志": "Logging",
  "调试": "Debugging",
  "分析": "Profiling",
  "优化": "Optimization",
  "重构": "Refactoring",
  "设计": "Design",
  "架构": "Architecture",
  "模式": "Pattern",
  "原则": "Principle",
  "方法": "Method",
  "范式": "Paradigm",
  "面向对象": "Object-Oriented",
  "函数式": "Functional",
  "声明式": "Declarative",
  "命令式": "Imperative",
  "逻辑式": "Logic",
  "并发式": "Concurrent",
  "并行式": "Parallel",
  "分布式": "Distributed",
  " reactive": "Reactive",
  "事件驱动": "Event-Driven",
  "微服务": "Microservices",
  "无服务器": "Serverless",
  "容器化": "Containerization",
  "编排": "Orchestration",
  "自动化": "Automation",
  "DevOps": "DevOps",
  "CI/CD": "CI/CD",
  "持续集成": "Continuous Integration",
  "持续部署": "Continuous Deployment",
  "持续交付": "Continuous Delivery",
  "基础设施即代码": "Infrastructure as Code",
  "配置管理": "Configuration Management",
  "监控告警": "Monitoring and Alerting",
  "日志分析": "Log Analysis",
  "性能优化": "Performance Optimization",
  "故障排查": "Troubleshooting",
  "容量规划": "Capacity Planning",
  "灾难恢复": "Disaster Recovery",
  "业务连续性": "Business Continuity",
  "高可用性": "High Availability",
  "可扩展性": "Scalability",
  "弹性": "Elasticity",
  "容错": "Fault Tolerance",
  "冗余": "Redundancy",
  "备份": "Backup",
  "恢复": "Recovery",
  "复制": "Replication",
  "同步": "Synchronization",
  "异步": "Asynchronous",
  "并发": "Concurrency",
  "并行": "Parallel",
  "分布式": "Distributed",
  "集群": "Cluster",
  "负载均衡": "Load Balancing",
  "反向代理": "Reverse Proxy",
  "正向代理": "Forward Proxy",
  "网关": "Gateway",
  "路由器": "Router",
  "交换机": "Switch",
  "防火墙": "Firewall",
  "入侵检测": "Intrusion Detection",
  "入侵防御": "Intrusion Prevention",
  "漏洞扫描": "Vulnerability Scanning",
  "安全审计": "Security Audit",
  "渗透测试": "Penetration Testing",
  "安全加固": "Security Hardening",
  "加密": "Encryption",
  "解密": "Decryption",
  "签名": "Signature",
  "验签": "Signature Verification",
  "认证": "Authentication",
  "授权": "Authorization",
  "访问控制": "Access Control",
  "身份管理": "Identity Management",
  "单点登录": "Single Sign-On",
  "多因素认证": "Multi-Factor Authentication",
  "生物识别": "Biometric",
  "密码": "Password",
  "密钥": "Key",
  "证书": "Certificate",
  "令牌": "Token",
  "会话": "Session",
  "Cookie": "Cookie",
  "JWT": "JWT",
  "OAuth": "OAuth",
  "OpenID": "OpenID",
  "SAML": "SAML",
  "LDAP": "LDAP",
  "Kerberos": "Kerberos",
  "PKI": "PKI",
  "SSL": "SSL",
  "TLS": "TLS",
  "HTTPS": "HTTPS",
  "HTTP": "HTTP",
  "FTP": "FTP",
  "SFTP": "SFTP",
  "SCP": "SCP",
  "Telnet": "Telnet",
  "SSH": "SSH",
  "RDP": "RDP",
  "VNC": "VNC",
  "VPN": "VPN",
  "IPSec": "IPSec",
  "GRE": "GRE",
  "MPLS": "MPLS",
  "SD-WAN": "SD-WAN",
  "5G": "5G",
  "WiFi": "WiFi",
  "蓝牙": "Bluetooth",
  "NFC": "NFC",
  "RFID": "RFID",
  "二维码": "QR Code",
  "条形码": "Barcode",
  "传感器": "Sensor",
  "执行器": "Actuator",
  "控制器": "Controller",
  "网关": "Gateway",
  "协议": "Protocol",
  "标准": "Standard",
  "规范": "Specification"
};

// Enhanced translation function with better handling
function translateText(text) {
  if (!text) return '';
  
  // Convert to string if it's not already
  let translated = String(text);
  
  // Apply dictionary translations
  for (const [chinese, english] of Object.entries(translationDict)) {
    // Create a global regex for each term
    const regex = new RegExp(chinese.replace(/[.*+?^${}()|[\\]\\/]/g, '\\$&'), 'g');
    translated = translated.replace(regex, english);
  }
  
  // Clean up extra spaces
  translated = translated.replace(/\\s+/g, ' ').trim();
  
  return translated;
}

// Function to extract content from HTML
function extractContent($) {
  // Extract title
  let title = $('h1.post-title').text().trim() || $('title').text().split('|')[0].trim();
  
  // Extract meta description
  const description = $('meta[name="description"]').attr('content') || '';
  
  // Extract keywords
  const keywords = $('meta[name="keywords"]').attr('content') || '';
  
  // Extract first image
  let firstImage = $('.entry img').first().attr('data-src') || $('.entry img').first().attr('src') || '';
  
  // Handle lazy loading images
  if (firstImage && firstImage.includes('data:image/gif')) {
    firstImage = '';
  }
  
  // Extract download links with more precision
  const downloadLinks = [];
  
  // Look for purchase/download buttons with better filtering
  $('a').each((i, elem) => {
    const linkText = $(elem).text().trim() || $(elem).find('.mb-text').text().trim();
    const linkUrl = $(elem).attr('href');
    
    if (linkUrl && linkText) {
      // Check if it's a download link or purchase link
      if (linkText.includes('购买') || linkText.includes('Purchase') || 
          linkText.includes('下载') || linkText.includes('Download') ||
          linkUrl.includes('pan.baidu.com') || linkUrl.includes('taobao.com') ||
          linkUrl.includes('item.taobao.com') || $(elem).hasClass('maxbutton') ||
          $(elem).hasClass('xh-btn')) {
        
        // Try to find password if it's a Baidu link
        let password = '';
        if (linkUrl.includes('pan.baidu.com')) {
          // Look for password in nearby text
          const parentText = $(elem).closest('p').text() || $(elem).parent().text();
          const pwdMatch = parentText.match(/密码[:：]?\\s*([a-zA-Z0-9]+)/);
          if (pwdMatch) {
            password = pwdMatch[1];
          }
        }
        
        // Avoid duplicates
        const exists = downloadLinks.some(link => link.url === linkUrl);
        if (!exists) {
          downloadLinks.push({
            text: linkText,
            url: linkUrl,
            password: password
          });
        }
      }
    }
  });
  
  // Extract main content - look for the main article content
  let content = '';
  const contentSelectors = ['.entry-inner', '.entry', '.post-content'];
  
  for (const selector of contentSelectors) {
    const elements = $(selector);
    if (elements.length > 0) {
      elements.each((i, elem) => {
        content += $(elem).html();
      });
      break;
    }
  }
  
  return {
    title,
    description,
    keywords,
    firstImage,
    downloadLinks,
    content
  };
}

// Function to create SEO-optimized title
function createSeoTitle(originalTitle) {
  // Translate the title first
  let translatedTitle = translateText(originalTitle);
  
  // Add descriptive terms for better SEO if needed
  if (translatedTitle.includes("AE Template") && !translatedTitle.includes("After Effects")) {
    translatedTitle = translatedTitle.replace("AE Template", "After Effects Template");
  }
  
  if (translatedTitle.includes("AE Script") && !translatedTitle.includes("After Effects")) {
    translatedTitle = translatedTitle.replace("AE Script", "After Effects Script");
  }
  
  return translatedTitle;
}

// Function to create SEO-optimized description
function createSeoDescription(originalDescription) {
  // Translate and limit to 160 characters for SEO
  let translatedDesc = translateText(originalDescription);
  return translatedDesc.substring(0, 160);
}

// Function to generate SEO keywords
function generateSeoKeywords(originalKeywords) {
  // Translate keywords
  let translatedKeywords = translateText(originalKeywords);
  
  // Split and clean keywords
  const keywordsArray = translatedKeywords
    .split(',')
    .map(k => k.trim())
    .filter(k => k)
    .map(k => `"${k}"`);
  
  // Add some generic SEO keywords
  const genericKeywords = [
    "\"After Effects\"",
    "\"Motion Graphics\"",
    "\"Video Editing\"",
    "\"Creative Tools\"",
    "\"Animation Assets\"",
    "\"AE Templates\"",
    "\"Design Resources\"",
    "\"Professional Tools\""
  ];
  
  // Combine and deduplicate, limit to 10 keywords
  const allKeywords = [...new Set([...keywordsArray, ...genericKeywords])].slice(0, 10);
  
  return allKeywords;
}

// Function to convert HTML content to Markdown with SEO optimization
function convertToSeoMarkdown(data, slug) {
  // Create SEO-friendly title
  const seoTitle = createSeoTitle(data.title);
  
  // Create SEO-friendly description
  const seoDescription = createSeoDescription(data.description);
  
  // Generate SEO keywords
  const seoKeywords = generateSeoKeywords(data.keywords);
  
  // Create frontmatter
  let markdown = "---\n";
  markdown += "title: \"" + seoTitle + "\"\n";
  markdown += "description: \"" + seoDescription + "\"\n";
  markdown += "keywords: [" + seoKeywords.join(", ") + "]\n";
  markdown += "slug: /" + slug + "\n";
  markdown += "---\n\n";
  
  // Add title as H1
  markdown += "# " + seoTitle + "\n\n";
  
  // Add first image if available
  if (data.firstImage) {
    markdown += "![" + seoTitle + "](" + data.firstImage + ")\n\n";
    
    // Add download links below the first image
    if (data.downloadLinks.length > 0) {
      markdown += "\n";
      data.downloadLinks.forEach(link => {
        const translatedText = translateText(link.text);
        markdown += "**Download " + translatedText + "**: [" + translatedText + "](" + link.url + ")";
        if (link.password) {
          markdown += " (Password: " + link.password + ")";
        }
        markdown += "\n\n";
      });
      markdown += "\n";
    }
  }
  
  // Process main content
  if (data.content) {
    const $ = cheerio.load(data.content, { decodeEntities: false });
    
    // Remove unwanted elements
    $('script, style, .wp_rp_wrap, .xh_social_box, #comments, .post-tags, .awac-wrapper, .related_post, .comment-form, .comment-respond').remove();
    
    // Process headings
    $('h1').each((i, elem) => {
      const text = $(elem).text().trim();
      if (text && !text.includes('发表回复') && !text.includes('Responses') && !text.includes('发表评论')) {
        $(elem).replaceWith('\n## ' + translateText(text) + '\n\n');
      } else {
        $(elem).remove();
      }
    });
    
    $('h2').each((i, elem) => {
      const text = $(elem).text().trim();
      if (text) {
        $(elem).replaceWith('\n### ' + translateText(text) + '\n\n');
      } else {
        $(elem).remove();
      }
    });
    
    $('h3, h4, h5, h6').each((i, elem) => {
      const text = $(elem).text().trim();
      if (text) {
        $(elem).replaceWith('\n#### ' + translateText(text) + '\n\n');
      } else {
        $(elem).remove();
      }
    });
    
    // Process paragraphs
    $('p').each((i, elem) => {
      const text = $(elem).text().trim();
      if (text) {
        // Skip empty paragraphs
        if (text.length > 0) {
          $(elem).replaceWith(translateText(text) + '\n\n');
        } else {
          $(elem).remove();
        }
      } else {
        $(elem).remove();
      }
    });
    
    // Process lists
    $('li').each((i, elem) => {
      const text = $(elem).text().trim();
      if (text) {
        $(elem).replaceWith('- ' + translateText(text) + '\n');
      } else {
        $(elem).remove();
      }
    });
    
    $('ul, ol').each((i, elem) => {
      const html = $(elem).html();
      if (html && html.trim()) {
        $(elem).replaceWith('\n' + html + '\n');
      } else {
        $(elem).remove();
      }
    });
    
    // Process bold and italic
    $('strong, b').each((i, elem) => {
      const text = $(elem).text().trim();
      if (text) {
        $(elem).replaceWith('**' + translateText(text) + '**');
      } else {
        $(elem).remove();
      }
    });
    
    $('em, i').each((i, elem) => {
      const text = $(elem).text().trim();
      if (text) {
        $(elem).replaceWith('*' + translateText(text) + '*');
      } else {
        $(elem).remove();
      }
    });
    
    // Process links
    $('a').each((i, elem) => {
      const text = $(elem).text().trim();
      const href = $(elem).attr('href');
      if (text && href) {
        $(elem).replaceWith('[' + translateText(text) + '](' + href + ')');
      } else if (href) {
        $(elem).replaceWith('(' + href + ')');
      } else {
        $(elem).remove();
      }
    });
    
    // Process images
    $('img').each((i, elem) => {
      const src = $(elem).attr('data-src') || $(elem).attr('src');
      const alt = $(elem).attr('alt') || '';
      if (src && !src.includes('data:image/gif') && !src.includes('loading.gif') && !src.includes('star.png')) {
        $(elem).replaceWith('\n![' + translateText(alt) + '](' + src + ')\n\n');
      } else {
        $(elem).remove();
      }
    });
    
    // Get the processed content
    let processedContent = $.text()
      .replace(/\n{3,}/g, '\n\n')  // Remove excessive newlines
      .trim();
    
    markdown += processedContent + '\n\n';
  }
  
  // Add a conclusion section for better SEO
  markdown += "## Conclusion\n\n";
  markdown += "This premium collection offers high-quality motion graphics elements and templates for After Effects, perfect for creating professional animations and video projects. With a wide variety of customizable elements, these assets can significantly enhance your creative workflow and help you produce stunning visual content efficiently.\n\n";
  
  return markdown;
}

// Function to process all HTML files
function processAllHtmlFiles() {
  const inputDir = './downloads';
  const outputDir = './docs/3dapp';
  
  // Create output directory if it doesn't exist
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
    console.log('Created output directory:', outputDir);
  }
  
  // Read all HTML files in the input directory
  const files = fs.readdirSync(inputDir);
  const htmlFiles = files.filter(file => path.extname(file) === '.html');
  
  console.log(`Found ${htmlFiles.length} HTML files to process`);
  
  let processedCount = 0;
  
  htmlFiles.forEach(file => {
    try {
      console.log(`Processing ${file}...`);
      const filePath = path.join(inputDir, file);
      const html = fs.readFileSync(filePath, 'utf8');
      const $ = cheerio.load(html);
      
      // Extract content
      const extractedData = extractContent($);
      
      // Create slug from filename
      const slug = file.replace('.html', '').replace('www_gfxcamp_com_', '');
      
      // Convert to SEO markdown
      const markdownContent = convertToSeoMarkdown(extractedData, slug);
      
      // Write to output file
      const outputFile = path.join(outputDir, `${slug}.md`);
      fs.writeFileSync(outputFile, markdownContent);
      
      console.log(`✓ Converted ${file} to ${slug}.md`);
      processedCount++;
    } catch (error) {
      console.error(`✗ Error processing ${file}: ${error.message}`);
    }
  });
  
  console.log('\nConversion complete!');
  console.log(`Successfully processed ${processedCount} files out of ${htmlFiles.length}`);
  
  return processedCount;
}

// Run the conversion
const processedCount = processAllHtmlFiles();

// If all files were processed successfully, delete the HTML files
if (processedCount > 0) {
  console.log('\nDeleting original HTML files...');
  const inputDir = './downloads';
  const files = fs.readdirSync(inputDir);
  const htmlFiles = files.filter(file => path.extname(file) === '.html');
  
  htmlFiles.forEach(file => {
    try {
      const filePath = path.join(inputDir, file);
      fs.unlinkSync(filePath);
      console.log(`✓ Deleted ${file}`);
    } catch (error) {
      console.error(`✗ Error deleting ${file}: ${error.message}`);
    }
  });
  
  console.log('Cleanup complete!');
}