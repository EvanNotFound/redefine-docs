---
sidebar_position: 3
---

# style

`style` This configuration item is used to configure the basic style of the website.

## primary_color

Set website theme color, support **rgb**, **rgba**, **hexadecimal** and other color formats, for example: `rgb(0, 102, 204)`, `rgba(0, 102, 204, 0.8)`, `#0066cc`. [Web Safe Colors](https://www.bootcss.com/p/websafecolors/) is recommended.

## avatar

Set the author's avatar, which will be displayed on the article content page, as shown in the figure below.
![avatar](https://evan.beee.top/img/Screen%20Shot%202022-12-11%20at%205.44.13%20PM.png)
You can use **the relative path of the local image** (that is, the image stored in the `redefine/source/images/` path) or **the external link URL of the image**.

Writing reference:

- local pictures

   ```yaml
   avatar: /images/avatar.svg
   ```

- Picture external link

   ```yaml
   avatar: https://raw.githubusercontent.com/EvanNotFound/hexo-theme-redefine/main/source/images/avatar.svg
   ```

## favicon

To set the website favicon icon, you can use **relative path of local image** (that is, the image stored in `redefine/source/images/` path) or **image external link URL**.
![favicon](https://evan.beee.top/img/Screen%20Shot%202022-12-11%20at%205.42.21%20PM.png)

## og_image

[Open Graph Image](https://ogp.me/)

This option means that when sharing links on social platforms, since most people’s blogs have not been backed up, the icon will not be displayed, and the look and feel is very bad

It is better to turn off `og_image` display directly.

-  `enable` decides whether to enable it or not
- `image_url` is the link to the image

## article\_img_align

Set the image arrangement position of the article content page, the default `center`, optional: `left` (left), `center` (centered).

## right_side_width

Sets the **width** of the right **TOC** module. Normally, you don't need to modify it. If you need to set it, please keep the unit as `px`.

![right_side_width](https://evan.beee.top/img/Screen%20Shot%202022-12-11%20at%205.40.48%20PM.png)

## content\_max\_width

Sets the maximum width of the content area. Normally, you don't need to modify it. If you need to set it, please keep the unit as `px`.

![Screen Shot 2022-10-01 at 9.55.33 PM](https://evan.beee.top/img/Screen%20Shot%202022-10-01%20at%209.55.33%20PM.png)

## nav_color

```yml
nav_color:
   left: "#f78736" #left side
   right: "#367df7" #rightside
   transparency: 35 #percent (10-99)
```

This is the gradient background setting for the navbar.

`left` corresponds to the color on the left

`right` corresponds to the color on the right

`transparency` is the background transparency of the navigation bar, please use a number between `10-99`

![nav_color](https://evan.beee.top/img/Screen%20Shot%202022-12-11%20at%205.46.35%20PM.png)

## hover

Sets the style when the mouse hovers (homepage article blocks, button modules, etc.), and you can turn on the `shadow` and `scale` effects separately.

- `shadow` Shadow effect
- `scale` Scaling effect

## first_screen

Once enabled, it will be displayed on the homepage of the website.

- `enable` Whether to enable the first screen

- `background_image` is the first screen background image, you can use **local image** or **image external link URL**

  (If your Hexo blog URL is located in a subdirectory, such as `https://example.com/blog`, please use **image external link URL**)

  - `light` is the background image in light mode
  - `dark` is the background image for dark mode

- `title_color` the text color of the above-the-fold title

  - `light` is the text color for light mode
  - `dark` is the text color for dark mode

- `font_sizes` set the font size above the fold

  - `title` main title font size
  - `subtitle` subtitle font size

- `title` above the fold title

- `subtitle` subtitle (with typing effect)

  - Whether `enable` is enabled
  - `list` is the sentence content of the subtitle, you can fill in multiple sentences, such as `['This is the first sentence', 'This is the second one']`

- `custom_font` custom font

  - `enable` Whether to enable custom fonts
  - `font_family` font name
  - `font_url` font URL

**Enable** the effect of the first screen
![Screenshot 2023-03-12 at 12.15.50 PM](https://evan.beee.top/img/2023/03/12/fdf9529fd47b0670b91985e20249ea8f.png)

- **Do not open** the effect of the first screen
  ![Screenshot 2023-03-12 at 12.16.37 PM](https://evan.beee.top/img/2023/03/12/f2001c16f3a8edeecb8fa92210a2d914.png)

## scroll

Set the style when the page is scrolled.

- `progress_bar` displays a scrolling **progress bar** at the **top** of the website when the page is scrolled
  ![Screen Shot 2022-10-01 at 10.04.07 PM](https://evan.beee.top/img/Screen%20Shot%202022-10-01%20at%2010.04.07%20PM.png)

- `percent` displays scrolling **percent** in the **lower right corner** of the website when the page is scrolled
  ![Screen Shot 2022-10-01 at 10.07.31 PM](https://evan.beee.top/img/Screen%20Shot%202022-10-01%20at%2010.07.31%20PM.png)
