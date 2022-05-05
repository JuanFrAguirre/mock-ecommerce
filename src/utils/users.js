const fs = require('fs')
const data = require('./data')

const users = {
  getUsers: function () {
    return data.readJSON().users
  },
  getUserById: function (id) {
    let users = this.getUsers()
    return users.find((user) => String(user.id) === String(id))
  },
  postUser: function (userData) {
    let store = data.readStore()
    if (store.users.find((user) => user.username === userData.username)) return
    let maxId = data.getMaxId(store.users)
    store.users.push({ id: ++maxId, ...userData })
    data.writeJSON(store)
    return store.users
  },
}

module.exports = users
