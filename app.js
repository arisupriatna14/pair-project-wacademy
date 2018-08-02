const express = require('express')
const app = express()
const session = require('express-session')
const fileUpload = require('express-fileupload')
const bcrypt = require('bcrypt')
const port = 3030

const routesIndex = require('./routes/index')
const routesHome = require('./routes/home')
const routesCourse = require('./routes/course')
const routesMyCourse = require('./routes/mycourse')

app.locals.statusCompleted = require('./helpers/status')

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
app.use('/home', routesHome)
app.use('/course', routesCourse)
app.use('/my-course', routesMyCourse)

app.listen(port, () => {
  console.log(`Listening on port http://localhost:${port}`)
})