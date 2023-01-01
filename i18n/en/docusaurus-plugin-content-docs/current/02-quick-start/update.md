---
sidebar_position: 2
---

# Update

Theme Redefine frequently releases new versions, and you can update Theme Redefine with the following commands:

## npm

Install the latest version via `npm`:

```shell
$ cd your-hexo-site
$ npm install hexo-theme-redefine@latest
````

## git

Update to the latest `main` branch through `git`:

```shell
$ cd themes/redefine
$ git pull
````


## Migrating configuration files

After updating the theme, be sure to compare `/node_modules/hexo-theme-redefine/_config.yml` and `the theme configuration file (_config.redefine.yml)`. If there are any changes to the file, you must sync the modified items in `_config.redefine.yml`. [File comparison](/docs/advanced/vs-code-compare) in VS Code may be helpful for migration.

Remember to change the `version` at the bottom to the latest version every time you migrate!
