---
sidebar_position: 1.55

---

# Article cover

The Redefine theme supports adding a cover header image to the article

## Effect

![Screenshot 2023-02-02 at 9.11.50 PM](https://evan.beee.top/img/2023/02/02/a7ac50af7d5234f6b55acfbb07d1d365.png)

## Instructions

Add it into [Front Matter](https://hexo.io/docs/front-matter.html) of the article

```markdown
cover: "Image link"
```

or

```markdown
banner: "Image link"
```

:::tip

If you set [home page header image thumbnail](https://redefine-docs.ohevan.com/docs/advanced/home-contents/thumbnail), the article cover will also be automatically selected as `thumbnail` link, of course, `banner ` and `cover` have the highest priority.

If you don't want to set the cover of the article but want to keep the header image of the homepage, please set `cover` or `banner` to `false`

:::

for example:

```markdown
---
title: Theme Demo
date: 2022-12-30 19:07:05
cover: "https://evan.beee.top/img/2023/01/21/5966cf4d2f2c05aecad54e233d9562ff.png"
---
```
