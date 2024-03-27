const express = require("express")
const cookieParser = require('cookie-parser') 
// const ErrorHandler = require("./utils/errorHandler")
const userRouter = require("./Routes/User.route")
const productRouter = require("./Routes/Products.route")
const orderRouter = require("./Routes/Order.route")
const APIError = require("./utils/APIError")
// const AsyncHandler = require("./utils/AsyncHandler")

const app = express()
app.use(express.json())
app.use(cookieParser())
app.use("/user",userRouter)
app.use('/products',productRouter)
app.use("/order",orderRouter)
app.use(APIError)
module.exports = app

// app.get('/test',(req,res,next)=>{
//     if(0)
//         res.status(200).json("Good to go")
//     else
//         next(new ErrorHandler("Test message",404))
// })

// app.get('/test/async',AsyncHandler(async(req,res,next)=>{
//     if(1)
//     res.stats(200).json("Good to go")
// else
//     next(new ErrorHandler("Test message",404))
// }))


