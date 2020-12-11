const { response, request } = require("express");
const mongoose = require('mongoose');
const Movie = require("../models/byHer");

const getAll = (request, response) => {
    Movie.find()
    .then((movies) => {
        response.status(200).json(movies);
    })
    .catch(err => next(err));
}

const getByGenre = (request, response) => {
    const { genre } = request.query;
    Movie.find({ genre: genre })
    .then((movie) => {
        response.status(200).json(movie);
    })
    .catch(err => next(err));
}

const getByNacionality = (request, response) => {
    const { nacionality } = request.query;
    Movie.find({ nacionality: nacionality })
    .then((movie) => {
        response.status(200).json(movie);
    })
    .catch(err => next(err));
}

const getByYear = (request, response) => {
    const { year } = request.query;
    Movie.find({ year: year })
    .then((movie) => {
        response.status(200).json(movie);
    })
    .catch(err => next(err));
}

const createMovie = (request, response) => {
    let { title, director, nacionality, year, genre, about, atLeastOneFemaleWriter } = request.body

    const newMovie = new Movie({
        title,
        director,
        nacionality,
        year,
        genre,
        about,
        atLeastOneFemaleWriter,
    });
    newMovie.save()
        .then((res) => {
            response.status(201).json(res);
        })
        .catch(err => next(err));
}

const deleteMovie = (request, response) => {
    const { id } = request.params
    Movie.findByIdAndDelete(id)
    .then(() => {
        response.status(200).json('movie deleted.')
    })
    .catch((err) => {
        throw new Error (err);
    })
}


module.exports = {
    getAll,
    getByGenre,
    getByNacionality,
    getByYear,
    createMovie,
    deleteMovie
}