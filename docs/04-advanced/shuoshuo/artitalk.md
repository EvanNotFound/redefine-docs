---
sidebar_position: 2
---

# Artitalk 方式

本方式是使用 [Artitalk](https://artitalk.js.org/) 来部署的说说

## 效果

![](https://evan.beee.top/img/2023/03/09/cfe187fd37e1c5e45ee219b54692161b.png)

实际链接：https://ncwzdlsd.top/shuoshuo/

## 配置

首先进入到 Artitalk 的官网，按照“[快速开始](https://artitalk.js.org/doc.html#🚀-开始使用)”里的流程把 Artitalk 的数据存储扔到 LeanCloud 上。

需要注意的是，现在 LeanCloud 的国际版基本上在中国大陆地区已经无法使用，所以国内用户请使用国内版 LeanCloud，但是整体过程是一样的，只需要在配置页面的时候加入 `serverURL` 信息即可。

LeanCloud 配置完成后，就可以把 Artitalk 加到自己的博客上了。

用 `hexo new page` 命令创建新页面，比如，起的名字叫 `shuoshuo`，则输入

```shell
hexo new page shuoshuo
```

博客根目录下的 `source` 文件夹里就会自动新建一个 `shuoshuo` 文件夹

打开里面的 `index.md` 文件中进行如下配置：

1. 修改 `front-matter`

   :::caution

   如果你之前用本地部署方式，在 `/source/_data/` 目录下面创建了 `essays.yml`，请把此文件删除或者重命名到别的名字，否则 `Artitalk` 不会生效

   :::

   ```markdown
   ---
   title: 说说 
   ---
   ```

2. 然后就是一些配置项，可以参照 [官方文档](https://artitalk.js.org/doc.html#%F0%9F%8C%BC-%E5%BC%80%E5%A7%8B%E4%BD%BF%E7%94%A8)。

   注意这里的 `serverURL` ，正常 LeanCloud 的 `serverURL` 需要备案，但是估计很多博客作者都没用备案域名，所以这里有个替代方案，就是使用 `https://avoscloud.com` 这个地址作为 `serverURL`。

   这里为了加快访问速度把说说的 js 文件扔到了自己的 (ncwzdlsd的) 腾讯云 COS 上，也可以按照官方文档中的配置换成 `unpkg`。

   示例代码：

   ```markdown
   <!-- 引用 artitalk -->
   <script async data-pjax type="text/javascript" src="https://photo-1314795557.cos.ap-beijing.myqcloud.com/artitalk.js"></script>
   <!-- 存放说说的容器 -->
   <div id="artitalk_main"></div>
   <script async data-pjax>
   new Artitalk({
       appId: '', // Your LeanCloud appId
       appKey: '', // Your LeanCloud appKey
       serverURL: 'https://avoscloud.com',
       pageSize: 50, //每页评论数量
       shuoPla: '', //评论框里显示，可以不填
       motion: 0, //加载动画的开关 0（关闭），1（开启）
       atComment: 0, //评论功能的开关 0（关闭），1（开启）
       bgImg: '', //评论框里的背景，可以不填
       color1: '#ffffff', //自定义颜色，有几种方式
       color2: '#ffffff',
       color3: '#3b9a9c',
   })
   </script>
   ```

   这样设置之后一个可以动态编辑的说说页面就好了，如果按照如上的配置效果如下：

   ![](https://evan.beee.top/img/2023/03/09/cfe187fd37e1c5e45ee219b54692161b.png)

更多设置可以自行搜索，或者查看官方文档。

需要注意的是用 Artitalk 部署说说之后可能说说页面的访问速度会比较慢，如果需要访问速度，请使用本地部署方式

撰写者：[ncwzdlsd](https://ncwzdlsd.top/)

修改：Evan Luo
