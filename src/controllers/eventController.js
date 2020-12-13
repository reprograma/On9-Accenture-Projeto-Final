const {req, res} = require('express')
const mongoose = require('mongoose')
const { response } = require('../app')
const { events } = require('../models/event')
const Event = require('../models/event')

const getAll = (req, res, next) => {
    Event.find()
    .then((events) => {
        res.status(200).json(events)
    })
    .catch(err => next(err))
}

const getByApply = (req, res, next) =>{
    
    Event.find({ openApply: true})
        .then((events) => {
            res.status(200).json(events)
        })
        .catch(err => next(err))
}

const createEvent = (req, res, next) =>{
    let {eventTitle, state, beach, surfDay} = req.body

    const newEvent = new Event({
        eventTitle,
        state,
        beach,
        surfDay
    })
    newEvent.save()
        .then((newEvent) => {
            res.status(201).json({ message: 'Event created successfully'})
        })
        .catch(err => next(err))
}

    const updateEvent = (req, res) =>{
    const { id } = req.params //pegando o id na URL
    if(!mongoose.Types.ObjectId.isValid(id)) {
        res.status(400).json({ message: 'Specified id is not valid'})
        return
    }
    Event.findByIdAndUpdate(id, req.body)
        .then(() => {
            res.status(200).json({ message: `${req.params.id} is updated`})
        })
        .catch((err) => {
            res.json(err)
        })
}


const closeApllies = (req, res) =>{
    const { id } = req.params
    const { openApply } = req.body

    Event.findByIdAndUpdate(id, {$set: {openApply}})
    .then((events) => {
        res.status(200).json({message: `${req.params.id} applies are closed`})
    })
    .catch((err) => {

    })
}


const deleteEvent = (req, res, next) =>{
    const{ id } = req.params

    Event.findByIdAndDelete(id)
        .then(() => {
            res.status(200).json('Evento canceled')
        })
        .catch((err) => {
            throw new Error(err)
        })    
}




module.exports = {
    getAll,
    getByApply,
    createEvent,
    deleteEvent,
    updateEvent,
    closeApllies
}