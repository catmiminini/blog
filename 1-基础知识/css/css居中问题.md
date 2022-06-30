# css居中问题

## 1.居中实现原理

1. 利用css原生的居中机制
2. 将子元素的中轴线与父元素的中轴线重合

## 2.利用css原生的居中机制

### 文本的对齐机制

- text-align: center;   在父元素设置, 对行内元素的子元素生效, 使其水平居中
- vertical-align: middle; 在父元素设置, 对行内元素的子元素生效, 使其垂直居中

### flex布局

```
div {
	display: flex;
	justify-content: center;
	align-items: center;
}
```

### grid布局

```
div {
	display: grid;
    grid-template-rows: 1fr;
    grid-template-columns: 1fr;
    justify-items: center;
    align-items: center;
}
```

## 3.将子元素的中轴线与父元素的中轴线重合

- 水平居中时将水平中轴线重合
- 垂直居中时将垂直中轴线重合

### 利用[margin: 0 auto]水平居中定宽元素

- margin-left和margin-right设为auto可以自动分摊剩余宽度, 但是子元素的宽度不能是auto, 必须是固定值.

```
.parent{            
	width: 600px;
	height: 600px;
}
.child{
	width: 200px;
	height: 200px;

	margin: 0 auto;
}
```

### 利用[flex+margin: auto]水平垂直居中不定尺寸元素

- 在flex布局中, 子元素的margin的四个属性设为auto也可以生效, 且子元素的尺寸可以设为auto.

```
.parent{            
	width: 600px;
	height: 600px;
}
.child{
	width: 200px;
	height: 200px;

	margin: 0 auto;
}
```

### 利用[absolute定位+transform]垂直水平居中不定尺寸元素

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

其余的垂直水平居中定宽/定高元素都是通过计算margin具体值, 使其对应的中轴线对齐, 具体实现略. 开发中推荐使用上述方法.
