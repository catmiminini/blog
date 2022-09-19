# 跨标签页的SessoinStorage

## 一、场景
多页应用需要共享一些数据时，单个tab的数据无法与其他页面共享。

## 二、现有方案
- cookie：同一站点的多tab可以共享数据，但数据存储量小，非会话数据，页面关闭时数据仍然存在
- sessionStorage：单个tab的会话数据，多tab不共享数据，页面关闭时数据清除
- localStorage：同一站点的多个tab可以共享数据，但数据存储量小，非会话数据，页面关闭时数据仍然存在

## 三、改良方案
使用localStorage来实现跨tab数据共享，通过BroadcastChannel来获取同一站点tab的存活情况，当最后一个tab关闭时，再清空localStorage中的会话数据？
