const mongoose = require('mongoose');

const { Schema } = mongoose;

const userSchema = new Schema({
    titulo: { type: String, required: true },
    autor: { type: String, required: true },
    login: { type: String, required: true },
    resumo: { type: String, required: true },
    materia: { type: String, required: true },
    assunto: { type: String, required: true },
    referencias: { type: Array, required: true },
    tags: { type: Array, required: true },
    hashPass: String
});

const Postagem = mongoose.model('resumos', userSchema);

module.exports = Postagem;