const express = require('express')
const config = require('config')
const mongoose = require('mongoose')
const routes = require('./routes')
const chalk = require('chalk')
const cors = require('cors')
const path = require('path')

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cors())

app.use('/api', routes)

const PORT = config.get('port')

const isProd = process.env.NODE_ENV === 'production'

if (isProd) {
	app.use('/', express.static(path.join(__dirname, 'client')))

	const indexPath = path.join(__dirname, 'client', 'index.html')
	app.get('*', (req, res) => {
		res.sendFile(indexPath)
	})
}

module.exports = async function start() {
	try {
		await mongoose.connect(config.get('mongoUri'))
		console.log(chalk.green('MongoDB connected'))
		app.listen(PORT, () =>
			console.log(chalk.green(`Server has been started on port ${PORT}`)),
		)
	} catch (error) {
		console.log(chalk.red(error.message))
		process.exit(1)
	}
}
