const express = require('express')
const router = express.Router()
const passport = require('@passport-next/passport')
const dotenv = require('dotenv')
const util = require('util')
const url = require('url')
const querystring = require('querystring')

dotenv.config()

// Perform the login, after login Auth0 will redirect to callback
router.get('/login', passport.authenticate('auth0', {
  scope: 'openid email profile',
}), (req, res) => {
  res.redirect('/')
})

// Perform the final stage of authentication and redirect to previously requested URL or '/user'
router.get('/callback', (req, res, next) => {
  passport.authenticate('auth0', (error, user, info) => {
    if (error) {
      return next(error)
    }
    if (!user) {
      return res.redirect('/login')
    }
    req.logIn(user, error => {
      if (error) {
        return next(error)
      }
      const returnTo = req.session.returnTo
      delete req.session.returnTo
      res.redirect(returnTo || '/user')
    })
  })(req, res, next)
})

// Perform session logout and redirect to homepage
router.get('/logout', (req, res) => {
  req.logout()

  const returnTo = req.protocol + '://' + req.hostname
  const port = req.connection.localPort
  if (port !== undefined && port !== 80 && port !== 443) {
    returnTo += ':' + port
  }
  const logoutURL = new url.URL(
    util.format('https://%s/v2/logout', process.env.AUTH0_DOMAIN)
  )
 
  const searchString = querystring.stringify({
    // eslint-disable-next-line camelcase
    client_id: process.env.AUTH0_CLIENT_ID,
    returnTo,
  })
  logoutURL.search = searchString

  res.redirect(logoutURL)
})

module.exports = router
