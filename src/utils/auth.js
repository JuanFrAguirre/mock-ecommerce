const data = require('./data')

const auth = {
  checkUserInDB: function (userData) {
    let users = data.readStore().users
    return users.find(
      (user) =>
        user.username === userData.username &&
        user.password === userData.password
    )
  },
}

module.exports = auth
