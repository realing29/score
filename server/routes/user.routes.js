const express = require('express')
const authMiddleware = require('../middleware/auth.middleware')
const User = require('../models/User')
const router = express.Router({ mergeParams: true })

router.get('/:id', authMiddleware, async (req, res) => {
	const id = req.params.id
	if (id !== req.user._id) {
		return res.status(403).json({ message: 'Unauthorized' })
	}
	try {
		const result = await User.findById(id).select('-password')
		res.status(200).send(result)
	} catch (error) {
		res.status(500).json({ message: 'На сервере произошла ошибка. Попробуйте позже' })
	}
})

router.put('/:id', authMiddleware, async (req, res) => {
	const id = req.params.id
	const { _id, createdAt, updatedAt, __v, ...rest } = req.body
	if (id !== req.user._id) {
		return res.status(403).json({ message: 'Unauthorized' })
	}
	try {
		const result = await User.findByIdAndUpdate(id, rest)
		res.status(200).send(result)
	} catch (error) {
		if (error.codeName === 'DuplicateKey') {
			return res.status(401).json({ message: 'Duplicate login' })
		}
		res.status(500).json({ message: 'На сервере произошла ошибка. Попробуйте позже' })
	}
})

module.exports = router
