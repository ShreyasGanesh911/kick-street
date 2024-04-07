const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true,"Name of the product must be mentioned"]
    },
    description:{
        type:String,
        required:[true,"Description of the product must be mentioned"]
    },
    rating:{
        type:Number,
        default:0
    },
    reviews:[{
        user:{
            type:mongoose.Schema.Types.ObjectId,
            ref:"user"
        },
        review:{
            type:String,
        },
        rating:{
            type:Number,
            required:[true,"Need to provide rating"],
            default:5
        }
    }],
    price:{
        type:Number,
        default:0
    },
    stock:{
        type:Number,
        default:0
    },
    gender:{
        type:String,
        enum : ['male','female','unisex'],
        default:"unisex"
    },
    category:[
        {   type: mongoose.Schema.Types.ObjectId,
            ref:"category"
        }]
,
    images:[{
        url:{
            type:String,
            required:[true,"Need to provide product images"]
        }
    }]

})
// const productSchema = new mongoose.Schema({
//     name:{
//         type:String
//     },
//     price:{
//         type:Number,
//         required:[true,"Enter the proce of the product "]
//     }
// })
const product = mongoose.model('product',productSchema)

module.exports = product