import 'dotenv/config'
import Razorpay from 'razorpay';
import crypto from 'crypto';
import order from "../models/order.model.js";
import AsyncHandler from "../utils/AsyncHandler.js";
import ErrorHandler from "../utils/errorHandler.js";
import { NextFunction,Response,Request } from 'express';
type User = {
  _id: string
  name: string
  email: string,
  phone: number
  type: string
}
interface RequestWithUser extends Request {
  user: User
}
const instance = new Razorpay({
    key_id: process.env.KEY_ID || "",
    key_secret: process.env.KEY_SECRET || " ",
  });
/*
  1) Create an order
  2) Verify the order
*/

export const checkOut = AsyncHandler(async(req:RequestWithUser,res:Response,next:NextFunction)=>{
    const {amount,cart,address} = req.body
    const {_id} = req.user
    const user = _id
    if(!amount)
        return next(new ErrorHandler("Didn't pass the amount",400))
    const options = {
        amount: amount * 100,  
        currency: "INR",
        receipt: "order_rcptid_11"
      }
      const createOrder = await instance.orders.create(options)
      const placeOrder = await order.create({user,items:cart,amount,address:address})
      const orderId = placeOrder._id
      res.status(200).json({success:true,createOrder,key:process.env.KEY_ID,orderId})
})

export const verifyPayment = AsyncHandler(async(req:Request,res:Response)=>{
    const {razorpay_payment_id,razorpay_order_id,razorpay_signature} = req.body
    let {orderId} = req.query
    const body = razorpay_order_id + "|" + razorpay_payment_id;

  const expectedSignature = crypto
    .createHmac("sha256", process.env.key_secret || "")
    .update(body.toString())
    .digest("hex");

  const isAuthentic = expectedSignature === razorpay_signature;
  /*
    1) After payment verification, data must be logged
    2) Send an id with the link
    3) Use the id to fetch the data from the DB about the order
  */

    if(isAuthentic){
      await order.findByIdAndUpdate({_id:orderId},{status:"Placed"})
      return res.status(200).redirect(`http://localhost:3000/checkout/success/?payment_id=${orderId}`)
    }
    await order.deleteOne({_id:orderId})
  res.status(400).json({success:false,message:"invalid"})

   
})