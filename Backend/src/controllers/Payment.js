const payment = require("../models/payment.model");
const AsyncHandler = require("../utils/AsyncHandler");
const ErrorHandler = require("../utils/errorHandler");
/*
    Must be able to make a payment 
    Must be able to change status of payment

*/
const userPayment = AsyncHandler(async(req,res,next)=>{
    const {method,txnId,amount} = req.body
    const responce = await payment.create({method,txnId,amount})
    res.status(200).json({success:true,responce})
})

module.exports = {userPayment}