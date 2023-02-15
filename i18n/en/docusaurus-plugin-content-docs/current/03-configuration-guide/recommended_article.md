---
sidebar_position: 17.5

---

# recommended_article

```yaml
recommended_article: # article recommendation, requires npm install nodejieba
   enable: false
   title: Recommended reading
   icon: fa-solid fa-bookmark
   max_count: 3
   placeholder_img: https://evan.beee.top/img/wallhaven-wqery6-light.webp
   # Do not display article recommendations:
   # front-matter is turned off with skip_recommended_article: true
   # Do not display article recommendations in the following folder articles The root directory is source/
   skip_dirs:
     - wiki/
```

The article recommendation module at the bottom of the article will automatically recommend according to the keywords of the article.

Suggested thumbnail automatically selects `thumbnail` or `banner` or `cover` image in article `front-matter`

## Effect

![Screenshot 2023-02-15 at 6.11.01 PM](https://evan.beee.top/img/2023/02/15/7c4c1858ff280243af69386135b2f46e.png)

## Instructions

Before using it, you need to execute

```shell
npm install nodejieba
```

Install `nodejieba` module for intercepting and analyzing article content

## Configuration Tutorial

- `enable` Whether to enable this feature
- `title` the title of this area
- `icon` the icon in front of the title
- `max_count` maximum number of article recommendations
- `placeholder_img` is the default alternative image when the article does not have a header image
- articles under `skip_dirs` in these directories (relative to `source/`) will not be recommended
