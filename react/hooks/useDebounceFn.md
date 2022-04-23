# useDebounceFn
正常情况下我们在组件中需要创建防抖函数，防抖函数通过对cb封装后返回一个新函数，通过对这个新函数的多次调用实现防抖功能。
防抖函数多次封装产生多个独立的新函数，这些独立的新函数有各自独立的防抖队列，互不影响。
但是在组件中每次渲染都会调用一次debounce函数产生新函数，这就导致防抖功能不能正常工作。
useDebounceFn的关键就是如何只产生一个新函数，但每次调用时使用实际的cb，因为cb在组件重复渲染中可能会发生变化。
函数地址不变，函数功能实时变化的功能，可以通过闭包实现，在组件中就是利用useRef。

```js
function useDebounceFn(cb, delay) {
    // const fnref = useRef();
    // fnref.current = cb;
    // useLatest就这样实现的
    const fnRef = useLatest(cb);

    // 通过useMemo保证只生成一个debounced
    // 通过闭包加fnref，使得传入debounce的cb的地址不需要变化，但实际功能会实时更新
    const debounced = useMemo(
        () => debounce((...args) => fnref.current(...args), delay)，
        []
    );

    return debounced;
}
```
