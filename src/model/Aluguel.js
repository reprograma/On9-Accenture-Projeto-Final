const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const aluguelSchema = new Schema({
    objetoId: { type: Schema.Types.ObjectId, ref: 'Objeto', required: true },
    clienteId: { type: Schema.Types.ObjectId, ref: 'Cliente', required: true },
}, { timestamps: true });

const Aluguel = mongoose.model('Aluguel', aluguelSchema);


module.exports = Aluguel;