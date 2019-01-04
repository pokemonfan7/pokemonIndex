## promise
### Promise捕获错误与 try catch 等同
```javascript
var p1 = new Promise(function(resolve, reject) {
    throw Error('sync error')
})
    .then(res => {
        console.log(res)
    })
    .catch(err => {
        console.log(err)
    })
//
var p1 = new Promise(function(resolve, reject) {
    setTimeout(() => {
        throw Error('async error')   
    })
})
    .then(res => {
        console.log(res)
    })
    .catch(err => {
        console.log(err)
    })
//
var p1 = new Promise(function(resolve, reject) {
    resolve()
})
    .then(res => {
        throw Error('sync error') 
    })
```

正确答案是：
1. Error被catch到，最后console.log输出
2. 错误无法被catch，控制台报错
3. promise没有catch，错误被捕获后又被抛出，控制台报错

这里考查的主要是Promise的错误捕获，其实仔细想想js中能用的错误捕获也只能是try catch了，而try catch只能捕获同步错误，并且在没有传入错误监听的时候会将捕获到的错误抛出。

### Promise 拥有状态变化
```javascript
var p1 = new Promise(function(resolve, reject) {
    resolve(1)
    throw Error('sync error')
})
    .then(res => {
        console.log(res)
    })
    .catch(err => {
        console.log(err)
    })
//
var p1 = new Promise(function(resolve, reject) {
    reject(2)
    resolve(1)
})
    .then(res => {
        console.log(res)
    })
    .catch(err => {
        console.log(err)
    })
//
var p1 = new Promise(function(resolve, reject) {
    resolve(1)
})
    .then(res => {
        throw Error('sync error')
        console.log(res)
    })
    .catch(err => {
        console.log(err)
    })
```

正确答案是：
1. 输出 1
2. 输出 2
3. console.log输出错误

Promise是一个有状态的容器，当状态被凝固了，后面的resolve或reject就不会被触发。简单的说就是同一个Promise只能触发一个状态监听（onFulfilled或onRejected）。

### Promise 方法中的回调是异步的
```javascript
var p1 = new Promise(function(resolve, reject) {
    resolve()
    setTimeout(() => {
        console.log(1)
    })
    console.log(2)
})
    .then(res => {
        console.log(3)
    })
console.log(4)
```

正确答案是：
web依次输出：2 4 3 1

### Promise 会存储返回值
```javascript
var p1 = new Promise(function(resolve, reject) {
    reject(1)
})
    .catch(err => {
        console.log(err)
        return 2
    })

setTimeout(() => {
    p1
        .then(res => console.log(res))
}, 1000)
```

正确答案是：
先输出 1
1秒后输出 2

Promise会将最后的值存储起来，如果在下次使用promise方法的时候回直接返回该值的promise。

### Promise 方法每次都返回一个新的Promise
```javascript
var p1 = new Promise(function(resolve, reject) {
    reject(1)
})
    .then(
        res => {
            console.log(res)
            return 2
        },
        err => {
            console.log(err)
            return 3
        }
    )
    .catch(err => {
        console.log(err)
        return 4
    })
    .finally(res => {
        console.log(res)
        return 5
    })
    .then(
        res => console.log(res),
        err => console.log(err)
    )
```

正确答案是：
依次输出：1 undefined 3

Promise能够链式调用的原因是它的每一个方法都返回新的promise，哪怕是finally方法，特殊的是fanilly会返回上一个promise的值包装成的新promise，并且finally也不接收参数，因为无论Promise是reject还是fulfill它都会被调用。

## Object.seal()、Object.freeze()
- `Object.seal()`密封的对象可以改变它们现有的属性。
- `Object.freeze()`冻结的对象中现有属性是不可变的。

## 声明变量
- ES5:`var` `function`
- ES6:`let` `const` `import` `class`

## String(字符串)
- includes(): 返回布尔值，表示是否找到了参数字符串。支持第二个参数，表示开始搜索的位置。针对从第n个位置直到字符串结束。
- startsWith(): 返回布尔值，表示参数字符串是否在原字符串的头部。支持第二个参数，表示开始搜索的位置。针对从第n个位置直到字符串结束。
- endsWith(): 返回布尔值，表示参数字符串是否在原字符串的尾部。支持第二个参数，表示开始搜索的位置。针对前n个字符。
- repeat():
   - 'na'.repeat(2.4) //'nana'
   1. 参数先进行向下取整运算Math.floor()
   2. 参数是负数或者Infinity，会报错。
   3. 参数是NaN相当于0
- padStart():
   - `'x'.padStart(5, 'ab') // 'ababx'`
   - `'x'.padStart(4, 'ab') // 'abax'`
      1. `padStart()`的常见用途是为数值补全指定位数。下面代码生成 10 位的数值字符串。
         - `'1'.padStart(10, '0') // "0000000001"`
         - `'12'.padStart(10, '0') // "0000000012"`
         - `'123456'.padStart(10, '0') // "0000123456"`
      2. 另一个用途是提示字符串格式。
         - `'12'.padStart(10, 'YYYY-MM-DD') // "YYYY-MM-12"`
         - `'09-12'.padStart(10, 'YYYY-MM-DD') // "YYYY-09-12"`
- padEnd():
   - `'x'.padEnd(5, 'ab') // 'xabab'`
   - `'x'.padEnd(4, 'ab') // 'xaba'`

## number(数字)
- Number.isFinite(): 用来检查一个数值是否为有限的（finite），即不是Infinity。如果参数类型不是数值，一律返回false。
- Number.isNaN(): 用来检查一个值是否为NaN。如果参数类型不是NaN，Number.isNaN一律返回false。

### 指数运算符(**)
- 2 ** 2 // 4
- 2 ** 3 // 8

### Math对象拓展
- Math.trunc(): 用于去除一个数的小数部分，返回整数部分。
- Math.cbrt(): 用于计算一个数的立方根。
- Math.hypot(): 返回所有参数的平方和的平方根。
   - Math.hypot(3, 4)  // 5

## function(函数)
### 函数参数的默认值
一旦设置了参数的默认值，函数进行声明初始化时，参数会形成一个单独的作用域（context）。
等到初始化结束，这个作用域就会消失。这种语法行为，在不设置参数默认值时，是不会出现的。
```javascript
let x = 1;

function f(y = x) {
  let x = 2;
  console.log(y);
}

f() // 1
```
上面代码中，函数f调用时，参数y = x形成一个单独的作用域。这个作用域里面，变量x本身没有定义，所以指向外层的全局变量x。
函数调用时，函数体内部的局部变量x影响不到默认值变量x。

利用参数默认值，可以指定某一个参数不得省略，如果省略就抛出一个错误。
```javascript
function throwIfMissing() {
  throw new Error('Missing parameter');
}

function foo(mustBeProvided = throwIfMissing()) {
  return mustBeProvided;
}

foo()
// Error: Missing parameter
```

### rest参数
ES6 引入 rest 参数（形式为...变量名），用于获取函数的多余参数，这样就不需要使用arguments对象了。
rest 参数搭配的变量是一个数组，该变量将多余的参数放入数组中。
```javascript
function push(array, ...items) {
  items.forEach(function(item) {
    array.push(item);
    console.log(item);
  });
}

var a = [];
push(a, 1, 2, 3)
```
注意，rest 参数之后不能再有其他参数（即只能是最后一个参数），否则会报错。

### 函数name属性
函数的name属性，返回该函数的函数名。
```javascript
var f = function () {};

// ES5
f.name // ""

// ES6
f.name // "f"
```

## Array(数组)
### 扩展运算符(...)
- 扩展运算符的应用
   1. 复制数组
   2. 合并数组(不过，...和concat都是浅拷贝，使用的时候需要注意。数组中有对象时，是对象的引用)
   3. 与解构赋值结合（如果将扩展运算符用于数组赋值，只能放在参数的最后一位，否则会报错。）
   4. 字符串
      扩展运算符还可以将字符串转为真正的数组。
      [...'hello']   // [ "h", "e", "l", "l", "o" ]
      上面的写法，有一个重要的好处，那就是能够正确识别四个字节的 Unicode 字符。
   5. 实现了 Iterator 接口的对象
      任何 Iterator 接口的对象，都可以用扩展运算符转为真正的数组。
   6. Map 和 Set 结构，Generator 函数
      扩展运算符内部调用的是数据结构的 Iterator 接口，因此只要具有 Iterator 接口的对象，都可以使用扩展运算符，比如 Map 结构。
      ```javascript
      let map = new Map([
        [1, 'one'],
        [2, 'two'],
        [3, 'three'],
      ]);

      let arr = [...map.keys()]; // [1, 2, 3]
      ```
      Generator 函数运行后，返回一个遍历器对象，因此也可以使用扩展运算符。
      ```javascript
      const go = function*(){
        yield 1;
        yield 2;
        yield 3;
      };

      [...go()] // [1, 2, 3]
      ```

### Array.from
Array.from方法用于将两类对象转为真正的数组：
类似数组的对象（array-like object）和可遍历（iterable）的对象（包括 ES6 新增的数据结构 Set 和 Map）。

Array.from方法还支持类似数组的对象。所谓类似数组的对象，本质特征只有一点，即必须有length属性。因此，任何有length属性的对象，
都可以通过Array.from方法转为数组，而此时扩展运算符就无法转换。
```javascript
Array.from({ length: 3 });
// [ undefined, undefined, undefined ]
```

Array.from还可以接受第二个参数，作用类似于数组的map方法，用来对每个元素进行处理，将处理后的值放入返回的数组。
```javascript
Array.from(arrayLike, x => x * x);
// 等同于
Array.from(arrayLike).map(x => x * x);
Array.from([1, 2, 3], (x) => x * x)
// [1, 4, 9]
```

### Array.of
Array.of方法用于将一组值，转换为数组。
```javascript
Array.of(3, 11, 8) // [3,11,8]
Array.of(3) // [3]
Array.of(3).length // 1
这个方法的主要目的，是弥补数组构造函数Array()的不足。因为参数个数的不同，会导致Array()的行为有差异。
Array() // []
Array(3) // [, , ,]
Array(3, 11, 8) // [3, 11, 8]
```

### find()、findIndex()
这两个方法都可以接受第二个参数，用来绑定回调函数的this对象。
```javascript
function f(v){
  return v > this.age;
}
let person = {name: 'John', age: 20};
[10, 12, 26, 15].find(f, person);
```
另外，这两个方法都可以发现NaN，弥补了数组的indexOf方法的不足。

### fill()
fill方法还可以接受第二个和第三个参数，用于指定填充的起始位置和结束位置。
```javascript
['a', 'b', 'c'].fill(7, 1, 2)
// ['a', 7, 'c']
```
注意，如果填充的类型为对象，那么被赋值的是同一个内存地址的对象，而不是深拷贝对象。

### keys()、values()、entries()
keys()是对键名的遍历
values()是对键值的遍历
entries()是对键值对的遍历
```javascript
for (let index of ['a', 'b'].keys()) {
  console.log(index);
}
// 0
// 1

for (let elem of ['a', 'b'].values()) {
  console.log(elem);
}
// 'a'
// 'b'

for (let [index, elem] of ['a', 'b'].entries()) {
  console.log(index, elem);
}
// 0 "a"
// 1 "b"
```

### includes()
Array.prototype.includes方法返回一个布尔值，表示某个数组是否包含给定的值，与字符串的includes方法类似。
indexOf方法有两个缺点:
1. 不够语义化，它的含义是找到参数值的第一个出现位置，所以要去比较是否不等于-1，表达起来不够直观。
2. 内部使用严格相等运算符（===）进行判断，这会导致对NaN的误判。

另外，Map 和 Set 数据结构有一个has方法，需要注意与includes区分。

Map 结构的has方法，是用来查找键名的，比如Map.prototype.has(key)、WeakMap.prototype.has(key)、Reflect.has(target, propertyKey)。
Set 结构的has方法，是用来查找值的，比如Set.prototype.has(value)、WeakSet.prototype.has(value)。

### flat()、flatMap()
数组的成员有时还是数组，Array.prototype.flat()用于将嵌套的数组“拉平”，变成一维的数组。
该方法返回一个新数组，对原数据没有影响。
```javascript
[1, 2, [3, 4]].flat()
// [1, 2, 3, 4]

[1, 2, [3, [4, 5]]].flat(2)
// [1, 2, 3, 4, 5]
```
上面代码中，flat()的参数为2，表示要“拉平”两层的嵌套数组。

flatMap()方法对原数组的每个成员执行一个函数（相当于执行Array.prototype.map()），
然后对返回值组成的数组执行flat()方法。该方法返回一个新数组，不改变原数组。
```javascript
// 相当于 [[2, 4], [3, 6], [4, 8]].flat()
[2, 3, 4].flatMap((x) => [x, x * 2])
// [2, 4, 3, 6, 4, 8]
```
flatMap()只能展开一层数组。

### 数组空位
由于空位的处理规则非常不统一，所以建议避免出现空位。

### reduce替代filter+map
```javascript
const characters = [
  { name: 'ironman', env: 'marvel' },
  { name: 'black_widow', env: 'marvel' },
  { name: 'wonder_woman', env: 'dc_comics' },
];

console.log(
characters.reduce((acc, character) => {
return character.env === 'marvel'?
acc.concat(Object.assign({}, character, { alsoSeenIn: ['Avengers'] })):
acc;
}, [])
)
```

## Object(对象)
### 可枚举性
对象的每个属性都有一个描述对象（Descriptor），用来控制该属性的行为。
Object.getOwnPropertyDescriptor方法可以获取该属性的描述对象。
```javascript
let obj = { foo: 123 };
Object.getOwnPropertyDescriptor(obj, 'foo')
//  {
//    value: 123,
//    writable: true,
//    enumerable: true,
//    configurable: true
//  }
```

for...in会返回继承的属性
总的来说，操作中引入继承的属性会让问题复杂化，大多数时候，我们只关心对象自身的属性。
所以，尽量不要用for...in循环，而用Object.keys()代替。

### Object.is()
Object.is用来比较两个值是否严格相等，与严格比较运算符（===）的行为基本一致。
不同之处只有两个：一是+0不等于-0，二是NaN等于自身。
```javascript
+0 === -0 //true
NaN === NaN // false

Object.is(+0, -0) // false
Object.is(NaN, NaN) // true
```

### Object.assign()
Object.assign方法的第一个参数是目标对象，后面的参数都是源对象。

其他类型的值（数值、字符串、布尔值、null、undefined）不在首参数，不会报错。
但是，除了字符串会以数组形式，拷贝入目标对象，其他值都不会产生效果。这是因为只有字符串的包装对象，会产生可枚举属性。
```javascript
const v1 = 'abc';
const v2 = true;
const v3 = 10;

const obj = Object.assign({}, v1, v2, v3);
console.log(obj); // { "0": "a", "1": "b", "2": "c" }
```
Object.assign拷贝的属性是有限制的，只拷贝源对象的自身属性（不拷贝继承属性），也不拷贝不可枚举的属性（enumerable: false）。

### Object.setPrototypeOf()、Object.getPrototypeOf()
Object.setPrototypeOf()方法的作用与__proto__相同，用来设置一个对象的prototype对象，返回参数对象本身。它是 ES6 正式推荐的设置原型对象的方法。

Object.getPrototypeOf()方法与Object.setPrototypeOf方法配套，用于读取一个对象的原型对象。

### Object.fromEntries() !目前仅火狐支持
Object.fromEntries()方法是Object.entries()的逆操作，用于将一个键值对数组转为对象。
```javascript
Object.fromEntries([
  ['foo', 'bar'],
  ['baz', 42]
])
// { foo: "bar", baz: 42 }
```
该方法的主要目的，是将键值对的数据结构还原为对象，因此特别适合将 Map 结构转为对象。

该方法的一个用处是配合URLSearchParams对象，将查询字符串转为对象。
```javascript
Object.fromEntries(new URLSearchParams('foo=bar&baz=qux'))
// { foo: "bar", baz: "qux" }
```

### super
我们知道，this关键字总是指向函数所在的当前对象，ES6 又新增了另一个类似的关键字super，指向当前对象的原型对象。
注意，super关键字表示原型对象时，只能用在对象的方法之中，用在其他地方都会报错。

### 遍历对象
1. for...in  循环遍历对象自身的和继承的可枚举属性（不含 Symbol 属性）。
2. Object.keys(obj)  返回一个数组，包括对象自身的（不含继承的）所有可枚举属性（不含 Symbol 属性）的键名。
3. Object.getOwnPropertyNames(obj)  返回一个数组，包含对象自身的所有属性（不含 Symbol 属性，但是包括不可枚举属性）的键名。
4. Object.getOwnPropertySymbols(obj)  返回一个数组，包含对象自身的所有 Symbol 属性的键名。
5. Reflect.ownKeys(obj)  返回一个数组，包含对象自身的所有键名，不管键名是 Symbol 或字符串，也不管是否可枚举。

以上的 5 种方法遍历对象的键名，都遵守同样的属性遍历的次序规则。

首先遍历所有数值键，按照数值升序排列。
其次遍历所有字符串键，按照加入时间升序排列。
最后遍历所有 Symbol 键，按照加入时间升序排列。

## Set
ES6 提供了新的数据结构 Set。它类似于数组，但是成员的值都是唯一的，没有重复的值。

Set 本身是一个构造函数，用来生成 Set 数据结构。

const s = new Set();

Set 内部判断两个值是否不同，使用的算法叫做“Same-value-zero equality”，它类似于精确相等运算符（===），
主要的区别是NaN等于自身，而精确相等运算符认为NaN不等于自身。
在Set中，两个对象总是不相等的。

Array.from方法可以将 Set 结构转为数组。
```javascript
const items = new Set([1, 2, 3, 4, 5]);
const array = Array.from(items);
```

### Set的实例属性和方法
Set 结构的实例有以下属性:
1. Set.prototype.constructor：构造函数，默认就是Set函数。
2. Set.prototype.size：返回Set实例的成员总数。

Set 实例的方法分为两大类：操作方法（用于操作数据）和遍历方法（用于遍历成员）。
四个操作方法:
1. add(value)：添加某个值，返回 Set 结构本身。
2. delete(value)：删除某个值，返回一个布尔值，表示删除是否成功。
3. has(value)：返回一个布尔值，表示该值是否为Set的成员。
4. clear()：清除所有成员，没有返回值。
```javascript
s.add(1).add(2).add(2);
// 注意2被加入了两次
s.size // 2
s.has(1) // true
s.has(2) // true
s.has(3) // false
s.delete(2);
s.has(2) // false
```
四个遍历方法:
1. keys()：返回键名的遍历器
2. values()：返回键值的遍历器
3. entries()：返回键值对的遍历器
4. forEach()：使用回调函数遍历每个成员

需要特别指出的是，Set的遍历顺序就是插入顺序。这个特性有时非常有用，比如使用 Set 保存一个回调函数列表，调用时就能保证按照添加顺序调用。
由于 Set 结构没有键名，只有键值（或者说键名和键值是同一个值），所以keys方法和values方法的行为完全一致。

数组的map和filter方法也可以间接用于 Set 了。
```javascript
let set = new Set([1, 2, 3]);
set = new Set([...set].map(x => x * 2));
// 返回Set结构：{2, 4, 6}

let set = new Set([1, 2, 3, 4, 5]);
set = new Set([...set].filter(x => (x % 2) == 0));
// 返回Set结构：{2, 4}
```

因此使用 Set 可以很容易地实现并集（Union）、交集（Intersect）和差集（Difference）。
```javascript
let a = new Set([1, 2, 3]);
let b = new Set([4, 3, 2]);

// 并集
let union = new Set([...a, ...b]);
// Set {1, 2, 3, 4}

// 交集
let intersect = new Set([...a].filter(x => b.has(x)));
// set {2, 3}

// 差集
let difference = new Set([...a].filter(x => !b.has(x)));
// Set {1}
```

## Map
### Map的实例属性和方法
Map 结构的实例有以下属性:
1. size 属性：size属性返回 Map 结构的成员总数。

五个操作方法:
1. set(key, value)
set方法设置键名key对应的键值为value，然后返回整个 Map 结构。如果key已经有值，则键值会被更新，否则就新生成该键。
```javascript
const m = new Map();

m.set('edition', 6)        // 键是字符串
m.set(262, 'standard')     // 键是数值
m.set(undefined, 'nah')    // 键是 undefined
```
set方法返回的是当前的Map对象，因此可以采用链式写法。
```javascript
let map = new Map()
  .set(1, 'a')
  .set(2, 'b')
  .set(3, 'c');
```
2. get(key)
get方法读取key对应的键值，如果找不到key，返回undefined。
3. has(key)
has方法返回一个布尔值，表示某个键是否在当前 Map 对象之中。
4. delete(key)
delete方法删除某个键，返回true。如果删除失败，返回false。
5. clear()
clear方法清除所有成员，没有返回值。

遍历方法:
Map 结构原生提供三个遍历器生成函数和一个遍历方法:
1. keys()：返回键名的遍历器。
2. values()：返回键值的遍历器。
3. entries()：返回所有成员的遍历器。
4. forEach()：遍历 Map 的所有成员。

需要特别注意的是，Map 的遍历顺序就是插入顺序。
```javascript
const map = new Map([
  ['F', 'no'],
  ['T',  'yes'],
]);

for (let key of map.keys()) {
  console.log(key);
}
// "F"
// "T"

for (let value of map.values()) {
  console.log(value);
}
// "no"
// "yes"

for (let item of map.entries()) {
  console.log(item[0], item[1]);
}
// "F" "no"
// "T" "yes"

// 或者
for (let [key, value] of map.entries()) {
  console.log(key, value);
}
// "F" "no"
// "T" "yes"

// 等同于使用map.entries()
for (let [key, value] of map) {
  console.log(key, value);
}
// "F" "no"
// "T" "yes"
```

Map 结构转为数组结构，比较快速的方法是使用扩展运算符（...）。
```javascript
const map = new Map([
  [1, 'one'],
  [2, 'two'],
  [3, 'three'],
]);

[...map.keys()]
// [1, 2, 3]

[...map.values()]
// ['one', 'two', 'three']

[...map.entries()]
// [[1,'one'], [2, 'two'], [3, 'three']]

[...map]
// [[1,'one'], [2, 'two'], [3, 'three']]
```

结合数组的map方法、filter方法，可以实现 Map 的遍历和过滤（Map 本身没有map和filter方法）。
```javascript
const map0 = new Map()
  .set(1, 'a')
  .set(2, 'b')
  .set(3, 'c');

const map1 = new Map(
  [...map0].filter(([k, v]) => k < 3)
);
// 产生 Map 结构 {1 => 'a', 2 => 'b'}

const map2 = new Map(
  [...map0].map(([k, v]) => [k * 2, '_' + v])
    );
// 产生 Map 结构 {2 => '_a', 4 => '_b', 6 => '_c'}
```

## 与其他数据结构的互相转换
1. Map转为数组
Map 转为数组最方便的方法，就是使用扩展运算符（...）。
```javascript
const myMap = new Map()
  .set(true, 7)
  .set({foo: 3}, ['abc']);
[...myMap]
// [ [ true, 7 ], [ { foo: 3 }, [ 'abc' ] ] ]
```
2. 数组转为Map
将数组传入 Map 构造函数，就可以转为 Map。
```javascript
new Map([
  [true, 7],
  [{foo: 3}, ['abc']]
])
// Map {
//   true => 7,
//   Object {foo: 3} => ['abc']
// }
```
3. Map 转为对象
如果所有 Map 的键都是字符串，它可以无损地转为对象。
```javascript
function strMapToObj(strMap) {
  let obj = Object.create(null);
  for (let [k,v] of strMap) {
    obj[k] = v;
  }
  return obj;
}

const myMap = new Map()
  .set('yes', true)
  .set('no', false);
strMapToObj(myMap)
// { yes: true, no: false }
```
如果有非字符串的键名，那么这个键名会被转成字符串，再作为对象的键名。
4. 对象转为 Map
```javascript
function objToStrMap(obj) {
  let strMap = new Map();
  for (let k of Object.keys(obj)) {
    strMap.set(k, obj[k]);
  }
  return strMap;
}

objToStrMap({yes: true, no: false})
// Map {"yes" => true, "no" => false}
```
5. Map 转为 JSON
Map 转为 JSON 要区分两种情况。一种情况是，Map 的键名都是字符串，这时可以选择转为对象 JSON。
```javascript
function strMapToJson(strMap) {
  return JSON.stringify(strMapToObj(strMap));
}

let myMap = new Map().set('yes', true).set('no', false);
strMapToJson(myMap)
// '{"yes":true,"no":false}'
```
另一种情况是，Map 的键名有非字符串，这时可以选择转为数组 JSON。
```javascript
function mapToArrayJson(map) {
  return JSON.stringify([...map]);
}

let myMap = new Map().set(true, 7).set({foo: 3}, ['abc']);
mapToArrayJson(myMap)
// '[[true,7],[{"foo":3},["abc"]]]'
```
6. JSON 转为 Map
JSON 转为 Map，正常情况下，所有键名都是字符串。
```javascript
function jsonToStrMap(jsonStr) {
  return objToStrMap(JSON.parse(jsonStr));
}

jsonToStrMap('{"yes": true, "no": false}')
// Map {'yes' => true, 'no' => false}
```
但是，有一种特殊情况，整个 JSON 就是一个数组，且每个数组成员本身，又是一个有两个成员的数组。
这时，它可以一一对应地转为 Map。这往往是 Map 转为数组 JSON 的逆操作。
```javascript
function jsonToMap(jsonStr) {
  return new Map(JSON.parse(jsonStr));
}

jsonToMap('[[true,7],[{"foo":3},["abc"]]]')
// Map {true => 7, Object {foo: 3} => ['abc']}
```

## Iterator
Iterator 接口的目的，就是为所有数据结构，提供了一种统一的访问机制，即for...of循环。当使用for...of循环遍历某种数据结构时，
该循环会自动去寻找 Iterator 接口。

一种数据结构只要部署了 Iterator 接口，我们就称这种数据结构是“可遍历的”（iterable）。

ES6 规定，默认的 Iterator 接口部署在数据结构的Symbol.iterator属性，


原生具备 Iterator 接口的数据结构如下。

Array
Map
Set
String
TypedArray
函数的 arguments 对象
NodeList 对象

一个数据结构只要部署了Symbol.iterator属性，就被视为具有 iterator 接口，就可以用for...of循环遍历它的成员。
也就是说，for...of循环内部调用的是数据结构的Symbol.iterator方法。

for...of循环相比上面几种做法，有一些显著的优点。
```javascript
for (let value of myArray) {
  console.log(value);
}
```
有着同for...in一样的简洁语法，但是没有for...in那些缺点。
不同于forEach方法，它可以与break、continue和return配合使用。
提供了遍历所有数据结构的统一操作接口。
