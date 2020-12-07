const mongoose = require('mongoose');
/**
 * Atributos da entidade estabelecimento
 */
const estabelecimentoSchema = new mongoose.Schema({
    // id: { type : Number}, -> precisa deixar aqui ou no banco?? 
    nome: { type: String, unique: false, required: true },
    endereço: { type: String, unique: false, required: true },
    cidade: { type: Date, unique: false, required: true },
    tipo: { type: String, unique: false, required: true },
    dataInclusao: { type: Date, required: true },
  }, { timestamps: true })

  /**
 * Definir collection que irá ser salva no banco
 */
  const Estabelecimento = mongoose.model('User', estabelecimentoSchema);

   /**
 * Exportar o model Estabelecimento para ser utilizado
 */
module.exports = Estabelecimento;