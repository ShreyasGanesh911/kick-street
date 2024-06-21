type ProductId = {
    images:{url:string}[],
    name:string,
    _id : string

  }
  export type Items = {
    pId:ProductId,
    price :number,
    qty : number,
    size:number
  }
  export type Data = {
    success:boolean,
    result : Result[]
  }
  export type Result = {
    amount:number, 
    items:Items[],
    orderDate:string,
    payment : string,
    user : string,
    _id : string
  }