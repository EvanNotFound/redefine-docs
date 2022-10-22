# Configuration guide

Redefine theme configuration guide.

In this page, the

`theme configuration files` refer to `_config.redefine.yml` or `/themes/redefine/_config.yml` or `/node_modules/hexo-theme-redefine/_config.yml` in the Hexo root directory

The `site configuration file` refers to `_config.yml` in the Hexo root directory

## Create a theme config file

For a smooth upgrade in the future, please create `_config.redefine.yml` in the **Hexo root directory** and put [the code here](https://github.com/EvanNotFound/hexo-theme-redefine/blob/ main/_config.yml) are all copied in and saved. If you want to change the theme settings in the future, you can change them in `_config.redefine.yml`.

:::danger

Note the following:

1. `_config.redefine.yml` will always override the `_config.yml` settings in the theme root
2. After the theme is updated, be sure to compare `/node_modules/hexo-theme-redefine/_config.yml` with the `theme configuration file (_config.redefine.yml)`. If the file has changed, you must synchronize the changed items in `_config.redefine.yml`. VS Code's [file comparison](/usage-tutorial/advanced.html#%E6%96%87%E4%BB%B6%E6%AF%94%E5%AF%B9) may be helpful for your migration.
3. Please do not delete any items in `_config.yml`, otherwise `_config.redefine.yml` will not take effect

:::

The directories on the left side of this tutorial correspond to the options in `_config.redefine.yml` in order, please follow them step by step

## base_info

````yml
base_info:
  title: Theme Redefine # Site title
  author: The Redefine Team # Author name
  url: https://www.evanluo.top # Site url
````

Please fill in the basic information of your website **correctly** in this configuration item.

- `title` **site title** (will be displayed in the website menu bar, as shown below)
  ![Screen Shot 2022-10-01 at 6.57.41 PM](https://evan.beee.top/img/Screen%20Shot%202022-10-01%20at%206.57.41%20PM.png)
- `author` **author nickname** (will be displayed at the bottom of the website and the article content page, as shown below)
  - Bottom of the website! [Screen Shot 2022-10-01 at 7.01.00 PM](https://evan.beee.top/img/Screen%20Shot%202022-10-01%20at%207.01.00%20PM.png )
    
  - Article content page
    ![Screen Shot 2022-10-01 at 7.02.10 PM](https://evan.beee.top/img/Screen%20Shot%202022-10-01%20at%207.02.10%20PM.png)
- `url` **website domain name** (will be used to correctly splice article links in the copyright information module of the article content page, as shown below)
  ![Screen Shot 2022-10-01 at 7.03.30 PM](https://evan.beee.top/img/Screen%20Shot%202022-10-01%20at%207.03.30%20PM.png)

## style

`style` This configuration item is used to configure the basic style of the website.

### primary_color

Set website theme color, support **rgb**, **rgba**, **hexadecimal** and other color formats, for example: `rgb(0, 102, 204)`, `rgba(0, 102, 204, 0.8)`, `#0066cc`. [Web Safe Colors](https://www.bootcss.com/p/websafecolors/) is recommended.

### avatar

Set the author avatar, which will be displayed on the article content page, as shown below.
![Screen Shot 2022-10-01 at 9.58.59 PM](https://evan.beee.top/img/Screen%20Shot%202022-10-01%20at%209.58.59%20PM.png)
You can use **relative path to local image** (that is, store the image under `redefine/source/images/` path) or **image external link URL**.

For example:

- local pictures

  ````yml
  avatar: /images/avatar.svg
  ````

- External link:

  ````yml
  avatar: https://raw.githubusercontent.com/EvanNotFound/hexo-theme-redefine/main/source/images/avatar.svg
  ````

### favicon

To set the favicon icon of the website, you can use **relative path of local image** (that is, the image stored under `redefine/source/images/` path) or **image external link URL**.
![Screen Shot 2022-10-01 at 9.47.54 PM](https://evan.beee.top/img/Screen%20Shot%202022-10-01%20at%209.47.54%20PM.png)

### article\_img\_align

Set the image arrangement position of the article content page, the default is `center`, optional: `left` (left), `center` (center).

### left\_side\_width

Sets the **width** of the left **TOC directory** module. Under normal circumstances, you do not need to modify. To set, keep the unit as `px`.

![Screen Shot 2022-10-01 at 9.49.48 PM](https://evan.beee.top/img/Screen%20Shot%202022-10-01%20at%209.49.48%20PM.png)

### content\_max\_width

Sets the maximum width of the content area. Under normal circumstances, you do not need to modify. To set, keep the unit as `px`.

![Screen Shot 2022-10-01 at 9.55.33 PM](https://evan.beee.top/img/Screen%20Shot%202022-10-01%20at%209.55.33%20PM.png)

### nav_color

````yml
nav_color:
  left: "#f78736" #left side
  right: "#367df7" #right side
  Transparency: 35 #percent (10-99)
````

This is the gradient background setting for the navigation bar.

`left` corresponds to the color on the left

`right` corresponds to the color on the right

`transparency` is the background transparency of the navbar, please use a number between `10-99`

### hover

Set the style when the mouse is hovering (homepage article block, TOC directory block, button, and other modules), you can enable `shadow` and `scale` effects respectively.

- `shadow` shadow effect
- `scale` zoom effect

### first_screen

After opening, it will be displayed on the homepage of the website.

- `enable` whether to enable the first screen
- `background_img` above-the-fold background image, you can use **local image** or **image external link URL**
- `description` above the fold description
- **Enable** the effect of the first screen
  ![Screen Shot 2022-10-01 at 10.00.46 PM](https://evan.beee.top/img/Screen%20Shot%202022-10-01%20at%2010.00.46%20PM.png)

- **Do not turn on** the effect of the first screen
  ![Screen Shot 2022-10-01 at 10.01.01 PM](https://evan.beee.top/img/Screen%20Shot%202022-10-01%20at%2010.01.01%20PM.png)

### scroll

Set the style when the page is scrolled.

- `progress_bar` displays a scrolling **progress bar** at the **top** of the website when the page is scrolled
  ![Screen Shot 2022-10-01 at 10.04.07 PM](https://evan.beee.top/img/Screen%20Shot%202022-10-01%20at%2010.04.07%20PM.png)

- `percent` shows scrolling **percent** in the **lower right corner** of the website when the page is scrolled
  ![Screen Shot 2022-10-01 at 10.07.31 PM](https://evan.beee.top/img/Screen%20Shot%202022-10-01%20at%2010.07.31%20PM.png)

## social_contact

````yml
social_contact: # social contact icons in the first screen, you can add more by using fontawesome icon names
  enable: true
  links:
    github: # your GitHub URL
    instagram: # your Instagram URL
    zhihu: # your ZhiHu URL
    twitter: #yourtwitter URL
    email: # your email
````

Set up third-party social links.

::: warning
Note: `social_contact` only works when above the fold is on!
:::

![Screen Shot 2022-10-01 at 10.09.39 PM](https://evan.beee.top/img/Screen%20Shot%202022-10-01%20at%2010.09.39%20PM.png)

If you want to **change the icon** or **add another 3rd party link**, eg: add Instagram

1. Search for Instagram icons at [Font Awesome](https://fontawesome.com/icons?d=gallery&s=solid&m=free).
   ![image](https://evan.beee.top/img/image.7phjq0rmu7k.png)

1. Copy the icon name (as shown above) and add it to the `social_contact.links` configuration item in the theme configuration file `_config.redefine.yml`.

````yml
social_contact:
enable: true
links:
  instagram: https://www.instagram.com/xxxxxxxx
````

## menu

````yml
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

   ````sh
   $ hexo new page about
   ````

2. Add `About: /about` under the `menu` configuration item in the Redefine theme configuration file `_config.redefine.yml`.

   Among them, the front `About` is the name displayed on the home page, and the latter `/about` is the page path

   ````yml
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
   Do not modify the `title` attribute that is automatically generated when the page is created! Do not delete it!
   For example: `title: about` cannot be modified!
   :::

If you want to jump to a third-party website when you click the menu in the navigation bar, you only need to fill in the value of the configuration item as the URL of the third-party website.
For example: configure to go to Google in the header navigation bar

````yml
menu:
  Google: https://www.google.com/
````


## home\_article

````yml
home_article:
  category:
    enable: false # show category in home page article block
    limit: 3 # max number of categories shown in home page article block
  tag:
    enable: false # show tags in home page article block
    limit: 5 # max number of tags shown in home page article block
````

This configuration item is used to set the label and category information display at the bottom of the homepage article block.


- `category` article category
- `tag` article tag
- `limit` limits the number of displays

## post

````yml
post:
  # Post word count
  # Dependencies: hexo-wordcount (npm install hexo-wordcount)
  # See: https://github.com/willin/hexo-wordcount
  word_count:
    enable: false
    wordcount: false # word count, one article
    min2read: false # time to read, one article

  # Author label
  author_label:
    enable: true
    auto: true # if true, show Lv1, Lv2, Lv3..., If false, show custom label
    # label array item can be one or more
    custom_label_list: [ "Trainee", "Engineer", "Architect", "CTO", "BOSS" ]
````

This configuration item is used to set whether to display **article word count**, **reading time** and **author identification**.

### word\_count

If you want to enable article word count and reading time, you need to install the dependency **hexo-wordcount** in the root directory of the Hexo project.

````sh
$ npm install hexo-wordcount
````

- `wordcount` article word count
- `min2read` article reading time
  ![Screen Shot 2022-10-01 at 10.30.52 PM](https://evan.beee.top/img/Screen%20Shot%202022-10-01%20at%2010.30.52%20PM.png)

### author\_label

To set the **author ID** of the article content page, there are currently two options:

1. `auto` automatically generates `Lv1`, `Lv2`, `Lv3`..., the judgment is based on the number of articles.
   ![Screen Shot 2022-10-02 at 10.04.40 AM](https://evan.beee.top/img/Screen%20Shot%202022-10-02%20at%2010.04.40%20AM.png)

1. `custom_label_list` Custom label list, array items can be **one** or **multiple**, the matching is based on the number of articles.
   ![Screen Shot 2022-10-02 at 10.06.54 AM](https://evan.beee.top/img/Screen%20Shot%202022-10-02%20at%2010.06.54%20AM.png)

  Format reference:

   - an array item `["The one"]`
   - Multiple array items `["The one", "Neo", "God"]`


##code\_copy

````yml
code_copy:
  enable: true
  style: mac # values: default | mac
````

This configuration item is used to set the **code copy** function. After it is turned on, **one key copy** code can be copied to the clipboard.


- Whether `enable` is enabled.

- `style` sets the style of the code block after the code copy function is enabled, optional `default` and `mac`.
  - `default` renderings (hahahahaha there is a bug, so use the `mac` style)
    ![Screen Shot 2022-10-02 at 10.09.02 AM](https://evan.beee.top/img/Screen%20Shot%202022-10-02%20at%2010.09.02%20AM.png)

  - `mac` renderings
    ![Screen Shot 2022-10-02 at 10.09.54 AM](https://evan.beee.top/img/Screen%20Shot%202022-10-02%20at%2010.09.54%20AM.png)

## toc

````yml
toc:
  enable: true

  # Automatically add list number to toc.
  number: false

  # If true, all levels of TOC in a post will be displayed, rather than the activated part of it.
  expand_all: true

  # If true, open TOC whenever you enter the article page
  init_open: true
````

This configuration item is used to set the TOC directory structure of the article. It is a very practical function. You can quickly view the article directory structure and jump. It is recommended to enable it.

![Screen Shot 2022-10-02 at 10.11.31 AM](https://evan.beee.top/img/Screen%20Shot%202022-10-02%20at%2010.11.31%20AM.png)

- `number` automatically numbers the directory structure
  - `number: false`
    ![Screen Shot 2022-10-02 at 10.12.54 AM](https://evan.beee.top/img/Screen%20Shot%202022-10-02%20at%2010.12.54%20AM.png)

  - `number: true`
    ![Screen Shot 2022-10-02 at 10.13.38 AM](https://evan.beee.top/img/Screen%20Shot%202022-10-02%20at%2010.13.38%20AM.png)

- `expand_all` expands all directory structures
  - `expand_all: true` automatically expands all directory structures
  - `expand_all: false` expand the directory of the corresponding position while scrolling the page

- `init_open` whether to automatically open the TOC directory structure when opening the article page


## copyright_info

````yml
copyright_info:
  enable: true
````

This configuration item is used to open the **article copyright information** module of the article content page.

![Screen Shot 2022-10-02 at 10.14.47 AM](https://evan.beee.top/img/Screen%20Shot%202022-10-02%20at%2010.14.47%20AM.png)

## website\_count

````yml
website_count:
  #busuanzi
  # See: http://ibruce.info/2015/04/04/busuanzi/
  busuanzi_count:
    enable: false
    site_uv: false
    site_pv: false
    page_pv: false
````

This configuration item is used to set the website count. Redefine theme has built-in **no garlic** count, no additional configuration is required, just directly select the count item you want to enable.

- `site_uv` number of site visitors (shown at the bottom)
  ![Screen Shot 2022-10-02 at 10.16.54 AM](https://evan.beee.top/img/Screen%20Shot%202022-10-02%20at%2010.16.54%20AM.png)

- `site_pv` total site visits (shown at the bottom)
  ![Screen Shot 2022-10-02 at 10.17.29 AM](https://evan.beee.top/img/Screen%20Shot%202022-10-02%20at%2010.17.29%20AM.png)

- `page_pv` article read count (displayed on article content page)
  ![Screen Shot 2022-10-02 at 10.18.42 AM](https://evan.beee.top/img/Screen%20Shot%202022-10-02%20at%2010.18.42%20AM.png)


## local\_search

````yml
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

   ````yml
   # Search
   ## See: https://github.com/theme-next/hexo-generator-searchdb
   search:
     path: search.json
     field: post
     content: true
     format: striptags
   ````

1. The value of the `local_search.enable` configuration item in the theme configuration file `_config.redefine.yml` is set to `true`.

   ````yml
   local_search:
     enable: true
   ````

   ::: tip
   The `local_search.preload` configuration item indicates whether to **preload search data** on page load.
   :::

Site-wide article search renderings:

![Screen Shot 2022-10-02 at 10.22.29 AM](https://evan.beee.top/img/Screen%20Shot%202022-10-02%20at%2010.22.29%20AM-4745029.png)

## comment

````yml
comment:
  enable: false
  use: waline # values: waline | gitalk | twikoo

  #waline
  # See: https://waline.js.org/guide/get-started.html
  waline:
    serverUrl: # Waline server url(vercel) example: https://example.example.com
    lang: zh-CN # Waline language, default: zh-CN. See: https://waline.js.org/guide/client/i18n.html
    dark: auto # Waline dark mode, default: auto. See: https://waline.js.org/reference/component.html#dark
    requiredMeta: ['nick'] # Waline required meta, default: ['nick'], see: https://waline.js.org/reference/component.html#requiredmeta

  # Gitalk
  # See: https://github.com/gitalk/gitalk
  gitalk:
    github_id: # GitHub repo owner
    repository: # Repository name to store issues
    client_id: # GitHub Application Client ID
    client_secret: # GitHub Application Client Secret

  #Twikoo
  # See: https://github.com/imaegoo/twikoo
  twikoo:
    visitor: true
    env_id: # Vercel or Tencent Cloud Function environment ID
    region: # environment region. If select Guangzhou, fill in "ap-guangzhou". (optional)
````

This configuration item is used to enable and set the commenting system of the theme.

### use

````yml
use: waline # values: waline | gitalk | twikoo
````

Configure which commenting system to use. Currently the theme has built-in Valine, Gitalk and Twikoo, you can use other ones.

### Waline

A backend commenting system derived from [Valine](https://valine.js.org/). Waline can be equivalent to With backend Valine. Compared with valine, it is more secure, fast, concise, and open source.

View details:

- https://github.com/walinejs/waline
- https://waline.js.org/

How to use in Redefine theme:

#### LeanCloud settings (database)

1. [Login](https://console.leancloud.app/login) or [Register](https://console.leancloud.app/register) `LeanCloud International Edition` and enter the [Console](https:/ /console.leancloud.app/apps)
2. Click on the upper left corner [Create App](https://console.leancloud.app/apps) and give a name you like (please choose the free development version):

![Create app](https://evan.beee.top/img/leancloud-1.f7a36b20.png)

3. Go to Apps, select `Settings` > `App Key` in the lower left corner. You can see your `APP ID`, `APP Key` and `Master Key`. Please record them for later use.

![](https://evan.beee.top/img/leancloud-2.4cc69975.png)

:::warning

**The domestic version needs to complete the record access**

If you are using the domestic version of Leancloud ([leancloud.cn](https://leancloud.cn/)), we recommend you switch to the international version ([leancloud.app](https://leancloud.com/) .app/)). Otherwise, you need to bind an additional **registered** domain name to the application, purchase a dedicated IP, and complete the registration access:

- Log in to the domestic version and enter the application you need to use
- Select `Settings` > `Domain binding` > `API access domain name` > `Bind new domain name` > Enter the domain name > `OK`.
- Follow the prompts on the page to complete the CNAME resolution on DNS as required.
- Purchase a dedicated IP and submit a work order to complete the record access. (The current price of dedicated IP is ￥50/unit/month)

![Domain Settings](https://evan.beee.top/img/leancloud-3.3ae5fb8d.png)

:::

#### Vercel deployment (server)

[![Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fwalinejs%2Fwaline%2Ftree% 2Fmain%2Fexample)

1. Click the button above to jump to Vercel for server-side deployment.

   :::tip

   Note: If you are not logged in, Vercel will ask you to register or log in, please use your GitHub account to log in quickly.

   :::

2. Enter a Vercel project name you like and click `Create` to continue:

   ![Create project](https://evan.beee.top/img/vercel-1.4e9dd7aa.png)

3. At this point, Vercel will help you create and initialize a warehouse based on the Waline template. The warehouse name is the project name you entered earlier.

   ![deploy](https://evan.beee.top/img/vercel-3.0918fcee.png)

   After a minute or two, a full screen of fireworks will celebrate your deployment. At this point, click `Go to Dashboard` to jump to the application console.

   ![deploy](https://evan.beee.top/img/vercel-4.f7f4c12b.png)

4. Click `Settings` - `Environment Variables` at the top to enter the environment variable configuration page, and configure three environment variables `LEAN_ID`, `LEAN_KEY` and `LEAN_MASTER_KEY`. Their values correspond to the `APP ID`, `APP KEY`, `Master Key` obtained in LeanCloud in the previous step.

   ![Set environment variables](https://evan.beee.top/img/vercel-5.3a5de7f0.png)

   Note

   If you use the domestic version of LeanCloud, please additionally configure the `LEAN_SERVER` environment variable, the value of which is your bound domain name.

5. After the environment variable configuration is complete, click `Deployments` at the top and click the `Redeploy` button to the right of the latest deployment at the top to redeploy. This step is to make the environment variables just set take effect.

   ![redeploy](https://evan.beee.top/img/vercel-6.c1af01b1.png)

6. At this point, it will jump to the `Overview` interface to start the deployment. After a while, the `STATUS` will become `Ready`. At this point, please click `Visit` to jump to the deployed website address, which is your server address.

   ![redeploy success](https://evan.beee.top/img/vercel-7.2478902b.png)

   #### Bind domain name (optional)

   If you don't want to use vercel's domain, you can add your own domain

   1. Click `Settings` - `Domains` at the top to enter the domain name configuration page

   2. Enter the domain name to be bound and click `Add`

      ![Add domain](https://evan.beee.top/img/vercel-8.49378bd3.png)

   3. Add a new `CNAME` resolution record at the domain name server

      | Type  | Name    | Value                |
      | ----- | ------- | -------------------- |
      | CNAME | example | cname.vercel-dns.com |

   4. Wait for it to take effect, you can access it through your own domain name🎉

      - Comment system: example.yourdomain.com
      - Comment management: example.yourdomain.com/ui

      ![success](https://evan.beee.top/img/vercel-9.a29236ac.png)

#### Redefine theme settings



Fill in the necessary parameter information (APP ID, APP Key, etc.) in the Redefine theme configuration file. The example is as follows.

````yml
waline:
  serverUrl: # Waline server url(vercel) example: https://example.example.com
  lang: zh-CN # Waline language, default: zh-CN
  dark: auto # Waline dark mode, default: auto
````

- `serverUrl` is required. It is your Vercel domain name (or a custom domain name you bind)
- `lang` is required. Comment language, see [Waline official documentation#lang](https://waline.js.org/reference/component.html#lang)
- `dark` is required. Whether to start dark mode, see [Waline official documentation#dark](https://waline.js.org/reference/component.html#dark)
- `requiredMeta` is required. See [Waline official documentation#requiredMeta](https://waline.js.org/reference/component.html#requiredmeta)

Waline review plugin renderings.

![Screen Shot 2022-10-03 at 10.17.15 PM](https://evan.beee.top/img/Screen%20Shot%202022-10-03%20at%2010.17.15%20PM.png)

### Gitalk

Gitalk, a comment plugin based on Github Issue and Preact.

View details:

- https://github.com/gitalk/gitalk
- https://gitalk.github.io/

How to use in Redefine:

1. Create a new GitHub OAuth App
   Register or login [GitHub](https://github.com/), [Create a new OAuth App](https://github.com/settings/applications/new), where `Homepage URL` and `Authorization callback URL' ` Just fill in your own domain.

   After the OAuth App is successfully created, save the `Client ID` and `Client Secret`, which will be used later.

   ![Screen Shot 2022-10-02 at 10.24.53 AM](https://evan.beee.top/img/Screen%20Shot%202022-10-02%20at%2010.24.53%20AM.png)

2. Create a new GitHub repository
   Register or log in to [GitHub](https://github.com/), [create a new repository (repository)](https://github.com/new), and open Issues (manually add an Issue, the content Fill it in and you can open it), which is used to store the comment content.

3. Fill in your `GitHub username`, `repository name`, `Client ID` and `Client Secret` of the OAuth App respectively in the theme configuration file, as shown in the following example.

   ````yml
   gitalk:
     github_id: XPoet
     repository: hexo-site-comments
     client_id: cdffffffffffffffffffffff
     client_secret: f4b5555555555555555555555555555
   ````

4. Gitalk comment plug-in renderings.
   ![image](https://evan.beee.top/img/image.4bv32zei1580.png)


### Twikoo

Twikoo, a concise, safe, and free static website commenting system developed based on Tencent Cloud.

View details:

- https://github.com/imaegoo/twikoo
- https://twikoo.js.org/

**Ex. Tencent Cloud CloudBase usage tutorial, please check Twikoo documentation for other methods**

If you plan to deploy to an existing cloud development environment, start directly with step 3.

1. Go to the [CloudBase](https://curl.qcloud.com/KnnJtUom) event page, scroll to the "New User Exclusive" section, select a suitable package (usually a 0 yuan package), and click "Immediately". Buy", and follow the prompts to create a good environment.
   ::: tip

* It is recommended to create a Shanghai environment. If you choose Guangzhou environment, you need to configure `region: ap-guangzhou`
* Environment name is free to fill in
* It is recommended to choose the billing method `yearly and monthly`, the package version `basic class 1`, no charge will be charged if the free quota is exceeded
* If prompted to choose "Apply Template", choose "Empty Template"
  :::

2. Enter [Cloud Development Console](https://console.cloud.tencent.com/tcb/)<br>
3. Go to [Environment - Login Authorization](https://console.cloud.tencent.com/tcb/env/login), enable "Anonymous Login"
4. Go to [Environment-Security Configuration](https://console.cloud.tencent.com/tcb/env/safety), and add the website domain name to "WEB security domain name"
5. Go to [Environment - Cloud Function](https://console.cloud.tencent.com/tcb/scf/index), click "Create Cloud Function"
6. Please fill in the function name: `twikoo`, the creation method please select: `blank function`, the operating environment please select: `Nodejs 10.15`, the function memory please select: `128MB`, click "Next"
7. Clear the sample code in the input box, copy the following code, paste it into the "Function Code" input box, and click "OK"

``` js
exports.main = require('twikoo-func').main
````

8. After the creation is complete, click "twikoo" to enter the cloud function details page, enter the "Function Code" tab, click "File - New File", enter `package.json`, and press Enter
9. Copy the following code, paste it into the code box, and click "Save and Install Dependencies"

```` json
{ "dependencies": { "twikoo-func": "1.2.0" } }
````

10. Fill in the environment ID `env_id` in the Redefine theme configuration file

    ````yml
    twikoo:
      env_id: xxxx-xxxx..........
      region:
    ````

    If the Guangzhou environment is selected, the value of `region` needs to be filled in as `ap-guangzhou`. If `Vercel` is used, `region` can be left empty.

    ````yml
    twikoo:
      region: ap-guangzhou
    ````

11. Twikoo comments plugin renderings.

    ![image](https://evan.beee.top/img/image.6cstpi6jsjg0.png)


## rss

````yml
rss:
  enable: false
````

This configuration item is used to enable the RSS subscription function.

Start the process:

1. Install the plugin `hexo-generator-feed` in the root directory of the Hexo project.

   ```bash
   $ npm install hexo-generator-feed
   ````

1. Add the following configuration items at the bottom of the Hexo configuration file `_config.redefine.yml`.

   ````yml
   # Feed Atom
   # npm install hexo-generator-feed
   feed:
     type: atom
     path: atom.xml
     limit: 20
   ````

1. Enable RSS in the Redefine theme configuration file `_config.redefine.yml`.

   ````yml
   rss:
     enable: true
   ````

1. After the RSS subscription function is enabled, the **RSS button** will be displayed in the **lower right corner** tool button group.

   ![Screen Shot 2022-10-02 at 10.28.49 AM](https://evan.beee.top/img/Screen%20Shot%202022-10-02%20at%2010.28.49%20AM.png)

## lazyload

````yml
lazyload:
  enable: false
````

This configuration item is used to enable lazy loading of images.

When enabled, all images will not be loaded when the page is opened, and the corresponding image resources will only be loaded when the window scrolls to the image position.

Effect picture:
![image](https://evan.beee.top/img/image.4xw0l2pjrbo0.png)

::: tip
When there are too many pictures, turn on the lazy loading function, which can effectively improve the page loading speed!
:::

## cdn

:::danger

This is a bug, please do not turn it on, it will be fixed! !

:::

## pjax

````yml
pjax:
  enable: false
````

This configuration item is used to enable the PJAX function of the theme, bringing you a single-page application experience.

::: tip
PJAX works by fetching HTML from the server via Ajax, and replacing the content of the container on the page with the HTML from the Ajax request, then using pushState to update the browser's current URL without reloading the page's layout or any resources (JS, CSS), Thus giving the appearance of fast, full page loads. But it's just Ajax and pushState.
:::

After PJAX is enabled, when you click the page to jump, a colored progress bar will appear at the top of the page.

## footer

````yml
footer:
  since: 2020 # the starting year of your website, which can be null
  icp: # ICP record number of your website, Can be null
````

This configuration item is used to set the information display at the bottom of the website.

- `since` sets the starting year of the website, it can be empty.
- `icp` sets the website ICP record number, which can be empty.

![Screen Shot 2022-10-02 at 10.31.28 AM](https://evan.beee.top/img/Screen%20Shot%202022-10-02%20at%2010.31.28%20AM.png)