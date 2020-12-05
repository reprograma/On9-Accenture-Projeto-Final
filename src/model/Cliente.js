const mongoose = require('mongoose');
const { Schema } = mongoose;

const clienteSchema = new Schema({
    nome: { type: String, required: true },
    telefone: { type: String, required: true },
    endereco: { type: String, required: true },
    email: { type: String, unique: true, required: true },
    senha: { type: String, required: true },
}, { timestamps: true });

const Cliente = mongoose.model('Cliente', clienteSchema);

module.exports = Cliente;