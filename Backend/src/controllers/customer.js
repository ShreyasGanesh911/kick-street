const AsyncHandler = require("../middlewares/AsyncHandler")
const ErrorHandler = require("../utils/errorHandler")
const user = require('../models/user.model.js')
/*
    User must be able to carry out the following operations
        Create account
        Login
        Check / modify Address
        Check his orders

*/
// user Router check basic
const userRouterCheck = AsyncHandler(async(req,res,next)=>{
    res.status(200).json({message:"This is user router",success:true})
})

// To login 
const userLogin = AsyncHandler(async(req,res,next)=>{
    const findUser = await user.find()
    // console.log(findUser)
    res.status(200).json({success:true,user:findUser})
})

// To sign up
const userSignUp = AsyncHandler(async(req,res,next)=>{
    
})


module.exports = {userRouterCheck , userLogin , userSignUp}