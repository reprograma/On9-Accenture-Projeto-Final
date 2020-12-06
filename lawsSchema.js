const mongoose = require("mongoose")
const Schema = mongoose.Schema

const lawSchema = new Schema({
    _id: {
        type: mongoose.Schema.Types.ObjectId, 
        auto: true,
        required: true
    },
    titlelegalSubject: {
        type: String,
        required: true,
    },
    description: {
        type: string,
        required: true,
    },
    sourceInformation: {
        type: String,
        required: true,
    }
})


const lawCollections = mongoose.model('law', lawSchema)

module.exports = lawCollections