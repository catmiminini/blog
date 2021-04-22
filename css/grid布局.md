# grid布局

## 基本概念

grid布局是一个二维布局.

其中包括"容器"和"项目"

容器内存在"行"和"列", 行和列交叠产生"单元格", 行和列的分割线叫做"网格线".

grid布局提供了对行列,单元格和网格线的相关属性.



## 容器属性

1. `display`: 指定容器类型, 值可以为`grid`或`inline-grid`.

2. `grid-template-rows`和`grid-template-columns`:  指定容器内行宽和列宽, 取值可以为

   1. 具体长度: `100px 100px` , 表示各占`100px`;
   2. 相对长度:`50% 50%`, 表示各占50%;
   3. 相对长度: `1fr 2fr`, 表示第一个行占1/3; 第二个行占2/3;
   4. auto: 自动填充;
   5. repeat(): `repeat(3, 33.3%)`, `repeat(auto-fill, 50%)`, `repeat(3, 100px, 200px 300px)`
   6. Maxmin(): `maxmin(100px, 1fr)`;

   定义行和列时, 也可以给网格线命名: `[c1] 100px [c2] 100px [c3]`,  得到3条网格线 c1,c2,c3;

3. `grid-row-gap` `grid-column-gap` `grid-gap`: 指定行和列间的空隙大小.

   ```css
   {
     grid-row-gap: 10px;
     grid-column-gap: 10px;
     grid-gap: 10px;
   }
   ```

4. grid-template-areas: 对行列生成的单元格划分区域.

   ```css
   {
     display: grid;
     grid-template-rows: 100px 100px 100px;
     grid-template-columns: 100px 100px 100px;
     grid-template-areas: 	'a a b'
       										'a a c'
       										'd e f';
   }
   ```

   上面相同的字母表示同一个区域, 会进行合并单元格操作.

5. Grid-auto-flow: 指定项目的排列顺序, 默认情况下是从左到右, 先行后列.

   ```css
   {
     grid-auto-flow: row;
     grid-auto-flow: column;
     grid-auto-flow: row dense;
     grid-auto-flow: column dense;
   }
   ```

6. `justify-items` `align-items` `place-items` : 指定单元格内项目的摆放位置

   ```css
   {
     justify-items: start | end | center | stretch;
     align-items: start | end | center | stretch;
   }
   ```

   

7. `justify-content` `align-content` `place-content`: 指定整个内容区域的摆放位置

   ```css
   .container {
     justify-content: start | end | center | stretch | space-around | space-between | space-evenly;
     align-content: start | end | center | stretch | space-around | space-between | space-evenly;  
   }
   ```

8. `grid-auto-columns` 属性，`grid-auto-rows` 属性: 指定未定义行列, 自动生成时的宽度和高度



## 项目属性

1. `grid-column-start` `grid-column-end` `grid-column-start` `grid-column-end`:  指定项目单元格边框对应的网格线.

   ```css
   /* 表示从第1条网格线到第3条网格线 */
   .item-1 {
     grid-column-start: 1;
     grid-column-end: 3;
   }
   /* 指定网格线名称 */
   .item-1 {
     grid-column-start: header-start;
     grid-column-end: header-end;
   }
   /* 指定跨度 */
   .item-1 {
     grid-column-start: span 2;
   }
   ```

   > 可能出现项目重叠, 当项目重叠时, 使用`z-index`属性指定项目的重叠顺序.

2. `grid-column` `grid-row`: `grid-column-start` `grid-column-end`的简写.

   ```css
   .item-1 {
     grid-column: 1 / 3;
   }
   ```

3. `grid-area`: 指定项目渲染区域;  也可以作为`grid-column-start` `grid-column-end` `grid-column-start` `grid-column-end`的简写.

   ```css
   .item-1 {
     grid-area: e;
   }
   .item-1 {
     /*   grid-area: <row-start> / <column-start> / <row-end> / <column-end> */
     grid-area: 1 / 1 / 3 / 3;
   }
   ```

4. `justify-self` `align-self` `place-self`: 

   `justify-self`属性设置单元格内容的水平位置（左中右），跟`justify-items`属性的用法完全一致，但只作用于单个项目。

## 使用

1. 使用grid布局

   ```css
   .grid {
     display: grid;
   }
   ```

2. 

3. 