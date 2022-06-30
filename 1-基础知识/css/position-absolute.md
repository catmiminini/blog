# absolute

## 实现居中

```css
.wrapper {
  position: relative;
}
.vertical-center {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);

  /* 双重报险 */
  display: flex;
  align-items: center;
}
```
