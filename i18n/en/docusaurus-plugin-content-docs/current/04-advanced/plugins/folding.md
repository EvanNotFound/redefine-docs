---
sidebar_position: 5

---

# Folding module

You can nest other modules or text, paragraphs, etc. under this module

This module is partially migrated from `hexo-theme-volantis`

## Example

![Screenshot 2023-01-26 at 9.34.14 PM](https://evan.beee.top/img/2023/01/26/ade3c1205a969a2f69f1327225166288.png)

## Writing

```markdown
{% folding [color]::[title] %}

what needs to be written

{% endfolding %}
```

For example, the example above

```markdown
{% folding blue::Folding test: click to see more %}

啊啊啊啊啊

{% note danger %}
danger tooltip block label
{% endnote %}

{% note tip %}
tip Tip block label
{% endnote %}

{% endfolding %}
```

## List of colors

```markdown
yellow, blue, green, red, orange, pink, cyan, white, black, gray
```
