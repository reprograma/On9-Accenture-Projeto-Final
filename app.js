const express = require("express")
const app = express()
const cors = require("cors")
const db = require('./models/repository')


db.connect()
app.use(cors())
app.use(express.json())

const index = require("./routes/index")
const law = require("./routes/lawsRoute")

app.use("/", index)
app.use("/laws", laws)

module.exports = app