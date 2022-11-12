# 创建主题配置文件

为了日后实现平滑升级，请在 **Hexo 根目录中**创建 `_config.redefine.yml` 并将[这里的代码](https://github.com/EvanNotFound/hexo-theme-redefine/blob/main/_config.yml)全部复制进去保存，以后要更改主题设置就在 `_config.redefine.yml` 里面更改。

:::caution 请注意

1. `_config.redefine.yml` 永远都会覆盖主题根目录的 `_config.yml` 设置
2. 主题更新后，请务必把  `/node_modules/hexo-theme-redefine/_config.yml`  和 `主题配置文件 (_config.redefine.yml)` 进行比对。如果文件出现了更改，那你必须要把更改过的项同步在 `_config.redefine.yml` 中。VS Code 的[文件比对](/docs/advanced/vs-code-compare) 可能对你迁移有帮助。
3. 请不要删除 `_config.yml` 中的任何项，否则 `_config.redefine.yml` 不会生效

:::

本教程左侧目录按照顺序对应 `_config.redefine.yml` 中的选项，请一步一步来
