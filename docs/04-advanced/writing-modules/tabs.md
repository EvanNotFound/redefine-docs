---
sidebar_position: 4
---

# Tabs 分栏模块

通过本模块可以在页面中添加多个栏目，用户可以通过点击标签页来切换内容。

## 效果

![Screenshot 2023-01-30 at 6.07.42 PM](https://evan.beee.top/img/2023/01/30/36c202572da922768fe48d29497663f1.png)

![Screenshot 2023-01-30 at 6.07.48 PM](https://evan.beee.top/img/2023/01/30/763be8951d5eb9e6f4ae67eee34a6bfd.png)

![Screenshot 2023-01-30 at 6.07.53 PM](https://evan.beee.top/img/2023/01/30/0a612a36e55e39bc43fd8cf181b20b43.png)

## 写法

使用 Tabs 模块需要在 markdown 中按照以下格式编写：

```markdown
{% tabs 页面内不重复的ID %}
<!-- tab 栏目1名称 -->
内容
<!-- endtab -->
<!-- tab 栏目2名称 -->
内容
<!-- endtab -->
{% endtabs %}
```

其中，`页面内不重复的ID` 为你为这个选项卡创建的唯一标识符，可以随便取。

每个栏目内容使用 `<!-- tab 栏目名称 -->` 和 `<!-- endtab -->` 来定义。

比如上面的例子：

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

## 更多

实际体验欢迎前往 [Redefine 演示站点](https://redefine.ohevan.com/2022/10/02/theme-demo/)
