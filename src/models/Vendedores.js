const mongoose = require('mongoose');

const { Schema } = mongoose;

const vendedorSchema = new Schema({
    nome: { type: String, required: true },
    rg: { type: Number, required: true  },
    hashPass: { type: String, required: true }
});

const Vendedor = mongoose.model('Vendedor', vendedorSchema);

module.exports = Vendedor;