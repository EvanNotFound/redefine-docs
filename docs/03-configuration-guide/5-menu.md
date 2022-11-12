# menu

```yaml
menu:
  Home: /
  Archives: /archives
  # Categories: /categories
  # Tags: /tags
  # Links: /links
  # About: /about
  # ...
```

网站头部导航菜单，如需新增导航菜单，按上面格式填写，**同时需要创建相对应的 Hexo 页面**。

![Screen Shot 2022-10-01 at 10.12.05 PM](https://evan.beee.top/img/Screen%20Shot%202022-10-01%20at%2010.12.05%20PM.png)

Hexo 项目并没有 categories（分类）、tags（标签）、about（关于）、links（友链）等页面，需要自己手动创建。

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
   ::: tip
   `comment: true` 表示该页面**开启评论功能**。
   :::

   ::: danger
   创建页面时自动生成的 `title` 属性不要修改！不要删除！  
   例如：`title: about` 不能修改！不能删除！
   :::

如果要实现在导航栏点击菜单时跳转到第三方网站，只需把配置项的值填写为第三方网站的 URL 即可。
例如：在头部导航栏配置跳转到 Google 网站的菜单

```yaml
menu:
  Google: https://www.google.com/
```

