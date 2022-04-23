# `module.exports` 和 `exports, export` 和`export default`的区别 --- 未验证

> 以下目前只是理解, 未实际验证, 可能有错误, 欢迎指出.

## `module.exports`

module 变量代表当前模块。这个变量是一个对象，module 对象会创建一个叫`exports`的属性，这个属性的默认值是一个空的对象：

```js
module.exports = {}
```

可以使用`require`方法或`import`关键字用于加载模块. 所加载的模块就是`module.exports`对象.

```js
/* person.js */

module.exports = { name: 'hanzc' }
module.exports.age = 10
```

```js
/* demo.js */

import person from './person.js'
// var person = require('./person.js')

console.log(person.name) // 'hanzc'
console.log(person.age) //  10
```

## `exports` 和 `module.exports`的关系

Node 为每个模块提供一个`exports`变量，指向`module.exports`。即`exports`是`module.exports`的一个引用.

```js
// const exports = module.exports;  // node会进行类似的操作产生exports变量

module.exports = { name: 'hanzc' }
module.exports.age = 10

exports.name = 22

console.log(module.exports) // { name: 'hanzc', age: 22}

exports = { width: 100, height: 50 } // error
```

## `export` 和 `export default`

`export`和`export default`是 ES6 中的语法, 他们的区别:

1. 在单个文件中, `export` 可以有多个, `export default`最多只能有一个
2. 在引入时, `export`只能使用`import`, `export default`可以使用`require()`.
3. 使用`import`时, `export`需要使用大括号`{}`, `export default`不需要.

```js
/* person.js */

export default { name: 'hanzc', age: 10 }
export const world = 'earth'
```

```js
/* demo.js */

import person, { world } from './person.js'
// var person = require('./person.js')  // 取不到world

console.log(person.name) // 'hanzc'
console.log(person.age) //  10
console.log(world) // 'earth'
```
