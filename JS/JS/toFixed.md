# 如何实现一个 toFixed 方法

```js
function toFixed(num, digits) {
  num = Math.round(num * 10 ** digits);
  return num.toString().replace(/(?:(\d{digits}$))/, ".$1");
}

console.log(
  (123456.7981123).toFixed(2),
  (123456.7981123).toFixed(3),
  (123456.7981123).toFixed(4),
  (123456.7981123).toFixed(5)
);
```
