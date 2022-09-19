# js语言的动态性

  关于js的东西, 最基础的有8种数据类型, 其中最复杂的是object;
  
  js中一个变量和一个属性最终是什么, 是一个很复杂的机制. 但主要分为3个场景:

- 一是在某个上下文中使用this,
- 二是在某个上下文中通过aObj.aAttr访问一个对象的某个属性, (原型链机制)
- 三是在某个上下文中直接使用一个变量. (闭包)

##### **首先是使用this.**
  
  可以将this理解为函数中的一个隐式变量, 这个变量默认指向全局变量window, 任何一个this默认都指向window, 但在函数中使用的this, 可以通过不同的调用方式, 改变函数执行时的this指向.

```js
function a(){
  console.log(this)
}
obj.a = a;
```

  1. 直接调用`a()`, 那么不论在什么地方调用, this都指向window
  2. 通过`obj.a()`, 那么a执行时的this就会指向obj
  3. 通过new的方式调用函数, 函数作为构造函数, 会返回一个实例, 此时函数内部的this就会指向返回的实例
  
  以上是js语言原生提供的this机制, 其中机制1和机制3的this指向都是不可修改的, 但机制2是可以修改的, 可以通过修改obj来动态改变函数的this指向.

  于是有了apply方法的实现思路:

  ```js
  Function.prototype.apply = function (context, args) {
    if(typeof context !== 'object' || context === null) context = window
    // apply方法标准调用方式为 funcA.apply(thisContext, arguments), 所以apply函数内部的this就是FuncA
    context.__applyFunc = this;
    const result = context.__applyFunc(...args);
    delete context.__applyFunc;
    return result;
  }
  ```

  同理也可以实现call方法,

  ```js
    Function.prototype.call = function (context, ...args) {
    if(typeof context !== 'object' || context === null) context = window
    context.__callFunc = this;
    const result = context.__callFunc(...args);
    delete context.__callFunc;
    return result;
  }
  ```

  bind方法是要返回一个新的函数:

  ```js
  Function.prototype.bind = function (context, ...args) {
    const that = this;
    return function F(...newArgs) {
      // 函数可以通过new调用, 不能违反机制3, 所以做判断
      // 此函数本意是执行that的功能, 所以new调用时, 创建that的实例
      if(this instanceof F) {
        return new that(...args, ...newArgs)
      }

      // 这里通过闭包固定了this, 闭包后面会讲
      return that.apply(context, [...args, ...newArgs])
    }
  }
  ```

  此外还有箭头函数, 箭头函数内部没有this, 但它内部可以使用this, 这时可以理解为箭头函数通过闭包机制引用到离它最近的普通函数的this变量. (只适用于机制1)

  对箭头函数使用机制2会失效, 因为箭头函数内部的this变量是通过闭包引用的, 因此并不会跟随改变.

  对箭头函数使用机制3会报错. `TypeError: xxx is not a constructor`

##### 二是在某个上下文中通过aObj.aAttr访问一个对象的某个属性,

此时讨论的问题是类似与obj.a的问题, 但我们不需再讨论a内部的this指向问题, 而是讨论obj对象本身, 它是如何找到a属性的.

想象一个js对象, 如果我们不了解它, 就很容易将它想象成一个完全平铺的json对象. 至少这样的js对象易于理解.

但通过控制台查看一个对象的结构, 就会发现它比我们想象的要复杂地多得多, 这是为什么呢?

我们知道js是支持面向对象编程的, 它实现了继承机制, 所有的对象都是继承自Object. 因此所有的对象都可以使用Object上的属性和方法.但如果子对象都存储一份Object的副本, 那么在存储上会有巨大的冗余, 并且也失去了继承的多态优势. 

js使用了原型式继承, 还有一些其他的继承方式, 在后面讲继承时会提到. js的继承是通过原型对象实现的. 

js允许一个任意一个普通函数(非箭头函数)作为构造函数, 通过new调用构造函数, 来生成一类对象实例, 这就是js批量生成对象实例的主要方式. 

一个对象的属性可以是任意类型, 但我们对其作简单的区分, 属性是方法或非方法. 这与其他面向对象语言十分相似, 再次我们用来作类比. 其他的语言会有实例属性和公共属性. 我们通过构造函数创建对象实例, 也需要实例有差异化, 所以我们通过实例属性和实例方法来对每个实例作差异化; 同时我们希望这一类对象有一些共同的属性和方法, 这些共同的部分可以存储在一起, 在js中就是应该存储在对象中.

所以我们有这样的需求, 我们希望通过构造函数F, 可以创建一批实例, 它们有各自不同的部分, 也共享着一块相同的部分. 注意到这里我们有两类对象, 一个是构造函数F, 另一个是实例的集合.

对实例各自不同的部分, 当然是存储在各个实例对象上. 但共享的部分, 它理应不依赖任何实例, 反而它与这类实例都有关, 所以公共部分应该与构造函数F有关.

构造函数F是一个函数, 但它也是一个对象, js中Function和Object是两个关系很深的对象, 后面总览原型链机制时会详细讲解. 但此时我们通过在F这个对象上, 添加一个属性来存储实例的公共部分, js中使用的就是AFunc.prototype, 也就是原型对象. 原型对象存储的是一类实例的公共属性和公共方法.

我们通过原型对象完成了公共部分的提取, 但实例对象中应该怎么获取它呢?

在调用构造函数时, 会向实例对象添加__proto__属性, 它指向原型对象. aInstance.__proto__ = aConstructor.prototype;

但此时还不算完, 仅仅通过__proto__引用到原型对象, 依然不能使实例调用到原型对象上的方法,
aObj.aFuncOnProto应该是找不到此属性, 而`aObj.__proto__.aFuncOnProto`才能找到, 但实际是aObj.aFuncOnProto也可以找到, 这是因为js有原型链机制, 当对象的属性在对象实例上没有找到时, 那么他就会尝试在它的__proto__上找, 如果他的__proto__上没有找到, 那么就继续在`__proto__.__proto__`上找. 要明白所有的对象都是实例, 所以它们都会有__proto__属性.
对象的继承关系也许并不止两层, 于是找不到的属性就会一层一层地向上找, 直到Object的原型对象为null时, 这样的寻找过程才会停止. 这也是它叫做原型链的原因, `__proto__.__proto__.__proto__....`, 这样寻找原型的链条, 当然叫原型链.

##### 三是在某个上下文中直接使用一个变量. (闭包)

闭包与执行上下文有关, 所以先理一下执行上下文是什么

**执行上下文**

js代码执行时, 会产生执行上下文, 

// TODO