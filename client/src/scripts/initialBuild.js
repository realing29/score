const jsonfile = require('jsonfile')
const file = './src/configV2.json'

try {
	const ip = require('ip')
	const ipAddress = ip.address()
	const obj = { ipAddress }
	jsonfile.writeFileSync(file, obj)
} catch (error) {
	jsonfile.writeFileSync(file, {})
	console.error(error)
}
