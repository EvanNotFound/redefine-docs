---
sidebar_position: 7
---

# post

````yaml
post:
  # Post word count
  # Dependencies: hexo-wordcount (npm install hexo-wordcount)
  # See: https://github.com/willin/hexo-wordcount
  word_count:
    enable: false
    wordcount: false # word count, one article
    min2read: false # time to read, one article

  # Author label
  author_label:
    enable: true
    auto: true # if true, show Lv1, Lv2, Lv3... , If false, show custom label
    # label array item can be one or more
    custom_label_list: [ "Trainee", "Engineer", "Architect", "CTO", "BOSS" ]
````

This configuration item is used to set whether to display **article word count**, **reading time** and **author identification**.

##word\_count

If you want to enable article word count and reading time, you need to install the dependency **hexo-wordcount** in the root directory of the Hexo project.

```shell
$ npm install hexo-wordcount
````

- `wordcount` article word count
- `min2read` article reading time
  ![Screen Shot 2022-10-01 at 10.30.52 PM](https://evan.beee.top/img/Screen%20Shot%202022-10-01%20at%2010.30.52%20PM.png)

##author\_label

To set the **author ID** of the article content page, there are currently two options:

1. `auto` automatically generates `Lv1`, `Lv2`, `Lv3`..., the judgment is based on the number of articles.
   ![Screen Shot 2022-10-02 at 10.04.40 AM](https://evan.beee.top/img/Screen%20Shot%202022-10-02%20at%2010.04.40%20AM.png)

1. `custom_label_list` Custom label list, array items can be **one** or **multiple**, the matching is based on the number of articles.
   ![Screen Shot 2022-10-02 at 10.06.54 AM](https://evan.beee.top/img/Screen%20Shot%202022-10-02%20at%2010.06.54%20AM.png)

  Format reference:

   - an array item `["The one"]`
   - Multiple array items `["The one", "Neo", "God"]`
