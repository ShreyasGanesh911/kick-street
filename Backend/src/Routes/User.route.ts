import express, { Request, Response, NextFunction } from "express";
import { userRouterCheck, userLogin, userSignUp, addProduct, viewCart, getUserDetails, checkLoggedIn } from "../controllers/customer.js"
import userAuth from "../middlewares/Auth.customer.js"
import { addAddress, getAddress } from "../controllers/address.js"
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
userRouter.post('/addToCart',userAuth,addProduct)
userRouter.get('/cart',userAuth,viewCart)
userRouter.post('/addAddress',userAuth,addAddress)
userRouter.get('/about',userAuth,getUserDetails)
userRouter.get('/check',userAuth,checkLoggedIn)
userRouter.get('/getaddress',userAuth,getAddress)

export default userRouter

