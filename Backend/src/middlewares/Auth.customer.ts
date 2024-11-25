import {Request, NextFunction, Response } from "express"
import  jwt  from "jsonwebtoken"
import ErrorHandler from "../utils/errorHandler.js"
import "dotenv/config"
import User from '../models/user.model.js'

type UserType = {
    _id: string
    name: string
    email: string,
    phone: number
    type: string
}

const userAuth = async(req:Request | any,res:Response,next:NextFunction)=>{
    const {Auth} = req.cookies

    if(!Auth)
        return next(new ErrorHandler("Token doesn't exist",402))
    
    jwt.verify(Auth,process.env.JWTPASSWORD || "",async(err:jwt.JsonWebTokenError|null,decoded:any)=>{
        if(err){
            res.clearCookie("Auth")
            return next(new ErrorHandler("Invalid token, login again",401))
        }
        const user = decoded as UserType   
        const check = await User.findOne({email:user.email}).select('-password')
        if(!check || check.type !== "user")
            return next(new ErrorHandler("Invalid token, need to login as a user",401))
        if(check.type !== "user")
            return next(new ErrorHandler("Not a user",402))
        req.user = user
        next()
    })
}

export default userAuth