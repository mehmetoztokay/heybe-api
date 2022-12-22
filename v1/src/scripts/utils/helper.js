const CryptoJS = require('crypto-js')
const jwt = require('jsonwebtoken')

const passwordToHash = (password) => {
  // return CryptoJS.HmacSHA256(password, process.env.PASSWORD_HASH).toString()
  // Salted SHA256 and SHA1
  return CryptoJS.HmacSHA256(password, CryptoJS.HmacSHA1(password, process.env.PASSWORD_HASH).toString()).toString()
}

const generateAccessToken = (user) => {
  return jwt.sign({ user }, process.env.ACCCESS_TOKEN_SECRET_KEY, { expiresIn: '1w' })
}
const generateRefreshToken = (user) => {
  return jwt.sign({ user }, process.env.REFRESH_TOKEN_SECRET_KEY)
}

module.exports = {
  passwordToHash,
  generateAccessToken,
  generateRefreshToken
}
