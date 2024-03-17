require('dotenv').config()
const mongoose = require('mongoose')
const connection = async()=>{
    try{
        
        await mongoose.connect(`${process.env.URI}/kickStreet`)
        console.log("Connected to data base")
    }catch(err){
        console.log("error connecting to database ",err)
    }
}
module.exports = connection