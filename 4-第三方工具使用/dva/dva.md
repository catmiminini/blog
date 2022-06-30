# dva
dva = React-Router + Redux + Redux-saga
类似于redux和mobx的数据流管理框架

## 概念

### Models

行为 -> dispatch (-effect->) -action-> reducer -> state -connect()-> view

- 行为：用户交互行为 | 浏览器行为
- dispatch: 用于触发action的函数
- effect: 通常表现为异步操作, react-saga
- action: 变更描述对象, `{type: '', payload: '...'}`
- state: 状态数据，全局JS对象，不可变数据
- subscription: Subscriptions 是一种从 源 获取数据的方法，它来自于 elm。

### Router

- react-router
- Router Component: 组织在routes文件夹下， components文件夹下房子presentational components.

## 入门

- 解决通信问题：父子通信； 子父通信；非父子间组件通信；
- 流行解决方案：Flux单向数据流：redux；Reactive响应式数据流方案：Mobx；其他：rxjs
- 最流行的解决方案：
  - 路由：react-router
  - 架构：redux
  - 异步操作：redux-saga

dva = React-Router + Redux + Redux-saga

## model对象创建

```js
const Model = {
  namespace: 'test',
  state: {name:'name', age:'age'},
  effets: {
    *add(action, effects){}
    *minus({payload}, {call, put}){}
  },
  reducer: {
    add(state, action) {}
    minus({name, age}, {payload}) {}
  }
}
```

## 外部修改model
- connect

```js
const mapStateToProps = () => {}
const mapDispatchToProps = (dispatch) => {}
const wrapper = connect(mapStateToProps, mapDispatchToProps)(component)
```

## others

- babel-plugin-import : 按需加载脚本和样式
- webpack的require.ensure来做代码模块的懒加载。