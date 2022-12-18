const express = require('express')
const Comment = require('../models/Comment')
const router = express.Router({ mergeParams: true })
const auth = require('../middleware/auth.middleware')
const Product = require('../models/Product')

router.get('/:id', async (req, res) => {
	try {
		const list = await Comment.find({ productId: req.params.id })
		res.status(200).send(list)
	} catch (error) {
		res.status(500).json({ message: 'На сервере произошла ошибка. Попробуйте позже' })
	}
})

router.post('/', auth, async (req, res) => {
	const comment = req.body
	try {
		const result = await Comment.create(comment)
		res.status(200).send(result)
	} catch (error) {
		console.error(error)
		res.status(500).json({ message: 'На сервере произошла ошибка. Попробуйте позже' })
	}
})

router.delete('/:id', auth, async (req, res) => {
	const { id } = req.params
	const user = req.user
	try {
		const comment = await Comment.findById(id)

		const isStrangerComment = user._id !== comment.userId.toString()
		if (isStrangerComment) {
			return res.status(403).send('forbidden')
		}

		const productId = comment.productId
		const product = await Product.findById(productId)

		const newRate =
			(product.rate.count * product.rate.value - comment.rate) / (product.rate.count - 1)

		const result = await comment.delete()
		await product.updateOne({ rate: { value: newRate, count: product.rate.count - 1 } })

		res.status(200).send(result)
	} catch (error) {
		console.error(error)
		res.status(500).json({ message: 'На сервере произошла ошибка. Попробуйте позже' })
	}
})

module.exports = router
