const next = require('next')
const app = next({ dev: process.env.NODE_ENV !== 'production' })
const handle = app.getRequestHandler()

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
} = require('../src/setup')

app.prepare().then(() => {
  const server = express()

  server
    /**
   * @see https://github.com/auth0/passport-auth0/issues/70
   */
    .set('trust proxy', 1)
    .use(session(sessionConfig))
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

  
  // app.set('trust proxy', 1)
  // server.
})
