# Mathjax

If you want to display math formulas in your articles, you can use the plugin **[hexo-filter-mathjax](https://github.com/next-theme/hexo-filter-mathjax/ )**.

Configuration process:

1. Install the plugin **hexo-filter-mathjax** in the root directory of the Hexo project.

   ```bash
   $ cd hexo-site
   $ npm install hexo-filter-mathjax
   ```

1. Add the following configuration at the bottom of the Hexo configuration file `_config.yml`.

   ```yml
   mathjax:
     tags: none # or 'ams' or 'all'
     single_dollars: true # enable single dollar signs as in-line math delimiters
     cjk_width: 0.9 # relative CJK char width
     normal_width: 0.6 # relative normal (monospace) width
     append_css: true # add CSS to every page
     every_page: false # if true, every page will be rendered by mathjax regardless of the `mathjax` setting in Front-matter of each article
   ```

1. Add the `mathjax: true` attribute to the article page, so far, you can write formulas in this page.

   Example:

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

   Renderings:
   ![image](https://evan.beee.top/img/image.76zdiodvgds0.png)
