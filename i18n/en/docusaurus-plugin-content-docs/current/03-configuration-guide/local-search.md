---
sidebar_position: 12
---


# local_search

````yaml
local_search:
  enable: false
  preload: false # Preload the search data when the page loads
````

This configuration item is used to set the website search function, which is very practical and is recommended to be enabled. When enabled, a **search button** will appear on the right side of the navigation bar in the header.

![Screen Shot 2022-10-02 at 10.19.28 AM](https://evan.beee.top/img/Screen%20Shot%202022-10-02%20at%2010.19.28%20AM.png)

Search function configuration process:

1. Install the plugin `hexo-generator-searchdb` in the root directory of the Hexo project.

   ```bash
   $ npm install hexo-generator-searchdb
   ````

1. Add the following configuration items at the bottom of the Hexo configuration file `_config.redefine.yml`.

   ````yaml
   # Search
   ## See: https://github.com/theme-next/hexo-generator-searchdb
   search:
     path: search.json
     field: post
     content: true
     format: striptags
   ````

1. The value of the `local_search.enable` configuration item in the theme configuration file `_config.redefine.yml` is set to `true`.

   ````yaml
   local_search:
     enable: true
   ````


:::tip
The `local_search.preload` configuration item indicates whether to **preload search data** on page load.
:::

Site-wide article search renderings:

![Screen Shot 2022-10-02 at 10.22.29 AM](https://evan.beee.top/img/Screen%20Shot%202022-10-02%20at%2010.22.29%20AM-4745029.png)
