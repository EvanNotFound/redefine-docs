# Create theme configuration file

For smooth upgrade in the future, please create `_config.redefine.yml` in the **Hexo root directory** and put [the code here](https://github.com/EvanNotFound/hexo-theme-redefine/blob/ main/_config.yml) are all copied in and saved. If you want to change the theme settings in the future, you can change them in `_config.redefine.yml`.

:::caution Warning

1. `_config.redefine.yml` will always override the `_config.yml` settings in the theme root
2. After the theme is updated, be sure to compare `/node_modules/hexo-theme-redefine/_config.yml` with the `theme configuration file (_config.redefine.yml)`. If the file has changed, you must synchronize the changed items in `_config.redefine.yml`. VS Code's [file comparison](/usage-tutorial/advanced.html#%E6%96%87%E4%BB%B6%E6%AF%94%E5%AF%B9) may be helpful for your migration.
3. Please do not delete any items in `_config.yml`, otherwise `_config.redefine.yml` will not take effect

:::

The directories on the left side of this tutorial correspond to the options in `_config.redefine.yml` in order, please follow them step by step
