const fs = require('fs')
const path = require('path')

const storeJSON = path.join(process.cwd(), 'data', 'store.json')

const data = {
  readJSON: function (routes) {
    return JSON.parse(fs.readFileSync(routes, 'utf-8'))
  },
  readStore: function () {
    return this.readJSON(storeJSON)
  },
  writeJSON: function (data) {
    fs.writeFileSync(storeJSON, JSON.stringify(data, null, 2))
  },
  getMaxId: function (array) {
    return array.map((x) => Number(x.id)).reduce((a, b) => (a > b ? a : b))
  },
}

module.exports = data
