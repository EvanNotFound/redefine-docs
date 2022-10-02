# 进阶使用

## 创建页面

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
   ```yml
   menu:
     Home: /
     About: /about
     # ...
   ```

其他页面的创建方式跟「about（关于）」页面类似，此处不再赘述。


## 文章顶置

要实现顶置的文章，需在文章页添加 `sticky` 属性，`sticky` 值越大，顶置的文章越靠前，参考如下。

```markdown
---
title: Redefine 主题使用指南
date: 2020-04-07 21:55:14
tags: [Hexo]
categories: [Hexo]
sticky: 999
---
```


## 数学公式

如果要在文章中显示数学公式，可以使用插件 **[hexo-filter-mathjax](https://github.com/next-theme/hexo-filter-mathjax/ )**。  

配置流程：

1. 在 Hexo 项目根目录下安装插件 **hexo-filter-mathjax**。

   ```bash
   $ cd hexo-site
   $ npm install hexo-filter-mathjax
   ```

1. 在 Hexo 配置文件 `_config.yml` 最底下增加如下配置。

   ```yml
   mathjax:
     tags: none               # or 'ams' or 'all'
     single_dollars: true     # enable single dollar signs as in-line math delimiters
     cjk_width: 0.9           # relative CJK char width
     normal_width: 0.6        # relative normal (monospace) width
     append_css: true         # add CSS to every page
     every_page: false        # if true, every page will be rendered by mathjax regardless the `mathjax` setting in Front-matter of each article
   ```

1. 在文章页添加 `mathjax: true` 属性，至此，就可以在该页面中写公式了。

   示例：

   ```yml
   ---
   title: MathJax Test
   date: 2020-09-12 16:02:07
   tags: MathJax
   categories: MathJax
   mathjax: true
   ---
   $$
   i\hbar\frac{\partial}{\partial t}\psi=-\frac{\hbar^2}{2m}\nabla^2\psi+V\psi
   $$
   ```

   效果图：  
   ![image](https://cdn.jsdelivr.net/gh/XPoet/image-hosting@master/keep-docs/image.76zdiodvgds0.png)


## 友链样式

Redefine 主题对友链（links）页面进行了样式优化，你只需按如下教程，便可得到漂亮的友链列表，如下图。

![Screen Shot 2022-10-02 at 12.32.44 PM](https://evan.beee.top/img/Screen%20Shot%202022-10-02%20at%2012.32.44%20PM.png)

1. 创建友链（links）页面，在你的 Hexo 项目根目录下使用如下命令即可自动创建。
   ```sh
   $ hexo new page links
   ```

   ::: warning 注意
   `source/links/index.md` 文件的 `title` 属性不要修改！  
   友链样式根据 `title: links` 来匹配！
   ```
   ---
   title: links
   date: 2020-05-13 14:16:07
   ---
   ```
   :::

1. 在 Redefine 主题配置文件 `_config.yml` 的 `menu` 配置项里面启用 `links`。
   ```yaml
   menu:
     Home: /
     Links: /links
     # ......
   ```

1. 在你的 Hexo 项目的 `source` 文件夹里增加 `_data` 文件夹。
   ::: tip 
   如果已经有了 `_data` 文件夹，则忽略这一步。
   :::

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
   
   


## 文件比对
以下是文件比对

VS Code 自带的代码对比工具：
![image](https://cdn.jsdelivr.net/gh/XPoet/image-hosting@master/keep-docs/image.4c2gxoox3es0.png)

::: warning 特别注意
如果你升级了 Redefine 主题，主题配置文件 `/node_modules/hexo-theme-redefine/_config.yml` 的 `version` 的值**必须**跟 `_config.redefine.yml` 版本号保持一致！!

例如：我将主题升级到 0.2.0 版本，那么主题配置文件 `/node_modules/hexo-theme-redefine/_config.yml`的 `version` 的值必须是 0.2.0 。如果你用了平滑升级，`_config.redefine.yml` 中的版本号需要你手动更改。

```yaml
# Redefine version
version: 0.2.0
```
:::

## 资源压缩

Redefine 主题的源码中，HTML、CSS、JavaScript、图片等资源文件是没有打包压缩的。绝大部分的 Hexo 主题也是如此。庆幸的是，可以找到相关的插件来解决这一问题。

这里可以使用 [hexo-all-minifier](https://github.com/chenzhutian/hexo-all-minifier) 插件，它集成了 `html-minifier`、`clean-css`、`uglify` 和 `imagemin`，只需安装和简单的配置即可使用。

1. 在 Hexo 项目根目录下安装 **hexo-all-minifier**。
   ```sh
   $ npm install hexo-all-minifier
   ```

1. 在 Hexo 配置文件 `_config.yml` 文件中，添加以下配置项：
   ```yaml
   all_minifier: true
   ```
   如果你使用插件时遇到了问题或者想进行更详细的设置，请查看插件的[文档](https://github.com/chenzhutian/hexo-all-minifier/blob/master/README.md)。

## 自动部署

### Travis CI

[如何使用 Travis CI 自动部署 Hexo 博客](https://juejin.cn/post/6943628312933564452)

### GitHub Action

[如何使用 GitHub Actions 自动部署 Hexo 博客](https://juejin.cn/post/6943895271751286821)



