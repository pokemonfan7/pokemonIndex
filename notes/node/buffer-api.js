// Buffer用于处理二进制数据流
// 实例类似整数数字，大小固定
// C++代码在V8堆外分配物理内存
// console.log(Buffer.alloc(5))
// console.log(Buffer.alloc(5, 1))
// console.log(Buffer.allocUnsafe(5))
// console.log(Buffer.from([1,2,3,4,5]))
// console.log(Buffer.from('test'))
// <Buffer 00 00 00 00 00>
// <Buffer 01 01 01 01 01>
// <Buffer 00 00 00 00 00>
// <Buffer 01 02 03 04 05>
// <Buffer 74 65 73 74>

// console.log(Buffer.byteLength('test'))
// console.log(Buffer.byteLength('测试'))
// console.log(Buffer.isBuffer({}))
// console.log(Buffer.isBuffer(Buffer.from([1,2])))
// const buf1 = Buffer.from('Hello  ')
// const buf2 = Buffer.from('World')
// const buf = Buffer.concat([buf1, buf2])
// console.log(buf.toString())
// 4
// 6
// false
// true
// Hello  World

// console.log(Buffer.alloc(5).length)
// console.log(Buffer.from('test').toString())
// console.log(Buffer.alloc(5).fill(2, 1, 3))
// const buf4 = Buffer.from('test')
// const buf5 = Buffer.from('test')
// console.log(buf4.equals(buf5))
// console.log(buf4.indexOf('s'))
// 5
// test
// <Buffer 00 02 02 00 00>
// true
// 2

// string_decoder