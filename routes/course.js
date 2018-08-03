const router = require('express').Router()
const session = require('express-session')
const bcrypt = require('bcrypt')
const models = require('../models')
const authentication = require('../helpers/auth')
const Op = require('sequelize').Op
const sequelize = require('sequelize')

router.get('/:id', authentication, (req, res) => {
  models.TakeCourse.findOne({
    where: {
      CourseId: req.params.id,
      UserId: req.session.account.id   
    }
  })
    .then(data => {
      if (data.status === true) {
        models
          .Course
          .findOne({
            where: {
              id: req.params.id
            },
            include: {
              model: models.Tutorial,
            },
            order: [
              [
                {model: models.Tutorial},
                'id',
                'ASC'
              ]
            ]
          })
          .then(courseById => {
            res.render('./user/tutorials', {
              username: req.session.account.username,
              image: req.session.account.image_profile,
              dataTutorial: courseById
            })
          })
          .catch(err => {
            res.json(err)
          })
      }
      // res.json(data)
    })
    .catch(err => {
      models.TakeCourse.create({
        UserId: req.session.account.id,
        CourseId: req.params.id,
        status: true
      })
      .then(() => {
        // res.redirect('/home')
        models
          .Course
          .findOne({
            where: {
              id: req.params.id
            },
            include: {
              model: models.Tutorial
            },
            order: [
              [
                {model: models.Tutorial},
                'id',
                'ASC'
              ]
            ]
          })
          .then(courseById => {
            res.render('./user/tutorials', {
              username: req.session.account.username,
              image: req.session.account.image_profile,
              dataTutorial: courseById
            })
            // res.json(courseById)
          })
          .catch(err => {
            res.json(err)
          })
      })
    })
})

router.get('/:courseId/tutorial/:tutorialId', authentication, (req, res) => {
  models.Tutorial.update({
    status: true
  }, {
    where: {
      id: req.params.tutorialId
    }
  })
  
  models
    .Tutorial
    .findOne({
      where: {
        id: req.params.tutorialId
      },
    })
    .then(detailTutorial => {
      models.TakeCourse.update({
        total_progress: detailTutorial.nilai_tutorial
      }, {
        where: {
          CourseId: req.params.courseId,
          UserId: req.session.account.id
        }
      })
      models
        .Course
        .findById(req.params.courseId, {
          include: {
            model: models.Tutorial
          }
        })
        .then(data => {
          res.render('./user/tutorial_details', {
            username: req.session.account.username,
            image: req.session.account.image_profile,
            detailTutorial: detailTutorial,
            courseId: req.params.courseId,
            lastId: data.Tutorials.length
          })
        })
        .catch(err => {
          res.json(err)
        })
    })
    .catch(err => {
      res.json(err)
    })

    
})

module.exports = router