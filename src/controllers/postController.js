const { response, request } = require("express")
const mongoose = require('mongoose')
const Task = require('../models/post')
const bcrypt = require('bcrypt')
const bcryptSalt = 8

// GET
const getAll = function (request, response) {
    Task.find()
        .then((tasks) => { response.status(200).json(tasks) })
        .then(() => response.send("M"))
        .catch(err => next(err));
}

const getByID = (request, response) => {
    const { id } = request.params;
    Task.findById(id)
        .then((task) => { response.status(200).json(task) })
        .catch(err => { response.status(500).json({ message: err }) })
}

const getByMateria = (request, response) => {
    const { materia } = request.query;
    Task.find({ materia: materia })
        .then((posts) => { response.status(200).json(posts) })
}

const getByAssunto = (request, response) => {
    const { assunto } = request.query;
    Task.find({ assunto: assunto })
        .then((posts) => { response.status(200).json(posts) })
}

const getByTags = (request, response) => {
    const { tags } = request.params;
    Task.find({ tags: tags })
        .then((posts) => { response.status(200).json(posts) })
}

//Post
const createPost = async (request, response, next) => {
    const { titulo, autor, resumo, materia, assunto, referencias, tags } = request.body
    try {
        const newTask = new Task({
            titulo,
            autor,
            resumo,
            materia,
            assunto,
            referencias,
            tags
        })

        newTask.save()
            .then((tasks) => {
                response.status(201).json(tasks);
            })
            .then((tasks) => {
                response.send('Resumo postado com sucesso!').json(tasks);
            })
            .catch(err => next(err));
    } catch (e) {
        return response.status(401).json({ error: 'Error' });
    }
}


//Put
const updatePost = (request, response) => {
    const { id } = request.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        response.status(400).json({ message: 'ID não é válido.' })
        return
    } else {
        Task.findById(id)
            .then((task) => {
                Task.findByIdAndUpdate(id, request.body)
                    .then(() => { response.status(200).json(`${request.params.id} foi atualizado com sucesso!`) })
                    .catch((err) => next(err))
            })
            .catch((err) => next(err))
    }
}

//patch
const updateTitulo = (request, response) => {
    const { id } = request.params;
    const { titulo, autor, resumo, materia, assunto, referencias, tags, password } = request.body
    Task.findById(id)
        .then((task) => {
            Task.findByIdAndUpdate(id, { $set: { titulo: titulo } })
                .then(() => { response.status(200).json({ message: `O título foi alterado!` }) })
                .catch((err) => next(err))

        })
        .catch(err => { throw new Errow(err) })
}
//delete
const deletePost = (request, response) => {
    const { id } = request.params;
    Task.findById(id)
        .then((task) => {
            Task.findByIdAndDelete(id)
                .then(() => { response.status(200).json({ message: `A Postagem (id: ${id}) foi deletada com sucesso!` }) })
                .catch((err) => next(err))
        })
        .catch(err => { throw new Errow(err) })
}


module.exports = {
    getAll,
    getByID,
    getByAssunto,
    getByMateria,
    getByTags,
    updateTitulo,
    createPost,
    deletePost,
    updatePost
}