const express = require('express')
const Product = require('../models/Product')
const router = express.Router({ mergeParams: true })

router.get('/', async (req, res) => {
	try {
		const list = await Product.find()
		res.status(200).send(list)
	} catch (error) {
		res.status(500).json({ message: 'На сервере произошла ошибка. Попробуйте позже' })
	}
})

router.get('/ids', async (req, res) => {
	const ids = req.body
	try {
		const list = await Product.find({ _id: { $in: ids } })
		res.status(200).send(list)
	} catch (error) {
		res.status(500).json({ message: 'На сервере произошла ошибка. Попробуйте позже' })
	}
})

router.get('/:_id', async (req, res) => {
	const id = req.params._id
	try {
		const list = await Product.findById(id)
		res.status(200).send(list)
	} catch (error) {
		res.status(500).json({ message: 'На сервере произошла ошибка. Попробуйте позже' })
	}
})

router.put('/:_id', async (req, res) => {
	const id = req.params._id
	const newDataOfProduct = req.body
	try {
		const result = await Product.findByIdAndUpdate(id, newDataOfProduct)
		res.status(200).send(result)
	} catch (error) {
		res.status(500).json({ message: 'На сервере произошла ошибка. Попробуйте позже' })
	}
})

module.exports = router