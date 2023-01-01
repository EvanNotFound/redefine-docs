---
sidebar_position: 1
---

# Create theme configuration file

To achieve smooth upgrades in the future, please create `_config.redefine.yml` in the **root directory of Hexo** and copy [the code here](https://github.com/EvanNotFound/hexo-theme-redefine/blob/main/_config.yml) into it and save. From now on, to change the theme settings, modify `_config.redefine.yml`.

:::caution Warning

1. `_config.redefine.yml` will always override the settings in `_config.yml` in the root directory of the theme
2. After the theme is updated, be sure to compare `/node_modules/hexo-theme-redefine/_config.yml` and `theme configuration file (_config.redefine.yml)`. If there are changes to the file, you must synchronize the modified items in `_config.redefine.yml`. The [file comparison in VS Code](/docs/advanced/vs-code-compare) may be helpful for you in migrating.
3. Do not delete any items in `_config.yml`, otherwise `_config.redefine.yml` will not take effect

:::

The left side menu in this tutorial corresponds to the options in `_config.redefine.yml` in order, please proceed step by step.

