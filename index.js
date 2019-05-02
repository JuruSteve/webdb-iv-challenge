const express = require('express')
const helmet = require('helmet')
const server = express()
const dishesRouter = require('./dishes-router')

server.use(express.json())
server.use(helmet())

server.use('api/dishes/', dishesRouter)

const port = 3300
server.listen(port, function () {
  console.log(`\n=== Web API Listening on http://localhost:${port} ===\n`)
})
