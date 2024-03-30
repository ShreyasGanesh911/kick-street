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
    image:[{
        type:String,
        required:true
    }],
    rating:{
        type:Number,
        default:0
    },
    reviews:[{
        user:{
            type:Schema.Types.ObjectId,
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
        {   type: Schema.Types.ObjectId,
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

const product = mongoose.model('product',productSchema)

module.export = product