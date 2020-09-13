# umi

## 目录结构
1. 静态配置：Umi 在 .umirc.ts 或 config/config.ts 中配置项目和插件，支持 es6。
2. 动态配置：约定 src/app.tsx 为运行时配置, 此配置通过api设置，会在运行时覆盖（1.）的配置。
3. 路由：在（1.）的配置文件中通过 routes 进行配置，格式为路由信息的数组。
4. 约定式路由：如果没有 (3.)routes 配置，Umi 会进入约定式路由模式，然后分析 src/pages 目录拿到路由配置。
5. 触发路由：在 umi 里，页面之间跳转有两种方式：声明式和命令式。Link和historyAPI. 并触发对应的路由（3. 4.）
6. 页面模板：src/pages/document.ejs，umi 约定如果这个文件存在，会作为默认模板.
7. Mock数据：Umi 约定 /mock 文件夹下所有文件为 mock 文件。
8. 环境变量：Umi 中约定根目录下的 .env 为环境变量配置文件。