const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const { boroughs } = require('../validators/healthClinic.js')

const addressSchema = new Schema({
    street: { type: String, required: [true, 'O preenchimento desse campo é obrigatório'] },
    zipcode: { type: Number, min: 8,  required: [true, 'O preenchimento desse campo é obrigatório'], unique: true },
    _id: false
})


const healthClinicSchema = new Schema({
    type: { type: String, required: [true, 'O preenchimento desse campo é obrigatório'], enum: ['Posto Volante', 'Drive Thru', 'Unidade Basica de Saude', 'UBS', "Unidade de Saude da Familia", "USF"] },
    address: { type: addressSchema, unique: true, required: [true, 'O preenchimento desse campo é obrigatório'] },
    borough: { type: String, required: [true, 'O preenchimento desse campo é obrigatório'], enum: boroughs },
    openingHours: { type: String, required: [true, 'O preenchimento desse campo é obrigatório'], default: "Segunda a Sexta - 8h às 17h" },
    vaccines: [{ type: Schema.Types.ObjectId, ref: 'Vaccine', required: true }]
}, { timestamps: true })


const healthClinic = mongoose.model('healthClinic', healthClinicSchema);
module.exports = healthClinic;

