# eslint

识别es代码模式，从而约束代码风格。检查代码格式，并给出提示信息。
默认配置文件：.eslintrc

## JSX与React支持
- eslint可以支持JSX，但不支持React语法
- eslint-plugin-react 可以用来支持React。

## 配置
- parser: 指定解析器。
- parserOptions: 设置解析器选项
- processor: 处理器
- environment: 环境
- global: 全局变量
- plugins: 第三方插件
- rules: 配置规则
- 行内注释禁用规则
- settings: 共享设置
- 层叠配置: 配置文件就近原则
- extends: 继承基础配置中已启用的规则
- ...

## 命令行

## 规则
- 解决可能导致逻辑错误的规则
- 最佳实践的建议的规则
- 要求启用严格模式的规则
- 变量声明的规则
- nodejs和commonjs的规则
- 代码风格的规则
- ES6的规则