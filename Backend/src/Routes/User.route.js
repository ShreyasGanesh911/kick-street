const express = require("express")
const { userRouterCheck , userLogin , userSignUp,addProduct, viewCart } = require("../controllers/customer")
const adminAuth = require("../middlewares/Auth.admin")
const userAuth = require("../middlewares/Auth.customer")
const { addAddress } = require("../controllers/address")
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
module.exports = userRouter

