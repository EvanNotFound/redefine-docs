---
sidebar_position: 5

---

# Mermaid JS Chart

```yaml
plugins:
...
   mermaid: # Mermaid JS
     enable: false # enable mermaid or not
     version: "9.3.0" # default v9.3.0
```

In order to draw diagrams using Mermaid JS in Hexo, you need to install the `hexo-filter-mermaid-diagrams` npm module. You can run the following command in the Hexo root directory to install:

```bash
npm install hexo-filter-mermaid-diagrams
```

after installation

- The `enable` field is used to control whether Mermaid JS is enabled.
- The `version` field is used to control the version of Mermaid JS.

  For example, to use Mermaid JS to draw pictures in an article, you only need to use the following Markdown syntax in the article:

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

Among them, the graph type can be `graph`, `digraph`, `flowchart`, `gantt`, `sequenceDiagram`, `classDiagram` and `stateDiagram`.

For more syntax, please refer to Mermaid JS official website: https://mermaid.js.org/.

## More

For actual experience, welcome to [Redefine Demo Site](https://redefine.ohevan.com/2022/10/02/theme-demo/)