# create page

**In the initial state of the Hexo project, there are no categories (categories), tags (tags), links (friend links), about (about) and other pages, which need to be created manually. **

Take creating an "about" page as an example:

1. Use the following command in the root directory of the Hexo project to create an `about` page.

   ```bash
   $ hexo new page about
   ```

2. After the creation is successful, open the `hexo/source/about/index.md` file in the root directory of the Hexo project to fill in the content of the about page.
   Supports Markdown and HTML formats.

   ::: tip
   `comment: true` means that the page has comment function enabled.
   :::

   Refer to the following example:

   ```markdown
   ---
   title: about
   date: 2020-03-19 14:59:53
   comment: true
   ---
   
   #About me
   
   <div style="color: red;">About me</div>
   ```

3. Enable the `about` navigation menu in the theme configuration file `_config.yml`.

   ```yaml
   menu:
     Home: /
     About: /about
     #...
   ```

The other pages are created in a similar way to the "about" page, so I won't repeat them here.
