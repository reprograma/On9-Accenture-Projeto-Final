const mongoose = require("mongoose");

const {Schema} = mongoose;

const userSchema = new Schema({
    nomeProduto: String,
    valorVenda: Number,
    lucro: Number,
    vendedor: String,
    clienteContato: Array,
},
{timestamps: true});

const Vendas =  mongoose.model("Vendas", userSchema);

module.exports = Vendas;