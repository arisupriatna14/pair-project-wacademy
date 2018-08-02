const router = require('express').Router()
const session = require('express-session')
const bcrypt = require('bcrypt')
const models = require('../models')
const authentication = require('../helpers/auth')
const Op = require('sequelize').Op

router.get('/', authentication, (req, res) => {
  models
    .TakeCourse
    .findAll({
      include: [
        {
          model: models.Course,
          include: [
            {
              model: models.Tutorial
            },
          ]
        },
      ],
      where: {
        UserId: req.session.account.id
      }
    })
    .then(data => {
      // res.json(data)
      res.render('./user/my_course', {
        username: req.session.account.username,
        image: req.session.account.image_profile,
        data: data
      })
    })
    .catch(err => {
      res.json(err)
    })
})

module.exports = router