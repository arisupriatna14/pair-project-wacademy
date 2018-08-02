const models = require('../models')

const authentication = (req, res, next) => {
  if (req.session.account) {
    res.redirect('/home')
  } else {
    next()
  }
}

module.exports = authentication