import Carousel from '../../components/CarouselDiv'
import "../../Styles/Home.css"
import Card from '../../components/Card'
import { Link } from 'react-router-dom'
export default function Home() {
  return (
    <>
     <section className='page displayFlex flex-col relative'>
      <Carousel />
      <div className='container-div py-20 w-4/5'>
      
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
        <Card/>
        <Card/>
        <Card/>
      </div>
      
     </section>
   
    </>
  )
}
