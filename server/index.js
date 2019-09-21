const dotenv = require('dotenv')
dotenv.config({ debug: process.env.DEBUG })

const express = require('express')
const session = require('express-session')
const next = require('next')

const passport = require('@passport-next/passport')
const Auth0Strategy = require('passport-auth0')
const port = parseInt(process.env.PORT, 10) || 3000
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

// eslint-disable-line max-statements
const strategy = new Auth0Strategy(
  {
    domain: process.env.DOMAIN,
    clientID: process.env.CLIENT_ID,
    clientSecret: process.env.CLIENT_SECRET,
    callbackURL:
      process.env.AUTH0_CALLBACK_URL || 'http://localhost:3000/callback',
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

  server.use(session(sess))

  server.use(passport.initialize())

  server.use(passport.session())

  server.all('*', (req, res) => {
    return handle(req, res)
  })

  server.listen(port, error => {
    if (error) {
      throw error
    }
    console.log(`> Ready on http://localhost:${port}`)
  })
})
