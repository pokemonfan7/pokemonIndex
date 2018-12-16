const fs = require('fs')
const promisify = require('util').promisify
const read = promisify(fs.readFile)

// read('./fs.js').then(data => {
// 	console.log(data.toString())
// }).catch(err => {
// 	console.log(err)
// })

async function test() {
	try {
		const result = await read('fs.js')
		console.log(result.toString())
	} catch (err) {
		console.log(err)
	}
}
test()