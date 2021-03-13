# React 性能

影响网页性能最大的因素是浏览器的重绘和重排版.

react组件何时会重新渲染?

1. 当Parent re-render时，Child也会re-render，除非以下2种情况之一发生：

    1. 父组件渲染的JSX tree中，在某个位置使用的`<Child/>`对象(react element，即`React.createElement()`返回的对象)与上次渲染时相同（在同一个位置使用同一个对象引用），这时Child组件不会re-render。
    2. Child组件被`React.memo`装饰，并且传给Child组件的props与上次渲染相同(会返回相同的react element).

2. 当Child的状态更新并且re-render的时候，Parent不会re-render，只有Child以及它的后裔组件会re-render。并且Child组件re-render的时候，收到的props与上次渲染相同。

3. 如果通过setState设置的新state与当前state相同(对象的话是要引用同一个对象, 且进行深比较)，则不会触发re-render。

## 纯函数 pure render

原理为重新实现shouldComponentUpdate生命周期方法, 让传入的props和state与之前的作浅比较, 如果返回false, 那么组件就不会执行render方法.

> 理想情况下应当使用深比较, 但深比较的代价太高了.  以及默认情况下, 只要使用setState, 就会触发render, 重新渲染本身和子节点树;

- 运用purerender:  react-addons-pure-render-mixin.
- 优化purerender:
    - 直接给props设置一个字面量对象, 会在每次执行渲染时生成一个新的对象, 也就会触发组件的重新渲染. 解决方法就是使用一个常量引用默认对象.


## `React.memo(MyComponent, isEqual)`

React.memo()是一个高阶组件, 通过记忆组件渲染结果来提高性能表现.

React.memo()只检查props的变更. 当state和context变化时, 它仍然重新渲染.

## 不可变数据类型

对对象的任意变更都将返回一个新的对象引用, 但最大程度复用原有对象的属性.
这使得可以通过浅比较来控制组件渲染.

## key

key属性用于动态子组件渲染的性能优化. key用来做VirtualDOM diff.

## a标签与Link标签
Link标签是react-router里实现路由跳转的链接，一般配合Route使用，react-router接下了其默认的链接跳转行为，区别于传统的页面跳转，Link标签的"跳转"行为只会触发相匹配的Route对应的页面内容更新，而不会刷新整个页面