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

## 详解api

## 参考

- [React Hooks 解析（上）：基础](https://segmentfault.com/a/1190000018928587)
- [React Hooks 解析（下）：进阶](https://segmentfault.com/a/1190000018950566)
