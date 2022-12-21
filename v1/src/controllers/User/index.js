// Controllers of Wallet
const { list, insert, loginUser } = require('../../services/User')
const httpStatus = require('http-status')

const { passwordToHash } = require('../../scripts/utils/index')

const index = (req, res) => {
  list()
    .then((response) => res.status(httpStatus.OK).send(response))
    .catch((err) => res.status(httpStatus.INTERNAL_SERVER_ERROR).send('User not found'))
}

const login = (req, res) => {
  const { email, password } = req.body

  loginUser({ email, password: passwordToHash(password) })
    .then((user) => {
      if (!user) return res.status(httpStatus.NOT_FOUND).send({ message: 'User not Found' })
      res.status(httpStatus.OK).send(user)
    })
    .catch((err) => res.status(httpStatus.INTERNAL_SERVER_ERROR).send(err))
}

const create = (req, res) => {
  const { name, surname, email, password } = req.body

  insert({ name, surname, email, password: passwordToHash(password) })
    .then((response) => {
      res.status(httpStatus.CREATED).send(response)
    })
    .catch((err) => {
      res.status(httpStatus.INTERNAL_SERVER_ERROR).send('User not added')
    })
}

module.exports = {
  create,
  index,
  login
}
