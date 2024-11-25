import express from 'express'
import adminAuth from '../middlewares/Auth.admin.js'
import { addProduct, viewProducts, deleteProduct, updateProduct, singleProduct, uploadImage } from '../controllers/product.js'
import upload from '../middlewares/Multer.js'
const productRouter = express.Router()

/*
    Each product must belong to a category
    Each product must show the stock left (If it is less in number)
    Each product must have a category which the admin can add to provide discount to the user (Show price in the page it self 10% off on selected items)

*/

productRouter.post("/add",adminAuth,addProduct)
productRouter.get('/all',viewProducts)
productRouter.delete('/delete',adminAuth,deleteProduct)
productRouter.post('/update',adminAuth,updateProduct)
productRouter.post('/upload',adminAuth,upload.single("image"),uploadImage)
productRouter.get("/singleProduct",singleProduct)


export default productRouter