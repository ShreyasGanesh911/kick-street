require('dotenv').config()
const Razorpay = require('razorpay');
const crypto = require('crypto')
const AsyncHandler = require("../utils/AsyncHandler");
const ErrorHandler = require("../utils/errorHandler");
const instance = new Razorpay({
    key_id: process.env.KEY_ID,
    key_secret: process.env.KEY_SECRET,
  });
/*
  1) Create an order
  2) Verify the order
*/

const checkOut = AsyncHandler(async(req,res,next)=>{
    const {amount} = req.body
    if(!amount)
        return next(new ErrorHandler("Didn't pass the amount",400))
    const options = {
        amount: amount * 100,  
        currency: "INR",
        receipt: "order_rcptid_11"
      }
      const order = await instance.orders.create(options)
      console.log(order)
      res.status(200).json({success:true,order,key:process.env.KEY_ID})
})

const verifyPayment = AsyncHandler(async(req,res,next)=>{
    const {razorpay_payment_id,razorpay_order_id,razorpay_signature} = req.body
    const body = razorpay_order_id + "|" + razorpay_payment_id;

  const expectedSignature = crypto
    .createHmac("sha256", process.env.key_secret)
    .update(body.toString())
    .digest("hex");

  const isAuthentic = expectedSignature === razorpay_signature;
  if(isAuthentic)
    return res.status(200).json({success:true,message:"Done payment"})
  else res.status(400).json({success:false,message:"invalid"})
    res.status(200).json({success:true,message:"Test",body})
})
module.exports = {checkOut,verifyPayment}