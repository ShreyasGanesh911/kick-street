const AsyncHandler = require("../utils/AsyncHandler");
const ErrorHandler = require("../utils/errorHandler");
const product = require("../models/product.model")
/*
    Basic crud operation
    1. Delete product
    2. Update product 
    3. Create product
    4. View all products 
*/
const addProduct = AsyncHandler(async(req,res,next)=>{
    const {name,description,images,price,stock,gender,category} = req.body
    const responce = await product.create({name,description,images,price,stock,gender,category})
    res.status(201).json({success:true,message:"Product added successfully"})
})

const viewProducts = AsyncHandler(async(req,res,next)=>{
    const responce = await product.find().populate("category")
    res.status(200).json({success:true,result:responce})
})

const deleteProduct = AsyncHandler(async(req,res,next)=>{
    const {_id} = req.body
    const responce = await product.deleteOne({_id})
    if(!responce.deletedCount)
        return next(new ErrorHandler("Product doesn't exist",404))
    res.status(200).json({success:true,message:"Product deleted successfully!"})
})
module.exports = {addProduct,viewProducts,deleteProduct}   