---
sidebar_position: 14
---


# rss

```yaml
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

   ```yaml
   # Feed Atom
   # npm install hexo-generator-feed
   feed:
     type: atom
     path: atom.xml
     limit: 20
   ```
1. 在 Redefine 主题配置文件 `_config.redefine.yml` 开启 RSS。   
   ```yaml
   rss:
     enable: true
   ```

1. RSS 订阅功能开启后，将会在**右下角**工具按钮组里面显示**RSS 按钮**。

   ![Screen Shot 2022-10-02 at 10.28.49 AM](https://evan.beee.top/img/Screen%20Shot%202022-10-02%20at%2010.28.49%20AM.png)

