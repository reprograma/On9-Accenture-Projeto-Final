const mongoose = require("mongoose");

const { Schema } = mongoose;

const mentoredSchema = new Schema({
    email: { type: String, unique: true, required: true },
    password: { type: String, required: true },
    mentoredName: { type: String, required: true },
    destinyCountry: { type: String, required: true },
    mentoringType: { type: String, required: true },
    mentor: [{ type: Schema.Types.ObjectId, ref: 'Mentor' }],
    concluded: { type: Boolean, required: true, default: false },
}, { timestamps: true });

const Mentored = mongoose.model('Mentored', mentoredSchema);

module.exports = Mentored;