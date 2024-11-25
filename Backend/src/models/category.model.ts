import mongoose from "mongoose"
const categorySchema = new mongoose.Schema({
    categoryName:{
        type:String,
        required:[true,"Need to set a category"],
        unique :true
    },
    categoryDesc:{
        type:String,
        required:[true,"Need to set a category description"]
    }
})

const category = mongoose.model("category",categorySchema)
export default category;