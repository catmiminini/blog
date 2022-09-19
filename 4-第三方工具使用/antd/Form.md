# Form
## v4

### `<Form>`

- initialValues：初始值
- onFinish: 提交成功回调
- onFinishFailed：提交失败回调
- form：使用外部form对象

### `<Form.Item>`

- name: 字段名
- label
- rules

### `form` ：`<Form>`内部数据管理对象



## 最佳实践

### 布局

1. 表单有三种布局：Horizonta；lVertical；Inline。

2. `From.Item`的布局主要有labelCol和wrapperCol两部分，可以对两部分分别设置`offset` 和` span`属性。

```js
const layout = {
  labelCol: {offset: 8,span: 8},
  wrapperCol: {offset: 8,span: 16}
};
```

3. 可以嵌套Form.Item, 外层的Form.Item不指定name，只用来做布局。
4. 

### 数据控制

1. 表单数据控制

   函数组件：`Form.useForm`用于获取form对象。

   类组件：使用ref获取form对象。

2. 嵌套表单字段

   name属性支持嵌套数据结构。通过 `validateMessages` 或 `message` 自定义校验信息模板。

   ```js
   const validateMessages = {
     required: '${label} is required!',
     types: {
       email: '${label} is not a valid email!',
       number: '${label} is not a valid number!',
     },
     number: {
       range: '${label} must be between ${min} and ${max}',
     },
   };
   // ...
   <Form validateMessages={validateMessages} >
     <Form.Item name={['user', 'name']} >
     // ...
     <Form.Item name={['user', 'email']} >
   // ...
   ```

3. 表单数据存储于上层组件

   使用Form.onFieldsChange属性。

   将表单数据存储于外部容器[并非好的实践](https://github.com/reduxjs/redux/issues/1287#issuecomment-175351978)，如无必要请避免使用。

4. 

### 样式控制

1. 必填、可选样式：通过requiredMark控制。



### 动态增减表单项

1. `Form.List`



## 查询页

需要记录以下数据：查询方法查询直接获取参数， 在调用方法时，直接传入参数；

如果将查询参数设置到全局，则有可能更新不同步，导致查询的还是旧的结果。

- 查询参数
- 表格过滤参数
- 表格分页信息
- 表格排序信息