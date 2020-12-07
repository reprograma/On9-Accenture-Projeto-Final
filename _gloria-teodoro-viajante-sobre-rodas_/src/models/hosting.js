const mongoose = require('mongoose')
const Schema = mongoose.Schema

const hostingSchema = new Schema({
    nome: {type: String, required: true},
    estado: {type: String, required: true},
    telefone: {type: String, required: false},
    acessibilidade: {type: Array, required: true},
    endereço: {type: Object, required: true},
    site: {type: String, required: false}    
})
