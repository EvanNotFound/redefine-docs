---
sidebar_position: 19
---


# footer

```yaml
footer:
  runtime: true # show website running time or not
  start_time: 2022/8/17 11:45:14 # the starting time of your website, format: yyyy/mm/dd hh:mm:ss
  customize:  # customize footer message, can be html code
  icp: # ICP record number of your website, Can be null
    enable: false
    number: # ICP record number
    url: # ICP record url
```

该配置项用于设置网站底部的信息展示。

- `runtime` 是否显示网站运行时间。选项：`true` / `false`

  ![Screenshot 2023-02-26 at 12.01.46 PM](https://evan.beee.top/img/2023/02/26/2827f5e66c9ce98f8b422b918604135a.png)

- `start_time` 网站起始时间。用于计算网站运行时间和版权日期

  ![Screenshot 2023-02-26 at 12.02.25 PM](https://evan.beee.top/img/2023/02/26/06543a6baa6763e795ea2779c23c79d0.png)

- `customize` 页脚自定义内容。支持 `html` 代码

- `icp` 网站备案号

  - `enable` 是否开启
  - `number` 备案号
  - `url` 可选，填你希望让备案号前往的网址



:::caution

不建议删除页脚中的主题版本号，这是对主题创作者的认可和感激的方式，感谢！

:::
