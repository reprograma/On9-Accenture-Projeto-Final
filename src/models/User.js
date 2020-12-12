const mongoose = require('mongoose');

const { Schema } = mongoose;

const eventSchema = new mongoose.Schema({
  nome: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  senha: { type: String, required: true },
},
  { timestamps: true })

const User = mongoose.model('User', eventSchema);

module.exports = User;
