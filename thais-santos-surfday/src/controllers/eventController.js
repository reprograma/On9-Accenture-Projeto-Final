const event = require('../models/event.json')

const getAll = (req, res) => {
    res.status(200).send(event)
}

const createEvent = (req, res) =>{
    let {eventTitle, state, beach, surfDay} = req.body

    const newEvent = { 
        id: Math.random().toString(32).substr(2,9),
        eventTitle: eventTitle,
        state: state ,
        beach: beach,
        surfDay: surfDay.toString(),
        openApply: true
    }

    event.push(newEvent)
    res.status(201).json(newEvent)

}

const updateEvent = (req, res) =>{
    const { id } = req.params //pegando o id na URL
    const { state, beach } = req.body //pegando os dados enviados body

    const updatedEvent = event.find( event => event.id == id) //procurando o evento a ser atualizado
    
    const newEvent = {  //construindo o novo evento
        id: updatedEvent.id, //mantendo as informações
        eventTitle: updatedEvent.eventTitle,
        state: state , //adicionando os novos valores mandados pelo usuario
        beach: beach,
        surfDay: updatedEvent.surfDay,
        openApply: true
    }
    
    const index = event.indexOf(updatedEvent) //procura a posiçao do evento a ser atualizado no json

    event[index] = newEvent //atribuindo o evento antigo ao novo

    res.status(200).json(event[index])
}

const closeApllies = (req, res) =>{
    const { id } = req.params
    const { openApply } = req.body

    const closedEvent = event.find(event => event.id == id)

    event.openApply = openApply

    res.status(200).json({mensagem: "Inscrições encerradas",
    closedEvent})
}


const deleteEvent = (req, res) =>{
    const{id} = req.params
    const filterEvent = event.find(event => event.id == id)

    const index = event.indexOf(filterEvent)
    event.splice(index, 1)

    res.json({mensagem: "evento deletado com sucesso"})
}




module.exports = {
    getAll,
    createEvent,
    deleteEvent,
    updateEvent,
    closeApllies
}