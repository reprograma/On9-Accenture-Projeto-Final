const mongoose = require("mongoose");

const { Schema } = mongoose;

const userSchema = new Schema({
    opportunityType: { type: String, required: true },
    destinyCountry: { type: String, required: true },
    description: String,
    registrationDeadline: { type: Date, require: true },
    free: { type: Boolean, default: false }
},
    { timestamps: true });

const Opportunity = mongoose.model('Opportunity', userSchema);

module.exports = Opportunity;