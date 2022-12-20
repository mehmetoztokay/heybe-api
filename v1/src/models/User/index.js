const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema(
  {
    name: String,
    surname: String,
    email: String,
    email_verified: Boolean,
    phone_number: String,
    phone_verified: Boolean,
    password: String,
    profile_picture: String,
    theme: Number,
    country_code: Number
    // wallets: ,
    // favorite_wallets: ,
    // transactions: ,
    // account_type: ,
  },
  {
    timestamps: true,
    versionKey: false
  }
)

module.exports = mongoose.model('user', UserSchema)
