// Listing Wallet Endpoints
const express = require('express')
const router = express.Router()

const { index, create } = require('../controllers/Wallet')
const validate = require('../middlewares/validate')
const WalletValidations = require('../validations/Wallet')

router.get('/', index)
router.route('/').post(validate(WalletValidations.createWalletValidation), create)

module.exports = router
