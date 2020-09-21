# CSS 选择器

## 基本类别
- id选择器：`#`
- 类选择器：`.`
- 属性选择器：`[title="name"]`
- 伪类选择器：`:hover`
- 标签选择器：`h1`
- 伪元素选择器：`::before`

## 组合类别

- 通配选择符：`*`
- 后代选择符：`' '`
- 子代选择符：`>`
- 相邻兄弟选择符：`+`
- 兄弟选择符：`~`

## 优先级与权重

CSS选择器的优先级通过权重来实现，优先使用权重大的样式。

影响优先级的选择器：

- `!important`：无权重，直接覆盖最终的样式结果。多个`!important`按照次序依次覆盖。最后的`!important`会生效。
- 内联样式：权重为1000。
- id选择器：权重为100。
- 类选择器，伪类选择器，属性选择器：权重为10。
- 标签选择器，伪元素选择器：权重为1。

不影响优先级的选择器：

- 通配选择符`*`：权重0，但可与其他选择符组合，如`*[title="test"]`权重为0+10=10。
- 关系选择符(`' '`, `>`,`+`,`~`)：权重0，但使用关系选择符组合后的选择符权重不为0，为所有选择符的权重之和。

### 同权重选择器

- 选择器相同的情况下，根据选择器的声明顺序决定。先声明的选择器中的值会被后声明的选择器覆盖。如下面例子中top最终值为black。
- 元素的class属性中使用类名的顺序不会影响结果。如下面例子中div最终使用的是top的颜色。

例子：最终div的颜色都是黑色。top1会被top覆盖。第一个top会被第二个top覆盖。

```html
<html>
  <head>
  <style type="text/css">
    .top1{
      background-color: blue;
    }
    .top {
      background-color: green;
    }
    .top {
      background-color: red;
    }
  </style>
  </head>
  <body>
    <div class="top top1">this is red</div>
    <div class="top1 top">this is also red</div>
  </body>
</html>
```

### 使用关系选择符时权重的计算方式

- 属性选择器: 属性选择器的优先级往往大于类选择器。如`div[title='title']`的优先级大于`.className`，因为前者权重为11，后者权重为10。

例子：属性选择器。

```html
<html>
  <head>
    <style>
      /*属性选择器与类选择器*/
      *[title="test"]{      /* 权重10 */
        background: green;
      }
      .test{                /* 权重10 */
        background: red;
      }
      /*属性选择器与类选择器*/
      div[title="test1"]{   /* 权重11 */
        background: green;
      }
      .test1{               /* 权重10 */
        background: red;
      }
      /*属性选择器与id选择器*/
      #test2{               /* 权重100 */
        background: yellow;
      }
      div[title="test2"]{   /* 权重11 */
        background: green;
      }
    </style>
  </head>
  <body>
    <div id="test" class="test" title="test">this is red</div>
    <div id="test1" class="test1" title="test1">this is green</div>
    <div id="test2" class="test2" title="test2">this is yellow</div>
  </body>
</html>
```


- 关系选择符的权重为所有选择符的权重之和。如`.test>div>.test1`和`.test div .test1`，两者权重都为21。

例子：关系选择符
```html
<html lang="en">
  <head>
    <style>
      body .test{           /* 权重11 */
        background: green;
      }
      body > .test{         /* 权重11 */
        background: red;
      }

      body > .test1{        /* 权重11 */
        background: red;
      }
      body .test1{          /* 权重11 */
        background: green;
      }
    </style>
  </head>
  <body>
    <div class="test">this is red</div>
    <div class="test1">this is green</div>
  </body>
</html>
```
