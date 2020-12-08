const mongoose = require('mongoose');
/**
 * Atributos da entidade user
 */
const userSchema = new mongoose.Schema({
    nome: { type: String, unique: false, required: true },
    sobrenome: { type: String, unique: false, required: true },
    nascimento: { type: Date, unique: true, required: true },
    email: { type: String, unique: true, required: true },
    password: { type: String, required: true },
    cidade: { type: String, required: true }
  }, { timestamps: true })

  /**
 * Definir collection que irá ser salva no banco
 */
  const User = mongoose.model('User', userSchema);

   /**
 * Exportar o model User para ser utilizado
 */
module.exports = User;


  
  