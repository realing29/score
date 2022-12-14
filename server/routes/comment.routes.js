const express = require('express')
const Comment = require('../models/Comment')
const router = express.Router({ mergeParams: true })

router.get('/:id', async (req, res) => {
	console.log(req.params.id)
	try {
		const list = await Comment.find({ productId: req.params.id })
		res.status(200).send(list)
	} catch (error) {
		res.status(500).json({ message: 'На сервере произошла ошибка. Попробуйте позже' })
	}
})

router.post('/', async (req, res) => {
	const comment = req.body
	try {
		const result = await Comment.create(comment)
		res.status(200).send(result)
	} catch (error) {
		console.error(error)
		res.status(500).json({ message: 'На сервере произошла ошибка. Попробуйте позже' })
	}
})

module.exports = router
