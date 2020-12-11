const yup = require('yup');

yup.setLocale({
    string: {
        email: 'Esse e-mail não é válido',
        min: 'Senha de no mínimo 7 caracteres'
    }
})
const loginSchema = yup.object().shape({
    name: yup.string().required('Esse campo é obrigatório'),
    email: yup.string().email().required('Esse campo é obrigatório'),
    password: yup.string().min(7).required('Esse campo é obrigatório')
}).required('Esse campo é obrigatório')

module.exports = loginSchema