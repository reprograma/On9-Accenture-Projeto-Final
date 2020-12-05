const express = require ("express")
const app = express ()

const prosRoutes = require ("./routes/prosRoutes")

app.use("/pros", prosRoutes)

module.exports = app