import { NextFunction, Request, Response } from "express"

const AsyncHandler = (passedFunction:any)=>(req:Request,res:Response,next:NextFunction)=>{
    Promise.resolve(passedFunction(req,res,next)).catch(next)
}
export default AsyncHandler