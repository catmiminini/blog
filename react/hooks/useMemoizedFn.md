# useMemorizedFn
用来缓存函数，避免函数地址发生变化，当函数地址发生变化时，React.memo的通过浅比较的缓存作用会失效。
useCallback当依赖变化时函数地址会变化，useMemorizedFn通过闭包的方式实现了当函数变化时，函数地址也不变化。
**this 绑定暂时没有明白设计思路**, 有可能只是单纯用来保留一个传入this的接口。
> useRef是通常用于创建函数组件内闭包变量的常用hook。也可以用来创建函数组件实例的内部变量。

## 实现
```js
function useMemoizedFn(fn) {
    let that = this;
    // const realFn = useMemo(() => fn, [fn]);
    const realFn = fn;

    // 只创建一次函数，并存储在useRef中，保证函数地址不发生变化；
    // 函数内部通过闭包引用外部最新的方法，保证每次调用都是有效调用；
    const memoizedFn = useRef(function(...args) {
        realFn.apply(this, args);
    });

    return memoizedFn.current;
}
```
