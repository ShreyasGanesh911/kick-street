import express, { NextFunction, Request, Response } from "express"
import cookieParser from 'cookie-parser'
import APIError from "./utils/APIError.js"
import userRouter from "./Routes/User.route.js"
import productRouter from "./Routes/Products.route.js"
import orderRouter from "./Routes/Order.route.js"
import categoryRouter from "./Routes/Category.route.js"
import adminRoute from "./Routes/Admin.route.js"
import paymentRouter from "./Routes/Payment.route.js"
import cors from 'cors'
import AsyncHandler from "./utils/AsyncHandler.js"
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
app.get('/logout',AsyncHandler(async(req:Request,res:Response,next:NextFunction)=>{
    res.clearCookie("Auth")
    res.status(200).json({success:true,message:"Logged out successfully"})
}))
app.use(APIError)
export default app

