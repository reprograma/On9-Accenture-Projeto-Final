const mongoose = require("mongoose");

const opportunitySchema = new mongoose.Schema({
    email: { type: String, unique: true, required: true },
    password: { type: String, required: true },
    opportunityType: { type: String, required: true },
    destinyCountry: { type: String, required: true },
    description: String,
    registrationDeadline: { type: Date, require: true }, //ARRUMAR FORMATO DATA
    free: { type: Boolean, default: false },
    active: { type: Boolean, default: false }
}, { timestamps: true });

const Opportunity = mongoose.model('Opportunity', opportunitySchema);

module.exports = Opportunity;