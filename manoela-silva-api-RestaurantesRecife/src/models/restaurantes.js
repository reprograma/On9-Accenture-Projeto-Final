const mongoose = require('mongoose');
const RestauranteSchema = new mongoose.Schema({
    nome:{type:mongoose.Schema.Types.ObjectId, ref: 'Usuario'},
    resturante: {type:String, required:true}, 
    especialidades:{type:Array, required:true},
    rua:{type:String, required:true}, 
    comentarios:[
        {avaliacao: {type:String, required:true}, 
        nota:{type:Number, required:true}
        }
    ]
});
const Restaurante = mongoose.model('Restaurante', RestauranteSchema)
module.exports = Restaurante