---
sidebar_position: 3

---

# Note Module



## Large Note Block

Format: (`notel` means `note large`, easy to remember, can also be written as `note-large`)

```markdown
{% notel [color] [title] %}
content
support newline
{% endnote %}
```

For example

```markdown
{% notel default info %}
newline test
newline test
newline test
{% endnote %}

{% notel blue hint %}
newline test
newline test
newline test
{% endnote %}

{% notel red custom title %}
newline test
newline test
newline test
{% endnote %}
```

Effect:

![Screenshot 2023-01-20 at 8.37.59 PM](https://evan.beee.top/img/2023/01/20/c1395f65bfa84fe07886245c92d18f49.png)



## Small Note Block

Format:

```markdown
{% note [style/color] [optional: custom icon] %}
note content
{% endnote %}
```

- `[style/color]` can be `success` `default` `primary` `info` `warning` `danger` `tip` `question` and `blue` `red` etc colors
- `[Optional: Custom Icon]` option is optional, please fill in the second half of the icon name of [Fontawsome](https://fontawesome.com/search), such as `fa-image`

Specific examples are as follows

```html
{% note %}
default tooltip block label
{% endnote %}

{% note default %}
default tooltip block label
{% endnote %}

{% note primary %}
primary hint block label
{% endnote %}

{% note success %}
success prompt block label
{% endnote %}

{% note info %}
info tooltip block label
{% endnote %}

{% note warning %}
warning hint block label
{% endnote %}

{% note danger %}
danger tooltip block label
{% endnote %}

{% note red fa-bolt%}
Custom Tooltip Block Labels
{% endnote %}
```

Effect:



![Screenshot 2023-01-20 at 7.51.43 PM](https://evan.beee.top/img/2023/01/20/d97817b2d310e0f13852afa05cc222fd.png)

## More

For real site experience, please visit: [Redefine Demo](https://redefine.ohevan.com/2022/10/02/theme-demo/)
