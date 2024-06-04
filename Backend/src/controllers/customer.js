const AsyncHandler = require("../utils/AsyncHandler.js")
const ErrorHandler = require("../utils/errorHandler")
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const user = require('../models/user.model.js')
const cart = require("../models/cart.model.js")
const mongoose = require('mongoose');
require('dotenv').config()
/*
    User must be able to carry out the following operations
        Create account ✔
        Login  ✔
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
        return next(new ErrorHandler("User doesn't exist",404))
    const check = bcrypt.compareSync(password,findUser.password)
    if(!check)
        return next(new ErrorHandler("Incorrect password",401))
    const {email,_id,phone,type} = findUser
    
    const token = jwt.sign({email,_id,phone,type},process.env.JWTPASSWORD,{expiresIn:'1d'})
    res.cookie("Auth",token).status(200).json({success:true,message:"User logged in successfully!"})
    
})

// To sign up
const userSignUp = AsyncHandler(async(req,res,next)=>{
    const {email,name,phone,type,password} = req.body
    const hashedPassword = bcrypt.hashSync(password,10)
    let response = await user.find({email})
    if(response.length)
        return res.status(409).json({success:false,message:"Email is already used"})
    response = await user.find({phone:Number(phone)})
    if(response.length)
        return res.status(409).json({success:false,message:"Phone number is already used"})
    await user.create(
        {name,email,phone:Number(phone),type,password:hashedPassword}
        ).then(()=>res.status(201).json({success:true,message:"User created successfully!"}))
})
//

// Add product to cart 
/*
    Problems while adding item to cart
    1. Check if the cart exists for the user
    2. Check if the item is already added to the cart -> yes ? increment the qty of the product
*/
const addProduct = AsyncHandler(async(req,res,next)=>{
    const {_id} = req.user
    const {pId,qty,price} = req.body
    items = [{pId,qty,price}]
    const find = await cart.findOne({user:_id})
    if(!find)
        await cart.create({user:id})
    const responce = await cart.findOneAndUpdate({user:_id},{$push:{"items":items}})
    res.status(200).send({success:true,message:"Added to cart successfully ",responce})
})  

const viewCart = AsyncHandler(async(req,res,next)=>{
    const {_id} = req.user
    const find = await cart.findOne({user:_id}).populate('items.pId')
     const cartItems = find.items
    //const cartItems = find.items.populate("product")
    res.status(200).json({success:true,result:find})
})

const getUserDetails = AsyncHandler(async(req,res,next)=>{
    const {_id} = req.user
    const details = await user.find({_id}).select('-password')
    res.json({details})
})

const checkLoggedIn = AsyncHandler(async(req,res,next)=>{
    res.status(200).json({success:true,message:"User has a valid token"})
})


module.exports = {userRouterCheck , userLogin , userSignUp,addProduct,viewCart,getUserDetails,checkLoggedIn}