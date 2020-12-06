const mongoose = require('mongoose');

const { Schema } = mongoose;

const bookSchema = new Schema({
  title: { type: String, required: true },
  author: { type: String, required: true},
  hasTrigger: { type: Boolean, default: false},
  triggers: [{ type: String }],
  synopsis: { type: String }, 
  },
  { timestamps: true });

const Books = mongoose.model('Books', bookSchema);

module.exports = Books;


