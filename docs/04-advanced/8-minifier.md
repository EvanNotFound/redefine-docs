# 资源压缩

Redefine 主题的源码中，HTML、CSS、JavaScript、图片等资源文件是没有打包压缩的。绝大部分的 Hexo 主题也是如此。庆幸的是，可以找到相关的插件来解决这一问题。

这里可以使用 [hexo-all-minifier](https://github.com/chenzhutian/hexo-all-minifier) 插件，它集成了 `html-minifier`、`clean-css`、`uglify` 和 `imagemin`，只需安装和简单的配置即可使用。

1. 在 Hexo 项目根目录下安装 **hexo-all-minifier**。
   ```shell
   $ npm install hexo-all-minifier
   ```

1. 在 Hexo 配置文件 `_config.yml` 文件中，添加以下配置项：
   ```yaml
   all_minifier: true
   ```
   如果你使用插件时遇到了问题或者想进行更详细的设置，请查看插件的[文档](https://github.com/chenzhutian/hexo-all-minifier/blob/master/README.md)。





