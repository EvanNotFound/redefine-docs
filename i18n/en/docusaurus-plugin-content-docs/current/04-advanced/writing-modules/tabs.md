---
sidebar_position: 7
---

# Tabs column module

Through this module, multiple columns can be added to the page, and users can switch content by clicking the tab.



## Effect

![Screenshot 2023-03-09 at 4.12.08 PM](https://evan.beee.top/img/2023/03/09/fc47a7622a37ae92d002a73ef5dcff25.png)

![Screenshot 2023-03-09 at 4.12.13 PM](https://evan.beee.top/img/2023/03/09/04e2f0ab8aee451717563e05ac252eb8.png)

![Screenshot 2023-03-09 at 4.12.20 PM](https://evan.beee.top/img/2023/03/09/8c65c7d00f3046d791fe2c0c647ceaef.png)

## Writing

Using the Tabs module needs to be written in the following format in markdown:

```markdown
{% unique ID in tabs page %}
<!-- tab column 1 name -->
content
<!-- endtab -->
<!-- tab column 2 name -->
content
<!-- endtab -->
{% endtabs %}
```

Among them, `unique ID in the page` is the unique identifier you created for this tab, which can be taken at will.

Each column content is defined using `<!-- tab column name -->` and `<!-- endtab -->`.

Like the example above:

```markdown
{% tabs First unique name %}
<!-- tab First Tab-->
**This is Tab 1.**
<!-- endtab -->

<!-- tab Second Tab-->
**This is Tab 2.**

This is Tab 2.
<!-- endtab -->

<!-- tab Third Tab-->
**This is Tab 3.**

This is Tab 3.

This is Tab 3.
<!-- endtab -->
{% endtabs %}
```

## More

For real site experience, please visit: [Redefine Demo](https://redefine.ohevan.com/2022/10/02/theme-demo/)
