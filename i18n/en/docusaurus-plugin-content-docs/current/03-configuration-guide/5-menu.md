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

The navigation menu at the head of the website. If you need to add a new navigation menu, fill in the format above. **You need to create a corresponding Hexo page** at the same time.

![Screen Shot 2022-12-17 at 10.55.02 AM](https://evan.beee.top/img/Screen%20Shot%202022-12-17%20at%2010.55.02%20AM.png)

The Hexo project does not have pages such as categories, tags, about, and links, which need to be created manually.

## Writing format

General menu writing format

```yaml
menu:
   Home: # The first level menu bar name
     path: / # URL, can be a relative path or an absolute path
     icon: fa-regular fa-house # Fontawesome icon name (optional)
```

If you want to jump to a third-party website when you click the menu in the navigation bar, you only need to fill in the value of `path` with the URL of the third-party website.
For example: configure the menu that jumps to the Google website in the header navigation bar

```yaml
menu:
   Google:
   		path: https://www.google.com/
```

## Fontawesome icons

Go to [Fontawesome official website](https://fontawesome.com/search), search for the icon you want, such as this `house` icon

![Screen Shot 2022-12-17 at 11.34.28 AM](https://evan.beee.top/img/Screen%20Shot%202022-12-17%20at%2011.34.28%20AM.png)



The place marked in the red box is the value that needs to be filled in the `icon` area. It is recommended to use `fa-regular`

![Screen Shot 2022-12-17 at 11.59.54 AM](https://evan.beee.top/img/Screen%20Shot%202022-12-17%20at%2011.59.54%20AM.png)

:::tip

This theme supports `solid` `regular` `thin` `light` `duotone` icons, but if you need to use `thin` `light` `duotone`, you need to manually choose to enable it, see [fontawesome configuration items](https ://redefine-docs.evanluo.top/docs/configuration-guide/fontawesome). `solid` and `regular` are enabled by default

:::

## Secondary menu

Redefine theme supports secondary menu since `v0.4.0`.

![Screen Shot 2022-12-17 at 10.55.34 AM](https://evan.beee.top/img/Screen%20Shot%202022-12-17%20at%2010.55.34%20AM.png)

The specific writing method is as following

```yaml
Links: #First level menu bar name
submenus:
Status: /link1 #first link
Github: /link2 #Second link
Blog: /link3 #The third link
```

indentation must be strict

## Internationalization

The menu bar list supports internationalization

The internationalization files are in:

```shell
{{path_to_redefine_folder}}/languages
```

Among them, `{{path_to_redefine_folder}}` refers to the path to `redefine` theme, usually `/node_modules/hexo-theme-redefine` or `/themes/redefine`

- `en.yml` is the English translation file
- `zh-CN.yml` is Simplified Chinese
- `zh-TW.yml` is Traditional Chinese

Specific writing reference:

```yaml
links: link
```

The preceding `links` **must be lowercase** and must correspond to the name on the upper menu bar. For example, `Github` is written as `github`

The following `link` is the name of the translation

## create page

Take creating an "about" page as an example:

1. Execute the command `hexo new page about` in the root directory of the Hexo project to generate an about folder in the `source` directory.

    ```shell
    $ hexo new page about
    ```

2. Add `About: /about` under the `menu` configuration item of the Redefine theme configuration file `_config.redefine.yml`.

    Among them, `About` in front is the name displayed on the home page, and `/about` in the back is the page path

    ```yaml
    menu:
      Home: /
      Archives: /archives
      # Categories: /categories
      # Tags: /tags
      # Links: /links
      About: /about
    ```

3. Open the `/source/about/index.md` file under the Hexo project and fill in the content of the about page.
    Supports Markdown and HTML formats;

    The reference is as follows:

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
    `comment: true` means that the page **opens the comment function**.
    :::

    :::danger
    Do not modify the `title` attribute that is automatically generated when the page is created! Do not delete!

    For example: `title: about` cannot be modified! Cannot be deleted!
    :::
