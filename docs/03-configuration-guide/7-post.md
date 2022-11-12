# post

```yaml
post:
  # Post word count
  # Dependencies: hexo-wordcount (npm install hexo-wordcount)
  # See: https://github.com/willin/hexo-wordcount
  word_count:
    enable: false
    wordcount: false  # word count, one article
    min2read: false   # time to read, one article

  # Author label
  author_label:
    enable: true
    auto: true  # if true, show Lv1, Lv2, Lv3... , If false, show custom label
    # label array item can be one or more
    custom_label_list: [ "Trainee", "Engineer", "Architect", "CTO", "BOSS" ]
```

该配置项用于设置是否显示**文章字数统计**、**阅读时长**和**作者标识**。

## word\_count

如果要开启文章字数统计和阅读时长，需在 Hexo 项目根目录下安装依赖 **hexo-wordcount**。

```shell
$ npm install hexo-wordcount
```

- `wordcount` 文章字数统计
- `min2read` 文章阅读时长
![Screen Shot 2022-10-01 at 10.30.52 PM](https://evan.beee.top/img/Screen%20Shot%202022-10-01%20at%2010.30.52%20PM.png)

## author\_label

设置文章内容页的**作者标识**，目前有两种方案：

1. `auto` 自动生成 `Lv1`、`Lv2`、`Lv3` ......，判断依据为文章数量。
![Screen Shot 2022-10-02 at 10.04.40 AM](https://evan.beee.top/img/Screen%20Shot%202022-10-02%20at%2010.04.40%20AM.png)

1. `custom_label_list` 自定义标识列表，数组项可以 **一个** 或 **多个**，匹配的依据是按文章数量。  
![Screen Shot 2022-10-02 at 10.06.54 AM](https://evan.beee.top/img/Screen%20Shot%202022-10-02%20at%2010.06.54%20AM.png)

  格式参考：
   - 一个数组项 `["The one"]`
   - 多个数组项 `["The one", "Neo", "God"]`

