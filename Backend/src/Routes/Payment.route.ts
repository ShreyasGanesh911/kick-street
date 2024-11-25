import express from 'express'
import userAuth from '../middlewares/Auth.customer.js'
import { userPayment, allPayments } from '../controllers/Payment.js'
import adminAuth from '../middlewares/Auth.admin.js'
import { checkOut, verifyPayment } from '../controllers/Razor.js'
const paymentRouter = express.Router()

paymentRouter.post('/pay',userAuth,userPayment)
paymentRouter.get('/all',adminAuth,allPayments)
paymentRouter.post('/checkout',userAuth,checkOut) // Add userAuth
paymentRouter.post('/verify',userAuth,verifyPayment) // Add userAuth

export default paymentRouter