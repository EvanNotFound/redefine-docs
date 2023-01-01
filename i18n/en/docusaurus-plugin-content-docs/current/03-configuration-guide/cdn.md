---
sidebar_position: 16
---


# cdn

````yaml
cdn:
   enable: false # true / false
````



- When this option is set to `false`, the CDN feature will not be used.
- When this option is set to `true`, the CDN feature will be enabled.

CDN (Content Delivery Network) can significantly improve the loading speed of Github Pages and other sites for users in mainland China.

By hosting the theme's `css`, `js`, `fonts`, and other files on Alibaba Cloud OSS and distributing them globally through CDN acceleration nodes, the theme's performance can be greatly improved.

This CDN service is provided by Alibaba Cloud OSS.

:::tip

If the server itself has fast loading speed, it may not be necessary to enable this feature.

:::
