const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
    title: { type: String, required: true },
    director: { type: String, required: true },
    nacionality: { type: String, required: true },
    year: { type: Number, required: true },
    genre: { type: String, required: true },
    about: { type: String, required: true },
    atLeastOneFemaleWriter: { type: Boolean, required: true}

});

const Movies = mongoose.model('Movies', userSchema);

module.exports = Movies;

