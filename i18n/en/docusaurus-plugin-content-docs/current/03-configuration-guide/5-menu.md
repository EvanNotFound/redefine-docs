# menu

````yaml
menu:
  Home: /
  Archives: /archives
  # Categories: /categories
  # Tags: /tags
  # Links: /links
  # About: /about
  # ...
````

Website header navigation menu, if you need to add a new navigation menu, fill in the above format, **also need to create the corresponding Hexo page**.

![Screen Shot 2022-10-01 at 10.12.05 PM](https://evan.beee.top/img/Screen%20Shot%202022-10-01%20at%2010.12.05%20PM.png)

The Hexo project does not have pages such as categories (categories), tags (tags), about (about), and links (friendship chains), which need to be created manually.

Take creating an "about" page as an example:

1. Execute the command `hexo new page about` in the root directory of the Hexo project to generate the about folder in the `source` directory.

   ```shell
   $ hexo new page about
   ````

2. Add `About: /about` under the `menu` configuration item in the Redefine theme configuration file `_config.redefine.yml`.

   Among them, the front `About` is the name displayed on the home page, and the latter `/about` is the page path

   ````yaml
   menu:
     Home: /
     Archives: /archives
     # Categories: /categories
     # Tags: /tags
     # Links: /links
     About: /about
   ````

3. Open the `/source/about/index.md` file under the Hexo project and fill in the content of the about page.
   Supports Markdown and HTML formats;

   The reference is as follows:

   ````markdown
   ---
   title: about
   date: 2020-03-19 14:59:53
   comment: true
   ---
   
   ## About me
   
   I am **homo**
   
   1145141919810
   ````

   ::: tip
   `comment: true` means that the page **enables the comment function**.
   :::

   ::: danger
   Do not modify the `title` attribute that is automatically generated when the page is created! Do not delete!
   For example: `title: about` cannot be modified! Can't delete!
   :::

If you want to jump to a third-party website when you click the menu in the navigation bar, you only need to fill in the value of the configuration item as the URL of the third-party website.
For example: configure a menu that jumps to Google's website in the header navigation bar

````yaml
menu:
  Google: https://www.google.com/
````
