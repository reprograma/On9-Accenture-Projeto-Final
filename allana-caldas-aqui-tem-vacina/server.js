const app = require('./src/app.js');
const PORT = 8080;

app.listen(PORT, () => { 
    console.log(`A aplicação está rodando na porta ${PORT}`)
})