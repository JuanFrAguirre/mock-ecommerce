const cartRouter = require('express').Router()
const cartController = require('../controllers/cart.controller')

cartRouter.get('/', cartController.cart)

module.exports = cartRouter
