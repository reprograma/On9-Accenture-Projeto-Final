const { response, request } = require("express")
const mongoose = require('mongoose');
const Book = require('../models/Livros');

const createBook = (request, response)=> {
    let { title, author, hasTrigger, triggers, synopsis } = request.body

    const newBook = new Book({
        title,
        author,
        hasTrigger,
        triggers,
        synopsis,
      });
    newBook.save()
        .then((res) => {
            response.status(201).json(res);
        })
        .catch(err => next(err));
}

const getAll = (request, response)=>{
    Book.find()
        .then((books) => {
            response.status(200).json(books);
        })
        .catch(err => next(err));
}

const getById = (request, response) =>{
    const { id } = request.params 

    Book.findById(id)
        .then((books)=>{
            response.status(200).json(books);
        })
        .catch(err => {throw new Error(err)});
}

const getHasTrigger = (request, response) =>{
    Book.find({ hasTrigger: true})
        .then((books)=>{
            response.status(200).send(books);
        })
        .catch(err => next (err));
}

const getDoesntHasTrigger = (request, response) =>{
    Book.find({ hasTrigger: false})
        .then((books)=>{
            response.status(200).send(books);
        })
        .catch(err => next (err));
}

const getByAuthor = (request, response) =>{
    const { author } = request.query 

    Book.find(author)
        .then((books)=>{
            response.status(200).json(books);
        })
        .catch(err => {throw new Error(err)});
}

const getByTitle = (request, response) =>{
    const { title } = request.body 

    Book.find(title)
        .then((books)=>{
            response.status(200).json(books);
        })
        .catch(err => {throw new Error(err)});
}

const getByTrigger = (request, response) =>{
    const { triggers } = request.query 

    Book.find(triggers)
        .then((books)=>{
            response.status(200).json(books);
        })
        .catch(err => {throw new Error(err)});
}

const deleteBook = (request, response)=>{
    const { id } = request.params
    
    Book.findByIdAndDelete(id)
        .then(() => {
            response.status(200).json('book deleted');
        })
        .catch((err) => {
            throw new Error(err);
        });
}

module.exports = {
    createBook,
    getAll,
    getById,
    getByAuthor,
    getByTitle,
    getByTrigger,
    getDoesntHasTrigger,
    getHasTrigger,
    deleteBook
}