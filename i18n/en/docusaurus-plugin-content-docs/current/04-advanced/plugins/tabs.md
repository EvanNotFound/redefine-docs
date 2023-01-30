---
sidebar_position: 7
---

# Tabs column module

Through this module, multiple columns can be added to the page, and users can switch content by clicking the tab.



## Effect

![Screenshot 2023-01-30 at 6.07.42 PM](https://evan.beee.top/img/2023/01/30/36c202572da922768fe48d29497663f1.png)

![Screenshot 2023-01-30 at 6.07.48 PM](https://evan.beee.top/img/2023/01/30/763be8951d5eb9e6f4ae67eee34a6bfd.png)

![Screenshot 2023-01-30 at 6.07.53 PM](https://evan.beee.top/img/2023/01/30/0a612a36e55e39bc43fd8cf181b20b43.png)

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
