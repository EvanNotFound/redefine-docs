# 配置指南

Redefine 主题配置指南。

本页面中，

`主题配置文件` 均指 Hexo 根目录下的 `_config.redefine.yml` 或者 `/themes/redefine/_config.yml` 或者 `/node_modules/hexo-theme-redefine/_config.yml`

`站点配置文件` 均指 Hexo 根目录下的 `_config.yml`

## 创建主题配置文件

为了日后实现平滑升级，请在 **Hexo 根目录中**创建 `_config.redefine.yml` 并将[这里的代码](https://github.com/EvanNotFound/hexo-theme-redefine/blob/main/_config.yml)全部复制进去保存，以后要更改主题设置就在 `_config.redefine.yml` 里面更改。

:::danger

请注意以下几点：

1. `_config.redefine.yml` 永远都会覆盖主题根目录的 `_config.yml` 设置
2. 主题更新后，请务必把  `/node_modules/hexo-theme-redefine/_config.yml`  和 `主题配置文件 (_config.redefine.yml)` 进行比对。如果文件出现了更改，那你必须要把更改过的项同步在 `_config.redefine.yml` 中。VS Code 的[文件比对](/usage-tutorial/advanced.html#%E6%96%87%E4%BB%B6%E6%AF%94%E5%AF%B9) 可能对你迁移有帮助。
3. 请不要删除 `_config.yml` 中的任何项，否则 `_config.redefine.yml` 不会生效

:::

本教程左侧目录按照顺序对应 `_config.redefine.yml` 中的选项，请一步一步来

## base_info

```yml
base_info:
  title: Theme Redefine # Site title
  author: The Redefine Team # Author name
  url: https://www.evanluo.top # Site url
```

请在该配置项里**正确**填写你网站的基本信息。

- `title` **网站标题**（将显示在网站菜单栏，如下图）
  ![Screen Shot 2022-10-01 at 6.57.41 PM](https://evan.beee.top/img/Screen%20Shot%202022-10-01%20at%206.57.41%20PM.png)
- `author` **作者昵称**（将显示在网站底部和文章内容页，如下图）
  - 网站底部![Screen Shot 2022-10-01 at 7.01.00 PM](https://evan.beee.top/img/Screen%20Shot%202022-10-01%20at%207.01.00%20PM.png)
    
  - 文章内容页
    ![Screen Shot 2022-10-01 at 7.02.10 PM](https://evan.beee.top/img/Screen%20Shot%202022-10-01%20at%207.02.10%20PM.png)
- `url` **网站域名**（将用于在文章内容页的版权信息模块正确拼接文章链接，如下图）
  ![Screen Shot 2022-10-01 at 7.03.30 PM](https://evan.beee.top/img/Screen%20Shot%202022-10-01%20at%207.03.30%20PM.png)


## style

`style` 该配置项用于配置网站的基本样式。

### primary_color

设置网站主题色，支持 **rgb**、**rgba**、**十六进制**等颜色格式，例如：`rgb(0, 102, 204)`、`rgba(0, 102, 204, 0.8)`、`#0066cc`。建议使用 [Web 安全色](https://www.bootcss.com/p/websafecolors/)。

### avatar

设置作者头像，将显示在文章内容页，如下图。
![Screen Shot 2022-10-01 at 9.58.59 PM](https://evan.beee.top/img/Screen%20Shot%202022-10-01%20at%209.58.59%20PM.png)
你可以使用**本地图片的相对路径**（即存储 `redefine/source/images/` 路径下的图片)或**图片外链 URL**。  

写法参考：

- 本地图片
  ```yml
  avatar: /images/avatar.svg
  ```
- 图片外链
  ```yml
  avatar: https://raw.githubusercontent.com/EvanNotFound/hexo-theme-redefine/main/source/images/avatar.svg
  ```

### favicon

设置网站 favicon 图标，你可以使用**本地图片的相对路径**（即存储 `redefine/source/images/` 路径下的图片)或**图片外链 URL**。 
![Screen Shot 2022-10-01 at 9.47.54 PM](https://evan.beee.top/img/Screen%20Shot%202022-10-01%20at%209.47.54%20PM.png)

### article\_img\_align

设置文章内容页的图片排列位置，默认 `center`，可选：`left`（靠左）、`center`（居中）。

### left\_side\_width

设置左侧 **TOC 目录**模块的**宽度**。一般情况下，你无需修改。如需设置，请保持单位为 `px`。

![Screen Shot 2022-10-01 at 9.49.48 PM](https://evan.beee.top/img/Screen%20Shot%202022-10-01%20at%209.49.48%20PM.png)

### content\_max\_width

设置内容区域的最大宽度。一般情况下，你无需修改。如需设置，请保持单位为 `px`。

![Screen Shot 2022-10-01 at 9.55.33 PM](https://evan.beee.top/img/Screen%20Shot%202022-10-01%20at%209.55.33%20PM.png)

### nav_color

```yml
nav_color: 
  left: "#f78736" #left side 
  right: "#367df7"  #right side
  transparency: 35 #percent (10-99)
```

这是导航栏的渐变背景设置。

`left` 对应左边的颜色

`right` 对应右边的颜色

`transparency` 是导航栏的背景透明度，请使用 `10-99` 之间的数字

### hover

设置鼠标悬浮时的样式（主页文章块、TOC 目录块、按钮等模块），可分别开启 `shadow` 和 `scale` 效果。

- `shadow` 阴影效果
- `scale` 缩放效果

### first_screen

开启后将显示在网站首页。

- `enable` 是否开启首屏
- `background_img` 首屏背景图片，可使用 **本地图片** 或 **图片外链 URL**
- `description` 首屏描述
- **开启**首屏的效果
  ![Screen Shot 2022-10-01 at 10.00.46 PM](https://evan.beee.top/img/Screen%20Shot%202022-10-01%20at%2010.00.46%20PM.png)

- **不开启**首屏的效果  
  ![Screen Shot 2022-10-01 at 10.01.01 PM](https://evan.beee.top/img/Screen%20Shot%202022-10-01%20at%2010.01.01%20PM.png)

### scroll

设置页面滚动时的样式。

- `progress_bar` 页面滚动时在网站**顶部**显示滚动**进度条**
  ![Screen Shot 2022-10-01 at 10.04.07 PM](https://evan.beee.top/img/Screen%20Shot%202022-10-01%20at%2010.04.07%20PM.png)

- `percent` 页面滚动时在网站**右下角**显示滚动**百分比**
  ![Screen Shot 2022-10-01 at 10.07.31 PM](https://evan.beee.top/img/Screen%20Shot%202022-10-01%20at%2010.07.31%20PM.png)

## social_contact

```yml
social_contact: # social contact icons in the first screen, you can add more by using fontawesome icon names
  enable: true
  links:
    github:  # your GitHub URL
    instagram: # your Instagram URL
    zhihu:  # your ZhiHu URL
    twitter:  # your twitter URL
    email:  # your email
```

设置第三方社交链接。

::: warning
注意：`social_contact` 仅在首屏开启状态下才生效！
:::

![Screen Shot 2022-10-01 at 10.09.39 PM](https://evan.beee.top/img/Screen%20Shot%202022-10-01%20at%2010.09.39%20PM.png)

如果要**更改图标**或**添加其他第三方链接**，例如：添加 Instagram

1. 在 [Font Awesome](https://fontawesome.com/icons?d=gallery&s=solid&m=free) 搜索 Instagram 图标。
   ![image](https://evan.beee.top/img/image.7phjq0rmu7k.png)

1. 复制图标名（如上图），添加到主题配置文件 `_config.redefine.yml` 的 `social_contact.links` 配置项里面。

```yml
social_contact:
enable: true
links:
  instagram: https://www.instagram.com/xxxxxxxx
```

## menu

```yml
menu:
  Home: /
  Archives: /archives
  # Categories: /categories
  # Tags: /tags
  # Links: /links
  # About: /about
  # ...
```

网站头部导航菜单，如需新增导航菜单，按上面格式填写，**同时需要创建相对应的 Hexo 页面**。

![Screen Shot 2022-10-01 at 10.12.05 PM](https://evan.beee.top/img/Screen%20Shot%202022-10-01%20at%2010.12.05%20PM.png)

Hexo 项目并没有 categories（分类）、tags（标签）、about（关于）、links（友链）等页面，需要自己手动创建。

以创建「 about（关于）」页面为例：

1. 在 Hexo 项目根目录下执行命令 `hexo new page about` ，即可在 `source` 目录下生成 about 文件夹。
   ```sh
   $ hexo new page about
   ```

2. 在 Redefine 主题配置文件 `_config.redefine.yml` 的 `menu` 配置项下添加 `About: /about`。

   其中，前面的 `About` 是显示在主页的名称，后面的 `/about` 是页面路径

   ```yml
   menu:
     Home: /
     Archives: /archives
     # Categories: /categories
     # Tags: /tags
     # Links: /links
     About: /about
   ```

3. 打开 Hexo 项目下 `/source/about/index.md` 文件，填写 about 页面的内容。
   支持 Markdown 和 HTML 格式；  

   参考如下：

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
   ::: tip
   `comment: true` 表示该页面**开启评论功能**。
   :::

   ::: danger
   创建页面时自动生成的 `title` 属性不要修改！不要删除！  
   例如：`title: about` 不能修改！不能删除！
   :::

如果要实现在导航栏点击菜单时跳转到第三方网站，只需把配置项的值填写为第三方网站的 URL 即可。
例如：在头部导航栏配置跳转到 Google 网站的菜单

```yml
menu:
  Google: https://www.google.com/
```


## home\_article

```yml
home_article:
  category:
    enable: false     # show category in home page article block
    limit: 3          # max number of categories shown in home page article block
  tag:
    enable: false     # show tags in home page article block
    limit: 5          # max number of tags shown in home page article block
```
该配置项用于设置首页文章块底部的标签和分类信息显示。


- `category` 文章分类
- `tag` 文章标签
- `limit` 限制显示的个数

## post

```yml
post:
  # Post word count
  # Dependencies: hexo-wordcount (npm install hexo-wordcount)
  # See: https://github.com/willin/hexo-wordcount
  word_count:
    enable: false
    wordcount: false  # word count, one article
    min2read: false   # time to read, one article

  # Author label
  author_label:
    enable: true
    auto: true  # if true, show Lv1, Lv2, Lv3... , If false, show custom label
    # label array item can be one or more
    custom_label_list: [ "Trainee", "Engineer", "Architect", "CTO", "BOSS" ]
```

该配置项用于设置是否显示**文章字数统计**、**阅读时长**和**作者标识**。

### word\_count

如果要开启文章字数统计和阅读时长，需在 Hexo 项目根目录下安装依赖 **hexo-wordcount**。

```sh
$ npm install hexo-wordcount
```

- `wordcount` 文章字数统计
- `min2read` 文章阅读时长
![Screen Shot 2022-10-01 at 10.30.52 PM](https://evan.beee.top/img/Screen%20Shot%202022-10-01%20at%2010.30.52%20PM.png)

### author\_label

设置文章内容页的**作者标识**，目前有两种方案：

1. `auto` 自动生成 `Lv1`、`Lv2`、`Lv3` ......，判断依据为文章数量。
![Screen Shot 2022-10-02 at 10.04.40 AM](https://evan.beee.top/img/Screen%20Shot%202022-10-02%20at%2010.04.40%20AM.png)

1. `custom_label_list` 自定义标识列表，数组项可以 **一个** 或 **多个**，匹配的依据是按文章数量。  
![Screen Shot 2022-10-02 at 10.06.54 AM](https://evan.beee.top/img/Screen%20Shot%202022-10-02%20at%2010.06.54%20AM.png)

  格式参考：
   - 一个数组项 `["The one"]`
   - 多个数组项 `["The one", "Neo", "God"]`


## code\_copy

```yml
code_copy:
  enable: true
  style: mac    # values: default | mac
```

该配置项用于设置**代码复制**功能，开启后可**一键复制**代码到剪贴板。


- `enable` 是否开启。

- `style` 设置开启代码复制功能后代码块的样式，可选 `default` 和 `mac`。
  - `default` 效果图（哈哈哈哈哈哈出bug啦，所以用 `mac` 样式吧）
    ![Screen Shot 2022-10-02 at 10.09.02 AM](https://evan.beee.top/img/Screen%20Shot%202022-10-02%20at%2010.09.02%20AM.png)
  
  - `mac` 效果图
    ![Screen Shot 2022-10-02 at 10.09.54 AM](https://evan.beee.top/img/Screen%20Shot%202022-10-02%20at%2010.09.54%20AM.png)



## toc

```yml
toc:
  enable: true

  # Automatically add list number to toc.
  number: false

  # If true, all level of TOC in a post will be displayed, rather than the activated part of it.
  expand_all: true

  # If true, open TOC every time when you enter the article page
  init_open: true
```

该配置项用于设置文章TOC目录结构，非常实用的功能，可以快速查看文章目录结构和跳转，建议开启。

![Screen Shot 2022-10-02 at 10.11.31 AM](https://evan.beee.top/img/Screen%20Shot%202022-10-02%20at%2010.11.31%20AM.png)

- `number` 给目录结构自动加上数字编号
  - `number: false`
    ![Screen Shot 2022-10-02 at 10.12.54 AM](https://evan.beee.top/img/Screen%20Shot%202022-10-02%20at%2010.12.54%20AM.png)

  - `number: true`
    ![Screen Shot 2022-10-02 at 10.13.38 AM](https://evan.beee.top/img/Screen%20Shot%202022-10-02%20at%2010.13.38%20AM.png)

- `expand_all` 展开所有目录结构
  - `expand_all: true` 自动展开所有的目录结构
  - `expand_all: false` 边滚动页面边展开对应的位置的目录

- `init_open` 打开文章页时是否自动打开 TOC 目录结构 


## copyright_info

```yml
copyright_info:
  enable: true
```

该配置项用于开启文章内容页的**文章版权信息**模块。

![Screen Shot 2022-10-02 at 10.14.47 AM](https://evan.beee.top/img/Screen%20Shot%202022-10-02%20at%2010.14.47%20AM.png)

## website\_count

```yml
website_count:
  # busuanzi
  # See: http://ibruce.info/2015/04/04/busuanzi/
  busuanzi_count:
    enable: false
    site_uv: false
    site_pv: false
    page_pv: false
```

该配置项用于设置网站计数，Redefine 主题内置**不蒜子**计数，无需额外配置，直接选择你要开启的计数项即可。

- `site_uv` 网站访问人数（显示在底部）
  ![Screen Shot 2022-10-02 at 10.16.54 AM](https://evan.beee.top/img/Screen%20Shot%202022-10-02%20at%2010.16.54%20AM.png)

- `site_pv` 网站总访问量（显示在底部）
  ![Screen Shot 2022-10-02 at 10.17.29 AM](https://evan.beee.top/img/Screen%20Shot%202022-10-02%20at%2010.17.29%20AM.png)

- `page_pv` 文章阅读次数（显示在文章内容页）
  ![Screen Shot 2022-10-02 at 10.18.42 AM](https://evan.beee.top/img/Screen%20Shot%202022-10-02%20at%2010.18.42%20AM.png)


## local\_search

```yml
local_search:
  enable: false
  preload: false     # Preload the search data when the page loads
```

该配置项用于设置网站搜索功能，非常实用，建议开启。开启后，头部导航栏右侧将出现**搜索按钮**。

![Screen Shot 2022-10-02 at 10.19.28 AM](https://evan.beee.top/img/Screen%20Shot%202022-10-02%20at%2010.19.28%20AM.png)

搜索功能配置流程：

1. 在 Hexo 项目根目录下安装插件 `hexo-generator-searchdb`。

   ```bash
   $ npm install hexo-generator-searchdb
   ```

1. 在 Hexo 配置文件 `_config.redefine.yml` 里最底下添加如下配置项。

   ```yml
   # Search
   ## See: https://github.com/theme-next/hexo-generator-searchdb
   search:
     path: search.json
     field: post
     content: true
     format: striptags
   ```

1. 主题配置文件 `_config.redefine.yml` 的 `local_search.enable` 配置项的值设为 `true`。

   ```yml
   local_search:
     enable: true
   ```

   ::: tip
   `local_search.preload` 配置项表示是否在页面加载时**预加载搜索数据**。
   :::

全站文章搜索效果图：

![Screen Shot 2022-10-02 at 10.22.29 AM](https://evan.beee.top/img/Screen%20Shot%202022-10-02%20at%2010.22.29%20AM-4745029.png)


## comment

```yml
comment:
  enable: false
  use: waline # values: waline | gitalk | twikoo

  # Waline
  # See: https://waline.js.org/guide/get-started.html
  waline:
    serverUrl:  # Waline server url(vercel) example: https://example.example.com
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

  # Twikoo
  # See: https://github.com/imaegoo/twikoo
  twikoo:
    visitor: true
    env_id: # Vercel or Tencent Cloud Function environment ID
    region: # environment region. If select Guangzhou, fill in "ap-guangzhou". (optional)
```

该配置项用于开启和设置主题的评论系统。

### use

```yml
use: waline  # values: waline | gitalk | twikoo
```
配置使用哪款评论系统。目前主题内置 Valine、Gitalk 和 Twikoo，你可以使用其他一款。

### Waline

一款从 [Valine](https://valine.js.org/) 衍生的带后端评论系统。可以将 Waline 等价成 With backend Valine. 相对于 valine 更加安全，快速，简洁，开源。

详情查看：

- https://github.com/walinejs/waline
- https://waline.js.org/

在 Redefine主题中如何使用：

#### LeanCloud 设置 (数据库)

1. [登录](https://console.leancloud.app/login) 或 [注册](https://console.leancloud.app/register) `LeanCloud 国际版` 并进入 [控制台](https://console.leancloud.app/apps)
2. 点击左上角 [创建应用](https://console.leancloud.app/apps) 并起一个你喜欢的名字 (请选择免费的开发版):

![创建应用](https://evan.beee.top/img/leancloud-1.f7a36b20.png)

3. 进入应用，选择左下角的 `设置` > `应用 Key`。你可以看到你的 `APP ID`, `APP Key` 和 `Master Key`。请记录它们，以便后续使用。

![](https://evan.beee.top/img/leancloud-2.4cc69975.png)

:::warning

**国内版需要完成备案接入**

如果你正在使用 Leancloud 国内版 ([leancloud.cnopen in new window](https://leancloud.cn/))，我们推荐你切换到国际版 ([leancloud.appopen in new window](https://leancloud.app/))。否则，你需要为应用额外绑定**已备案**的域名，同时购买独立 IP 并完成备案接入:

- 登录国内版并进入需要使用的应用
- 选择 `设置` > `域名绑定` > `API 访问域名` > `绑定新域名` > 输入域名 > `确定`。
- 按照页面上的提示按要求在 DNS 上完成 CNAME 解析。
- 购买独立 IP 并提交工单完成备案接入。(独立 IP 目前价格为 ￥ 50/个/月)

![域名设置](https://evan.beee.top/img/leancloud-3.3ae5fb8d.png)

:::

#### Vercel 部署 (服务端)

[![Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fwalinejs%2Fwaline%2Ftree%2Fmain%2Fexample)

1. 点击上方按钮，跳转至 Vercel 进行 Server 端部署。

   :::tip

   注：如果你未登录的话，Vercel 会让你注册或登录，请使用 GitHub 账户进行快捷登录。

   :::

2. 输入一个你喜欢的 Vercel 项目名称并点击 `Create` 继续:

   ![创建项目](https://evan.beee.top/img/vercel-1.4e9dd7aa.png)

3. 此时 Vercel 会基于 Waline 模板帮助你新建并初始化仓库，仓库名为你之前输入的项目名。

   ![deploy](https://evan.beee.top/img/vercel-3.0918fcee.png)

   一两分钟后，满屏的烟花会庆祝你部署成功。此时点击 `Go to Dashboard` 可以跳转到应用的控制台。

   ![deploy](https://evan.beee.top/img/vercel-4.f7f4c12b.png)

4. 点击顶部的 `Settings` - `Environment Variables` 进入环境变量配置页，并配置三个环境变量 `LEAN_ID`, `LEAN_KEY` 和 `LEAN_MASTER_KEY` 。它们的值分别对应上一步在 LeanCloud 中获得的 `APP ID`, `APP KEY`, `Master Key`。

   ![设置环境变量](https://evan.beee.top/img/vercel-5.3a5de7f0.png)

   注

   如果你使用 LeanCloud 国内版，请额外配置 `LEAN_SERVER` 环境变量，值为你绑定好的域名。

5. 环境变量配置完成之后点击顶部的 `Deployments` 点击顶部最新的一次部署右侧的 `Redeploy` 按钮进行重新部署。该步骤是为了让刚才设置的环境变量生效。

   ![redeploy](https://evan.beee.top/img/vercel-6.c1af01b1.png)

6. 此时会跳转到 `Overview` 界面开始部署，等待片刻后 `STATUS` 会变成 `Ready`。此时请点击 `Visit` ，即可跳转到部署好的网站地址，此地址即为你的服务端地址。

   ![redeploy success](https://evan.beee.top/img/vercel-7.2478902b.png)

   #### 绑定域名 (可选)

   如果你不想用 vercel 自带域名，可以绑定自己域名

   1. 点击顶部的 `Settings` - `Domains` 进入域名配置页

   2. 输入需要绑定的域名并点击 `Add`

      ![Add domain](https://evan.beee.top/img/vercel-8.49378bd3.png)

   3. 在域名服务器商处添加新的 `CNAME` 解析记录

      | Type  | Name    | Value                |
      | ----- | ------- | -------------------- |
      | CNAME | example | cname.vercel-dns.com |

   4. 等待生效，你可以通过自己的域名来访问了🎉

      - 评论系统：example.yourdomain.com
      - 评论管理：example.yourdomain.com/ui

      ![success](https://evan.beee.top/img/vercel-9.a29236ac.png)

#### Redefine 主题设置



在 Redefine 主题配置文件填写必要参数信息（APP ID、APP Key 等），示例如下。

```yml
waline:
  serverUrl:  # Waline server url(vercel) example: https://example.example.com
  lang: zh-CN # Waline language, default: zh-CN
  dark: auto # Waline dark mode, default: auto
```

- `serverUrl` 必填。就是你的 Vercel 域名（也可以是你绑定的自定义域名）
- `lang` 必填。评论语言，详见[Waline 官方文档#lang](https://waline.js.org/reference/component.html#lang)
- `dark` 必填。是否开始暗黑模式，详见[Waline 官方文档#dark](https://waline.js.org/reference/component.html#dark)

Waline 评论插件效果图。

![Screen Shot 2022-10-03 at 10.17.15 PM](https://evan.beee.top/img/Screen%20Shot%202022-10-03%20at%2010.17.15%20PM.png)

### Gitalk

Gitalk，一个基于 Github Issue 和 Preact 开发的评论插件。

详情查看：

- https://github.com/gitalk/gitalk
- https://gitalk.github.io/

在 Redefine 中如何使用：

1. 新建 GitHub OAuth App  
   注册或登录 [GitHub](https://github.com/)，[创建新的 OAuth App](https://github.com/settings/applications/new)，其中 `Homepage URL` 和 `Authorization callback URL` 均填写自己的域名即可。

   OAuth App 创建成功后，把 `Client ID` 和 `Client Secret` 保存起来，下面要用到。

   ![Screen Shot 2022-10-02 at 10.24.53 AM](https://evan.beee.top/img/Screen%20Shot%202022-10-02%20at%2010.24.53%20AM.png)

2. 新建 GitHub 仓库
   注册或登录 [GitHub](https://github.com/)，[创建一个新的仓库（repository）](https://github.com/new)，并打开 Issues（自己手动增加一个 Issue，内容随便填写，即可打开），用于存储评论内容。

3. 把自己的 `GitHub 用户名`、`仓库名` 、OAuth App 的 `Client ID` 、`Client Secret` 分别填写在主题配置文件里，如下示例。

   ```yml
   gitalk:
     github_id: EvanNotFound
     repository: hexo-site-comments
     client_id: cdfffffffffffffffffffff
     client_secret: f4b55555555555555555555555555555
   ```

4. Gitalk 评论插件效果图。
   ![image](https://evan.beee.top/img/image.4bv32zei1580.png)


### Twikoo

Twikoo，一个简洁、安全、免费的静态网站评论系统，基于腾讯云开发。

详情查看：

- https://github.com/imaegoo/twikoo
- https://twikoo.js.org/

**Ex. 腾讯云 CloudBase 使用教程，其它方式请查看 Twikoo 文档**

如果您打算部署到一个现有的云开发环境，请直接从第 3 步开始。

1. 进入[云开发CloudBase](https://curl.qcloud.com/KnnJtUom)活动页面，滚动到“新用户专享”部分，选择适合的套餐（一般 0 元套餐即可），点击“立即购买”，按提示创建好环境。
::: tip 提示
* 推荐创建上海环境。如选择广州环境，需配置 `region: ap-guangzhou`
* 环境名称自由填写
* 推荐选择计费方式`包年包月`，套餐版本`基础班 1`，超出免费额度不会收费
* 如果提示选择“应用模板”，请选择“空模板”
:::
2. 进入[云开发控制台](https://console.cloud.tencent.com/tcb/)<br>
3. 进入[环境-登录授权](https://console.cloud.tencent.com/tcb/env/login)，启用“匿名登录”
4. 进入[环境-安全配置](https://console.cloud.tencent.com/tcb/env/safety)，将网站域名添加到“WEB安全域名”
5. 进入[环境-云函数](https://console.cloud.tencent.com/tcb/scf/index)，点击“新建云函数”
6. 函数名称请填写：`twikoo`，创建方式请选择：`空白函数`，运行环境请选择：`Nodejs 10.15`，函数内存请选择：`128MB`，点击“下一步”
7. 清空输入框中的示例代码，复制以下代码、粘贴到“函数代码”输入框中，点击“确定”
``` js
exports.main = require('twikoo-func').main
```
8. 创建完成后，点击“twikoo"进入云函数详情页，进入“函数代码”标签，点击“文件 - 新建文件”，输入 `package.json`，回车
9. 复制以下代码、粘贴到代码框中，点击“保存并安装依赖”
``` json
{ "dependencies": { "twikoo-func": "1.2.0" } }
```
10. 在Redefine 主题配置文件里填写环境 ID `env_id`
    ```yml
    twikoo:
      env_id: xxxx-xxxx..........
      region:  
    ```

    如果选择了广州环境，需把 `region` 的值填写为 `ap-guangzhou`，如果使用 `Vercel `，`region` 为空即可。
    ```yml
    twikoo:
      region: ap-guangzhou
    ```

11. Twikoo 评论插件效果图。

    ![Screen Shot 2022-10-22 at 11.54.39 AM](https://evan.beee.top/img/Screen%20Shot%202022-10-22%20at%2011.54.39%20AM.png)


## rss

```yml
rss:
  enable: false
```
该配置项用于开启 RSS 订阅功能。

开启流程：

1. 在 Hexo 项目根目录下安装插件 `hexo-generator-feed`。

   ```bash
   $ npm install hexo-generator-feed
   ```

1. 在 Hexo 配置文件 `_config.redefine.yml` 最底下增加如下配置项。

   ```yml
   # Feed Atom
   # npm install hexo-generator-feed
   feed:
     type: atom
     path: atom.xml
     limit: 20
   ```
1. 在 Redefine 主题配置文件 `_config.redefine.yml` 开启 RSS。   
   ```yml
   rss:
     enable: true
   ```

1. RSS 订阅功能开启后，将会在**右下角**工具按钮组里面显示**RSS 按钮**。

   ![Screen Shot 2022-10-02 at 10.28.49 AM](https://evan.beee.top/img/Screen%20Shot%202022-10-02%20at%2010.28.49%20AM.png)

## lazyload   

```yml
lazyload:
  enable: false  
```
该配置项用于开启图片懒加载。  

开启后，打开页面时不会加载所有图片，当视窗滚动到图片位置才加载对应的图片资源。

效果图：
![image](https://evan.beee.top/img/image.4xw0l2pjrbo0.png)

::: tip
当图片过多时，开启懒加载功能，能有效提高页面加载速度！
:::

## cdn

:::danger

这是bug，请**不要开启**，待修复！！

:::

## pjax   

```yml
pjax:
  enable: false  
```
该配置项用于开启主题的 PJAX 功能，带来单页应用的体验。

::: tip
PJAX 的工作原理是通过 Ajax 从服务器获取 HTML，并用 Ajax 请求得到 HTML 替换页面上容器的内容，然后使用 pushState 更新浏览器的当前 URL，而无需重新加载页面的布局或任何资源（JS，CSS），从而提供快速，完整页面加载的外观。但实际上它只是 Ajax 和 pushState。
:::

PJAX 开启后，点击页面跳转时，网页顶部会出现彩色进度条。

## footer

```yml
footer:
  since: 2020      # the starting year of your website, Can be null
  icp:             # ICP record number of your website, Can be null
```

该配置项用于设置网站底部的信息展示。

- `since` 设置网站起始年份，可以为空。
- `icp` 设置网站 ICP 备案编号，可以为空。

![Screen Shot 2022-10-02 at 10.31.28 AM](https://evan.beee.top/img/Screen%20Shot%202022-10-02%20at%2010.31.28%20AM.png)

