const mongoose = require("mongoose")
const addressSchema = new mongoose.Schema({})

const address = mongoose.model("address",addressSchema)
module.exports = address;