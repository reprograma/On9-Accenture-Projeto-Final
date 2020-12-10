const yup = require('yup')

exports.rightSchema = yup.object().shape({
    titleLegalSubject: yup.string().required('The title of legal subject is required'),
    sourceInformation: yup.string().required('The source information is required'),
    description: yup.string().required('The description is required'),
    inclusionDate: yup.string().required('The date is required'),
}).required('The form cannot be empty')
