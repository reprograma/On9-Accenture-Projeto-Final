const mongoose = require('mongoose');
const { Schema } = mongoose;

const movieSchema = new Schema({
    title: { type: String, required: true },
    director: { type: String, required: true },
    nacionality: { type: Array, required: true },
    year: { type: Number, required: true },
    genre: { type: Array, required: true },
    about: { type: String, required: true },
    atLeastOneFemaleWriter: { type: Boolean, required: true}

});

const Movies = mongoose.model('Movies', movieSchema);

module.exports = Movies;

