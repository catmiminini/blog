# window.requestAnimationFrame
raf的设计思想是通知浏览器执行一个动画，并且要求浏览器在下次重绘之前调用指定的回调更新动画。
raf的调用时机是下次重绘之前，也就是渲染下一帧之前调用。
raf每次调用只会在下一帧前执行一次，也就是单次注册回调函数，如果想要每一帧都执行一次，就需要在回调函数中再注册回调。

1. 使用raf实现一个setInterval

```js
function setInterval(cb, interval) {
    let timer = null;
    let startNow = Date.now(),
        endNow = Date.now();

    function loop() {
        endTime = Date.now();
        if(endTime - startTime > interval) {
            endTime = startTime = Date.now();
            cb?.();
        }
        timer = requestAnimationFrame(loop);
    }

    timer = requestAnimationFrame(loop);

    return timer;
}

function newClearInterval(timer) {
    cancelAnimationFrame(timer);
}
```