# a标签和Link标签的区别

从最终渲染的DOM来看，这两者都是链接，都是a标签，

区别是： Link标签是react-router里实现路由跳转的链接，一般配合Route使用，react-router接下了其默认的链接跳转行为，区别于传统的页面跳转，Link标签的"跳转"行为只会触发相匹配的Route对应的页面内容更新，而不会刷新整个页面

Link标签做的三件事情：
• 1.有onclick那就执行onclick
• 2.click的时候阻止a标签默认事件
• 3.根据跳转href(即使是to)，用history(web前端路由两种方式之一，history&hash)跳转，此时只是链接变了，并没有刷新页面

而标签就是普通的超链接了，用于从当前页面跳转到href指向的里一个页面(非锚点情况)

```js
let domArr=document.getElementByTagName('a');
[...domArr].forEach(item=>{
    item.addEventListener('click',function(){
        location.href=this.href
    })
})
```