# 各种width

- cssWidth = contentWidth
- clientWidth = contentWidth + paddingWidth (不包括滚动条，滚动条在padding外出现)
- offsetWidth = contentWidth + paddingWidth + borderWidth (包括滚动条，因为滚动条在border内部出现)
- scrollWidth = 全部内容的宽度，无法直接通过css的设置计算出来，与内容相关，相当于实际内容的宽度加上左右padding

高度同理