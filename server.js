const app = require("./src/app") 
const porta = 3001

app.listen(process.env.PORT || porta,function(){
    console.log('app rodando na porta '+porta)
})

//