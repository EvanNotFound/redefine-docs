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

This configuration option allows you to add custom CSS, script, and other HTML code to the header and footer.

- enable: Whether to turn on this feature. Value: true | false

- head: Add code to the top section

  Example: (quotation marks optional)

  ```yaml
  inject:
    enable: false
    head: # inject code into <head> tag
      - "<script>console.log('Header inject 1 is working')</script>"
      - <script>console.log('Header inject 2 is working')</script>
      - <link rel="stylesheet" href="https://example.com">
  ```

- `footer` Add code to the footer (some javascript requires adding to the footer) 

  Usage is the same as above.
