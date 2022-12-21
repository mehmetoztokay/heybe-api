// Listing Wallet Endpoints
const express = require('express')
const router = express.Router()

const { index, create, login } = require('../controllers/User')
const validate = require('../middlewares/validate')
const UserValidations = require('../validations/User')

router.get('/', index)
router.route('/').post(validate(UserValidations.createUserValidation), create)
router.route('/login').post(validate(UserValidations.loginUserValidation), login)

module.exports = router
