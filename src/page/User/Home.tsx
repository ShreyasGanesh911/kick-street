import Carousel from '../../components/CarouselDiv'
import "../../Styles/Home.css"
import Card from '../../components/Card'
import { Link } from 'react-router-dom'
export default function Home() {
  return (
    <>
     <section className='page displayFlex flex-col relative'>
      <Carousel />
      <div className='container-div py-20 w-full'>
       <Link to='/product/45'> <Card/></Link>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
      </div>
      <div className='mb-14'><Link to='/all'><button className='border p-4 font-medium border-black text-lg hover:bg-gray-500 '>View all</button></Link></div>
      <h2 className='w-3/4 text-3xl'>Shop by category</h2>
      <div className='container-div py-20 w-3/4 text-white'>
        <div className='w-72 h-72 bg-black flex justify-center items-center text-2xl'>
          Men
        </div>
        <div className='w-72 h-72 bg-black flex justify-center items-center text-2xl'>Women</div>
        <div className='w-72 h-72 bg-black flex justify-center items-center text-2xl'>Trending</div>
      </div>
      <div></div>
     </section>
   
    </>
  )
}
