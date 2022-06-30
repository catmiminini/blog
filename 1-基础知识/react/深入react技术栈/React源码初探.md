# react源码初探

书上用的是15.0的版本

## 目录

- addons: 工具和插件
- isomorphic: 同构方法
- shared: 公用或常用方法
- test:
- core/tests: 边界错误的测试用例
- renderers: 核心部分, 包含大部分功能实现

### renderers

- dom:
    - client: dom操作方法及事件方法
    - server: 服务端渲染的实现和方法
    - shared: 文本组件, 标签组件, DOM属性操作, css属性操作等
- shared:
    - event: 一些更为底层的事件方法.
    - reconciler: 协调器, 虚拟dom的主要实现.

## virtual DOM

- 基本节点为ReactNode
- ReactNode 分为3种类型: ReactElement, ReactFragment, ReactText
- ReactElement 又分为2种: ReactComponentElement 和 ReactDOMElement
- `type ReactFragment = Array<ReactNode | ReactEmpty>`, ReactFragment 用来表示动态子组件
- `type ReactNodeList = ReactNode | ReactEmpty`
- `type ReactText = string | number`
- `type ReactEmpty = null | undefined | boolean`

## 创建React元素

使用React.createElement(type, config, children)

**3.2没有看懂**

