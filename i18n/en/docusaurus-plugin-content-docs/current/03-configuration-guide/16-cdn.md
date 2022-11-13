# cdn

````yaml
cdn:
   enable: false # true / false
````



- When option is `false`, do not use cdn function
- When option is `true`, use cdn function

CDN (Content Delivery Network) can effectively speed up Github Pages and other access to mainland China.

By hosting the theme's `css`, `js`, `fonts` and other files on Alibaba Cloud OSS, and then distributed to all over the world through CDN acceleration nodes.

This CDN service is provided by Alibaba Cloud OSS.

:::tip

It is not recommended to enable when the server itself is very fast

:::
