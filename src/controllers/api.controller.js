const auth = require('../utils/auth')
const products = require('../utils/products')
const users = require('../utils/users')

const apiController = {
  home: (req, res) => res.send('Welcome to Mockaroo API!'),
  getProducts: (req, res) => {
    res.send(products.getProducts())
  },
  getProduct: (req, res) => {
    let { id } = req.params
    let product = products.getProductById(id)
    product ? res.send(product) : res.sendStatus(404)
  },
  getUsers: (req, res) => {
    res.send(users.getUsers())
  },
  getUser: (req, res) => {
    let { id } = req.params
    let user = users.getUserById(id)
    user ? res.send(user) : res.sendStatus(404)
  },
  postUser: (req, res) => {
    if (!users.postUser(req.body))
      res.status(400).send('username already registered')
    users.postUser(req.body)
    res.sendStatus(201)
  },
  postLogin: (req, res) => {
    auth.checkUserInDB(req.body) ? res.send('ok') : res.send('user not found')
  },
  postLogout: (req, res) => {},
}

module.exports = apiController
