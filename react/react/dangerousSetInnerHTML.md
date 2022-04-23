# dangerousSetInnerHtml vs innerHtml
## 问题：
Is there any "behind the scenes" difference from setting an element's innerHTML vs setting the dangerouslySetInnerHTML property on an element? Assume I'm properly sanitizing things for the sake of simplicity.

Example:
```js
var test = React.createClass({
  render: function(){
    return (
      <div contentEditable='true' dangerouslySetInnerHTML={{ __html: "Hello" }}></div>
    );
  }
});
```
vs
```js
var test = React.createClass({
  componentDidUpdate: function(prevProp, prevState){
    this.refs.test.innerHTML = "Hello";
  },
  render: function(){
    return (
      <div contentEditable='true' ref='test'></div>
    );
  }
});
```
I'm doing something a bit more complicated than the above example, but the overall idea is the same

## 引用StackOverflow的采纳回答：
Yes there is a difference!

The immediate effect of using innerHTML versus dangerouslySetInnerHTML is identical -- the DOM node will update with the injected HTML.

However, behind the scenes when you use dangerouslySetInnerHTML it lets React know that the HTML inside of that component is not something it cares about.

Because React uses a virtual DOM, when it goes to compare the diff against the actual DOM, it can straight up bypass checking the children of that node because it knows the HTML is coming from another source. So there's performance gains.

More importantly, if you simply use innerHTML, React has no way to know the DOM node has been modified. The next time the render function is called, React will overwrite the content that was manually injected with what it thinks the correct state of that DOM node should be.

Your solution to use componentDidUpdate to always ensure the content is in sync I believe would work but there might be a flash during each render.