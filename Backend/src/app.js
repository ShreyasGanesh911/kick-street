const express = require("express")
const cookieParser = require('cookie-parser') 
const APIError = require("./utils/APIError")
const userRouter = require("./Routes/User.route")
const productRouter = require("./Routes/Products.route")
const orderRouter = require("./Routes/Order.route")
const categoryRouter = require("./Routes/Category.route")
const adminRoute = require("./Routes/Admin.route")
const paymentRouter = require("./Routes/Payment.route")
const cors = require('cors')
const AsyncHandler = require("./utils/AsyncHandler")
const app = express()
app.use(cors({origin:true,credentials: true}))
app.use(express.json())
app.use(cookieParser())
app.use(express.urlencoded({extended: true}));
app.use("/user",userRouter)
app.use('/products',productRouter)
app.use("/order",orderRouter)
app.use('/category',categoryRouter)
app.use('/admin',adminRoute)
app.use('/payment',paymentRouter)
app.get('/logout',AsyncHandler(async(req,res,next)=>{
    res.clearCookie("Auth")
    res.status(200).json({success:true,message:"Logged out successfully"})
}))
app.use(APIError)
module.exports = app

