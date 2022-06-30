# css中百分数的含义

- 字体尺寸font-zise的百分数根据继承自父元素的字号计算
- 宽度width的百分数根据父元素的content的宽度计算
- 高度height的百分数根据父元素的content的高度计算
- padding: 横向内边距和纵向内边距都根据父元素的content的宽度计算
- margin: 横向外边距和纵向外边距都根据父元素的content的宽度计算
- 定位的偏移属性top/bottom的百分数根据父元素的content的高度计算
- 定位的偏移属性right/left的百分数根据父元素的content的宽度计算
- translate(x, y)的百分数, x根据元素自身的width计算, y根据元素自身的height计算



## 应用

### 1. 不定尺寸元素垂直水平居中

利用定位将元素的参照点根据父元素的宽高移动至父元素中心, 再通过translate()方法将元素中心反向移动到父元素的中心, 以实现垂直水平居中.

```
.parent{
	position: relative;
}
.child{
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
}
```

