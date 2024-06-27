import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function UseFetchPost<T,U>(url:string,body:U):(T|undefined) {
    const [loading,setLoading] = useState<boolean>(true)
    const [data,setData] = useState<T>()!
    const navigate = useNavigate()
    const getData = async()=>{
      try{
        const response = await fetch(url, {
          method: "POST", 
          mode: "cors", 
          credentials: "include", 
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(body)
        });
        const data = await response.json()!;
        //console.log(data) 
        // data.result ? setData(data.result) : setData()
        
          setData(data.result)
        
        //setDetails({description:result.description,gender:result.gender,name:result.name,price:result.price,discount:result.offer,stock:result.stock})
        //setSize(result.size)  
      }catch(e){
        console.log(e)
      }
    }

    useEffect(()=>{
        getData()
    },[url])

  return data
}
