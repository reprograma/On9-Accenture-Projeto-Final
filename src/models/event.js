const mongoose = require('mongoose');
const { Schema } = mongoose

const eventSchema = new Schema({
    eventTitle: {type: String, required: true},
    state: {type: String, required: true},
    beach: {type: String, required: true},
    surfDay: {type: String, required: true},
    openApply: {type: Boolean, default: true}
    })
    

const Events = mongoose.model('event', eventSchema)
module.exports = Events