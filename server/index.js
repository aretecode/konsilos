const dotenv = require('dotenv')
dotenv.config({ debug: process.env.DEBUG })

const IS_MISSING_REQUIRED_ENV_VARIABLES_FOR_AUTH0 =
  process.env.CLIENT_ID === undefined ||
  process.env.CLIENT_SECRET === undefined ||
  process.env.DOMAIN === undefined
const port = parseInt(process.env.PORT, 10) || 3000
const dev = process.env.NODE_ENV !== 'production'

const express = require('express')
const session = require('express-session')
const next = require('next')

const app = next({ dev })
const handle = app.getRequestHandler()

function setupWithAuth() {
  const passport = require('@passport-next/passport')
  const Auth0Strategy = require('passport-auth0')
  const userInViews = require('./userInView')
  const authRouter = require('./auth')
  const userRouter = require('./userInView')

  // eslint-disable-line max-statements
  const strategy = new Auth0Strategy(
    {
      domain: process.env.DOMAIN,
      clientID: process.env.CLIENT_ID,
      clientSecret: process.env.CLIENT_SECRET,
      callbackURL:
        process.env.AUTH0_CALLBACK_URL || 'http://localhost:3000/auth/callback',
    },
    (accessToken, refreshToken, extraParams, profile, done) => {
      return done(null, profile)
    }
  )

  passport.use(strategy)

  passport.serializeUser((user, done) => {
    return done(null, user)
  })

  passport.deserializeUser((user, done) => {
    return done(null, user)
  })

  app.prepare().then(() => {
    const server = express()

    const sess = {
      secret: 'CodingIsAwesome',
      cookie: {},
      resave: false,
      saveUninitialized: true,
    }

    if (server.get('env') === 'production') {
      sess.cookie.secure = true
    }

    server
      .use(session(sess))
      .use(passport.initialize())
      .use(passport.session())
      .use(userInViews())
      .use('/auth', authRouter)
      .get('/user', userRouter)
      .all('*', (req, res) => {
        return handle(req, res)
      })

      .listen(port, error => {
        if (error) {
          throw error
        }
        console.log(`> Ready on http://localhost:${port}`)
      })
  })
}

function setupWithoutAuth() {
  console.warn(`
MISSING .ENV FILE! Required values are:
"""
CLIENT_ID=
CLIENT_SECRET=
DOMAIN=
"""
`)

  app.prepare().then(() => {
    const server = express()
    server
      .all('*', (req, res) => {
        return handle(req, res)
      })
      .listen(port, error => {
        if (error) {
          throw error
        }
        console.log(`> Ready on http://localhost:${port}`)
      })
  })
}

if (IS_MISSING_REQUIRED_ENV_VARIABLES_FOR_AUTH0 === true) {
  setupWithoutAuth()
} else {
  setupWithAuth()
}
