# RESTful 设计

REST(REpresentational State Transfer)

- 诞生于前后端分离的思想，后端负责数据，前端负责展现，需要一种描述数据便于理解和使用的 api 规范

## 概念

网站应用本质上是浏览器远程使用服务器的资源，并由服务器保存实际的状态，是一种远程网络应用。

- 资源：服务端能够向客户端返回的响应信息，文件等数据，都可以认为是资源。比如服务端的针对请求返回了文件，返回了数据库记录，返回了根据参数的计算结果。这些都可算做服务端资源。
- 状态：由于资源都保存在服务端，因此不同的资源对应不同的状态。服务端资源的变化也就是状态变化。

- URI：，通过一系列名词规定资源位置。
- Http 方法和 Header：定义资源的展示方式以及资源的状态变化。比如通过 Header：Accept 和 Content-Type 规定资源的数据类型，以及通过 Delete 方法规定资源的状态变化为删除资源。

综上，REST（REpresentational State Transfer）中，URI 只负责描述资源位置，资源的展示方式（REpresentational）和资源的状态变化（State Transfer）都通过 Http 报文来确定。

## URI 设计

URI 中只能包含名词，不能包含动词。所有的动词都要对应到一种 Http 方法。

对于资源的具体操作类型，由 HTTP 方法表示。

### 协议

- API 与用户的通信协议，总是使用 HTTPs 协议。

### 域名

- 尽量将 API 部署在专用域名下面
- 不会有进一步扩展，可以考虑放在主域名下。

```http
// 专用域名
https://api.example.com
// 主域名下的api
https://example.org/api/
```

### 版本

- 可以将 API 版本号放入 URL
- 也可以将版本号放入 HTTP 头信息中

```http
// 将API版本号放入URL
https://api.example.com/v1/
```

### 路径

- 在 RESTful 架构中，每个网址代表一种资源
- 网址中不能有动词，只能有名词，所用的名词往往与数据库的表格名对应。一般来说，数据库中的表都是同种记录的"集合"（collection），所以 API 中的名词也应该使用复数。

举例来说，有一个 API 提供动物园（zoo）的信息，还包括各种动物和雇员的信息，则它的路径应该设计成下面这样。

```http
https://api.example.com/v1/zoos
https://api.example.com/v1/animals
https://api.example.com/v1/employees
```

### Http 方法

#### 常用 Http 方法

- GET（SELECT）：用于客户端获取服务端资源，成功后服务端资源不发生变化。
- POST（UPDATE）：用于客户端在服务端新建资源，成功后服务端资源数量增加。
- PUT（UPDATE）：用于客户端在服务端修改资源，成功后服务端资源数量不变，但发生内容修改。客户端提供改变后的完整资源。
- PATCH（UPDATE）：用于客户端在服务端修改资源，成功后服务端资源数量不变，但发生内容修改。客户端提供改变的属性。
- DELETE（DELETE）：用于客户端在服务端删除资源，成功后服务端资源数量减少。

#### 不常用 Http 方法

- HEAD：获取资源的元数据
- OPTIONS：获取信息，关于资源的哪些属性是客户端可以改变的。

### 过滤信息

如果记录数量很多，服务器不可能都将它们返回给用户。API 应该提供参数，过滤返回结果。

```http
?limit=10：指定返回记录的数量
?offset=10：指定返回记录的开始位置。
?page=2&per_page=100：指定第几页，以及每页的记录数。
?sortby=name&order=asc：指定返回结果按照哪个属性排序，以及排序顺序。
?animal_type_id=1：指定筛选条件
```

### 状态码

服务器向用户返回的状态码和提示信息，常见的有以下一些（方括号中是该状态码对应的 HTTP 动词）。

```http
200 OK - [GET]：服务器成功返回用户请求的数据，该操作是幂等的（Idempotent）。
201 CREATED - [POST/PUT/PATCH]：用户新建或修改数据成功。
202 Accepted - [*]：表示一个请求已经进入后台排队（异步任务）
204 NO CONTENT - [DELETE]：用户删除数据成功。
400 INVALID REQUEST - [POST/PUT/PATCH]：用户发出的请求有错误，服务器没有进行新建或修改数据的操作，该操作是幂等的。
401 Unauthorized - [*]：表示用户没有权限（令牌、用户名、密码错误）。
403 Forbidden - [*] 表示用户得到授权（与401错误相对），但是访问是被禁止的。
404 NOT FOUND - [*]：用户发出的请求针对的是不存在的记录，服务器没有进行操作，该操作是幂等的。
406 Not Acceptable - [GET]：用户请求的格式不可得（比如用户请求JSON格式，但是只有XML格式）。
410 Gone -[GET]：用户请求的资源被永久删除，且不会再得到的。
422 Unprocesable entity - [POST/PUT/PATCH] 当创建一个对象时，发生一个验证错误。
500 INTERNAL SERVER ERROR - [*]：服务器发生错误，用户将无法判断发出的请求是否成功。
```

### 错误处理

如果状态码是4xx，就应该向用户返回出错信息。一般来说，返回的信息中将error作为键名，出错信息作为键值即可。
```js
{
    error: "Invalid API key"
}
```

### 返回结果

针对不同操作，服务器向用户返回的结果应该符合以下规范。

```http
GET /collection：返回资源对象的列表（数组）
GET /collection/resource：返回单个资源对象
POST /collection：返回新生成的资源对象
PUT /collection/resource：返回完整的资源对象
PATCH /collection/resource：返回完整的资源对象
DELETE /collection/resource：返回一个空文档
```

## 参考

- [理解 RESTful 架构](http://www.ruanyifeng.com/blog/2011/09/restful.html)
- [RESTful API 设计指南](http://www.ruanyifeng.com/blog/2014/05/restful_api.html)
- [你真的了解 restful api 吗？](https://www.jianshu.com/p/a35bad7dbc54)
- [RESTful API 接口设计标准及规范](https://blog.csdn.net/qq_41606973/article/details/86352787)
