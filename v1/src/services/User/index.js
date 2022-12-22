// Services of User
const User = require('../../models/User')

const insert = (userData) => {
  const user = User(userData)

  return user.save()
}

const loginUser = ({ email, password }) => {
  const user = User.findOne({ email, password })
  return user
}

const list = () => {
  const users = User.find({})

  return users
}

module.exports = {
  insert,
  list,
  loginUser
}
