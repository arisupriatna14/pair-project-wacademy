const express = require('express')
const app = express()
const session = require('express-session')
const fileUpload = require('express-fileupload')
const bcrypt = require('bcrypt')
const port = 3030

const routesIndex = require('./routes/index')

app.set('view engine', 'ejs')
app.set('trust proxy', 1)
app.use(fileUpload())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(express.static(__dirname))
app.use(session({
  secret: 'RAHASIA_BRO',
  resave: true,
  saveUninitialized: true,
}))

app.use('/', routesIndex)

app.listen(port, () => {
  console.log(`Listening on port http://localhost:${port}`)
})