const order = require("../models/order.model");
const AsyncHandler = require("../utils/AsyncHandler");
const ErrorHandler = require("../utils/errorHandler");

const getAllOrders = AsyncHandler(async(req,res,next)=>{
    const result = await order.find()
    res.statsu(200).json({Success:true,result})
})
const viewOrders = AsyncHandler(async(req,res,next)=>{
    const {_id} = req.user
    const user = _id
    const result = await order.find(user)
    res.statsu(200).json({Success:true,result})
})
module.exports = {getAllOrders,viewOrders}