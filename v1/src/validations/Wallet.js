const Joi = require('joi')

const createWalletValidation = Joi.object({
  name: Joi.string().required().min(3).max(30)
})

module.exports = {
  createWalletValidation
}
