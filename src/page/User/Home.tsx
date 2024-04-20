import React from 'react'
import Carousel from '../../components/CarouselDiv'
import "../../Styles/Home.css"
import Card from '../../components/Card'
export default function Home() {
  return (
    <>
     <section className='page displayFlex flex-col '>
      <Carousel />
      <div className='container-div py-20 w-4/5'>
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
        <Card/>
      </div>
      
     </section>
    </>
  )
}
