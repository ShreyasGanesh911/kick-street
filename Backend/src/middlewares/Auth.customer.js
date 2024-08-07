const ErrorHandler = require("../utils/errorHandler")
require("dotenv").config()
const User = require('../models/user.model')
const jwt = require("jsonwebtoken")
const userAuth = async(req,res,next)=>{
    const {Auth} = req.cookies
    if(!Auth)
        return next(new ErrorHandler("Token doesn't exist",402))
    jwt.verify(Auth,process.env.JWTPASSWORD,async(err,user)=>{
        if(err){
            res.clearCookie("Auth")
            return next(new ErrorHandler("Invalid token, login again",401))
        }
           
        const check = await User.findOne({email:user.email})
        if(!check || check.type !== "user")
            return next(new ErrorHandler("Invalid token, need to login as a user",401))
        if(check.type !== "user")
            return next(new ErrorHandler("Not a user",402))
        req.user = user
        next()
    })
}

module.exports = userAuth