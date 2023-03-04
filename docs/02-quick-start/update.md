---
sidebar_position: 2
---



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

主题更新后，可能配置文件出现了变更，导致无法构建，所以需要你把你的 `_config.redefine.yml` 和主题的 `_config.yml` 进行选项同步。

### npm 方式

如果你是用 `npm` 安装的主题，请把  `/node_modules/hexo-theme-redefine/_config.yml`  和 `主题配置文件 (_config.redefine.yml)` 进行比对，确保两边的选项是同步的。

可以使用 VS Code 的 [文件比对功能](/docs/advanced/vs-code-compare)。

每次迁移请注意把最底部的 `version` 改为最新版本！！

### Git 方式 或 手动安装方式

如果你是用 `git` 安装的主题，或者是手动安装的，请把  `/themes/redefine/_config.yml`  和 `主题配置文件 (_config.redefine.yml)` 进行比对，确保两边的选项是同步的

可以使用 VS Code 的 [文件比对功能](/docs/advanced/vs-code-compare)。

每次迁移请注意把最底部的 `version` 改为最新版本！！

### 具体例子

比如，出现如下情况时，我就需要把 `custom_font` 整个区块都复制到  `_config.redefine.yml` 里面。缩进都必须要一致。

![Screenshot 2023-03-04 at 2.35.32 PM](https://evan.beee.top/img/2023/03/04/7d8dc6cc0a49d419f039cebda1cfa0b8.png)



