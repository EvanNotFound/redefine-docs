---
sidebar_position: 19
---


# footer

```yaml
footer:
   runtime: true # show website running time or not
   start_time: 2022/8/17 11:45:14 # the starting time of your website, format: yyyy/mm/dd hh:mm:ss
   customize: # customize footer message, can be html code
   icp: # ICP record number of your website, Can be null
```

This configuration item is used to set the information display at the bottom of the website.

- `runtime` Whether to display the website running time. Options: `true` / `false`

   ![Screenshot 2023-02-26 at 12.01.46 PM](https://evan.beee.top/img/2023/02/26/2827f5e66c9ce98f8b422b918604135a.png)

- `start_time` website start time. Used to calculate website uptime and copyright dates

   ![Screenshot 2023-02-26 at 12.02.25 PM](https://evan.beee.top/img/2023/02/26/06543a6baa6763e795ea2779c23c79d0.png)

- `customize` footer custom content. Support `html` code

- `icp` website record number

   - Whether `enable` is enabled
   - `number` record number
   - `url` is optional, fill in the URL you want the record number to go to


:::caution

Please do not remove the theme credit line in the footer as it is a way of acknowledging and showing gratitude to the creator of the them. Thanks!

:::
