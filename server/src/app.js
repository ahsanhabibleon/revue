const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')

const app = express()
app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(cors())
app.listen(process.env.PORT || 8081)

app.post('/register', (req, res) => {
  res.send({
    message: `hellow ${req.body.name}. Your email address is ${req.body.email} and password is "${req.body.password}"!`
  })
})
