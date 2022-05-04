const router = require('express').Router()
const mainController = require('../controllers/main.controller')
const apiRouter = require('./api.routes')
const authRouter = require('./auth.routes')
const cartRouter = require('./cart.routes')
const productsRouter = require('./products.routes')

router.use('/api', apiRouter)
router.use('/products', productsRouter)
router.use('/auth', authRouter)
router.use('/cart', cartRouter)

router.get('/', mainController.redirectToHome).get('/home', mainController.home)

module.exports = router
