const mongoose = require("mongoose")
const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required : [true,"Enter your name "]
    },
    email:{
        type:String,
        required : [true,"Enter your email"],
        unique : true
    },
    phone:{
        type:Number,
        required : [true,"Enter your phone number"],
        unique : true
    },
    type:{
        type:String,
        enum : ['user','admin'],
        default:"user"
    },
    password:{
        type:String,
        required : [true,"Password cannot be empty "]
    },
    dob:{
        type:Date
    }
})

const user = mongoose.model("user",userSchema)
module.exports = user;