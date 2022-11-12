# style

`style` This configuration item is used to configure the basic style of the website.

## primary_color

Set website theme color, support **rgb**, **rgba**, **hexadecimal** and other color formats, for example: `rgb(0, 102, 204)`, `rgba(0, 102, 204, 0.8)`, `#0066cc`. [Web Safe Colors](https://www.bootcss.com/p/websafecolors/) is recommended.

## avatar

Set the author avatar, which will be displayed on the article content page, as shown below.
![Screen Shot 2022-10-01 at 9.58.59 PM](https://evan.beee.top/img/Screen%20Shot%202022-10-01%20at%209.58.59%20PM.png)
You can use **relative path to local image** (that is, store the image under `redefine/source/images/` path) or **image external link URL**.

Writing reference:

- local pictures

  ````yaml
  avatar: /images/avatar.svg
  ````

- Picture external link

  ````yaml
  avatar: https://raw.githubusercontent.com/EvanNotFound/hexo-theme-redefine/main/source/images/avatar.svg
  ````

## favicon

To set the favicon icon of the website, you can use **relative path of local image** (that is, the image stored under `redefine/source/images/` path) or **image external link URL**.
![Screen Shot 2022-10-01 at 9.47.54 PM](https://evan.beee.top/img/Screen%20Shot%202022-10-01%20at%209.47.54%20PM.png)

## article\_img\_align

Set the image arrangement position of the article content page, the default is `center`, optional: `left` (left), `center` (center).

## left\_side\_width

Sets the **width** of the left **TOC directory** module. Under normal circumstances, you do not need to modify. To set, keep the unit as `px`.

![Screen Shot 2022-10-01 at 9.49.48 PM](https://evan.beee.top/img/Screen%20Shot%202022-10-01%20at%209.49.48%20PM.png)

## content\_max\_width

Sets the maximum width of the content area. Under normal circumstances, you do not need to modify. To set, keep the unit as `px`.

![Screen Shot 2022-10-01 at 9.55.33 PM](https://evan.beee.top/img/Screen%20Shot%202022-10-01%20at%209.55.33%20PM.png)

## nav_color

````yml
nav_color:
  left: "#f78736" #left side
  right: "#367df7" #right side
  Transparency: 35 #percent (10-99)
````

This is the gradient background setting for the navigation bar.

`left` corresponds to the color on the left

`right` corresponds to the color on the right

`transparency` is the background transparency of the navbar, please use a number between `10-99`

## hover

Set the style when the mouse is hovering (homepage article block, TOC directory block, button and other modules), you can enable `shadow` and `scale` effects respectively.

- `shadow` shadow effect
- `scale` zoom effect

## first_screen

After it is turned on, it will be displayed on the homepage of the website.

- `enable` whether to enable the first screen
- `background_img` above-the-fold background image, you can use **local image** or **image external link URL**
- `description` description above the fold
- **Enable** the effect of the first screen
  ![Screen Shot 2022-10-01 at 10.00.46 PM](https://evan.beee.top/img/Screen%20Shot%202022-10-01%20at%2010.00.46%20PM.png)

- **Do not turn on** the effect of the first screen
  ![Screen Shot 2022-10-01 at 10.01.01 PM](https://evan.beee.top/img/Screen%20Shot%202022-10-01%20at%2010.01.01%20PM.png)

##scroll

Set the style when the page is scrolled.

- `progress_bar` displays a scrolling **progress bar** at the **top** of the website when the page is scrolled
  ![Screen Shot 2022-10-01 at 10.04.07 PM](https://evan.beee.top/img/Screen%20Shot%202022-10-01%20at%2010.04.07%20PM.png)

- `percent` displays scrolling **percent** in the **lower right corner** of the website when the page is scrolled
  ![Screen Shot 2022-10-01 at 10.07.31 PM](https://evan.beee.top/img/Screen%20Shot%202022-10-01%20at%2010.07.31%20PM.png)
