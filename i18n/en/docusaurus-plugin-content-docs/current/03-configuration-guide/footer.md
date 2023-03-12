---
sidebar_position: 19

---


# footer

```yaml
footer:
  runtime: true # show website running time or not
  icon: '<i class="fa-solid fa-heart fa-beat" style="--fa-animation-duration: 0.5s; color: #f54545"></i>' # footer icon, write fontawesome html code here
  start_time: 2022/8/17 11:45:14 # the starting time of your website, format: yyyy/mm/dd hh:mm:ss
  customize: # customize footer message, can be html code
  icp: # ICP record number of your website, Can be null
    enable: false
    number: # ICP record number
    url: # ICP record url
```

This configuration item is used to set the information displayed at the bottom of the website.

- `runtime` Whether to display the site runtime. Options: `true` / `false`

  ![Screenshot 2023-02-26 at 12.01.46 PM](https://evan.beee.top/img/2023/02/26/2827f5e66c9ce98f8b422b918604135a.png)

- `icon` footer icon, please go to [FontAwesome](https://fontawesome.com/search) to find the icon you want, then copy the html code and paste it here, please enclose it in `''` single quotes. Support [Fontawesome animation style](https://fontawesome.com/docs/web/style/animate).

- `start_time` The start time of the website. Used to calculate the site runtime and copyright date

  ![Screenshot 2023-02-26 at 12.02.25 PM](https://evan.beee.top/img/2023/02/26/06543a6baa6763e795ea2779c23c79d0.png)

- `customize` Footer customization content. Support `html` code

- `icp` website filing number

  - `enable` whether to turn on
  - `number` record number
  - `url` optional, fill in the URL you want the record number to go to



:::caution

It's not recommended to remove the theme version number from the footer, it's a way of recognizing and appreciating the theme creator, thanks!

:::

Translated with www.DeepL.com/Translator (free version)
