const APIError = (err,req,res,next)=>{
    err.statusCode = err.statusCode || 500
    err.message = err.message || "Internal server error"
    console.log(err.message)
    res.status(err.statusCode).json({messgae:err.message,success:false})
}

module.exports = APIError;