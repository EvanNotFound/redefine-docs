---
sidebar_position: 6
---


# Friend Links

The Redefine theme optimizes the style of the links page. You only need to follow the tutorial below to get a beautiful list of links, as shown in the figure below.

![Screen Shot 2022-10-02 at 12.32.44 PM](https://evan.beee.top/img/Screen%20Shot%202022-10-02%20at%2012.32.44%20PM.png)

1. Create a link page, which can be created automatically by using the following command in the root directory of your Hexo project.

   ```shell
   $ hexo new page links
   ```

   Notice:
   Do not modify the `title` attribute of the `source/links/index.md` file!
   Friend link style is matched according to `title: links`!

   ```markdown
   ---
   title: links
   date: 2020-05-13 14:16:07
   ---
   ```

1. Enable `links` in the `menu` configuration item of the Redefine theme configuration file `_config.yml`.

   ```yaml
   menu:
     Home: /
     Links: /links
     #  …
   ```

1. Add `_data` folder in your Hexo project's `source` folder.

   If you already have a `_data` folder, ignore this step.

1. Create a `links.yml` file in the `_data` folder.

1. Add your friend links in the `links.yml` file according to the following format.

   ```yaml
   - name: EvanNotFound
     link: https://www.evanluo.top
     description: Hong Kong journalists rush at the end of the month
     avatar: https://evan.beee.top/avatar.png
   
   - name: lalallalala
     link: https://example.com
     description: lol
     avatar: https://www.youtube.com/watch?v=dQw4w9WgXcQ
   
   -...
   
   ```
