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
    let product = products.find((x) => String(x.id) === String(id))
    return product
  },
}

module.exports = products
