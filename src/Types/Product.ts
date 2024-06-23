export type Size = {size:string,stock:number}
export type Product = {
    description : string,
    _id:string,
    gender : string 
    images : string[]
    name : string
    offer: number 
    price: number
    rating:number
    reviews : string[]
    sale: boolean 
    size: Size[]
    stock:number
  }