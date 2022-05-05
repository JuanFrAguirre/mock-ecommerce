const apiController = require('../controllers/api.controller')

const apiRouter = require('express').Router()

apiRouter
  .get('/', apiController.home)
  .get('/products', apiController.getProducts)
  .get('/products/:id', apiController.getProduct)
  .get('/users', apiController.getUsers)
  .get('/users/:id', apiController.getUser)

apiRouter
  .post('/users', apiController.postUser)
  .post('/login', apiController.postLogin)

module.exports = apiRouter
