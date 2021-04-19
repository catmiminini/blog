# umi

## 目录结构

1. 静态配置：Umi 在 .umirc.ts 或 config/config.ts 中配置项目和插件，支持 es6。
2. 动态配置：约定 src/app.tsx 为运行时配置, 此配置通过 api 设置，会在运行时覆盖（1.）的配置。
3. 路由：在（1.）的配置文件中通过 routes 进行配置，格式为路由信息的数组。
4. 约定式路由：如果没有 (3.)routes 配置，Umi 会进入约定式路由模式，然后分析 src/pages 目录拿到路由配置。
5. 触发路由：在 umi 里，页面之间跳转有两种方式：声明式和命令式。Link 和 historyAPI. 并触发对应的路由（3. 4.）
6. 页面模板：src/pages/document.ejs，umi 约定如果这个文件存在，会作为默认模板.
7. Mock 数据：Umi 约定 /mock 文件夹下所有文件为 mock 文件。
8. 环境变量：Umi 中约定根目录下的 .env 为环境变量配置文件。

## 配置

1. 配置文件: .umirc.ts > config/config.ts
2. ts 提示: defineConfig(Config)
3. 本地临时配置: .umirc.ts -> .umirc.local.ts , config/config.ts -> config/config.local.ts
4. 多环境多配置: 优先读取 .local.ts > UMI_ENV; 使用 UMI_ENV=cloud, 以读取.umirc.cloud.js 中的配置.

## 使用的其他库

## API

### umi/withRouter

- withRouter(layout)

### umi/link

- Link 组件

## package.json

```js
"dependencies": {
    "@ant-design/pro-layout": "^6.5.0",
    "@umijs/preset-react": "1.x",
    "umi": "^3.3.3"
},
"devDependencies": {
    "@types/react": "^16.9.0",
    "@types/react-dom": "^16.9.0",
    "@umijs/test": "^3.3.3",
    "lint-staged": "^10.0.7",
    "prettier": "^2.2.0",
    "react": "^16.12.0",
    "react-dom": "^16.12.0",
    "typescript": "^4.1.2",
    "yorkie": "^2.0.0"
}
```

### 1. 使用 antd-pro 的布局

1. 安装@ant-design/pro-layout
2. 编辑`.umirc.ts`配置`layout:{}`

### 2. 使用@umijs/preset-react

包含布局、权限、国际化、dva、简易数据流等常用功能.

### 3. umi

### 1. lint-staged

一个 shell 脚本, 在 git-stage 的时候执行 lint.

### 2. prettier

### 3. yorkie

另一个版本的 husky
