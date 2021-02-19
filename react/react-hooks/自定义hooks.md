# 自定义hook
## HOC 到 Render Props 再到 hook

业务代码常用实现双向绑定， 分别用以上三种实现，如下：

HOC写法
```js
const HocBind = WrapperComponent =>
  class extends React.Component {
    state = {
      value: this.props.initialValue
    };
    onChange = e => {
      this.setState({ value: e.target.value });
      if (this.props.onChange) {
        this.props.onChange(e.target.value);
      }
    };
    render() {
      const newProps = {
        value: this.state.value,
        onChange: this.onChange
      };
      return <WrapperComponent {...newProps} />;
    }
  };
// 用法
const Input = props => (
  <>
    <p>HocBind实现 value:{props.value}</p>
    <input placeholder="input" {...props} />
  </>
);
const HocInput = HocBind(Input);
<HocInput
  initialValue="init"
  onChange={val => {
    console.log("HocInput", val);
  }}
/>
```
Render Props写法
```js
// props 两个参数initialValue 输入，onChange输出
class HocBind extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: props.initialValue
    };
  }
  onChange = e => {
    this.setState({ value: e.target.value });
    if (this.props.onChange) {
      this.props.onChange(e.target.value);
    }
  };
  render() {
    return (
      <>
        {this.props.children({
          value: this.state.value,
          onChange: this.onChange
        })}
      </>
    );
  }
}
// 用法
<HocBind
  initialValue="init"
  onChange={val => {
    console.log("HocBind", val);
  }}
>
  {props => (
    <>
      <p>HocBind实现 value:{props.value}</p>
      <input placeholder="input" {...props} />
    </>
  )}
</HocBind>
```
再看hook写法
```js
// initialValue默认输入
function useBind(initialValue) {
  const [value, setValue] = useState(initialValue || "");
  const onChange = e => {
    setValue(e.target.value);
  };
  return { value, onChange };
}
// 用法
function InputBind() {
  const inputProps = useBind("init");
  return (
    <p>
      <p>useBind实现 value:{inputProps.value}</p>
      <input {...inputProps} />
    </p>
  );
}
```
比较发现，HOC和render props方式都会侵入代码，使得代码阅读性下降，也不够优雅，组件内部暴露的value值，在外部也很难拿到， 反观 hook 的写法，逻辑完全解耦，使用场景最大化且不侵入代码，在组件顶层可以拿到双向绑定的值，比之前优雅很多。 源码

总结

hook 可读性高，也易于维护。
hook 不会侵入代码， 不会造成嵌套。
hook UI和逻辑彻底拆分，更容易复用。

## 总结

一般自定义 hook 只负责逻辑，不负责渲染。
公共逻辑 hook尽量细分，按照组件的单一原则划分，单一hook只负责单一的职责。
复杂的计算可以考虑用 useCallback, useMemo 去优化。