const router = require('express').Router()
const session = require('express-session')

router.get('/', (req, res) => {
  res.render('index')
})

router.get('/signup', (req, res) => {
  res.render('signup')
})

router.post('/signup', (req, res) => {
  req.session.account = req.body
  console.log(req.session.account)
  res.json(req.body)
})

router.get('/login', (req, res) => {
  res.render('login')
})

router.post('/login', (req, res) => {
  console.log(req.session)
  res.json(req.body)
})

module.exports = router