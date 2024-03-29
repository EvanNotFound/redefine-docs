---
sidebar_position: 1
---

# Notes 笔记模块



## 大号提示块

格式：（`notel` 意思是 `note large` ，方便记，也可以写成 `note-large` ）

```markdown
{% notel [颜色] [标题] %}
内容
支持换行
{% endnotel %}
```

例如

```markdown
{% notel default 信息 %}
换行测试
换行测试
换行测试
{% endnotel %}

{% notel blue 提示 %}
换行测试
换行测试
换行测试
{% endnotel %}

{% notel red 自定义标题 %}
换行测试
换行测试
换行测试
{% endnotel %}
```

效果：

![Screenshot 2023-01-20 at 8.37.59 PM](https://evan.beee.top/img/2023/01/20/c1395f65bfa84fe07886245c92d18f49.png)



## 小号提示块

格式：

```markdown
{% note [样式/颜色] [可选: 自定义图标] %}
笔记内容
{% endnote %}
```

- `[样式/颜色]` 可以为 `success` `default` `primary` `info` `warning` `danger` `tip` `question` 以及 `blue` `red` 等颜色
- `[可选: 自定义图标]` 选项可选，请填写 [Fontawsome](https://fontawesome.com/search) 的图标名称后半部分，比如 `fa-image` 

具体例子如下

```html
{% note  %}
默认 提示块标签
{% endnote %}

{% note default  %}
default 提示块标签
{% endnote %}

{% note primary  %}
primary 提示块标签
{% endnote %}

{% note success  %}
success 提示块标签
{% endnote %}

{% note info  %}
info 提示块标签
{% endnote %}

{% note warning  %}
warning 提示块标签
{% endnote %}

{% note danger  %}
danger 提示块标签
{% endnote %}

{% note red fa-bolt%}
自定义提示块标签
{% endnote %}
```

效果：



![Screenshot 2023-01-20 at 7.51.43 PM](https://evan.beee.top/img/2023/01/20/d97817b2d310e0f13852afa05cc222fd.png)

## 更多

实际体验欢迎前往 [Redefine 演示站点](https://redefine.ohevan.com/2022/10/02/theme-demo/)
