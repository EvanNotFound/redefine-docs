---
sidebar_position: 1.7
---



# 创建页面

**Hexo 项目初始状态下并没有 categories（分类）、tags（标签）、links（友链）、about（关于）等页面，需要自己手动创建。**

## 如何创建

以创建「about（关于）」页为例：

1. 在 Hexo 项目根目录下使用如下命令，即可创建 `about` 页面。

   ```bash
   $ hexo new page about
   ```

2. 创建成功后，打开 Hexo 项目根目录下 `hexo/source/about/index.md` 文件，即可填写 about 页面的内容。
   支持 Markdown 和 HTML 格式。

   :::tip
   `comment: true` 表示该页面开启评论功能。
   :::

   参考如下示例：

   ```markdown
   ---
   title: about
   date: 2020-03-19 14:59:53
   comment: true
   ---
   
   # About me
   
   <div style="color: red;">About me</div>
   ```

3. 在主题配置文件 `_config.yml` 中启用 `about` 导航菜单。
   ```yaml
   menu:
     Home: 
     	path: /
     	icon: fa-regular fa-house
     About: 
     	path: /about
     	icon: fa-regular fa-user
     # ...
   ```

其他页面的创建方式跟「about（关于）」页面类似，此处不再赘述。

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

然后再删除刚刚创建的 about 页面，重新执行

```bash
$ hexo new page about
```

:::



:::danger
创建页面时自动生成的 `title` 属性不要修改！不要删除！  

例如：`title: about` 不能修改！不能删除！
:::

## 标签 (tags) 页面

如果你想要创建如图所示的 Tags 标签页面

![Screen Shot 2022-12-23 at 12.01.50 PM](https://evan.beee.top/img/Screen%20Shot%202022-12-23%20at%2012.01.50%20PM.png)



请执行：

```shell
$ hexo new page tags
```



## 分类 (categories) 页面

如果你想要创建如图所示的 Categories 分类页面

![Screen Shot 2022-12-23 at 12.04.48 PM](https://evan.beee.top/img/Screen%20Shot%202022-12-23%20at%2012.04.48%20PM.png)

请执行：

```shell
$ hexo new page categories
```

