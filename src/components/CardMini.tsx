import React from 'react'
import img from '../Assets/Shoe.webp'
import {Product} from "../Types/Product"
import { motion } from 'framer-motion'
type Props = {
  name:string,
  price:number,
}
export default function Card({name,price}:Props) {
  return (
    <>
      <div className='bg-white rounded w-60 h-80 border m-2 hover:border-black  '>
            <motion.div whileHover={{scale:0.95}}  className='h-3/4 overflow-hidden'>
                <img src={img} className="object-contain overflow-hidden" alt="" />
            </motion.div>
            <div className='h-1/4 border-t flex items-center flex-col justify-evenly'>
            <p className="font-thin capitalize text-center">{name}</p>
            <p >Price : <span className="font-semibold">Rs. {price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</span> </p>
            </div>
      </div>
    </>
  )
}
