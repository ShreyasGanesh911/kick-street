const cart = require("../models/cart.model");
const order = require("../models/order.model");
const AsyncHandler = require("../utils/AsyncHandler");
const ErrorHandler = require("../utils/errorHandler");

const getAllOrders = AsyncHandler(async(req,res,next)=>{
    const result = await order.find().populate("items.pId user")
    res.status(200).json({Success:true,result})
})
const viewOrders = AsyncHandler(async(req,res,next)=>{
    const {_id} = req.user
    const user = _id
    // const result = await order.find({user}).populate('items.pId').sort('orderDate')
    const result = await order.find({user}).populate('items.pId')
    res.status(200).json({Success:true,result})
})

/*
    In place an order, the user must first do the payment and then the order should be placed
*/
const placeOrder = AsyncHandler(async(req,res,next)=>{
    const{_id} = req.user
    const user = _id
    const {amount,items,payment} = req.body
    console.log(typeof items)
    const result = await order.create({user,items,amount,payment})
    const responce = await result.populate("items.pId payment")
    res.status(200).json({success:true,responce,message:"Order placed"})
})
module.exports = {getAllOrders,viewOrders,placeOrder}