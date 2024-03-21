const mongoose = require("mongoose")
const cartSchema = new mongoose.Schema({
    user:{
        type:Schema.Types.ObjectId,
        ref:"user"
    },
    items:[{
        pId:{
            type:Schema.Types.ObjectId,
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
    }]
})

const cart = mongoose.model("cart",cartSchema)
module.exports = cart;