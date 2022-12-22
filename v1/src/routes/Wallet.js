// Listing Wallet Endpoints
const express = require('express')
const router = express.Router()

const { index, create } = require('../controllers/Wallet')
const validate = require('../middlewares/validate')
const authenticate = require('../middlewares/authenticate')
const WalletValidations = require('../validations/Wallet')

router.route('/').get(authenticate, index)
router.route('/').post(authenticate, validate(WalletValidations.createWalletValidation), create)

module.exports = router
