const AsyncHandler = require("../middlewares/AsyncHandler")
const ErrorHandler = require("../utils/errorHandler")


const userRouterCheck = AsyncHandler(async(req,res,next)=>{
    res.status(200).json({message:"This is user router",success:true})
})
const userLogin = AsyncHandler(async(req,res,next)=>{

})
const userSignUp = AsyncHandler(async(req,res,next)=>{
    
})


module.exports = {userRouterCheck , userLogin , userSignUp}