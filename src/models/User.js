const mongoose = require('mongoose')

const { Schema } = mongoose

const userSchema = new Schema ({
  name: {type: String, required: [true, 'Esse campo é obrigatório'] },
  email: {type: String, required: [true, 'Esse campo é obrigatório'] },
  password: {type: String, required: true},
  city: {type: String, required: true},
  type: {type: String, required: true},
  description: {type: String, required: true}
}, {timestamps: true})

const User = mongoose.model('User', userSchema)

module.exports = User;

