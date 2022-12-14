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

router.post('/ids', async (req, res) => {
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

router.put('/rate/:_id', async (req, res) => {
	const { _id, rate } = req.body
	try {
		const product = await Product.findById(_id)
		const count = product.rate.count ?? 0
		const value = product.rate.value ?? 0

		const newValue = (value * count + +rate) / (count + 1)

		const result = await Product.findByIdAndUpdate(_id, {
			rate: { count: count + 1, value: newValue },
		})
		res.status(200).send(result)
	} catch (error) {
		res.status(500).json({ message: 'На сервере произошла ошибка. Попробуйте позже' })
	}
})

module.exports = router
