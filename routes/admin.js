const express = require('express')
const router = express.Router()
const Model = require('../models')
const session = require('express-session')
const authentication = require('../helpers/auth')

//HOME ADMIN ============================================================================
router.get('/', authentication, (req, res) => {
    Model.Course.findAll({order:[["createdAt", "DESC"]]})
    .then((course) => {
        // res.json(course)
        res.render('./admin/index', {
            course: course, 
            err: null,
            username: req.session.account.username,
            image: req.session.account.image_profile
        })
    })
})

//HOME COURSE ============================================================================
router.get('/course', (req, res) => {
    Model.Course.findAll({order:[["createdAt", "DESC"]]})
    .then((course) => {
        // res.json(course)
        res.render('./admin/course', {course: course, err: null})
    })
    .catch((err) => {
        res.render('./admin/course', {course: [], err: err})
    });
})

router.post('/course', (req, res) => {
    // res.send('masuk create')
    let imageUpload = req.files.image
    imageUpload.mv(`./public/image/${imageUpload.name}`, (err) => {
        Model.Course.create({
            title: req.body.title,
            image: `/public/image/${imageUpload.name}`,
            rating: req.body.rating,
            description: req.body.description,
            detail_description: req.body.detail_description,
            level: req.body.level
        })
        .then(() => {
            // res.redirect('/home/admin')
            Model.Course.findAll({order:[["createdAt", "DESC"]]})
            .then((course) => {
                res.render('./admin/course', {course: course, err: null})
            })
        })
        .catch((err) => {
            Model.Course.findAll({order:[["createdAt", "DESC"]]})
            .then((course) => {
                res.render('./admin/course', {course: course, err: err})
            })
        });
    })
    
})

router.get('/course/:id/edit', (req, res) => {
    // res.send('masuk edit')
    Model.Course.findOne({where: {id: req.params.id}})
    .then((course) => {
        // res.json(course)
        res.render('./admin/editCourse', {course: course, err: null})
    })
    .catch((err) => {
        res.render('./admin/editCourse', {course: null, err: err})
    });
})

router.post('/course/:id/update', (req, res) => {
    Model.Course.update(
    {
        title: req.body.title,
        image: req.body.image,
        rating: req.body.rating,
        description: req.body.description,
        detail_description: req.body.detail_description,
        level: req.body.level
    }, 
    {where: {id: req.params.id}})
    .then(() => {
        res.redirect('/home/admin/course')
    })
    .catch((err) => {
        Model.Course.findOne({where: {id: req.params.id}})
        .then((course) => {
            // res.json(course)
            res.render('./admin/editCourse', {course: course, err: err})
        })
    })
})

router.get('/course/:id/delete', (req, res) => {
    Model.Course.destroy({where: {id: req.params.id}})
    .then(() => {
        res.redirect('/home/admin/course')
    })
})

// //HOME TUTORIAL ============================================================================
router.get('/course/:id/tutorial', (req, res) => {
    Model.Course.findById(req.params.id,{
        include: [Model.Tutorial]
    })
    .then((course) => {
        // res.json(course)
        res.render('./admin//tutorial', {course: course, err: null})
    })
    .catch((err) => {
        res.render('./admin/tutorial', {course: course, err: err})
    });
})

router.post('/course/:id/tutorial', (req, res) => {
    Model.Tutorial.create({
        tutorial_name: req.body.tutorial_name,
        description: req.body.description,
        nilai_tutorial:req.body.nilai_tutorial,
        CourseId: req.params.id
    })
    .then(() => {
        Model.Course.findById(req.params.id,{
            include: [Model.Tutorial]
        })
        .then((course) => {
            res.render('./admin/tutorial', {course: course, err: null})
        })
    })
    .catch((err) => {
        Model.Course.findById(req.params.id,{
            include: [Model.Tutorial]
        })
        .then((course) => {
            res.render('./admin/tutorial', {course: course, err: err})
        })
    });
})

router.get('/course/tutorial/edit/:id', (req, res) => {
    // res.send('masuk edit')
    Model.Tutorial.findById(req.params.id)
    .then((tutorial) => {
        // res.json(tutorial)
        res.render('./admin/editTutorial', {tutorial: tutorial, err: null})
    })
    .catch((err) => {
        res.render('./admin/editTutorial', {tutorial: null, err: err})
    });
})

router.post('/course/tutorial/edit/:id', (req, res) => {
    Model.Tutorial.update(
    {
        tutorial_name: req.body.tutorial_name,
        description: req.body.description,
        nilai_tutorial:req.body.nilai_tutorial,
    }, 
    {where: {id: req.params.id}})
    .then(() => {
        res.redirect(`/home/admin/course/`)
    })
    .catch((err) => {
        Model.Tutorial.findById(req.params.id)
        .then((tutorial) => {
            // res.json(tutorial)
            res.render('./admin/editTutorial', {tutorial: tutorial, err: null})
        })
    })
})

router.get('/course/:id/tutorial/:tutorialId', (req,res) => {
    Model.Tutorial.destroy({where: {id: req.params.tutorialId}})
    .then(() => {

       res.redirect('/home/admin/course')
    })
})

// //HOME CHALLENGE ============================================================================
router.get('/course/:id/challenge', (req, res) => {
    Model.Course.findById(req.params.id,{
        include: [Model.Challenge]
    })
    .then((course) => {
        // res.json(course)
        res.render('./admin/challenge', {course: course, err: null})
    })
    .catch((err) => {
        res.render('./admin/challenge', {course: course, err: err})
    });
})

router.post('/course/:id/challenge', (req, res) => {
    Model.Challenge.create({
        soal: req.body.soal,
        jawaban: req.body.jawaban,
        nilai_challenge:req.body.nilai_challenge,
        CourseId: req.params.id
    })
    .then(() => {
        Model.Course.findById(req.params.id,{
            include: [Model.Challenge]
        })
        .then((course) => {
            // res.json(course)
            res.render('./admin/challenge', {course: course, err: null})
        })
    })
    .catch((err) => {
        Model.Course.findById(req.params.id,{
            include: [Model.Challenge]
        })
        .then((course) => {
            res.render('./admin/challenge', {course: course, err: err})
        })
    });
})

router.get('/course/challenge/edit/:id', (req, res) => {
    // res.send('masuk edit')
    Model.Challenge.findById(req.params.id)
    .then((challenge) => {
        // res.json(tutorial)
        res.render('./admin/editChallenge', {challenge: challenge, err: null})
    })
    .catch((err) => {
        res.render('./admin/editChallenge', {challenge: null, err: err})
    });
})

router.post('/course/challenge/edit/:id', (req, res) => {
    Model.Challenge.update(
    {
        soal: req.body.soal,
        jawaban: req.body.jawaban,
        nilai_challenge:req.body.nilai_challenge,
    }, 
    {where: {id: req.params.id}})
    .then(() => {
        res.redirect(`/home/admin/course/`)
    })
    .catch((err) => {
        Model.Challenge.findById(req.params.id)
        .then((challenge) => {
            // res.json(tutorial)
            res.render('./admin/editChallenge', {challenge: challenge, err: null})
        })
    })
})

router.get('/course/:id/challenge/:challengeId', (req,res) => {
    Model.Challenge.destroy({where: {id: req.params.challengeId}})
    .then(() => {
       res.redirect('/home/admin/course')
    })
})

// //HOME DETAIL ============================================================================
router.get('/course/:id/detail', (req, res) => {
    Model.Course.findById(req.params.id,{
        include: [Model.Challenge, Model.Tutorial]
    })
    .then((course) => {
        // res.json(course)
        res.render('./admin/detail', {course: course, err: null})
    })
    .catch((err) => {
        res.render('./admin/detail', {course: course, err: err})
    });
})

module.exports = router