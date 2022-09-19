/**
 * debounce 防抖
 * @return 一个新函数，支持重复调用，但只有最后一次调用生效
 * @description debounce包装的函数只需要满足尾调用即可。
 */


// 只支持尾调用的debounce
function debounce (fn, delay) {
  // 需要一个定时器标记，并通过闭包实现标记缓存
  let timer = null;
  return function() {
    // 先清理
    if (timer !== null) {
      clearTimeout(timer);
    }
    timer = setTimeout(() => fn.apply(arguments), delay);
  }
}

// 支持首调用的debounce
function debounce_pre () {

}


// 测试代码
let timer = setInterval(() => {
  let i = 0;
  while(i++ < 10) {
    debounce(console.log, 1000)(Date().valueOf());
  }
  clearInterval(timer);
}, 100);