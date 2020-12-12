const yup = require('yup')

/**
 * Personalizando mensagens de erro para atributo Avaliacao
 */
yup.setLocale({
    date: {
        dataInclusao: 'Essa data não é válida',
    }
  })

  /**
 * Declarar a validação para atributo Avaliacao
 */

exports.avaliacaoSchema = yup.object().shape({
    vagaPCD: yup.boolean().required('É preciso avaliar este campo'),
    banheiro: yup.boolean().required('É preciso avaliar este campo'),
    notaBanheiro: yup.number(),
    sinalizacao: yup.boolean().required('É preciso avaliar este campo'),
    notaSinalizacao: yup.number(),
    tradutorLibras: yup.boolean().required('É preciso avaliar este campo'),
    rampa: yup.boolean().required('É preciso avaliar este campo'),
    locomocaoInterna: yup.number().required('É preciso avaliar este campo'),
    avaliacaoGeral: yup.number().required('É preciso avaliar este campo')
  }).required('Esse objeto não pode ser vazio');
