const authRouter = require('express').Router()
const authController = require('../controllers/auth.controller')

authRouter
  .get('/login', authController.login)
  .get('/register', authController.register)
  .post('/login', authController.postLogin)
  .post('/register', authController.postRegister)

module.exports = authRouter
