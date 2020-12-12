const mongoose = require('mongoose');

const { Schema } = mongoose;

const eventSchema = new mongoose.Schema({
  title: { type: String, required: true, unique: true },
  date: { type: Date, required: true },
  description: { type: String, required: true },
  category: { type: String, required: true },
  tags: { type: Array, required: true }
},
  { timestamps: true })

const Event = mongoose.model('Event', eventSchema);

module.exports = Event;
