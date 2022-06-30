/**
 * @time 2021-12-15
 * @description 学习js生成器模式， 一些疑问的测试代码
 */

function * g() {
  let y = yield 2;
  console.log(y);
  return y;
}

const gg = g();

let x = gg.next();
let z = gg.next();

console.log(x + ',' + z)