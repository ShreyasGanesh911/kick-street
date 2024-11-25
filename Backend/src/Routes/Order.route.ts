import express from 'express'
import adminAuth from '../middlewares/Auth.admin.js'
import userAuth from '../middlewares/Auth.customer.js'
import { getAllOrders, viewOrders, placeOrder, getSingleOrder } from '../controllers/order.js'

const orderRouter = express.Router()
/*
    Orders placed by a customer shall be seen only by him

    An admin can see all orders placed by all customers
*/
orderRouter.get('/all',adminAuth,getAllOrders)
orderRouter.get('/myOrders',userAuth,viewOrders)
orderRouter.get('/userorder',getSingleOrder)
orderRouter.post("/placeOrder",userAuth,placeOrder)
export default orderRouter