const yup = require('yup')
exports.userSchema = yup.object().shape({
    name: yup.string().required('Campo obrigatório.'),
    email: yup.string().email().required('Campo obrigatório'),
    password: yup.string().min(8).required('Campo obrigatório. Minímo 8 caracteres')

}).required('Esse objeto não pode ser vazio')