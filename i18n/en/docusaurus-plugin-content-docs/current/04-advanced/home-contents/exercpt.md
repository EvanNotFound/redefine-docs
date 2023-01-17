---
sidebar_position: 5
---


# Article summary

## Custom summary

If you want to customize the summary of articles on the homepage, you can do so by following these steps:

![Screen Shot 2022-12-20 at 4.42.04 PM](https://evan.beee.top/img/Screen%20Shot%202022-12-20%20at%204.42.04%20PM.png)

1. In the [front matter](https://hexo.io/docs/front-matter.html) of the article page, add the `excerpt:"summary"` attribute. This will update the summary displayed on the homepage.

   Example:

   ```markdown
   ---
   title: Excerpt Test
   date: 2022-12-20 12:12:12
   tags: Excerpt
   categories: Excerpt
   excerpt: "这是文章摘要 This is the excerpt of the post"
   ---
   ```
   
   Result:  
   
![Screen Shot 2022-12-20 at 4.46.28 PM](https://evan.beee.top/img/Screen%20Shot%202022-12-20%20at%204.46.28%20PM.png)

## Disable article summary

If you want to disable the article summary, you can do so by following these steps:

![Screen Shot 2022-12-23 at 11.21.21 AM](https://evan.beee.top/img/Screen%20Shot%202022-12-23%20at%2011.21.21%20AM.png)

1. In the [front matter](https://hexo.io/docs/front-matter.html) of the article page, add the `excerpt: false` attribute. This will cause the homepage summary to disappear.

Example:

```markdown
---
title: Excerpt Test
date: 2022-12-20 12:12:12
tags: Excerpt
categories: Excerpt
excerpt: false
---
```

