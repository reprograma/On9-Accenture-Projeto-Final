const mongoose = require("mongoose");

const {Schema} = mongoose;

const produtoSchema = new Schema({
    nomeProduto: {type: String, required: true},
    descricao: {type: String, required: true},
    estoque: {type: Number, required: true},
    valorFabrica: {type: Number, required: true}
},
{timestamps: true});

const Estoque =  mongoose.model('Estoque', produtoSchema);

module.exports = Estoque;