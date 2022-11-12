# style

`style` 该配置项用于配置网站的基本样式。

## primary_color

设置网站主题色，支持 **rgb**、**rgba**、**十六进制**等颜色格式，例如：`rgb(0, 102, 204)`、`rgba(0, 102, 204, 0.8)`、`#0066cc`。建议使用 [Web 安全色](https://www.bootcss.com/p/websafecolors/)。

## avatar

设置作者头像，将显示在文章内容页，如下图。
![Screen Shot 2022-10-01 at 9.58.59 PM](https://evan.beee.top/img/Screen%20Shot%202022-10-01%20at%209.58.59%20PM.png)
你可以使用**本地图片的相对路径**（即存储 `redefine/source/images/` 路径下的图片)或**图片外链 URL**。  

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

设置网站 favicon 图标，你可以使用**本地图片的相对路径**（即存储 `redefine/source/images/` 路径下的图片)或**图片外链 URL**。 
![Screen Shot 2022-10-01 at 9.47.54 PM](https://evan.beee.top/img/Screen%20Shot%202022-10-01%20at%209.47.54%20PM.png)

## article\_img\_align

设置文章内容页的图片排列位置，默认 `center`，可选：`left`（靠左）、`center`（居中）。

## left\_side\_width

设置左侧 **TOC 目录**模块的**宽度**。一般情况下，你无需修改。如需设置，请保持单位为 `px`。

![Screen Shot 2022-10-01 at 9.49.48 PM](https://evan.beee.top/img/Screen%20Shot%202022-10-01%20at%209.49.48%20PM.png)

## content\_max\_width

设置内容区域的最大宽度。一般情况下，你无需修改。如需设置，请保持单位为 `px`。

![Screen Shot 2022-10-01 at 9.55.33 PM](https://evan.beee.top/img/Screen%20Shot%202022-10-01%20at%209.55.33%20PM.png)

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

## hover

设置鼠标悬浮时的样式（主页文章块、TOC 目录块、按钮等模块），可分别开启 `shadow` 和 `scale` 效果。

- `shadow` 阴影效果
- `scale` 缩放效果

## first_screen

开启后将显示在网站首页。

- `enable` 是否开启首屏
- `background_img` 首屏背景图片，可使用 **本地图片** 或 **图片外链 URL**
- `description` 首屏描述
- **开启**首屏的效果
  ![Screen Shot 2022-10-01 at 10.00.46 PM](https://evan.beee.top/img/Screen%20Shot%202022-10-01%20at%2010.00.46%20PM.png)

- **不开启**首屏的效果  
  ![Screen Shot 2022-10-01 at 10.01.01 PM](https://evan.beee.top/img/Screen%20Shot%202022-10-01%20at%2010.01.01%20PM.png)

## scroll

设置页面滚动时的样式。

- `progress_bar` 页面滚动时在网站**顶部**显示滚动**进度条**
  ![Screen Shot 2022-10-01 at 10.04.07 PM](https://evan.beee.top/img/Screen%20Shot%202022-10-01%20at%2010.04.07%20PM.png)

- `percent` 页面滚动时在网站**右下角**显示滚动**百分比**
  ![Screen Shot 2022-10-01 at 10.07.31 PM](https://evan.beee.top/img/Screen%20Shot%202022-10-01%20at%2010.07.31%20PM.png)

