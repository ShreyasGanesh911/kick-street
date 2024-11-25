import { NextFunction, Request, Response } from "express";
import order from "../models/order.model.js";
import AsyncHandler from "../utils/AsyncHandler.js";
import ErrorHandler from "../utils/errorHandler.js";
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

export const getAllOrders = AsyncHandler(async(req:Request,res:Response,next:NextFunction)=>{
    const result = await order.find().populate("items.pId user")
    res.status(200).json({Success:true,result})
})
export const viewOrders = AsyncHandler(async(req:RequestWithUser,res:Response,next:NextFunction)=>{
    const {_id} = req.user
    const user = _id
    const result = await order.find({user}).populate('items.pId').sort({'orderDate':-1})
    res.status(200).json({Success:true,result})
})

/*
    In place an order, the user must first do the payment and then the order should be placed
*/
export const placeOrder = AsyncHandler(async(req:RequestWithUser,res:Response,next:NextFunction)=>{
    const{_id} = req.user
    const user = _id
    const {amount,items,payment} = req.body
    const result = await order.create({user,items,amount,payment})
    const responce = await result.populate("items.pId payment")
    res.status(200).json({success:true,responce,message:"Order placed"})
})

export const getSingleOrder = AsyncHandler(async(req:Request,res:Response,next:NextFunction)=>{
    const {orderId} = req.query
    if(!orderId)
        return next(new ErrorHandler("OrderId not provided",400))
    const result = await order.findById({_id:orderId}).populate("items.pId","-size -rating -stock -offer -gender -category -price -sale -reviews -description -__v").populate("user",'-password')
    res.status(200).json({success:true,result})
})
