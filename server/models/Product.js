const { Schema, model } = require('mongoose')

const schema = new Schema(
	{
		name: { type: String, required: true },
		category: String,
		categoryId: { type: Schema.Types.ObjectId, ref: 'Category', required: true },
		src: { type: String, required: true },
		price: { type: Number, required: true },
		description: String,
		rate: {
			type: Object,
			properties: {
				value: { type: Number, required: true },
				count: { type: Number, required: true },
			},
		},
	},
	{
		timestamps: { createdAt: 'create_at' },
	},
)

module.exports = model('Product', schema)
