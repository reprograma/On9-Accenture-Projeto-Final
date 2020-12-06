const mongoose = require('mongoose');
const { Schema } = mongoose;


const UserSchema = new Schema({
    name: { type: String, required: true },
    email: { type: String, unique: true, required: true },
    hashPass: String
})

const Usuario = mongoose.model('usuarios', UserSchema);
module.exports = Usuario