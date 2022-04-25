# `Object.prototype.valueOf()`

## 语法

```js
obj.valueOf()
```

## 描述

JavaScript 调用`valueOf`方法将对象转换为原始值。JavaScript 调用`valueOf`方法将对象转换为原始值。你很少需要自己调用`valueOf`方法；当遇到要预期的原始值的对象时，JavaScript 会自动调用它。

默认情况下，`valueOf`方法由`Object`后面的每个对象继承。 每个内置的核心对象都会覆盖此方法以返回适当的值。如果对象没有原始值，则`valueOf`将返回对象本身。

JavaScript 的许多内置对象都重写了该函数，以实现更适合自身的功能需要。因此，不同类型对象的 valueOf()方法的返回值和返回值类型均可能不同。

**不同类型对象的 valueOf()方法的返回值**
|对象|返回值|是否默认返回对象自身|
|---|---|---|
|`Array`|返回数组对象本身|默认|
|`Boolean`|布尔值|默认|
|`Date`|UTC 毫秒数(从 1970 年 1 月 1 日午夜开始计算)|非默认|
|`Function`|函数对象本身|默认|
|`Number`|数字值|默认|
|`Object`|对象本身|默认|
|`String`|字符串值|默认|

## 覆盖`valueOf`方法
```js
// 覆盖
MyType.prototype.valueOf = function () { ... }

// 调用
myTypeObj.valueOf()
```