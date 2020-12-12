const mongoose = require("mongoose")
const DB_URL = "mongodb://localhost:27017/direitosDasMulheresTech"

const connect = ()=>{
    mongoose.connect(DB_URL, { useUnifiedTopology: true })
    const connection = mongoose.connection
    connection.on('error', () => console.error('Error connected'))
    connection.once('open',  () => console.log('Connect in the Mongo'))
}

module.exports = { connect }

//arquivo Repository CRIA a Conexão com nossa Banco de Dados, nesse caso o MongoDB