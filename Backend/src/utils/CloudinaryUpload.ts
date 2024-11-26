import cloudinary from 'cloudinary'
import fs from 'fs'
//const my = require('../../public/temp')
// Cloudinary setup config
cloudinary.v2.config({ 
        cloud_name: process.env.CLOUDINARY_NAME, 
        api_key: process.env.CLOUDINARY_API_KEY, 
        api_secret: process.env.CLOUDINARY_API_SECRET 
});

const UploadToCloudinary = async(filePath:string)=>{
    try{
        if(!filePath) // To check if no path exist
            return "No File path sent"
        const upload = await cloudinary.v2.uploader.upload(filePath,{resource_type:"auto"})
        console.log("Uploaded file successfully!",upload.url);
        return upload
    }catch(e){
        console.log(e)
        fs.unlinkSync(filePath)
        throw new Error("File upload failed");
    }
}

export default UploadToCloudinary