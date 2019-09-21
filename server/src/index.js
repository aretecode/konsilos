const dotenv = require('dotenv')
dotenv.config({ debug: process.env.DEBUG })
const port = parseInt(process.env.PORT, 10) || 3000

const express = require('express')
const session = require('express-session')

const passport = require('passport')
const Auth0Strategy = require('passport-auth0')
const userInViews = require('./userInView')
const authRouter = require('./auth')
const userRouter = require('./userInView')

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

const server = express()

const sess = {
  secret: 'CodingIsAwesome',
  cookie: {
    sameSite: false,
  },
  resave: false,
  saveUninitialized: true,
}

if (server.get('env') === 'production') {
  sess.cookie.secure = true
}

const app = server
  .use(session(sess))
  .use(passport.initialize())
  .use(passport.session())
  .use(userInViews())
  .use('/auth', authRouter)
  .get('/user', userRouter)

/**
 * @see https://github.com/auth0/passport-auth0/issues/70
 */
app.set('trust proxy', 1)

/**
 * ==== handling for zeit now & local =====
 */

if (process.env.IS_NOW === undefined) {
  app.listen(3000, () => {
    console.log(`> listening on https://localhost:${port}`)
  })
}

module.exports = app
