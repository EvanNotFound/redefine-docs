# toc

```yaml
toc:
  enable: true

  # Automatically add list number to toc.
  number: false

  # If true, all level of TOC in a post will be displayed, rather than the activated part of it.
  expand_all: true

  # If true, open TOC every time when you enter the article page
  init_open: true
```

该配置项用于设置文章TOC目录结构，非常实用的功能，可以快速查看文章目录结构和跳转，建议开启。

![Screen Shot 2022-10-02 at 10.11.31 AM](https://evan.beee.top/img/Screen%20Shot%202022-10-02%20at%2010.11.31%20AM.png)

- `number` 给目录结构自动加上数字编号
  - `number: false`
    ![Screen Shot 2022-10-02 at 10.12.54 AM](https://evan.beee.top/img/Screen%20Shot%202022-10-02%20at%2010.12.54%20AM.png)

  - `number: true`
    ![Screen Shot 2022-10-02 at 10.13.38 AM](https://evan.beee.top/img/Screen%20Shot%202022-10-02%20at%2010.13.38%20AM.png)

- `expand_all` 展开所有目录结构
  - `expand_all: true` 自动展开所有的目录结构
  - `expand_all: false` 边滚动页面边展开对应的位置的目录

- `init_open` 打开文章页时是否自动打开 TOC 目录结构 

