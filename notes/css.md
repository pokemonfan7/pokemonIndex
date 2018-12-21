## BFC(块级格式化上下文)
就是一个相对独立的布局环境，它内部元素的布局不受外面布局的影响。它可以通过以下任何一种方式来创建： 
- `float`的值不为`none`
- `position`的值不为`static`或者`relative`
- `display`的值为`table-cell`、`table-caption`、`inline-block`、`flex`、 `inline-flex`
- `overflow`的值不为 visible
约束规则：
1. 内部的Box会在垂直方向上一个接一个的放置
2. 同一个BFC的两个相邻Box的margin会发生重叠，与方向无关。
3. BFC中子元素不会超出他的包含块，而position为absolute的元素可以超出他的包含块边界
4. BFC的区域不会与float的元素区域重叠
5. 计算BFC的高度时，浮动子元素也参与计算
6. BFC就是页面上的一个隔离的独立容器，容器里面的子元素不会影响到外面元素，反之亦然

