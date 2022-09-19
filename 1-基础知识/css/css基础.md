# CSS
## CSS基础语法
### CSS语法
CSS 规则由两个主要的部分构成：选择器，以及一条或多条声明。

```css
selector {property: value}
```

### 值的不同写法和单位

### 多重声明
```css
p {
    text-align:center; 
    color:red;
}
```

---

## CSS 高级语法
### 选择器的分组
```css
h1,h2,h3,h4,h5,h6 {
  color: green;
  }
```

### 继承及其问题
根据 CSS，子元素从父元素继承属性。

```css
body {
     font-family: Verdana, sans-serif;
     }
```

通过 CSS 继承，子元素将继承最高级元素（在本例中是 body）所拥有的属性.

### 拒绝继承
创建一个针对性的特殊规则.

```css
body {
     font-family: Verdana, sans-serif;
}

p {
     font-family: Times, "Times New Roman", serif;
}
```

---

## CSS派生选择器
### 派生选择器
通过依据元素在其位置的**上下文关系**来定义样式，你可以使标记更加简洁。

```css
li strong {
    font-style: italic;
    font-weight: normal;
}
```

```html
<li><strong>我是斜体字。这是因为 strong 元素位于 li 元素内。</strong></li>
```

---

## CSS id 选择器
### id选择器
id 选择器可以为标有特定 id 的 HTML 元素指定特定的样式。

id 选择器以 "#" 来定义。

```css
#red {color:red;}
#green {color:green;}
```

---

## CSS 类选择器
在 CSS 中，类选择器以一个点号显示：

```css
.center {text-align: center}
```

---

## CSS 属性选择器
### 属性选择器
下面的例子为带有 title 属性的所有元素设置样式：

```css
[title]
{
color:red;
}
```

### 属性和值选择器
```css
[title=W3School]
{
border:5px solid blue;
}
```

### 属性和值选择器 - 多个值
```css
[title~=hello] { color:red; }
[lang|=en] { color:red; }
```

---

## 如何创建CSS
### 如何插入样式表
当读到一个样式表时，浏览器会根据它来格式化 HTML 文档。插入样式表的方法有三种：
#### 外部样式表
```html
<head>
<link rel="stylesheet" type="text/css" href="mystyle.css" />
</head>
```

#### 内部样式表
```html
<head>
<style type="text/css">
  hr {color: sienna;}
  p {margin-left: 20px;}
  body {background-image: url("images/back40.gif");}
</style>
</head>
```

#### 内联样式
```html
<p style="color: sienna; margin-left: 20px">
This is a paragraph
</p>
```

### 多重样式

---

## **CSS样式**
---
## CSS背景
### 背景色
background-color属性

```css
p {background-color: gray;}
```

### 背景图片
backgroud-image属性:

```css
body {background-image: url(/i/eg_bg_04.gif);}
```

### 背景重复
backgroud-repeat属性

```css
body { 
  background-image: url(/i/eg_bg_03.gif);
  background-repeat: repeat-y;
}
```

### 背景定位
backgroud-position属性

```css
body
  { 
    background-image:url('/i/eg_bg_03.gif');
    background-repeat:no-repeat;
    background-position:center;
  }
```

---

## CSS文本
CSS 文本属性可定义文本的外观。

通过文本属性，您可以改变文本的颜色、字符间距，对齐文本，装饰文本，对文本进行缩进，等等。

### 缩进文本
text-indent属性

```css
p {text-indent: 5em;}
```

### 水平对齐
text-align属性
- left
- right
- center
- justify: 在两端对齐文本中，文本行的左右两端都放在父元素的内边界上。然后，调整单词和字母间的间隔，使各行的长度恰好相等。

#### text-align:center 与 `<CENTER>`
`<CENTER>` 不仅影响文本，还会把整个元素居中。text-align 不会控制元素的对齐，而只影响内部内容。元素本身不会从一段移到另一端，只是其中的文本受影响。

### 字间隔
word-spacing属性可以改变字之间的标准间隔.
```css
p.spread {word-spacing: 30px;}
p.tight {word-spacing: -0.5em;}
```

### 字符转换
text-transform属性处理文本的大小写.
- none
- uppercase
- lowercase
- capitalize

### 文本装饰
text-decoration属性
- none
- underline
- overline
- line-through
- blink

### 处理空白符
white-space属性会影响用户代理对源文档中的空格, 换行和tab字符的处理.
- normal: 浏览器默认处理 - 合并连续空白符.
- pre: 相当于pre元素.
- nowrap: 不允许自动换行.
- pre-wrap: 保留连续空白符和换行符, 允许自动换行.
- pre-line: 合并连续空白符, 保留换行符, 允许自动换行.

### 文本方向
direction属性: 影响块级元素中文本的书写方向, 表中列布局的方向, 内容水平填充其元素框的方向, 以及两端对齐元素中最后一行的位置.
- ltr
- rtl

---

## CSS字体
**CSS 字体属性定义文本的字体系列、大小、加粗、风格（如斜体）和变形（如小型大写字母）。**

### CSS字体系列
在 CSS 中，有两种不同类型的字体系列名称：

- 通用字体系列 - 拥有相似外观的字体系统组合（比如 "Serif" 或 "Monospace"）
- 特定字体系列 - 具体的字体系列（比如 "Times" 或 "Courier"）

除了各种特定的字体系列外，CSS 定义了 5 种通用字体系列：
- Serif 字体
- Sans-serif 字体
- Monospace 字体
- Cursive 字体
- Fantasy 字体

### 指定字体系列
#### 使用通用字体系列
```css
body {font-family: sans-serif;}
```

#### 指定字体系列
```css
h1 {font-family: Georgia;}
h1 {font-family: Georgia, serif;}
```

### 字体风格
font-style属性最常用于规定斜体文本.
- normal - 文本正常显示
- italic - 文本斜体显示
- oblique - 文本倾斜显示

#### italic 和 oblique 的区别
斜体（italic）是一种简单的字体风格，对每个字母的结构有一些小改动，来反映变化的外观。与此不同，倾斜（oblique）文本则是正常竖直文本的一个倾斜版本。

### 字体加粗
font-weight属性设置文本的粗细.
- normal - 400
- bold - 700
- 100 ~ 900
- bolder - 较继承值更粗一些
- lighter - 较继承值更细一些

### 字体大小
font-size属性

有能力管理文本的大小在 web 设计领域很重要。但是，您不应当通过调整文本大小使段落看上去像标题，或者使标题看上去像段落。

font-size 值可以是绝对或相对值。

绝对值:
- 将文本设置为指定的大小
- 不允许用户在所有浏览器中改变文本大小（不利于可用性）
- 绝对大小在确定了输出的物理尺寸时很有用

相对值:
- 相对于周围的元素来设置大小
- 允许用户在浏览器改变文本大小

普通文本的默认大小是16像素.

#### 使用像素来设置字体大小

#### 使用em来设置字体大小
16 等于父元素的默认字体大小，假设父元素的 font-size 为 20px，那么公式需改为：pixels/20=em.

#### 结合使用百分比和 EM
在所有浏览器中均有效的方案是为 body 元素（父元素）以百分比设置默认的 font-size 值：
```css
body {font-size:100%;}
h1 {font-size:3.75em;}
h2 {font-size:2.5em;}
p {font-size:0.875em;}
```

---

## CSS链接
### 设置链接的样式
链接的四种状态:
- a:link - 普通的, 未被访问的链接
- a:visited - 用户已访问的链接
- a:hover - 鼠标指针位于链接的上方
- a:active - 链接被点击的时刻

* a:hover 必须位于 a:link 和 a:visited 之后
* a:active 必须位于 a:hover 之后

---

## CSS列表
**CSS 列表属性允许你放置、改变列表项标志，或者将图像作为列表项标志。**

### CSS 列表
#### 列表类型
要影响列表的样式, 最简单的办法就是改变其标志类型.

```css
ul {list-style-type : square}
```

#### 列表项图像
```css
ul li {list-style-image : url(xxx.gif)}
```

#### 列表标志位置
CSS2.1 可以确定标志出现在列表项内容之外还是内容内部。这是利用 list-style-position 完成的。

#### 简写列表样式
```css
li {list-style : url(example.gif) square inside}
```

--- 

## CSS表格
### 表格边框
border属性

```css
table, th, td
  {
  border: 1px solid blue;
  }
```

### 折叠边框
border-collapse属性设置是否将表格边框折叠为单一边框:

```css
table
  {
  border-collapse:collapse;
  }
```

### 表格的宽度和高度
```css
table
  {
  width:100%;
  }

th
  {
  height:50px;
  }
```

### 表格文本对齐
text-align 和 vertical-align 属性设置表格中文本的对齐方式。

```css
td
  {
  text-align:right;
  }

td
  {
  height:50px;
  vertical-align:bottom;
  }
```

### 表格内边距
td th元素的padding属性

```css
td
  {
  padding:15px;
  }
```

### 表格颜色
```css
table, td, th
  {
  border:1px solid green;
  }

th
  {
  background-color:green;
  color:white;
  }
```

---

## CSS轮廓
**轮廓（outline）是绘制于元素周围的一条线，位于边框边缘的外围，可起到突出元素的作用。**

CSS outline 属性规定元素轮廓的样式、颜色和宽度。

---
## **CSS框模型**
---

## CSS框模型概述
**CSS 框模型 (Box Model) 规定了元素框处理元素内容、内边距、边框 和 外边距 的方式。**

![CSS框模型](https://www.w3school.com.cn/i/ct_boxmodel.gif)

- element : 元素。
- padding : 内边距充。
- border : 边框。
- margin : 外边距。

---

## CSS内边距
**元素的内边距在边框和内容区之间。控制该区域最简单的属性是 padding 属性。**
### CSS padding 属性
```css
h1 {padding: 10px;} /* 上右下左 */

h1 {padding: 10px 0.25em 2ex 20%;} /* 上右下左 */
```

### 单边内边距属性
- padding-top
- padding-right
- padding-bottom
- padding-left

---

## CSS 边框
**元素的边框 (border) 是围绕元素内容和内边距的一条或多条线。**

**CSS border 属性允许你规定元素边框的样式、宽度和颜色。**

### CSS边框
CSS 边框属性，可以创建出效果出色的边框，并且可以应用于任何元素。

### 边框与背景
元素的背景是内容、内边距和边框区的背景。

### 边框的样式
#### 定义多种样式
```css
a:link img {border-style: outset;} /* 上右下左 */

p.aside {border-style: solid dotted dashed double;} /* 上右下左 */
```

#### 定义单边样式
- border-top-style
- border-right-style
- border-bottom-style
- border-left-style

### 边框的宽度
border-width属性
- 使用长度值: 2px 0.1em
- 使用关键字: thin medium thick

### 边框的颜色
border-color属性

---

## CSS外边距
### CSS margin 属性
```css
h1 {margin : 0.25in;}
h1 {margin : 10px 0px 15px 5px;} /* 上右下左 */
```

### 值复制
```css
p {margin: 0.5em 1em 0.5em 1em;}
p {margin: 0.5em 1em;}
```

这两个值可以取代前面 4 个值。这是如何做到的呢？CSS 定义了一些规则，允许为外边距指定少于 4 个值。规则如下：

- 如果缺少右外边距的值，则使用上外边距的值。
- 如果缺少下外边距的值，则使用上外边距的值。
- 如果缺少左外边距的值，则使用右外边距的值。

### 单边外边距属性
- margin-top
- margin-right
- margin-bottom
- margin-left

---

## CSS外边距合并
**外边距合并指的是，当两个垂直外边距相遇时，它们将形成一个外边距。**

**合并后的外边距的高度等于两个发生合并的外边距的高度中的较大者。**

### 外边距合并
当一个元素出现在另一个元素上面时，第一个元素的下外边距与第二个元素的上外边距会发生合并。

![上下外边距合并](https://www.w3school.com.cn/i/ct_css_margin_collapsing_example_1.gif)

当一个元素包含在另一个元素中时（假设没有内边距或边框把外边距分隔开），它们的上和/或下外边距也会发生合并。

![内外外边距合并](https://www.w3school.com.cn/i/ct_css_margin_collapsing_example_2.gif)

外边距甚至可以与自身发生合并。

假设有一个空元素，它有外边距，但是没有边框或填充。在这种情况下，上外边距与下外边距就碰到了一起，它们会发生合并：

![空元素自身外边距合并](https://www.w3school.com.cn/i/ct_css_margin_collapsing_example_3.gif)

如果这个外边距遇到另一个元素的外边距，它还会发生合并：

![空元素与其他元素外边距合并](https://www.w3school.com.cn/i/ct_css_margin_collapsing_example_4.gif)

注: 只有普通文档流中块框的垂直外边距才会发生外边距合并。行内框、浮动框或绝对定位之间的外边距不会合并。

---
## **CSS 定位**
---
## 