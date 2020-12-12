const mongoose = require("mongoose");

const { Schema } = mongoose;

const mentorSchema = new Schema({
    email: { type: String, unique: true, required: true },
    password: { type: String, required: true },
    mentorName: { type: String, required: true },
    visitedCountry: { type: String, required: true },
    mentoringType: { type: String, required: true },
    mentored: [{ type: Schema.Types.ObjectId, ref: 'Mentored' }],
    descripition: String,
    available: { type: Boolean, required: true, default: false },
}, { timestamps: true });

const Mentor = mongoose.model('Mentor', mentorSchema);

module.exports = Mentor;