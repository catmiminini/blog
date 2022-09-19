# 使用 google 字体的例子详解

使用如下方式使用 google 字体

```html
<link
  rel="stylesheet"
  href="https://fonts.googleapis.com/css?family=Lobster"
  rel="stylesheet"
  type="text/css"
/>
```

观察 network 返回的`https://fonts.googleapis.com/css?family=Lobster`数据, 是通过@font-face 声明一个字体，并通过 url 指定获取字体的位置。

比如下面这样：

```css
/* cyrillic-ext */
@font-face {
  font-family: 'Lobster';
  font-style: normal;
  font-weight: 400;
  src: local('Lobster Regular'), local('Lobster-Regular'),
    url(https://fonts.gstatic.com/s/lobster/v22/neILzCirqoswsqX9zo-mM5Ez.woff2)
      format('woff2');
  unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F,
    U+FE2E-FE2F;
}
/* cyrillic */
@font-face {
  font-family: 'Lobster';
  font-style: normal;
  font-weight: 400;
  src: local('Lobster Regular'), local('Lobster-Regular'),
    url(https://fonts.gstatic.com/s/lobster/v22/neILzCirqoswsqX9zoamM5Ez.woff2)
      format('woff2');
  unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
}
/* ... */
```

一个字体会返回多组，在使用时根据 unicode-range 进行匹配。

下面是使用时：

```css
.text {
  font-family: Lobster;
}
```

如果本地没有下载 Lobster 字体，那么将会从网络下载, 假设内容根据 unicode 匹配的字体是第一个（cyrillic-ext），那么

网络请求的顺序是：

```
http://localhost/index.html
https://fonts.googleapis.com/css?family=Lobster
https://fonts.gstatic.com/s/lobster/v22/neILzCirqoswsqX9zo-mM5Ez.woff2
```

# Serif 和 sans-serif 的区别

类似于宋体和黑体的区别，Serif 接近宋体，sans-serif 接近黑体。

Serif 的意思是，在字的笔划开始及结束的地方有额外的装饰，而且笔划的粗细会因直横的不同而有不同。Serif 的易读性强。多用于正文。

相反的，Sans Serif 则没有这些额外的装饰，笔划粗细大致差不多。Sans-Serif 的醒目性强。多用于标题

# 状态码 301

在测试一张图片时发现了状态码 301，查了一下发现 301 代表的含义是资源永久重定向。

具体看了下响应头，有一个属性 location 指定了一个新的 url，应该是新的资源的位置。

在这个 301 请求后面紧接着发送了一个新的请求，请求的 url 就是上面 location 指定的 url，返回的数据就是新的图片，状态码 200（from disk cache）.

这个响应头指定了 ETag 和 Last-Modified，但请求头有 Cache-Control:no-cache（no-cache 的含义是资源会被缓存，但是立即失效，下次会发起请求验证资源是否过期。）, 说明浏览器是可以接受强缓存的，上面的 200 说明是从缓存中取到的。如果使用 Ctrl+F5 强制刷新，不取缓存，直接发请求，状态码也是 200. 但没有从缓存取，因为强制刷新会清空缓存。

又查了一下，请求头设置了 expires（http1.0）或 Cache-Control（http1.1）就会成为强缓存，那么不设置就是协商缓存吗？

# `:root`

`:root`是一个伪类选择器，指向 document 的根节点，通常是`html`。对`:root`节点设置的样式将会应用到全局。

# `@media (max-width: 300px)`

```css
/* 媒体查询：当宽度小于等于300px时，内部样式生效 */
@media (max-width: 300px) {
  :root {
  }
}
```

# `box-shadow`

```css
div {
  box-shadow: 10px 10px 20px 20px rgba(0, 0, 0, 0.1);
  /* offset-x offset-y blur-radius spread-radius color*/
  box-shadow: 10px 10px 20px rgba(0, 0, 0, 0.1);
  /* offset-x offset-y blur-radius color*/
  /* spread-radius=0px */
  box-shadow: 10px 10px 20px rgba(0, 0, 0, 0.1), 10px 10px 10px rgba(0, 0, 0, 0.2);
  /* multiple shadows */
}
```

# `opacity`

透明度 0 - 1

# `text-transform`

- lowercase: "transform me"
- uppercase: "TRANSFORM ME"
- capitalize: "Transform Me"
- initial: Use the default value
- inherit: Use the `text-transform` value from the parent element
- none: Default: Use the original text

# relative absolute fixed

```css
div {
  position: relative;
  /* relative to the position of normal flow, An relative element will keep in the normal flow. */
  position: absolute;
  /* One nuance with absolute positioning is that it will be locked relative to its closest positioned ancestor. If you forget to add a position rule to the parent item, (this is typically done using position: relative;), the browser will keep looking up the chain and ultimately default to the body tag. An absolute element will be removed from the normal flow.*/
  position: fixed;
  /* fixed position, which is a type of absolute positioning that locks an element relative to the browser window. An fixed element will be removed from the normal flow.*/
}
```

# float

```css
/* Floating elements are removed from the normal flow of a document and pushed to either the left or right of their containing parent element. */
div {
  float: left;
  float: right;
}
```

# z-index

```css
/* When elements are positioned to overlap (i.e. using position: absolute | relative | fixed | sticky), the element coming later in the HTML markup will, by default, appear on the top of the other elements. However, the z-index property can specify the order of how elements are stacked on top of one another. */
.first {
  position: absolute;
  z-index: 2;
}
.second {
  background-color: blue;
  position: absolute;
  left: 40px;
  top: 50px;
  z-index: -1;
}
```

# margin auto

```css
/* 水平居中 */
div {
  margin: auto;
}
```

# complementary color

# split-complementary color

# hsl()

hue, saturation, lightness.

# background: linear-gradient() repeating-linear-gradient()

```css
div {
  background: linear-gradient(45deg, #000, #111, #222);

  background: repeating-linear-gradient(
    90deg,
    yellow 0px,
    blue 40px,
    green 40px,
    red 80px
  );
}
```

# background: url()
```css
div {
  background: url("https://cdn-media-1.freecodecamp.org/imgr/MJAkxbh.png");
}
```

# CSS 伪类（Pseudo-classes）
## 锚伪类
```css
/* 只针对a标签的 */
a:link {}
a:visited {}
/* 不只针对a标签的 */
a:hover {}
a:active {}
div:hover {}  /* 鼠标悬停时 */
div:active {} /* 元素激活时，鼠标点击按下未抬起就算激活 */
```