const express = require("express")
const path = require('path')
const http = require('http')


const port = process.env.PORT || 3000

const PATH = path.join(__dirname,"../public")

app = express()
const server = http.createServer(app)
app.use(express.static(PATH))

server.listen(3000,()=>{
    console.log(`Server live at port: ${port}`)
})