import { NextFunction, Request, Response } from "express"
type Error = {
    statusCode: number
    message: string
}
const APIError = (err:Error,req:Request,res:Response,next:NextFunction)=>{
    err.statusCode = err.statusCode || 500
    err.message = err.message || "Internal server error"
    console.log(err.message)
    res.status(err.statusCode).json({messgae:err.message,success:false})
}

export default APIError;