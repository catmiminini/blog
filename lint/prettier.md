# prettier

代码格式化工具。
支持格式化绝大多数的前端文件类型.
通过简单的通用配置实现对多种不同文件的格式化.

## 与 eslint 的区别

- eslint 包括代码风格规范, 和代码质量保证
- prettier 只包括代码风格规范

## 使用

- `prettier --check`: 检查代码格式
- `prettier --write`: 格式化代码格式

### 与 eslint, stylelint 等工具共存

- eslint-config-prettier: 用于关闭 eslint 中不必要的和冲突的配置.
- tslint-plugin-prettier: 与 eslint-config-prettier 类似.
- stylelint-prettier: 与 eslint-config-prettier 类似.

### 使用 git hooks

- 使用`husky`的`pre-commit` hook.
- 使用`lint-stage`

```js
{
  "husky": {
    "hooks": {
      "pre-commit": "lint-staged"
    }
  },
  "lint-staged": {
    "**/*": "prettier --write --ignore-unknown"
  }
}
```

## 配置

```js
// prettier.config.js or .prettierrc.js
module.exports = {
  printWidth: 100,              // 行长度
  useTabs: false,               // 是否使用tab
  tabWidth: 2,                  // tab 大小
  trailingComma: "all",         // 是否使用尾逗号
  semi: true,                   // 分号要求
  singleQuote: true,            // 单引号
  bracketSpacing: true,         // 括号边缘空间
  jsxBracketSameLine: false,    // jsx尖括号尾是否换行
  arrowParens: "always",        // 箭头表达式参数括号
  endOfLine: "auto",            // 行尾换行符
};
```
