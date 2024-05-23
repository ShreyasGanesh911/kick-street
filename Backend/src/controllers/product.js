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
    const {name,description,images,price,stock,gender,category,size} = req.body
    console.log(size)
    let stockCheck = 0
    size.forEach((e)=>stockCheck += e.stock)
    console.log(stockCheck)
    if(stockCheck !== stock)
        return res.status(400).json({success:false,message:"Stock not matching, please check the stock for each size"})
    const responce = await product.create({name,description,images,price,stock,gender,category,size})
    res.status(201).json({success:true,message:"Product added successfully"})
})

const viewProducts = AsyncHandler(async(req,res,next)=>{
    const {brand} = req.query 
    if(brand){
        let responce = await product.find({name:{ $regex: '.*' + brand + '.*' }}).populate("category")
       return res.status(200).json({success:true,result:responce})
    }
    else
        {
        let responce = await product.find().populate("category")
        return res.status(200).json({success:true,result:responce})
        }

   
})

const deleteProduct = AsyncHandler(async(req,res,next)=>{
    const {_id} = req.body
    const responce = await product.deleteOne({_id})
    if(!responce.deletedCount)
        return next(new ErrorHandler("Product doesn't exist",404))
    res.status(200).json({success:true,message:"Product deleted successfully!"})
})

const updateProduct = AsyncHandler(async(req,res,next)=>{
    const {name,description,price,stock,gender,_id} = req.body
    const responce = await product.findByIdAndUpdate(_id,{name,description,price,stock,gender})
    if(!responce)
        return next(new ErrorHandler('Product not found',404))
    res.status(200).json({success:true,message:"Product updated successfully"})
})
module.exports = {addProduct,viewProducts,deleteProduct,updateProduct}    