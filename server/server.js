const cluster = require('cluster')
const start = require('./app')

if (cluster.isMaster) {
	for (let i = 0; i < 2; i++) {
		cluster.fork()
	}

	cluster.on('exit', (worker, code, signal) => {
		console.log(`worker ${worker.process.pid} died`)
		cluster.fork()
	})
} else {
	start()
}
