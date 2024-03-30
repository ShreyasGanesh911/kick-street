const express = require("express")
const { userRouterCheck , userLogin , userSignUp } = require("../controllers/customer")
const adminAuth = require("../middlewares/Auth.admin")
const userAuth = require("../middlewares/Auth.customer")
/*
    Users must be able to 
        1) Login / logout
        2) Signup
        3) Add items to cart
        4) View old orders
        5) Order status of new orders
        6) Browse items  

        Back
        1) store cart info in the db
        2) 

 */
const userRouter = express.Router()

userRouter.get("/",userRouterCheck)
userRouter.post('/login',userLogin)
userRouter.post('/signUp',userSignUp)
userRouter.get("/testAdmin",adminAuth,(req,res)=>{
    res.status(200).json({message:"Test passed",user:req.admin})})
userRouter.get("/testUser",userAuth,(req,res)=>res.send("Test passed user"))
module.exports = userRouter

