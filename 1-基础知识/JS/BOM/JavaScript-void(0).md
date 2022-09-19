# `javascript:void(0)`是什么?

它经常出现在 `a` 标签的 `href` 属性.
`<a href="javascript:void(0)" id="loginlink">login</a>`

## `javascript:` 是什么?

它是一个 schema, 类似于`http:` `data:`, 因此是 url 的一部分.
`javascript:action`, 会在跳转 url 时执行 action 的代码.

```js
`<a href="javascript:alert("yes, im here");" id="loginlink">login</a>`;
```

上述代码将在点击链接时弹出提示框.

## `void(0)` 是什么?

`void` 是一个关键字, 也可以作为函数使用. 就像 `new` 关键字一样, `new(Object)` 和 `new Object` 是相同的. `void(0)` 与 `void 0` 也是相同的.

`void(params)` 必定返回原生的 `undefined`, 因此 `void(params) === undefined` 为 true.

### `void 0` 与 `undefined` 与 `window.undefined` 的区别

`void 0 === undefined`
`window.undefined` 默认为 `undefined`, 但可以被修改.

## `javascript:void(0)`是什么?

代表执行一段 javascript, 但 `void(0)`并不起到任何副作用. 你也可以这样写, `javascript: 1==1`, 也没有任何副作用.
