import React, { useState } from 'react'
type Data = {
  total :number,
  skip:number,
  limit:number
}

type Body = {
  userEmail:string,
  password:string
}
export default function About() {
  // const [data,loading] = UseFetch<Data>('https://dummyjson.com/products')
  const [image,setImage] = useState<File >()
  // UseEffectGet<Body>('http://localhost:4000/user/logon',{userEmail:"shreyas.hrithvik@gmail.com",password:'123456789'})
  // console.log("data is",data)
  const handleSubmit = async(e:React.FormEvent<HTMLFormElement>)=>{{
    e.preventDefault()
    const form = new FormData()
    if(image){
      form.append("image",image)
      try{
        const response = await fetch('http://localhost:4000/products/upload',{
            method:"POST",
            mode: "cors", 
        credentials: "include", 
          body:form
        })
        if(response.ok){
          console.log('Uploaded')
          const data = await response.json()
          console.log(data.result)

        }
          
      }catch(e){}
    }
      
  }}
  const handleChange = (e:React.ChangeEvent<HTMLInputElement>)=>{
    console.log(e.target.files?.[0])
    setImage(e.target.files?.[0])
  }
  return (
    <>
    <section className='page '>
    <form action="/profile" encType="multipart/form-data" onSubmit={handleSubmit}>
        <input type="file" name="avatar" onChange={handleChange}/>
      <button >Submit</button>
    </form>

    </section> 

    <img  src="https://res.cloudinary.com/dpvxmg0un/image/upload/v1720671893/npy9n57lf8xca9oeaznt.jpg" alt="" />
    </>
  )
}
