const mongoose = require("mongoose")


const { Schema } = mongoose;

const userSchema = new Schema({
    nomeReceita: {type: String, required: true},
    ingredientePrincipal: { type: String, required: true},
    ingredientes: [{ type: String, required: true}],
    preparo: [{ type: String, required: true}],
    observacoes: String,
    tipoReceita: {type: String, required: true},
    receitaSelecionada: { type: Boolean, default: false },
    
    },
    { timestamp: true });


const Receitas = mongoose.model("Receita", userSchema);

module.exports = Receitas; 