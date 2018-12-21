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

## 确定原型和实例的关系
- instanceof操作符测试实例和原型链中出现过的构造参数
`person1  instanceof  Person;//true`
- isPrototypeOf()方法，只要是原型链中出现的原型，都可以说是该链所派生的实例的原型
`Person.prototype.isPrototypeOf(person1);//true`
- hasOwnProperty()方法，可以检测一个属性是存在于实例中，还是原型中
`person1.hasOwnProperty(“name”);实例true，原型false`
in操作符，会在通过对象能够访问给定属性时返回true，无论存在于实例还是原型中
`'name' in person1;`
for-in循环返回所有能够通过对象访问的，可枚举的属性，包括实例和原型中的属性

## 异步执行
- microtasks: process.nextTick、 Promises、 Object.observe、 MutationObserver
- macrotasks: script(整体代码)、 setTimeout、 setInterval、 setImmediate、 I/O、 UI rendering 
