const chalk = require('chalk')
const Product = require('../models/Product')

const productMoock = require('../mook/products.json')

module.exports = async () => {
	const product = await Product.find()
	if (product.length !== productMoock.length) {
		console.log(chalk.yellow('Данные в БД и moock не совпадают, данные БД обновляются'))
		await createInitialEntity(Product, productMoock)
		console.log(chalk.green('обновление завершено'))
	}
}

async function createInitialEntity(Model, data) {
	await Model.collection.drop()
	return Promise.all(
		data.map(async (item) => {
			try {
				delete item.id
				const newItem = new Model(item)
				await newItem.save()
				return newItem
			} catch (error) {
				return error
			}
		}),
	)
}
