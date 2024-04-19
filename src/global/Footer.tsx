import React from 'react'
import '../Styles/Footer.css'
export default function Footer() {
  return (
    <>
      <section className='footer-div '>
      <div className='text-white   my-4 overflow-y-hidden'>
        <h2 className='text-4xl text-center overflow-y-hidden'>Kick Street</h2>
      </div>
      <div>
        <ul className='flex text-white social  ' >
          <li><i className="fa-brands fa-x-twitter px-10 overflow-y-hidden"></i></li>
          <li><i className="fa-brands fa-instagram overflow-y-hidden"></i></li>
          <li><i className="fa-brands fa-github px-10 overflow-y-hidden"></i></li>
          <li><i className="fa-brands fa-facebook overflow-y-hidden"></i></li>
        </ul>
      </div>
      <div className='footer-content text-white'>
        <div>
          <h2 className='text-sky-400'>Pages</h2>
          <ul>
            <li>About</li>
            <li>Home</li>
            <li>Cart</li>
            <li>Top rated</li>
          </ul>
        </div>
        <div>
        <h2 className='text-sky-400'>Policies</h2>
          <ul>
          <li>h</li>
            <li>h</li>
            <li>h</li>
            <li>h</li>
          </ul>
        </div>
        
      </div>
      <hr className='my-6'/>
      <p className='text-center text-white'>Created with  <i className="fa-solid fa-heart text-red-700 text-xl "></i>  by shreyas</p>
      <p className='text-center font-mono text-orange-300'>2024 github</p>
      </section>
    </>
  )
}
