const express = require('express')
const userAuth = require('../middlewares/Auth.customer')
const { userPayment, allPayments } = require('../controllers/Payment')
const adminAuth = require('../middlewares/Auth.admin')
const { checkOut, verifyPayment } = require('../controllers/Razor')
const paymentRouter = express.Router()

paymentRouter.post('/pay',userAuth,userPayment)
paymentRouter.get('/all',adminAuth,allPayments)
paymentRouter.post('/checkout',checkOut) // Add userAuth
paymentRouter.post('/verify',verifyPayment) // Add userAuth

module.exports = paymentRouter