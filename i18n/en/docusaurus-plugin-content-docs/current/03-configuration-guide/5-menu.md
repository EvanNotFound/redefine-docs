# menu

```yaml
menu: #you can customize, i18n files are in the theme's languages folder
  Home: /
  Archives: /archives
  # Status: https://status.evanluo.top/
  # About: 
  # submenus:
  # Me: /about
  # Github: https://github.com/EvanNotFound/hexo-theme-redefine
  # Blog: https://www.evanluo.top
  # Friends: /friends
  # Links: 
  # submenus:
  # Link1: /link1
  # Link2: /link2
  # Link3: /link3
```

If you want to add a new navigation menu, fill in the above format, **and create the corresponding Hexo page**.

The corresponding Hexo page needs to be created.
![Screen Shot 2022-10-01 at 10.12.05 PM](https://evan.beee.top/img/Screen%20Shot%202022-10-01%20at%2010.12.05%20PM.png)

The Hexo project does not have categories, tags, about, links, etc., so you need to create them manually.

## Create a page

To create an "about" page, for example

1. Execute `hexo new page about` in the root directory of Hexo project to create about folder in `source` directory.

   ```shell
   $ hexo new page about
   ``` 2.

2. Add ``About: /about`` to the Redefine theme configuration file `_config.redefine.yml` under the `menu` configuration item.

   Where the first `About` is the name displayed on the home page, and the last `/about` is the page path

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
   Support Markdown and HTML formats.  

   Refer to the following.

   ```markdown
   --
   title: about
   date: 2020-03-19 14:59:53
   comment: true
   ---
   
   ## About me
   
   I am **homo**
   
   1145141919810
   ```

   :::tip
   `comment: true` means that this page **has commenting turned on**.
   :::

   :::danger
   The `title` attribute that is automatically generated when the page is created should not be modified! Do not delete it!  

   For example: `title: about` cannot be modified! Cannot be deleted!
   :::

## Third-party websites

If you want to implement a jump to a third-party website when you click on the menu in the navigation bar, just fill the value of the configuration item with the URL of the third-party website.
Example: Configure the menu in the header navigation bar to jump to the Google website

```yaml
menu:
  Google: https://www.google.com/
```

## Secondary menu

Redefine theme supports secondary menus since `v0.4.0`.

! [Screen Shot 2022-12-16 at 3.40.21 PM](https://evan.beee.top/img/Screen%20Shot%202022-12-16%20at%203.40.21%20PM.png)

The details are written as follows

```yaml
Links: # primary menu bar name
	submenus: 
		Status: /link1 #first link
		Github: /link2 #second link
		Blog: /link3 #Third link
```

Indentation must be strict

## Internationalization

The menu bar list supports internationalization (Internationalization)

Internationalization files are available in.

```shell
{{path_to_redefine_folder}}/languages
```

where `{{path_to_redefine_folder}}` is the path to the `redefine` theme, usually `/node_modules/hexo-theme-redefine` or `/themes/redefine`

- `en.yml` is the English translation file
- `zh-CN.yml` is simplified Chinese
- `zh-TW.yml` is Traditional Chinese

For specific writing reference.

```yaml
links: link
```

The first `links` ** must be lowercase** and should correspond to the name on the menu bar. For example, ``Github` is written as ``github`

followed by `links` which is the name of the translation
