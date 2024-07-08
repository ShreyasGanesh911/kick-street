const user = require("../models/user.model");
const order = require("../models/order.model");
const product = require("../models/product.model");
const AsyncHandler = require("../utils/AsyncHandler");
const ErrorHandler = require("../utils/errorHandler");
const months = [
    '','January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];
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
    const userDetails = req.admin
    
    const data = await order.aggregate([
        {
            $group:{
                _id:{
                    month:{$month:"$orderDate"},
                    
                },
                count : {$sum:1},
                revenue : {$sum:"$amount"}
            },
            
        },
        {
            $sort:{
                '_id':1
            }
        }
    ])
    let monthArray = []
    let countArray = []
    let revenueArray = []
    data.forEach(e=>{
            monthArray.push(months[e._id.month])
            countArray.push(e.count)
            revenueArray.push(e.revenue)
    })
    const productCount = await product.countDocuments()
    const orders = await order.find()
    const orderCount = orders.length
    let orderAmount = 0
    orders.forEach((e)=>orderAmount += e.amount)
    res.status(200).json({success:true,result:{month:monthArray,orders:countArray,revenue:revenueArray,productCount,orderCount,orderAmount,user:userDetails}})
    
})

const productById = AsyncHandler(async(req,res,next)=>{
    const {id} = req.body
    const data = await product.findById({_id:id})
    if(data === null)
        return next(new ErrorHandler("No product exists",404))
    res.status(200).json({success:true,result:data})
})

const checkAdmin = AsyncHandler(async(req,res)=>{
    res.status(200).json({success:true,message:"User is admin"})
})

const getUserStats = AsyncHandler(async(req,res,next)=>{
    const {userId} = req.query
    if(!userId)
        return next(new ErrorHandler("User ID not provided",400))
    const userDetails = await user.findById({_id:userId}).select("-password -__v -_id")
    const orders = await order.find({user:userId}).populate('items.pId','-size -rating -stock -offer -gender -category -price -sale -reviews -description').sort({'orderDate':-1})
    res.status(200).json({success:true,result:{orders,userDetails}})
})

module.exports = {getUserDetails,stats,productById,checkAdmin,getUserStats}