const express = require("express")
const path = require('path')
var cors = require('cors')


var port = process.env.PORT || 3000

const PATH = path.join(__dirname,"../public")
app = express()
app.use(cors()) 
app.use(express.static(PATH))

// app.get('/', (req, res) => {
//     console.log("heyy")
//     res.render('index')
// })


app.listen(port,()=>{
    console.log(`Server live at port: ${port}`)
})