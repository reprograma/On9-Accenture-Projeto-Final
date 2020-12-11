const mongoose = require('mongoose');
const RestauranteSchema = new mongoose.Schema({
    nome:{type:String, required:true},
    restaurante:{type:String, required:true}, 
    especialidades:{type:Array, required:true},
    rua:{type:String, required:true}, 
    comentarios:[
        {avaliacao: {type:String, required:false}, 
        nota:{type:Number, required:false}
        }
    ]
});
const Restaurante = mongoose.model('Restaurante', RestauranteSchema)
module.exports = Restaurante