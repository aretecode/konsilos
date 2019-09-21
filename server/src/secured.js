module.exports = () => {
  return (req, res, next) => {
    if (req.user) {
      return next()
    }
    req.session.returnTo = req.originalUrl
    console.warn('__IMPORTANT__ redirect')
    res.redirect('/auth/login#redirectSecured')
  }
}
