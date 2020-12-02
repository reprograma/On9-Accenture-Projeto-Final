const mongoose = require("mongoose");

const {Schema} = mongoose;

const userSchema = new Schema({
    nomeProduto: String,
    descricao: String,
    estoque: Number,
    valorFabrica: Number
},
{timestamps: true});

const Produtos =  mongoose.model("Produtos", userSchema);

module.exports = Produtos;