const express = require('express')
const adminAuth = require('../middlewares/Auth.admin')
const userAuth = require('../middlewares/Auth.customer')
const {getAllOrders,viewOrders,placeOrder} = require('../controllers/order')

const orderRouter = express.Router()
/*
    Orders placed by a customer shall be seen only by him

    An admin can see all orders placed by all customers
*/
orderRouter.get('/all',getAllOrders)
orderRouter.get('/myOrders',userAuth,viewOrders)
orderRouter.post("/placeOrder",userAuth,placeOrder)
module.exports = orderRouter