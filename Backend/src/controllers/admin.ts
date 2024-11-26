import user from "../models/user.model.js";
import order from "../models/order.model.js";
import product from "../models/product.model.js";
import AsyncHandler from "../utils/AsyncHandler.js";
import ErrorHandler from "../utils/errorHandler.js";
import { NextFunction, Request, Response } from "express";
const months = [
    '','January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

/*
    Adimn routes
    check orders
    check monthly / weekly / daily  sales
    check user details
*/

export const getUserDetails = AsyncHandler(async(req:Request,res:Response)=>{

    const {type} = req.query
    const details = await user.find({type:type}).select("-password")
    res.status(200).json({success:true,result:details})
})

export const stats = AsyncHandler(async(req:Request,res:Response)=>{
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
    let monthArray:string[] = []
    let countArray:number[] = []
    let revenueArray:number[] = []
    data.forEach(e=>{
            monthArray.push(months[e._id.month])
            countArray.push(e.count)
            revenueArray.push(e.revenue)
    })
    const productCount = await product.countDocuments()
    const orders = await order.find()
    const orderCount = orders.length
    const users = await user.countDocuments()
    let orderAmount = 0
    orders.forEach((e)=>orderAmount += e.amount)
    res.status(200).json({success:true,result:{month:monthArray,orders:countArray,revenue:revenueArray,productCount,orderCount,orderAmount,user:userDetails,totalUsers:users}})
    
})

export const productById = AsyncHandler(async(req:Request,res:Response,next:NextFunction)=>{
    const {id} = req.body
    const data = await product.findById({_id:id})
    if(data === null)
        return next(new ErrorHandler("No product exists",404))
    res.status(200).json({success:true,result:data})
})

export const checkAdmin = AsyncHandler(async(req:Request,res:Response)=>{
    res.status(200).json({success:true,message:"User is admin"})
})

export const getUserStats = AsyncHandler(async(req:Request,res:Response,next:NextFunction)=>{
    const {userId} = req.query
    if(!userId)
        return next(new ErrorHandler("User ID not provided",400))
    const userDetails = await user.findById({_id:userId}).select("-password -__v -_id")
    const orders = await order.find({user:userId}).populate('items.pId','-size -rating -stock -offer -gender -category -price -sale -reviews -description').sort({'orderDate':-1})
    res.status(200).json({success:true,result:{orders,userDetails}})
})

