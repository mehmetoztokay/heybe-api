// Listing Wallet Endpoints
const express = require('express')
const router = express.Router()

const { index, create } = require('../controllers/User')
const validate = require('../middlewares/validate')
const UserValidations = require('../validations/User')

router.get('/', index)
router.route('/').post(validate(UserValidations.createUserValidation), create)

module.exports = router
