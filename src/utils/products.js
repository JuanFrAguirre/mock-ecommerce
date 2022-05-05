const fs = require('fs')
const path = require('path')

const products = {
  getProducts: function () {
    return JSON.parse(
      fs.readFileSync(path.join(process.cwd(), 'data', 'store.json'), 'utf-8')
    ).products
  },
  getProductById: function (id) {
    let products = this.getProducts()
    return products.find((product) => String(product.id) === String(id))
  },
}

module.exports = products
