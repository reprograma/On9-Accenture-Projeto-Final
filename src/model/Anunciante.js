const mongoose = require('mongoose');
const { Schema } = mongoose;

const anuncianteSchema = new Schema({
    nome: { type: String, required: true },
    telefone: { type: String, required: true },
    endereco: { type: String, required: true },
    email: { type: String, unique: true, required: true },
    senha: { type: String, required: true },
    objetos: [{ type: Schema.Types.ObjectId, ref: 'Objeto', required: true }]
}, { timestamps: true });

const Anunciante = mongoose.model('Anunciante', anuncianteSchema);

module.exports = Anunciante;