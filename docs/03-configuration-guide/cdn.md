---
sidebar_position: 16
---

# cdn

CDN（Content Delivery Network）能有效加快 Github Pages 等对于中国大陆地区的访问速度。

通过把主题的 `css`, `js`, `fonts` 等文件托管在云上，再通过 CDN 加速节点分发到世界各地。

```yaml
cdn:
  enable: false # true / false
  use: aliyun # values: jsdelivr | unpkg | aliyun 
```

- `enable` 是否启用
- `use` 选择 CDN 提供源，可选 `jsdelivr` `unpkg` `aliyun `

:::info

`aliyun` 是 阿里云OSS，由本人自费，如使用此源，有能力的话，麻烦[捐助](https://github.com/EvanNotFound/hexo-theme-redefine/blob/dev/DONATION.md)一些，阿里云OSS很烧钱，就算是一块两块的捐助也能维持得更久一些。感谢！

:::

:::tip 

当服务器本身就速度很快的时候不建议开启

:::
