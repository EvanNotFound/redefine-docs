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

   ![Screen Shot 2022-12-16 at 4.13.00 PM](https://evan.beee.top/img/Screen%20Shot%202022-12-16%20at%204.13.00%20PM.png)

- `start_time` website start time. Used to calculate website uptime and copyright dates

   ![Screen Shot 2022-12-16 at 4.14.47 PM](https://evan.beee.top/img/Screen%20Shot%202022-12-16%20at%204.14.47%20PM.png)

- `customize` footer custom content. Support `html` code

- `icp` website record number, you can leave it blank
