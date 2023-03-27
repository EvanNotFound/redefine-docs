---
sidebar_position: 6
---


# Mathjax 数学公式

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

   ```markdown
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
   ![image](https://evan.beee.top/img/2023/03/25/2c9d1ae06a8b34a145f0e3a745322412.png)

## 更多

实际体验欢迎前往 [Redefine 演示站点](https://redefine.ohevan.com/2022/10/02/theme-demo/)
