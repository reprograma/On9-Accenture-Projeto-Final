const mongoose = require("mongoose");

const {Schema} = mongoose;

const userSchema = new Schema({
    nomeProduto:  {type: String, required: true},
    valorVenda: {type: Number, required: true},
    quantidade: {type: Number, required: true},
    vendedor: {type: String, required: true},
    clienteContato: {type: Array, required: true},
},
{timestamps: true});

const Vendas =  mongoose.model("Vendas", userSchema);

module.exports = Vendas;