import React from 'react'
import {Container,Button} from './index'
import sofa from '../assets/sofa.jpg'

function Hero() {
  return (
    <Container>
        <div className = "bg-gray-100 px-4 tracking-tighter pt-8 text-gray-700 py-6 sm:px-20 sm:pt-16">
            <div className = "grid grid-rows-2 grid-cols-1 sm:grid-cols-2 sm:grid-rows-1">
                <div className = "flex flex-col justify-center order-2 sm:order-none items-center sm:items-start sm:w-3/4">
                    <span className = "pb-2 text-xl font-light text-black sm:pb-8">Featured Advertisements:</span>
                    <span className = "text-orange-300 font-extrabold text-6xl sm:text-6xl lg:text-7xl xl:text-8xl">Furniture</span>
                    <span className = "text-center sm:text-start">A sofa is a versatile and comfortable piece of furniture designed for seating multiple people. Typically found in living rooms, it features a cushioned seat, backrest, and armrests.</span>
                    <span className= "text-2xl font-extrabold text-black mt-10 mb-4 tracking-wider">$400</span>
                    <Button>View Ad</Button>
                </div>
                <div className = "bg-gray-100 flex justify-center items-center rounded-md h-[90%] sm:h-full">
                    <img className = "h-[95%] rounded-sm object-cover" src = {sofa}/>
                </div>
            </div>
            <div className = "h-10 bg-gray-100 flex justify-center items-center gap-5 text-orange-400">
                <button className = "bg-orange-400 rounded-full w-6">.</button>
                <button className = "bg-orange-400 rounded-full w-6">.</button>
                <button className = "bg-orange-400 rounded-full w-6">.</button>
            </div>
        
        </div>
    </Container>

  )
}

export default Hero

