import mongoose from "mongoose"

const orderSchema = new mongoose.Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"user"
    },
    items:[{
        pId : {
            type:mongoose.Schema.Types.ObjectId,
            ref:"product",
        },
        price:{
            type:Number,
            required:true
        },
        qty:{
            type:Number,
            required:true
        },
        size:{
            type: Number,
            required :[true,'Size not mentioned']
        }
    }],
    status:{
        type:String,
        enum:["Processing","Packed","Shipped","Delivered","Placed","cancelled"],
        default:"Processing"
    },
    orderDate:{
        type:Date,
        default: new Date()
    },
    amount:{
        type:Number,
        required:true
    },
    address:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"address",
        required:[true,"Address Id not provided"]
    }

})

const order = mongoose.model("order",orderSchema)
export default order