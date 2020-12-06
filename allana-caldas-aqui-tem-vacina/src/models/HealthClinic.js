const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const addressSchema = new Schema({
    street: { type: String, required: true, unique: true },
    zipcode: { type: String, required: true, unique: true },
    _id: false
})

const vaccineSchema = new Schema({
    _id: false,
    name: { type: String, required: true },
    dosage: { type: Array, required: true },
    vaccineId: { type: Schema.Types.ObjectId, ref: 'Vaccine', required: true }
})

const healthClinicSchema = new Schema({
    type: { type: String, required: true },
    address: { type: addressSchema, unique: true, required: true },
    borough: { type: String, required: true },
    openingHours: { type: String, required: true },
    accessibility: { type: Boolean, required: true },
    vaccines: [{ type: vaccineSchema, required: true }]
}, { timestamps: true })


const healthClinic = mongoose.model('healthClinic', healthClinicSchema);
module.exports = healthClinic;