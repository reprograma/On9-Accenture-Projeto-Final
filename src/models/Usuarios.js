const mongoose = require("mongoose");

const { Schema } = mongoose;

const userSchema = new Schema({
    nome: {type: String, required: true},
    email: { type: String, unique: true, required: true},
    hashPass: String,
}, { timestamp: true});


const Usuario = mongoose.model('Usuario', userSchema);

module.exports = Usuario
    