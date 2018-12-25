## 跳出循环
- for循环: `break`终止循环，`continue`跳出循环，执行下次循环
- Array forEach(): 不能终止跳出循环，除非捕获错误，要想实现`forEach()`相关功能，可使用every()、some()代替
- Array every(): `return true`跳出循环，`return false`终止循环，`some()`类似

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

## offset、scroll、client
### offset
#### offsetLeft和offsetTop
offsetLeft和offsetTop用来获得对象的位置，到距离自身最近的（带有定位的）父元素的距离，若没有则以body为准
##### offsetLeft和style.left的区别
1. style.left只能获取行内样式，offsetLeft可以获取行内样式和内嵌样式
2. style.left可读可写，offsetLeft是只读属性
3. style.left是字符串并且带单位px，offsetLeft是数值，
4. 如果没有加定位，style.left获取的数值可能是无效的
5. 最大区别在于style.left以margin左上角为基准，offsetLeft以border左上角为基准
#### offsetWidth和offsetHeight
offsetWidth和offsetHeight包括content、padding、border
##### offsetHeight和style.height的区别
1. style.height只能获取行内样式，offsetHeight可以获取行内样式和内嵌样式
2. style.height是字符串并且带单位px，offsetHeight是数值
3. style.height可读可写，offsetHeight是只读属性

### scroll
#### scrollLeft和scrollTop
scrollLeft和scrollTop显示内容区到整个内容区的距离
#### scrollHeight和scrollWidth
scrollHeight和scrollWidth指的是实际内容的高度、宽度，包括content和padding，不包括border

### clientWidth和clientHeight
clientWidth和clientHeight包括content和padding，不包括border

