const User = require('../models/User')
const auth = require('../middleware/auth.middleware')

const admin = async (req, res, next) => {
	const userId = req.user._id
	const user = await User.findById(userId)

	const isAdmin = user.right === 'admin'

	if (!isAdmin) return res.status(401).json({ message: 'Forbidden' })

	next()
}

module.exports = [auth, admin]
