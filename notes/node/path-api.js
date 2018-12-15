// 路径
// const {normalize} = require('path')
// console.log(normalize('/usr//local/bin'))
// console.log(normalize('/usr//local/../bin'))
// /usr/local/bin
// /usr/bin

// 连接路径
// const {join} = require('path')
// console.log(join('usr', '/local', 'bin/'))
// console.log(join('usr', '../local', 'bin/'))
// usr/local/bin/
// local/bin/

// 相对路径解析为绝对路径
// const {resolve} = require('path')
// console.log(resolve('./'))
// /Users/alex/Desktop/app/lucario/pokemonIndex/notes/node

// 路径名称
// const {basename, dirname, extname} = require('path')
// const filepath = 'usr/local/bin/no.txt'
// console.log(basename(filepath))
// console.log(dirname(filepath))
// console.log(extname(filepath))
// no.txt
// usr/local/bin
// .txt

// const {parse, format} = require('path')
// const filepath = 'usr/local/bin/no.txt'
// const ret = parse(filepath)
// console.log(ret)
// console.log(format(ret))
// { root: '',
//   dir: 'usr/local/bin',
//   base: 'no.txt',
//   ext: '.txt',
//   name: 'no' }
// usr/local/bin/no.txt

// const {sep, delimiter, win32, posix} = require('path')
// console.log('PATH: ' + process.env.PATH)
// console.log('sep: ' + sep)
// console.log('win sep: ' + win32.sep)
// console.log('delimiter: ' + delimiter)
// console.log('win delimiter: ' + win32.delimiter)
// PATH: /usr/local/bin:/usr/bin:/bin:/usr/sbin:/sbin
// sep: /
// win sep: \
// delimiter: :
// win delimiter: ;

// __dirname process.cwd() ./
// const {resolve} = require('path')
// console.log(__dirname)
// console.log(process.cwd())
// console.log(resolve('./'))
// __dirname、__filename返回执行文件的绝对路径
// process.cwd()返回执行node命令所在文件夹的绝对路径
// ./在require方法中和__dirname一样，在其他地方和cwd一样