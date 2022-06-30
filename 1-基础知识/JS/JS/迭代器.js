/**
 * @time 2021-12-14
 * @description 学习js迭代器模式， 一些疑问的测试代码
 */

// 问题：编写的自定义迭代器，当迭代状态完成后，修改迭代状态或计算值，再次调用next(), 返回值会变化吗?
// 答案：返回值会变化。
// 解释：JS引擎并不关心next方法的返回值是什么，只是迭代器协议规定了--当迭代完成时，迭代状态和返回值不应该再发生变化，这要求Coder进行代码编写时遵守迭代器协议。
class TestReCallNext {
  [Symbol.iterator]() {
    let count = 0;
    return {
      next() {
        if (count < 3) {
          return { done: false, value: count++ };
        }
        else {
          return { done: true, value: count-- };
        }
      }
    }
  }
}

const obj = new TestReCallNext();
const objIt = obj[Symbol.iterator]();
console.log(objIt.next());
console.log(objIt.next());
console.log(objIt.next());
console.log(objIt.next());
console.log(objIt.next());
console.log(objIt.next());
console.log(objIt.next());
console.log(objIt.next());


console.log('========================================');

// 问题：自定义迭代器对象的return()方法不会强制迭代器进入关闭状态吗？那return方法是做什么用的？
// 答案：对于自定义迭代器，迭代器是否进入关闭状态与return方法无关。自定义迭代器对象中的return方法主要用于中断迭代时执行一些副作用。
// 解释：每次重新开始迭代，比如重复进行for-of循环，都会重新调用迭代器工厂生成迭代器对象，
class TestItReturn {
  [Symbol.iterator]() {
    let count = 0;
    return {
      next() {
        if (count < 3) {
          return { done: false, value: count++ };
        }
        else {
          return { done: true, value: count };
        }
      },
      // return() {
      //   return { done: true };
      // }
    }
  }
}
const tir = new TestItReturn();

for (const item of tir) {
  if (item > 1)
    break;
  console.log(item);
}

for (const item of tir) {
  console.log(item);
}

console.log('=================================');

// 问题：数组的迭代器为什么不可关闭？
let a = [1,2,3,4,5];
let iter = a[Symbol.iterator]();

for(let i of iter) {
  console.log(i);
  if(i > 3) break;
}

for (let i of iter) {
  console.log(i);
}

for(let i of a) {
  console.log(i);
  if(i > 3) break;
}

for (let i of a) {
  console.log(i);
}



// 总结：迭代器模式本身只是一种通用的迭代对象的方式，与js无关，最常见的实现就是创建一个专用迭代器，专门处理一类对象。
// JS语言本身许多语法支持可迭代对象，这就要求可迭代对象有默认的迭代器，这就是Symbol.iterator属性的作用，它指定了对象提供给JS引擎使用的迭代器。
