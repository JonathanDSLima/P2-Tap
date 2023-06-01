const express = require('express')
require('dotenv').config()

const server = express()

const cors = require("cors")

server.use(cors())
server.use(express.json())

const port = process.env.PORT || 8080

server.use('/teste', (req, res)=>{
    console.log('chegou')
})

server.listen(port, ()=> {
    console.log(`Server rodando na porta ${port}`)
})

module.exports = server