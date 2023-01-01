---
sidebar_position: 18
---


# pjax

```yaml
pjax:
   enable: false
```
This configuration option enables the PJAX feature of the theme, providing a single-page application experience.

:::tip
PJAX works by using Ajax to retrieve HTML from the server and replacing the contents of a container on the page with the obtained HTML, and then using pushState to update the browser's current URL without reloading the layout or any resources (JS, CSS) of the page, thus providing a quick, full page load appearance. However, it is essentially just a combination of Ajax and pushState.
:::

When PJAX is enabled, a colorful progress bar will appear at the top of the page when navigating between pages.

