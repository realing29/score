const { model, Schema } = require('mongoose')

const schema = new Schema(
	{
		name: { type: String },
	},
	{
		timestamps: { createdAt: 'create_at' },
	},
)

module.exports = model('Category', schema)
