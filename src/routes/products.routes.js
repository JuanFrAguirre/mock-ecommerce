const productsRouter = require('express').Router()
const productsController = require('../controllers/products.controller')

productsRouter
  .get('/', productsController.home)
  .get('/:id', productsController.product)

module.exports = productsRouter
