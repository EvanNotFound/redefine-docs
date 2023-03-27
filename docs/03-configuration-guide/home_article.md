---
sidebar_position: 6
---

# home_article

```yaml
home_article:
  date_format: auto # date format in home page article block, value: auto | relative | YYYY-MM-DD | YYYY.MM.DD HH:mm:ss | DD/MM/YYYY | and etc. 
  category:
    enable: true # show category in home page article block
    limit: 3 # max number of categories shown in home page article block
  tag:
    enable: true # show tags in home page article block
    limit: 3 # max number of tags shown in home page article block
```
该配置项用于设置首页文章块底部的**日期格式**，**标签**和**分类**信息显示。

- `date_format` 首页文章的**日期格式**，详见下文


- `category` 文章分类
- `tag` 文章标签
- `limit` 限制显示的个数

## 日期格式

选项：`auto` `relative` `YYYY-MM-DD` 以及更多 [Momentjs 日期格式](https://momentjscom.readthedocs.io/en/latest/moment/04-displaying/01-format/)

- `auto` 指当文章在发布以后**7天内**用 `n days ago` 格式来显示日期，如图

  ![Screen Shot 2023-01-02 at 12.39.39 PM](https://evan.beee.top/img/Screen%20Shot%202023-01-02%20at%2012.39.39%20PM.png)

  ​	而在发布**7天后**用 `YYYY/MM/DD` 格式显示

  ![Screen Shot 2023-01-02 at 12.40.36 PM](https://evan.beee.top/img/Screen%20Shot%202023-01-02%20at%2012.40.36%20PM.png)

- `relative` 指**所有文章**都用 `n days ago` 格式来显示日期

- `YYYY-MM-DD` 等格式能按照你喜欢的格式排列**日期**和**时间**，更多排列方法请见：[Momentjs 日期格式](https://momentjscom.readthedocs.io/en/latest/moment/04-displaying/01-format/)

  例如：

  - `DD.MM.YYYY`

    ![Screen Shot 2023-01-02 at 12.47.12 PM](https://evan.beee.top/img/Screen%20Shot%202023-01-02%20at%2012.47.12%20PM.png)

  - `dddd MMM YYYY`

    ![Screen Shot 2023-01-02 at 12.46.28 PM](https://evan.beee.top/img/Screen%20Shot%202023-01-02%20at%2012.46.28%20PM.png)

  - `MMM DD YYYY`

    ![Screen Shot 2023-01-02 at 12.48.23 PM](https://evan.beee.top/img/Screen%20Shot%202023-01-02%20at%2012.48.23%20PM.png)

  欢迎自行探索自己喜欢的组合方法



