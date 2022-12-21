const CryptoJS = require('crypto-js')

const passwordToHash = (password) => {
  // return CryptoJS.HmacSHA256(password, process.env.PASSWORD_HASH).toString()
  // Salted SHA256 and SHA1
  return CryptoJS.HmacSHA256(password, CryptoJS.HmacSHA1(password, process.env.PASSWORD_HASH).toString())
}

module.exports = {
  passwordToHash
}
