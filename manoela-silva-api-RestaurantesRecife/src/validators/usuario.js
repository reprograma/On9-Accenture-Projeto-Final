const yup = require('yup')
exports.loginSchema = yup.object().shape({
    nome: yup.string().required('Esse campo é obrigatório'),
    email: yup.string().email().required('Esse campo é obrigatório'),
    senha: yup.string().min(8).required('Esse campo é obrigatório, no minimo 8 caracteres')

}).required('Esse objeto não pode ser vazio')
