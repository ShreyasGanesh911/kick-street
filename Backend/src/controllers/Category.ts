import { Request,Response,NextFunction } from "express";
import category from "../models/category.model.js";
import AsyncHandler from "../utils/AsyncHandler.js";
import ErrorHandler from "../utils/errorHandler.js";
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
export const addCategory = AsyncHandler(async(req:Request,res:Response)=>{
    const {categoryName,categoryDesc} = req.body
    const responce = await category.create({categoryName,categoryDesc})
    res.status(201).json({success:true,message:`category created ${responce}`})
})

export const viewcategory = AsyncHandler(async(req:Request,res:Response)=>{
    const responce = await category.find()
    res.status(200).json({success:true,result:responce})
})
export const deleteCategory = AsyncHandler(async(req:Request,res:Response,next:NextFunction)=>{
    const {_id} = req.params
    const responce = await category.deleteOne({_id})
    if(!responce.deletedCount)
        return next(new ErrorHandler("Category doesn't exist! ",404))
    res.status(200).json({success:true,message:"Removed successfully! "})
})

export const updateCategory = AsyncHandler(async(req:Request,res:Response,next:NextFunction)=>{
    const {_id,categoryDesc,categoryName} = req.body
    const responce = await category.findByIdAndUpdate(_id,{categoryDesc,categoryName})
    if(!responce)
       return next(new ErrorHandler("Category doesn't exist ", 404))
    res.status(204).json({success:true,message:"Updated category"})
})
