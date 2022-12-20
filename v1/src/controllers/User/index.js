// Controllers of Wallet
const { list, insert } = require('../../services/User')
const httpStatus = require('http-status')

const index = (req, res) => {
  list()
    .then((response) => res.status(httpStatus.OK).send(response))
    .catch((err) => res.status(httpStatus.INTERNAL_SERVER_ERROR).send('User not found'))
}

const create = (req, res) => {
  insert(req.body)
    .then((response) => {
      res.status(httpStatus.CREATED).send(response)
    })
    .catch((err) => {
      res.status(httpStatus.INTERNAL_SERVER_ERROR).send('User not added')
    })
}

module.exports = {
  create,
  index
}
