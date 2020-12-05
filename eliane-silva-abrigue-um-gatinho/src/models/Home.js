const mongoose = require('mongoose')
const { Schema } = mongoose

const homeSchema = new Schema({
    name: { type: String, required: true },
    email: { type: String, unique: true, required: true },
    hashPass: { type: String, required: true }, //verificar se fica como "senha" ou "hashpass". Assistir aula yt
    contact: { type: Number, min: 11, required: true },
    city: { type: String, required: true },
    neighborhood: { type: String, required: true },
    homeDescription: { type: String, required: true },
    available: { type: Boolean, default: true }
    //favorite: { type: mongoose.Schema.Types.ObjectId, ref: 'Cat'}
},
    { timestamps: true })

const Home = mongoose.model('Home', homeSchema)

module.exports = Home