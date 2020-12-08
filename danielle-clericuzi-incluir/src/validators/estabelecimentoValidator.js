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
    nome: yup.string().required('Esse campo é obrigatório'),
    endereço: yup.string().required('Esse campo é obrigatório'),
    cidade: yup.string().required('Esse campo é obrigatório'),
    tipo: yup.string().required('Esse campo é obrigatório'),
    dataInclusao: yup.date().required('Esse campo é obrigatório')
  }).required('Esse objeto não pode ser vazio');