import mongoose from "mongoose"

const paymentSchema = new mongoose.Schema({

    method:{
        type:String,
        enum:['COD','UPI','Card'],
        required:[true,"Payment method not mentioned"]
    },
    txnId:{
        type :String,
        required : [true,"Txn ID not provided"]
    },
    date:{
        type:Date,
        default: new Date()
    },
    amount:{
        type:Number,
        required:[true,"Amount not specified"]
    }


})

const payment = mongoose.model("payment",paymentSchema)

export default payment