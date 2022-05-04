const apiController = require('../controllers/api.controller')

const apiRouter = require('express').Router()

apiRouter
  .get('/', apiController.home)
  .get('/products', apiController.getProducts)
  .get('/products/:id', apiController.getProduct)

module.exports = apiRouter
