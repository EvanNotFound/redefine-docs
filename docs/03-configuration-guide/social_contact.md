---
sidebar_position: 4
---



# social_contact

```yaml
social_contact: # social contact icons in the first screen, you can add more by using fontawesome icon names
  enable: true
  links:
    github:  # your GitHub URL
    instagram: # your Instagram URL
    zhihu:  # your ZhiHu URL
    twitter:  # your twitter URL
    email:  # your email
```

设置第三方社交链接。

:::caution
注意：`social_contact` 仅在首屏开启状态下才生效！
:::

![Screenshot 2023-01-21 at 10.10.40 AM](https://evan.beee.top/img/2023/01/21/7376eef66aedb073b81dd40d5095e599.png)

如果要**更改图标**或**添加其他第三方链接**，例如：添加 Instagram

1. 在 [Font Awesome](https://fontawesome.com/icons?d=gallery&s=solid&m=free) 搜索 Instagram 图标。
   ![image](https://evan.beee.top/img/image.7phjq0rmu7k.png)

1. 复制图标名（如上图），添加到主题配置文件 `_config.redefine.yml` 的 `social_contact.links` 配置项里面。

```yaml
social_contact:
enable: true
links:
  instagram: https://www.instagram.com/xxxxxxxx
```

