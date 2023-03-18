---
sidebar_position: 3
---

# style

`style` 该配置项用于配置网站的基本样式。

## primary_color

设置网站主题色，支持 **rgb**、**rgba**、**十六进制**等颜色格式，例如：`rgb(0, 102, 204)`、`rgba(0, 102, 204, 0.8)`、`#0066cc`。

## avatar

设置作者头像，将显示在文章内容页，如下图。
![avatar](https://evan.beee.top/img/Screen%20Shot%202022-12-11%20at%205.44.13%20PM.png)
你可以使用**本地图片的相对路径**（即存储在站点根目录 `source/images/` 路径下的图片)或**图片外链 URL**。  

写法参考：

- 本地图片
  ```yaml
  avatar: /images/avatar.svg
  ```
- 图片外链
  ```yaml
  avatar: https://raw.githubusercontent.com/EvanNotFound/hexo-theme-redefine/main/source/images/avatar.svg
  ```

## favicon

设置网站 favicon 图标，你可以使用**本地图片的相对路径**（即存储在站点根目录 `source/images/` 路径下的图片)或**图片外链 URL**。 
![favicon](https://evan.beee.top/img/Screen%20Shot%202022-12-11%20at%205.42.21%20PM.png)

## og_image

[Open Graph 图片](https://ogp.me/)

本选项是指在社交平台分享链接时，由于大部分人博客没备份，就会显示不出图标，观感很差

不如直接关闭 `og_image` 显示。

- `enable` 是否启用 `false | true`
- `image_url` 是指图片的链接

## article\_img_align

设置文章内容页的图片排列位置，默认 `center`，可选：`left`（靠左）、`center`（居中）。

## right_side_width

设置右侧 **TOC 目录**模块的**宽度**。一般情况下，你无需修改。如需设置，请保持单位为 `px`。

![right_side_width](https://evan.beee.top/img/Screen%20Shot%202022-12-11%20at%205.40.48%20PM.png)

## content\_max\_width

设置内容区域的最大宽度。一般情况下，你无需修改。如需设置，请保持单位为 `px`。

![Screenshot 2023-02-15 at 5.12.34 PM](https://evan.beee.top/img/2023/02/15/6c413b2018e73ae6824fda700c9403fd.png)

## nav_color

```yml
nav_color: 
  left: "#f78736" #left side 
  right: "#367df7"  #right side
  transparency: 35 #percent (10-99)
```

这是导航栏的渐变背景设置。

`left` 对应左边的颜色

`right` 对应右边的颜色

`transparency` 是导航栏的背景透明度，请使用 `10-99` 之间的数字

![nav_color](https://evan.beee.top/img/Screen%20Shot%202022-12-11%20at%205.46.35%20PM.png)

## hover

设置鼠标悬浮时的样式（主页文章块、按钮等模块），可分别开启 `shadow` 和 `scale` 效果。

- `shadow` 阴影效果
- `scale` 缩放效果

## first_screen

开启后将显示在网站首页。

- `enable` 是否开启首屏

- `background_image` 首屏背景图片，可使用 **本地图片** 或 **图片外链 URL**

  （如果你的 Hexo 博客的网址位于子目录，比如 `https://example.com/blog`，请使用 **图片外链 URL**）

  - `light` 为亮色模式的背景图
  - `dark` 为暗色模式的背景图

- `title_color` 首屏标题的文字颜色

  - `light` 为亮色模式的文字颜色
  - `dark` 为暗色模式的文字颜色

- `font_sizes` 设定首屏的字体大小

  - `title` 主标题字体大小
  - `subtitle` 副标题字体大小

- `title` 首屏标题

- `subtitle` 副标题（有打字效果）

  - `enable` 是否启用
  - `list` 副标题的句子内容，可以填写多个句子，比如 `['This is the first sentence', 'This is the second one']`

- `custom_font` 自定义字体

  - `enable` 是否启用自定义字体
  - `font_family` 字体名称
  - `font_url` 到字体 css 样式表的链接，比如 Google Fonts 的 `https://fonts.googleapis.com/css2?family=Roboto&display=swap`

**开启**首屏的效果
![Screenshot 2023-03-12 at 12.15.50 PM](https://evan.beee.top/img/2023/03/12/fdf9529fd47b0670b91985e20249ea8f.png)

- **不开启**首屏的效果
  ![Screenshot 2023-03-12 at 12.16.37 PM](https://evan.beee.top/img/2023/03/12/f2001c16f3a8edeecb8fa92210a2d914.png)

## scroll

设置页面滚动时的样式。

- `progress_bar` 页面滚动时在网站**顶部**显示滚动**进度条**
  ![Screenshot 2023-02-15 at 5.16.11 PM](https://evan.beee.top/img/2023/02/15/d21fd5bc321b6e37001c26f9e4a04ebc.png)

- `percent` 页面滚动时在网站**右下角**显示滚动**百分比**![Screenshot 2023-02-15 at 5.18.10 PM](https://evan.beee.top/img/2023/02/15/85d1182cfc0e255bf2aa7eecc788a76c.png)

