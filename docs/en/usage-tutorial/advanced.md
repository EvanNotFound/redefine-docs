# Advanced settings

## Create a page

**In the initial state of the Hexo project, there are no categories (categories), tags (tags), links (friendship chains), about (about), or other pages, you need to create them manually. **

Take creating an "about" page as an example:

1. Use the following command in the root directory of the Hexo project to create an `about` page.

   ```bash
   $ hexo new page about
   ````

2. After the creation is successful, open the `hexo/source/about/index.md` file in the root directory of the Hexo project to fill in the content of the about page.
   Markdown and HTML formats are supported.

   ::: tip
   `comment: true` indicates that the comment function is enabled for this page.
   :::

   Refer to the following example:

   ````markdown
   ---
   title: about
   date: 2020-03-19 14:59:53
   comment: true
   ---
   
   # About me
   
   <div style="color: red;">About me</div>
   ````

3. Enable the `about` navigation menu in the theme configuration file `_config.yml`.

   ````yml
   menu:
     Home: /
     About: /about
     # ...
   ````

The other pages are created in a similar way to the "about" page, so I won't repeat them here.

## Note modules

Redefine theme `v3.0.1` added note modules

### Warning series

![Screen Shot 2022-10-21 at 8.13.20 PM](https://evan.beee.top/img/Screen%20Shot%202022-10-21%20at%208.13.20%20PM.png)

![Screen Shot 2022-10-21 at 8.02.36 PM](https://evan.beee.top/img/Screen%20Shot%202022-10-21%20at%208.02.36%20PM.png)

How to use: Copy the `html` code into your article

```html
<!---red--->
<div class="wr">
  <div class="t">
    Warning
  </div>
  <div class="c">
    this is the content
  </div>
</div>

<!---orange--->
<div class="wo">
  <div class="t">
    Orange Warning
  </div>
  <div class="c">
    this is the content
  </div>
</div>

<!---Yellow-->
<div class="wy">
  <div class="t">
    Notice
  </div>
  <div class="c">
    this is the content
  </div>
</div>

<!---green--->
<div class="wg">
  <div class="t">
    Tip
  </div>
  <div class="c">
    this is the content
  </div>
</div>

<!---Blue--->
<div class="wb">
  <div class="t">
    Blue Note
  </div>
  <div class="c">
    this is the content
  </div>
</div>

<!---purple-->
<div class="wp">
  <div class="t">
    Tip
  </div>
  <div class="c">
    this is the content
  </div>
</div>

<!---grey-->
<div class="wgra">
  <div class="t">
    Information
  </div>
  <div class="c">
    this is the content
  </div>
</div>
````

### Note series

![Screen Shot 2022-10-21 at 8.12.58 PM](https://evan.beee.top/img/Screen%20Shot%202022-10-21%20at%208.12.58%20PM.png)

How to use: Copy the `html` code into your article

```html
<!---red--->
<div class="nr">
  red note
</div>

<!---orange--->
<div class="no">
  orange notes
</div>

<!---Yellow--->
<div class="ny">
  yellow note
</div>

<!---green--->
<div class="ng">
  green notes
</div>

<!---Blue--->
<div class="nb">
  blue note
</div>

<!---purple-->
<div class="np">
  purple notes
</div>

<!---grey-->
<div class="ngra">
 grey notes
</div>
````

## Article top

To implement a top article, you need to add the `sticky` attribute to the article page. The larger the value of `sticky`, the higher the top article. Please refer to the following.

````markdown
---
title: Guidelines for using the Redefine theme
date: 2022-9-28 11:45:14
tags: [Hexo]
categories: [Hexo]
sticky: 999
---
````


## Mathematical formula

If you want to display math formulas in the article, you can use the plugin **[hexo-filter-mathjax](https://github.com/next-theme/hexo-filter-mathjax/ )**.

Configuration process:

1. Install the plugin **hexo-filter-mathjax** in the root directory of the Hexo project.

   ```bash
   $ cd hexo-site
   $ npm install hexo-filter-mathjax
   ````

1. Add the following configuration at the bottom of the Hexo configuration file `_config.yml`.

   ````yml
   mathjax:
     tags: none # or 'ams' or 'all'
     single_dollars: true # enable single dollar signs as in-line math delimiters
     cjk_width: 0.9 # relative CJK char width
     normal_width: 0.6 # relative normal (monospace) width
     append_css: true # add CSS to every page
     every_page: false # if true, every page will be rendered by mathjax regardless the `mathjax` setting in Front-matter of each article
   ````

1. Add the `mathjax: true` attribute to the article page. At this point, you can write formulas on this page.

   Example:

   ````yml
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
   ````

   Effect picture:
   ![image](https://evan.beee.top/img/image.76zdiodvgds0.png)


## Friendship style

The Redefine theme has optimized the style of the links page. You only need to follow the tutorial below to get a beautiful list of links, as shown in the figure below.

![Screen Shot 2022-10-02 at 12.32.44 PM](https://evan.beee.top/img/Screen%20Shot%202022-10-02%20at%2012.32.44%20PM.png)

1. Create a links page and use the following command in the root directory of your Hexo project to automatically create it.

   ````sh
   $ hexo new page links
   ````

   ::: warning attention
   Do not modify the `title` property of the `source/links/index.md` file!
   Friend link styles are matched according to `title: links`!

   ````
   ---
   title: links
   date: 2020-05-13 14:16:07
   ---
   ````

   :::

1. Enable `links` in the `menu` configuration item of the Redefine theme configuration file `_config.yml`.

   ````yaml
   menu:
     Home: /
     Links: /links
     #  
   ````

1. Add a `_data` folder to the `source` folder of your Hexo project.
   ::: tip
   If you already have a `_data` folder, ignore this step.
   :::

1. Create a `links.yml` file in the `_data` folder.

1. Add your link in the `links.yml` file in the following format.

   ````yaml
   - name: EvanNotFound
     link: https://www.evanluo.top
     description: Hong Kong reporters are urgent at the end of the month
     avatar: https://evan.beee.top/avatar.png
   
   - name: lalallalala
     link: https://example.com
     description: lol
     avatar: https://www.youtube.com/watch?v=dQw4w9WgXcQ
   
   - ......
   
   ````

   


## file comparison

The code comparison tool that comes with VS Code:
![image](https://evan.beee.top/img/image.4c2gxoox3es0.png)

::: warning
If you upgrade the Redefine theme, the value of `version` in the theme configuration file `/node_modules/hexo-theme-redefine/_config.yml` **must** be the same as the version number of `_config.redefine.yml`!!

For example: if I upgrade the theme to version 0.2.0, then the value of `version` in the theme configuration file `/node_modules/hexo-theme-redefine/_config.yml` must be 0.2.0. If you use smooth upgrade, the version number in `_config.redefine.yml` needs to be changed manually.

````yaml
# Redefine version
version: 0.2.0
````

:::

## Resource compression

In the source code of the Redefine theme, resource files such as HTML, CSS, JavaScript, and images are not packaged and compressed. The same is true for most Hexo themes. Fortunately, related plugins can be found to solve this problem.

Here you can use the [hexo-all-minifier](https://github.com/chenzhutian/hexo-all-minifier) plugin, which integrates `html-minifier`, `clean-css`, `uglify` and `imagemin` `, just install and simple configuration to use.

1. Install **hexo-all-minifier** in the root directory of the Hexo project.

   ````sh
   $ npm install hexo-all-minifier
   ````

1. In the Hexo configuration file `_config.yml` file, add the following configuration items:

   ````yaml
   all_minifier: true
   ````

   If you have problems using the plugin or want to do more detailed settings, please check the plugin's [documentation](https://github.com/chenzhutian/hexo-all-minifier/blob/master/README.md).
