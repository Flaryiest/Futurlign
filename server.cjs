require("dotenv").config()
const express = require("express")
const app = express()
const port = process.env.PORT || 5000
app.get("/api/data", (req, res) => {
    console.log(req.body)
})

app.listen(port, () => {
    console.log("Listening on port: " + String(port))
})