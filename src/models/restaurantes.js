const mongoose = require("mongoose")
const {Schema} = mongoose

const restauranteSchema = new Schema({
  nome: {type: String, required: true},
  culinaria: {type: String, required: true},
  inclusivo: {type: String, required: true},
  localizacao: {type: String, required: true}
})

const restaurante = mongoose.model('restaurante', restauranteSchema)

module.exports = restaurante;