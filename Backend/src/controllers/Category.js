const category = require("../models/category.model");
const AsyncHandler = require("../utils/AsyncHandler");

const addCategory = AsyncHandler(async(req,res)=>{
    const {categoryName,categoryDesc} = req.body
    const responce = await category.create({categoryName,categoryDesc})
    res.status(201).json({success:true,message:`category created ${responce}`})
})

module.exports = addCategory