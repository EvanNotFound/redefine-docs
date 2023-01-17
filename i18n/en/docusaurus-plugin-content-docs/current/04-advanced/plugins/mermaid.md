---
sidebar_position: 4
---

# Mermaid JS

为了在 Hexo 中使用 Mermaid JS 画图，你需要安装 `hexo-filter-mermaid-diagrams` npm 模块。你可以在 Hexo 根目录下运行以下命令来安装：

```bash
npm install hexo-filter-mermaid-diagrams
```

安装完成后，在主题的 `_config.redefine.yml` 中最底部添加以下配置：

```yaml
# ---------------------------------------------------------------------------------------
# Mermaid JS diagram 
# ---------------------------------------------------------------------------------------
mermaid: 
  enable: true  # default true 
  version: "9.3.0" # default v9.3.0
  style: # for more themes, see https://mermaid.js.org/config/theming.html
    light: default  # default default
    dark: dark  # default dark 
  options:  
```

其中，

- `enable` 字段用于控制 Mermaid JS 是否启用。
- `version` 字段用于控制 Mermaid JS 的版本。
- `style` 字段用于控制 Mermaid JS 的主题。详见：[Mermaid JS 官方文档](https://mermaid.js.org/config/theming.html)
- `options` 字段用于控制 Mermaid JS 的其他配置。

 例如，在文章中使用 Mermaid JS 画图，只需要在代码块中添加以下语法即可： 

````markdown
```mermaid
  graph TD;
      A-->B;
      A-->C;
      B-->D;
      C-->D;
```
````

![Screenshot 2023-01-16 at 7.40.51 PM](https://evan.beee.top/img/2023/01/16/f3ff06b2553ae3f214c5c4421fa94c93.png)

其中，graph 类型可以是"graph"、"digraph"、"flowchart"、"gantt"、"sequenceDiagram"、"classDiagram" 和 "stateDiagram"。

更多语法可以参考 Mermaid JS 官网：https://mermaid.js.org/ 。