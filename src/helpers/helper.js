const TransitAgentUser = require("../models/TransitAgents");
const AmbulancesUser = require("../models/Ambulances");
const MessageSend = require('../models/Messages')


function checkDate(dateCreated, date) {
    if(dateCreated == date) {
      return messages;
    } else {
      return "Não há mensagens nessa data";
    }
  }

  module.exports = {
      checkDate
  }

  exports.createNewMessageAmbulance = async (message, ambulanceId) => {
    // 1- Guardamos dentro de uma variável a nossa nova entrada de BookAvailable, criada com o Model importado e os valores que recemos pelo parâmetro
    const newMessageAmbulance = new MessageSend({
      messageWrite,
      messageTitle,
      ambulanceId
    })
  
    try {
      // 2- Salvamos o livro no banco de dados e retornamos o valor da Promise quando ela for resolvida
      return await newMessageAmbulance.save()
    } catch (e) {
      console.log(e)
      // Forçamos o retorno de um erro quando algo de errado acontece ao salvarmos o livro disponível
      throw new Error(e)
    }
  }