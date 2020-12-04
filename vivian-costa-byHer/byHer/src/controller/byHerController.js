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

//const getByGenre = 

//const getByNacionality =

//const getByYear = 

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



module.exports = {
    getAll,
   // getByGenre,
    //getByNacionality,
    //getByYear,
    createMovie
}