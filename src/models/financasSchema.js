const mongoose = require("mongoose")
const Schema = mongoose.Schema

const financasSchema = new Schema({
    _id: {
        type: mongoose.Schema.Types.ObjectId,
        auto:true,
        required:true
    },
    nome: {
        type:String, 
        required:true
    },
    material: {
        type:String, 
        required:true
    }
})

const financasCollections = mongoose.model('financas', financasSchema)

module.exports = financasCollections  