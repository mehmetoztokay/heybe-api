const Mongoose = require('mongoose')
const logger = require('../../scripts/loggers/Wallet')

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

// If save is successful, log the document
// You can also use the pre hook to log the document before saving
// You can also add to database
WalletSchema.post('save', (doc) => {
  // logger.log({
  //   level: 'info',
  //   message: doc
  // })
})

module.exports = Mongoose.model('wallet', WalletSchema)
