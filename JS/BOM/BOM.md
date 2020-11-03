# BOM
## window对象

- js接口
- global对象

### 全局作用域

在全局作用域内声明但变量和函数，都会成为window的属性和方法。

### 窗口关系和框架

window.frames

- 数组索引：从0开始，从上到下，从左到右。window.frames[0]
- name索引：window.frames['name']

- top 顶层frame：top === window(最外层的window), top[0] === window.frames[0]
- parent 父级frame

## location对象

提供当前窗口文档的信息，也提供了一些导航功能。

window.location === document.location
### 属性
- hash: "#content"
- host: "www.example.com:80"
- hostname: "www.example.com"
- href: "http://www.example.com"
- pathname: "/path/file"
- port: "80"
- protocol: "http:"
- search: "?q=javascript"

> search 的结构不便使用，需要实现查询字符串参数的方法。

### 方法

- location.assign("http://www.test.com"): 打开url并在历史记录中生成一条记录。
- location.replace("http://www.test.com"): 打开url并替换历史记录中最新的一条记录。