const user = require("../models/user.model");
const AsyncHandler = require("../utils/AsyncHandler");
const ErrorHandler = require("../utils/errorHandler");
user
/*
    Adimn routes
    check orders
    check monthly / weekly / daily  sales
    check user details
*/
AsyncHandler
ErrorHandler

const getUserDetails = AsyncHandler(async(req,res)=>{
    const {type} = req.query
    const details = await user.find({type:type}).select("-password")
    res.status(200).json({success:true,result:details})
})

module.exports = {getUserDetails}