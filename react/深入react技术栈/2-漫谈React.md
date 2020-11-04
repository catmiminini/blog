# 漫谈React

## 1 事件系统

react的事件是合成事件; dom的事件是原生事件.

1. 仿照 DOM0 的事件绑定方式
2. 实现机制

- 事件委派: 所有事件绑定到结构的最外层
- 自动绑定 this: React.createClass 创建组件自动绑定事件回调函数执行环境
- 手动绑定 this: bind 方法; 箭头函数 (::双冒号绑定)

3. 使用原生事件
   需要操作真实 dom:

- 在 componentDidMount 中可以获取到真实 dom, 因此可以给真实 dom 添加原生事件
- 原生事件必须卸载, 否则会有内存泄漏问题.

4. 混用合成事件和原生事件

混用可能导致一些问题:
- stopPropagation和preventDefault函数不起作用
因此:
- 不要混用合成事件和原生事件, 互相影响的事件统一使用原生事件或合成事件.
- 通过e.target判断避免, 通过e.target判断避开关键的dom.

5. react合成事件和js原生事件的区别
- react只实现了事件冒泡
- react事件是js事件的一个子集
- react绑定事件直接给dom设置事件属性为一个方法



## 2 表单

- 表单控件包括input, select等一系列组件
- 表单控件存在默认的状态
- 表单控件在react中的状态管理方式主要分为两种: 受控组件和非受控组件


1. 受控组件(数据双向绑定)
- 表单value从组件state获取
- 表单内部值变化时, 通过onChange事件得到新的表单内部值
- 使用新的表单内部值得到新的state
- 调用setState设置新的state, 并重新渲染组件

2. 非受控组件
- 表单控件没有value props, 表单内部值不受外部影响.
- 通过defaultValue等设置默认状态
- 通过refs获取表单内部值.

3. 受控与非受控

- 受控组件onChange会产生少量的性能损失, 非受控不需要
- 受控组件需要绑定change事件, 非受控不需要

4. 表单组件的重要属性

- value | selected | checked
- onChange

## 3 样式处理

1. style和className
- style: 使用一个对象, css属性名用驼峰式命名, 值用字符串写;
- className: 使用类名, 根据情况生成类名;

style对象用起来非常反人类, 并且不能利用许多css的特性, 如媒体查询, 但style对象都是局部的, 不会有命名冲突
className使用起来与正常的dom class相同, 但会有命名冲突.

2. css 模块化

- inline style: 完全使用内联样式
- css modules: 编译css文件, 将类名做hash处理之类的, 避免命名冲突.