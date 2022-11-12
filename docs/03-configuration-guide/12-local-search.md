# local_search

```yaml
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

   ```yaml
   # Search
   ## See: https://github.com/theme-next/hexo-generator-searchdb
   search:
     path: search.json
     field: post
     content: true
     format: striptags
   ```

1. 主题配置文件 `_config.redefine.yml` 的 `local_search.enable` 配置项的值设为 `true`。

   ```yaml
   local_search:
     enable: true
   ```


:::tip
`local_search.preload` 配置项表示是否在页面加载时**预加载搜索数据**。
:::

全站文章搜索效果图：

![Screen Shot 2022-10-02 at 10.22.29 AM](https://evan.beee.top/img/Screen%20Shot%202022-10-02%20at%2010.22.29%20AM-4745029.png)

