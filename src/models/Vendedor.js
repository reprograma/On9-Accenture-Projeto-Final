const mongoose = require('mongoose');

const { Schema } = mongoose;

const vendedorSchema = new Schema({
    nome: { type: String, required: true },
    rg: { type: Number, required: true  },
    hashPass: String
});

const Vendedor = mongoose.model('Vendedor', vendedorSchema);

module.exports = Vendedor;