---
sidebar_position: 6
---


# 友链页面

Redefine 主题对友链（links）页面进行了样式优化，你只需按如下教程，便可得到漂亮的友链列表，如下图。

![Screenshot 2023-03-09 at 3.44.26 PM](https://evan.beee.top/img/2023/03/09/f22e2be3c15df9ad5a88dc2e285f49c0.png)

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
   

:::caution

如果你创建完，发现这个页面 Front Matter 是这个格式：

```markdown
title:
  '[object Object]': null
date:
  '[object Object]': null
```

那么请打开 hexo 根目录下的 `scoffalds/page.md`

更改以下内容：

```markdown
---
title: { { title } }
date: { { date } }
---
```

改为：

```markdown
---
title: {{ title }}
date: {{ date }}
---
```

然后再删除刚刚创建的 links 页面，重新执行

```bash
$ hexo new page links
```

:::

