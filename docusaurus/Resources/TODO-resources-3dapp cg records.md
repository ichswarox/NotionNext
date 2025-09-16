
你是一名精通 Docusaurus 的 Markdown 样式优化专家。你的核心任务是分析我提供的 Markdown 文本，并利用 Docusaurus 的所有高级功能（如 Admonitions、Tabs、代码块高亮等）对其进行优化，目标是最大化文章的可读性、专业性和视觉吸引力,并且翻译为英语符合谷歌EEAT SEO原则。

  ## 优化原则与具体指令
  在处理文本时，请严格遵守以下指令：

  1.  **增强可读性与重点突出 (Admonitions)**:
      * 识别出文本中适合作为提示、技巧、注意、警告或危险的内容。
      * 使用 Docusaurus 的 Admonitions 语法 `:::note`, `:::tip`, `:::info`, `:::caution`, `:::danger` 来包裹这些内容，使其在页面上更加醒目。

  2.  **优化代码块展示 (Code Blocks)**:
      * 确保所有的代码块都明确指定了语言（如 ` ```js`, ` ```python`, ` ```bash`）以实现正确的语法高亮。
      * 如果代码块中有特别需要读者关注的行，使用行高亮语法，例如 ` ```js {1, 3-5}`。
      * 为重要的代码块添加一个清晰的文件名或标题，例如 ` ```js title="src/components/Button.js"`。

  3.  **使用标签页对比展示 (Tabs)**:
      * 当你发现内容中存在并列或可切换的选项时（例如：npm vs yarn, JavaScript vs TypeScript, Windows vs macOS 指令），请使用 Docusaurus 的 Tabs 组件进行重构，让用户可以方便地切换查看。

  4.  **检查并优化文档结构**:
      * 检查标题层级 (`#`, `##`, `###`) 是否逻辑清晰且使用得当。确保不要出现跳级（例如从 `##` 直接到 `####`）。
      * 对于长列表或复杂的步骤，考虑使用有序列表 (`1.`, `2.`) 或无序列表 (`-`, `*`) 使其更有条理。
      * 适当使用粗体 (`**text**`) 和斜体 (`*text*`) 来强调关键词，但避免过度使用。
      * 对于引用的内容，使用块级引用 (`>`)。

  5.  **补全或建议 Front Matter**:
      * 根据文章内容，检查或建议合适的 Front Matter (文档元数据)。至少应包含 `title` 和 `description`。如果合适，可以建议添加 `slug` (自定义 URL) 和 `tags` (标签)。

  6.  **格式化表格**:
      * 如果文章中有表格，请确保其 Markdown 语法正确且格式对齐，以保证最佳的渲染效果。

    不要生成js脚本处理需求，markdown文件名也要短一点符合谷歌seo。
    这个部分帮我根据内容生成 
    slug:如果有的话 就不需要再生成了
    ---
    title: 
    description: 
    keywords: 
    slug:
    ---

以下是需要优化的页面
http://redshiftrender.cgrecord.net/2021/04/detomaso-p72-sports-car-renders-by.html
http://redshiftrender.cgrecord.net/2021/04/earth-space-render-by-gerard-dunleavy.html
http://redshiftrender.cgrecord.net/2021/04/interior-design-product-renders-by_21.html
http://redshiftrender.cgrecord.net/2021/04/interior-design-product-renders-by.html
http://redshiftrender.cgrecord.net/2021/04/redshift-2-houdini-tutorial-28-new.html
http://redshiftrender.cgrecord.net/2021/04/interior-product-and-cloth-design.html
http://redshiftrender.cgrecord.net/2021/04/lego-pirates-inspired-renders-by-stefan.html
http://redshiftrender.cgrecord.net/2021/04/goldie-skull-render-by-evan-patrick.html
http://redshiftrender.cgrecord.net/2021/03/product-design-renders-by-jay-forbes.html
http://redshiftrender.cgrecord.net/2021/03/swamp-environment-renders-by-rodolfo.html
http://redshiftrender.cgrecord.net/2021/03/alley-bike-by-rafael-chies-using.html
http://redshiftrender.cgrecord.net/2021/03/burnt-forest-environment-by-rodolfo.html
http://redshiftrender.cgrecord.net/2021/03/the-three-trees-tavern-environment.html
http://redshiftrender.cgrecord.net/2021/03/dispersion-and-caustic-experiments-by.html
http://redshiftrender.cgrecord.net/2021/03/woven-coffee-mug-by-farid-ghanbari.html
http://redshiftrender.cgrecord.net/2021/03/yetis-home-3-environment-landscape.html
http://redshiftrender.cgrecord.net/2021/03/dark-crystal-interior-archviz-renders.html
http://redshiftrender.cgrecord.net/2021/03/collected-3-material-shader.html
http://redshiftrender.cgrecord.net/2021/03/f14-fighter-jet-3d-renders-by-che-hsuan.html
http://redshiftrender.cgrecord.net/2021/02/collected-2-material-shader.html
http://redshiftrender.cgrecord.net/2021/02/yetis-home-2-environment-landscape.html
http://redshiftrender.cgrecord.net/2021/02/beautiful-lipstick-product-renders-for.html
http://redshiftrender.cgrecord.net/2021/02/collected-material-shader-explorations.html
http://redshiftrender.cgrecord.net/2021/02/sci-fi-aircraft-racer-pamir-bal-using.html
http://redshiftrender.cgrecord.net/2021/02/jurassic-world-inspired-renders-by.html
http://redshiftrender.cgrecord.net/2021/02/product-visualizations-by-matthieu.html
http://redshiftrender.cgrecord.net/2021/02/interior-stairway-render-by-andreas.html
http://redshiftrender.cgrecord.net/2021/02/interior-design-archviz-renders-by.html
http://redshiftrender.cgrecord.net/2021/02/singer-stylized-renders-by-alexey.html
http://redshiftrender.cgrecord.net/2021/02/spider-macro-lens-render-by-bernd-kopf.html
http://redshiftrender.cgrecord.net/2021/02/national-geographic-nasa-mars-renders.html
http://redshiftrender.cgrecord.net/2021/02/yetis-home-1-environment-landscape.html
http://redshiftrender.cgrecord.net/2021/02/patreon-tutorial-preview-33-sidefx-labs.html
http://redshiftrender.cgrecord.net/2021/02/dbs-superleggera-on-dillinger-mm1.html
http://redshiftrender.cgrecord.net/2021/02/jordan-concept-renders-by-elodie-behin.html

操作完成后把文档移动到
/Users/Apple/Documents/GitHub/NotionNext/docusaurus/Resources/docs/gallery

