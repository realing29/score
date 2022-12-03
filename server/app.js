const express = require('express')
const config = require('config')
const mongoose = require('mongoose')
const routes = require('./routes')
const chalk = require('chalk')
const initDatabase = require('./startUp/initDatabase')

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use('/api', routes)

const PORT = config.get('port')

async function start() {
	try {
		mongoose.connection.once('open', () => {
			initDatabase()
		})
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

start()