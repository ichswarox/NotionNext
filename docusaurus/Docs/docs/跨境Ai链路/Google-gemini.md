---
title: "Google Gemini CLI Cheatsheet"
description: "Gemini CLI是一个开源AI代理，将Gemini的强大功能直接带入您的终端，允许您使用自然语言执行各种任务，如编码、问题解决和任务管理。本备忘单提供了安装、配置和使用Gemini CLI的快速参考。"
keywords: ["Gemini CLI", "AI代理", "终端工具", "Gemini API"]
slug: /gemini-cli-cheatsheet
---
<!--https://www.philschmid.de/gemini-cli-cheatsheet-->


<!-- Title Line-->
# Google Gemini CLI Cheatsheet

<!-- First Quote use as a part to Guide and attract readers -->
:::tip[你是不是也想这样？]
- ✅ 在终端中直接使用AI进行编码和问题解决
- ✅ 通过自然语言命令管理项目任务
- ✅ 快速掌握Gemini CLI的核心功能和高级特性
别担心，这不是遥不可及的技术。本文将为你提供Gemini CLI的完整使用指南，让你快速上手这个强大的AI工具！
:::

<!--This Part is use for how to effectively find, screen and determine suitable customers -->
**学完这篇，你就能：**
掌握Gemini CLI的安装和认证方法。
学会基本的CLI调用方式和配置选项。
熟练使用内置工具和自定义命令。
了解高级功能如IDE集成和检查点恢复。

![Gemini CLI Architecture](/img/gemini-cli-architecture.png)
`图示：Gemini CLI架构图`

## 一、🚀 快速开始

<!--This Part is use for  -->
:::warning[💡 为什么要使用Gemini CLI？]
Gemini CLI将强大的AI功能直接集成到终端环境中，让你可以在不切换上下文的情况下完成编码、问题解决和任务管理。它支持多种交互模式，能够处理文件、执行shell命令，甚至与IDE集成。
:::

### 1. 安装Gemini CLI

- **为什么需要安装？**
  > - 安装Gemini CLI后，你可以在任何终端环境中直接使用AI功能。
  > - 全局安装后，可以在系统任何位置调用CLI工具。

- **如何安装？**
  > 1. **全局安装：** 使用npm全局安装Gemini CLI
  > 2. **免安装运行：** 使用npx直接运行，无需安装

#### ① 安装示例

```bash
# 全局安装
npm install -g @google/gemini-cli

# 免安装运行
npx @google/gemini-cli
```

---

### 2. 使用Gemini API密钥进行认证

- **为什么需要认证？**
  > - 认证后才能访问Gemini的AI模型功能。
  > - API密钥是访问Gemini服务的凭证。

- **如何认证？**
  > 1. **获取密钥：** 从Google AI Studio获取API密钥
  > 2. **设置密钥：** 通过环境变量或配置文件设置密钥

#### ① 认证方法

**方法1：Shell环境变量**
设置`GEMINI_API_KEY`环境变量。要在多个终端会话中使用，请将以下行添加到shell配置文件（如`~/.bashrc`、`~/.zshrc`）中。

```bash
export GEMINI_API_KEY="YOUR_GEMINI_API_KEY"
```

**方法2：环境文件**
在`~/.gemini/`中创建`.env`文件用于全局使用，或在`./.gemini/`中创建用于特定项目。CLI会自动加载该文件。

```bash
# In .gemini/.env
GEMINI_API_KEY="YOUR_GEMINI_API_KEY"
```

---

### 3. 基本调用方式

- **为什么要知道不同的调用方式？**
  > - 不同的调用方式适用于不同的使用场景。
  > - 了解这些方式可以提高工作效率。

- **有哪些调用方式？**
  > 1. **交互模式（REPL）：** 启动对话式会话
  > 2. **非交互模式：** 传递提示并获得单一响应
  > 3. **管道模式：** 将内容通过管道传递给CLI
  > 4. **沙盒模式：** 在安全沙盒中运行工具

#### ① 调用示例

**交互模式（REPL）：** 启动对话式会话
```bash
gemini
```

**非交互模式：** 传递提示并获得单一响应
```bash
gemini -p "Summarize the main points of the attached file. @./summary.txt"
```

**管道模式：** 将内容通过管道传递给CLI
```bash
echo "Count to 10" | gemini
```

**沙盒模式：** 在安全沙盒中运行工具（需要Docker或Podman）
```bash
gemini --sandbox -p "your prompt"
```

**其他标志：**
- `-m, --model <model>`: 使用特定模型
- `-i, --prompt-interactive <prompt>`: 使用初始提示启动交互会话
- `-d, --debug`: 启用调试输出
- `--yolo`: 自动批准所有工具调用
- `--checkpointing`: 在文件修改前保存项目快照，使用`/restore`恢复更改

[完整标志列表](https://github.com/google-gemini/gemini-cli/blob/main/docs/cli/configuration.md#command-line-arguments)

---

## 二、⚙️ 配置选项

### 1. 设置文件（`settings.json`）

**目的：** 通过创建`settings.json`文件自定义CLI行为。

**设置优先级：**
1. **项目级：** `.gemini/settings.json`（覆盖用户级设置）
2. **用户级：** `~/.gemini/settings.json`
3. **系统级：** `/etc/gemini-cli/settings.json`（适用于所有用户，优先级最高）

#### ① 示例配置

```json
{
  "theme": "GitHub",
  "autoAccept": false,
  "sandbox": "docker",
  "vimMode": true,
  "checkpointing": { "enabled": true },
  "fileFiltering": { "respectGitIgnore": true },
  "usageStatisticsEnabled": true,
  "includeDirectories": ["../shared-library", "~/common-utils"],
  "chatCompression": { "contextPercentageThreshold": 0.6 },
  "customThemes": {
    "MyCustomTheme": {
      "name": "MyCustomTheme", "type": "custom",
      "Background": "#181818", "Foreground": "#F8F8F2",
      "LightBlue": "#82AAFF", "AccentBlue": "#61AFEF", "AccentPurple": "#C678DD",
      "AccentCyan": "#56B6C2", "AccentGreen": "#98C379", "AccentYellow": "#E5C07B",
      "AccentRed": "#E06C75", "Comment": "#5C6370", "Gray": "#ABB2BF"
    }
  }
}
```

**配置项说明：**
- `autoAccept`: 自动批准安全的只读工具调用
- `sandbox`: 隔离工具执行（如`true`、`"docker"`或`"podman"`）
- `vimMode`: 为输入提示启用Vim风格编辑
- `checkpointing`: 启用`/restore`命令以撤销文件更改
- `includeDirectories`: 定义多目录工作区
- `chatCompression`: 配置自动聊天历史压缩
- `customThemes`: 定义自己的颜色主题
- `usageStatisticsEnabled`: 设置为`false`以禁用使用统计

详细信息请查看[配置指南](https://github.com/google-gemini/gemini-cli/blob/main/docs/cli/configuration.md)。

---

### 2. 上下文文件（`GEMINI.md`）

**目的：** 使用`GEMINI.md`文件为模型提供指令并针对项目进行定制。使用`/init`为项目生成起始的`GEMINI.md`文件。

**分层加载：** CLI从多个位置组合`GEMINI.md`文件。更具体的文件会覆盖通用文件。加载顺序为：
1. **全局上下文：** `~/.gemini/GEMINI.md`（适用于所有项目的指令）
2. **项目/祖先上下文：** CLI从当前目录向上搜索到项目根目录的`GEMINI.md`文件
3. **子目录上下文：** CLI还会扫描子目录中的`GEMINI.md`文件，允许组件特定的指令

使用`/memory show`查看发送给模型的最终组合上下文。

**使用导入模块化上下文：** 可以通过使用`@file.md`语法导入其他Markdown文件来组织`GEMINI.md`文件。这仅支持`.md`文件。

#### ① 使用导入的示例

```markdown
# 主项目上下文：我的超棒应用
 
## 通用指令
- 所有Python代码必须符合PEP 8规范
- 所有新文件使用2空格缩进
 
## 组件特定风格指南
@./src/frontend/react-style-guide.md
@./src/backend/fastapi-style-guide.md
```

更多内容请查看[完整上下文文件指南](https://github.com/google-gemini/gemini-cli/blob/main/docs/cli/configuration.md#context-files-geminimd)。

---

### 3. 使用`.geminiignore`忽略文件

**目的：** 在项目根目录中创建`.geminiignore`文件，以从Gemini工具中排除文件和目录，类似于`.gitignore`。

#### ① 示例

```
# .geminiignore
/backups/
*.log
secret-config.json
```

---

## 三、🛠️ 使用工具

### 1. 一些内置工具

**目的：** 了解CLI内置的工具功能，以便更好地使用它们。

**工具列表：**
- **文件系统工具：** 用于与文件和目录交互 - `list_directory(path="/src")`、`glob(pattern="src/**/*.ts")`、`read_file(path="/path/to/file.txt")`、`write_file(file_path="/path/to/new_file.js", content="console.log('hello');")`、`replace(file_path="...", old_string="...", new_string="...")`、`search_file_content(pattern="myFunction", include="*.js")`
- **Shell工具：** 执行shell命令。**请谨慎使用。** 要限制命令，请在`settings.json`中使用`excludeTools`。例如：`"excludeTools": ["run_shell_command(rm)"]`
- **Web工具：** 用于检索内容和在线搜索 - `google_web_search(query="Gemini API rate limits")`、`web_fetch(prompt="Summarize https://my-blog.com/article")`
- **内存工具：** 用于跨会话保存和回忆信息 - `save_memory(fact="My preferred CSS framework is Tailwind CSS.")`

---

### 2. 通过MCP服务器的自定义工具

**目的：** 通过运行模型上下文协议（MCP）服务器，使用自己的工具扩展CLI。

**功能：**
- **OAuth 2.0支持：** 安全连接到远程服务器
- **丰富的内容返回：** 工具可以返回文本和图像等多模态内容
- **提示作为命令：** 将服务器中的预定义提示作为新的斜杠命令暴露在CLI中

#### ① MCP服务器配置示例

```json
"mcpServers": {
  "myPythonServer": {
    "command": "python",
    "args": ["-m", "my_mcp_server", "--port", "8080"],
    "cwd": "./mcp_tools/python",
    "env": {
      "DATABASE_URL": "$DB_URL_FROM_ENV"
    },
    "timeout": 15000,
    "trust": false,
    "includeTools": ["safe_tool_1", "safe_tool_2"],
    "excludeTools": ["dangerous_tool"]
  }
}
```

**传输方式（选择其一）：**
- `command`、`args`、`cwd`：通过Stdio启动本地进程
- `url`：SSE端点（如`"http://localhost:8080/sse"`）
- `httpUrl`：HTTP流端点（如`"http://localhost:8080/mcp"`）

**可选配置：**
- `env`：环境变量。使用`$VAR_NAME`语法引用shell变量
- `headers`：`url`/`httpUrl`传输的HTTP头键值映射
- `timeout`：请求超时时间（毫秒，默认10分钟）
- `trust`：绕过此服务器的所有工具确认
- `includeTools`/`excludeTools`：白名单/黑名单特定工具。`excludeTools`优先级更高

使用OAuth请查看[mcp-server.md](https://github.com/google-gemini/gemini-cli/blob/main/docs/tools/mcp-server.md#oauth-support-for-remote-mcp-servers)

---

## 四、⚡ 核心命令

### 1. 有用的斜杠命令（`/`）

**目的：** 熟悉CLI中的核心斜杠命令，提高使用效率。

| 命令 | 描述 |
| ---- | ---- |
| `/compress` | 用摘要替换整个聊天上下文以节省token |
| `/copy` | 将最后的响应复制到剪贴板 |
| `/mcp` | 列出配置的MCP服务器及其可用工具 |
| `/clear` | 清除终端屏幕和上下文（`Ctrl+L`也有同样效果） |
| `/tools` | 列出可用工具 |
| `/extensions` | 列出活动扩展 |
| `/stats` | 显示会话token使用情况和节省情况 |
| `/memory show` | 显示来自所有`GEMINI.md`文件的组合上下文 |
| `/memory refresh` | 重新加载所有`GEMINI.md`文件 |
| `/chat save <tag>` | 使用标签保存当前对话 |
| `/chat resume <tag>` | 恢复保存的对话 |
| `/chat list` | 列出保存的对话标签 |
| `/restore` | 列出或恢复项目状态检查点 |
| `/auth` | 更改当前认证方法 |
| `/bug` | 提交关于Gemini CLI的问题或错误报告 |
| `/help` | 显示帮助信息和可用命令 |
| `/theme` | 更改CLI的视觉主题 |
| `/quit` | 退出Gemini CLI |
| `/ide` | 管理与IDE的集成（如`install`、`enable`） |
| `/settings` | 打开友好的编辑器以更改`settings.json`文件 |
| `/vim` | 切换输入编辑的Vim模式 |
| `/init` | 为项目生成起始的`GEMINI.md`上下文文件 |
| `/directory` | 管理多目录工作区中的目录（如`add`、`show`） |

---

### 2. 上下文命令（`@`）

**目的：** 在提示中引用文件或目录，让CLI处理特定内容。

**支持的引用类型：**
- 文本文件
- 图像、PDF、音频和视频文件
- 整个目录（递归）

#### ① 使用示例

**引用单个文件：**
```bash
> Explain this code to me. @./src/main.js
```

**引用图像：**
```bash
> Describe what you see in this screenshot. @./ux-mockup.png
```

**引用整个目录（递归）：**
```bash
> Refactor the code in this directory to use async/await. @./src/
```

---

### 3. Shell命令（`!`）

**目的：** 直接在CLI中运行shell命令。

#### ① 使用示例

**运行单个命令：**
```bash
> !git status
```

**切换Shell模式：** 输入`!`进入持久的shell模式，再次输入`!`退出。

---

### 4. 键盘快捷键

**目的：** 使用快捷键提高操作效率。

| 快捷键 | 描述 |
| ---- | ---- |
| `Ctrl+L` | 清除屏幕 |
| `Ctrl+V` | 从剪贴板粘贴文本或图像 |
| `Ctrl+Y` | 切换YOLO模式（自动批准所有工具调用） |
| `Ctrl+X` | 在外部编辑器中打开当前提示 |

---

## 五、✨ 高级功能

### 1. IDE集成（VS Code）

**目的：** 将CLI连接到VS Code，获得更强大、上下文感知的体验。

**功能：**
- **工作区上下文：** 自动获取最近的文件、光标位置和选定文本
- **原生差异比较：** 在编辑器的差异查看器中直接查看和批准代码更改
- **命令：** 使用`/ide install`设置和`/ide enable`连接

---

### 2. 自定义命令

**目的：** 使用TOML文件创建自定义命令，扩展CLI功能。

**存储位置：**
- `~/.gemini/commands/`（全局）
- `<project>/.gemini/commands/`（项目特定）

#### ① 示例：`~/.gemini/commands/test/gen.toml`

```toml
# 调用方式：/test:gen "Create a test for the login button"
description = "根据描述生成单元测试。"
prompt = """
你是一个专业的测试工程师。请根据以下需求，使用Jest测试框架编写一个全面的单元测试。

需求：{{args}}
"""
```

---

### 3. 扩展

**目的：** 创建扩展以添加功能。

**存储位置：** `<workspace>/.gemini/extensions/`或`~/.gemini/extensions/`。每个扩展都是一个包含`gemini-extension.json`文件的目录，可以配置MCP服务器、工具和上下文文件。

#### ① 示例

```
<workspace>/.gemini/extensions/my-extension/gemini-extension.json
```

```json
{
  "name": "my-extension",
  "version": "1.0.0",
  "mcpServers": {
    "my-server": {
      "command": "node my-server.js"
    }
  },
  "contextFileName": "GEMINI.md",
  "excludeTools": ["run_shell_command"]
}
```

---

### 4. 检查点和恢复

**目的：** 当启用检查点功能时，CLI会在工具修改文件之前保存项目快照。

**启用方式：**
1. 在`settings.json`中配置
2. 使用命令行标志

#### ① 使用示例

```bash
# 通过标志启用
gemini --checkpointing
```

**恢复到之前的状态：**
```bash
# 列出可用检查点
/restore
 
# 恢复特定检查点
/restore <checkpoint_file_name>
```

---