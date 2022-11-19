# 更新

Theme Redefine 经常发布新版本，你可以通过如下命令更新 Theme Redefine。

## npm

通过 `npm` 安装最新版本：

```shell
$ cd your-hexo-site
$ npm install hexo-theme-redefine@latest
```

## git

通过 `git` 更新到最新的 `main` 分支：

```shell
$ cd themes/redefine
$ git pull
```

## 迁移配置文件

主题更新后，请务必把  `/node_modules/hexo-theme-redefine/_config.yml`  和 `主题配置文件 (_config.redefine.yml)` 进行比对。如果文件出现了更改，那你必须要把更改过的项同步在 `_config.redefine.yml` 中。VS Code 的[文件比对](/docs/advanced/vs-code-compare) 可能对你迁移有帮助。

每次迁移请注意把最底部的 `version` 改为最新版本！！

