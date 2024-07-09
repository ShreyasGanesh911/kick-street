const AsyncHandler = require("../utils/AsyncHandler");
const ErrorHandler = require("../utils/errorHandler");
const product = require("../models/product.model")
const UploadToCloudinary = require("../utils/CloudinaryUpload")
/*
    Basic crud operation
    1. Delete product
    2. Update product 
    3. Create product
    4. View all products 
*/
const addProduct = AsyncHandler(async(req,res,next)=>{
    let {name,description,images,price,stock,gender,category,size,sale,offer} = req.body
    let stockCheck = 0
    console.log(size)
    size.forEach((e)=>stockCheck += e.stock)
    size = size.sort((a, b) => a.size > b.size ? 1 : -1)
    if(stockCheck !== stock)
        return res.status(400).json({success:false,message:"Stock not matching, please check the stock for each size"})
    if(!offer && sale)
        return res.status(400).json({success:false,message:"Please mention the offer percentage"})
    
   await product.create({name,description,images,price,stock,gender,category,size,sale,offer})
    res.status(201).json({success:true,message:"Product added successfully"})
})

const viewProducts = AsyncHandler(async(req,res,next)=>{
    let {brand,limit,gender,sort} = req.query
    sort = Number(sort) || 1
    gender = gender || null
    limit = Number(limit)
    if(gender){
        if(gender!=='male'){
            const result = await product.find({gender:{$ne:'male'}}).populate('category').sort({'price':sort})
            return res.status(200).json({success:true,result})
        }
        else{
            const result = await product.find({$or:[{gender:'male'},{gender:'unisex'}]}).populate('category').sort({'price':sort})
            return res.status(200).json({success:true,result})
        }
            
    } 
    limit = limit || 0
    if(brand){
        brand = brand.slice(0,-1)
       let brandArray = brand.split("%")
       
        const myFunc = async()=>{
            let myArray = []
            for(let i=0;i<brandArray.length;i++){
                const responce = await product.find({name:{ $regex: '.*' + brandArray[i] + '.*' }}).populate("category").limit(limit).sort({'price':sort})
                responce.forEach(e=>myArray.push(e))
                //myArray.push(responce)
            }
            return myArray
        }
        const result = await myFunc()
       return res.status(200).json({success:true,result:result})
    }
    else{
        let responce = await product.find().populate("category").limit(limit).sort({'price':sort})
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
    let {name,description,price,stock,gender,_id,size} = req.body
    size = size.sort((a, b) => a.size > b.size ? 1 : -1)
    const responce = await product.findByIdAndUpdate(_id,{name,description,price,stock,gender,size})
    if(!responce)
        return next(new ErrorHandler('Product not found',404))
    res.status(200).json({success:true,message:"Product updated successfully"})
})

const singleProduct = AsyncHandler(async(req,res,next)=>{
    const {name} = req.query
    const result = await product.findOne({name:{ $regex: '.*' + name + '.*' }})
    if(!result)
        return next(new ErrorHandler("Item not found",404))
    res.status(200).json({success:true,result})
})

const uploadImage = AsyncHandler(async(req,res,next)=>{
    const body = req.file
    console.log(body)
    //const resp = await  UploadToCloudinary('../../public/temp/'+body.destination)
    const resp = await  UploadToCloudinary(body.path)
    console.log(resp)
    res.status(200).json({message:"Hello"})
})


module.exports = {addProduct,viewProducts,deleteProduct,updateProduct,singleProduct,uploadImage}    
