const mongoose = require('mongoose')
const { Schema } = mongoose

const catSchema = new Schema({
    catId: { type: Schema.Types.ObjectId },
    responsible: { type: String, required: true },
    email: { type: String, unique: true, required: true },
    contact: { type: Number, required: true },
    password: { type: String, required: true },
    city: { type: String, required: true },
    neighborhood: { type: String, required: true },
    nicknameCat: { type: String, required: true },
    characters: [{
        color: String, required: true,
        adult: Boolean, required: true,
        puppy: Boolean, required: true,
        conditions: String
    }],
    avaiable: { type: Boolean, default: true }




})