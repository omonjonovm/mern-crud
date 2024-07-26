const { Schema, model } = require('mongoose')

const BookModel = new Schema({
  title: { type: String, required: true, minlength: 3 },
  description: { type: String, required: true },
  image: { type: String, required: true }
})
module.exports = model('Book', BookModel)