const yup = require('yup')

/**
 * Personalizando mensagens de erro para atributo Estabelecimento
 */

yup.setLocale({
    date: {
        dataInclusao: 'Essa data não é válida',
    }
  })

  /**
 * Declarar a validação para atributo Estabelecimento
 */

exports.estabelecimentoSchema = yup.object().shape({
    nome: yup.string().nome().required('Esse campo é obrigatório'),
    endereço: yup.string().endereço().required('Esse campo é obrigatório'),
    cidade: yup.string().cidade().required('Esse campo é obrigatório'),
    tipo: yup.string().tipo().required('Esse campo é obrigatório'),
    dataInclusao: yup.date().dataInclusao().required('Esse campo é obrigatório')
  }).required('Esse objeto não pode ser vazio');