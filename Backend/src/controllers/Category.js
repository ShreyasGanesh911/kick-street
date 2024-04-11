const category = require("../models/category.model");
const AsyncHandler = require("../utils/AsyncHandler");
const ErrorHandler = require("../utils/errorHandler");
// CRUD operations on category
/*

    Admin must be able to create a new category where the product belongs to 
    Must be able to add multiple categories

*/

/**
 Basic categories 
    Men
    Women
    Unisex
    Sale / offer
    Street ware
    Casuals
    ACCESSORIES

 */
const addCategory = AsyncHandler(async(req,res)=>{
    const {categoryName,categoryDesc} = req.body
    const responce = await category.create({categoryName,categoryDesc})
    res.status(201).json({success:true,message:`category created ${responce}`})
})

const viewcategory = AsyncHandler(async(req,res)=>{
    const responce = await category.find()
    res.status(200).json({success:true,result:responce})
})
const deleteCategory = AsyncHandler(async(req,res,next)=>{
    const {_id} = req.params
    const responce = await category.deleteOne({_id})
    if(!responce.deletedCount)
        return next(new ErrorHandler("Category doesn't exist! ",404))
    res.status(200).json({success:true,message:"Removed successfully! "})
})

const updateCategory = AsyncHandler(async(req,res,next)=>{
    const {_id,categoryDesc,categoryName} = req.body
    const responce = await category.findByIdAndUpdate(_id,{categoryDesc,categoryName})
    if(!responce)
       return next(new ErrorHandler("Category doesn't exist ", 404))
    res.status(204).json({success:true,message:"Updated category"})
})
module.exports = {addCategory,viewcategory,deleteCategory,updateCategory}  