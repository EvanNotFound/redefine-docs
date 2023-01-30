---
sidebar_position: 5
---

# Button Module

This module allows you to add buttons.

## Effect

![Screenshot 2023-01-26 at 10.17.27 PM](https://evan.beee.top/img/2023/01/26/ff18cf0630939a7212dcf926384e0626.png)

## Syntax

```
{% btn [optional size]::[name]::[url]::[optional icon] %}
```

For example, the above example:

```markdown
A button with no parameters set {% btn button:: / %} is suitable for integration into paragraphs.

A regular button is suitable for being independent of paragraphs:

{% btn regular::example blog::https://www.ohevan.com::fa-solid fa-play-circle %}

large button is more emphasized, it is recommended to use it with center:

{% btn center large::start using::https://redefine-docs.ohevan.com.::fa-solid fa-download %}
```



## Variable options

`[optional size]` :

```markdown
center, regular, large, center large, center regular
```

`[optional icon]` :

[Fontawesome](https://fontawesome.com/search) 图标名称，比如 `fa-solid fa-house`

## More

For real site experience, please visit: [Redefine Demo](https://redefine.ohevan.com/2022/10/02/theme-demo/)
