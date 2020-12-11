const mongoose = require("mongoose");

const mentoredSchema = new mongoose.Schema({
    email: { type: String, unique: true, required: true },
    password: { type: String, required: true },
    mentoredName: { type: String, required: true },
    destinyCountry: { type: String, required: true },
    mentoringType: { type: String, required: true },
    mentor: [{ type: Schema.Types.ObjectId, ref: 'Mentor' }]
    concluded: { type: Boolean, default: false },
}, { timestamps: true });

const Mentored = mongoose.model('Mentored', mentoredSchema);

module.exports = Mentored;