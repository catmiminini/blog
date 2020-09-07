# 深入浅出 nodejs

## 一、介绍

### 1. node 特点

- 异步 IO：读取文件的异步 IO
- 事件与回调函数：网络请求采用事件与回调函数的模式
- 单线程：忽略状态的同步问题，没有死锁。但单线程也有缺点：不能利用多核 cpu；程序错误导致退出；大量计算导致异步 IO 无法实现。但可通过 child_process 来解决上述问题。child_process 类似于 webWorker。
- 跨平台：基于 libuv 实现跨平台

### 2. 应用场景

- IO 密集型
- cpu 密集型也可以用
- 中间层 bff
- 分布式应用

## 二、模块机制

JS 原生缺乏模块功能的支持；ES6 推出了原生模块支持。

### 1. CommonJS

#### 模块规范

1. 模块引用：`require()`
2. 模块导出：`exports` 对象。`exports` = `module.exports`。
3. 模块标识：小驼峰字符串，相对路径或绝对路径。

### 2. Node 的模块实现

引入模块的步骤：

1. 路径分析
2. 文件定位
3. 编译执行

模块分类：

- 核心模块：Node 提供的模块。Node 启动时直接加载到内存中，不再需要文件定位和编译执行。
- 文件模块：用户编写的模块。包括项目文件夹导出的模块和 npm 引入的模块。运行时动态加载，需要完整的路径分析、文件定位、编译执行。

#### 优先从缓存加载

Node 对引入过的模块会进行缓存，缓存的是编译执行后的对象。缓存优先使得缓存过的模块可以跳过上面三个步骤。

#### 路径分析和文件定位

加载速度排序：

1. 缓存模块
2. 核心模块
3. 文件模块：指明了绝对路径或相对路径的文件模块。可以快速精准定位到文件位置。
4. 自定义模块： 非核心模块，也没有指明绝对路径和相对路径的文件模块。在查找时，从 node_modules 文件夹中查找模块，此过程会不断从当前文件夹向父文件夹递归查找，直到找到为止。

文件定位：

- 文件扩展名分析：不指定扩展名时，按 js，json，node 次序补充扩展名并查找。
- 目录分析和包：查找路径时发现是目录，先查找目录下的 package.json 中的 main 属性指定的文件；如果没有 package.json, 则默认文件名为 index，进行文件扩展名分析。

#### 模块编译

js 模块的编译:
每个模块都有 `require`，`exports`，`module`，`__filename`，`__dirname` 这 5 个变量，是因为模块编译。模块编译后的大概结构为：

```js
;(function (exports, require, module, __filename, __dirname) {
  //...
})
```

### 6. 包与 NPM

node 命令与 npm 命令：

- node：在 node 环境下执行代码或其他操作。
- npm：通过 npm 包管理仓库发布、安装第三方模块。

包结构：

- package.json：包描述文件
- bin：用于存放可执行二进制文件的目录
- lib：用户存放 js 代码的目录
- doc：用于存放文档的目录
- test：用于存放测试代码的目录

发布包：

1. 根据包结构编写模块：`npm init`。
2. 注册包仓库账号：`npm adduser ...`。
3. 上传包：`npm publish <folder>`。
4. 安装包：`npm install`。

### 7. 前后端共用模块

前端模块加载需要异步加载。因为前端响应速度依赖于网络带宽，而网络加载速度与磁盘加载速度差异很大。所以服务端可以使用同步加载表现很好的性能，而前端却不适用同步加载。

- CommonJS 同步加载，适用于服务端: `require('fs')`
- AMD 规范, 按需加载：`define(id?, dependencies?, factory)`
- CMD 规范, 按需加载: `define(['dep1', 'dep2'], function (dep1, dep2){ return function () {} })`

## 三、异步 IO

### 1. 原因

- 用户体验
- 资源分配

### 3. Node 的异步 IO

事件循环模型：node 的事件循环模型 [带你彻底弄懂 Event Loop](https://segmentfault.com/a/1190000016278115)

### 4. 非异步 IO 的 API

- 定时器：setTimeout() setInterval()
- process.nextTick()
- setImmediate()

## 四、异步编程

### 1. 函数式编程

- 高阶函数：函数作为参数或返回值。
- 偏函数：参数或变量以及预置的函数。实质上是柯里化的参数重用特性。
- 柯里化：将多参数函数转化为单参数函数链式调用的形式。具有参数重用和延迟调用的特点。

### 2. 异步编程的优势和难点

优势：略

难点：

- 异常处理：将异常作为回调函数的第一个参数；
- 回调嵌套过深
- 阻塞代码：只能使用 setTimeout 延迟执行
- 多线程编程：浏览器使用 webworker，node 使用 child_process。
- 异步转同步

### 3. 异步编程解决方案

- 发布订阅模式
- promise/deferred 模式
- 流程控制库

#### 事件发布订阅模式

Node 自身提供的 events 模块是发布订阅的一个简单实现。

API：

- addListener/on()
- once()
- removeListener()
- removeAllListener()
- emit()

#### promise/deferred

#### 流程执行库

## 五、内存控制

### 1. V8 的垃圾回收机制与内存限制

V8 的垃圾回收机制：

- 内存分代：新生代和老生代，使用不同的回收算法。
- Scavenge 算法：两个 semispace From 空间 和 To 空间 的复制转移。在分代式垃圾回收中，需要判断对象晋升。晋升条件：经历过 Scavenge 回收；To 空间内存占比超过限制。
- Mark-Sweep：标记清除，产生内存碎片。
- Mark-Compact：标记压缩空间再清除，不产生内存碎片。
- Incremental Marking：增量标记，延迟清理，增量式整理。

## 六、理解 Buffer

Node 作为服务端需要处理网络协议，数据库，图片和其他文件，有处理大量二进制数据的需求。传统的字符串类型不能满足这些需求，Buffer 对象应运而生。

### 1. Buffer 结构

通过 JS 核心模块与 C++内建模块组合实现。

- Buffer 对象类似数组：`new Buffer(size)`

8KB 界限：

- 小对象（小于 8KB）：多个小对象在空间允许情况下共用一个 8KB slab。
- 大对象（大于 8KB）：每个大对象对应一个 slab。

### 2. Buffer 转换

- 字符串转 Buffer：通过 Buffer 构造函数：`new Buffer(str, [encoding])`, 以及 write 方法：`buf.write(string, [offset],[length],[encoding])`
- Buffer 转字符串：通过 toString(): `buf.toString([encoding], [start],[end])`

### 3. Buffer 的拼接

- Buffer 相加等于 toString 后字符串相加，Buffer 对象首尾的不完整宽字符会导致问题。
- 通过 setEncoding()解决：`buf.setEncoding(encoding)`

## 七、网络编程


