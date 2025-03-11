//Import express
import express from 'express'

//Instantiate express
const app = express()

//Declare port number
const port = 3000

//Get request to /test route and send JSON
app.get('/test', (req,res) => {
    res.json({message: 'Express is working! Write your full name'})
})

//Start server
app.listen(port, () => {
   console.log( `Server running on port : ${port}`)
})