const index = (req, res) => {
  res.status(200).send('Wallet Index')
}

const create = (req, res) => {
  res.status(200).send('Wallet Create')
}

module.exports = {
  create,
  index
}
