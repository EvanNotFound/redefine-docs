# Update

Theme Redefine releases new versions frequently, you can update Theme Redefine with the following commands.

## npm

Install the latest version via `npm`:

```shell
$ cd your-hexo-site
$ npm install hexo-theme-redefine@latest
````

## git

Update to the latest `main` branch via `git`:

```shell
$ cd themes/redefine
$ git pull
````

## Migrate config file

After the theme is updated, be sure to compare `/node_modules/hexo-theme-redefine/_config.yml` with the `theme configuration file (_config.redefine.yml)`. If the file has changed, you must synchronize the changed items in `_config.redefine.yml`. VS Code's [file comparison](/en/docs/advanced/vs-code-compare) may be helpful for your migration.
