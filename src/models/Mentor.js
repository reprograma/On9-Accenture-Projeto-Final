const mongoose = require("mongoose");

const { Schema } = mongoose;

const userSchema = new Schema({
    mentorName: { type: String, required: true },
    visitedCountry: { type: String, required: true },
    mentoringType: { type: String, required: true },
    descripition: String,
    availability: { type: Boolean, default: false },
},
    { timestamps: true });

const Mentor = mongoose.model('Mentor', userSchema);

module.exports = Mentor;