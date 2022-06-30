# 块级元素的 `height` 问题

- `height`默认为`auto`
- `min-height`默认为`0px`
- `max-height`默认为`none`

## `height:auto` 和 `min-height:100%`

- `min-height` 设置为百分比`%`时会指向父元素的 `height`.
- 父元素 `height` 如果是像素值`px`或百分比`%`，则子元素可以通过 `min-height` 对父元素进行约束，
- 父元素 `height` 如果是 `auto`，则子元素的 `min-height` 属性失效。

下面例子中`inner`最终高度为`100px`，`inner1`最终高度为`50px`。

如果把`inner`的`height`改为 `100%`，`inner1`最终高度为`100px`。

```html
<style>
  .outer {
    height: 100px;
  }
  .inner {
    height: auto; /* 改为height: 100%后，inner1最终高度为100px */
    min-height: 100%;
  }
  .inner1 {
    height: auto;
    min-height: 100%;
  }
  .content {
    height: 50px;
  }
</style>

<div id="outer">
  <div id="inner">
    <div id="inner1">
      <div id="content">content</div>
    </div>
  </div>
</div>
```

## `height`, `max-height`, `min-height` 的优先级

1. 通过`height`， `max-height`， `min-height`确定一个最终高度`finalHeight`。
2. 首先比较`height`和`max-height`：`finalHeight = height > max-height ? height : max-height`;
3. 再比较`min-height`和`finalHeight`：`finalHeight = min-height > finalHeight ? min-height : finalHeight`.
4. 使用`finalHeight`作为元素的`height`。
