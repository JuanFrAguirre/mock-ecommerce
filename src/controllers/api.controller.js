const products = require('../utils/products')

const apiController = {
  home: (req, res) => res.send('Welcome to Mockaroo API!'),
  getProducts: (req, res) => {
    res.send(products.getProducts())
  },
  getProduct: (req, res) => {
    let id = req.params.id
    let product = products.getProductById(id)
    product
      ? res.send(product)
      : res.status(404).send(`Product with ID ${id} not found.`)
  },
}

module.exports = apiController
