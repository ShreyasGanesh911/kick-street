import React, { useEffect, useState } from 'react'
import { Product } from '../Types/Product'
type Props={
  url:string
}
type GetData = () => Promise<string>;
export default function UseFetch(url:string) {
    const [data,setData] = useState()
    const getData = async()=>{
      try{
        const response = await fetch(url, {
          method: "GET", 
          mode: "cors", 
          credentials: "include", 
          headers: {
            "Content-Type": "application/json",
          },
        });
        const data = await response.json(); 
        console.log(data.result)
        setData(data.result)
        return "true"
      
      }catch(e){
        console.log(e)
        
      }
    }
    useEffect(()=>{
        getData()
    },[])
  return [data]
}
