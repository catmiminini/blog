    # react-redux

## `connect([mapStateToProps], [mapDispatchToProps], [mergeProps], [options])`

### mapStateToProps

### mapDispatchToProps

可以省略该参数，也可以传递对象和函数。

- 省略：将dispatch注入到props中，可通过props.dispatch获取。

如`connect(mapStateToProps)` 会导致 `props.dispatch`存在。

- 函数：函数参数接收dispatch，并在函数体内返回调用函数。

如`connect(mapStateToProps, (dispatch) => { add: () => dispatch({ type:'add' })})` 会导致`props.add`存在。

- 对象：对象中属性为action创建函数，会被connect函数通过dispatch封装调用，之后可通过`props[action]`获取。

如`{ add: () => { type:'add' }}`, 被connect函数通过dispatch封装后相当于`(dispatch) => { add: () => dispatch({ type:'add' })}`，会导致`props.add`存在。