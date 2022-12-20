// Services of Wallet
const Wallet = require('../../models/Wallet')
const insert = (walletData) => {
  const wallets = Wallet(walletData)

  return wallets.save()
}

const list = () => {
  const wallets = Wallet.find({})
  return wallets
}

module.exports = {
  insert,
  list
}
