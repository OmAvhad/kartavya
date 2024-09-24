const express = require('express')
const dotenv = require('dotenv')
dotenv.config()
const db = require('./db/db')

const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`App listening on port ${port}`)
})

module.exports = app