const express = require('express')
const userAuth = require('../middlewares/Auth.customer')
const { userPayment } = require('../controllers/Payment')
const paymentRouter = express.Router()

paymentRouter.post('/pay',userAuth,userPayment)
module.exports = {paymentRouter}