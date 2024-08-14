export default function About() {
  return (
    <>
    <section className='page flex items-start pt-16 justify-center'>

      
      <div className='sm:w-1/3 w-11/12'>
      <div className='w-full flex items-center justify-center my-5'>
      <img src={require('../Assets/Logo.png')} className="w-56" alt="" />
      </div>
      <p className='text-justify font-semibold'>Kick Street is an e-commerce platform specializing in the sale of sneakers, developed using MERN stack. The design of the user interface is simple, easy-to-navigate ,effective and is designed to be responsive. Integrated with Cloudinary for image storage and Razorpay for payment processing.</p>
      <p className='my-3 font-mono text-indigo-600'><span className='text-black underline '>Built using</span> React, Redux, Tailwind CSS, Node Js, Express Js, Mongo DB, Razorpay, Cloudinary, Chart Js, Multer.</p>
      <div className='flex items-center justify-center'>
        <a href='https://github.com/ShreyasGanesh911/kick-street' rel="noreferrer" target='_blank' className='border bg-black text-white py-2 px-3 rounded text-lg hover:text-indigo-400'>Repository</a>
      </div>
      </div>
     </section> 

  
    </>
  )
}
