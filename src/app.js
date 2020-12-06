const express = require("express")
const app = express()

const artesaos = require("./routes/artesaosRoute")

app.use("/artesaos", artesaos)

module.exports = app