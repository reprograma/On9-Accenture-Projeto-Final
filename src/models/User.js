const mongoose = require('mongoose')

const { Schema } = mongoose

const userSchema = new Schema ({
  name: {type: String, required: true },
  email: {type: String, required: true},
  password: {type: String, required: true},
  city: {type: String, required: true},
  type: {type: String, required: true},
  description: {type: String, required: true},
  favoriteUser: [{type: mongoose.Schema.Types.ObjectId, ref: 'User'}]
}, {timestamps: true})

const User = mongoose.model('User', userSchema)

module.exports = User;

