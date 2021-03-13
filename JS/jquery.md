# jquery

jQuery 是一个高效、精简并且功能丰富的 JavaScript 工具库。它提供的 API 易于使用且兼容众多浏览器，这让诸如 HTML 文档遍历和操作、事件处理、动画和 Ajax 操作更加简单。

使用`$()`实现选择器功能.

> 嵌入式脚本的执行: 首先要在 script 中指定要加载的脚本, 然后在 window.onload 或 $(document).ready() 中执行脚本.

## core api

- $(document).ready() vs $(window).on('load', function (){}) : 前一个只关注 document 元素是否加载完成, 后一个需要整个页面加载完成, 包括 image 和 iframe

- 命名冲突: 主要是$的冲突, 可以通过别名的方式解决, 也可以通过局部变量解决. var $jq = jQuery.noConflict(), $(document).ready(function($){})

-
