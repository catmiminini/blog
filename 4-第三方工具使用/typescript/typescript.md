# typescript 基础

## 函数

## 泛型

## 高级类型

### 交叉类型 `&`

交叉类型将多个类型合并成一个类型. 它包含了所需类型的全部特性. 例如: Person & Serializable & Loggable 同时是 Person 和 Serializable 和 Loggable。 就是说这个类型的对象同时拥有了这三种类型的全部成员。

```ts
// 使用type关键字
type iUserInfo = iName & iBaseInfo;
```

成员类型冲突时, 成员之间会继续合并.

```ts
interface iProps1 {
  size: string;
}
interface iProps2 {
  size: number;
}
type iProps = iProps1 & iProps2;
/*
type iProps = {
    size: string & number; // never
}
*/
```

### 联合类型 '|'

```ts
type OR = string | number;
```

### keyof

keyof 取出 interface 的所有键, 并且将所有键保存为联合类型.

```ts
interface a {
  name: string;
  age?: string;
}
interface b {
  name: string;
  readonly time: string;
}
type ab = a & b;
type ba = a | b;

type a1 = keyof a; // "name" | "age"
type b1 = keyof b; // "name" | "time"
type ab1 = keyof ab; // "name" | "age" | "time"     交叉属性显示合并后的全部属性
type ba1 = keyof ba; // "name"                      联合属性显示公共属性
```

应用:

```ts
function getValue<T extends Object, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}
const obj1 = { name: "张三", age: 18 };
const a2 = getValue(obj1, "age");
const a3 = getValue(obj1, ""); // error: Argument of type '""' is not assignable to parameter of type '"name" | "age"'.
```

### in

in 用于将联合类型拆解为单独的键, 用于数组和对象的构造.
in 的 key 只接受 string | number | symbol.

```ts
type a1 = "name" | "age";
type a = {
  [key in a1]: string;
};
```

### infer

类型的断言与 infer 无关, ts 在使用时本身就有隐式类型推断, 使用 infer 只是将类型显式得到, 并在后续过程中使用.

下面例子中有两层类型断言, infer 在其中只是得到一个可引用类型的作用.

```ts
// 剔除 this 参数 OmitThisParameter 的类型声明
type OmitThisParameter<T> = unknown extends ThisParameterType<T>
  ? T
  : T extends (...args: infer A) => infer R
  ? (...args: A) => R
  : T;

// 以及 ts 原生实现的其他一些工具类型:
// 获取函数参数类型
type Parameters<T extends (...args: any) => any> = T extends (
  ...args: infer P
) => any
  ? P
  : never;

// 获取返回类型
type ReturnType<T extends (...args: any) => any> = T extends (
  ...args: any
) => infer R
  ? R
  : any;

// 获取实例类型
type InstanceType<T extends new (...args: any) => any> = T extends new (
  ...args: any
) => infer R
  ? R
  : any;

// 获取构造函数类型
type ConstructorParameters<
  T extends new (...args: any) => any
> = T extends new (...args: infer P) => any ? P : never;
// 获取this参数类型
type ThisParameterType<T> = T extends (this: infer U, ...args: any[]) => any
  ? U
  : unknown;
```

### Partial

## 参考

- [typescript 不能不掌握的高级特性（一）](https://juejin.im/post/6844904142599618568)
- [typescript 不能不掌握的高级特性（二）](https://juejin.im/post/6844904145732763655)
- [typescript 不能不掌握的高级特性（三）](https://juejin.im/post/6844904147167215624)
