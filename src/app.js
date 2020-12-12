const express = require("express")
const app = express()
const cors = require("cors")

app.use(cors())
app.use(express.json())

const index = require("./routes/index")
const financas = require("./routes/financasRoute")

app.use("/", index)
app.use("/investimentos", financas)

module.exports = app 