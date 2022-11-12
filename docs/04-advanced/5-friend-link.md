# 友链样式

Redefine 主题对友链（links）页面进行了样式优化，你只需按如下教程，便可得到漂亮的友链列表，如下图。

![Screen Shot 2022-10-02 at 12.32.44 PM](https://evan.beee.top/img/Screen%20Shot%202022-10-02%20at%2012.32.44%20PM.png)

1. 创建友链（links）页面，在你的 Hexo 项目根目录下使用如下命令即可自动创建。
   ```shell
   $ hexo new page links
   ```

   注意：
   `source/links/index.md` 文件的 `title` 属性不要修改！  
   友链样式根据 `title: links` 来匹配！
   
   ```markdown
   ---
   title: links
   date: 2020-05-13 14:16:07
   ---
   ```
   
1. 在 Redefine 主题配置文件 `_config.yml` 的 `menu` 配置项里面启用 `links`。
   ```yaml
   menu:
     Home: /
     Links: /links
     # ......
   ```

1. 在你的 Hexo 项目的 `source` 文件夹里增加 `_data` 文件夹。
   
   如果已经有了 `_data` 文件夹，则忽略这一步。
   
1. 在 `_data` 文件夹里新建 `links.yml` 文件。

1. 在 `links.yml` 文件里按如下格式增加你的友链。

   ```yaml
   - name: EvanNotFound
     link: https://www.evanluo.top
     description: 香港记者月底加急
     avatar: https://evan.beee.top/avatar.png
   
   - name: lalallalala
     link: https://example.com
     description: lol
     avatar: https://www.youtube.com/watch?v=dQw4w9WgXcQ
   
   - ......  
   
   ```
   
   

