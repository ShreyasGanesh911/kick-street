const express = require("express")
const AsyncHandler = require("../utils/AsyncHandler")
const { userRouterCheck , userLogin , userSignUp } = require("../controllers/customer")

const userRouter = express.Router()

userRouter.get("/",userRouterCheck)
userRouter.get('/login',userLogin)
userRouter.post('/signUp',userSignUp)

module.exports = userRouter

