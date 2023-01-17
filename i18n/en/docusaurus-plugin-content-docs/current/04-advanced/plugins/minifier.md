---
sidebar_position: 8
---


# Resource Compression

In the source code of the Redefine theme, resource files such as HTML, CSS, JavaScript, and images are not packaged and compressed. The same goes for most Hexo themes. Fortunately, there are plug-ins that can be found to solve this problem.

Here you can use the [hexo-all-minifier](https://github.com/chenzhutian/hexo-all-minifier) plug-in, which integrates `html-minifier`, `clean-css`, `uglify` and `imagemin `, just install and simple configuration to use.

1. Install **hexo-all-minifier** in the root directory of the Hexo project.

    ```shell
    $ npm install hexo-all-minifier
    ```

1. In the Hexo configuration file `_config.yml`, add the following configuration items:

    ```yaml
    all_minifier: true
    ```

    If you encounter problems when using the plugin or want to make more detailed settings, please check the [documentation](https://github.com/chenzhutian/hexo-all-minifier/blob/master/README.md) of the plugin.



