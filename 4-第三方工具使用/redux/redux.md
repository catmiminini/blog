# redux
相关node包：
- redux
- react-redux
- redux-thunk | redux-promise | redux-promise-middleware
- reselect

相关API:
- redux:
  - const store = redux.createStore(reducer);   // 创建store
  - store.getState();   // 获取状态
  - store.dispatch({action: "xx"});   // 发布action
  - store.subscribe(callback);  // 订阅状态变化

- react-redux:
  - useSelector
  - useDispatch

- redux-thunk:
  - thunkMiddleware: 区分action类型为对象、函数，函数可以执行副作用

- redux-promise:
  - promiseMiddleware: 将action封装为promise类型

- redux-promise-middleware: 区分action类型为对象、函数和promise，分别处理

- reselect: 优化useSelector，扩充useSelector功能