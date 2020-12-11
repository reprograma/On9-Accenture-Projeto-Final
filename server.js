/* const app = require("./src/app")
const port = 3001

app.listen(port, function () {
    console.log(`App is running at port: ${port}.`)
})
 */

const app = require('./src/app')
const port = 5000

app.listen(process.env.PORT || port, () => {
    console.log(`Servidor rodando ${port}`)
})