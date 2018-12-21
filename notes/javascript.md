## 跳出循环
- for循环: `break`终止循环，`continue`跳出循环，执行下次循环
- Array forEach(): 不能终止跳出循环，除非捕获错误，要想实现`forEach()`相关功能，可使用every()、some()代替
- Array every(): `return true`跳出循环，`return false`终止循环，`some()`类似

## html加载顺序
- js会阻塞后续dom和资源的加载
- css不阻塞后续dom和资源的加载，但会阻塞js的加载

## 浏览器会使用prefetch对引用的资源提前下载
1. 没有`defer`或`async`，浏览器会立即加载并执行指定的脚本
2. 有`async`，加载和渲染后续文档元素的过程将和`script.js`的加载与执行并行进行(下载异步，执行同步，加载完就执行)。
3. 有`defer`，加载后续文档元素的过程将和`script.js`的加载并行进行（异步），但是`script.js`的执行要在所有元素解析完成之后，`DOMContentLoaded`事件触发之前完成。
