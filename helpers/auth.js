const models = require('../models')

const authentication = (req, res, next) => {
  if (req.session.account === undefined) {
    res.redirect('/login')
  } else {
    next()
  }
}

module.exports = authentication