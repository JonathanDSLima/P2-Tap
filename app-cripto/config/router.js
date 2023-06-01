const express = require('express')
const router = express.Router()

const transactionController = require('../controller/transactionController')

transactionController(router)

module.exports = router