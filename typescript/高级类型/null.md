# null 和 undefined

`--strictNullChecks`标记可以解决此错误：当你声明一个变量时，它不会自动地包含 `null`或 `undefined`。

1. 使用类型保护去除null

   ```tsx
   function f(sn: string | null): string {
       if (sn == null) {
           return "default";
       }
       else {
           return sn;
       }
   }
   ```

   ```tsx
   function f(sn: string | null): string {
       return sn || "default";
   }
   ```

   

2. 使用类型断言去除null

   ```tsx
   function broken(name: string | null): string {
     function postfix(epithet: string) {
       return name.charAt(0) + '.  the ' + epithet; // error, 'name' is possibly null
     }
     name = name || "Bob";
     return postfix("great");
   }
   
   function fixed(name: string | null): string {
     function postfix(epithet: string) {
       return name!.charAt(0) + '.  the ' + epithet; // ok
     }
     name = name || "Bob";
     return postfix("great");
   }
   ```

   本例使用了嵌套函数，因为编译器无法去除嵌套函数的null（除非是立即调用的函数表达式）。 因为它无法跟踪所有对嵌套函数的调用，尤其是你将内层函数做为外层函数的返回值。 如果无法知道函数在哪里被调用，就无法知道调用时 `name`的类型。

   

