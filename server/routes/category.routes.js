const express = require('express')
const adminMiddleware = require('../middleware/admin.middleware')
const Category = require('../models/Category')
const router = express.Router({ mergeParams: true })

router.get('/', async (req, res) => {
	try {
		const categories = await Category.find()
		res.status(200).send(categories)
	} catch (error) {
		res.status(500).json({ message: 'На сервере произошла ошибка. Попробуйте позже' })
	}
})

router.post('/', ...adminMiddleware, async (req, res) => {
	try {
		const categories = req.body
		const result = []
		for (const category of categories) {
			result.push(await Category.create(category))
		}
		res.status(200).send(result)
	} catch (error) {
		console.error(error)
		res.status(500).json({ message: 'На сервере произошла ошибка. Попробуйте позже' })
	}
})

module.exports = router
