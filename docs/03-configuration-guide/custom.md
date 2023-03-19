---
sidebar_position: 3.5
---



# custom

本部分是指对站点自定义的配置

```yaml
custom: # custom font for the whole site
  font: 
    chinese: # custom font for Chinese
      enable: false
      font_family:  # the font family name of the url below
      font_url:  # The url to the font stylesheet file (css)
    english: # custom font for English
      enable: false
      font_family:  # the font family name of the url below
      font_url:  # The url to the font stylesheet file (css)
```

## font

对全站字体（除了首页文章标题）进行自定义。

- `chinese` 是指中文字体

  - `enable` 是否启用

  - `font_family` 字体名称，比如 `Roboto` 等

  - `font_url` 字体样式文件地址（CSS），比如 Google Font 中

    ![Screenshot 2023-03-18 at 11.26.37 AM](https://evan.beee.top/img/2023/03/18/6d56c014870576b266ea46c4f13e3ab9.png)

    这个就是 CSS样式文件地址

- `english` 是指英文字体，配置同上

## formats

- `font_size` 是指文章字体大小。建议保持默认 `16px`，但是如果自定义字体比较小的话，可以稍微改大一点
- `line_height` 是指行距，默认 `1.5`。如无特别需要不建议更改。
