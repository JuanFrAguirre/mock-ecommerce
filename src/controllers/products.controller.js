const products = require('../utils/products')

const productsController = {
  home: (req, res) => {
    let data = products.getProducts()

    res.render('pages/products', { products: data })
  },
  product: (req, res) => {
    let product = products.getProductById(req.params.id)
    product
      ? res.render('pages/product', { product })
      : res.send(`Sorry, we couldn't find the product you were looking for!`)
  },
}

module.exports = productsController
