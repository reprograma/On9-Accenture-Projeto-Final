const mongoose = require('mongoose');

const { Schema } = mongoose;

const bookSchema = new Schema({
  title: { type: String },
  author: { type: String},
  hasTrigger: { type: Boolean, default: true}
  triggers: { type: String },
  synopsis: { type: String }, 
  },
  { timestamps: true });

const Books = mongoose.model('Books', bookSchema);

module.exports = Books;


