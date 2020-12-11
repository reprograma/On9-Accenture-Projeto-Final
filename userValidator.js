const yup = require('yup')

yup.setLocale({
    string: {
        email: 'this e-mail is not valid',
        min: 'The password need to have minimal 8 charactes'
    }
})

exports.signupSchema = yup.object().shape({
    email: yup.string().email().required('This field is required'),
    password: yup.string().min(8).required('This field is required'),
    name: yup.string().required('This field is required'),
    occupation: yup.string().required('This field is required'),
    city: yup.string().required('This field is required')
}).required('This object cannot be empty')
