# box-sizing 属性

## 应用场景

- 响应式设计：通过百分比设置外边距和元素宽度，通过固定像素设置边框。

响应式设计中通过百分比设置组件宽度，但这个宽度不包含边框和内边距，边框和内边距的宽度一般是固定宽度，也会影响到盒子的大小。

在百分比设置盒子宽度的情况下，如果宽度加内外边距刚好是 100%，这时设置 1px 的边框，总宽度就会超出 100%，流式布局就会宽度溢出。

## box-sizing 属性作用

- `box-sizing:border-box` ：会把border和padding包含在定义的宽高里。这就意味着一个带有2px边框的200px的div仍然宽度是200px.

```css
/* box1.totalwidth == 104px*/
.box1{
  width: 100px;
  padding: 1px;
  border: 1px solid black;
}
/* box2.totalwidth == 100px*/
.box2{
  width: 100px;
  padding: 1px;
  border: 1px solid black;
  box-sizing: border-box;
}
```

## 引申

`border`的问题也可以通过`css outline`解决。

将`border`换成`outline`

```css
.box{
  width: 100px;
  border: 1px solid black; /* box.totalwidth == 102px */
  outline: 1px solid black; /* box.totalwidth == 100px */
}
```

## 参考

- [css3 属性 box-sizing:border-box 用法解析](https://www.cnblogs.com/xinjianheyi/p/6552695.html)

- [击败边框：响应式布局的克星](https://blog.51cto.com/kissit/1140572)