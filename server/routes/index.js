const express = require('express')
const router = express.Router({ mergeParams: true })

router.use('/products', require('./product.routes'))
router.use('/auth', require('./auth.routes'))
router.use('/comments', require('./comment.routes'))

module.exports = router
