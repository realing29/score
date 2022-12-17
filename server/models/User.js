const { Schema, model } = require('mongoose')

const schema = new Schema(
	{
		login: { type: String, required: true, unique: true },
		password: { type: String, unique: false },
		address: String,
		email: String,
		phone: String,
	},
	{
		timestamps: true,
	},
)

module.exports = model('User', schema)
