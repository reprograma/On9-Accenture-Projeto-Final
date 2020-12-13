const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const UserSchema = new Schema({
    name: { type: String, required: true },
    email: { type: String, unique: true, required: true, lowercase: true },
    hashPass: String
}, { timestamps: true })

const User = mongoose.model('User', UserSchema);
module.exports = User;