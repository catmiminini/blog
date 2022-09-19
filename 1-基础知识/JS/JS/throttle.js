/**
 * throttle 节流
 * @return 一个包装后的函数，支持重复调用，但限制调用频率，达到节流的效果
 * @description 节流只是为了限制调用频率，按理说需要支持首调用，尾调用会导致第一次调用有延迟
 */


// 首调用的节流实现
function throttle (fn, delay) {
  let timer = null;
  // 第一次调用允许
  let canDo = true;
  return function () {
    if (canDo) {
      fn.apply(argumnets);
      canDo = false;
    }
    // 当不能执行cando时，重复调用也不能进入分支2，会重新设置很多定时器
    else if (timer === null) {
      timer = setTimeout(() => {
        canDo = true;
        timer = null;
      }, delay);
    }
  }
}

// 首调用的节流实现
const myThrottle2 = function (func, wait = 50) {
  var canRun = true
  return function (...args) {
    if (!canRun) {
      return
    } else {
      canRun = false
      func.apply(this, args) // 将方法放在外面, 这样即便该函数是异步的，也可以保证在下一句之前执行
      setTimeout(function () {canRun = true}, wait)
    }
  }
}


// 尾调用的节流实现
function throttle_post (fn, delay) {
  let timer = null;
  // 第一次调用不允许
  let canDo = false;
  return function () {
    if (canDo) {
      fn.apply(argumnets);
      canDo = false;
    }
    // 当不能执行cando时，重复调用也不能进入分支2，会重新设置很多定时器
    else if (timer === null) {
      timer = setTimeout(() => {
        canDo = true;
        timer = null;
      }, delay);
    }
  }
} 

// github上别人实现的尾调用的节流实现
function throttle(fn) {
  let canRun = true; // 通过闭包保存一个标记
  return function () {
    if (!canRun) return; // 在函数开头判断标记是否为true，不为true则return
    canRun = false; // 立即设置为false
    setTimeout(() => { // 将外部传入的函数的执行放在setTimeout中
      fn.apply(this, arguments);
      // 最后在setTimeout执行完毕后再把标记设置为true(关键)表示可以执行下一次循环了。当定时器没有执行的时候标记永远是false，在开头被return掉
      canRun = true;
    }, 500);
  };
}



// 测试代码
let timer = setInterval(() => {
  let i = 0;
  while(i++ < 100) {
    throttle(console.log, 1000)(Date().valueOf());
  }
  clearInterval(timer);
}, 100);
