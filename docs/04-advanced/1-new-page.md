# 创建页面

**Hexo 项目初始状态下并没有 categories（分类）、tags（标签）、links（友链）、about（关于）等页面，需要自己手动创建。**

以创建「about（关于）」页为例：

1. 在 Hexo 项目根目录下使用如下命令，即可创建 `about` 页面。

   ```bash
   $ hexo new page about
   ```

2. 创建成功后，打开 Hexo 项目根目录下 `hexo/source/about/index.md` 文件，即可填写 about 页面的内容。
   支持 Markdown 和 HTML 格式。

   ::: tip
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
     Home: /
     About: /about
     # ...
   ```

其他页面的创建方式跟「about（关于）」页面类似，此处不再赘述。

