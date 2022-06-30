# CSS Modules

- 主要思想是给css类名添加hash，从局部css提升到全局css。

- 使用时，在js文件中引入styles对象，styles对象中存储键值对，使用时通过styles.className获取hash后的类名。

```js
import styles from './index.css'
// styles = { className1: 'className1_hashxxx', className1: 'className1_hashxxx' }
```
- 命名方式推荐使用驼峰式，但不强制。如`styles['class-name']`和`styles.className`。

- 不添加hash，直接生成全局css：可以使用`:globle(xxx)`实现。

- 组合其他规则：使用composes属性指定其他类名，会将其他类中的规则导入当前类，但被导入但类必须定义在当前类之前。

```css
.classNameA {
    color: green;
}
.classNameB {
    width: 10px;
}
.otherClassName {
    composes: classNameA classNameB;
    color: red;
}
```

- 也可以从其他文件导入规则。

```css
.otherClassName {
    composes: className from "./style.css";
    color: red;
}
```

## 参考

- [CSS Modules](https://github.com/css-modules/css-modules)