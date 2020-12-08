const mongoose = require('mongoose');
/**
 * Atributos da entidade estabelecimento
 */
const estabelecimentoSchema = new mongoose.Schema({
    nome: { type: String, unique: false, required: true },
    endereco: { type: String, unique: false, required: true },
    cidade: { type: Date, unique: false, required: true },
    tipo: { type: String, unique: false, required: true },
    dataInclusao: { type: Date, required: true },
  }, { timestamps: true })

  /**
 * Definir collection que irá ser salva no banco
 */
  const Estabelecimento = mongoose.model('Estabelecimento', estabelecimentoSchema);

   /**
 * Exportar o model Estabelecimento para ser utilizado
 */
module.exports = Estabelecimento;