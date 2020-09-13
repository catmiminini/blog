# redux-saga

- 使用generator函数执行effect
- effect存储在saga文件中：分为worker saga执行副作用，和监听saga用于拦截action并转发给worker saga
- 在调用createStore时，传入`applyMiddleWare(sagaMiddleware`, 在createStore后调用`sagaMiddleware.run(mySage)`

## 监听未来的action

- take: 主动拉取一个action

## 无阻塞调用

- fork：无阻塞的执行一个任务，返回一个task对象
- cancel：用于取消fork产生的task对象

## 同时执行多个任务

- `const [a, b] = yield [ call(), call() ]`，类似于`Promise.all()`

## 在多个 Effects 之间启动 race

- race：类似于`Promise.all()`, 但会自动取消失败的effects。

```js
const {posts, timeout} = yield race({
    posts: call(fetchApi, '/posts'),
    timeout: call(delay, 1000)
  })
```

## 使用 yield* 对 Sagas 进行排序

## 组合sagas

## 取消saga

## redux-saga的fork-model

- attached forks -- fork：错误处理需要在fork所在的block的调用方处理。
- detached forks -- spawn

## 并发


## API
### redux-saga

- delay：延迟时间后返回Promise

### redux-saga/effects

- call: 调用一个方法
- apply：
- cps
- put：dispatch同步action
- takeEvery：拦截每一个action，并转发给对应的worker saga
- takeLatest：只允许一个fetchData任务在执行，并且这个任务是最后被启动的那个，之前的任务会被取消。
- select：getState？
- take：在 take 的情况中，它将会暂停 Generator 直到一个匹配的 action 被发起了。
- fork：创建一个无阻塞调用，返回task对象
- cancel：取消一个fork task
- cancelled：取消完成后，用于finally流程块条件判断
- race: 类似于Promise.race()