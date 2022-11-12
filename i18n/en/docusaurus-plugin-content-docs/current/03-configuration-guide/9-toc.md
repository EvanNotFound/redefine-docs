# toc

````yaml
toc:
  enable: true

  # Automatically add list number to toc.
  number: false

  # If true, all level of TOC in a post will be displayed, rather than the activated part of it.
  expand_all: true

  # If true, open TOC every time when you enter the article page
  init_open: true
````

This configuration item is used to set the TOC directory structure of the article. It is a very practical function. You can quickly view the article directory structure and jump. It is recommended to enable it.

![Screen Shot 2022-10-02 at 10.11.31 AM](https://evan.beee.top/img/Screen%20Shot%202022-10-02%20at%2010.11.31%20AM.png)

- `number` automatically numbers the directory structure
  - `number: false`
    ![Screen Shot 2022-10-02 at 10.12.54 AM](https://evan.beee.top/img/Screen%20Shot%202022-10-02%20at%2010.12.54%20AM.png)

  - `number: true`
    ![Screen Shot 2022-10-02 at 10.13.38 AM](https://evan.beee.top/img/Screen%20Shot%202022-10-02%20at%2010.13.38%20AM.png)

- `expand_all` expands all directory structures
  - `expand_all: true` automatically expands all directory structures
  - `expand_all: false` expand the directory of the corresponding position while scrolling the page

- `init_open` whether to automatically open the TOC directory structure when opening the article page
