import img from "../Assets/Shoe.webp"
export default function Card() {
  return (
<>
        <div className=' border-b-2 border-slate-300 item-container my-8'> 
          <div className='h-3/4 overflow-hidden'>
            <img src={img} className="object-contain overflow-hidden" alt="" />
          </div>
          <div className='  h-1/4  flex items-center flex-col justify-evenly'> 
            <p className="font-thin">Air Jordan 1 Low 'Bred Toe 2.0'</p>
            <p >Price : <span className="font-semibold">Rs. 9999</span> </p>
          </div>
        </div>
</>
  )
}
