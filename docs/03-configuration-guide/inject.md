---
sidebar_position: 20
---

# inject

```yaml
inject:
  enable: false
  head: # inject code into <head> tag
    - 
    - 
  footer: # inject code into <footer> tag
    - 
    - 
```



该配置项用于在 `header` 和 `footer` 添加自定义的 `css` `script` 等 html代码。

- `enable` 是否启用这个功能。值：`true | false`

- `head` 在头部添加代码

  例如：（引号可选）

  ```yaml
  inject:
    enable: false
    head: # inject code into <head> tag
      - "<script>console.log('Header inject 1 is working')</script>"
      - <script>console.log('Header inject 2 is working')</script>
      - <link rel="stylesheet" href="https://example.com">
  ```

- `footer` 在页脚添加代码（有些 javascript 要求在页脚添加）

  用法同上
