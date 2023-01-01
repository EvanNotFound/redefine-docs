---
sidebar_position: 5
---

# menu

```yaml
menu: #you can customize, i18n files are in the theme's languages folder. fa-regular recommended
  Home: 
    path: / 
    icon: fa-regular fa-house # can be empty
  Archives: 
    path: /archives 
    icon: fa-regular fa-archive # can be empty
  # Status: 
  #   path: https://status.evanluo.top/
  #   icon: fa-regular fa-chart-bar
  # About: 
  #   icon: fa-regular fa-user
  #   submenus:
  #     Me: /about
  #     Github: https://github.com/EvanNotFound/hexo-theme-redefine
  #     Blog: https://www.evanluo.top
  #     Friends: /friends
  # Links: 
  #   icon: fa-regular fa-link
  #   submenus:
  #     Link1: /link1
  #     Link2: /link2
  #     Link3: /link3
```

网站头部导航菜单，如需新增导航菜单，按上面格式填写，**同时需要创建相对应的 Hexo 页面**。

![Screen Shot 2022-12-17 at 10.55.02 AM](https://evan.beee.top/img/Screen%20Shot%202022-12-17%20at%2010.55.02%20AM.png)

Hexo 项目并没有 categories（分类）、tags（标签）、about（关于）、links（友链）等页面，需要自己手动创建。

## 写法格式

一般菜单写法格式

```yaml
menu:
  Home: # 一级菜单栏名称
    path: / # 网址，可以为相对路径或者绝对路径
    icon: fa-regular fa-house # Fontawesome图标名称（可选）
```

如果要实现在导航栏点击菜单时跳转到第三方网站，只需把 `path` 的值填写为第三方网站的 URL 即可。
例如：在头部导航栏配置跳转到 Google 网站的菜单

```yaml
menu:
  Google: 
  	path: https://www.google.com/
```

## Fontawesome 图标

前往 [Fontawesome 官网](https://fontawesome.com/search)，搜索你想要的图标，如这个 `house` 图标

![Screen Shot 2022-12-17 at 11.34.28 AM](https://evan.beee.top/img/Screen%20Shot%202022-12-17%20at%2011.34.28%20AM.png)



红框标注的地方即为在 `icon` 区域需要填写的值。推荐使用 `fa-regular` 

![Screen Shot 2022-12-17 at 11.59.54 AM](https://evan.beee.top/img/Screen%20Shot%202022-12-17%20at%2011.59.54%20AM.png)

:::tip

本主题支持 `solid` `regular` `thin` `light` `duotone` 的图标，但是如果你需要用 `thin` `light` `duotone` ，需要手动选择开启，请见 [fontawesome 配置项](https://redefine-docs.evanluo.top/docs/configuration-guide/fontawesome)。`solid` 和 `regular` 默认开启

:::

## 二级菜单

Redefine 主题自 `v0.4.0` 开始支持二级菜单。

![Screen Shot 2022-12-17 at 10.55.34 AM](https://evan.beee.top/img/Screen%20Shot%202022-12-17%20at%2010.55.34%20AM.png)

具体写法如下

```yaml
Links: #一级菜单栏名称
	submenus: 
		Status: /link1 #第一个链接
		Github: /link2 #第二个链接
		Blog: /link3 #第三个链接
```

缩进必须严格

## 国际化

菜单栏列表支持国际化（Internationalization）

国际化文件在：

```shell
{{path_to_redefine_folder}}/languages
```

其中，`{{path_to_redefine_folder}}` 是指到 `redefine` 主题的路径，一般为 `/node_modules/hexo-theme-redefine` 或者 `/themes/redefine`

- `en.yml` 是英文翻译文件
- `zh-CN.yml` 是简体中文
- `zh-TW.yml` 是繁体中文

具体写法参考：

```yaml
links: 链接
```

前面的 `links` **必须是小写**，而且要对应上菜单栏上的名称。比如 `Github` 则写成 `github`

后面的 `链接` 就是翻译的名字

## 创建页面

以创建「 about（关于）」页面为例：

1. 在 Hexo 项目根目录下执行命令 `hexo new page about` ，即可在 `source` 目录下生成 about 文件夹。

   ```shell
   $ hexo new page about
   ```

2. 在 Redefine 主题配置文件 `_config.redefine.yml` 的 `menu` 配置项下添加 `About: /about`。

   其中，前面的 `About` 是显示在主页的名称，后面的 `/about` 是页面路径

   ```yaml
   menu:
     Home: /
     Archives: /archives
     # Categories: /categories
     # Tags: /tags
     # Links: /links
     About: /about
   ```

3. 打开 Hexo 项目下 `/source/about/index.md` 文件，填写 about 页面的内容。
   支持 Markdown 和 HTML 格式；  

   参考如下：

   ```markdown
   ---
   title: about
   date: 2020-03-19 14:59:53
   comment: true
   ---
   
   ## About me
   
   I am **homo**
   
   1145141919810
   ```

   :::tip
   `comment: true` 表示该页面**开启评论功能**。
   :::

   :::danger
   创建页面时自动生成的 `title` 属性不要修改！不要删除！  

   例如：`title: about` 不能修改！不能删除！
   :::
