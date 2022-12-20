const Joi = require('joi')

const createUserValidation = Joi.object({
  name: Joi.string().required().min(2).max(30),
  surname: Joi.string().required().min(3).max(30)
  // email: Joi.string().required().min(8).max(30),
  // email_verified: Joi.boolean().required(),
  // phone_number: Joi.string().required().min(3).max(30),
  // phone_verified: Joi.boolean().required(),
  // password: Joi.string().required().min(3).max(30),
  // profile_picture: Joi.string().required().min(3).max(30),
  // theme: Joi.string().required().min(0).max(2),
  // country_code: Joi.number().required().min(0).max(999)
})

module.exports = {
  createUserValidation
}
