const mongoose = require("mongoose")
const cartSchema = new mongoose.Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"user",
        unique:true
    },
    items:[
        {
        pId:{
            type:mongoose.Schema.Types.ObjectId,
            ref:"product"
        },
        qty:{
            type:Number,
            required:true
        },
        price:{
            type:Number,
            required:true
        }
    }
]
})

const cart = mongoose.model("cart",cartSchema)
module.exports = cart;