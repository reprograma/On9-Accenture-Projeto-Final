const { request, response } = require("express")
const restaurante = require("../models/restaurantes.json")

const getAll = (request, response) => {
  console.log(request.url)
  response.status(200).send(restaurante)
}

const getById = (request, response) => {
  const id = request.params.id
  response.status(200).send(restaurantes.find(restaurantes => restaurantes.id == id))
}



module.exports = {
  getAll,
  getById
}