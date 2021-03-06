const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const movie = new Schema(
    {
        title: { type: String, required: true },
        genre: String,
        plot: String
    }
);

const Movie = mongoose.model('Movie', movie);

module.exports = Movie;