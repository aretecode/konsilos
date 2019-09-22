const express = require('express')
const secured = require('./secured')
const router = express.Router()

router.get('*', secured(), (req, res, next) => {
  const user = req.user || {}
  const { _raw, _json, ...userProfile } = user
  res.status(200).json(userProfile)
})

module.exports = router
