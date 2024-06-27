import React from 'react'
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
  // UseEffectGet<Body>('http://localhost:4000/user/logon',{userEmail:"shreyas.hrithvik@gmail.com",password:'123456789'})
  // console.log("data is",data)
  return (
    <>
    <section className='page '>
    </section> 
    </>
  )
}
