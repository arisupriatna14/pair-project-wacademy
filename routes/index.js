const router = require('express').Router()
const session = require('express-session')
const bcrypt = require('bcrypt')
const models = require('../models')
const authentication = require('../helpers/auth2')

router.get('/', (req, res) => {
  res.render('index')
})

router.get('/signup', authentication, (req, res) => {
  res.render('signup', {
    error: null
  })
})

router.post('/signup', (req, res) => {
  let imageUpload = req.files.image_profile
  imageUpload.mv(`./public/image/${imageUpload.name}`, (err) => {
    if (err) {
      res.send(err)
    } else {
      models
        .User
        .create({
          first_name: req.body.first_name,
          last_name: req.body.last_name,
          username: req.body.username,
          email: req.body.email,
          image_profile: `/public/image/${imageUpload.name}`,
          password: req.body.password
        })
        .then(dataUser => {
          req.session.account = dataUser
          res.render('./user/index', {
            username: req.session.account.username,
            image: req.session.account.image_profile
          })
        })
        .catch(err => {
          res.render('signup', {
            error: "Email already use!"
          })
        })
    }
  })
})

router.get('/login', authentication, (req, res) => {
  res.render('login', {
    message: null
  })
})

router.post('/home', (req, res) => {
  models
    .User
    .findOne({
      where: {
        email: req.body.email
      }
    })
    .then(userLogin => {
      if (userLogin.role === 'admin') {
        req.session.account = userLogin
        res.render('./admin/index', {
          username: req.session.account.username,
          image: req.session.account.image_profile 
        })
      } else {
        const plainTextPassword = req.body.password
        const hash = userLogin.password
        bcrypt.compare(plainTextPassword, hash, (err, result) => {
          if (result === true) {
            req.session.account = userLogin
            res.redirect('/home')
          } else {
            res.render('login', {
              message: 'Email or password wrong!'
            })
          }
        })
      }
    })
    .catch(err => {
      res.render('login', {
        message: 'Email or password wrong!'
      })
    })
})

router.get('/logout', (req, res) => {
  req.session.destroy((err) => {
    if (err) throw err
    res.redirect('/')
  })
})

module.exports = router