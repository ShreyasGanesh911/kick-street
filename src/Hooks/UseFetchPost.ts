import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function UseFetchPost<T>(url:string,body:T):[T|undefined,boolean] {
    const [loading,setLoading] = useState<boolean>(true)
    const [data,setData] = useState<T>()
    const navigate = useNavigate()
    const getData = async()=>{

    }

    useEffect(()=>{
        getData()
    },[url])

  return [data,loading]
}
