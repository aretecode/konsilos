const express = require('express')
const secured = require('./secured')
const router = express.Router()

/* GET user profile. */
router.get('/', secured(), (req, res, next) => {
  const { ...userProfile } = req.user
  res.status(200).json(userProfile)
})

module.exports = router
