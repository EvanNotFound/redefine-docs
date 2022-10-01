# 配置指南

Keep 主题图文配置指南，左侧目录对应着主题配置文件 `_config.yml` 里面的配置项，方便查阅。

## base_info

```yml
base_info:
  title: Keep Theme
  author: Keep Team
  url: https://keep.xpoet.cn/
```

请在该配置项里**正确**填写你网站的基本信息。

- `title` **网站标题**（将显示在网站头部，如下图）
  ![image](https://cdn.jsdelivr.net/gh/XPoet/image-hosting@master/keep-docs/image.76pmlbw88sg0.png)

- `author` **作者昵称**（将显示在网站底部和文章内容页，如下图）

  - 网站底部
    ![image](https://cdn.jsdelivr.net/gh/XPoet/image-hosting@master/keep-docs/image.45cn53oja6w0.png)
  - 文章内容页
    ![image](https://cdn.jsdelivr.net/gh/XPoet/image-hosting@master/keep-docs/image.5k2nohk299w0.png)

- `url` **网站域名**（将用于在文章内容页的版权信息模块正确拼接文章链接，如下图）
  ![image](https://cdn.jsdelivr.net/gh/XPoet/image-hosting@master/keep-docs/image.75kgwmel0140.png)


## style

```yml
style:
  # Theme primary color
  primary_color: "#0066CC"

  # Avatar (You can use local image or image external link)
  avatar: /images/avatar.svg

  # Favicon (You can use local image or image external link)
  favicon: /images/logo.svg

  # Article image align position, value: left | center
  article_img_align: left

  # Left side width
  left_side_width: 260px

  # Content area max width
  content_max_width: 920px

  # Mouse hover
  hover:
    shadow: false # shadow effect when the mouse hover
    scale: false # scale effect when the mouse hover

  # First screen
  first_screen:
    enable: false
    background_img: /images/bg.svg # You can use local image or image external link
    description: Keep writing and Keep loving.

  # Scroll style settings
  scroll:
    progress_bar:
      enable: false
    percent:
      enable: false
```

`style` 该配置项用于配置网站的基本样式。

### primary_color

设置网站主题色，支持 **rgb**、**rgba**、**十六进制**等颜色格式，例如：`rgb(0, 102, 204)`、`rgba(0, 102, 204, 0.8)`、`#0066cc`。建议使用 [Web 安全色](https://www.bootcss.com/p/websafecolors/)。

### avatar

设置作者头像，将显示在文章内容页，如下图。
![image](https://cdn.jsdelivr.net/gh/XPoet/image-hosting@master/keep-docs/image.56lx3nrzryk0.png)
你可以使用**本地图片**（即存储 `keep/source/images/` 路径下的图片）或**图片外链 URL**。  
写法参考：

- 本地图片
  ```yml
  avatar: /images/avatar.svg
  ```
- 图片外链
  ```yml
  avatar: https://cdn.jsdelivr.net/gh/XPoet/image-hosting@master/common-use/avatar.jpg
  ```

### favicon

设置网站 favicon 图标，你可以使用**本地图片**（即存储 `keep/source/images/` 路径下的图片）或**图片外链 URL**。
![image](https://cdn.jsdelivr.net/gh/XPoet/image-hosting@master/keep-docs/image.6ryeww1tcpk0.png)

### article\_img\_align

设置文章内容页的图片排列位置，默认 `left`，可选：`left`（靠左）、`center`（居中）。

### left\_side\_width

设置左侧 **TOC 目录**模块的**宽度**。一般情况下，你无需修改。如需设置，请保持单位为 `px`。

![image](https://cdn.jsdelivr.net/gh/XPoet/image-hosting@master/keep-docs/image.4zmu3thzg4w0.png)

### content\_max\_width

设置内容区域的最大宽度。一般情况下，你无需修改。如需设置，请保持单位为 `px`。

![image](https://cdn.jsdelivr.net/gh/XPoet/image-hosting@master/keep-docs/image.7inf852kzio0.png)

---

![image](https://cdn.jsdelivr.net/gh/XPoet/image-hosting@master/keep-docs/image.6zi2r32pjoo0.png)

### hover

设置鼠标悬浮时的样式（主页文章块、TOC 目录块、按钮等模块），可分别开启 `shadow` 和 `scale` 效果。

- `shadow` 阴影效果
- `scale` 缩放效果

### first_screen

Keep 主题 `v3.0.0` 新增的**首屏模块**，开启后将显示在网站首页。

- `enable` 是否开启首屏
- `background_img` 首屏背景图片，可使用 **本地图片** 或 **图片外链 URL**
- `description` 首屏描述
- **开启**首屏的效果
  ![image](https://cdn.jsdelivr.net/gh/XPoet/image-hosting@master/keep-docs/image.q7zneq9q3hc.png)

- **不开启**首屏的效果  
  ![image](https://cdn.jsdelivr.net/gh/XPoet/image-hosting@master/keep-docs/image.56v9ujr5x000.png)

### scroll

设置页面滚动时的样式。

- `progress_bar` 页面滚动时在网站**顶部**显示滚动**进度条**
  ![image](https://cdn.jsdelivr.net/gh/XPoet/image-hosting@master/keep-docs/image.4wg82jblexi0.png)

- `percent` 页面滚动时在网站**右下角**显示滚动**百分比**
  ![image](https://cdn.jsdelivr.net/gh/XPoet/image-hosting@master/keep-docs/image.673tmti465c0.png)

## social_contact

```yml
social_contact:
  enable: false
  links:
    github:               # your GitHub URL
    weixin:               # your WeChat QR-Code URL
    qq:                   # your QQ QR-Code URL
    weibo:                # your WeiBo URL
    zhihu:                # your ZhiHu URL
    twitter:              # your twitter URL
    facebook:             # your facebook URL
    email:                # your email
```

设置第三方社交链接。

::: warning
注意：`social_contact` 仅在首屏开启状态下才生效！
:::

![image](https://cdn.jsdelivr.net/gh/XPoet/image-hosting@master/keep-docs/image.1jf3d7pzsr4w.png)

如果要**更改图标**或**添加其他第三方链接**，例如：添加 Instagram

1. 在 [Font Awesome](https://fontawesome.com/icons?d=gallery&s=solid&m=free) 搜索 Instagram 图标。
   ![image](https://cdn.jsdelivr.net/gh/XPoet/image-hosting@master/keep-docs/image.7phjq0rmu7k.png)

1. 复制图标名（如上图），添加到主题配置文件 `_config.yml` 的 `social_contact.links` 配置项里面。

```yml
social_contact:
enable: false
links:
  instagram: https://www.instagram.com/xxxxxxxx
```

![image](https://cdn.jsdelivr.net/gh/XPoet/image-hosting@master/keep-docs/image.ns289d5ojs0.png)

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

![image](https://cdn.jsdelivr.net/gh/XPoet/image-hosting@master/keep-docs/image.2hud0hintci0.png)

Hexo 项目并没有 categories（分类）、tags（标签）、about（关于）、links（友链）等页面，需要自己手动创建。

以创建「 about（关于）」页面为例：

1. 在 Hexo 项目根目录下执行命令 `hexo new page about` ，即可在 `source` 目录下生成 about 文件夹。
   ```sh
   $ hexo new page about
   ```
2. 在 Keep 主题配置文件 `_config.yml` 的 `menu` 配置项下添加 `about`。
   ```yml
   menu:
     Home: /
     Archives: /archives
     # Categories: /categories
     # Tags: /tags
     # Links: /links
     About: /about
   ```
3. 打开 Hexo 项目下 `/source/about/index.md` 文件，填写 adout 页面的内容。
   支持 Markdown 和 HTML 格式；  
 
   参考如下：

   ```markdown
   ---
   title: about
   date: 2020-03-19 14:59:53
   comment: true
   ---

   ## About me

   XPoet「 Keep core developer 」...
   ...
   ...
   ...
   ```
   ::: tip
   `comment: true` 表示该页面**开启评论功能**。
   :::

   ::: danger
   创建页面时自动生成的 `title` 属性不要修改！不要删除！  
   例如：`title: about` 不能修改！不能删除！
   :::

如果要实现在导航栏点击菜单时跳转到第三方网站，只需把配置项的值填写为第三方网站的 URL 即可。
例如：在头部导航栏配置跳转到 BaiDu 网站的菜单
```yml
menu:
  BaiDu: https://www.baidu.com/
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

- 效果图
  
  - 不开启效果
    ![image](https://cdn.jsdelivr.net/gh/XPoet/image-hosting@master/keep-docs/image.3zp48kt2tqw0.png)

  - 开启效果
    ![image](https://cdn.jsdelivr.net/gh/XPoet/image-hosting@master/keep-docs/image.56io4jwjkfw0.png)

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
![image](https://cdn.jsdelivr.net/gh/XPoet/image-hosting@master/keep-docs/image.4okqv7xuw220.png)

### author\_label

设置文章内容页的**作者标识**，目前有两种方案：

1. `auto` 自动生成 `Lv1`、`Lv2`、`Lv3` ......，判断依据为文章数量。
![image](https://cdn.jsdelivr.net/gh/XPoet/image-hosting@master/keep-docs/image.66pjngqc4840.png)

1. `custom_label_list` 自定义标识列表，数组项可以 **一个** 或 **多个**，匹配的依据是按文章数量。  
![image](https://cdn.jsdelivr.net/gh/XPoet/image-hosting@master/keep-docs/image.774ar4hhcy00.png)

  格式参考：
   - 一个数组项 `["前端鼓励师"]`
   - 多个数组项 `["实习生", "工程师", "架构师"]`


## code\_copy

```yml
code_copy:
  enable: false
  style: default        # values: default | mac
```

该配置项用于设置**代码复制**功能，开启后可**一键复制**代码到剪贴板。


- `enable` 是否开启。

- `style` 设置开启代码复制功能后代码块的样式，可选 `default` 和 `mac`。

  - `default` 效果图
    ![image](https://cdn.jsdelivr.net/gh/XPoet/image-hosting@master/keep-docs/image.f1rj7u7jviw.png)

  - `mac` 效果图
    ![image](https://cdn.jsdelivr.net/gh/XPoet/image-hosting@master/keep-docs/image.408ijmbf0sm0.png)



## toc

```yml
toc:
  enable: false

  # Automatically add list number to toc.
  number: false

  # If true, all level of TOC in a post will be displayed, rather than the activated part of it.
  expand_all: false

  # If true, open TOC every time when you enter the article page
  init_open: false
```

该配置项用于设置文章TOC目录结构，非常实用的功能，可以快速查看文章目录结构和跳转，建议开启。

![image](https://cdn.jsdelivr.net/gh/XPoet/image-hosting@master/keep-docs/image.33ussj5gbwy0.png)

- `number` 给目录结构自动加上数字编号
  - `number: false`
    ![image](https://cdn.jsdelivr.net/gh/XPoet/image-hosting@master/keep-docs/image.1s56z1g7x8yo.png)

  - `number: true`
    ![image](https://cdn.jsdelivr.net/gh/XPoet/image-hosting@master/keep-docs/image.4esu3elyz600.png)

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

![image](https://cdn.jsdelivr.net/gh/XPoet/image-hosting@master/keep-docs/image.3e6zrvfb67c0.png)

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

该配置项用于设置网站计数，Keep 主题内置**不蒜子**计数，无需额外配置，直接选择你要开启的计数项即可。

- `site_uv` 网站访问人数（显示在底部）
  ![image](https://cdn.jsdelivr.net/gh/XPoet/image-hosting@master/keep-docs/image.28x2n6hvwdus.png)

- `site_pv` 网站总访问量（显示在底部）
  ![image](https://cdn.jsdelivr.net/gh/XPoet/image-hosting@master/keep-docs/image.h7crdv6qqps.png)

- `page_pv` 文章阅读次数（显示在文章内容页）
  ![image](https://cdn.jsdelivr.net/gh/XPoet/image-hosting@master/keep-docs/image.elm7a8pxd8g.png)


## local\_search

```yml
local_search:
  enable: false
  preload: false     # Preload the search data when the page loads
```

该配置项用于设置网站搜索功能，非常实用，建议开启。开启后，头部导航栏右侧将出现**搜索按钮**。

![image](https://cdn.jsdelivr.net/gh/XPoet/image-hosting@master/keep-docs/image.6qq9mg4z83w.png)

搜索功能配置流程：

1. 在 Hexo 项目根目录下安装插件 `hexo-generator-searchdb`。

   ```bash
   $ npm install hexo-generator-searchdb
   ```

1. 在 Hexo 配置文件 `_config.yml` 里添加如下配置项。

   ```yml
   # Search
   ## See: https://github.com/theme-next/hexo-generator-searchdb
   search:
     path: search.json
     field: post
     content: true
     format: striptags
   ```

1. 主题配置文件 `_config.yml` 的 `local_search.enable` 配置项的值设为 `true`。

   ```yml
   local_search:
     enable: true
   ```

   ::: tip
   `local_search.preload` 配置项表示是否在页面加载时**预加载搜索数据**。
   :::

全站文章搜索效果图：

![image](https://cdn.jsdelivr.net/gh/XPoet/image-hosting@master/keep-docs/image.1fd645r1sips.png)


## comment

```yml
comment:
  enable: false
  use: valine  # values: valine | gitalk | twikoo

  # Valine
  # See: https://github.com/xCss/Valine
  valine:
    appid:                # your leancloud application appid
    appkey:               # your leancloud application appkey
    placeholder:          # your placeholder

  # Gitalk
  # See: https://github.com/gitalk/gitalk
  gitalk:
    github_id:             # GitHub repo owner
    repository:            # Repository name to store issues
    client_id:             # GitHub Application Client ID
    client_secret:         # GitHub Application Client Secret

  # Twikoo
  # See: https://github.com/imaegoo/twikoo
  twikoo:
    env_id:                # Tencent Cloud environment id
    region:                # environment region. If select Guangzhou, fill in "ap-guangzhou".
```

该配置项用于开启和设置主题的评论系统。

### use

```yml
use: valine  # values: valine | gitalk | twikoo
```
配置使用哪款评论系统。目前主题内置 Valine、Gitalk 和 Twikoo，你可以使用其他一款。

### Valine

Valine 诞生于 2017 年 8 月 7 日，是一款基于 LeanCloud 的快速、简洁且高效的无后端评论系统。

详情查看：

- https://github.com/xCss/Valine/
- https://valine.js.org/

在 Keep 中如何使用：

1. 请先 [登录](https://leancloud.cn/dashboard/login.html#/signin) 或 [注册](https://leancloud.cn/dashboard/login.html#/signup) LeanCloud，进入控制台后点击左下角创建应用。

   ![image](https://cdn.jsdelivr.net/gh/XPoet/image-hosting@master/Keep-主题配置指南/image.1wxzxd3182v4.png)

2. 应用创建好以后，进入刚刚创建的应用，选择左下角的`设置` > `应用Key`，然后就能看到你的 `APP ID` 和 `APP Key` 了。

   ![image](https://cdn.jsdelivr.net/gh/XPoet/image-hosting@master/Keep-主题配置指南/image.33nt46l951k0.png)

3. 在 Keep 主题配置文件填写必要参数信息（APP ID、APP Key 等），示例如下。

   ```yml
   valine:
     appid: ih2nzxxxxxxxxxxxxxxxxxxxxxx
     appkey: gdf6666666666666666666666666
     placeholder: 😜 尽情吐槽吧~
   ```

   - `appid` 必填。
   - `appkey` 必填。
   - `placeholder` 可填，表示评论框的在还没输入内容时的显示的信息。

4. Valine 评论插件效果图。

   ![image](https://cdn.jsdelivr.net/gh/XPoet/image-hosting@master/keep-docs/image.21h91rodeq00.png)

### Gitalk

Gitalk，一个基于 Github Issue 和 Preact 开发的评论插件。

详情查看：

- https://github.com/gitalk/gitalk
- https://gitalk.github.io/

在 Keep 中如何使用：

1. 新建 GitHub OAuth App  
   注册或登录 [GitHub](https://github.com/)，[创建新的 OAuth App](https://github.com/settings/applications/new)，其中 `Homepage URL` 和 `Authorization callback URL` 均填写自己的域名即可。

   OAuth App 创建成功后，把 `Client ID` 和 `Client Secret` 保存起来，下面要用到。

   ![image](https://cdn.jsdelivr.net/gh/XPoet/image-hosting@master/keep-docs/image.3keb5w9lgp40.png)

2. 新建 GitHub 仓库
   注册或登录 [GitHub](https://github.com/)，[创建一个新的仓库（repository）](https://github.com/new)，并打开 Issues（自己手动增加一个 Issue，内容随便填写，即可打开），用于存储评论内容。

3. 把自己的 `GitHub 用户名`、`仓库名` 、OAuth App 的 `Client ID` 、`Client Secret` 分别填写在主题配置文件里，如下示例。

   ```yml
   gitalk:
     github_id: XPoet
     repository: hexo-site-comments
     client_id: cdfffffffffffffffffffff
     client_secret: f4b55555555555555555555555555555
   ```

4. Gitalk 评论插件效果图。
   ![image](https://cdn.jsdelivr.net/gh/XPoet/image-hosting@master/keep-docs/image.4bv32zei1580.png)


### Twikoo

Twikoo，一个简洁、安全、免费的静态网站评论系统，基于腾讯云开发。

详情查看：

- https://github.com/imaegoo/twikoo
- https://twikoo.js.org/

在 Keep 中如何使用：

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
10. 在 Keep 主题配置文件里填写环境 ID `env_id`
    ```yml
    twikoo:
      env_id: xxxx-xxxx..........
      region:  
    ```

    如果选择了广州环境，需把 `region` 的值填写为 `ap-guangzhou`，否则 `region` 为空即可。
    ```yml
    twikoo:
      region: ap-guangzhou
    ```

11. Twikoo 评论插件效果图。

    ![image](https://cdn.jsdelivr.net/gh/XPoet/image-hosting@master/keep-docs/image.6cstpi6jsjg0.png)


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

1. 在 Hexo 配置文件 `_config.yml` 增加如下配置项。

   ```yml
   # Feed Atom
   # npm install hexo-generator-feed
   feed:
     type: atom
     path: atom.xml
     limit: 20
   ```
1. 在 Keep 主题配置文件 `_config.yml` 开启 RSS。   
   ```yml
   rss:
     enable: true
   ```

1. RSS 订阅功能开启后，将会在**右下角**工具按钮组里面显示**RSS 按钮**。

   ![image](https://cdn.jsdelivr.net/gh/XPoet/image-hosting@master/keep-docs/image.6cmbrae6rx80.png)

## lazyload   

```yml
lazyload:
  enable: false  
```  
该配置项用于开启图片懒加载。  

开启后，打开页面时不会加载所有图片，当视窗滚动到图片位置才加载对应的图片资源。

效果图：
![image](https://cdn.jsdelivr.net/gh/XPoet/image-hosting@master/keep-docs/image.4xw0l2pjrbo0.png)

::: tip
当图片过多时，开启懒加载功能，能有效提高页面加载速度！
:::

## cdn   

```yml
cdn:
  enable: false  
```  
该配置项用于开启部分主题资源（JS 文件、字体文件等）的 CDN 加速功能。

::: tip CDN 原理
Keep 的 CDN 加速原理是使用 jsDelivr 来加速托管在 NPM 上的 [hexo-theme-keep](https://www.npmjs.com/package/hexo-theme-keep) 包的资源。
:::

- 如果你的 Hexo 博客部署在 **GitHub Pages**（服务器在国外），**建议**你开启 CDN，打开页面会有较快的加载速度。
  - JS 资源 CDN
    ![image](https://cdn.jsdelivr.net/gh/XPoet/image-hosting@master/keep-docs/image.6y8hk0j82lk0.png)
  - 字体文件 CDN
    ![image](https://cdn.jsdelivr.net/gh/XPoet/image-hosting@master/keep-docs/image.3jfuinu7t7o0.png)
  
- 如果博客部署在 **Gitee Pages**、**阿里云**、**腾讯云**等国内服务器，则**不建议**开启 CDN。

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

![image](https://cdn.jsdelivr.net/gh/XPoet/image-hosting@master/keep-docs/image.hmpqgojjtk0.png)
