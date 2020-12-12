const app = require("./src/app") 
const porta = 8080

app.listen(process.env.PORT || porta,function(){
    console.log('app rodando na porta '+porta)
})

//