const Mongoose = require('mongoose')

const WalletSchema = new Mongoose.Schema(
  {
    name: String,
    description: String
  },
  {
    timestamps: true,
    versionKey: false
  }
)

module.exports = Mongoose.model('wallet', WalletSchema)
