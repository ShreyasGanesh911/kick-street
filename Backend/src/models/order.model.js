const mongoose = require("mongoose")

const orderSchema = new mongoose.Schema({
    user:{
        type:Schema.Types.ObjectId,
        ref:"user"
    },
    items:[{
        pId : Schema.Types.ObjectId,
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
        enum:["Processing","Packed","Shipped","Delivered"]
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