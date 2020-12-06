const hotels = require("../models/hosting") 
const {request, response} = require("express")

const getByState = (request, response) => {
    /*console.log(request.url)
    return response.status(200).json(hotels)*/    
}

const getByCity = (request, response) =>{
    /*const cidade = request.params.cidade
    return response.status(200).send(hotels.find(hotel => hotel.cidade == cidade))*/
} 

module.exports = {
    getByState,
    getByCity
}