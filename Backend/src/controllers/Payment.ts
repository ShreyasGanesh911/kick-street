import { NextFunction, Request, Response } from "express";
import payment from "../models/payment.model.js";
import AsyncHandler from "../utils/AsyncHandler.js";
/*
    Must be able to make a payment 
    Must be able to change status of payment

*/
export const userPayment = AsyncHandler(async(req:Request,res:Response,next:NextFunction)=>{
    const {method,txnId,amount} = req.body
    const responce = await payment.create({method,txnId,amount})
    res.status(200).json({success:true,responce})
})

export const allPayments = AsyncHandler(async(req:Request,res:Response,next:NextFunction)=>{
    const responce = await payment.find()
    res.status(200).json({success:true,responce})
})

export const updatePayment = AsyncHandler(async(req:Request,res:Response,next:NextFunction)=>{
    const {method,txnId,amount,status} = req.body
})
