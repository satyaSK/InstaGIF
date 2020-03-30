const express = require("express")
const path = require('path')

const port = process.env.PORT || 3000

const PATH = path.join(__dirname,"../public")
app = express()

app.use(express.static(PATH))


app.listen(3000,()=>{
    console.log(`Server live at port: ${port}`)
})