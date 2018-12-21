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

## position
- static: 默认值，忽略 top, bottom, left, right 或者 z-index 声明
- absolute: 会使inline元素变成block元素

## transform
- 设置原点: transform-origin：left top
- 景深: perspective：500px 定义在父级元素
- 效果: transform-style：flat | preserve-3d

## outline
轮廓是绘制于元素周围的一条线，位于边框边缘的外围，可起到突出元素的作用。
轮廓线不会占据空间，也不一定是矩形。

## resize
属性规定是否可由用户调整元素的尺寸。
如果希望此属性生效，需要设置元素的 overflow 属性，值可以是 auto、hidden 或 scroll。
- none 用户无法调整元素的尺寸
- both 用户可调整元素的高度和宽度
- horizontal 用户可调整元素的宽度
- vertical 用户可调整元素的高度

## background-size
- x y 百分比的值  如果x给了值，y轴默认auto
- contain缩放图片，使其恰好适合背景区；保持宽高比。
- cover  拉大图片，使其完全填满背景区；保持宽高比。
- auto  默认 跟没写一样
缩写 size 要写在 background-position 之后 加 /

## background-attachment
属性控制滚动元素内的背景图片是否随元素滚动而移动。（默认为scroll，固定背景为fixed），可加入background的简写

## background-clip & background-origin
对于这两个新属性，其对应的keyword是相同的：border-box, padding-box, content-box。
它们的最根本的区别就是：background-clip 是对背景图片的裁剪，background-origin是对背景图片设置起始点。
- 对于background-clip, 其关键字是指将背景图片以border的尺寸、以padding的尺寸，以content的尺寸进行切割，其得到的结果是不完整的背景，也就是其中的一部分(原理与截图差不多)。而且有一点要注意，background-clip的切割是对这个容器背景的切割(包括图片与背景颜色)。
- 对于background-origin，其关键字是指将背景图片放置到border范围内，padding范围内、content范围内，其得到的结果是完整的背景(原理与图片的缩放相似)。与background-clip不同的是，它只是单纯设置背景图片的边界，并不会对背景颜色造成影响。

## flex弹性布局
display：flex弹性布局
- flex：1均分宽度
- flex-grow扩展比率
剩余空间是正值的时，伸缩项目相对于伸缩容器里其他伸缩项目能分配到空间比例,若没写该属性，则为0,0代表不参与扩展
- flex-shrink缩小比例
此时剩余空间是不足时都将等比例缩小,0 表示不参加收缩比例,若没写该属性，则为1
- flex-basis
在分配空间之前，也已经分得到空间
缩写    flex: none 或者 [ <'flex-grow'> <'flex-shrink'>? || <'flex-basis'> ]（||后面的属性可不写）
- flex-direction
排列方式，决定主轴位置（水平方向）：
   - row | row-reverse | column | column-reverse
   - 从左起 | 水平从右起 | 垂直从上起 | 垂直从下起
- flex-wrap
   - nowrap | wrap | wrap-reverse
   - 单行 | 换行(宽度不够自动换行) | 换行并反转
- justify-content（水平对齐方式）
   - flex-start | flex-end | center | space-between | space-around;
   - 左对齐 | 右对齐 | 居中对齐 | 两端对齐(之间的间隔相等) | 每个项目两侧的间隔相等
- align-items（垂直对齐方式）
   - flex-start | flex-end | center | baseline | stretch
   - 起点对齐 | 终点对齐 | 中点对齐 | 基线对齐 | 默认值(未设置高度或设为auto，将占满整个容器的高度)
- align-content （多行对齐方式）
需要多行才行
多根轴线的对齐方式
   - flex-start | flex-end | center | space-between | space-around | stretch
   - 左对齐 | 右对齐 | 居中对齐 | 两端对齐(之间的间隔相等) | 每个项目两侧的间隔相等 | 轴线占满整个交叉轴
- align-self
允许单个项目有与其他项目不一样的对齐方式
   - auto | flex-start | flex-end | center | baseline | stretch
该属性可能取6个值，除了auto，其他都与align-items属性完全一致。
可覆盖align-items属性
默认值auto，表示继承父级元素的align-items，如果没有父级，则则等同于stretch
当这两个属性遇到了flex-direction: column / column-reverse  整个顺序就都变了。


