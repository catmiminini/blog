# react hooks

- 带组件状态的逻辑很难重用：render props 或高阶组件，需要改变组件的层级结构，不够直观。
- 复杂组件难于理解：生命周期函数中可能包含多个不相干的业务逻辑。
- Class 组件难于理解：Class 组件的 `this` 指针问题。以及函数式组件的优势。

React Hooks 可以赋予函数组件使用 React 的各种特性的能。

## 基本 api

- `useState`：提供 `state` 特性
- `useEffect`：提供生命周期钩子特性
- `useLayoutEffect`：提供生命钩子特性，但保证在渲染前生效
- `useContext`：提供 `Context` 特性
- `useReducer`：通过 `redux` 的模式提供数据管理
- `useCallback`：提供函数绑定
- `useMemo`：提供函数结果缓存
- `React.memo`：提供仅支持 `props` 的 `componentShouldUpdate` 特性
- `useRef`：提供 ref 特性

## 详解 api

## Hook 规则

- 只在最顶层使用 Hook。不要在循环，条件或嵌套函数中调用 Hook， 确保总是在你的 React 函数的最顶层调用他们。遵守这条规则，你就能确保 Hook 在每一次渲染中都按照同样的顺序被调用。

- 只在 React 函数中调用 Hook。不要在普通的 JavaScript 函数中调用 Hook。你可以：

  - 在 React 的函数组件中调用 Hook
  - 在自定义 Hook 中调用其他 Hook

### 原因

React 通过 Hook 调用的顺序判断 state 与 `useState` 的对应关系。循环，条件或嵌套函数可能会使 `useState` 的顺序改变，引发问题。如果要使用条件判断，可以将判断放到 Hook 的内部。

### 插件

- eslint-plugin-react-hooks

## 参考

- [React Hooks 解析（上）：基础](https://segmentfault.com/a/1190000018928587)
- [React Hooks 解析（下）：进阶](https://segmentfault.com/a/1190000018950566)
