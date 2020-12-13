const mongoose = require('mongoose');
const { boolean } = require('yup');
const Schema = mongoose.Schema;
/**
 * Atributos da entidade avaliacao
 */
const avaliacaoSchema = new mongoose.Schema({
    userId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    estabelecimentoId: { type: Schema.Types.ObjectId, ref: 'Estabelecimento', required: true },
    vagaPCD: { type: Boolean, required: true },
    banheiro: { type: Boolean, required: true },
    notaBanheiro: { type: Number},
    sinalizacao: { type: Boolean, required: true },
    notaSinalizacao: { type: Number},
    tradutorLibras: { type: Boolean, required: true },
    rampa: { type: Boolean, required: true },
    locomocaoInterna: { type: Number, required: true },
    avaliacaoGeral: { type: Number, required: true },
  }, { timestamps: true })

  /**
 * Definir collection que irá ser salva no banco
 */
  const Avaliacao = mongoose.model('Avaliacao', avaliacaoSchema);

   /**
 * Exportar o model Avaliacao para ser utilizado
 */
module.exports = Avaliacao;