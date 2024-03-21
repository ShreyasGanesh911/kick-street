const express = require("express")
const ErrorHandler = require("./utils/errorHandler")
const userRouter = require("./Routes/User.route")
const app = express()
app.use("/user",userRouter)

module.exports = app
