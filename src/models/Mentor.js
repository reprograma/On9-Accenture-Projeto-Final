const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    email: { type: String, unique: true, required: true },
    password: { type: String, required: true },
    mentorName: { type: String, required: true },
    visitedCountry: { type: String, required: true },
    mentoringType: { type: String, required: true },
    descripition: String,
    available: { type: Boolean, default: false },
}, { timestamps: true });

const Mentor = mongoose.model('Mentor', userSchema);

module.exports = Mentor;