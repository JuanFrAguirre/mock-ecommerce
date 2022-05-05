const mainController = {
  home: (req, res) => {
    if (req.session.user) {
      res.render('pages/home', { user: req.session.user })
    } else res.render('pages/home')
  },
  redirectToHome: (req, res) => {
    res.redirect('/home')
  },
}

module.exports = mainController
