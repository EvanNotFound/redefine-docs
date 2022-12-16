# pjax

```yaml
pjax:
   enable: false
```

This configuration item is used to enable the PJAX function of the theme, bringing a single-page application experience.

::: tip
The working principle of PJAX is to get HTML from the server through Ajax, and use Ajax request to get HTML to replace the content of the container on the page, and then use pushState to update the current URL of the browser without reloading the layout of the page or any resources (JS, CSS), Thus providing the appearance of fast, full page loads. But really it's just Ajax and pushState.
:::

After PJAX is enabled, when you click to jump to the page, a colored progress bar will appear at the top of the page.
