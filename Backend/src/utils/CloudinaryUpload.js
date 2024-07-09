const cloudinary = require('cloudinary').v2;
const fs = require('fs')
//const my = require('../../public/temp')
// Cloudinary setup config
cloudinary.config({ 
        cloud_name: process.env.CLOUDINARY_NAME, 
        api_key: process.env.CLOUDINARY_API_KEY, 
        api_secret: process.env.CLOUDINARY_API_SECRET 
});

const UploadToCloudinary = async(filePath)=>{
    try{
        if(!filePath) // To check if no path exist
            return "No File path sent"
        const upload = await cloudinary.uploader.upload(filePath,{resource_type:"auto"})
        console.log("Uploaded file successfully!",upload.url);
        return upload
    }catch(e){
        console.log(e)
        fs.unlinkSync(filePath)
    }
}

module.exports = UploadToCloudinary