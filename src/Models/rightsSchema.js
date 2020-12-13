const mongoose = require("mongoose")
const Schema = mongoose.Schema

const rightsSchema = new Schema({
    
    titleLegalSubject: {
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


const rights = mongoose.model('rights', rightsSchema)

module.exports = rights;
