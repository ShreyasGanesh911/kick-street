import * as express from "express"
declare global{
    namespace Express {
        interface Request {
            user?: {
              _id: string;
              name: string;
              email: string;
              phone: number;
              type: string;
            };
            admin?: {
              _id: object;
              name: string;
              email: string;
              phone: number;
              type: string;
            };
         }
    }
}