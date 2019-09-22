const {
  port,
  express,
  session,
  sessionConfig,
  passport,
  userInViews,
  userRouter,
  authRouter,
  strategy,
} = require('./setup')

const server = express()
if (server.get('env') === 'production') {
  sessionConfig.cookie.secure = true
}

const app = server
  .use(session(sessionConfig))
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
