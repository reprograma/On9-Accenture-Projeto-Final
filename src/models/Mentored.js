const mongoose = require("mongoose");

const { Schema } = mongoose;

const userSchema = new Schema({
    mentoredName: { type: String, required: true },
    destinyCountry: { type: String, required: true },
    mentoringType: { type: String, required: true },
    concluded: { type: Boolean, default: false },
},
    { timestamps: true });

const Mentored = mongoose.model('Mentored', userSchema);

module.exports = Mentored;