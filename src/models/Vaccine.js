const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const VaccineSchema = new Schema({
    vaccine: { type: String, required: [true, 'O preenchimento desse campo é obrigatório'] },
    batch: { type: String, required: [true, 'O preenchimento desse campo é obrigatório'] },
    dose: { type: String, required: [true, 'O preenchimento desse campo é obrigatório'] },
    preventableDiseases: { type: Array, required: [true, 'O preenchimento desse campo é obrigatório'] }
}, { timestamps: true })

const Vaccine = mongoose.model('Vaccine', VaccineSchema);

module.exports = Vaccine;