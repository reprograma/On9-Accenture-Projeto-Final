const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
  name: {type: String, required: true },
  email: { type: String, unique: true, required: true },
  //password: { type: String, required: true },
  city: { type: String, required: true },
  type: { type: String}
  },
  { timestamps: true }
)

const User = mongoose.model('User', userSchema)

module.exports = User

