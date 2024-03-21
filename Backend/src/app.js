const express = require("express")
const ErrorHandler = require("./utils/errorHandler")
const userRouter = require("./Routes/User.route")
const productRouter = require("./Routes/Products.route")
const orderRouter = require("./Routes/Order.route")

const app = express()
app.use("/user",userRouter)
app.use('/products',productRouter)
app.use("/order",orderRouter)
module.exports = app
