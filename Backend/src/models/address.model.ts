import mongoose from "mongoose"
const addressSchema = new mongoose.Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"user"
    },
    addressLine1 : {
        type:String,
        required : [true,"Address line cannot be empty "]
    },
    addressLine2 : {
        type:String,  
    },
    city:{
        type:String,
        required : [true,"City cannot be empty"]
    },
    state:{
        type:String,
        required : [true,"State cannot be empty "]
    },
    zipcode:{
        type:Number,
        required : [true,"Code line cannot be empty "]
    },
    country :{
        type:String,
        required:[true,"Need to provide country name"]
    } 
})

const address = mongoose.model("address",addressSchema)
export default address;