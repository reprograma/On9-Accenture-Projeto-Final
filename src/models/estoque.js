const mongoose = require('mongoose');
const { Schema } = mongoose;

const estoqueSchema = new Schema({    
    modelo: { type: String, required: true },
    cor: { type: String, required: true },
    tamanho: { type: String, required: true },
    quantidade: { type: Number, required: true }
}, { timestamps: true })

const Estoque = mongoose.model('Estoque', estoqueSchema);

module.exports = Estoque;
