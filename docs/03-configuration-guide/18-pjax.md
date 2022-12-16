# pjax   

```yaml
pjax:
  enable: false  
```
该配置项用于开启主题的 PJAX 功能，带来单页应用的体验。

:::tip
PJAX 的工作原理是通过 Ajax 从服务器获取 HTML，并用 Ajax 请求得到 HTML 替换页面上容器的内容，然后使用 pushState 更新浏览器的当前 URL，而无需重新加载页面的布局或任何资源（JS，CSS），从而提供快速，完整页面加载的外观。但实际上它只是 Ajax 和 pushState。
:::

PJAX 开启后，点击页面跳转时，网页顶部会出现彩色进度条。

