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
```

该配置项用于设置网站底部的信息展示。

- `runtime` 是否显示网站运行时间。选项：`true` / `false`

  ![Screen Shot 2022-12-16 at 4.13.00 PM](https://evan.beee.top/img/Screen%20Shot%202022-12-16%20at%204.13.00%20PM.png)

- `start_time` 网站起始时间。用于计算网站运行时间和版权日期

  ![Screen Shot 2022-12-16 at 4.14.47 PM](https://evan.beee.top/img/Screen%20Shot%202022-12-16%20at%204.14.47%20PM.png)

- `customize` 页脚自定义内容。支持 `html` 代码

- `icp` 网站备案号，可以不填
