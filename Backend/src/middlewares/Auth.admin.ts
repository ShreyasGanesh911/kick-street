import { NextFunction, Request, Response } from "express"
import "dotenv/config"
import jwt from "jsonwebtoken"
import ErrorHandler from "../utils/errorHandler.js"
import User from '../models/user.model.js'
type Admin = {
    _id: Object
    name: string
    email: string,
    phone: number
    type: string
}

const adminAuth = async(req:Request,res:Response,next:NextFunction)=>{
    const {Auth} = req.cookies
    if(!Auth)
        return next(new ErrorHandler("Token doesn't exist",402))
    jwt.verify(Auth,process.env.JWTPASSWORD || "",async(err:jwt.JsonWebTokenError | null,decoded:any)=>{
        if(err){
            res.clearCookie("Auth")
            return next(new ErrorHandler("Invalid token, login again",402))
        } 
        const user = decoded as Admin
        const check = await User.findOne({email:user.email}).select('-password')
        if(!check)
            return next(new ErrorHandler("Invalid token, login again",402))
        if( check.type !== "admin")
            return next(new ErrorHandler("You're not logged in as an admin",402))
        req.admin = check
        next()
    })
}

export default adminAuth;