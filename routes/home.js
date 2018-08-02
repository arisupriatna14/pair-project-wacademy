const router = require('express').Router()
const session = require('express-session')
const bcrypt = require('bcrypt')
const models = require('../models')
const authentication = require('../helpers/auth')

router.get('/', authentication, (req, res) => {
  models
    .Course
    .findAll()
    .then(dataCourse => {
      res.render('./user/index', {
        username: req.session.account.username,
        image: req.session.account.image_profile,
        data: dataCourse
      })
    })
})

module.exports = router