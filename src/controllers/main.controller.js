const mainController = {
  home: (req, res) => {
    res.render('pages/home')
  },
  redirectToHome: (req, res) => {
    res.redirect('/home')
  },
}

module.exports = mainController
