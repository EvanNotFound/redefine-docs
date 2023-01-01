---
sidebar_position: 16
---


# cdn

```yaml
cdn:
  enable: false # true / false
```



- 当选项为 `false` 时，不使用 cdn 功能
- 当选项为 `true` 时，使用 cdn 功能

CDN（Content Delivery Network）能有效加快 Github Pages 等对于中国大陆地区的访问速度。

通过把主题的 `css`, `js`, `fonts` 等文件托管在阿里云 OSS 上，再通过 CDN 加速节点分发到世界各地。

本 CDN 服务由阿里云 OSS 提供。

:::tip 

当服务器本身就速度很快的时候不建议开启

:::
