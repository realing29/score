const express = require('express')
const Comment = require('../models/Comment')
const router = express.Router({ mergeParams: true })
const auth = require('../middleware/auth.middleware')

router.get('/:id', auth, async (req, res) => {
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

module.exports = router
