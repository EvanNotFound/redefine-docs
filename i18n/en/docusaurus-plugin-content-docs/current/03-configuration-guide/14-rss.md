#rss

````yaml
rss:
   enable: false
````

This configuration item is used to enable the RSS subscription function.

Start the process:

1. Install the plugin `hexo-generator-feed` in the root directory of the Hexo project.

    ```bash
    $ npm install hexo-generator-feed
    ````

1. Add the following configuration items at the bottom of the Hexo configuration file `_config.redefine.yml`.

    ````yaml
    # Feed Atom
    # npm install hexo-generator-feed
    feed:
      type: atom
      path: atom.xml
      limit: 20
    ````

1. Enable RSS in the Redefine theme configuration file `_config.redefine.yml`.

    ````yaml
    rss:
      enable: true
    ````

1. After the RSS subscription function is enabled, the **RSS button** will be displayed in the **lower right corner** tool button group.

    ![Screen Shot 2022-10-02 at 10.28.49 AM](https://evan.beee.top/img/Screen%20Shot%202022-10-02%20at%2010.28.49%20AM.png)
