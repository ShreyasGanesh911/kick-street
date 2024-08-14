const address = require("../models/address.model");
const AsyncHandler = require("../utils/AsyncHandler");
const ErrorHandler = require("../utils/errorHandler");

/*
    Controller to add addresses for a user
*/

const addAddress = AsyncHandler(async(req,res,next)=>{
    const {addressLine1,addressLine2,city,state,zipcode,country} = req.body
    const {_id} = req.user
    const user = _id
    await address.create({user,addressLine1,addressLine2,city,state,zipcode,country})
    res.status(200).json({success:true,message:"Address added successfully"})
})

const getAddress = AsyncHandler(async(req,res,next)=>{
    const {_id} = req.user
    const user = _id
    const response = await address.find({user}).populate('user')
    res.status(200).json({success:true,response})
})
module.exports = {addAddress,getAddress}