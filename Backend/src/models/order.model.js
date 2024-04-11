const mongoose = require("mongoose")

const orderSchema = new mongoose.Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"user"
    },
    items:[{
        pId : mongoose.Schema.Types.ObjectId,
        ref:"product",
        price:{
            type:Number,
            required:true
        },
        qty:{
            type:Number,
            required:true
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

})

const order = mongoose.model("order",orderSchema)
module.exports = order