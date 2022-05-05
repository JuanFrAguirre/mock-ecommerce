const fetch = require('node-fetch')
const axios = require('axios')

const BASE_URL = 'http://localhost:3030'

const authController = {
  login: (req, res) => {
    res.render('pages/login')
  },
  register: (req, res) => {
    res.render('pages/register')
  },
  postLogin: async (req, res) => {
    try {
      let response = await axios.post(`${BASE_URL}/api/login`, req.body)
      if (response.data === 'ok') {
        req.session.user = req.body.username
        res.redirect('/')
      } else
        res.render('pages/login', {
          error: 'Wrong credentials. Please try again.',
        })
    } catch (error) {
      res.send(error)
    }
  },
  postRegister: (req, res) => {
    let errors = []
    let { username, email, password, confirmPassword } = req.body
    if (username.length < 6 || username.length > 20)
      errors.push('Username must be between 6 and 20 characters long')
    if (email === 'jf@jf') errors.push(`Email ${email} is already registered`)
    if (password !== confirmPassword) errors.push('Passwords do not match')

    errors.length !== 0
      ? res.send({
          message: 'Errors were found',
          errors,
          data: req.body,
        })
      : res.render('pages/login', { username })
  },
}

module.exports = authController
