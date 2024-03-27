const express = require("express")
const { userRouterCheck , userLogin , userSignUp } = require("../controllers/customer")
const adminAuth = require("../middlewares/Auth.admin")
const userAuth = require("../middlewares/Auth.customer")

const userRouter = express.Router()

userRouter.get("/",userRouterCheck)
userRouter.post('/login',userLogin)
userRouter.post('/signUp',userSignUp)
userRouter.get("/testAdmin",adminAuth,(req,res)=>{
    res.status(200).json({message:"Test passed",user:req.admin})})
userRouter.get("/testUser",userAuth,(req,res)=>res.send("Test passed user"))
module.exports = userRouter

