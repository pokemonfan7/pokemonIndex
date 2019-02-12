## 原型继承
```javascript
function Animal(name) {
  this.name = name;
}

Animal.prototype.setName = function(name) {
  this.name = name;
};
Animal.prototype.getName = function(name) {
  return this.name;
};

function Dog(name, breed) {
  Animal.call(this, name);
  this.breed = breed;
}

Dog.prototype = Object.create(Animal.prototype);

// 因为上面的语句将我们原来的prototype的指向修改了，所以我们要重新定义Dog的prototype属性的constructor属性
Reflect.defineProperty(Dog.prototype, "constructor", {
  value: Dog,
  enumerable: false, // 不可枚举
  writable: true
});

const animal = new Animal("potato");
console.log(animal.__proto__ === Animal.prototype); // true
console.log(animal.constructor === Animal); // true
console.log(animal.name); // potato

const dog = new Dog("potato", "labrador");
console.log(dog.name); // potato
console.log(dog.breed); // labrador
console.log(dog.__proto__ === Dog.prototype); // true
console.log(dog.constructor === Dog); // true
```

## call、apply、bind()
`apply`、`call`、`bind`三者都是用来改变函数的this对象的指向的  
`apply`、`call`、`bind`三者第一个参数都是this要指向的对象，也就是想指定的上下文  
`apply`、`call`、`bind`三者都可以利用后续参数传参  
`bind`是返回对应函数，便于稍后调用；`apply`、`call`则是立即调用

## 判断对象相等
用JSON.stringify()

## 构造函数、原型对象和实例的关系
![prototype](./assets/prototype.png "关系图")
```javascript
// 证明 p1是 Person 的实例
p1.constructor === Person // true
p1 instanceof Person // true

// 证明 Person.prototype 是 p1 的原型对象
Person.prototype === p1.__proto__ // true
Person.prototype.isPrototypeOf(p1) // true
Object.getPrototypeOf(p1) === Person.prototype // true
```

## requestAnimationFrame实现回到顶部 (from`https://cuixote.gitee.io/`)
```javascript
// 匀速返回顶部
function backToTop(interval = 500, element) {
  // 当前元素
  const ele = element || document.body || document.documentElement;
  // 获取当前时间
  const getTime = () =>
    (performance && performance.now && performance.now()) || Date.now();
  // 获取当前时间
  const startTime = getTime();
  // 获取当前页面的滚动高度
  const scrollTop = ele.scrollTop;
  // 回调函数
  const callback = function() {
    // 已经过去了多久
    const cost = getTime() - startTime;
    // 通过已经过去的时间类比已滚动的高度
    const currentScrollTop =
      (Math.max(0, interval - cost) / interval) * scrollTop;
    // 设置当前高度
    ele.scrollTop = currentScrollTop;
    // 如果没有到达顶部，下次重绘继续调用
    currentScrollTop && requestAnimationFrame(callback);
  };
  // 如果没有到达顶部，下次重绘继续调用
  scrollTop && requestAnimationFrame(callback);
}
```
问：为什么我们不直接用(scrollTop/500) * 1/60作为每次调用requestAnimationFrame移动的距离？  
答：毕竟每次调用requestAnimationFrame的时间间隔不一定等于1/60，还是计算一下距离上次调用过去了多少时间更为准确，而使用performance.now()会比Date.now()更加精确一点。  
**公告系统 => setInterval => requestAnimationFrame => 递归 => 尾递归优化 => 验证堆栈溢出**

## 双向绑定
```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>双向绑定</title>
</head>
<body>
<input id="a">
<p id="b"></p>
</body>
</html>
<script>
	var $a = document.getElementById("a");
	var $b = document.getElementById("b");
	var obj = {};

	Object.defineProperty(obj, "content", {
		get: function() {
			//console.log('get...')
		},
		set: function(val) {
			$b.textContent = val;
			//console.log('set...')
		}
	});

	$a.addEventListener("input", function() {
		obj.content = this.value;
	});

	// init
	$a.value = $b.textContent = obj.content = "123";
</script>
```

## 函数节流
```javascript
function throttle(fn, interval) {
    var _self = fn // 保存需要被延迟执行的函数引用
    var firstTime = true // 是否初次调用
    var timer // 定时器

    return function () {
        var args = arguments
        var _me = this
        if (firstTime) {      // 如果是第一次调用不需要延迟执行
            _self.call(_me, args)
        }
        if (timer) {      // 如果定时器还在，说明前一次延迟执行还没有完成
            return false
        }

        timer = setTimeout(function () {      // 延迟一段时间执行
            clearTimeout(timer) // 清除定时器 避免下一次return false
            timer = null
            _self.call(_me, args)
        }, interval || 500)
    }
}

function resizeDiv() {
    var div = document.getElementById('mydiv')
    div.style.height = div.offsetWidth + 'px'
    console.log('resize')
}

window.onresize = throttle(resizeDiv)
```

## 函数防抖
```javascript
function debounce(fn) {
    var timer
    var _self = fn
    return function () {
        clearTimeout(timer)
        var args = arguments // fn所需要的参数
        var _me = this // 当前的this
        timer = setTimeout(function () {
            _self.call(_me, args)
        }, 200)
    }
}

function resizeDiv() {
    var div = document.getElementById('mydiv')
    div.style.height = div.offsetWidth + 'px'
    console.log('resize')
}

window.onresize = debounce(resizeDiv)
```

## this指向
如果要判断一个运行中函数的 this 绑定，就需要找到这个函数的直接调用位置，找到之后就可以顺序应用下面这四条规则来判断 this 的绑定对象  
- `new`调用：绑定到新创建的对象，注意：显示return函数或对象，返回值不是新创建的对象，而是显式返回的函数或对象。
- `call`或者`apply`（或者`bind`）调用：严格模式下，绑定到指定的第一个参数。非严格模式下，null和undefined，指向全局对象（浏览器中是window），其余值指向被new Object()包装的对象。
- 对象上的函数调用：绑定到那个对象。
- 普通函数调用：在严格模式下绑定到 undefined，否则绑定到全局对象。

## target和currentTarget的区别
event.currentTarget是绑定事件的元素，而event.target是当前触发事件的元素。比如常见的事件委托中的ul和li。

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

## Object.prototype.toString.call(obj)
```javascript
Object.prototype.toString.call(123) //[object Number]
Object.prototype.toString.call('asd') //[object String]
Object.prototype.toString.call(undefined) //[object Undefined]
Object.prototype.toString.call(true) //[object Boolean]
Object.prototype.toString.call({}) //[object Object]
Object.prototype.toString.call([]) //[object Array]
Object.prototype.toString.call(function(){}) //[object Function]
```

## typeof检测基本类型
number | string | boolean | null（object） | undefined | function（function）

## 引用类型
Object、Array、Date、RegExp、Function、基本包装类型（Boolean、Number、String）、单体内置对象（Global、Math）

## 异步执行
- microtasks: process.nextTick、 Promises、 Object.observe、 MutationObserver
- macrotasks: script(整体代码)、 setTimeout、 setInterval、 setImmediate、 I/O、 UI rendering

执行顺序:  
script(主程序代码)—>process.nextTick—>Promises...——>setTimeout——>setInterval——>setImmediate——> I/O——>UI rendering


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

### client
#### clientWidth和clientHeight
clientWidth和clientHeight包括content和padding，不包括border

