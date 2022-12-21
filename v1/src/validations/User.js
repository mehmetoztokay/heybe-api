const Joi = require('joi')

const createUserValidation = Joi.object({
  name: Joi.string().required().min(2).max(30),
  surname: Joi.string().required().min(3).max(30),
  email: Joi.string().required().min(5).max(30),
  password: Joi.string().required().min(3).max(30)
  // email_verified: Joi.boolean().required(),
  // phone_number: Joi.string().required().min(3).max(30),
  // phone_verified: Joi.boolean().required(),
  // profile_picture: Joi.string().required().min(3).max(30),
  // theme: Joi.string().required().min(0).max(2),
  // country_code: Joi.number().required().min(0).max(999)
})

const loginUserValidation = Joi.object({
  email: Joi.string().required().min(5).max(30),
  password: Joi.string().required().min(3).max(30)
})

module.exports = {
  createUserValidation,
  loginUserValidation
}
