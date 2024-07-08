const ErrorHandler = require("../utils/errorHandler")
require("dotenv").config()
const User = require('../models/user.model')
const jwt = require("jsonwebtoken")
const adminAuth = async(req,res,next)=>{
    const {Auth} = req.cookies
    if(!Auth)
        return next(new ErrorHandler("Token doesn't exist",402))
    jwt.verify(Auth,process.env.JWTPASSWORD,async(err,user)=>{
        if(err){
            res.clearCookie("Auth")
            return next(new ErrorHandler("Invalid token, login again",402))
        } 
        const check = await User.findOne({email:user.email}).select('-password')
        if(!check)
            return next(new ErrorHandler("Invalid token, login again",402))
        if( check.type !== "admin")
        return next(new ErrorHandler("You're not logged in as an admin",402))
        req.admin = check
        next()
    })
}

module.exports = adminAuth