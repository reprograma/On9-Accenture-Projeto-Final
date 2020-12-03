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

// será que preciso colocar aqui os IDs do user e estabelecimento??

exports.avaliacaoSchema = yup.object().shape({
    vagaPCD: yup.boolean().vagaPCD().required('É preciso avaliar este campo'),
    banheiro: yup.boolean().banheiro().required('É preciso avaliar este campo'),
    notaBanheiro: yup.number().notaBanheiro(),
    sinalizacao: yup.boolean().sinalizacao().required('É preciso avaliar este campo'),
    notaSinalizacao: yup.number().notaSinalizacao(),
    tradutorLibras: yup.boolean().tradutorLibras().required('É preciso avaliar este campo'),
    rampa: yup.boolean().rampa().required('É preciso avaliar este campo'),
    locomocaoInterna: yup.number().locomocaoInterna().required('É preciso avaliar este campo'),
    avaliacaoGeral: yup.number().avaliacaoGeral().required('É preciso avaliar este campo'),
    dataInclusao: yup.number().dataInclusao().required('É preciso avaliar este campo')
  }).required('Esse objeto não pode ser vazio');
