const AsyncHandler = require("../utils/AsyncHandler.js")
const ErrorHandler = require("../utils/errorHandler")
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const user = require('../models/user.model.js')
require('dotenv').config()
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
    const {password,userEmail} = req.body
    const findUser = await user.findOne({email:userEmail})
    if(!findUser)
        console.log("null user",findUser)
    if(!findUser)
        return next(new ErrorHandler("User doesn't exist",401))
    const check = bcrypt.compareSync(password,findUser.password)
    if(!check)
        return next(new ErrorHandler("Incorrect password",401))
    const {email,_id,phone,type} = findUser
    const token = jwt.sign({email,_id,phone,type},process.env.JWTPASSWORD,{expiresIn:'1d'})
    res.cookie("Auth",token).status(200).json({success:true,message:"User logged in successfully!"})
    
})

// To sign up
const userSignUp = AsyncHandler(async(req,res,next)=>{
    const {email,name,phone,type,password,date} = req.body
    const hashedPassword = bcrypt.hashSync(password,10)
    const create = await user.create(
        {name,email,phone,type,password:hashedPassword,dob:date}
        ).then(()=>res.status(201).json({success:true,message:"User created successfully!"}))
})



module.exports = {userRouterCheck , userLogin , userSignUp}