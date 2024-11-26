import AsyncHandler from "../utils/AsyncHandler.js";
import ErrorHandler from "../utils/errorHandler.js";
import product from "../models/product.model.js";
import UploadToCloudinary from "../utils/CloudinaryUpload.js";
import { NextFunction,Request,Response } from "express";
/*
    Basic crud operation
    1. Delete product
    2. Update product 
    3. Create product
    4. View all products 
*/
type Body = {
    name: string;
    price: number;
    description: string;
    images: {url:string}[];
    gender: string
    category:string
    sale: boolean
    offer: number
    size: {size:string,stock: number}[]
    stock: number
}
type UpdateBody = {
    name:string; description:string; price:number; stock:number,gender:'male'|'female'|"unisex";size:{size:string,stock:number}[];_id:string,images:{url:string}[]
}
export const addProduct = AsyncHandler(async(req:Request,res:Response)=>{
    let body: Body = req.body
    let {name,description,images,price,stock,gender,category,size,sale,offer} = body
    let stockCheck = 0
    size.forEach((e)=>stockCheck += e.stock)
    size = size.sort((a, b) => a.size > b.size ? 1 : -1)
    if(stockCheck !== stock)
        return res.status(400).json({success:false,message:"Stock not matching, please check the stock for each size"})
    if(!offer && sale)
        return res.status(400).json({success:false,message:"Please mention the offer percentage"})
    
   await product.create({name,description,images,price,stock,gender,category,size,sale,offer})
    res.status(201).json({success:true,message:"Product added successfully"})
})

export const viewProducts = AsyncHandler(async(req:Request,res:Response)=>{
   const query  = req.query
   let {brand,limit,gender,sort} = query
   let sortValue :1 | -1,genderVal,limitVal:number
   Number(sort) === 1 ? sortValue = 1: sortValue = -1
   gender? genderVal = gender : genderVal = null
   limitVal = Number(limit)
    if(gender){
        if(gender!=='male'){
            const result = await product.find({gender:{$ne:'male'}}).populate('category').sort({'price':sortValue})
            return res.status(200).json({success:true,result})
        }
        else{
            const result = await product.find({$or:[{gender:'male'},{gender:'unisex'}]}).populate('category').sort({'price':sortValue})
            return res.status(200).json({success:true,result})
        }
    } 
    limitVal = limitVal || 0
    if(brand){
        const brandNames:string = brand.toString().slice(0,-1)
        //brand.slice(0,-1)
       let brandArray = brand.toString().split("%")
       brandArray.pop()
        const myFunc = async()=>{
            let myArray:{}[] =[]
            for(let i=0;i<brandArray.length;i++){
                const responce = await product.find({name:{ $regex: '.*' + brandArray[i] + '.*' }}).populate("category").limit(limitVal).sort({'price':sortValue})
                responce.forEach(e=>myArray.push(e))
            }
            return myArray
        }
        const result = await myFunc()
       return res.status(200).json({success:true,result:result})
    }
    else{
        let responce = await product.find().populate("category").limit(limitVal).sort({'price':sortValue})
        return res.status(200).json({success:true,result:responce})
    }  
})

export const deleteProduct = AsyncHandler(async(req:Request,res:Response,next:NextFunction)=>{
    const {_id} = req.body
    const responce = await product.deleteOne({_id})
    if(!responce.deletedCount)
        return next(new ErrorHandler("Product doesn't exist",404))
    res.status(200).json({success:true,message:"Product deleted successfully!"})
})

export const updateProduct = AsyncHandler(async(req:Request,res:Response,next:NextFunction)=>{
    const body:UpdateBody = req.body
    let {name,description,price,stock,gender,_id,size,images} = body
    size = size.sort((a, b) => a.size > b.size ? 1 : -1)
    const responce = await product.findByIdAndUpdate(_id,{name,description,price,stock,gender,size,images})
    if(!responce)
        return next(new ErrorHandler('Product not found',404))
    res.status(200).json({success:true,message:"Product updated successfully"})
})

export const singleProduct = AsyncHandler(async(req:Request,res:Response,next:NextFunction)=>{
    const {name} = req.query
    const result = await product.findOne({name:{ $regex: '.*' + name + '.*' }})
    if(!result)
        return next(new ErrorHandler("Item not found",404))
    res.status(200).json({success:true,result})
})

export const uploadImage = AsyncHandler(async(req:Request,res:Response,next:NextFunction)=>{
    const body:Express.Multer.File = req.file as Express.Multer.File
    const response = await  UploadToCloudinary(body.path)
    if(response !== "No File path sent")
        return res.status(200).json({success:true,result:response.url})
    else return next(new ErrorHandler("Failed to upload",400))
})

