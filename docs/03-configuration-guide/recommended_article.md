---
sidebar_position: 17.5
---

# recommended_article

```yaml
recommended_article: # 文章推荐，需要 npm install nodejieba
  enable: false
  title: 推荐阅读
  icon: fa-solid fa-bookmark
  max_count: 3
  placeholder_img: https://evan.beee.top/img/wallhaven-wqery6-light.webp
  # 不展示文章推荐：
  # front-matter 使用 skip_recommended_article: true 关闭
  # 不在以下文件夹文章中展示文章推荐 根目录是source/
  skip_dirs:
    - wiki/
```

文章底部的文章推荐模块，会根据文章的关键字自动进行推荐。

推荐的缩略图会自动选择文章 `front-matter` 中的 `thumbnail` 或 `banner` 或 `cover` 图片

## 效果

![Screenshot 2023-02-15 at 6.11.01 PM](https://evan.beee.top/img/2023/02/15/7c4c1858ff280243af69386135b2f46e.png)

## 使用方法

使用之前，需要执行

```shell
npm install nodejieba
```

安装 `nodejieba` 模块，用于截取并分析文章内容

## 配置教程

- `enable` 是否开启此功能
- `title` 本区域的标题
- `icon` 标题前面的图标
- `max_count` 最大文章推荐数
- `placeholder_img` 当文章没有设置头图时的默认替代图片
- `skip_dirs` 在这些目录 (相对 `source/`) 下面的文章不会进行推荐
