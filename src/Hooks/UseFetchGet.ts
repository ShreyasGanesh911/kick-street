import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function UseFetchGet<T>(url:string,reroute:string):[T|undefined,boolean] {
    const [loading,setLoading] = useState<boolean>(true)
    const [data,setData] = useState<T>()
    const navigate = useNavigate()
    const getData = async()=>{
        try{
          const response = await fetch(url,{
            method: "GET", 
              mode: "cors", 
              credentials: "include", 
              headers: {
                "Content-Type": "application/json",
              },
          })
          if(response.status !== 200)
              return navigate(reroute)
          const data = await response.json()
          //console.log(data)
        //   setOrders(data.orders)
        //   setDetails(data.userDetails[0])
        setData(data.result)

        }catch(e){}
    }

    useEffect(()=>{
        getData()
    },[url])

  return [data,loading]
}
