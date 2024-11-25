import "dotenv/config"
import mongoose from 'mongoose'
const connection = async()=>{
    try{
        await mongoose.connect(`${process.env.URI}/kickStreet`)
        console.log("Connected to data base")
    }catch(err){
        console.log("error connecting to database ",err)
    }
}
export default connection