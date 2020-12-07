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