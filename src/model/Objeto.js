const { Double } = require('bson')
const { timeStamp } = require('console')
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const objetoSchema = new Schema({
    nome: { type: String, required: true },
    preco: { type: Number, required: true },
    foto: { type: String, required: true },
    isAlugado: { type: Boolean, required: true, default: false },
    anuncianteId: { type: Schema.Types.ObjectId, ref: 'Anunciante', required: true },
}, { timeStamp: true });

const Objeto = mongoose.model('Objeto', objetoSchema);

module.exports = Objeto;