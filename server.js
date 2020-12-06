const app = require("./src/app")
const PORT = 3030

app.listen(PORT, function(){
    console.log(`This APP is running in the service port ${PORT}`)
})