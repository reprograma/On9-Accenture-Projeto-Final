const mongoose = require('mongoose')

const eventSchema = new mongoose.Schema({
  eventId: { type: Schema.Types.ObjectId, required: true },
  title: { type: String, required: true },
  date: { type: String, required: true },
  description: { type: String, required: true, unique: true },
  category: { type: String, required: true },
  tags: {type: Array, required: true}
}, { timestamps: true })

const Event = mongoose.model('Event', eventSchema)

module.exports = Event;
