const mongoose = require('mongoose')

const { Schema } = mongoose

const vaccineSchema = new Schema({
  name: { type: String, required: true },
  date: Date,
  dose: { type: String, required: true },
  avoidedDiseases: { type: String, required: false },
  userId: { type: Schema.Types.ObjectId, ref: 'User', required: false }
}, { timestamps: true })

const Vaccine = mongoose.model('Vaccine', vaccineSchema)

module.exports = Vaccine