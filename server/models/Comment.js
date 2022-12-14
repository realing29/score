const { model, Schema } = require('mongoose')

const schema = new Schema(
	{
		login: { type: String },
		rate: { type: Number, required: true },
		text: { type: String, require: true },
		productId: { type: Schema.Types.ObjectId, ref: 'Product', required: true },
		userId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
	},
	{
		timestamps: { createdAt: 'create_at' },
	},
)

module.exports = model('Comment', schema)
