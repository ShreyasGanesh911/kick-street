const mongoose = require('mongoose')

const paymentSchema = new mongoose.Schema({
    orderId:{
        type:Schema.Types.ObjectId,
        ref:"order"
    },

    method:{
        type:String,
        enum:['COD','UPI','Card'],
        required:true
    },
    txnId:{
        type :String,
        required : [true,"Txn ID not provided"]
    },
    date:{
        type:Date,
        default: new Date()
    },
    

})

const payment = mongoose.model("payment",paymentSchema)

module.exports = payment