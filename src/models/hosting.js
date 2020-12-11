const mongoose = require('mongoose')

const Schema = mongoose.Schema

const hostingSchema = new Schema({
    name: {type: String, required: true},
    state: {type: String, required: true},
    city: {type:String, required: true},
    phone: {type: String},
    accessibility: {type: Object, required: true},
    address: {type: Object, required: true},
    site: {type: String}    
})

const hosting = mongoose.model('Hosting', hostingSchema)

module.exports = hosting
