const mongoose = require("mongoose")
const Schema = mongoose.Schema

const rightsSchema = new Schema({
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
        type: String,
        required: true,
    },
    sourceInformation: {
        type: String,
        required: true,
    },
    dateInclusion: {
        type: String,
        required: true,
    }
})


const rights= mongoose.model('right', rightsSchema)

module.exports = rights;
