const { request, response } = require("express")
const mongoose = require('mongoose');
const { findOneAndRemove } = require("../models/restaurantes");
const restaurante = require("../models/restaurantes")

const getAll = (request, response) => {
  restaurante.find()
      .then((restaurantes) => {
        response.status(200).json(restaurantes)
      })
      .catch(err => next(err));
}

const getById = (request, response) => {
  const {id} = request.params
      restaurante.findById(id)
          .then((restaurantes) =>{
            response.status(200).json(restaurantes)
          })
          .catch(err => {throw new Error(err)});
}


const getCulinaria = (request, response) => {
    const {culinaria} = request.query

    restaurante.find({culinaria: culinaria})
    .then((restaurantes) =>{
      response.status(200).json(restaurantes)
    })
    .catch(err => {next(err)});
}


const createRestaurante = (request, response, next) => {
    let { nome, culinaria, inclusivo, localizacao } = request.body

    const newRestaurante = new restaurante({
      nome,
      culinaria,
      inclusivo,
      localizacao
    });
    newRestaurante.save()
       .then((res) => {
         response.status(200).json(res)
       })
       
       .catch(err => {next(err)
  });
}

const putRestaurante = (request, response, next) => {
  const {id} = request.params

  restaurante.findByIdAndUpdate(id, request.body)
    .then(() => {
        response.status(200).json({ message: `${request.params.id} foi atualizado..` });
    })
    .catch((err) => {
        response.json(err);
     });    
 }

 const atualizaCulinaria = (request, response) => {
   const {id} = request.params
   const {culinaria} = request.body

   restaurante.findByIdAndUpdate(id, { $set: { culinaria }}) 
     .then(() => {
         response.status(200).json({ message: `${request.params.id} foi atualizado.` });
      })
     .catch((err) => {
         response.json(err);
     });    
   
 } 

 const atualizaLocalizacao = (request, response) => {
  const {id} = request.params
  const {localizacao} = request.body

  restaurante.findByIdAndUpdate(id, { $set: { localizacao }}) 
    .then(() => {
        response.status(200).json({ message: `${request.params.id} foi atualizado.` });
     })
    .catch((err) => {
        response.json(err);
    });    
  
} 
const deleteRestaurante = (request, response) => {
  const {id} = request.params
  
  restaurante.findByIdAndDelete(id)
    .then(() => {
        response.status(200).json({ message: `restaurante excluido.` });
    })
    .catch((err) => {
        response.status(500).json(err);
    });
     
}
            




module.exports = {
  getAll,
  getById,
  getCulinaria,
  createRestaurante,
  putRestaurante,
  atualizaCulinaria,
  atualizaLocalizacao,
  deleteRestaurante
}