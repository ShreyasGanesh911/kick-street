import { NextFunction, Request, Response } from "express";
import address from "../models/address.model.js";
import AsyncHandler from "../utils/AsyncHandler.js";
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
/*
    Controller to add addresses for a user
*/

export const addAddress = AsyncHandler(async(req:RequestWithUser,res:Response,next:NextFunction)=>{
    const {addressLine1,addressLine2,city,state,zipcode,country} = req.body
    const {_id} = req.user
    const user = _id
    await address.create({user,addressLine1,addressLine2,city,state,zipcode,country})
    res.status(200).json({success:true,message:"Address added successfully"})
})

export const getAddress = AsyncHandler(async(req:RequestWithUser,res:Response,next:NextFunction)=>{
    const {_id} = req.user
    const user = _id
    const response = await address.find({user}).populate('user')
    res.status(200).json({success:true,response})
})
