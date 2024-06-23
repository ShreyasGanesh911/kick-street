const user = require("../models/user.model");
const order = require("../models/order.model");
const product = require("../models/product.model");
const AsyncHandler = require("../utils/AsyncHandler");
const ErrorHandler = require("../utils/errorHandler");
user
/*
    Adimn routes
    check orders
    check monthly / weekly / daily  sales
    check user details
*/
AsyncHandler
ErrorHandler

const getUserDetails = AsyncHandler(async(req,res)=>{
    const {type} = req.query
    const details = await user.find({type:type}).select("-password")
    res.status(200).json({success:true,result:details})
})

const stats = AsyncHandler(async(req,res)=>{
    const productCount = await product.countDocuments()
    const orders = await order.find()
    const orderCount = orders.length
    let orderAmount = 0
    orders.forEach((e)=>orderAmount += e.amount)
    res.status(200).json({success:true,result:{productCount,orderCount,orderAmount}})
})

const productById = AsyncHandler(async(req,res,next)=>{
    const {id} = req.body
    const data = await product.findById({_id:id})
    if(data === null)
        return next(new ErrorHandler("No product exists",404))
    res.status(200).json({success:true,result:data})
})

module.exports = {getUserDetails,stats,productById}