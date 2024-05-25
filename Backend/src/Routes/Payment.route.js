const express = require('express')
const userAuth = require('../middlewares/Auth.customer')
const { userPayment, allPayments } = require('../controllers/Payment')
const adminAuth = require('../middlewares/Auth.admin')
const paymentRouter = express.Router()

paymentRouter.post('/pay',userAuth,userPayment)
paymentRouter.get('/all',adminAuth,allPayments)
module.exports = paymentRouter