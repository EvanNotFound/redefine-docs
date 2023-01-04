---
sidebar_position: 6
---

# home_article

```yaml
home_article:
  date_format: auto # date format in home page article block, value: auto | relative | YYYY-MM-DD | YYYY.MM.DD HH:mm:ss | DD/MM/YYYY | and etc. 
  category:
    enable: true # show category in home page article block
    limit: 3 # max number of categories shown in home page article block
  tag:
    enable: true # show tags in home page article block
    limit: 3 # max number of tags shown in home page article block
```

This configuration option is used to set the display of date formats, tags and category information at the bottom of the homepage article blocks.

- `date_format` The **date format** for homepage articles, see below for more information.

- `category` Article categories.
- `tag` Article tags.
- `limit` The number of tags and categories to display.

## Date Format

Options: `auto` `relative` `YYYY-MM-DD` and more [Momentjs date formats](https://momentjscom.readthedocs.io/en/latest/moment/04-displaying/01-format/)

- `auto` indicates that the date will be displayed in the `n days ago` format for articles published **within 7 days** of the current date, as shown in the following image:

  ![Screen Shot 2023-01-02 at 12.39.39 PM](https://evan.beee.top/img/Screen%20Shot%202023-01-02%20at%2012.39.39%20PM.png)

  **After 7 days**, the date will be displayed in the `YYYY/MM/DD` format, as shown in the following image:

  ![Screen Shot 2023-01-02 at 12.40.36 PM](https://evan.beee.top/img/Screen%20Shot%202023-01-02%20at%2012.40.36%20PM.png)

- `relative` indicates that the date will be displayed in the `n days ago` format for **all articles**.

- `YYYY-MM-DD` and other formats allow you to arrange the **date** and **time** in the way you prefer, see [Momentjs date formats](https://momentjscom.readthedocs.io/en/latest/moment/04-displaying/01-format/) for more options.

  For example:

  - `DD.MM.YYYY`

    ![Screen Shot 2023-01-02 at 12.47.12 PM](https://evan.beee.top/img/Screen%20Shot%202023-01-02%20at%2012.47.12%20PM.png)

  - `dddd MMM YYYY`

    ![Screen Shot 2023-01-02 at 12.46.28 PM](https://evan.beee.top/img/Screen%20Shot%202023-01-02%20at%2012.46.28%20PM.png)

  - `MMM DD YYYY`

    ![Screen Shot 2023-01-02 at 12.48.23 PM](https://evan.beee.top/img/Screen%20Shot%202023-01-02%20at%2012.48.23%20PM.png)

Feel free to explore and find the combination that works best for you.

