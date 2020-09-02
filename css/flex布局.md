# flex 布局

## flex 属性

`flex`属性是`flex-grow`，`flex-shrink`，`flex-basis`的按顺序缩写。

- `flex-grow`：默认值`0`
- `flex-shrink`: 默认值`1`
- `flex-basis`: 默认值`auto`

## flex-grow 和 flex-shrink 计算公式

### flex-grow 计算公式

### flex-shrink 计算公式

## flex 响应式布局

### 默认布局（子宽度大于父宽度时收缩，小于父宽度时不变）

```css
/* 无需设置，默认值就可满足，相当于 */
.flex div {
  flex-grow：0;
  flex-shrink: 1;
  flex-basis: auto;
}
```

### flex 子元素宽度之和大于父元素时不收缩

```css
.flex div {
  flex-grow：1;
  flex-shrink: 0;
  flex-basis: auto;
}
```