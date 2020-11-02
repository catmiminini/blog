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

### `useState`

- `useState`返回一个元组, 对应 state 对象和 setState 方法.
- `useState`接收一个单次使用的初始状态, 这个初始状态可以是原始数据和对象, 也可以是返回原始类型和对象的方法.
- `setState`方法可以更新对应的 state. 它的参数可以是一个新状态, 也可以接收一个方法从旧状态计算返回新状态.

```js
const [state, setState] = useState(initialState);
const [state, setState] = useState(() => computeInitialState(props));

setState(newState);
setState((prevState) => computeNewState(prevState));
```

### `useEffect`

用于在初始化和重新渲染过程中执行副作用, 如执行异步操作和操作 dom.

- `useEffect`没有返回值
- `useEffect`可以接收两个参数.
  - 副作用函数`() => (undefined | () => any)`: 在组件初始化和依赖项变化时会执行; 如果副作用函数返回不为 undefined, 则必须为方法, 此方法会在组件卸载时执行, 用于清理一些副作用; 副作用函数不可以是 async 函数, 因为 asnyc 函数返回 Promise 对象.
  - 依赖数组 `any[]`: 依次比较数组中的依赖项, 如果有依赖项改变, 再次执行副作用函数; 依赖项进行简单的值比较或引用比较; 可以不设置依赖项, 不设置依赖项时每次渲染都会执行副作用函数; 可以设置一个空数组作为依赖项, 实现只在初次渲染时执行副作用.

```js
const [state, setState] = useState();
// 每次渲染时执行, 不需要渲染
useEffect(() => {
  const effect = () => {};
  effect();
});
// 当effect变化时, 重新渲染
useEffect(() => {
  const effect = () => {};
  effect();
}, [state]);
// 组件渲染时, 执行卸载函数
useEffect(() => {
  const effect = () => () => {};
  return effect();
}, [state]);
// error, 副作用函数返回的是Promise
useEffect(async () => {
  const effect = async () => {};
  const result = await effect();
}, [state]);
// 外面包装一层, 执行异步副作用函数
useEffect(() => {
  const effect1 = async () => {
    const effect = async () => {};
    const result = await effect();
  };
  effect1();
}, [state]);
```

### useEffect 中的异步

副作用函数中如果有 await 关键字, 就需要副作用函数转换成 async 函数, 副作用函数就会返回一个 Promise 对象, 这样会导致编译错误.

- 第一种做法是在副作用函数中定义 async 函数, 再调用.
- 第二种做法将 await 调用方式转换为 promise.then 方式

### useEffect 中的依赖项怎么设置

- 应当添加副作用函数中用到的变量和函数.
- useState 的返回值只需要依赖 state, 不需要依赖 setState.
- 组件重新渲染过程中不变的数据不需要依赖, 如 import 的对象, 组件函数外部定义的对象, props 相关对象
- 应当使用 eslint-plugin-react-hooks 规则约束帮助设置.

### useEffect 导致的死循环

在副作用函数直接或者间接修改依赖项的值(副作用导致重新渲染引起依赖项的值发生改变), 有可能导致死循环. 下面是一个简单例子:

1. 界面初始化时通过 `useState` 定义 `count`;
2. 界面初始化时通过 `useEffect` 执行 `setCount`, `count` 改变, 并且界面重新渲染;
3. 重新渲染时由于 `count` 改变, 通过 `useEffect` 执行 `setCount`, `count` 改变, 并且界面重新渲染; 重复步骤 3;

```js
const [count, setCount] = useState(0);
useEffect(() => {
  setCount(count + 1);
}, [count]);
```

## useCallback

用于缓存方法引用, 避免每次渲染时定义方法, 触发子组件的重新渲染, 作为一种性能优化的手段.

- `useCallback`返回一个函数对象.
- `useCallback`可以接收两个参数.
  - 要缓存的函数对象`() => any`: 当依赖项发生变化时, 重新生成函数对象;
  - 依赖数组 `any[]`: 依次比较数组中的依赖项, 如果有依赖项改变, 重新生成函数对象; 依赖项进行简单的值比较或引用比较; 可以不设置依赖项, 不设置依赖项时每次渲染都会重新生成函数对象; 可以设置一个空数组作为依赖项, 实现只在初次渲染时生成函数对象.

## useMemo

用于缓存任意值的引用, 避免每次渲染时重新生成值, 触发子组件的重新渲染, 作为一种性能优化的手段. 关乎性能优化有两个点:

1. 避免重新生成对象的计算消耗;
2. 避免不必要的子组件的重新渲染;

- `useMemo`返回一个任意类型的值.
- `useMemo`可以接收两个参数.
  - 要缓存的函数对象`() => any`: 当依赖项发生变化时, 重新生成函数对象;
  - 依赖数组 `any[]`: 依次比较数组中的依赖项, 如果有依赖项改变, 重新生成函数对象; 依赖项进行简单的值比较或引用比较; 可以不设置依赖项, 不设置依赖项时每次渲染都会重新生成函数对象; 可以设置一个空数组作为依赖项, 实现只在初次渲染时生成函数对象.

### 不应使用 useMemo 的情况

1. 缓存的值类型为固定值, 不会发生变化: 这种情况应当将值移动到组件外部;
2. 缓存的值的计算代价很小(O(n)): 这种情况引入 useMemo 可能提高计算代价.

## Hook 规则

- 只在最顶层使用 Hook。不要在循环，条件或嵌套函数中调用 Hook， 确保总是在你的 React 函数的最顶层调用他们。遵守这条规则，你就能确保 Hook 在每一次渲染中都按照同样的顺序被调用。

- 只在 React 函数中调用 Hook。不要在普通的 JavaScript 函数中调用 Hook。你可以：

  - 在 React 的函数组件中调用 Hook
  - 在自定义 Hook 中调用其他 Hook

- 可以通过 eslint-plugin-react-hooks 约束 hook 规则

### 原因

React 通过 Hook 调用的顺序判断 state 与 `useState` 的对应关系。循环，条件或嵌套函数可能会使 `useState` 的顺序改变，引发问题。如果要使用条件判断，可以将判断放到 Hook 的内部。

### 插件

- eslint-plugin-react-hooks

## 参考

- [React Hooks 解析（上）：基础](https://segmentfault.com/a/1190000018928587)
- [React Hooks 解析（下）：进阶](https://segmentfault.com/a/1190000018950566)
- [Hook API 索引](https://zh-hans.reactjs.org/docs/hooks-reference.html)
- [Rethinking Hooks Memoization](https://blog.logrocket.com/rethinking-hooks-memoization/)
