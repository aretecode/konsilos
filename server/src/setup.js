const dotenv = require('dotenv')
dotenv.config({ debug: process.env.DEBUG })

const port = +process.env.PORT || 3000
const express = require('express')
const session = require('express-session')
const passport = require('passport')
const Auth0Strategy = require('passport-auth0')
const userInViews = require('./userInView')
const authRouter = require('./auth')
const userRouter = require('./user')

// eslint-disable-line max-statements
const strategyConfig = {
  domain: process.env.DOMAIN,
  clientID: process.env.CLIENT_ID,
  clientSecret: process.env.CLIENT_SECRET,
  callbackURL:
    process.env.AUTH0_CALLBACK_URL || `http://localhost:${port}/auth/callback`,
}

const strategy = new Auth0Strategy(
  strategyConfig,
  (accessToken, refreshToken, extraParams, profile, done) => done(null, profile)
)

passport.use(strategy)

passport.serializeUser((user, done) => {
  return done(null, user)
})

passport.deserializeUser((user, done) => {
  return done(null, user)
})

const sessionConfig = {
  secret: process.env.COOKIE_SECRET,
  cookie: {
    sameSite: false,
  },
  resave: false,
  saveUninitialized: true,
}

// copy to `require`
// const exported = {
//   port,
//   express,
//   session,
//   sessionConfig,
//   passport,
//   userInViews,
//   userRouter,
//   authRouter,
//   strategy,
// }
exports.port = port
exports.express = express
exports.session = session
exports.sessionConfig = sessionConfig
exports.passport = passport
exports.userInViews = userInViews
exports.userRouter = userRouter
exports.authRouter = authRouter
exports.strategy = strategy
