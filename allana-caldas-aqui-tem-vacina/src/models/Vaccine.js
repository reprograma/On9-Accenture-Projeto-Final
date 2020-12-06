const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const VaccineSchema = new Schema({
    vaccine: { type: String, unique: true, required: true },
    batch: { type: String, unique: true, required: true },
    doses: [{ type: String, required: true }]
}, { timestamps: true })

const Vaccine = mongoose.model('Vaccine', VaccineSchema);
module.exports = Vaccine;